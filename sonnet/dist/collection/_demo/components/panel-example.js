import { Component, h } from "@stencil/core";
export class PanelExample {
    render() {
        const jsonData = "{ \"viewport\": { \"1440\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg')\", \"outlineColor\": \"red\" } }, \"768\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-tablet-1x.jpg')\", \"outlineColor\": \"orange\" } }, \"0\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-mobile-1x.jpg')\", \"outlineColor\": \"yellow\" } } } }";
        return [
            h("snt-panel", null,
                h("snt-data", { id: "data-component-test", type: "json", "lazy-load": true, src: "https://baconipsum.com/api/?type=meat-and-filler" }, jsonData))
        ];
    }
    static get is() { return "panel-example"; }
}
PanelExample.TAG_NAME = "panel-example";
