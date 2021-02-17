import { EventConfiguration } from "../domain/EventConfiguration";
import { EventTypeEnum } from "../domain/EventTypeEnum";
import { EventFilterEnum } from "../domain/EventFilterEnum";
import { EventConfigurationElement } from "../domain/EventConfigurationElement";
import { EventKey } from "../domain/EventKey";
import { EventComponent } from "../../../components/event/event-component";
import { ReflectionUtils } from "../../reflection/ReflectionUtils";
export class EventConfigurationUtils {
    static processEvent(customEvent, eventConfiguration, actionReference, actionData) {
        if (eventConfiguration.hasConfigurations()) {
            const eventTypeEnum = (EventTypeEnum.exists(customEvent.detail.type)) ? EventTypeEnum.findByValue(customEvent.detail.type) : null;
            const configurationElement = (eventTypeEnum) ? eventConfiguration.findByType(eventTypeEnum) : null;
            if (configurationElement) {
                if (configurationElement.hasKeys()) {
                    const eventConfigurationKeyCodes = configurationElement.getKeys();
                    if (!eventConfigurationKeyCodes.has(customEvent.detail.key))
                        return;
                }
                ReflectionUtils.getObjectReference(actionReference).then((ref) => {
                    ref(customEvent, actionData);
                });
            }
        }
    }
    static buildConfiguration(element) {
        const configuration = new EventConfiguration();
        const elements = element.querySelectorAll(EventComponent.TAG_NAME);
        if (elements && elements.length > 0) {
            Array.from(elements).forEach((eventElement) => {
                let filterSet = null;
                if (eventElement.filters) {
                    const filters = eventElement.filters.split(" ");
                    filterSet = new Set(filters
                        .filter((filter) => EventFilterEnum.exists(filter))
                        .map((filter) => EventKey.find(EventFilterEnum.findByValue(filter))));
                }
                const eventTypeEnum = (EventTypeEnum.exists(eventElement.type)) ? EventTypeEnum.findByValue(eventElement.type) : null;
                if (eventTypeEnum) {
                    if (eventTypeEnum == EventTypeEnum.KEYDOWN && filterSet == null) {
                        throw new Error("Event type keydown must have a valid filter");
                    }
                    configuration.add(new EventConfigurationElement(eventTypeEnum, filterSet));
                }
                else {
                    throw new Error("Event configuration type not supported.");
                }
            });
        }
        else {
            throw new Error("Configuration must contain at least one event configuration element.");
        }
        return configuration;
    }
}
