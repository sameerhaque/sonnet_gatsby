export declare class KeyboardEventProcessor {
    private delegatedHandlers;
    private defaultHandler;
    constructor();
    setDelegatedHandlers(delegatedHandlers: any): void;
    setDefaultHandler(defaultHandler: Function): void;
    getDelegatedHandlers(): Map<string, Function>;
    hasDelegatedHandler(evt: KeyboardEvent): boolean;
    hasDefaultHandler(): boolean;
    process(evt: KeyboardEvent): void;
}
