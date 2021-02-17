import { Component, h, Prop } from "@stencil/core";
export class FeatureLeftExample {
    constructor() {
        this.viewport = "";
    }
    render() {
        return [
            h("h1", null, "Feature Left Example"),
            h("h3", null, "HD Viewport"),
            h("host", { viewport: "extra-large" },
                h("div", { class: "col-6" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Desktop Viewport"),
            h("host", { viewport: "large" },
                h("div", { class: "col-5" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Tablet Viewport"),
            h("host", { viewport: "medium" },
                h("div", { class: "col-4" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Mobile Viewport"),
            h("host", { viewport: "small" },
                h("div", { class: "col-3" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
        ];
    }
    static get is() { return "feature-left-example"; }
    static get properties() { return {
        "viewport": {
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
            "attribute": "viewport",
            "reflect": true,
            "defaultValue": "\"\""
        }
    }; }
}
FeatureLeftExample.TAG_NAME = "feature-left-example";
