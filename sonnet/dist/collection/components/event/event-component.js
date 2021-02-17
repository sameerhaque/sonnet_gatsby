import { Component, Prop, h, Host } from "@stencil/core";
export class EventComponent {
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidLoad() { }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "snt-event"; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": true
        },
        "filters": {
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
            "attribute": "filters",
            "reflect": true
        }
    }; }
}
EventComponent.TAG_NAME = "snt-event";
