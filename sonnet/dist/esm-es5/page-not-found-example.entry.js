import { r as registerInstance, h } from './index-79f6678c.js';
var PageNotFoundExample = /** @class */ (function () {
    function PageNotFoundExample(hostRef) {
        registerInstance(this, hostRef);
    }
    PageNotFoundExample.prototype.render = function () {
        return (h("div", null, h("snt-hero", { class: "error-fill" }, h("div", { slot: "content" }, h("h1", null, "Oops! Looks like something went wrong..."), h("p", null, "Let's get you back to finding the right coverage.")))));
    };
    return PageNotFoundExample;
}());
export { PageNotFoundExample as page_not_found_example };
