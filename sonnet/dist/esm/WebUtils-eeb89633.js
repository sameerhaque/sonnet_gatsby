import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

class WebUtils {
    static getObjectReference(value, base) {
        return value.split('.').reduce((obj, i) => {
            const reference = obj[i];
            if (reference) {
                return reference;
            }
            throw Error(`Argument value with value ${value} does not exist.`);
        }, base);
    }
    static sleep(duration) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }
    static getTransitionDuration(element) {
        return parseFloat(getComputedStyle(element).transitionDuration) * 1000;
    }
    static isValidEscapeKey(event) {
        return ((event["keyCode"] && event.keyCode == 27) || (event["key"] && event.key == "Escape") || (event["code"] && event.key == "Escape"));
    }
    static appendElement(parent, element, elementRequired = false) {
        if (element) {
            parent.appendChild(element);
        }
        else if (elementRequired) {
            throw Error("Argument element is null and marked as required.");
        }
    }
    static generateClasses(classes, value) {
        let results = new Set(classes);
        new Set(value.split(StringUtils.SPACE_SEPARATOR)).forEach(results.add, results);
        return StringUtils.join(results, StringUtils.SPACE_SEPARATOR);
    }
    static getAbsoluteHeight(el) {
        // Get the DOM Node if you pass in a string
        el = (typeof el === 'string') ? document.querySelector(el) : el;
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles['marginTop']) +
            parseFloat(styles['marginBottom']);
        return Math.ceil(el.offsetHeight + margin);
    }
    static getObjectFromString(string) {
        try {
            return JSON.parse(string);
        }
        catch (e) {
            throw new Error("Error!");
        }
    }
    static getMediaQueryInstances() {
        const mediaQueryInstances = [
            {
                name: 'extra-small',
                mediaQueryList: window.matchMedia(`(max-width: ${ComponentConstants.EXTRA_SMALL.getRight()}px)`)
            },
            {
                name: 'small',
                mediaQueryList: window.matchMedia(`(min-width: ${ComponentConstants.SMALL.getLeft()}px) and (max-width: ${ComponentConstants.SMALL.getRight()}px)`)
            },
            {
                name: 'medium',
                mediaQueryList: window.matchMedia(`(min-width: ${ComponentConstants.MEDIUM.getLeft()}px) and (max-width: ${ComponentConstants.MEDIUM.getRight()}px)`)
            },
            {
                name: 'large',
                mediaQueryList: window.matchMedia(`(min-width: ${ComponentConstants.LARGE.getLeft()}px) and (max-width: ${ComponentConstants.LARGE.getRight()}px)`)
            },
            {
                name: 'extra-large',
                mediaQueryList: window.matchMedia(`(min-width: ${ComponentConstants.EXTRA_LARGE.getLeft()}px)`)
            }
        ];
        return mediaQueryInstances;
    }
}

export { WebUtils as W };
