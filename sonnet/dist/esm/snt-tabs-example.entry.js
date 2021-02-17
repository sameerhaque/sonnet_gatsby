import { r as registerInstance, h } from './index-79f6678c.js';

const sntTabsExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("snt-tabs", null, h("div", { class: "tab-header" }, h("div", { class: "tab-item" }, h("p", null, h("a", { class: "title selected", id: "faq", "data-text": "FAQs" }, "FAQs"))), h("div", { class: "tab-item" }, h("p", null, " ", h("a", { class: "title", id: "related", "data-text": "Related article" }, "Related article ")))), h("div", { class: "panel-wrapper" }, h("section", { class: "panel" }, h("snt-article-list", { articlesJson: '{ "articles": [\r\n                        {\r\n                            "href": "https://www.google.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\r\n                        },\r\n                        {\r\n                            "href": "https://www.yahoo.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Yahoo"\r\n                        },\r\n                        {\r\n                            "href": "https://www.facebook.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Facebook"\r\n                        }\r\n                    ]}' })), h("section", { class: "panel" }, "content panel 2"))));
    }
};
sntTabsExample.TAG_NAME = "snt-tabs-example";

export { sntTabsExample as snt_tabs_example };
