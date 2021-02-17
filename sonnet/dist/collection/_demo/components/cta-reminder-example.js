import { Component, h } from "@stencil/core";
export class CtaReminderExample {
    render() {
        return (h("div", null,
            h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "action-reference": "Action.logAction" }),
            "\u00A0",
            h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "url-target": "_blank", url: "https://www.sonnet.ca" })));
    }
    static get is() { return "cta-reminder-example"; }
}
CtaReminderExample.TAG_NAME = "cta-reminder-example";
