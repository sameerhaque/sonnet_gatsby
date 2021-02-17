import { Component, Element, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
export class FooterComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    render() {
        return (h("div", { class: WebUtils.generateClasses(["footer"], this.styleClasses) },
            h("snt-layout", null,
                h("slot", null))));
    }
    static get is() { return "snt-footer"; }
    static get originalStyleUrls() { return {
        "$": ["footer-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["footer-component.css"]
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get elementRef() { return "element"; }
}
FooterComponent.TAG_NAME = "snt-footer";
