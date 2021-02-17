export var ViewportTypeEnum;
(function (ViewportTypeEnum) {
    ViewportTypeEnum["DESKTOP_HD"] = "desktop-hd";
    ViewportTypeEnum["DESKTOP"] = "desktop";
    ViewportTypeEnum["TABLET"] = "tablet";
    ViewportTypeEnum["MOBILE"] = "mobile";
})(ViewportTypeEnum || (ViewportTypeEnum = {}));
(function (ViewportTypeEnum) {
    function findByValue(value) {
        return ViewportTypeEnum[value.toUpperCase().replace("-", "_")];
    }
    ViewportTypeEnum.findByValue = findByValue;
})(ViewportTypeEnum || (ViewportTypeEnum = {}));
