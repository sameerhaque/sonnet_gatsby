var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, h, Element } from "@stencil/core";
export class FAQBlockListComponent {
    constructor() {
        this.faqBlockList = [];
        this.menuAriaLabel = "";
    }
    componentDidRender() {
        return __awaiter(this, void 0, void 0, function* () {
            const layout = this.multiColumnEl.querySelector('snt-layout');
            yield this.multiColumnEl.tagLastRow(layout.getAttribute('viewport'));
            yield this.multiColumnEl.setColumns();
        });
    }
    render() {
        const columnJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return [
            h("snt-multi-column-mixed", { ref: (el) => (this.multiColumnEl = el), "aria-label": this.menuAriaLabel, class: "with-gutter", "column-count": columnJson }, this.faqBlockList.map((item) => (h("div", { class: "column" },
                h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "block-link": item.blockLink, "articles-count": item.articlesCount }))))),
        ];
    }
    static get is() { return "snt-faq-block-list"; }
    static get originalStyleUrls() { return {
        "$": ["./faq-block-list-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["faq-block-list-component.css"]
    }; }
    static get properties() { return {
        "faqBlockList": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{\r\n        titleText: string;\r\n        blockLink?: string;\r\n        bodyText: string;\r\n        articlesCount: string;\r\n    }[]",
                "resolved": "{ titleText: string; blockLink?: string; bodyText: string; articlesCount: string; }[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "menuAriaLabel": {
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
            "attribute": "menu-aria-label",
            "reflect": true,
            "defaultValue": "\"\""
        }
    }; }
    static get elementRef() { return "host"; }
}
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
