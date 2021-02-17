'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const PageNotFoundExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("snt-hero", { class: "error-fill" }, index.h("div", { slot: "content" }, index.h("h1", null, "Oops! Looks like something went wrong..."), index.h("p", null, "Let's get you back to finding the right coverage.")))));
    }
};

exports.page_not_found_example = PageNotFoundExample;
