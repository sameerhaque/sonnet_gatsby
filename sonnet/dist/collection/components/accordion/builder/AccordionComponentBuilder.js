import { WebUtils } from "../../../core/utils/WebUtils";
import { AccordionComponent } from "../accordion-component";
export class AccordionComponentBuilder {
    constructor() { }
    static newInstance() {
        return new AccordionComponentBuilder();
    }
    withSummary(summary) {
        this.summary = summary;
        return this;
    }
    withDetails(details) {
        this.details = details;
        return this;
    }
    build() {
        let component = document.createElement(AccordionComponent.TAG_NAME);
        // TODO: Determine if we want an API for adding details and summary
        WebUtils.appendElement(component, this.summary, false);
        WebUtils.appendElement(component, this.details, false);
        return component;
    }
}
