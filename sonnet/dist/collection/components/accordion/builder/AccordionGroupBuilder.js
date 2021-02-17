import { WebUtils } from "../../../core/utils/WebUtils";
import { AccordionGroupComponent } from "../accordion-group-component";
export class AccordionGroupBuilder {
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
