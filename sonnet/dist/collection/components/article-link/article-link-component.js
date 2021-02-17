import { Component, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class ArticleLinkComponent {
    constructor() {
        this.hiddenTitle = StringUtils.empty();
    }
    render() {
        return (h("a", { href: this.href, "aria-label": this.ariaLabel, "hidden-title": this.hiddenTitle },
            h("span", { class: "article-link" }, this.copy)));
    }
    static get is() { return "snt-article-link"; }
    static get originalStyleUrls() { return {
        "$": ["article-link-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["article-link-component.css"]
    }; }
    static get properties() { return {
        "href": {
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
            "attribute": "href",
            "reflect": true
        },
        "copy": {
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
            "attribute": "copy",
            "reflect": true
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
            "reflect": true
        },
        "hiddenTitle": {
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
            "attribute": "hidden-title",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
}
ArticleLinkComponent.TAG_NAME = "snt-article-link";
