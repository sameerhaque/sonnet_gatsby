import { EventConfiguration } from "../../core/events/domain/EventConfiguration";
export declare class ActionButtonComponent {
    static readonly TAG_NAME = "snt-action-button";
    element: HTMLElement;
    actionReference: string;
    actionData: string;
    iconClassName: string;
    linkTitle: string;
    styleClasses: string;
    buttonId: string;
    private eventConfiguration;
    private actionDataJsonObj;
    getEventConfiguration(): Promise<EventConfiguration>;
    onSntButtonClick(event: CustomEvent): void;
    onSntButtonKeyDown(event: CustomEvent): void;
    componentDidLoad(): void;
    render(): any[];
}
