import { Component, h } from "@stencil/core";
import { AccordionGroupBuilder } from "./builder/AccordionGroupBuilder";
import { HtmlElementBuilder } from "../../core/html/HtmlElementBuilder";
import { AccordionComponentBuilder } from "./builder/AccordionComponentBuilder";
export class AccordionGroupBuilderComponent {
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
    static get is() { return "snt-accordion-group-builder"; }
}
AccordionGroupBuilderComponent.TAG_NAME = "snt-accordion-group-builder";
