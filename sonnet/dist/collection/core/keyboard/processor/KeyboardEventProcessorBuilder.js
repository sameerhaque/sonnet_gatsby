import { KeyboardEventProcessor } from './KeyboardEventProcessor';
export class KeyboardEventProcessorBuilder {
    constructor() {
        this.delegatedHandlers = new Map();
    }
    static newInstance() {
        return new KeyboardEventProcessorBuilder();
    }
    withKey(key, handlerFn) {
        this.delegatedHandlers.set(key, handlerFn);
        return this;
    }
    withKeys(keys, handlerFn) {
        keys.forEach((key) => {
            this.delegatedHandlers.set(key, handlerFn);
        });
        return this;
    }
    withDefaultHandler(handlerFn) {
        this.defaultHandler = handlerFn;
        return this;
    }
    build() {
        const eventProcessor = new KeyboardEventProcessor;
        eventProcessor.setDelegatedHandlers(this.delegatedHandlers);
        eventProcessor.setDefaultHandler(this.defaultHandler);
        return eventProcessor;
    }
}
