import { Component, h } from "@stencil/core";
export class TipExample {
    render() {
        return [
            h("div", { class: "dark-fill" },
                h("h3", null, "Dark Fill Tip Example"),
                h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component")),
            h("br", null),
            h("div", { class: "light-fill" },
                h("h3", null, "Light Fill Tip Example"),
                h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component"))
        ];
    }
    static get is() { return "tip-example"; }
}
