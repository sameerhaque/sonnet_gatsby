export class EventConfiguration {
    constructor() {
        this.configurations = new Map();
    }
    add(event) {
        this.configurations.set(event.type, event);
    }
    remove(event) {
        this.configurations.delete(event.type);
    }
    findByType(type) {
        return this.configurations.get(type);
    }
    hasConfigurations() {
        return (this.configurations.size > 0);
    }
    getConfigurations() {
        return this.configurations;
    }
}
