export var ViewportClassEnum;
(function (ViewportClassEnum) {
    ViewportClassEnum["TOP_PADDING"] = "T-PD";
    ViewportClassEnum["BOTTOM_PADDING"] = "B-PD";
    ViewportClassEnum["LEFT_PADDING"] = "L-PD";
    ViewportClassEnum["RIGHT_PADDING"] = "R-PD";
})(ViewportClassEnum || (ViewportClassEnum = {}));
(function (ViewportClassEnum) {
    function findByValue(value) {
        return ViewportClassEnum[value];
    }
    ViewportClassEnum.findByValue = findByValue;
})(ViewportClassEnum || (ViewportClassEnum = {}));
