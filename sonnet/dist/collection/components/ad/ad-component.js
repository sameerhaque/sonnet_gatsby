import { Component, Element, Host, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
export class AdComponent {
    constructor() {
        this.titleString = "";
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.iconIsSet = false;
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.iconSources)) {
            this.iconSourceJson = JSON.parse(this.iconSources);
            if (this.iconSourceJson.largeIconUrl || this.iconSourceJson.smallIconUrl) {
                this.iconIsSet = true;
            }
        }
        if (StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length > 0) {
                this.logoIsSet = true;
            }
        }
    }
    componentDidLoad() {
        if (this.logoIsSet || this.iconIsSet) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (h("div", { class: "logo" },
                h("picture", null,
                    h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }),
                    h("img", { class: "logo-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        else if (this.iconIsSet) {
            content = (h("div", { class: "icon" },
                h("picture", { class: "icon-image" },
                    h("source", { "data-srcSet": this.iconSourceJson.largeIconUrl, media: "(min-width: 1024px)" }),
                    h("source", { "data-srcSet": this.iconSourceJson.smallIconUrl, media: "(min-width: 0px)" }),
                    h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        const buttonContent = this.buildButtonContent();
        const titleContent = StringUtils.hasValue(this.titleString)
            ? h("h3", null, this.titleString)
            : null;
        return (h(Host, null,
            h("snt-layout", null,
                h("div", { class: "ad-panel" },
                    content,
                    titleContent,
                    h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                        h("slot", null)),
                    buttonContent))));
    }
    buildButtonContent() {
        if (this.href && this.buttonLabel) {
            return (h("button-link-group", null,
                h("button-link", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (h("button-link-group", null,
                h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta", "link-title": this.buttonLabel })));
        }
        else if (this.linkLabel && this.href) {
            return (h("snt-link", { "class-names": "theme-link theme-action", "aria-label": this.linkLabel, href: this.href },
                " ",
                h("span", { class: "link-content" }, this.linkLabel),
                "  "));
        }
        else {
            return null;
        }
    }
    static get is() { return "snt-ad"; }
    static get originalStyleUrls() { return {
        "$": ["./ad-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ad-component.css"]
    }; }
    static get properties() { return {
        "titleString": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "title-string",
            "reflect": true,
            "defaultValue": "\"\""
        },
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
        "iconSources": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon-sources",
            "reflect": false
        },
        "logoSources": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "logo-sources",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": true
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "target",
            "reflect": true
        },
        "buttonLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "button-label",
            "reflect": true
        },
        "linkLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "link-label",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "aria-label",
            "reflect": true
        },
        "actionReference": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "action-reference",
            "reflect": true
        },
        "actionData": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "action-data",
            "reflect": true
        }
    }; }
    static get elementRef() { return "element"; }
}
AdComponent.TAG_NAME = "snt-ad";
