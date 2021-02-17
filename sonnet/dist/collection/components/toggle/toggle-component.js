import { h, Component, Element, Host, Event } from "@stencil/core";
export class ToggleComponent {
    handleClick() {
        this.toggle.emit();
    }
    render() {
        return (h(Host, { onClick: this.handleClick.bind(this) },
            "X",
            h("span", { class: "sr-only" }, "Search")));
    }
    static get is() { return "snt-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["toggle-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toggle-component.css"]
    }; }
    static get events() { return [{
            "method": "toggle",
            "name": "toggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
}
ToggleComponent.TAG_NAME = "snt-header";
