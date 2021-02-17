export class KeyboardEventProcessor {
    constructor() {
        this.delegatedHandlers = new Map();
    }
    setDelegatedHandlers(delegatedHandlers) {
        this.delegatedHandlers = delegatedHandlers;
    }
    setDefaultHandler(defaultHandler) {
        this.defaultHandler = defaultHandler;
    }
    getDelegatedHandlers() {
        return this.delegatedHandlers;
    }
    hasDelegatedHandler(evt) {
        return this.delegatedHandlers.has(evt.key);
    }
    hasDefaultHandler() {
        return typeof (this.defaultHandler) == "function";
    }
    process(evt) {
        if (this.delegatedHandlers.has(evt.key)) {
            const delegatedEvent = this.delegatedHandlers.get(evt.key);
            delegatedEvent(evt);
        }
        else if (this.defaultHandler) {
            this.defaultHandler(evt);
        }
    }
}
