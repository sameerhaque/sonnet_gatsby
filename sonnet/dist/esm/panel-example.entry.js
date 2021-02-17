import { r as registerInstance, h } from './index-79f6678c.js';

const PanelExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const jsonData = "{ \"viewport\": { \"1440\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg')\", \"outlineColor\": \"red\" } }, \"768\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-tablet-1x.jpg')\", \"outlineColor\": \"orange\" } }, \"0\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-mobile-1x.jpg')\", \"outlineColor\": \"yellow\" } } } }";
        return [
            h("snt-panel", null, h("snt-data", { id: "data-component-test", type: "json", "lazy-load": true, src: "https://baconipsum.com/api/?type=meat-and-filler" }, jsonData))
        ];
    }
};
PanelExample.TAG_NAME = "panel-example";

export { PanelExample as panel_example };
