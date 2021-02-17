import { Component, h } from "@stencil/core";
export class WYSIWYGComponent {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "snt-wysiwyg"; }
    static get originalStyleUrls() { return {
        "$": ["wysiwyg-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wysiwyg-component.css"]
    }; }
}
