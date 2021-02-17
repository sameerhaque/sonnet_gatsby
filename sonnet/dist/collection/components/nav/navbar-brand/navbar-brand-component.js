import { Component, h, Prop } from "@stencil/core";
export class NavbarBrandComponent {
    render() {
        return [
            h("a", { href: this.href },
                h("snt-image", { "img-alt": this.imgAlt, "src-image": this.imgSrc, "data-src": this.imgSrc }))
        ];
    }
    static get is() { return "snt-navbar-brand"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-brand-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-brand-component.css"]
    }; }
    static get properties() { return {
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
            "reflect": true
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
            "reflect": true
        },
        "imgSrc": {
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
            "attribute": "img-src",
            "reflect": true
        }
    }; }
}
NavbarBrandComponent.TAG_NAME = "snt-navbar-brand";
