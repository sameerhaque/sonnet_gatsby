'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const DropdownExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("div", null, index.h("form", null, index.h("div", { class: "form-row" }, index.h("div", { class: "col-sm-3 col-xs-12" }, index.h("snt-dropdown", { id: "insurance-type", placeholderText: "Please Select", labelText: "" }, index.h("snt-options", null, index.h("snt-item", { "data-key": "101", value: "One-O-One" }), index.h("snt-item", { "data-key": "102", value: "One-O-Two" }), index.h("snt-item", { "data-key": "103", value: "One-O-Three" }), index.h("snt-item", { "data-key": "104", value: "One-O-Four" }), index.h("snt-item", { "data-key": "105", value: "One-O-Five" }))))), index.h("br", null), index.h("div", { class: "row" }, index.h("div", null, index.h("label", null, "Input One"), index.h("br", null), index.h("input", { type: "text" })), index.h("div", null, index.h("label", null, "Input Two"), index.h("br", null), index.h("input", { type: "text" })), index.h("div", null, index.h("select", null, index.h("option", { value: "A", disabled: true }, "AAA"), index.h("option", { value: "B" }, "BBB"), index.h("option", { value: "C" }, "CCC"), index.h("option", { value: "D", disabled: true }, "DDD"), index.h("option", { value: "E" }, "EEE")))), index.h("div", { class: "row" }, index.h("div", null, index.h("input", { type: "submit", value: "submit" })))))
        ];
    }
};
DropdownExample.TAG_NAME = "dropdown-example";

exports.dropdown_example = DropdownExample;
