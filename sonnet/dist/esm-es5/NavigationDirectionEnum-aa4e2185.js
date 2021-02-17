var KeyboardEventProcessor = /** @class */ (function () {
    function KeyboardEventProcessor() {
        this.delegatedHandlers = new Map();
    }
    KeyboardEventProcessor.prototype.setDelegatedHandlers = function (delegatedHandlers) {
        this.delegatedHandlers = delegatedHandlers;
    };
    KeyboardEventProcessor.prototype.setDefaultHandler = function (defaultHandler) {
        this.defaultHandler = defaultHandler;
    };
    KeyboardEventProcessor.prototype.getDelegatedHandlers = function () {
        return this.delegatedHandlers;
    };
    KeyboardEventProcessor.prototype.hasDelegatedHandler = function (evt) {
        return this.delegatedHandlers.has(evt.key);
    };
    KeyboardEventProcessor.prototype.hasDefaultHandler = function () {
        return typeof (this.defaultHandler) == "function";
    };
    KeyboardEventProcessor.prototype.process = function (evt) {
        if (this.delegatedHandlers.has(evt.key)) {
            var delegatedEvent = this.delegatedHandlers.get(evt.key);
            delegatedEvent(evt);
        }
        else if (this.defaultHandler) {
            this.defaultHandler(evt);
        }
    };
    return KeyboardEventProcessor;
}());
var KeyboardEventProcessorBuilder = /** @class */ (function () {
    function KeyboardEventProcessorBuilder() {
        this.delegatedHandlers = new Map();
    }
    KeyboardEventProcessorBuilder.newInstance = function () {
        return new KeyboardEventProcessorBuilder();
    };
    KeyboardEventProcessorBuilder.prototype.withKey = function (key, handlerFn) {
        this.delegatedHandlers.set(key, handlerFn);
        return this;
    };
    KeyboardEventProcessorBuilder.prototype.withKeys = function (keys, handlerFn) {
        var _this = this;
        keys.forEach(function (key) {
            _this.delegatedHandlers.set(key, handlerFn);
        });
        return this;
    };
    KeyboardEventProcessorBuilder.prototype.withDefaultHandler = function (handlerFn) {
        this.defaultHandler = handlerFn;
        return this;
    };
    KeyboardEventProcessorBuilder.prototype.build = function () {
        var eventProcessor = new KeyboardEventProcessor;
        eventProcessor.setDelegatedHandlers(this.delegatedHandlers);
        eventProcessor.setDefaultHandler(this.defaultHandler);
        return eventProcessor;
    };
    return KeyboardEventProcessorBuilder;
}());
var Keyboard = {
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
var NavigationDirectionEnum;
(function (NavigationDirectionEnum) {
    NavigationDirectionEnum[NavigationDirectionEnum["FORWARDS"] = 0] = "FORWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["BACKWARDS"] = 1] = "BACKWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["FIRST"] = 2] = "FIRST";
    NavigationDirectionEnum[NavigationDirectionEnum["LAST"] = 3] = "LAST";
    NavigationDirectionEnum[NavigationDirectionEnum["UPWARDS"] = 4] = "UPWARDS";
    NavigationDirectionEnum[NavigationDirectionEnum["DOWNARDS"] = 5] = "DOWNARDS";
})(NavigationDirectionEnum || (NavigationDirectionEnum = {}));
export { KeyboardEventProcessorBuilder as K, NavigationDirectionEnum as N, Keyboard as a };
