import { EventConfiguration } from "../../core/events/domain/EventConfiguration";
export declare class CtaHighlightComponent {
    cta: string;
    actionReference: string;
    actionData: string;
    url: string;
    urlTarget: string;
    buttonId: string;
    element: HTMLElement;
    eventConfiguration: EventConfiguration;
    static readonly TAG_NAME = "snt-cta-highlight";
    componentDidLoad(): void;
    render(): any;
}
