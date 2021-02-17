'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const PanelExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const jsonData = "{ \"viewport\": { \"1440\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg')\", \"outlineColor\": \"red\" } }, \"768\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-tablet-1x.jpg')\", \"outlineColor\": \"orange\" } }, \"0\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-mobile-1x.jpg')\", \"outlineColor\": \"yellow\" } } } }";
        return [
            index.h("snt-panel", null, index.h("snt-data", { id: "data-component-test", type: "json", "lazy-load": true, src: "https://baconipsum.com/api/?type=meat-and-filler" }, jsonData))
        ];
    }
};
PanelExample.TAG_NAME = "panel-example";

exports.panel_example = PanelExample;
