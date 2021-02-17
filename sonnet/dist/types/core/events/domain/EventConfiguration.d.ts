import { EventTypeEnum } from "./EventTypeEnum";
import { EventConfigurationElement } from "./EventConfigurationElement";
export declare class EventConfiguration {
    private configurations;
    constructor();
    add(event: EventConfigurationElement): void;
    remove(event: EventConfigurationElement): void;
    findByType(type: EventTypeEnum): EventConfigurationElement;
    hasConfigurations(): boolean;
    getConfigurations(): Map<EventTypeEnum, EventConfigurationElement>;
}
