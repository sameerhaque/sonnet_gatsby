'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const sntTabsExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("snt-tabs", null, index.h("div", { class: "tab-header" }, index.h("div", { class: "tab-item" }, index.h("p", null, index.h("a", { class: "title selected", id: "faq", "data-text": "FAQs" }, "FAQs"))), index.h("div", { class: "tab-item" }, index.h("p", null, " ", index.h("a", { class: "title", id: "related", "data-text": "Related article" }, "Related article ")))), index.h("div", { class: "panel-wrapper" }, index.h("section", { class: "panel" }, index.h("snt-article-list", { articlesJson: '{ "articles": [\r\n                        {\r\n                            "href": "https://www.google.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\r\n                        },\r\n                        {\r\n                            "href": "https://www.yahoo.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Yahoo"\r\n                        },\r\n                        {\r\n                            "href": "https://www.facebook.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Facebook"\r\n                        }\r\n                    ]}' })), index.h("section", { class: "panel" }, "content panel 2"))));
    }
};
sntTabsExample.TAG_NAME = "snt-tabs-example";

exports.snt_tabs_example = sntTabsExample;
