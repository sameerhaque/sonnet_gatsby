import { Component, Prop, h } from "@stencil/core";
export class FAQBlockComponent {
    constructor() {
        this.titleText = "";
        this.bodyText = "";
        this.articlesCount = "";
        this.blockLink = "";
    }
    render() {
        return [
            h("a", { href: this.blockLink },
                h("div", { class: "faq-block-wrapper" },
                    h("h3", null, this.titleText),
                    h("div", { class: "faq-block-body" }, this.bodyText),
                    h("div", { class: "faq-articles-count" }, this.articlesCount)))
        ];
    }
    static get is() { return "snt-faq-block"; }
    static get originalStyleUrls() { return {
        "$": ["./faq-block-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["faq-block-component.css"]
    }; }
    static get properties() { return {
        "titleText": {
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
            "attribute": "title-text",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "bodyText": {
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
            "attribute": "body-text",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "articlesCount": {
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
            "attribute": "articles-count",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "blockLink": {
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
            "attribute": "block-link",
            "reflect": true,
            "defaultValue": "\"\""
        }
    }; }
}
FAQBlockComponent.TAG_NAME = "snt-faq-block";
