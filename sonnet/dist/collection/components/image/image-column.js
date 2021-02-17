import { Component, Host, h, Prop } from '@stencil/core';
export class IconCopyComponent {
    constructor() {
        this.imageSrc = '';
        this.imgAlt = '';
    }
    render() {
        return (h(Host, null,
            h("div", { class: "image-panel" },
                h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    }
    static get is() { return "snt-image-column"; }
    static get properties() { return {
        "imageSrc": {
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
            "attribute": "image-src",
            "reflect": true,
            "defaultValue": "''"
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
            "defaultValue": "''"
        }
    }; }
}
IconCopyComponent.TAG_NAME = "snt-image-column";
