import { Component, Prop, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class SearchResultListComponent {
    constructor() {
        this.searchResultList = [];
        this.searchResultListJson = StringUtils.empty();
        this.noResultMsg = "No results found";
        this.separator = false;
    }
    render() {
        var content;
        if (StringUtils.hasValue(this.searchResultListJson) && this.searchResultListJson != "[]") {
            this.searchResultList = JSON.parse(this.searchResultListJson);
            content = (h("div", { class: `search-result-list-wrapper ${this.separator ? 'separator' : ''}`, "aria-live": "polite" },
                h("snt-layout", null, this.searchResultList.map(faq => (h("snt-search-result", { searchResult: faq }))))));
        }
        else {
            content = (h("snt-layout", null,
                h("h4", null, this.noResultMsg)));
        }
        return (content);
    }
    static get is() { return "snt-search-result-list"; }
    static get originalStyleUrls() { return {
        "$": ["./search-result-list-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-result-list-component.css"]
    }; }
    static get properties() { return {
        "searchResultListJson": {
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
            "attribute": "search-result-list-json",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "noResultMsg": {
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
            "attribute": "no-result-msg",
            "reflect": true,
            "defaultValue": "\"No results found\""
        },
        "separator": {
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
            "attribute": "separator",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
