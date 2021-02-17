import { r as registerInstance, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import './accordion-component-e4a51c50.js';
import { A as AccordionComponentBuilder, H as HtmlElementBuilder } from './HtmlElementBuilder-7f4a3396.js';
import { A as AccordionGroupComponent } from './accordion-group-component-37ccdecd.js';

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
        let component = document.createElement(AccordionGroupComponent.TAG_NAME);
        if (this.accordions) {
            this.accordions.forEach((accordion) => {
                component.addAccordion(accordion);
                WebUtils.appendElement(component, accordion, false);
            });
        }
        return component;
    }
}

const AccordionGroupBuilderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    buildGroups() {
        const accordionGroups = document.createDocumentFragment();
        const accordionOne = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        const accordionTwo = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
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
            h("div", { ref: (nodeElement) => { nodeElement.append(this.buildGroups()); } })
        ]);
    }
};
AccordionGroupBuilderComponent.TAG_NAME = "snt-accordion-group-builder";

export { AccordionGroupBuilderComponent as snt_accordion_group_builder };
