var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Host, h, Prop, Watch, State, Method, Element, Event } from "@stencil/core";
import { ItemConfiguration } from "../../core/components/item/domain/ItemConfiguration";
import { Item } from "../../core/components/item/domain/Item";
import { KeyboardEventProcessorBuilder } from "../../core/keyboard/processor/KeyboardEventProcessorBuilder";
import { NavigationDirectionEnum } from "../../core/keyboard/NavigationDirectionEnum";
import { ItemUtils } from "../../core/components/item/ItemUtils";
import { Keyboard } from "../../core/keyboard/Keyboard";
export class DropdownComponent {
    constructor() {
        this.opened = false;
        this.required = false;
        this.keyboardEventProcessor = KeyboardEventProcessorBuilder.newInstance()
            .withKeys([Keyboard.TAB, Keyboard.ESCAPE], () => this.close())
            .withKeys([Keyboard.ENTER, Keyboard.SPACE], () => this.toggle())
            .withKey(Keyboard.ARROW_UP, () => this.processArrowKeys(NavigationDirectionEnum.BACKWARDS))
            .withKey(Keyboard.ARROW_DOWN, () => this.processArrowKeys(NavigationDirectionEnum.FORWARDS))
            .build();
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            this.opened = true;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.opened = false;
        });
    }
    toggle() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.isOpen()) == true) {
                this.selectedItem = this.currentItem;
            }
            this.opened = !this.opened;
        });
    }
    isOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.opened;
        });
    }
    setValue(value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedItem = this.items.find(item => item.key == value);
        });
    }
    getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.selectedItem.key;
        });
    }
    setIndex(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedItem = this.items[index];
        });
    }
    getIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.items.indexOf(this.selectedItem);
        });
    }
    handleModalOpenAndClose(opened) {
        if (opened) {
            this.currentItem = (this.selectedItem != undefined) ? this.selectedItem : this.getNextAvailableItem(NavigationDirectionEnum.FORWARDS);
        }
    }
    handleSelectedItemChange() {
        this.hiddenEl.dispatchEvent(new CustomEvent('blur'));
        this.dropdownSelectionChange.emit();
    }
    componentWillLoad() {
        this.initItemConfiguration();
        this.selectedItem = this.items.find(item => item.selected == true);
    }
    componentDidUpdate() {
        if (!this.opened) {
            if (document.activeElement != this.dropdownButtonElement) {
                this.dropdownButtonElement.focus();
            }
        }
    }
    componentDidLoad() {
        window.addEventListener('click', () => {
            if (document.activeElement != this.dropdownButtonElement) {
                this.close();
            }
        });
    }
    handleClick(item) {
        this.selectedItem = item;
        this.currentItem = item;
        this.textValueElement.classList.add('chosen');
    }
    render() {
        const selectedItemId = (this.selectedItem != undefined) ? `${this.name}-item-${this.selectedItem.value}` : "";
        const selectItemLabelId = `${this.name}-dropdown-selected-item-label`;
        return (h(Host, { class: "dropdown", id: `${this.name}-dropdown` },
            h("div", { class: `dropdown-container show-label-xs ${(this.opened) ? 'opened' : ''}`, "register-callback": "DropdownComponent.registerContainer" // TODO: Should register itself with a container event
                , onClick: this.toggle.bind(this), onKeyDown: this.processKeyboardEvent.bind(this) },
                h("div", { id: `${this.name}-button-dropdown`, class: `btn-link dropdown-display-btn ${(this.opened) ? 'open' : ''}`, role: "listbox", tabindex: "0", "aria-activedescendant": (this.selectedItem) ? selectedItemId : false, "aria-label": `${this.labelText}`, "aria-multiselectable": "false", "aria-disabled": "false", "aria-required": "true", "aria-expanded": (this.opened) ? "true" : false, ref: (thisElement) => this.dropdownButtonElement = thisElement },
                    h("div", { id: selectItemLabelId, ref: (el) => this.textValueElement = el, class: `text-overflow single-line ${this.selectedItem ? 'chosen' : ''}` }, (this.selectedItem) ? this.selectedItem.value : this.placeholderText),
                    h("div", { class: "icon-container icon-font iconTriangle", "aria-hidden": "true", role: "presentation" })),
                h("div", { class: "xs-navbar-header options-header" },
                    h("label", { id: `${this.name}-dropdown-label`, class: "pull-left ng-binding" }, this.labelText),
                    h("button", { type: "button", class: "modal-close btn btn-text btn-text-w-span xs-navbar--close-btn pull-right right-col-off no-link-animation", "aria-labelledby": `${this.name}-close-label ${this.name}-dropdown-label`, tabindex: "0" },
                        h("span", { id: `${this.name}-close-label`, class: "strong label" }, "Close"),
                        h("span", { class: "sr-only" }, "Close Icon"),
                        h("snt-icon", { styleClasses: "iconNavClose" }))),
                h("ul", { id: `${this.name}-insurance-type-dropdown-items`, class: "items menu list-unstyled text-left", role: "listbox", tabindex: "0", "aria-labelledby": selectItemLabelId, "aria-activedescendant": selectedItemId }, this.items.map((item) => h("li", { class: `dropdown--menu-item click text-left no-margin
              ${(this.selectedItem) == item ? "selected" : ""}
              ${(item == this.currentItem) ? "highlighted" : ""}
              ${(item.disabled == true) ? "disabled" : ""}` },
                    h("div", { id: selectedItemId, role: "option", tabindex: "-1", "aria-selected": (this.selectedItem == item) ? "true" : false, onClick: () => { this.handleClick(item); }, ref: (thisElement) => (this.currentItem == item && thisElement.focus()) }, item.value))))),
            h("input", { class: "hidden-textbox", tabindex: "-1", type: "text", "data-field": this.name, id: this.name, required: this.required, ref: (el) => this.hiddenEl = el, value: (this.selectedItem) ? this.selectedItem.key : "" })));
    }
    initItemConfiguration() {
        const configurationObject = this.itemConfiguration || ItemUtils.generateConfigurationFromItemOptions(this.element);
        if (configurationObject) {
            const configurations = configurationObject.getConfigurations();
            if (configurations) {
                this.items = Array.from(configurations.values());
            }
        }
    }
    processArrowKeys(direction) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.isOpen()) == false) {
                this.open();
            }
            else {
                this.currentItem = this.getNextAvailableItem(direction);
            }
        });
    }
    getNextAvailableItem(direction, currentItem = this.currentItem) {
        const currentIndex = this.items.indexOf(currentItem);
        const maxIndex = this.items.length - 1;
        let nextItem;
        let nextIndex;
        if (direction == NavigationDirectionEnum.BACKWARDS) {
            (currentIndex <= 0) ? nextIndex = maxIndex : nextIndex = currentIndex - 1;
        }
        else if (direction == NavigationDirectionEnum.FORWARDS) {
            (currentIndex >= maxIndex) ? nextIndex = 0 : nextIndex = currentIndex + 1;
        }
        nextItem = this.items[nextIndex];
        return (nextItem.disabled) ? this.getNextAvailableItem(direction, nextItem) : nextItem;
    }
    processKeyboardEvent(evt) {
        return __awaiter(this, void 0, void 0, function* () {
            this.keyboardEventProcessor.process(evt);
        });
    }
    static get is() { return "snt-dropdown"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-component.css"]
    }; }
    static get properties() { return {
        "opened": {
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
                "text": ""
            },
            "attribute": "opened",
            "reflect": true,
            "defaultValue": "false"
        },
        "placeholderText": {
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
            "attribute": "placeholder-text",
            "reflect": true
        },
        "labelText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label-text",
            "reflect": true
        },
        "itemConfiguration": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ItemConfiguration",
                "resolved": "ItemConfiguration",
                "references": {
                    "ItemConfiguration": {
                        "location": "import",
                        "path": "../../core/components/item/domain/ItemConfiguration"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "required": {
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
                "text": ""
            },
            "attribute": "required",
            "reflect": true,
            "defaultValue": "false"
        },
        "name": {
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
            "attribute": "name",
            "reflect": true
        }
    }; }
    static get states() { return {
        "selectedItem": {},
        "currentItem": {}
    }; }
    static get events() { return [{
            "method": "dropdownSelectionChange",
            "name": "dropdownSelectionChange",
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
        "open": {
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
                "text": "",
                "tags": []
            }
        },
        "close": {
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
                "text": "",
                "tags": []
            }
        },
        "toggle": {
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
                "text": "",
                "tags": []
            }
        },
        "isOpen": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setValue": {
            "complexType": {
                "signature": "(value: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getValue": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setIndex": {
            "complexType": {
                "signature": "(index: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getIndex": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "opened",
            "methodName": "handleModalOpenAndClose"
        }, {
            "propName": "selectedItem",
            "methodName": "handleSelectedItemChange"
        }]; }
}
DropdownComponent.TAG_NAME = "snt-dropdown";
