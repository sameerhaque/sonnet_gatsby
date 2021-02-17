var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, h, Event, Method } from "@stencil/core";
export class FAQPaginationComponent {
    constructor() {
        this.prevLinkLang = "Previous";
        this.nextLinkLang = "Next";
        this.pageNumLang = "of";
        this.pageNumAriaLang = "Page number";
        this.paginationNavLang = "FAQ page navigation";
        this.totalPages = 1;
        this.curr = 1;
        this.ellipsis = "...";
    }
    onPageNumberClick(pageNum) {
        if (this.curr !== pageNum) {
            this.curr = pageNum;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    onPreviousClick() {
        if (this.curr > 1) {
            this.curr--;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    onNextClick() {
        if (this.curr < this.totalPages) {
            this.curr++;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    setPageNumber(pageNum, emitEvent = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.curr !== pageNum && pageNum >= 1 && pageNum <= this.totalPages) {
                this.curr = pageNum;
                if (emitEvent) {
                    this.pageChanged.emit(this.curr.toString());
                }
            }
        });
    }
    getPageLink(pageNum) {
        return h("a", { href: "javascript:void(0);", class: this.curr == pageNum ? "active" : "", onClick: this.onPageNumberClick.bind(this, pageNum), "aria-label": this.pageNumAriaLang + " " + pageNum },
            h("div", { class: "page-number-wrapper" },
                h("div", { class: "page-number-outline" },
                    h("span", { class: "page-number", "data-page": pageNum }, pageNum))));
    }
    getEllipsis() {
        return h("span", { class: "page-number" }, this.ellipsis);
    }
    getPageNumbersForDesktop() {
        let pageNumbersDesktop = [];
        let i = 1;
        let j = this.totalPages - 1;
        let addEndEllipsis = false;
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
    }
    render() {
        let pageNumbersMobile = h("span", null,
            this.curr,
            " ",
            this.pageNumLang,
            " ",
            this.totalPages);
        let pageNumbersDesktop = this.getPageNumbersForDesktop();
        return [
            h("snt-layout", null,
                h("div", { class: "pagination-container", role: "navigation", "aria-label": this.paginationNavLang },
                    h("div", null,
                        h("a", { href: "javascript:void(0);", class: this.curr > 1 ? "" : "hidden", onClick: this.onPreviousClick.bind(this) },
                            h("span", { class: "prev-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows left" })),
                            h("div", { class: "prev-link-wrapper" },
                                h("span", { class: "prev-link" }, this.prevLinkLang)))),
                    h("div", null,
                        h("div", { class: "desktop-page-numbers" }, pageNumbersDesktop),
                        h("div", { class: "mobile-page-numbers" }, pageNumbersMobile)),
                    h("div", null,
                        h("a", { href: "javascript:void(0);", class: this.curr < this.totalPages ? "" : "hidden", onClick: this.onNextClick.bind(this) },
                            h("div", { class: "next-link-wrapper" },
                                h("span", { class: "next-link" }, this.nextLinkLang)),
                            h("span", { class: "next-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows right" }))))))
        ];
    }
    static get is() { return "snt-pagination"; }
    static get originalStyleUrls() { return {
        "$": ["./faq-pagination-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["faq-pagination-component.css"]
    }; }
    static get properties() { return {
        "prevLinkLang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prev-link-lang",
            "reflect": true,
            "defaultValue": "\"Previous\""
        },
        "nextLinkLang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "next-link-lang",
            "reflect": true,
            "defaultValue": "\"Next\""
        },
        "pageNumLang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "page-num-lang",
            "reflect": true,
            "defaultValue": "\"of\""
        },
        "pageNumAriaLang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "page-num-aria-lang",
            "reflect": true,
            "defaultValue": "\"Page number\""
        },
        "paginationNavLang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "pagination-nav-lang",
            "reflect": true,
            "defaultValue": "\"FAQ page navigation\""
        },
        "totalPages": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "total-pages",
            "reflect": true,
            "defaultValue": "1"
        },
        "curr": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "curr",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
    static get events() { return [{
            "method": "pageChanged",
            "name": "pageChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "setPageNumber": {
            "complexType": {
                "signature": "(pageNum: number, emitEvent?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
FAQPaginationComponent.TAG_NAME = "snt-pagination";
