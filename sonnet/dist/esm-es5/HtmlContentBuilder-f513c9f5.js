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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { S as StringUtils } from './StringUtils-617c552f.js';
var AbstractContentBuilder = /** @class */ (function () {
    function AbstractContentBuilder() {
    }
    AbstractContentBuilder.prototype.withConditionalBooleanArgument = function (fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    };
    AbstractContentBuilder.prototype.withConditionalObjectArgument = function (fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    };
    AbstractContentBuilder.prototype.withConditionalStringArgument = function (fn, arg) {
        return (StringUtils.notEmpty(arg)) ? this.withConditionalArguments(fn, arg) : this;
    };
    AbstractContentBuilder.prototype.withConditionalArguments = function (fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return (args && args.length > 0) ? fn.apply(this, args) : this;
    };
    return AbstractContentBuilder;
}());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AbstractUrlContentBuilder = /** @class */ (function (_super_1) {
    __extends(AbstractUrlContentBuilder, _super_1);
    function AbstractUrlContentBuilder() {
        return _super_1 !== null && _super_1.apply(this, arguments) || this;
    }
    AbstractUrlContentBuilder.prototype.withUrl = function (url) {
        this.url = url;
        return this;
    };
    AbstractUrlContentBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.url) {
                    return [2 /*return*/, fetch(this.url.href).then(function (res) { return res.text(); }).then(function (body) {
                            return _this.parse(body);
                        })];
                }
                throw new Error("No content has been defined using the builder.");
            });
        });
    };
    return AbstractUrlContentBuilder;
}(AbstractContentBuilder));
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HtmlContentBuilder = /** @class */ (function (_super_1) {
    __extends(HtmlContentBuilder, _super_1);
    function HtmlContentBuilder() {
        return _super_1.call(this) || this;
    }
    HtmlContentBuilder.newInstance = function () {
        return new HtmlContentBuilder();
    };
    HtmlContentBuilder.prototype.withValue = function (value) {
        this.value = value;
        this.url = null;
        return this;
    };
    HtmlContentBuilder.prototype.withParent = function (parent) {
        this.parentElement = parent;
        this.value = null;
        return this;
    };
    HtmlContentBuilder.prototype.parse = function (value) {
        if (window.document["documentMode"] === undefined) {
            var divElement = document.createElement("div");
            var template = document.createElement("template");
            template.innerHTML = value;
            divElement.appendChild(template.content);
            this.setJavascript(divElement);
            return document.body.appendChild(divElement);
        }
        else {
            var divElement = document.createElement("div");
            divElement.innerHTML = value;
            return divElement;
        }
    };
    HtmlContentBuilder.prototype.build = function () {
        var _super = Object.create(null, {
            build: { get: function () { return _super_1.prototype.build; } }
        });
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.parentElement =
                            this.parentElement || document.createElement("div");
                        if (!(StringUtils.isEmpty(this.value) && this.url)) return [3 /*break*/, 2];
                        _b = (_a = this.parentElement).appendChild;
                        return [4 /*yield*/, _super.build.call(this)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        if (StringUtils.notEmpty(this.value)) {
                            this.parentElement.appendChild(this.parse(this.value));
                        }
                        else {
                            throw new Error("No HTML content has been defined using this builder.");
                        }
                        _c.label = 3;
                    case 3: return [2 /*return*/, this.parentElement];
                }
            });
        });
    };
    HtmlContentBuilder.prototype.setJavascript = function (elm) {
        Array.from(elm.querySelectorAll("script")).forEach(function (oldScript) {
            var newScript = document.createElement("script");
            Array.from(oldScript.attributes).forEach(function (attr) { return newScript.setAttribute(attr.name, attr.value); });
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    };
    return HtmlContentBuilder;
}(AbstractUrlContentBuilder));
export { AbstractUrlContentBuilder as A, HtmlContentBuilder as H };
