import { Component, h, Prop } from "@stencil/core";
export class SkipToMainExample {
    render() {
        return (h("div", null,
            h("snt-skip-to-main", { "main-content-id": '#main-content' }, "Skip to main content"),
            " ",
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("button", { id: 'main-content' }, "this is main content!")));
    }
    static get is() { return "skiptomain-example"; }
    static get styles() { return "#main-content:focus{outline:1px solid red;}"; }
    static get properties() { return {
        "mainContentId": {
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
            "attribute": "main-content-id",
            "reflect": true
        }
    }; }
}
SkipToMainExample.TAG_NAME = 'skiptomain-example';
