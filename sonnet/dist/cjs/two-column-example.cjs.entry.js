'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const TwoColumnExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" }, index.h("h1", null, "A left B right"), index.h("snt-two-column", null, index.h("div", { slot: "left" }, index.h("snt-title", { "title-type": "h3" }, "This is left title"), index.h("snt-accordion-group", null, index.h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))), index.h("div", { slot: "right" }, index.h("snt-title", { "title-type": "h3" }, "This is right title"), index.h("snt-accordion-group", { slot: "right" }, index.h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))))),
            index.h("br", null),
            index.h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" }, index.h("h1", null, "No title"), index.h("snt-two-column", null, index.h("div", { slot: "left" }, index.h("snt-accordion-group", null, index.h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))), index.h("div", { slot: "right" }, index.h("snt-accordion-group", { slot: "right" }, index.h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), index.h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" }, index.h("div", { slot: "summary" }, "Heading"), index.h("div", { slot: "details" }, "Lorem ipsum dolor samet."))))))
        ];
    }
};
TwoColumnExample.TAG_NAME = "two-column-example";

exports.two_column_example = TwoColumnExample;
