import { EventTypeEnum } from "./EventTypeEnum";
import { EventKey } from "./EventKey";
export declare class EventConfigurationElement {
    type: EventTypeEnum;
    filters: Set<EventKey>;
    constructor(type: EventTypeEnum, filters: Set<EventKey>);
    hasKeys(): boolean;
    getKeys(): Set<string>;
}
