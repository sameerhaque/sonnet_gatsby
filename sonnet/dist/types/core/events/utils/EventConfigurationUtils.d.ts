import { EventConfiguration } from "../domain/EventConfiguration";
export declare class EventConfigurationUtils {
    static processEvent(customEvent: CustomEvent, eventConfiguration: EventConfiguration, actionReference: string, actionData?: JSON): void;
    static buildConfiguration(element: HTMLElement): EventConfiguration;
}
