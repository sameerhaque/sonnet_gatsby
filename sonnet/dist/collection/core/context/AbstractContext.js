export class AbstractContext {
    constructor() {
        this.values = new Map();
    }
    getInstance(key) {
        return this.values.get(key);
    }
    add(key, value) {
        this.values.set(key, value);
    }
    remove(key) {
        this.values.delete(key);
    }
    exists(key) {
        return this.values.has(key);
    }
    getObject() {
        const result = {};
        for (let prop of this.values) {
            result[prop[0]] = prop[1];
        }
        return result;
    }
    fromObject(instance) {
        Object.keys(instance).forEach(key => {
            this.values.set(key, instance[key]);
        });
        return this;
    }
    getValues() {
        return this.values;
    }
}
