import { r as registerInstance, h } from './index-79f6678c.js';

const FAQFiltersliderExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var filterItems = '[ { "key": "all", "title": "All" }, { "key": "propertyInsurance", "title": "Home" } , { "key": "autoInsurance", "title": "Auto" } , { "key": "other", "title": "Other" }, { "key": "inYourWallet", "title": "In your wallet" } ]';
        return [
            h("div", null, h("snt-faq-filter-slider", { filterItems: filterItems }), h("div", { id: "viewMobile" }, h("div", null, h("h3", null, "On mobile")), h("div", null, h("snt-faq-filter-slider", { filterItems: filterItems }))), " ", h("br", null), " ", h("br", null), h("br", null), h("div", { id: "viewTablet" }, h("div", null, h("h3", null, "On tablet")), h("div", null, h("snt-faq-filter-slider", { filterItems: filterItems }))))
        ];
    }
};
FAQFiltersliderExample.style = "#viewMobile{\n        width: 320px;\n    }\n    #viewTablet{\n        width: 694px;\n    }";

export { FAQFiltersliderExample as faq_filter_slider_example };
