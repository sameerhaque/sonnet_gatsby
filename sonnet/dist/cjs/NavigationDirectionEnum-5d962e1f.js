'use strict';

class KeyboardEventProcessor {
    constructor() {
        this.delegatedHandlers = new Map();
    }
    setDelegatedHandlers(delegatedHandlers) {
        this.delegatedHandlers = delegatedHandlers;
    }
    setDefaultHandler(defaultHandler) {
        this.defaultHandler = defaultHandler;
    }
    getDelegatedHandlers() {
        return this.delegatedHandlers;
    }
    hasDelegatedHandler(evt) {
        return this.delegatedHandlers.has(evt.key);
    }
    hasDefaultHandler() {
        return typeof (this.defaultHandler) == "function";
    }
    process(evt) {
        if (this.delegatedHandlers.has(evt.key)) {
            const delegatedEvent = this.delegatedHandlers.get(evt.key);
            delegatedEvent(evt);
        }
        else if (this.defaultHandler) {
            this.defaultHandler(evt);
        }
    }
}

class KeyboardEventProcessorBuilder {
    constructor() {
        this.delegatedHandlers = new Map();
    }
    static newInstance() {
        return new KeyboardEventProcessorBuilder();
    }
    withKey(key, handlerFn) {
        this.delegatedHandlers.set(key, handlerFn);
        return this;
    }
    withKeys(keys, handlerFn) {
        keys.forEach((key) => {
            this.delegatedHandlers.set(key, handlerFn);
        });
        return this;
    }
    withDefaultHandler(handlerFn) {
        this.defaultHandler = handlerFn;
        return this;
    }
    build() {
        const eventProcessor = new KeyboardEventProcessor;
        eventProcessor.setDelegatedHandlers(this.delegatedHandlers);
        eventProcessor.setDefaultHandler(this.defaultHandler);
        return eventProcessor;
    }
}

const Keyboard = {
    ENTER: "Enter",
    SPACE: " ",
    ESCAPE: "Escape",
    BACKSPACE: "Backspace",
    TAB: "Tab",
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_RIGHT: "ArrowRight",
    ARROW_LEFT: "ArrowLeft",
    HOME: "Home",
    END: "End",
    DELETE: "Delete",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    ASTERISK: "*"
};

(function (NavigationDirectionEnum) {
    NavigationDirectionEnum[NavigationDirectionEnum["FORWARDS"] = 0] = "FORWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["BACKWARDS"] = 1] = "BACKWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["FIRST"] = 2] = "FIRST";
    NavigationDirectionEnum[NavigationDirectionEnum["LAST"] = 3] = "LAST";
    NavigationDirectionEnum[NavigationDirectionEnum["UPWARDS"] = 4] = "UPWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["DOWNARDS"] = 5] = "DOWNARDS";
})(exports.NavigationDirectionEnum || (exports.NavigationDirectionEnum = {}));

exports.Keyboard = Keyboard;
exports.KeyboardEventProcessorBuilder = KeyboardEventProcessorBuilder;
