import { Component, Prop, Element, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class BlogComponent {
    constructor() {
        this.imgSrcSet = StringUtils.empty();
        this.imgAltText = "";
        this.openInNewWindow = false;
    }
    render() {
        return [
            h("a", { href: this.blogLink, target: this.openInNewWindow ? "_blank" : "_self" },
                h("div", { class: "blog-container" },
                    h("div", { class: 'blog-img' },
                        h("snt-image", { "data-src": this.imgSrc, "img-alt": this.imgAltText })),
                    h("div", { class: 'blog-tag' },
                        h("span", null, this.tagText)),
                    h("div", { class: 'blog-content' },
                        h("div", { class: "blog-title" },
                            h("div", { class: "h4" }, this.titleText))),
                    h("span", { class: "blog-min-read" }, this.timeToRead)))
        ];
    }
    static get is() { return "snt-blog"; }
    static get originalStyleUrls() { return {
        "$": ["./blog-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-component.css"]
    }; }
    static get properties() { return {
        "imgSrc": {
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
            "attribute": "img-src",
            "reflect": true
        },
        "imgSrcSet": {
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
            "attribute": "img-src-set",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "titleText": {
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
            "attribute": "title-text",
            "reflect": true
        },
        "timeToRead": {
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
            "attribute": "time-to-read",
            "reflect": true
        },
        "tagText": {
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
            "attribute": "tag-text",
            "reflect": true
        },
        "blogLink": {
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
            "attribute": "blog-link",
            "reflect": true
        },
        "imgAltText": {
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
            "attribute": "img-alt-text",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "openInNewWindow": {
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
            "attribute": "open-in-new-window",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
BlogComponent.TAG_NAME = "snt-blog";
