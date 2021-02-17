import { Component, h } from "@stencil/core";
import { AccordionComponentBuilder } from "./builder/AccordionComponentBuilder";
import { HtmlElementBuilder } from "../../core/html/HtmlElementBuilder";
export class AccordionBuilderComponent {
    buildAccordions() {
        const accordions = document.createDocumentFragment();
        const accordion = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        accordions.appendChild(accordion);
        return accordions;
    }
    render() {
        return ([
            h("div", { ref: (nodeElement) => { nodeElement.append(this.buildAccordions()); } })
        ]);
    }
    static get is() { return "snt-accordion-builder"; }
}
AccordionBuilderComponent.TAG_NAME = "snt-accordion-builder";
