export class Pair {
    static of(left, right) {
        return new MutablePair(left, right);
    }
}
export class MutablePair extends Pair {
    constructor(left, right) {
        super();
        this.tuple = [left, right];
    }
    getLeft() {
        return this.tuple[0];
    }
    getRight() {
        return this.tuple[1];
    }
}
