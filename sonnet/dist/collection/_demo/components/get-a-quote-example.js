import { Component, h, Host } from '@stencil/core';
export class GetAQuoteExample {
    render() {
        return (h(Host, null,
            h("snt-title-copy", { "title-string": "Let's get insured", "style-classes": "", class: "hydrated" }, "It only takes 5 minutes. What type of insurance are you looking for?"),
            h("snt-multi-column-mixed", { "column-count": '{"extra-small": 1,"small": 1,"medium": 1,"large": 1,"extra-large": 1}', class: "hydrated", "style-classes": "" },
                h("div", { class: "column extra-small-1 small-1 medium-1 large-1 extra-large-1 last-row" },
                    h("snt-enhanced-button", { "cta-text": "Home & Auto", "discount-text": "Save up to 20%", "left-icon-sources": '{\r\n                    "largeIconUrl": "https://test-economical.dotcmscloud.com/dA/4fab9271af/icon_product_houseLg.svg",\r\n                    "smallIconUrl": "https://test-economical.dotcmscloud.com/dA/dc53b9a2ff/icon_product_house.svg"\r\n                }', "right-icon-sources": '{\r\n                    "largeIconUrl": "https://test-economical.dotcmscloud.com/dA/79a3eda33a/icon_product_autoLg.svg",\r\n                    "smallIconUrl": "https://test-economical.dotcmscloud.com/dA/54c0c3fe34/icon_product_auto.svg"\r\n                }', href: "https://secure.sonnet.ca/#/quoting/combined/auto/vehicle_details", "link-id": "get-a-quote-bundle", "aria-label": "Get a Quote - Home & Auto", class: "hydrated", "style-classes": "" }))),
            h("snt-multi-column-mixed", { "column-count": '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}', class: "hydrated", "style-classes": "" },
                h("div", { class: "column extra-small-1 small-1 medium-2 large-2 extra-large-2 last-row" },
                    h("snt-enhanced-button", { "cta-text": "Auto", "left-icon-sources": '{\r\n                    "largeIconUrl": "https://test-economical.dotcmscloud.com/dA/79a3eda33a/icon_product_autoLg.svg",\r\n                    "smallIconUrl": "https://test-economical.dotcmscloud.com/dA/54c0c3fe34/icon_product_auto.svg"\r\n                }', href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details", "link-id": "get-a-quote-auto", "aria-label": "Get a Quote - Auto Insurance", class: "hydrated", "style-classes": "" })),
                h("div", { class: "column extra-small-1 small-1 medium-2 large-2 extra-large-2 last-row" },
                    h("snt-enhanced-button", { "cta-text": "Home", "left-icon-sources": '{\r\n                    "largeIconUrl": "https://test-economical.dotcmscloud.com/dA/4fab9271af/icon_product_houseLg.svg",\r\n                    "smallIconUrl": "https://test-economical.dotcmscloud.com/dA/dc53b9a2ff/icon_product_house.svg"\r\n                }', href: "https://secure.sonnet.ca/#/quoting/property/about_you", "link-id": "get-a-quote-home", "aria-label": "Get a Quote - Home Insurance", class: "hydrated", "style-classes": "" })))));
    }
    static get is() { return "get-a-quote-example"; }
    static get originalStyleUrls() { return {
        "$": ["../ontario-example.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../ontario-example.css"]
    }; }
}
