'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const CtaHightlightExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("snt-cta-highlight", { cta: "Get a Quote", "action-reference": "Action.logAction" }, "Best offer ever"), "\u00A0", index.h("snt-cta-highlight", { cta: "Get a Quote", "url-target": "_blank", url: "https://www.sonnet.ca" }, "Best offer ever")));
    }
};

exports.cta_highlight_example = CtaHightlightExample;
