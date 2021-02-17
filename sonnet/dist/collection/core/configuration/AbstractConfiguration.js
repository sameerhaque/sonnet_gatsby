export class AbstractConfiguration {
    constructor() {
        this.configurations = new Map();
    }
    remove(key) {
        this.configurations.delete(key);
    }
    hasConfigurations() {
        return (this.configurations.size > 0);
    }
    getConfigurations() {
        return this.configurations;
    }
    values() {
        return this.configurations.values();
    }
    keys() {
        return this.configurations.keys();
    }
}
