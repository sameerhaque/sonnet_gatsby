import { Component, h } from "@stencil/core";
export class FAQFiltersliderExample {
    render() {
        var filterItems = '[ { "key": "all", "title": "All" }, { "key": "propertyInsurance", "title": "Home" } , { "key": "autoInsurance", "title": "Auto" } , { "key": "other", "title": "Other" }, { "key": "inYourWallet", "title": "In your wallet" } ]';
        return [
            h("div", null,
                h("snt-faq-filter-slider", { filterItems: filterItems }),
                h("div", { id: "viewMobile" },
                    h("div", null,
                        h("h3", null, "On mobile")),
                    h("div", null,
                        h("snt-faq-filter-slider", { filterItems: filterItems }))),
                " ",
                h("br", null),
                " ",
                h("br", null),
                h("br", null),
                h("div", { id: "viewTablet" },
                    h("div", null,
                        h("h3", null, "On tablet")),
                    h("div", null,
                        h("snt-faq-filter-slider", { filterItems: filterItems }))))
        ];
    }
    static get is() { return "faq-filter-slider-example"; }
    static get styles() { return "#viewMobile{\n        width: 320px;\n    }\n    #viewTablet{\n        width: 694px;\n    }"; }
}
