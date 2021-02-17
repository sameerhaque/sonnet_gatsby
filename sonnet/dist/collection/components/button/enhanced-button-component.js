import { Component, Element, h, Host, Listen, Event, Prop, } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
export class EnhancedButtonComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.leftIconSources)) {
            this.leftIconJson = JSON.parse(this.leftIconSources);
        }
        if (StringUtils.hasValue(this.rightIconSources)) {
            this.rightIconJson = JSON.parse(this.rightIconSources);
        }
    }
    componentDidLoad() {
        if (this.leftIconJson || this.rightIconJson) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        const iconContent = this.buildIconContent();
        const discountContent = this.buildDiscountContent();
        const linkContent = this.buildLinkContent();
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("a", { href: this.href, "aria-label": this.ariaLabel, target: this.target, id: this.linkId },
                h("div", { class: `link-panel ${StringUtils.isEmpty(this.discountText)
                        ? ""
                        : "discount"}` },
                    discountContent,
                    h("div", { class: "content-panel" },
                        iconContent,
                        h("h4", { class: "link-text" }, linkContent))))));
    }
    buildLinkContent() {
        let content = h("span", null, this.ctaText);
        if (this.target === "_blank" && StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [
                this.ctaText,
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text)),
            ];
        }
        return content;
    }
    buildDiscountContent() {
        if (StringUtils.isEmpty(this.discountText)) {
            return null;
        }
        return h("div", { class: "discount-panel" }, this.discountText);
    }
    buildIconContent() {
        if (!this.leftIconJson && !this.rightIconJson) {
            return null;
        }
        else if (!this.leftIconJson || !this.rightIconJson) {
            const iconSources = this.leftIconJson || this.rightIconJson;
            return (h("div", { class: "icon-panel" }, this.buildPictureContent(iconSources.largeIconUrl, iconSources.smallIconUrl)));
        }
        else {
            return (h("div", { class: "icon-panel" },
                this.buildPictureContent(this.leftIconJson.largeIconUrl, this.leftIconJson.smallIconUrl),
                h("div", { class: "icon plus-sign" },
                    h("i", { class: "icon-font iconPlus" })),
                this.buildPictureContent(this.rightIconJson.largeIconUrl, this.rightIconJson.smallIconUrl)));
        }
    }
    buildPictureContent(largeIconUrl, smallIconUrl) {
        return (h("div", { class: "icon" },
            h("picture", { class: "icon-image" },
                h("source", { "data-srcSet": largeIconUrl, media: "(min-width: 1024px)" }),
                h("source", { "data-srcSet": smallIconUrl, media: "(min-width: 0px)" }),
                h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
    }
    static get is() { return "snt-enhanced-button"; }
    static get originalStyleUrls() { return {
        "$": ["enhanced-button-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["enhanced-button-component.css"]
    }; }
    static get properties() { return {
        "styleClasses": {
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
            "attribute": "style-classes",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "discountText": {
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
            "attribute": "discount-text",
            "reflect": false
        },
        "ctaText": {
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
            "attribute": "cta-text",
            "reflect": false
        },
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
            "reflect": false
        },
        "target": {
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
            "attribute": "target",
            "reflect": false
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
            "reflect": false
        },
        "leftIconSources": {
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
            "attribute": "left-icon-sources",
            "reflect": false
        },
        "rightIconSources": {
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
            "attribute": "right-icon-sources",
            "reflect": false
        },
        "linkId": {
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
            "attribute": "link-id",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "sntButtonClick",
            "name": "sntButtonClick",
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
        }, {
            "method": "sntButtonKeyDown",
            "name": "sntButtonKeyDown",
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
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
EnhancedButtonComponent.TAG_NAME = "snt-enhanced-button";
