var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Host, Listen, Prop, State, Event, Watch, Method } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
import { KeyboardEventProcessorBuilder } from "../../../core/keyboard/processor/KeyboardEventProcessorBuilder";
import { Keyboard } from "../../../core/keyboard/Keyboard";
import { NavigationDirectionEnum } from "../../../core/keyboard/NavigationDirectionEnum";
import { ReflectionUtils } from "../../../core/reflection/ReflectionUtils";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
export class SearchComboboxComponent {
    constructor() {
        /**
         * State Variables
         */
        this.focused = false;
        this.expanded = false;
        /**
         * Public Properties API
         */
        this.autoComplete = false;
        this.ariaLabelledby = StringUtils.empty();
        this.ariaLabel = StringUtils.empty();
        this.languageJson = StringUtils.empty();
        this.languageString = StringUtils.empty();
        this.searchFunctionRef = StringUtils.empty();
        this.value = '';
        /**
         * Prop Lifecycle Events
         */
        this.activeIndex = -1;
    }
    activeIndexChange(activeIndex) {
        if (this.autoComplete && activeIndex != -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
        }
    }
    /**
     * Component Lifecycle Events
     */
    componentWillLoad() {
        if (StringUtils.isEmpty(this.hostElement.id)) {
            throw new Error(`${SearchComboboxComponent.TAG_NAME} must have a valid id.`);
        }
        if (this.searchFunctionRef) {
            ReflectionUtils.getObjectReference(this.searchFunctionRef, window).then((searchFunction) => {
                this.searchFunction = searchFunction;
            });
        }
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["search"]);
        this.initKeyboardEventProcessor();
    }
    /**
     * Listeners
     */
    onClick(evt) {
        this.focused = this.expanded = false;
        evt.target.focus();
    }
    /**
     * Public Methods API
     */
    setFocus() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.input) {
                this.input.focus();
            }
            return Promise.resolve();
        });
    }
    getInputElement() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.input);
        });
    }
    setSearchSuggestions(suggestions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (suggestions) {
                this.SearchSuggestion = suggestions;
                this.expanded = this.SearchSuggestion.length > 0;
            }
        });
    }
    /**
     * Local Methods
     */
    onFocus() {
        this.focused = true;
        this.sntFocus.emit();
        this.updateSearchSuggestions();
    }
    onInput(evt) {
        const input = evt.target;
        if (input) {
            this.value = input.value;
            this.userInput = input.value;
        }
        this.updateSearchSuggestions();
        this.sntInput.emit(evt);
    }
    onBlur() {
        if (!this.expanded) {
            this.focused = false;
        }
    }
    onListboxClick(evt) {
        if (evt.target) {
            if (evt.target.nodeName == "LI") {
                this.activeIndex = evt.target.dataset.index;
                this.selectItem();
                this.focused = false;
            }
        }
    }
    selectItem() {
        if (this.activeIndex !== -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
            this.expanded = false;
        }
    }
    clear() {
        this.expanded = false;
        this.value = StringUtils.empty();
    }
    dismiss() {
        this.focused = this.expanded = false;
    }
    updateSearchSuggestions() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.searchFunction) {
                this.SearchSuggestion = yield this.searchFunction(this.input.value, LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, 10);
                this.expanded = this.SearchSuggestion.length > 0;
            }
        });
    }
    initKeyboardEventProcessor() {
        this.keyboardEventProcessor = KeyboardEventProcessorBuilder.newInstance()
            .withKey(Keyboard.ARROW_UP, () => this.setNextActiveIndex(NavigationDirectionEnum.BACKWARDS))
            .withKey(Keyboard.ARROW_DOWN, () => this.setNextActiveIndex(NavigationDirectionEnum.FORWARDS))
            .withKey(Keyboard.HOME, () => this.setNextActiveIndex(NavigationDirectionEnum.FIRST))
            .withKey(Keyboard.END, () => this.setNextActiveIndex(NavigationDirectionEnum.LAST))
            .withKey(Keyboard.ENTER, () => this.submit())
            .withKey(Keyboard.ESCAPE, () => this.clear())
            .withKey(Keyboard.TAB, () => this.dismiss())
            .build();
    }
    processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
    setNextActiveIndex(direction) {
        if (direction == NavigationDirectionEnum.BACKWARDS) {
            if (this.activeIndex <= 0) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex -= 1;
            }
        }
        else if (direction == NavigationDirectionEnum.FORWARDS) {
            if (this.activeIndex >= this.SearchSuggestion.length - 1) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex += 1;
            }
        }
        else if (direction == NavigationDirectionEnum.FIRST) {
            this.activeIndex = 0;
        }
        else if (direction == NavigationDirectionEnum.LAST) {
            this.activeIndex = this.SearchSuggestion.length - 1;
        }
    }
    highlightPattern(text, pattern) {
        const splitText = text.split(pattern);
        if (splitText.length <= 1) {
            return text;
        }
        const matches = text.match(pattern);
        return splitText.reduce((arr, element, index) => (matches[index] ? [
            ...arr,
            element,
            h("b", null, matches[index]),
        ] : [...arr, element]), []);
    }
    ;
    submit() {
        this.selectItem();
        if (this.activeIndex != -1) {
            window.location.href = this.SearchSuggestion[this.activeIndex].url;
        }
        else {
            this.sntSearchSubmitted.emit({ keywords: this.value });
            this.expanded = false;
        }
    }
    restoreUserInput() {
        this.value = this.userInput;
    }
    render() {
        const comboboxId = this.hostElement.id ? `${this.hostElement.id}-combobox` : null;
        const textboxId = this.hostElement.id ? `${this.hostElement.id}-textbox` : null;
        const listboxId = this.hostElement.id ? `${this.hostElement.id}-listbox` : null;
        const resultItemPrefix = "result-item-";
        return (h(Host, { class: {
                'search-combobox-has-focus': this.focused,
                'search-combobox-is-expanded': this.expanded
            } },
            h("snt-layout", { padding: this.padding },
                h("div", { class: "search-container" },
                    h("div", { role: "combobox", id: comboboxId, "aria-haspopup": "listbox", "aria-owns": listboxId, "aria-expanded": this.expanded.toString(), class: "search-input-area" },
                        h("snt-icon", { styleClasses: "iconNavSearch" }),
                        StringUtils.notEmpty(this.ariaLabelledby) ?
                            h("label", { htmlFor: textboxId, id: this.ariaLabelledby, class: "sr-only" }, this.languageVariables.get("search")) : null,
                        h("input", { type: "search", id: textboxId, role: "textbox", "aria-labelledby": this.ariaLabelledby || null, "aria-autocomplete": "both", "aria-controls": listboxId, "aria-activedescendant": this.activeIndex >= 0 ? resultItemPrefix + this.activeIndex : null, onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyDown: this.processKeyboardEvent.bind(this), placeholder: this.languageVariables.get("search"), ref: elem => (this.input = elem), value: this.value, autoComplete: "off" })),
                    h("ul", { id: listboxId, role: "listbox", class: "search-results-area", onClick: this.onListboxClick.bind(this) }, (this.focused && this.SearchSuggestion && this.SearchSuggestion.length > 0) ?
                        this.SearchSuggestion.map((SearchSuggestionItem, index) => h("li", { role: "option", "aria-selected": index == this.activeIndex, "aria-label": this.languageVariables.get("link to") + SearchSuggestionItem.title, id: resultItemPrefix + index, class: {
                                'result': true,
                                'result-is-focused': index == this.activeIndex
                            }, "data-index": index },
                            h("a", { href: SearchSuggestionItem.url }, this.highlightPattern(SearchSuggestionItem.title, new RegExp(this.input.value, 'ig')))))
                        : null)),
                this.focused && this.expanded ? h("snt-backdrop", null) : null)));
    }
    static get is() { return "snt-search-combobox"; }
    static get originalStyleUrls() { return {
        "$": ["search-combobox-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-combobox-component.css"]
    }; }
    static get properties() { return {
        "autoComplete": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Public Properties API"
            },
            "attribute": "auto-complete",
            "reflect": false,
            "defaultValue": "false"
        },
        "ariaLabelledby": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "aria-labelledby",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "ariaLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "aria-label",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "languageJson": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "language-json",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "languageString": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "language-string",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "searchFunctionRef": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "search-function-ref",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'none' | 'top-only' | 'bottom-only' | 'remove-sides' | 'vertical-only'",
                "resolved": "\"bottom-only\" | \"none\" | \"remove-sides\" | \"top-only\" | \"vertical-only\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": true
        },
        "activeIndex": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Prop Lifecycle Events"
            },
            "attribute": "active-index",
            "reflect": false,
            "defaultValue": "-1"
        }
    }; }
    static get states() { return {
        "focused": {},
        "expanded": {},
        "SearchSuggestion": {}
    }; }
    static get events() { return [{
            "method": "sntInput",
            "name": "sntInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Events Section"
            },
            "complexType": {
                "original": "KeyboardEvent",
                "resolved": "KeyboardEvent",
                "references": {
                    "KeyboardEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "sntFocus",
            "name": "sntFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "sntBlur",
            "name": "sntBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "sntSearchSubmitted",
            "name": "sntSearchSubmitted",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "setFocus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Public Methods API",
                "tags": []
            }
        },
        "getInputElement": {
            "complexType": {
                "signature": "() => Promise<HTMLInputElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLInputElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLInputElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setSearchSuggestions": {
            "complexType": {
                "signature": "(suggestions: Array<SearchSuggestion>) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Array": {
                        "location": "global"
                    },
                    "SearchSuggestion": {
                        "location": "import",
                        "path": "../../../core/search/SearchSuggestion"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostElement"; }
    static get watchers() { return [{
            "propName": "activeIndex",
            "methodName": "activeIndexChange"
        }]; }
    static get listeners() { return [{
            "name": "sntBackdropTap",
            "method": "onClick",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
SearchComboboxComponent.TAG_NAME = "snt-search-combobox";
