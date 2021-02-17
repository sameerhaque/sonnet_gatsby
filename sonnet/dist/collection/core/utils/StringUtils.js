export class StringUtils {
    static toCamelCase(value) {
        const arr = value.split(/[_-]/);
        let result = "";
        for (let i = 1; i < arr.length; i++) {
            result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr[0] + result;
    }
    static toDashCase(value) {
        return value.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    }
    static hasValue(value) {
        return (!(StringUtils.isNullOrUndefined(value)) && ((StringUtils.isString(value)) && (value.trim().length > 0)));
    }
    static hasLength(value) {
        return !(StringUtils.isEmpty(value));
    }
    static isEmpty(value) {
        return ((StringUtils.isNullOrUndefined(value)) || (StringUtils.tryIsString(value) && (value.length == 0)));
    }
    static notEmpty(object) {
        return !(StringUtils.isEmpty(object));
    }
    static isString(value) {
        return (typeof (value) == "string");
    }
    static empty() {
        return "";
    }
    static join(values, separator) {
        return Array.from(values).join(separator);
    }
    static tryIsString(value) {
        if (!(StringUtils.isString(value))) {
            throw "Object " + value + " is not an instance of type string";
        }
        return true;
    }
}
StringUtils.SPACE_SEPARATOR = " ";
StringUtils.COMMA_SEPARATOR = ", ";
StringUtils.isNullOrUndefined = function (object) {
    return ((object === undefined) || (object === null));
};
