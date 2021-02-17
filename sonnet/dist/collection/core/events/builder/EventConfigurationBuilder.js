import { EventConfigurationUtils } from "../utils/EventConfigurationUtils";
export class EventConfigurationBuilder {
    constructor() { }
    static newInstanceof() {
        return new EventConfigurationBuilder();
    }
    withComponent(element) {
        this.element = element;
        return this;
    }
    build() {
        if (this.element) {
            return EventConfigurationUtils.buildConfiguration(this.element);
        }
        throw new Error();
    }
}
