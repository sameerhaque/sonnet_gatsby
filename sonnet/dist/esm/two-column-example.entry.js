import { r as registerInstance, h } from './index-79f6678c.js';

const TwoColumnExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" }, h("h1", null, "A left B right"), h("snt-two-column", null, h("div", { slot: "left" }, h("snt-title", { "title-type": "h3" }, "This is left title"), h("snt-accordion-group", null, h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))), h("div", { slot: "right" }, h("snt-title", { "title-type": "h3" }, "This is right title"), h("snt-accordion-group", { slot: "right" }, h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))))),
            h("br", null),
            h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" }, h("h1", null, "No title"), h("snt-two-column", null, h("div", { slot: "left" }, h("snt-accordion-group", null, h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))), h("div", { slot: "right" }, h("snt-accordion-group", { slot: "right" }, h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet.")), h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" }, h("div", { slot: "summary" }, "Heading"), h("div", { slot: "details" }, "Lorem ipsum dolor samet."))))))
        ];
    }
};
TwoColumnExample.TAG_NAME = "two-column-example";

export { TwoColumnExample as two_column_example };
