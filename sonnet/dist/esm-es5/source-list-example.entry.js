import { r as registerInstance, h } from './index-79f6678c.js';
var SourceListExample = /** @class */ (function () {
    function SourceListExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SourceListExample.prototype.render = function () {
        return [
            h("h1", null, "Source List"),
            h("snt-source-list", { "source-heading": "Interested in this articles sources?", "panel-id": "sources" }, h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://yahoo.com" }, "This is my second source that is much longer"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { href: "https://google.com" }, "This is my link"), h("snt-source-link", { target: "_blank", href: "https://google.com" }, "This is external"), h("snt-source-link", { target: "_blank", href: "https://yahoo.com" }, "This is my second source that is much longer"))
        ];
    };
    return SourceListExample;
}());
export { SourceListExample as source_list_example };
