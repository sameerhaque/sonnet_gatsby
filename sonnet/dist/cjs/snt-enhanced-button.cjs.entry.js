'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const ImageLazyLoadIntersectionObserverManager = require('./ImageLazyLoadIntersectionObserverManager-977f3554.js');
require('./LanguageUtils-fbb05914.js');
const AccessibilityUtils = require('./AccessibilityUtils-64349711.js');

const enhancedButtonComponentCss = "@charset \"UTF-8\";snt-enhanced-button{height:100%}snt-enhanced-button .discount-panel{background-color:#147582;color:#ffffff;height:30px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-3px -3px 0px;padding:0px 3px}snt-enhanced-button .link-panel{border:3px solid transparent;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;margin:10px;color:initial;outline-offset:3px;outline:1px dashed transparent;font-weight:500;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;position:relative;height:calc(100% - 26px);width:calc(100% - 26px)}snt-enhanced-button .content-panel{padding:26px}snt-enhanced-button .link-text{display:inline-block;position:relative}snt-enhanced-button .link-text .icon-new-window{width:14px;display:inline-block}snt-enhanced-button .link-text .icon-new-window:before{all:unset}snt-enhanced-button .link-text .icon-new-window:after{content:\"\";font-size:1.02em !important;right:-21px;padding-left:5px;color:#323232;display:inline-block}snt-enhanced-button .icon-panel{width:100%;margin:auto auto 10px}snt-enhanced-button .icon{font-weight:normal;display:inline-block}snt-enhanced-button .icon i{font-size:10px}snt-enhanced-button .plus-sign{margin-left:10px;margin-right:10px}snt-enhanced-button a{display:block;width:100%;height:100%;margin:auto;text-align:center;text-decoration:none}snt-enhanced-button a:active,snt-enhanced-button a:hover{text-decoration:none}snt-enhanced-button a:active .link-panel,snt-enhanced-button a:hover .link-panel{border:3px solid #147582}snt-enhanced-button a:focus{outline:none;margin:0;padding:0}snt-enhanced-button a:focus .link-panel{outline:1px dashed #323232}@media (min-width: 1024px){snt-enhanced-button .content-panel{padding:30px}snt-enhanced-button .plus-sign{margin-left:15px;margin-right:15px}}";

const EnhancedButtonComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sntButtonClick = index.createEvent(this, "sntButtonClick", 7);
        this.sntButtonKeyDown = index.createEvent(this, "sntButtonKeyDown", 7);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    componentWillLoad() {
        if (StringUtils.StringUtils.hasValue(this.leftIconSources)) {
            this.leftIconJson = JSON.parse(this.leftIconSources);
        }
        if (StringUtils.StringUtils.hasValue(this.rightIconSources)) {
            this.rightIconJson = JSON.parse(this.rightIconSources);
        }
    }
    componentDidLoad() {
        if (this.leftIconJson || this.rightIconJson) {
            ImageLazyLoadIntersectionObserverManager.LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        const iconContent = this.buildIconContent();
        const discountContent = this.buildDiscountContent();
        const linkContent = this.buildLinkContent();
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("a", { href: this.href, "aria-label": this.ariaLabel, target: this.target, id: this.linkId }, index.h("div", { class: `link-panel ${StringUtils.StringUtils.isEmpty(this.discountText)
                ? ""
                : "discount"}` }, discountContent, index.h("div", { class: "content-panel" }, iconContent, index.h("h4", { class: "link-text" }, linkContent))))));
    }
    buildLinkContent() {
        let content = index.h("span", null, this.ctaText);
        if (this.target === "_blank" && StringUtils.StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.AccessibilityUtils.getNewWindowText();
            content = [
                this.ctaText,
                index.h("span", { class: "icon-font icon-new-window", title: title }, index.h("span", { class: "sr-only" }, " ", text)),
            ];
        }
        return content;
    }
    buildDiscountContent() {
        if (StringUtils.StringUtils.isEmpty(this.discountText)) {
            return null;
        }
        return index.h("div", { class: "discount-panel" }, this.discountText);
    }
    buildIconContent() {
        if (!this.leftIconJson && !this.rightIconJson) {
            return null;
        }
        else if (!this.leftIconJson || !this.rightIconJson) {
            const iconSources = this.leftIconJson || this.rightIconJson;
            return (index.h("div", { class: "icon-panel" }, this.buildPictureContent(iconSources.largeIconUrl, iconSources.smallIconUrl)));
        }
        else {
            return (index.h("div", { class: "icon-panel" }, this.buildPictureContent(this.leftIconJson.largeIconUrl, this.leftIconJson.smallIconUrl), index.h("div", { class: "icon plus-sign" }, index.h("i", { class: "icon-font iconPlus" })), this.buildPictureContent(this.rightIconJson.largeIconUrl, this.rightIconJson.smallIconUrl)));
        }
    }
    buildPictureContent(largeIconUrl, smallIconUrl) {
        return (index.h("div", { class: "icon" }, index.h("picture", { class: "icon-image" }, index.h("source", { "data-srcSet": largeIconUrl, media: "(min-width: 1024px)" }), index.h("source", { "data-srcSet": smallIconUrl, media: "(min-width: 0px)" }), index.h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
    }
    get element() { return index.getElement(this); }
};
EnhancedButtonComponent.TAG_NAME = "snt-enhanced-button";
EnhancedButtonComponent.style = enhancedButtonComponentCss;

exports.snt_enhanced_button = EnhancedButtonComponent;
