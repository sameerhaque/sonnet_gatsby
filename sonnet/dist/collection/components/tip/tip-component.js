import { Component, Prop, h, Host } from "@stencil/core";
export class TipComponent {
    render() {
        return (h(Host, null,
            h("div", { class: "tip-container" },
                h("div", { class: "icon icon-tip" },
                    h("snt-image", { class: "icon-image", "data-src": this.iconPath })),
                h("p", null,
                    h("slot", null)))));
    }
    static get is() { return "snt-tip"; }
    static get originalStyleUrls() { return {
        "$": ["./tip-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tip-component.css"]
    }; }
    static get properties() { return {
        "iconPath": {
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
            "attribute": "icon-path",
            "reflect": false
        }
    }; }
}
TipComponent.TAG_NAME = "snt-tip";
