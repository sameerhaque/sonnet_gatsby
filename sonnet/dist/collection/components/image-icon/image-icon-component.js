import { h, Component, Prop, Element, Host } from "@stencil/core";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
export class ImageIconComponent {
    constructor() {
        this.properties = "";
        this.imgAlt = "";
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        let iconSrc = {};
        if (StringUtils.hasValue(this.properties)) {
            iconSrc = JSON.parse(this.properties);
        }
        this.largeIconUrl = iconSrc.largeIconUrl || iconSrc.smallIconUrl;
        this.smallIconUrl = iconSrc.smallIconUrl || this.largeIconUrl;
        this.image.setAttribute("src", this.smallIconUrl);
        this.element.setAttribute("data-src", this.smallIconUrl);
        this.image.setAttribute("data-srcSet", this.smallIconUrl);
        this.largeSource.setAttribute('srcSet', this.largeIconUrl);
        this.largeSource.setAttribute('data-srcSet', this.largeIconUrl);
        if (StringUtils.isEmpty(this.largeIconUrl) &&
            StringUtils.isEmpty(this.smallIconUrl)) {
            this.icon.classList.add("hidden");
        }
    }
    render() {
        return (h(Host, null,
            h("snt-layout", null,
                h("div", { ref: (el) => (this.icon = el), class: "icon" },
                    h("picture", null,
                        h("source", { ref: (el) => (this.largeSource = el), media: "(min-width: 768px)", srcSet: "" }),
                        h("img", { class: WebUtils.generateClasses(["image-icon"], this.styleClasses), src: "", alt: this.imgAlt, "aria-hidden": "true", ref: (el) => (this.image = el) }))))));
    }
    static get is() { return "snt-image-icon"; }
    static get originalStyleUrls() { return {
        "$": ["image-icon-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["image-icon-component.css"]
    }; }
    static get properties() { return {
        "properties": {
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
            "attribute": "properties",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "imgAlt": {
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
            "attribute": "img-alt",
            "reflect": false,
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
        }
    }; }
    static get elementRef() { return "element"; }
}
