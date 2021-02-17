import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';

const faqBlockListComponentCss = "";

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
const FAQBlockListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("snt-multi-column-mixed", { ref: (el) => (this.multiColumnEl = el), "aria-label": this.menuAriaLabel, class: "with-gutter", "column-count": columnJson }, this.faqBlockList.map((item) => (h("div", { class: "column" }, h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "block-link": item.blockLink, "articles-count": item.articlesCount }))))),
        ];
    }
    get host() { return getElement(this); }
};
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
FAQBlockListComponent.style = faqBlockListComponentCss;

export { FAQBlockListComponent as snt_faq_block_list };
