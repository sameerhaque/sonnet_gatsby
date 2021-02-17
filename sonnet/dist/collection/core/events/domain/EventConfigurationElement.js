import { EventTypeEnum } from "./EventTypeEnum";
export class EventConfigurationElement {
    constructor(type, filters) {
        this.type = type;
        this.filters = filters;
    }
    hasKeys() {
        return (this.type == EventTypeEnum.KEYDOWN && this.filters.size > 0);
    }
    getKeys() {
        const results = new Set();
        if (this.hasKeys()) {
            this.filters.forEach((filter) => {
                results.add(filter.getKey());
            });
        }
        return results;
    }
}
