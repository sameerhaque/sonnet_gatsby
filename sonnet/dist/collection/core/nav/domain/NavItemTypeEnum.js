export var NavItemTypeEnum;
(function (NavItemTypeEnum) {
    NavItemTypeEnum["LINK"] = "link";
    NavItemTypeEnum["SUBNAV"] = "subnav";
    NavItemTypeEnum["ACTION_LINK"] = "action-link";
    NavItemTypeEnum["CUSTOM"] = "custom";
})(NavItemTypeEnum || (NavItemTypeEnum = {}));
(function (NavItemTypeEnum) {
    function exists(value) {
        if (value) {
            return (NavItemTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    NavItemTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return NavItemTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    NavItemTypeEnum.findByValue = findByValue;
})(NavItemTypeEnum || (NavItemTypeEnum = {}));
