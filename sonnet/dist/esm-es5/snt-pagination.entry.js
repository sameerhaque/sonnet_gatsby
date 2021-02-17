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
import { r as registerInstance, e as createEvent, h } from './index-79f6678c.js';
var faqPaginationComponentCss = "snt-pagination .pagination-container{border-top:1px #147582 solid;padding-top:15px;max-width:260px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:21px;font-size:12px}snt-pagination .prev-link-wrapper{padding-left:4px;display:inline-block}snt-pagination .next-link-wrapper{padding-right:4px;display:inline-block}snt-pagination i.arrows{border-style:solid;border-width:0 1px 1px 0;display:inline-block;padding:3.5px}snt-pagination .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}snt-pagination .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}snt-pagination .page-number-wrapper{margin:0px 10px;display:inline-block}snt-pagination .desktop-page-numbers{display:none}snt-pagination a{text-decoration:none;color:#323232;line-height:21px;font-size:12px}snt-pagination a:hover{text-decoration:none;outline:none;color:#147582}snt-pagination a:hover .prev-link{text-decoration:underline}snt-pagination a:hover .next-link{text-decoration:underline}snt-pagination a:hover .page-number-wrapper .page-number{font-family:\"Averta-ExtraBold\";font-weight:500;color:#147582}snt-pagination a:focus{text-decoration:none;outline:none;color:#147582}snt-pagination a:focus .prev-link{outline:solid;outline-width:1px;outline-offset:2px;text-decoration:underline}snt-pagination a:focus .next-link{outline:solid;outline-width:1px;outline-offset:2px;text-decoration:underline}snt-pagination a:focus .page-number-outline{outline-style:solid;outline-width:1px;outline-offset:3px;outline-color:#147582}snt-pagination a:focus .page-number-outline .page-number{color:#147582;font-family:\"Averta-ExtraBold\";font-weight:500}snt-pagination a:focus:active .page-number-outline,snt-pagination a:focus:active.active .page-number-outline{outline:none}snt-pagination a:focus:active .page-number-outline .page-number,snt-pagination a:focus:active.active .page-number-outline .page-number{color:#147582;font-family:\"Averta-ExtraBold\";font-weight:500}snt-pagination a.active .page-number{color:#323232;border-bottom:2px #147582 solid}snt-pagination a.hidden{visibility:hidden}snt-pagination snt-layout[viewport=medium] .pagination-container{padding-top:30px;max-width:694px;line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] .page-number-wrapper{margin:0px 20px}snt-pagination snt-layout[viewport=medium] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=medium] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=medium] a{line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=large] .pagination-container{max-width:654px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{max-width:800px}snt-pagination snt-layout[viewport=large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] .page-number-wrapper{margin:0px 10px}snt-pagination snt-layout[viewport=large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] .page-number-wrapper{margin:0px 10px}snt-pagination snt-layout[viewport=extra-large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=extra-large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=extra-large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] i.arrows{padding:4.4px}";
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
var FAQPaginationComponent = /** @class */ (function () {
    function FAQPaginationComponent(hostRef) {
        registerInstance(this, hostRef);
        this.pageChanged = createEvent(this, "pageChanged", 7);
        this.prevLinkLang = "Previous";
        this.nextLinkLang = "Next";
        this.pageNumLang = "of";
        this.pageNumAriaLang = "Page number";
        this.paginationNavLang = "FAQ page navigation";
        this.totalPages = 1;
        this.curr = 1;
        this.ellipsis = "...";
    }
    FAQPaginationComponent.prototype.onPageNumberClick = function (pageNum) {
        if (this.curr !== pageNum) {
            this.curr = pageNum;
            this.pageChanged.emit(this.curr.toString());
        }
    };
    FAQPaginationComponent.prototype.onPreviousClick = function () {
        if (this.curr > 1) {
            this.curr--;
            this.pageChanged.emit(this.curr.toString());
        }
    };
    FAQPaginationComponent.prototype.onNextClick = function () {
        if (this.curr < this.totalPages) {
            this.curr++;
            this.pageChanged.emit(this.curr.toString());
        }
    };
    FAQPaginationComponent.prototype.setPageNumber = function (pageNum, emitEvent) {
        if (emitEvent === void 0) { emitEvent = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.curr !== pageNum && pageNum >= 1 && pageNum <= this.totalPages) {
                    this.curr = pageNum;
                    if (emitEvent) {
                        this.pageChanged.emit(this.curr.toString());
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    FAQPaginationComponent.prototype.getPageLink = function (pageNum) {
        return h("a", { href: "javascript:void(0);", class: this.curr == pageNum ? "active" : "", onClick: this.onPageNumberClick.bind(this, pageNum), "aria-label": this.pageNumAriaLang + " " + pageNum }, h("div", { class: "page-number-wrapper" }, h("div", { class: "page-number-outline" }, h("span", { class: "page-number", "data-page": pageNum }, pageNum))));
    };
    FAQPaginationComponent.prototype.getEllipsis = function () {
        return h("span", { class: "page-number" }, this.ellipsis);
    };
    FAQPaginationComponent.prototype.getPageNumbersForDesktop = function () {
        var pageNumbersDesktop = [];
        var i = 1;
        var j = this.totalPages - 1;
        var addEndEllipsis = false;
        //Add first page
        pageNumbersDesktop.push(this.getPageLink(i));
        i++;
        //Add start ellipsis if required
        if (this.curr - 1 > 4) {
            i = this.curr - 2;
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Check if end ellipsis is required
        if (this.totalPages - this.curr > 4) {
            j = this.curr + 2;
            addEndEllipsis = true;
        }
        //Add current and middle pages
        while (i <= j) {
            pageNumbersDesktop.push(this.getPageLink(i));
            i++;
        }
        //Add end ellipsis if required
        if (addEndEllipsis) {
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Add last page
        if (this.totalPages > 1) {
            pageNumbersDesktop.push(this.getPageLink(this.totalPages));
        }
        return pageNumbersDesktop;
    };
    FAQPaginationComponent.prototype.render = function () {
        var pageNumbersMobile = h("span", null, this.curr, " ", this.pageNumLang, " ", this.totalPages);
        var pageNumbersDesktop = this.getPageNumbersForDesktop();
        return [
            h("snt-layout", null, h("div", { class: "pagination-container", role: "navigation", "aria-label": this.paginationNavLang }, h("div", null, h("a", { href: "javascript:void(0);", class: this.curr > 1 ? "" : "hidden", onClick: this.onPreviousClick.bind(this) }, h("span", { class: "prev-icon", "aria-hidden": "true" }, h("i", { class: "arrows left" })), h("div", { class: "prev-link-wrapper" }, h("span", { class: "prev-link" }, this.prevLinkLang)))), h("div", null, h("div", { class: "desktop-page-numbers" }, pageNumbersDesktop), h("div", { class: "mobile-page-numbers" }, pageNumbersMobile)), h("div", null, h("a", { href: "javascript:void(0);", class: this.curr < this.totalPages ? "" : "hidden", onClick: this.onNextClick.bind(this) }, h("div", { class: "next-link-wrapper" }, h("span", { class: "next-link" }, this.nextLinkLang)), h("span", { class: "next-icon", "aria-hidden": "true" }, h("i", { class: "arrows right" }))))))
        ];
    };
    return FAQPaginationComponent;
}());
FAQPaginationComponent.TAG_NAME = "snt-pagination";
FAQPaginationComponent.style = faqPaginationComponentCss;
export { FAQPaginationComponent as snt_pagination };
