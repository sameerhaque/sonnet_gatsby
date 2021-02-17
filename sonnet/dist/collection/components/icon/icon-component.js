import { Component, h, Prop, Element, Host } from '@stencil/core';
export class IconComponent {
    render() {
        return (h(Host, { class: `icon-font ${this.styleClasses}`, "aria-hidden": "true" }));
    }
    static get is() { return "snt-icon"; }
    static get originalStyleUrls() { return {
        "$": ["icon-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon-component.css"]
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
            "reflect": false
        }
    }; }
    static get elementRef() { return "element"; }
}
IconComponent.TAG_NAME = "snt-icon";
