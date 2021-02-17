export class ViewportConfiguration {
    constructor() {
        this.parameters = new Map();
    }
    addParameters(key, parameters) {
        if (!(this.parameters.has(key))) {
            this.parameters.set(key, new Array());
        }
        let instance = this.parameters.get(key);
        parameters.forEach((el) => instance.push(el));
    }
    getParametersByKey(key) {
        return (this.parameters.has(key)) ? this.parameters.get(key) : new Array();
    }
    hasKey(key) {
        return this.parameters.has(key);
    }
    hasStylesForKey(key) {
        let result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(parameter => {
                if (parameter.hasStyles()) {
                    result = true;
                }
            });
        }
        return result;
    }
    hasClassesForKey(key) {
        let result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(parameter => {
                if (parameter.hasClasses()) {
                    result = true;
                }
            });
        }
        return result;
    }
    hasAttributesForKey(key) {
        let result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(parameter => {
                if (parameter.hasAttributes()) {
                    result = true;
                }
            });
        }
        return result;
    }
    getStyles() {
    }
}
