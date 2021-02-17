export interface Context<V> {
    getInstance(key: string): V;
    add(key: string, value: V): any;
    remove(key: string): any;
    exists(key: string): boolean;
    getObject(): any;
    fromObject(instance: object): void;
    getValues(): Map<string, V>;
}
