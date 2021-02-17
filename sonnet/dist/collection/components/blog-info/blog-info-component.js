import { Component, Prop, Element, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class SntBlogInfo {
    componentWillLoad() {
        if (StringUtils.hasValue(this.accessibilityText)) {
            this.ariaTextJson = JSON.parse(this.accessibilityText);
        }
    }
    render() {
        return (h("snt-layout", null,
            h("div", { id: "blog-info-bar" },
                h("div", { class: "left-info" },
                    h("div", { class: "schedule-info" },
                        h("span", { class: "icons-container icon-font iconCalendar" }),
                        h("p", null, this.publishedTime)),
                    h("div", { class: "read-time-info" },
                        h("span", { class: "icons-container icon-font iconClock" }),
                        h("p", null, this.timeToRead))),
                h("div", { class: "social-icons" },
                    h("div", null,
                        h("a", { href: `http://www.linkedin.com/shareArticle?mini=true&url=${this.blogLink}&title=${this.titleText}`, "aria-label": this.ariaTextJson.linkedIn },
                            h("i", { class: "icon-font iconLinkedin" }))),
                    h("div", null,
                        h("a", { href: `https://www.facebook.com/sharer/sharer.php?u=${this.blogLink}`, "aria-label": this.ariaTextJson.facebook },
                            h("i", { class: "icon-font iconFacebookPlain" }))),
                    h("div", null,
                        h("a", { href: `https://twitter.com/intent/tweet?url=${this.blogLink}&text=${this.titleText}`, "aria-label": this.ariaTextJson.twitter },
                            h("i", { class: "icon-font iconTwitter" }))),
                    h("div", null,
                        h("a", { href: `mailto:?subject=${this.titleText}&body=${this.blogLink}`, "aria-label": this.ariaTextJson.email },
                            h("i", { class: "icon-font iconMail" })))))));
    }
    static get is() { return "snt-blog-info"; }
    static get originalStyleUrls() { return {
        "$": ["./blog-info-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-info-component.css"]
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
            "reflect": false
        },
        "blogLink": {
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
            "attribute": "blog-link",
            "reflect": false
        },
        "publishedTime": {
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
            "attribute": "published-time",
            "reflect": false
        },
        "timeToRead": {
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
            "attribute": "time-to-read",
            "reflect": false
        },
        "accessibilityText": {
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
            "attribute": "accessibility-text",
            "reflect": false
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
SntBlogInfo.TAG_NAME = "snt-blog-info";
