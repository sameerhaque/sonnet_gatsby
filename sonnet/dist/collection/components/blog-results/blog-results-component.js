var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, Element, h, Host } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class SntBlogResultsComponent {
    constructor() {
        this.blogResults = [];
        this.blogResultsString = StringUtils.empty();
    }
    componentWillRender() {
        this.blogResults = JSON.parse(this.blogResultsString);
    }
    componentDidRender() {
        return __awaiter(this, void 0, void 0, function* () {
            let viewport;
            const firstRowEl = document.querySelector('snt-multi-column-mixed[class*="first-row"]');
            if (firstRowEl) {
                viewport = firstRowEl
                    .querySelector("snt-layout")
                    .getAttribute("viewport");
                yield firstRowEl.tagLastRow(viewport);
                yield firstRowEl.setColumns();
                const resultRowsEl = document.querySelector('snt-multi-column-mixed[class*="result-rows"]');
                if (resultRowsEl) {
                    yield resultRowsEl.setColumns();
                    yield resultRowsEl.tagLastRow(viewport);
                }
            }
        });
    }
    render() {
        return (h(Host, null,
            this.renderFirstRow(),
            this.blogResults.length > 2 ? this.renderRows() : null));
    }
    renderFirstRow() {
        const firstRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}';
        return (h("snt-multi-column-mixed", { class: "first-row no-bottom with-gutter", "column-count": firstRowJson }, this.blogResults.slice(0, 2).map((blog) => {
            return (h("div", { class: "column" },
                h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
    renderRows() {
        const resultRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return (h("snt-multi-column-mixed", { class: "result-rows with-gutter", "column-count": resultRowJson, "aria-live": "polite" }, this.blogResults
            .slice(2, this.blogResults.length)
            .map((blog) => {
            return (h("div", { class: "column" },
                h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
    static get is() { return "snt-blog-results"; }
    static get originalStyleUrls() { return {
        "$": ["./blog-results-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-results-component.css"]
    }; }
    static get properties() { return {
        "blogResultsString": {
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
            "attribute": "blog-results-string",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
