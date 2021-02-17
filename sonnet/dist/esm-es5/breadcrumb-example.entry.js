import { r as registerInstance, h } from './index-79f6678c.js';
var BreadcrumbExample = /** @class */ (function () {
    function BreadcrumbExample(hostRef) {
        registerInstance(this, hostRef);
    }
    BreadcrumbExample.prototype.render = function () {
        return [
            h("div", { class: "col-6" }, h("snt-breadcrumb", { trail: '[{"title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel"},{ "title": "Current Page", "href": ""}]' }))
        ];
    };
    return BreadcrumbExample;
}());
export { BreadcrumbExample as breadcrumb_example };
