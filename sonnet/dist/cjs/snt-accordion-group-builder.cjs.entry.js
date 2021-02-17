'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
require('./accordion-component-730cbc21.js');
const HtmlElementBuilder = require('./HtmlElementBuilder-dd96a497.js');
const accordionGroupComponent = require('./accordion-group-component-0f80338c.js');

class AccordionGroupBuilder {
    constructor() { }
    static newInstance() {
        return new AccordionGroupBuilder();
    }
    withAccordion(accordion) {
        this.accordions = this.accordions || new Array();
        this.accordions.push(accordion);
        return this;
    }
    build() {
        let component = document.createElement(accordionGroupComponent.AccordionGroupComponent.TAG_NAME);
        if (this.accordions) {
            this.accordions.forEach((accordion) => {
                component.addAccordion(accordion);
                WebUtils.WebUtils.appendElement(component, accordion, false);
            });
        }
        return component;
    }
}

const AccordionGroupBuilderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    buildGroups() {
        const accordionGroups = document.createDocumentFragment();
        const accordionOne = HtmlElementBuilder.AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        const accordionTwo = HtmlElementBuilder.AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        const accordionGroup = AccordionGroupBuilder.newInstance()
            .withAccordion(accordionOne)
            .withAccordion(accordionTwo)
            .build();
        accordionGroups.appendChild(accordionGroup);
        return accordionGroups;
    }
    render() {
        return ([
            index.h("div", { ref: (nodeElement) => { nodeElement.append(this.buildGroups()); } })
        ]);
    }
};
AccordionGroupBuilderComponent.TAG_NAME = "snt-accordion-group-builder";

exports.snt_accordion_group_builder = AccordionGroupBuilderComponent;
