import { Component, h } from '@stencil/core';
export class CtaHightlightExample {
    render() {
        return (h("div", null,
            h("snt-cta-highlight", { cta: "Get a Quote", "action-reference": "Action.logAction" }, "Best offer ever"),
            "\u00A0",
            h("snt-cta-highlight", { cta: "Get a Quote", "url-target": "_blank", url: "https://www.sonnet.ca" }, "Best offer ever")));
    }
    static get is() { return "cta-highlight-example"; }
}
