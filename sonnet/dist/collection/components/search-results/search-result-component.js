import { Component, Prop, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class SearchResultComponent {
    constructor() {
        this.descriptionText = StringUtils.empty();
    }
    componentWillRender() {
        var elem = document.createElement('p');
        elem.innerHTML = this.searchResult.description;
        this.descriptionText = elem.innerText || "";
    }
    render() {
        const categoryLabel = StringUtils.hasValue(this.searchResult.category) ?
            h("p", null, this.searchResult.category) : null;
        const descriptionText = StringUtils.hasValue(this.searchResult.description) ?
            h("p", { class: "description", innerHTML: this.descriptionText }) : null;
        return (h("div", { class: "search-result-wrapper" },
            categoryLabel,
            h("snt-link", { "class-names": "theme-link theme-action", href: this.searchResult.url },
                h("div", { class: "link-content", innerHTML: this.searchResult.title })),
            descriptionText));
    }
    static get is() { return "snt-search-result"; }
    static get originalStyleUrls() { return {
        "$": ["./search-result-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-result-component.css"]
    }; }
    static get properties() { return {
        "searchResult": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "SearchResult",
                "resolved": "SearchResult",
                "references": {
                    "SearchResult": {
                        "location": "import",
                        "path": "./search-result"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
