import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const blogInfoComponentCss = "snt-blog-info #blog-info-bar{max-width:1440px;border:0;-ms-flex-direction:column;flex-direction:column}snt-blog-info .social-icons{display:none;text-align:center}snt-blog-info .social-icons div{display:inline-block;zoom:1;*display:inline;vertical-align:middle;border-right:0;padding:0 20px}snt-blog-info .social-icons div:first-child{padding-left:0px}snt-blog-info .social-icons div:last-child{border-right:0;padding-right:0}snt-blog-info .social-icons div a{display:block;font-size:1em;margin:0 5px;text-decoration:none}snt-blog-info .social-icons div a i{-webkit-transition:all 0.25s ease-in;-moz-transition:all 0.25s ease-in;-o-transition:all 0.25s ease-in;-ms-transition:all 0.25s ease-in;transition:all 0.25s ease-in}snt-blog-info .schedule-info{display:-ms-flexbox;display:flex;min-width:100%;border:0;margin-bottom:25px}snt-blog-info .schedule-info .icons-container,snt-blog-info .schedule-info .social-icons div a i,snt-blog-info .social-icons div a .schedule-info i{display:none}snt-blog-info .schedule-info p{font-size:1em}snt-blog-info .left-info{font-size:0.875em}snt-blog-info .icons-container,snt-blog-info .social-icons div a i{color:#323232;font-size:1.5625em;display:inline-block;background-repeat:no-repeat;background-size:contain;padding-right:5px}snt-blog-info .iconLinkedin:before,snt-blog-info .iconFacebookPlain:before,snt-blog-info .iconTwitter:before,snt-blog-info .iconMail:before{color:#323232}snt-blog-info a:hover .iconLinkedin:before,snt-blog-info a:hover .iconFacebookPlain:before,snt-blog-info a:hover .iconTwitter:before,snt-blog-info a:hover .iconMail:before{color:#147582}snt-blog-info .read-time-info{padding-left:0;width:100%;display:none}snt-blog-info .read-time-info p{font-size:1em}@media (min-width: 768px){snt-blog-info .left-info{-ms-flex:0 1 auto;flex:0 1 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}snt-blog-info .schedule-info{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:0;min-width:auto}snt-blog-info .schedule-info .icons-container,snt-blog-info .schedule-info .social-icons div a i,snt-blog-info .social-icons div a .schedule-info i{display:block;padding-right:20px;font-size:2.142em}snt-blog-info .read-time-info{display:none}snt-blog-info #blog-info-bar{border-top:1px solid #323232;border-bottom:1px solid #323232;-ms-flex-direction:row;flex-direction:row;height:70px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}snt-blog-info .social-icons{-ms-flex:3;flex:3;-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}snt-blog-info .social-icons div{border-right:1px solid #e5e5e5}}@media (min-width: 1024px){snt-blog-info .schedule-info{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:200px;text-align:left;border-right:1px solid #e5e5e5}snt-blog-info .schedule-info i.icon-calendar{display:block;padding-right:20px}snt-blog-info .read-time-info{padding-left:30px;width:50%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}snt-blog-info .read-time-info .icons-container,snt-blog-info .read-time-info .social-icons div a i,snt-blog-info .social-icons div a .read-time-info i{font-size:2.142em;padding-right:20px}snt-blog-info .social-icons div{padding:0 15px}snt-blog-info .social-icons div a i{width:25px;height:25px}}";

const SntBlogInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.accessibilityText)) {
            this.ariaTextJson = JSON.parse(this.accessibilityText);
        }
    }
    render() {
        return (h("snt-layout", null, h("div", { id: "blog-info-bar" }, h("div", { class: "left-info" }, h("div", { class: "schedule-info" }, h("span", { class: "icons-container icon-font iconCalendar" }), h("p", null, this.publishedTime)), h("div", { class: "read-time-info" }, h("span", { class: "icons-container icon-font iconClock" }), h("p", null, this.timeToRead))), h("div", { class: "social-icons" }, h("div", null, h("a", { href: `http://www.linkedin.com/shareArticle?mini=true&url=${this.blogLink}&title=${this.titleText}`, "aria-label": this.ariaTextJson.linkedIn }, h("i", { class: "icon-font iconLinkedin" }))), h("div", null, h("a", { href: `https://www.facebook.com/sharer/sharer.php?u=${this.blogLink}`, "aria-label": this.ariaTextJson.facebook }, h("i", { class: "icon-font iconFacebookPlain" }))), h("div", null, h("a", { href: `https://twitter.com/intent/tweet?url=${this.blogLink}&text=${this.titleText}`, "aria-label": this.ariaTextJson.twitter }, h("i", { class: "icon-font iconTwitter" }))), h("div", null, h("a", { href: `mailto:?subject=${this.titleText}&body=${this.blogLink}`, "aria-label": this.ariaTextJson.email }, h("i", { class: "icon-font iconMail" })))))));
    }
    get hostElement() { return getElement(this); }
};
SntBlogInfo.TAG_NAME = "snt-blog-info";
SntBlogInfo.style = blogInfoComponentCss;

export { SntBlogInfo as snt_blog_info };
