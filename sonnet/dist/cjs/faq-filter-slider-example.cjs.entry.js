'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const FAQFiltersliderExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var filterItems = '[ { "key": "all", "title": "All" }, { "key": "propertyInsurance", "title": "Home" } , { "key": "autoInsurance", "title": "Auto" } , { "key": "other", "title": "Other" }, { "key": "inYourWallet", "title": "In your wallet" } ]';
        return [
            index.h("div", null, index.h("snt-faq-filter-slider", { filterItems: filterItems }), index.h("div", { id: "viewMobile" }, index.h("div", null, index.h("h3", null, "On mobile")), index.h("div", null, index.h("snt-faq-filter-slider", { filterItems: filterItems }))), " ", index.h("br", null), " ", index.h("br", null), index.h("br", null), index.h("div", { id: "viewTablet" }, index.h("div", null, index.h("h3", null, "On tablet")), index.h("div", null, index.h("snt-faq-filter-slider", { filterItems: filterItems }))))
        ];
    }
};
FAQFiltersliderExample.style = "#viewMobile{\n        width: 320px;\n    }\n    #viewTablet{\n        width: 694px;\n    }";

exports.faq_filter_slider_example = FAQFiltersliderExample;
