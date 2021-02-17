import { r as registerInstance, h, H as Host } from './index-79f6678c.js';
import { R as ReflectionUtils } from './ReflectionUtils-6ed4bd5c.js';

class EventConfiguration {
    constructor() {
        this.configurations = new Map();
    }
    add(event) {
        this.configurations.set(event.type, event);
    }
    remove(event) {
        this.configurations.delete(event.type);
    }
    findByType(type) {
        return this.configurations.get(type);
    }
    hasConfigurations() {
        return (this.configurations.size > 0);
    }
    getConfigurations() {
        return this.configurations;
    }
}

var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["CLICK"] = "click";
    EventTypeEnum["KEYDOWN"] = "keydown";
})(EventTypeEnum || (EventTypeEnum = {}));
(function (EventTypeEnum) {
    function exists(value) {
        if (value) {
            return (EventTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    EventTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return EventTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    EventTypeEnum.findByValue = findByValue;
})(EventTypeEnum || (EventTypeEnum = {}));

var EventFilterEnum;
(function (EventFilterEnum) {
    EventFilterEnum["ENTER"] = "enter";
    EventFilterEnum["SPACE"] = "space";
    EventFilterEnum["ESCAPE"] = "escape";
    EventFilterEnum["BACKSPACE"] = "backspace";
    EventFilterEnum["TAB"] = "tab";
    EventFilterEnum["ARROW_UP"] = "arrow-up";
    EventFilterEnum["ARROW_DOWN"] = "arrow-down";
    EventFilterEnum["ARROW_RIGHT"] = "arrow-right";
    EventFilterEnum["ARROW_LEFT"] = "arrow-left";
    EventFilterEnum["HOME"] = "home";
    EventFilterEnum["END"] = "end";
    EventFilterEnum["DELETE"] = "delete";
    EventFilterEnum["PAGE_UP"] = "page-up";
    EventFilterEnum["PAGE_DOWN"] = "page-down";
    EventFilterEnum["ASTERISK"] = "*";
})(EventFilterEnum || (EventFilterEnum = {}));
(function (EventFilterEnum) {
    function exists(value) {
        const eventFilter = value.toUpperCase().trim().replace("-", "_");
        return (EventFilterEnum[eventFilter] != null);
    }
    EventFilterEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            const eventFilter = text.toUpperCase().trim().replace("-", "_");
            return (text) ? EventFilterEnum[eventFilter] : null;
        }
        throw Error(`Argument text with value ${text} does not exist.`);
    }
    EventFilterEnum.findByValue = findByValue;
})(EventFilterEnum || (EventFilterEnum = {}));

class EventConfigurationElement {
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

class EventKey {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
    isMouseEvent() {
        return (this.key == null || false);
    }
    isKeyboardEvent() {
        return !(this.key == null || false);
    }
    static find(value) {
        return this.VALUES.get(value);
    }
}
EventKey.VALUES = new Map([
    [EventFilterEnum.ENTER, new EventKey("Enter")],
    [EventFilterEnum.SPACE, new EventKey(" ")],
    [EventFilterEnum.ESCAPE, new EventKey("Escape")],
    [EventFilterEnum.BACKSPACE, new EventKey("Backspace")],
    [EventFilterEnum.TAB, new EventKey("Tab")],
    [EventFilterEnum.ARROW_UP, new EventKey("ArrowUp")],
    [EventFilterEnum.ARROW_DOWN, new EventKey("ArrowDown")],
    [EventFilterEnum.ARROW_RIGHT, new EventKey("ArrowRight")],
    [EventFilterEnum.ARROW_LEFT, new EventKey("ArrowLeft")],
    [EventFilterEnum.HOME, new EventKey("Home")],
    [EventFilterEnum.END, new EventKey("End")],
    [EventFilterEnum.DELETE, new EventKey("Delete")],
    [EventFilterEnum.PAGE_UP, new EventKey("PageUp")],
    [EventFilterEnum.PAGE_DOWN, new EventKey("PageDown")]
]);

const EventComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidLoad() { }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EventComponent.TAG_NAME = "snt-event";

class EventConfigurationUtils {
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

class EventConfigurationBuilder {
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

export { EventConfigurationBuilder as E, EventConfigurationUtils as a, EventComponent as b };
