import { r as registerInstance, h } from './index-79f6678c.js';
import './LanguageUtils-994fe2d5.js';
import { A as AccessibilityUtils } from './AccessibilityUtils-5173d026.js';
var sourceLinkComponentCss = "@charset \"UTF-8\";snt-source-link{display:inline-block}snt-source-link a{height:25px;font-size:14px;color:#323232;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid #323232;border-radius:22px;padding:10px;position:relative;text-decoration:none}snt-source-link a .icon-new-window:after{content:\"\";font-size:1.02em !important;padding-left:5px;color:#323232;display:inline-block;position:relative}snt-source-link a .icon-new-window:before{content:\"\"}snt-source-link a:hover{color:#147582;border-color:#147582;-webkit-box-shadow:0 0 0 2px #147582;box-shadow:0 0 0 2px #147582}snt-source-link a:hover .icon-new-window:after{color:#147582}snt-source-link a:focus{outline:none}snt-source-link a:focus:after{content:\"\";display:block;position:absolute;top:-7px;bottom:-7px;left:-7px;right:-7px;border-radius:30px;border:1px solid #323232}snt-source-link .link-content{max-width:249px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}snt-source-link .full-content{max-width:265px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";
var SourceLinkComponent = /** @class */ (function () {
    function SourceLinkComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    SourceLinkComponent.prototype.render = function () {
        var content;
        var title = AccessibilityUtils.getNewWindowTitle();
        var text = AccessibilityUtils.getNewWindowText();
        if (this.target === "_blank") {
            content = [
                h("span", { class: "link-content" }, h("slot", null)),
                h("span", { class: "icon-font icon-new-window", title: title }, h("span", { class: "sr-only" }, " ", text))
            ];
        }
        else {
            content = (h("span", { class: "full-content" }, h("slot", null)));
        }
        return (h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, content));
    };
    return SourceLinkComponent;
}());
SourceLinkComponent.TAG_NAME = "snt-source-link";
SourceLinkComponent.style = sourceLinkComponentCss;
var sourceListComponentCss = "snt-source-list span.expand-icon{display:inline-block;height:16px;width:16px;position:relative;top:1px;margin-right:10px}snt-source-list button{position:relative;font-size:14px;font-family:inherit;border:0;padding:0;background-color:inherit}snt-source-list button:hover{text-decoration:underline;color:#147582}snt-source-list button:focus::after{-webkit-box-sizing:border-box;box-sizing:border-box;border:1px dashed #323232;content:\"\";right:100%;width:calc(100% + 10px);height:calc(100% + 4px);left:-5px;top:-2px;position:absolute}snt-source-list button:focus{outline:none;text-decoration:underline;color:#147582}snt-source-list .close{display:none}snt-source-list .open{display:block}snt-source-list .source-panel{padding-left:26px}snt-source-list snt-source-link:nth-child(n+1){margin-top:15px;margin-right:15px}";
var SourceListComponent = /** @class */ (function () {
    function SourceListComponent(hostRef) {
        registerInstance(this, hostRef);
        this.RETURN = 13;
    }
    SourceListComponent.prototype.handleKeydown = function (event) {
        switch (event.keyCode) {
            case this.RETURN:
                this.toggleExpand();
                event.stopPropagation();
                event.preventDefault();
                break;
        }
    };
    SourceListComponent.prototype.toggleExpand = function () {
        if (this.buttonEl.getAttribute('aria-expanded') === 'true') {
            this.buttonEl.setAttribute('aria-expanded', 'false');
        }
        else {
            this.buttonEl.setAttribute('aria-expanded', 'true');
        }
        this.buttonEl.classList.toggle('expanded');
        this.toggleContent();
    };
    SourceListComponent.prototype.toggleContent = function () {
        this.panelEl.classList.toggle('open');
        this.panelEl.classList.toggle('close');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_plus');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_minus');
    };
    SourceListComponent.prototype.render = function () {
        var _this = this;
        return (h("snt-layout", null, h("button", { ref: function (el) { return (_this.buttonEl = el); }, onKeyDown: this.handleKeydown.bind(this), onClick: this.toggleExpand.bind(this), "aria-expanded": "false", "aria-controls": this.panelId }, h("span", { ref: function (el) { return (_this.iconEl = el); }, class: "expand-icon icon-font icon-icon_legalAccordion_plus" }), this.sourceHeading), h("div", { class: "source-panel close", ref: function (el) { return (_this.panelEl = el); }, id: this.panelId }, h("slot", null))));
    };
    return SourceListComponent;
}());
SourceListComponent.TAG_NAME = "snt-source-list";
SourceListComponent.style = sourceListComponentCss;
export { SourceLinkComponent as snt_source_link, SourceListComponent as snt_source_list };
