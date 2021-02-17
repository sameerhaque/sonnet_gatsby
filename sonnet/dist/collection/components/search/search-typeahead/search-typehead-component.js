var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, h, Listen, Prop } from "@stencil/core";
import { UrlUtils } from "../../../core/utils/UrlUtils";
import { StringUtils } from "../../../core/utils/StringUtils";
export class SearchTypeaheadComponent {
    constructor() {
        this.baseHref = StringUtils.empty();
        this.searchHref = this.baseHref;
        this.languageStrings = {};
        this.languageJson = StringUtils.empty();
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
        return __awaiter(this, void 0, void 0, function* () {
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
        ;
        this.baseHref = this.languageStrings["searchUrl"];
    }
    render() {
        return (h("div", { class: "search-input-area" },
            h("snt-search-combobox", { ref: elem => (this.searchComboBox = elem), id: this.searchComboboxId, class: "theme-neutral", "auto-complete": true, padding: "none", onSntInput: () => __awaiter(this, void 0, void 0, function* () { yield this.onInput(); }), onSntSearchSubmitted: this.onKeyDown.bind(this), "language-string": this.languageJson, "search-para-name": "es" })));
    }
    static get is() { return "snt-search-typeahead"; }
    static get originalStyleUrls() { return {
        "$": ["search-typeahead-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-typeahead-component.css"]
    }; }
    static get properties() { return {
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
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "searchComboboxId": {
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
            "attribute": "search-combobox-id",
            "reflect": false
        }
    }; }
    static get listeners() { return [{
            "name": "sntButtonClick",
            "method": "handleSearchButtonClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
SearchTypeaheadComponent.TAG_NAME = "snt-search-typeahead";
