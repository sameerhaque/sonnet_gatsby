export var EventTypeEnum;
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
