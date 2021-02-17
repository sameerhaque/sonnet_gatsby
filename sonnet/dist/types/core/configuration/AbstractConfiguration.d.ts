export declare abstract class AbstractConfiguration<K, V> {
    protected configurations: Map<K, V>;
    abstract add(value: V): any;
    constructor();
    remove(key: K): void;
    hasConfigurations(): boolean;
    getConfigurations(): Map<K, V>;
    values(): IterableIterator<V>;
    keys(): IterableIterator<K>;
}
