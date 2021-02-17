'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const ReflectionUtils = require('./ReflectionUtils-89506fdc.js');
const LanguageUtils = require('./LanguageUtils-fbb05914.js');
const NavigationDirectionEnum = require('./NavigationDirectionEnum-5d962e1f.js');

const searchComboboxComponentCss = "snt-search-combobox{display:block;position:relative;background-color:#ffffff;width:100%;background-color:transparent}snt-search-combobox input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:2.525rem;font-size:0.875rem;line-height:1.25rem}snt-search-combobox input::-webkit-search-cancel-button{position:relative;right:11px;-webkit-filter:brightness(0.6) contrast(1.03) grayscale(1);filter:brightness(0.6) contrast(1.03) grayscale(1)}snt-search-combobox snt-button button{display:none;position:absolute;right:0.5rem;top:0;bottom:0;margin:auto;font-size:1.125rem;line-height:1.125rem;color:#323232}snt-search-combobox snt-layout .spacings{overflow:unset}snt-search-combobox .search-container{position:relative}snt-search-combobox :focus{outline:none}snt-search-combobox snt-button{display:none}snt-search-combobox snt-icon{margin:0 0.625rem 0 1.25rem}snt-search-combobox input{border:none;border-radius:0;background-color:transparent}snt-search-combobox ul{list-style:none;margin:0;padding:0}snt-search-combobox ul li a{text-decoration:none;color:#323232;font-size:14px;line-height:23px}snt-search-combobox .search-input-area{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #b2b2b2;border-radius:25px}snt-search-combobox .search-input-area:hover{border-color:#147582}snt-search-combobox .search-results-area{z-index:10;display:none;color:#323232;position:absolute;left:0;right:0;top:100%;width:100%;padding:0.625rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;border:1px solid transparent;border-top:none;border-bottom-left-radius:25px;border-bottom-right-radius:25px;background-color:white;height:400px;overflow-y:scroll}@media (min-width: 768px){snt-search-combobox .search-results-area{height:auto;overflow-y:auto}}snt-search-combobox .search-results-area:before{position:absolute;content:\" \";height:1px;margin-right:auto;margin-left:auto;top:0;left:0;right:0;width:calc(100% - 2rem);background-color:#147582}snt-search-combobox .result{padding:0.3125rem 0.625rem;font-size:14px;line-height:23px;border-bottom:1px solid #e5e5e5}snt-search-combobox .result:last-child{border-bottom:none}snt-search-combobox.search-combobox-has-focus snt-backdrop{display:block;background-color:rgba(51, 51, 51, 0.75);z-index:5}snt-search-combobox.search-combobox-has-focus .search-input-area{border:3px solid #147582;margin:-2px}snt-search-combobox .result{cursor:default}snt-search-combobox .result:hover,snt-search-combobox .result.result-is-focused{background-color:#f8f8f8}snt-search-combobox .result b{pointer-events:none}snt-search-combobox .result:active{background-color:#147582}snt-search-combobox .result:active a{color:white}snt-search-combobox.theme-default .search-input-area{background-color:#ffffff;border:1px solid #b2b2b2}snt-search-combobox.theme-default .search-input-area:hover{border-color:#147582}snt-search-combobox.theme-default.search-combobox-has-focus .search-input-area{border:3px solid #147582}snt-search-combobox.theme-neutral .search-input-area{background-color:#ffffff;border:1px solid #e5e5e5}snt-search-combobox.theme-neutral .search-input-area:hover{border-color:#6ebac5}snt-search-combobox.theme-neutral.search-combobox-has-focus .search-input-area{border:3px solid #6ebac5}snt-search-combobox.search-combobox-is-expanded.theme-neutral .search-input-area,snt-search-combobox.search-combobox-is-expanded.theme-default .search-input-area{border:1px solid transparent;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none;pointer-events:all;z-index:10;position:relative;margin:0px}snt-search-combobox.search-combobox-is-expanded.theme-neutral .search-results-area,snt-search-combobox.search-combobox-is-expanded.theme-default .search-results-area{display:block}@media screen and (device-aspect-ratio: 375/667){input[type=search]{font-size:14px}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SearchComboboxComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sntInput = index.createEvent(this, "sntInput", 7);
        this.sntFocus = index.createEvent(this, "sntFocus", 7);
        this.sntBlur = index.createEvent(this, "sntBlur", 7);
        this.sntSearchSubmitted = index.createEvent(this, "sntSearchSubmitted", 7);
        /**
         * State Variables
         */
        this.focused = false;
        this.expanded = false;
        /**
         * Public Properties API
         */
        this.autoComplete = false;
        this.ariaLabelledby = StringUtils.StringUtils.empty();
        this.ariaLabel = StringUtils.StringUtils.empty();
        this.languageJson = StringUtils.StringUtils.empty();
        this.languageString = StringUtils.StringUtils.empty();
        this.searchFunctionRef = StringUtils.StringUtils.empty();
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
        if (StringUtils.StringUtils.isEmpty(this.hostElement.id)) {
            throw new Error(`${SearchComboboxComponent.TAG_NAME} must have a valid id.`);
        }
        if (this.searchFunctionRef) {
            ReflectionUtils.ReflectionUtils.getObjectReference(this.searchFunctionRef, window).then((searchFunction) => {
                this.searchFunction = searchFunction;
            });
        }
        this.languageVariables = LanguageUtils.LanguageUtils.getVariablesFromString(this.languageString, ["search"]);
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
        this.value = StringUtils.StringUtils.empty();
    }
    dismiss() {
        this.focused = this.expanded = false;
    }
    updateSearchSuggestions() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.searchFunction) {
                this.SearchSuggestion = yield this.searchFunction(this.input.value, LanguageUtils.LanguageUtils.isFrench() ? LanguageUtils.LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LanguageUtils.LANGUAGE_ID.en, 10);
                this.expanded = this.SearchSuggestion.length > 0;
            }
        });
    }
    initKeyboardEventProcessor() {
        this.keyboardEventProcessor = NavigationDirectionEnum.KeyboardEventProcessorBuilder.newInstance()
            .withKey(NavigationDirectionEnum.Keyboard.ARROW_UP, () => this.setNextActiveIndex(NavigationDirectionEnum.NavigationDirectionEnum.BACKWARDS))
            .withKey(NavigationDirectionEnum.Keyboard.ARROW_DOWN, () => this.setNextActiveIndex(NavigationDirectionEnum.NavigationDirectionEnum.FORWARDS))
            .withKey(NavigationDirectionEnum.Keyboard.HOME, () => this.setNextActiveIndex(NavigationDirectionEnum.NavigationDirectionEnum.FIRST))
            .withKey(NavigationDirectionEnum.Keyboard.END, () => this.setNextActiveIndex(NavigationDirectionEnum.NavigationDirectionEnum.LAST))
            .withKey(NavigationDirectionEnum.Keyboard.ENTER, () => this.submit())
            .withKey(NavigationDirectionEnum.Keyboard.ESCAPE, () => this.clear())
            .withKey(NavigationDirectionEnum.Keyboard.TAB, () => this.dismiss())
            .build();
    }
    processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
    setNextActiveIndex(direction) {
        if (direction == NavigationDirectionEnum.NavigationDirectionEnum.BACKWARDS) {
            if (this.activeIndex <= 0) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex -= 1;
            }
        }
        else if (direction == NavigationDirectionEnum.NavigationDirectionEnum.FORWARDS) {
            if (this.activeIndex >= this.SearchSuggestion.length - 1) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex += 1;
            }
        }
        else if (direction == NavigationDirectionEnum.NavigationDirectionEnum.FIRST) {
            this.activeIndex = 0;
        }
        else if (direction == NavigationDirectionEnum.NavigationDirectionEnum.LAST) {
            this.activeIndex = this.SearchSuggestion.length - 1;
        }
    }
    highlightPattern(text, pattern) {
        const splitText = text.split(pattern);
        if (splitText.length <= 1) {
            return text;
        }
        const matches = text.match(pattern);
        return splitText.reduce((arr, element, index$1) => (matches[index$1] ? [
            ...arr,
            element,
            index.h("b", null, matches[index$1]),
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
        return (index.h(index.Host, { class: {
                'search-combobox-has-focus': this.focused,
                'search-combobox-is-expanded': this.expanded
            } }, index.h("snt-layout", { padding: this.padding }, index.h("div", { class: "search-container" }, index.h("div", { role: "combobox", id: comboboxId, "aria-haspopup": "listbox", "aria-owns": listboxId, "aria-expanded": this.expanded.toString(), class: "search-input-area" }, index.h("snt-icon", { styleClasses: "iconNavSearch" }), StringUtils.StringUtils.notEmpty(this.ariaLabelledby) ?
            index.h("label", { htmlFor: textboxId, id: this.ariaLabelledby, class: "sr-only" }, this.languageVariables.get("search")) : null, index.h("input", { type: "search", id: textboxId, role: "textbox", "aria-labelledby": this.ariaLabelledby || null, "aria-autocomplete": "both", "aria-controls": listboxId, "aria-activedescendant": this.activeIndex >= 0 ? resultItemPrefix + this.activeIndex : null, onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyDown: this.processKeyboardEvent.bind(this), placeholder: this.languageVariables.get("search"), ref: elem => (this.input = elem), value: this.value, autoComplete: "off" })), index.h("ul", { id: listboxId, role: "listbox", class: "search-results-area", onClick: this.onListboxClick.bind(this) }, (this.focused && this.SearchSuggestion && this.SearchSuggestion.length > 0) ?
            this.SearchSuggestion.map((SearchSuggestionItem, index$1) => index.h("li", { role: "option", "aria-selected": index$1 == this.activeIndex, "aria-label": this.languageVariables.get("link to") + SearchSuggestionItem.title, id: resultItemPrefix + index$1, class: {
                    'result': true,
                    'result-is-focused': index$1 == this.activeIndex
                }, "data-index": index$1 }, index.h("a", { href: SearchSuggestionItem.url }, this.highlightPattern(SearchSuggestionItem.title, new RegExp(this.input.value, 'ig')))))
            : null)), this.focused && this.expanded ? index.h("snt-backdrop", null) : null)));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "activeIndex": ["activeIndexChange"]
    }; }
};
SearchComboboxComponent.TAG_NAME = "snt-search-combobox";
SearchComboboxComponent.style = searchComboboxComponentCss;

class UrlUtils {
    static updateQueryStringParameter(url, key, value) {
        if (!url)
            url = window.location.href;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash;
        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }
    ;
}

const searchTypeaheadComponentCss = "snt-search-typeahead{position:relative;width:100%;max-width:47rem}snt-search-typeahead snt-search-combox .search-input-area{border-color:#e5e5e5}";

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SearchTypeaheadComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.baseHref = StringUtils.StringUtils.empty();
        this.searchHref = this.baseHref;
        this.languageStrings = {};
        this.languageJson = StringUtils.StringUtils.empty();
    }
    handleSearchButtonClick(evt) {
        if (evt.target == this.searchSntButton) {
            window.location.href = this.searchHref;
        }
    }
    onKeyDown() {
        window.location.href = this.searchHref;
    }
    onInput() {
        return __awaiter$1(this, void 0, void 0, function* () {
            const input = yield this.searchComboBox.getInputElement();
            this.searchHref = UrlUtils.updateQueryStringParameter(this.baseHref, 'es', encodeURIComponent(input.value));
        });
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        this.baseHref = this.languageStrings["searchUrl"];
    }
    render() {
        return (index.h("div", { class: "search-input-area" }, index.h("snt-search-combobox", { ref: elem => (this.searchComboBox = elem), id: this.searchComboboxId, class: "theme-neutral", "auto-complete": true, padding: "none", onSntInput: () => __awaiter$1(this, void 0, void 0, function* () { yield this.onInput(); }), onSntSearchSubmitted: this.onKeyDown.bind(this), "language-string": this.languageJson, "search-para-name": "es" })));
    }
};
SearchTypeaheadComponent.TAG_NAME = "snt-search-typeahead";
SearchTypeaheadComponent.style = searchTypeaheadComponentCss;

exports.snt_search_combobox = SearchComboboxComponent;
exports.snt_search_typeahead = SearchTypeaheadComponent;
