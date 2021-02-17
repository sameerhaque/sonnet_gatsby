import { r as registerInstance, h } from './index-79f6678c.js';

const faqBlockComponentCss = "snt-faq-block{height:100%}snt-faq-block .faq-block-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 20px;-webkit-box-shadow:0 2px 10px #e5e5e5;box-shadow:0 2px 10px #e5e5e5;-webkit-box-sizing:border-box;box-sizing:border-box}snt-faq-block h3{text-align:center;color:#323232}snt-faq-block .faq-block-body,snt-faq-block .faq-articles-count{color:#323232;font-size:14px;line-height:23px;text-align:center;margin-top:19px}snt-faq-block .faq-block-body{-ms-flex:1 1 auto;flex:1 1 auto}snt-faq-block a{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;text-decoration:none}snt-faq-block a:focus,snt-faq-block a:active,snt-faq-block a:hover{border:none;outline:none;text-decoration:none}snt-faq-block a:focus .faq-block-wrapper,snt-faq-block a:active .faq-block-wrapper,snt-faq-block a:hover .faq-block-wrapper{background-color:#147582}snt-faq-block a:focus .faq-block-body,snt-faq-block a:focus .faq-articles-count,snt-faq-block a:focus h3,snt-faq-block a:active .faq-block-body,snt-faq-block a:active .faq-articles-count,snt-faq-block a:active h3,snt-faq-block a:hover .faq-block-body,snt-faq-block a:hover .faq-articles-count,snt-faq-block a:hover h3{color:#ffffff}@media (min-width: 768px){snt-faq-block .faq-block-wrapper{padding:40px 20px;-webkit-box-shadow:0 2px 10px #e5e5e5;box-shadow:0 2px 10px #e5e5e5}snt-faq-block .faq-block-body,snt-faq-block .faq-articles-count{margin-top:20px}}@media (min-width: 1024px){snt-faq-block .faq-block-wrapper{padding:60px 30px;-webkit-box-shadow:0 2px 10px #e5e5e5;box-shadow:0 2px 10px #e5e5e5}snt-faq-block .faq-block-body,snt-faq-block .faq-articles-count{font-size:16px;line-height:26px}snt-faq-block .faq-block-body{margin-top:22px}snt-faq-block .faq-articles-count{margin-top:30px}}@media (min-width: 1440px){snt-faq-block .faq-block-wrapper{padding:60px 30px;-webkit-box-shadow:0 2px 10px #e5e5e5;box-shadow:0 2px 10px #e5e5e5}snt-faq-block .faq-block-body,snt-faq-block .faq-articles-count{font-size:16px;line-height:26px;margin-top:30px}}";

const FAQBlockComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleText = "";
        this.bodyText = "";
        this.articlesCount = "";
        this.blockLink = "";
    }
    render() {
        return [
            h("a", { href: this.blockLink }, h("div", { class: "faq-block-wrapper" }, h("h3", null, this.titleText), h("div", { class: "faq-block-body" }, this.bodyText), h("div", { class: "faq-articles-count" }, this.articlesCount)))
        ];
    }
};
FAQBlockComponent.TAG_NAME = "snt-faq-block";
FAQBlockComponent.style = faqBlockComponentCss;

export { FAQBlockComponent as snt_faq_block };
