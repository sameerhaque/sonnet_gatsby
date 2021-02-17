var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.toCamelCase = function (value) {
        var arr = value.split(/[_-]/);
        var result = "";
        for (var i = 1; i < arr.length; i++) {
            result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr[0] + result;
    };
    StringUtils.toDashCase = function (value) {
        return value.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    };
    StringUtils.hasValue = function (value) {
        return (!(StringUtils.isNullOrUndefined(value)) && ((StringUtils.isString(value)) && (value.trim().length > 0)));
    };
    StringUtils.hasLength = function (value) {
        return !(StringUtils.isEmpty(value));
    };
    StringUtils.isEmpty = function (value) {
        return ((StringUtils.isNullOrUndefined(value)) || (StringUtils.tryIsString(value) && (value.length == 0)));
    };
    StringUtils.notEmpty = function (object) {
        return !(StringUtils.isEmpty(object));
    };
    StringUtils.isString = function (value) {
        return (typeof (value) == "string");
    };
    StringUtils.empty = function () {
        return "";
    };
    StringUtils.join = function (values, separator) {
        return Array.from(values).join(separator);
    };
    StringUtils.tryIsString = function (value) {
        if (!(StringUtils.isString(value))) {
            throw "Object " + value + " is not an instance of type string";
        }
        return true;
    };
    return StringUtils;
}());
StringUtils.SPACE_SEPARATOR = " ";
StringUtils.COMMA_SEPARATOR = ", ";
StringUtils.isNullOrUndefined = function (object) {
    return ((object === undefined) || (object === null));
};
export { StringUtils as S };
