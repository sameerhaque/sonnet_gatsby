import { Component, Element, h, Prop, Listen, Host } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
export class TwoColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.columnLeft.setAttribute('viewport', viewport);
        this.columnRight.setAttribute('viewport', viewport);
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { padding: "none" },
                h("div", { class: "flex-container " },
                    h("div", { class: "column-left", ref: el => this.columnLeft = el },
                        h("slot", { name: "left" })),
                    h("div", { class: "column-right", ref: el => this.columnRight = el },
                        h("slot", { name: "right" }))))));
    }
    static get is() { return "snt-two-column"; }
    static get originalStyleUrls() { return {
        "$": ["two-column-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["two-column-component.css"]
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
        }
    }; }
    static get elementRef() { return "hostElement"; }
    static get listeners() { return [{
            "name": "viewportChanged",
            "method": "onResize",
            "target": "parent",
            "capture": false,
            "passive": false
        }]; }
}
TwoColumnComponent.TAG_NAME = "snt-two-column";
