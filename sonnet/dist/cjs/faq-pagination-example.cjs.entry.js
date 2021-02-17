'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const FAQPaginationExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("h4", null, "Pagination : Page 1"),
            index.h("snt-pagination", { "total-pages": 2, curr: 1 }),
            index.h("h4", null, "Pagination : Page 2"),
            index.h("snt-pagination", { "total-pages": 8, curr: 2 }),
            index.h("h4", null, "Pagination : Page 3"),
            index.h("snt-pagination", { "total-pages": 8, curr: 3 }),
            index.h("h4", null, "Pagination : Page 4"),
            index.h("snt-pagination", { "total-pages": 8, curr: 4 }),
            index.h("h4", null, "Pagination : Page 5"),
            index.h("snt-pagination", { "total-pages": 8, curr: 5 }),
            index.h("h4", null, "Pagination : Page 6"),
            index.h("snt-pagination", { "total-pages": 8, curr: 6 }),
            index.h("h4", null, "Pagination : Page 7"),
            index.h("snt-pagination", { "total-pages": 8, curr: 7 }),
            index.h("h4", null, "Pagination : Page 8"),
            index.h("snt-pagination", { "total-pages": 8, curr: 8 })
        ];
    }
};

exports.faq_pagination_example = FAQPaginationExample;
