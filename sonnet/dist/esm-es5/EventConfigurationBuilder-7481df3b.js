import { r as registerInstance, h, H as Host } from './index-79f6678c.js';
import { R as ReflectionUtils } from './ReflectionUtils-6ed4bd5c.js';
var EventConfiguration = /** @class */ (function () {
    function EventConfiguration() {
        this.configurations = new Map();
    }
    EventConfiguration.prototype.add = function (event) {
        this.configurations.set(event.type, event);
    };
    EventConfiguration.prototype.remove = function (event) {
        this.configurations.delete(event.type);
    };
    EventConfiguration.prototype.findByType = function (type) {
        return this.configurations.get(type);
    };
    EventConfiguration.prototype.hasConfigurations = function () {
        return (this.configurations.size > 0);
    };
    EventConfiguration.prototype.getConfigurations = function () {
        return this.configurations;
    };
    return EventConfiguration;
}());
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
        throw new Error("Argument with value " + value + " must be a valid string.");
    }
    EventTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return EventTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error("Argument text with value " + text + " does not exist.");
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
        var eventFilter = value.toUpperCase().trim().replace("-", "_");
        return (EventFilterEnum[eventFilter] != null);
    }
    EventFilterEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            var eventFilter = text.toUpperCase().trim().replace("-", "_");
            return (text) ? EventFilterEnum[eventFilter] : null;
        }
        throw Error("Argument text with value " + text + " does not exist.");
    }
    EventFilterEnum.findByValue = findByValue;
})(EventFilterEnum || (EventFilterEnum = {}));
var EventConfigurationElement = /** @class */ (function () {
    function EventConfigurationElement(type, filters) {
        this.type = type;
        this.filters = filters;
    }
    EventConfigurationElement.prototype.hasKeys = function () {
        return (this.type == EventTypeEnum.KEYDOWN && this.filters.size > 0);
    };
    EventConfigurationElement.prototype.getKeys = function () {
        var results = new Set();
        if (this.hasKeys()) {
            this.filters.forEach(function (filter) {
                results.add(filter.getKey());
            });
        }
        return results;
    };
    return EventConfigurationElement;
}());
var EventKey = /** @class */ (function () {
    function EventKey(key) {
        this.key = key;
    }
    EventKey.prototype.getKey = function () {
        return this.key;
    };
    EventKey.prototype.isMouseEvent = function () {
        return (this.key == null || false);
    };
    EventKey.prototype.isKeyboardEvent = function () {
        return !(this.key == null || false);
    };
    EventKey.find = function (value) {
        return this.VALUES.get(value);
    };
    return EventKey;
}());
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
var EventComponent = /** @class */ (function () {
    function EventComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    EventComponent.prototype.componentWillLoad = function () { };
    EventComponent.prototype.componentWillUpdate = function () { };
    EventComponent.prototype.componentDidLoad = function () { };
    EventComponent.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EventComponent;
}());
EventComponent.TAG_NAME = "snt-event";
var EventConfigurationUtils = /** @class */ (function () {
    function EventConfigurationUtils() {
    }
    EventConfigurationUtils.processEvent = function (customEvent, eventConfiguration, actionReference, actionData) {
        if (eventConfiguration.hasConfigurations()) {
            var eventTypeEnum = (EventTypeEnum.exists(customEvent.detail.type)) ? EventTypeEnum.findByValue(customEvent.detail.type) : null;
            var configurationElement = (eventTypeEnum) ? eventConfiguration.findByType(eventTypeEnum) : null;
            if (configurationElement) {
                if (configurationElement.hasKeys()) {
                    var eventConfigurationKeyCodes = configurationElement.getKeys();
                    if (!eventConfigurationKeyCodes.has(customEvent.detail.key))
                        return;
                }
                ReflectionUtils.getObjectReference(actionReference).then(function (ref) {
                    ref(customEvent, actionData);
                });
            }
        }
    };
    EventConfigurationUtils.buildConfiguration = function (element) {
        var configuration = new EventConfiguration();
        var elements = element.querySelectorAll(EventComponent.TAG_NAME);
        if (elements && elements.length > 0) {
            Array.from(elements).forEach(function (eventElement) {
                var filterSet = null;
                if (eventElement.filters) {
                    var filters = eventElement.filters.split(" ");
                    filterSet = new Set(filters
                        .filter(function (filter) { return EventFilterEnum.exists(filter); })
                        .map(function (filter) { return EventKey.find(EventFilterEnum.findByValue(filter)); }));
                }
                var eventTypeEnum = (EventTypeEnum.exists(eventElement.type)) ? EventTypeEnum.findByValue(eventElement.type) : null;
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
    };
    return EventConfigurationUtils;
}());
var EventConfigurationBuilder = /** @class */ (function () {
    function EventConfigurationBuilder() {
    }
    EventConfigurationBuilder.newInstanceof = function () {
        return new EventConfigurationBuilder();
    };
    EventConfigurationBuilder.prototype.withComponent = function (element) {
        this.element = element;
        return this;
    };
    EventConfigurationBuilder.prototype.build = function () {
        if (this.element) {
            return EventConfigurationUtils.buildConfiguration(this.element);
        }
        throw new Error();
    };
    return EventConfigurationBuilder;
}());
export { EventConfigurationBuilder as E, EventConfigurationUtils as a, EventComponent as b };
