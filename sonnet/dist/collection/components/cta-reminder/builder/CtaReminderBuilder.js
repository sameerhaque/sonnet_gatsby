import { CtaReminderComponent } from "../cta-reminder-component";
export class CtaReminderBuilder {
    constructor() { }
    static newInstance() {
        return new CtaReminderComponent();
    }
    withTitle(value) {
        this.title = value;
        return this;
    }
    withLinkTitle(value) {
        this.linkTitle = value;
        return this;
    }
    withActionReference(value) {
        this.actionReference = value;
        return this;
    }
    build() {
        let component;
        component = document.createElement(CtaReminderComponent.TAG_NAME);
        component.titleString = this.title;
        component.linkTitle = this.linkTitle;
        component.actionReference = this.actionReference;
        return component;
    }
}
