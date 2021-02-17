export declare class List<T> {
    private _values;
    constructor();
    size(): number;
    add(value: T): void;
    get(index: number): T;
    values(): Array<T>;
    hasValues(): boolean;
}
