import { CtaReminderComponent } from "../cta-reminder-component";
export declare class CtaReminderBuilder {
    private title;
    private linkTitle;
    private actionReference;
    private constructor();
    static newInstance(): CtaReminderComponent;
    withTitle(value: string): CtaReminderBuilder;
    withLinkTitle(value: string): CtaReminderBuilder;
    withActionReference(value: string): CtaReminderBuilder;
    build(): CtaReminderComponent;
}
