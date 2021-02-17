import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LazyLoadIntersectionObserverManager } from './ImageLazyLoadIntersectionObserverManager-28d19548.js';
import './LanguageUtils-994fe2d5.js';
import { A as AccessibilityUtils } from './AccessibilityUtils-5173d026.js';
var enhancedButtonComponentCss = "@charset \"UTF-8\";snt-enhanced-button{height:100%}snt-enhanced-button .discount-panel{background-color:#147582;color:#ffffff;height:30px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-3px -3px 0px;padding:0px 3px}snt-enhanced-button .link-panel{border:3px solid transparent;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;margin:10px;color:initial;outline-offset:3px;outline:1px dashed transparent;font-weight:500;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;position:relative;height:calc(100% - 26px);width:calc(100% - 26px)}snt-enhanced-button .content-panel{padding:26px}snt-enhanced-button .link-text{display:inline-block;position:relative}snt-enhanced-button .link-text .icon-new-window{width:14px;display:inline-block}snt-enhanced-button .link-text .icon-new-window:before{all:unset}snt-enhanced-button .link-text .icon-new-window:after{content:\"\";font-size:1.02em !important;right:-21px;padding-left:5px;color:#323232;display:inline-block}snt-enhanced-button .icon-panel{width:100%;margin:auto auto 10px}snt-enhanced-button .icon{font-weight:normal;display:inline-block}snt-enhanced-button .icon i{font-size:10px}snt-enhanced-button .plus-sign{margin-left:10px;margin-right:10px}snt-enhanced-button a{display:block;width:100%;height:100%;margin:auto;text-align:center;text-decoration:none}snt-enhanced-button a:active,snt-enhanced-button a:hover{text-decoration:none}snt-enhanced-button a:active .link-panel,snt-enhanced-button a:hover .link-panel{border:3px solid #147582}snt-enhanced-button a:focus{outline:none;margin:0;padding:0}snt-enhanced-button a:focus .link-panel{outline:1px dashed #323232}@media (min-width: 1024px){snt-enhanced-button .content-panel{padding:30px}snt-enhanced-button .plus-sign{margin-left:15px;margin-right:15px}}";
var EnhancedButtonComponent = /** @class */ (function () {
    function EnhancedButtonComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sntButtonClick = createEvent(this, "sntButtonClick", 7);
        this.sntButtonKeyDown = createEvent(this, "sntButtonKeyDown", 7);
        this.styleClasses = StringUtils.empty();
    }
    EnhancedButtonComponent.prototype.handleKeyDown = function (keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    };
    EnhancedButtonComponent.prototype.handleClick = function (clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    };
    EnhancedButtonComponent.prototype.componentWillLoad = function () {
        if (StringUtils.hasValue(this.leftIconSources)) {
            this.leftIconJson = JSON.parse(this.leftIconSources);
        }
        if (StringUtils.hasValue(this.rightIconSources)) {
            this.rightIconJson = JSON.parse(this.rightIconSources);
        }
    };
    EnhancedButtonComponent.prototype.componentDidLoad = function () {
        if (this.leftIconJson || this.rightIconJson) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    };
    EnhancedButtonComponent.prototype.render = function () {
        var iconContent = this.buildIconContent();
        var discountContent = this.buildDiscountContent();
        var linkContent = this.buildLinkContent();
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("a", { href: this.href, "aria-label": this.ariaLabel, target: this.target, id: this.linkId }, h("div", { class: "link-panel " + (StringUtils.isEmpty(this.discountText)
                ? ""
                : "discount") }, discountContent, h("div", { class: "content-panel" }, iconContent, h("h4", { class: "link-text" }, linkContent))))));
    };
    EnhancedButtonComponent.prototype.buildLinkContent = function () {
        var content = h("span", null, this.ctaText);
        if (this.target === "_blank" && StringUtils.hasValue(this.href)) {
            var title = AccessibilityUtils.getNewWindowTitle();
            var text = AccessibilityUtils.getNewWindowText();
            content = [
                this.ctaText,
                h("span", { class: "icon-font icon-new-window", title: title }, h("span", { class: "sr-only" }, " ", text)),
            ];
        }
        return content;
    };
    EnhancedButtonComponent.prototype.buildDiscountContent = function () {
        if (StringUtils.isEmpty(this.discountText)) {
            return null;
        }
        return h("div", { class: "discount-panel" }, this.discountText);
    };
    EnhancedButtonComponent.prototype.buildIconContent = function () {
        if (!this.leftIconJson && !this.rightIconJson) {
            return null;
        }
        else if (!this.leftIconJson || !this.rightIconJson) {
            var iconSources = this.leftIconJson || this.rightIconJson;
            return (h("div", { class: "icon-panel" }, this.buildPictureContent(iconSources.largeIconUrl, iconSources.smallIconUrl)));
        }
        else {
            return (h("div", { class: "icon-panel" }, this.buildPictureContent(this.leftIconJson.largeIconUrl, this.leftIconJson.smallIconUrl), h("div", { class: "icon plus-sign" }, h("i", { class: "icon-font iconPlus" })), this.buildPictureContent(this.rightIconJson.largeIconUrl, this.rightIconJson.smallIconUrl)));
        }
    };
    EnhancedButtonComponent.prototype.buildPictureContent = function (largeIconUrl, smallIconUrl) {
        return (h("div", { class: "icon" }, h("picture", { class: "icon-image" }, h("source", { "data-srcSet": largeIconUrl, media: "(min-width: 1024px)" }), h("source", { "data-srcSet": smallIconUrl, media: "(min-width: 0px)" }), h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
    };
    Object.defineProperty(EnhancedButtonComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return EnhancedButtonComponent;
}());
EnhancedButtonComponent.TAG_NAME = "snt-enhanced-button";
EnhancedButtonComponent.style = enhancedButtonComponentCss;
export { EnhancedButtonComponent as snt_enhanced_button };
