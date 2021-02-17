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
import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
var blogResultsComponentCss = "snt-blog-results snt-multi-column-mixed snt-image img{position:unset;top:unset}snt-blog-results snt-multi-column-mixed.first-row .column.last-row{margin-bottom:20px}snt-blog-results snt-multi-column-mixed.result-rows .spacings{padding-top:10px}";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SntBlogResultsComponent = /** @class */ (function () {
    function SntBlogResultsComponent(hostRef) {
        registerInstance(this, hostRef);
        this.blogResults = [];
        this.blogResultsString = StringUtils.empty();
    }
    SntBlogResultsComponent.prototype.componentWillRender = function () {
        this.blogResults = JSON.parse(this.blogResultsString);
    };
    SntBlogResultsComponent.prototype.componentDidRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var viewport, firstRowEl, resultRowsEl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstRowEl = document.querySelector('snt-multi-column-mixed[class*="first-row"]');
                        if (!firstRowEl) return [3 /*break*/, 5];
                        viewport = firstRowEl
                            .querySelector("snt-layout")
                            .getAttribute("viewport");
                        return [4 /*yield*/, firstRowEl.tagLastRow(viewport)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firstRowEl.setColumns()];
                    case 2:
                        _a.sent();
                        resultRowsEl = document.querySelector('snt-multi-column-mixed[class*="result-rows"]');
                        if (!resultRowsEl) return [3 /*break*/, 5];
                        return [4 /*yield*/, resultRowsEl.setColumns()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, resultRowsEl.tagLastRow(viewport)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SntBlogResultsComponent.prototype.render = function () {
        return (h(Host, null, this.renderFirstRow(), this.blogResults.length > 2 ? this.renderRows() : null));
    };
    SntBlogResultsComponent.prototype.renderFirstRow = function () {
        var firstRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}';
        return (h("snt-multi-column-mixed", { class: "first-row no-bottom with-gutter", "column-count": firstRowJson }, this.blogResults.slice(0, 2).map(function (blog) {
            return (h("div", { class: "column" }, h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    };
    SntBlogResultsComponent.prototype.renderRows = function () {
        var resultRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return (h("snt-multi-column-mixed", { class: "result-rows with-gutter", "column-count": resultRowJson, "aria-live": "polite" }, this.blogResults
            .slice(2, this.blogResults.length)
            .map(function (blog) {
            return (h("div", { class: "column" }, h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    };
    Object.defineProperty(SntBlogResultsComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return SntBlogResultsComponent;
}());
SntBlogResultsComponent.style = blogResultsComponentCss;
export { SntBlogResultsComponent as snt_blog_results };
