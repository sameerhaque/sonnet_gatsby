'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const ArticleListExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "col-sm-12 col-md-5 col-lg-5 col-xl-5" }, index.h("h2", null, "With Title"), index.h("snt-article-list", { heading: "My list", articlesJson: '{ "articles": [\r\n                        {\r\n                            "href": "https://www.google.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\r\n                        },\r\n                        {\r\n                            "href": "https://www.yahoo.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Yahoo"\r\n                        },\r\n                        {\r\n                            "href": "https://www.facebook.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Facebook"\r\n                        }\r\n                    ]}' }), index.h("br", null), index.h("h2", null, "Without Title"), index.h("snt-article-list", { articlesJson: '{ "articles": [\r\n                        {\r\n                            "href": "https://www.google.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\r\n                        },\r\n                        {\r\n                            "href": "https://www.yahoo.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Yahoo"\r\n                        },\r\n                        {\r\n                            "href": "https://www.facebook.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Facebook"\r\n                        }\r\n                    ]}' })));
    }
};
ArticleListExample.TAG_NAME = "article-list-example";

exports.article_list_example = ArticleListExample;
