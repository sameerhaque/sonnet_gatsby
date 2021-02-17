'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const SkipToMainExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("snt-skip-to-main", { "main-content-id": '#main-content' }, "Skip to main content"), " ", index.h("br", null), index.h("br", null), index.h("br", null), index.h("br", null), index.h("button", { id: 'main-content' }, "this is main content!")));
    }
};
SkipToMainExample.TAG_NAME = 'skiptomain-example';
SkipToMainExample.style = "#main-content:focus{outline:1px solid red;}";

exports.skiptomain_example = SkipToMainExample;
