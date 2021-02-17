export declare abstract class Pair<L, R> {
    tuple: [L, R];
    static of<L, R>(left: L, right: R): Pair<L, R>;
    abstract getLeft(): L;
    abstract getRight(): R;
}
export declare class MutablePair<L, R> extends Pair<L, R> {
    constructor(left: L, right: R);
    getLeft(): L;
    getRight(): R;
}
