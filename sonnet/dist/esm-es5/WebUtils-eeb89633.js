import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
var WebUtils = /** @class */ (function () {
    function WebUtils() {
    }
    WebUtils.getObjectReference = function (value, base) {
        return value.split('.').reduce(function (obj, i) {
            var reference = obj[i];
            if (reference) {
                return reference;
            }
            throw Error("Argument value with value " + value + " does not exist.");
        }, base);
    };
    WebUtils.sleep = function (duration) {
        return new Promise(function (resolve) { return setTimeout(resolve, duration); });
    };
    WebUtils.getTransitionDuration = function (element) {
        return parseFloat(getComputedStyle(element).transitionDuration) * 1000;
    };
    WebUtils.isValidEscapeKey = function (event) {
        return ((event["keyCode"] && event.keyCode == 27) || (event["key"] && event.key == "Escape") || (event["code"] && event.key == "Escape"));
    };
    WebUtils.appendElement = function (parent, element, elementRequired) {
        if (elementRequired === void 0) { elementRequired = false; }
        if (element) {
            parent.appendChild(element);
        }
        else if (elementRequired) {
            throw Error("Argument element is null and marked as required.");
        }
    };
    WebUtils.generateClasses = function (classes, value) {
        var results = new Set(classes);
        new Set(value.split(StringUtils.SPACE_SEPARATOR)).forEach(results.add, results);
        return StringUtils.join(results, StringUtils.SPACE_SEPARATOR);
    };
    WebUtils.getAbsoluteHeight = function (el) {
        // Get the DOM Node if you pass in a string
        el = (typeof el === 'string') ? document.querySelector(el) : el;
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles['marginTop']) +
            parseFloat(styles['marginBottom']);
        return Math.ceil(el.offsetHeight + margin);
    };
    WebUtils.getObjectFromString = function (string) {
        try {
            return JSON.parse(string);
        }
        catch (e) {
            throw new Error("Error!");
        }
    };
    WebUtils.getMediaQueryInstances = function () {
        var mediaQueryInstances = [
            {
                name: 'extra-small',
                mediaQueryList: window.matchMedia("(max-width: " + ComponentConstants.EXTRA_SMALL.getRight() + "px)")
            },
            {
                name: 'small',
                mediaQueryList: window.matchMedia("(min-width: " + ComponentConstants.SMALL.getLeft() + "px) and (max-width: " + ComponentConstants.SMALL.getRight() + "px)")
            },
            {
                name: 'medium',
                mediaQueryList: window.matchMedia("(min-width: " + ComponentConstants.MEDIUM.getLeft() + "px) and (max-width: " + ComponentConstants.MEDIUM.getRight() + "px)")
            },
            {
                name: 'large',
                mediaQueryList: window.matchMedia("(min-width: " + ComponentConstants.LARGE.getLeft() + "px) and (max-width: " + ComponentConstants.LARGE.getRight() + "px)")
            },
            {
                name: 'extra-large',
                mediaQueryList: window.matchMedia("(min-width: " + ComponentConstants.EXTRA_LARGE.getLeft() + "px)")
            }
        ];
        return mediaQueryInstances;
    };
    return WebUtils;
}());
export { WebUtils as W };
