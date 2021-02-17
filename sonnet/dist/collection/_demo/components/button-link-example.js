import { Component, h } from "@stencil/core";
export class ButtonLinkExample {
    render() {
        //return (<div>Hello!</div>);
        return [
            h("div", null, "Mobile"),
            h("div", { class: "mobile" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "Tablet"),
            h("div", { class: "tablet" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "Desktop"),
            h("div", { class: "desktop" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "HD"),
            h("div", { class: "hd" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!"))
        ];
    }
    static get is() { return "button-link-example"; }
    static get styles() { return ".mobile {\n        width: 320px;\n    }\n    .tablet {\n        width: 768px;\n    }\n    .desktop {\n        width: 1024px;\n    }\n    .hd {\n        width: 1440px;\n    }"; }
}
ButtonLinkExample.TAG_NAME = "button-link-example";
