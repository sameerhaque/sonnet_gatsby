import { KeyboardEventProcessor } from './KeyboardEventProcessor';
export declare class KeyboardEventProcessorBuilder {
    private readonly delegatedHandlers;
    private defaultHandler;
    static newInstance(): KeyboardEventProcessorBuilder;
    private constructor();
    withKey(key: string, handlerFn: Function): this;
    withKeys(keys: Array<string>, handlerFn: Function): this;
    withDefaultHandler(handlerFn: Function): this;
    build(): KeyboardEventProcessor;
}
