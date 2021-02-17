'use strict';

class Pair {
    static of(left, right) {
        return new MutablePair(left, right);
    }
}
class MutablePair extends Pair {
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

class ComponentConstants {
}
ComponentConstants.EXTRA_SMALL = Pair.of(0, 319);
ComponentConstants.SMALL = Pair.of(320, 767);
ComponentConstants.MEDIUM = Pair.of(768, 1023);
ComponentConstants.LARGE = Pair.of(1024, 1439);
ComponentConstants.EXTRA_LARGE = Pair.of(1440, null);
ComponentConstants.CART_COOKIE_NAME = "cart_number_of_quotes";
ComponentConstants.AUTH_COOKIE_NAME = "_auth";

exports.ComponentConstants = ComponentConstants;
exports.Pair = Pair;
