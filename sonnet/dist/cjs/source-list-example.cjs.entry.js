'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const SourceListExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("h1", null, "Source List"),
            index.h("snt-source-list", { "source-heading": "Interested in this articles sources?", "panel-id": "sources" }, index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://yahoo.com" }, "This is my second source that is much longer"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { href: "https://google.com" }, "This is my link"), index.h("snt-source-link", { target: "_blank", href: "https://google.com" }, "This is external"), index.h("snt-source-link", { target: "_blank", href: "https://yahoo.com" }, "This is my second source that is much longer"))
        ];
    }
};

exports.source_list_example = SourceListExample;
