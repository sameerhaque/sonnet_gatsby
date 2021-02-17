import { r as registerInstance, h } from './index-79f6678c.js';
var FAQPaginationExample = /** @class */ (function () {
    function FAQPaginationExample(hostRef) {
        registerInstance(this, hostRef);
    }
    FAQPaginationExample.prototype.render = function () {
        return [
            h("h4", null, "Pagination : Page 1"),
            h("snt-pagination", { "total-pages": 2, curr: 1 }),
            h("h4", null, "Pagination : Page 2"),
            h("snt-pagination", { "total-pages": 8, curr: 2 }),
            h("h4", null, "Pagination : Page 3"),
            h("snt-pagination", { "total-pages": 8, curr: 3 }),
            h("h4", null, "Pagination : Page 4"),
            h("snt-pagination", { "total-pages": 8, curr: 4 }),
            h("h4", null, "Pagination : Page 5"),
            h("snt-pagination", { "total-pages": 8, curr: 5 }),
            h("h4", null, "Pagination : Page 6"),
            h("snt-pagination", { "total-pages": 8, curr: 6 }),
            h("h4", null, "Pagination : Page 7"),
            h("snt-pagination", { "total-pages": 8, curr: 7 }),
            h("h4", null, "Pagination : Page 8"),
            h("snt-pagination", { "total-pages": 8, curr: 8 })
        ];
    };
    return FAQPaginationExample;
}());
export { FAQPaginationExample as faq_pagination_example };
