import { Component, h } from "@stencil/core";
export class ButtonLinkGroupComponent {
    render() {
        return (h("slot", null));
    }
    static get is() { return "button-link-group"; }
    static get originalStyleUrls() { return {
        "$": ["button-link-group-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-link-group-component.css"]
    }; }
}
ButtonLinkGroupComponent.TAG_NAME = "button-link-group";
