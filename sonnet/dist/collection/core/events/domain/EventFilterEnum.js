export var EventFilterEnum;
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
