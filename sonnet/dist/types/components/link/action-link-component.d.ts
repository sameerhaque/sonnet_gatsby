import { EventConfiguration } from "../../core/events/domain/EventConfiguration";
export declare class ActionLinkComponent {
    static TAG_NAME: string;
    element: HTMLElement;
    actionReference: string;
    actionData: string;
    linkTitle: string;
    iconClassName: string;
    styleClasses: string;
    linkId: string;
    private eventConfiguration;
    private actionDataJsonObj;
    private eventElems;
    getEventConfiguration(): Promise<EventConfiguration>;
    sntBtnEvent(event: CustomEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any[];
}
