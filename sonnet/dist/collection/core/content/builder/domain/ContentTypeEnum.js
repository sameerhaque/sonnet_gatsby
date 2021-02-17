export var ContentTypeEnum;
(function (ContentTypeEnum) {
    ContentTypeEnum["HTML"] = "html";
    ContentTypeEnum["JSON"] = "json";
    ContentTypeEnum["XML"] = "xml";
    ContentTypeEnum["TEXT"] = "text";
})(ContentTypeEnum || (ContentTypeEnum = {}));
(function (ContentTypeEnum) {
    function exists(value) {
        if (value) {
            return (ContentTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    ContentTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return ContentTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    ContentTypeEnum.findByValue = findByValue;
})(ContentTypeEnum || (ContentTypeEnum = {}));
