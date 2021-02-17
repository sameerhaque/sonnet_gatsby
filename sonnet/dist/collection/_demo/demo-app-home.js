import { h, Component, Element } from "@stencil/core";
export class DemoAppHome {
    render() {
        return (h("div", null, "HOME PAGE"));
    }
    static get is() { return "demo-app-home"; }
    static get originalStyleUrls() { return {
        "$": ["demo-app-home.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["demo-app-home.css"]
    }; }
    static get elementRef() { return "element"; }
}
DemoAppHome.TAG_NAME = "demo-app-home";
