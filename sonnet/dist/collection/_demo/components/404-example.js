import { Component, h } from "@stencil/core";
export class PageNotFoundExample {
    render() {
        return (h("div", null,
            h("snt-hero", { class: "error-fill" },
                h("div", { slot: "content" },
                    h("h1", null, "Oops! Looks like something went wrong..."),
                    h("p", null, "Let's get you back to finding the right coverage.")))));
    }
    static get is() { return "page-not-found-example"; }
}
