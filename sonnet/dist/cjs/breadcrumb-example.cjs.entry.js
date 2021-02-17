'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const BreadcrumbExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("div", { class: "col-6" }, index.h("snt-breadcrumb", { trail: '[{"title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel"},{ "title": "Current Page", "href": ""}]' }))
        ];
    }
};

exports.breadcrumb_example = BreadcrumbExample;
