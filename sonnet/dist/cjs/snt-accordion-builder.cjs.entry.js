'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
require('./StringUtils-cfa686e8.js');
require('./WebUtils-7da67880.js');
require('./accordion-component-730cbc21.js');
const HtmlElementBuilder = require('./HtmlElementBuilder-dd96a497.js');

const AccordionBuilderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    buildAccordions() {
        const accordions = document.createDocumentFragment();
        const accordion = HtmlElementBuilder.AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        accordions.appendChild(accordion);
        return accordions;
    }
    render() {
        return ([
            index.h("div", { ref: (nodeElement) => { nodeElement.append(this.buildAccordions()); } })
        ]);
    }
};
AccordionBuilderComponent.TAG_NAME = "snt-accordion-builder";

exports.snt_accordion_builder = AccordionBuilderComponent;
