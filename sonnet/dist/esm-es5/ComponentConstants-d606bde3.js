var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pair = /** @class */ (function () {
    function Pair() {
    }
    Pair.of = function (left, right) {
        return new MutablePair(left, right);
    };
    return Pair;
}());
var MutablePair = /** @class */ (function (_super) {
    __extends(MutablePair, _super);
    function MutablePair(left, right) {
        var _this = _super.call(this) || this;
        _this.tuple = [left, right];
        return _this;
    }
    MutablePair.prototype.getLeft = function () {
        return this.tuple[0];
    };
    MutablePair.prototype.getRight = function () {
        return this.tuple[1];
    };
    return MutablePair;
}(Pair));
var ComponentConstants = /** @class */ (function () {
    function ComponentConstants() {
    }
    return ComponentConstants;
}());
ComponentConstants.EXTRA_SMALL = Pair.of(0, 319);
ComponentConstants.SMALL = Pair.of(320, 767);
ComponentConstants.MEDIUM = Pair.of(768, 1023);
ComponentConstants.LARGE = Pair.of(1024, 1439);
ComponentConstants.EXTRA_LARGE = Pair.of(1440, null);
ComponentConstants.CART_COOKIE_NAME = "cart_number_of_quotes";
ComponentConstants.AUTH_COOKIE_NAME = "_auth";
export { ComponentConstants as C, Pair as P };
