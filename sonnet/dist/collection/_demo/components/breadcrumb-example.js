import { Component, h } from "@stencil/core";
export class BreadcrumbExample {
    render() {
        return [
            h("div", { class: "col-6" },
                h("snt-breadcrumb", { trail: '[{"title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel"},{ "title": "Current Page", "href": ""}]' }))
        ];
    }
    static get is() { return "breadcrumb-example"; }
}
