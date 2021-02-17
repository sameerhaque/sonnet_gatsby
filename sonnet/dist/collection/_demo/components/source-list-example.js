import { Component, h } from "@stencil/core";
export class SourceListExample {
    render() {
        return [
            h("h1", null, "Source List"),
            h("snt-source-list", { "source-heading": "Interested in this articles sources?", "panel-id": "sources" },
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://yahoo.com" }, "This is my second source that is much longer"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { target: "_blank", href: "https://google.com" }, "This is external"),
                h("snt-source-link", { target: "_blank", href: "https://yahoo.com" }, "This is my second source that is much longer"))
        ];
    }
    static get is() { return "source-list-example"; }
}
