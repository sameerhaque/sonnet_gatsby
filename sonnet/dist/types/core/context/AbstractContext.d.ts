import { Context } from "./Context";
export declare abstract class AbstractContext<V> implements Context<V> {
    protected values: Map<string, V>;
    getInstance(key: string): V;
    add(key: string, value: V): void;
    remove(key: string): void;
    exists(key: string): boolean;
    getObject(): object;
    fromObject(instance: object): AbstractContext<V>;
    getValues(): Map<string, V>;
}
