import { EventConfiguration } from "../../core/events/domain/EventConfiguration";
export declare class CtaReminderComponent {
    element: HTMLElement;
    titleString: string;
    linkTitle: string;
    url: string;
    urlTarget: string;
    actionReference: string;
    actionData: string;
    styleClasses: string;
    buttonId: string;
    eventConfiguration: EventConfiguration;
    static readonly TAG_NAME: string;
    componentDidLoad(): void;
    render(): any;
}
