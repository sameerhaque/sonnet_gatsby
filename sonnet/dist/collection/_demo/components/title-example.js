import { Component, h } from "@stencil/core";
export class TitleExample {
    render() {
        return [
            h("div", null,
                h("h3", null, "h1 example - Centered"),
                h("snt-title", { class: "left", "title-type": 'h1', "clamp-lines": 1, "truncation-string": '..."' }, "Results for \"How do I know how much discount is applied to my preminum?\""),
                h("br", null),
                h("h3", null, "h2 example - Right Aligned"),
                h("snt-title", { class: "right", "title-type": 'h2' }, "This is sample title"),
                h("br", null),
                h("h3", null, "h3 example - Left"),
                h("snt-title", { class: "left", "title-type": 'h3' }, "This is sample title"),
                h("br", null),
                h("h3", null, "h4 example - Centered Left Mobile"),
                h("snt-title", { class: "left-mobile", "title-type": 'h4' }, "This is sample title"))
        ];
    }
    static get is() { return "title-example"; }
}
