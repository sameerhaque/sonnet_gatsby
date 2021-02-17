'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./LanguageUtils-fbb05914.js');
const AccessibilityUtils = require('./AccessibilityUtils-64349711.js');

const sourceLinkComponentCss = "@charset \"UTF-8\";snt-source-link{display:inline-block}snt-source-link a{height:25px;font-size:14px;color:#323232;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid #323232;border-radius:22px;padding:10px;position:relative;text-decoration:none}snt-source-link a .icon-new-window:after{content:\"\";font-size:1.02em !important;padding-left:5px;color:#323232;display:inline-block;position:relative}snt-source-link a .icon-new-window:before{content:\"\"}snt-source-link a:hover{color:#147582;border-color:#147582;-webkit-box-shadow:0 0 0 2px #147582;box-shadow:0 0 0 2px #147582}snt-source-link a:hover .icon-new-window:after{color:#147582}snt-source-link a:focus{outline:none}snt-source-link a:focus:after{content:\"\";display:block;position:absolute;top:-7px;bottom:-7px;left:-7px;right:-7px;border-radius:30px;border:1px solid #323232}snt-source-link .link-content{max-width:249px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}snt-source-link .full-content{max-width:265px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";

const SourceLinkComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        let content;
        let title = AccessibilityUtils.AccessibilityUtils.getNewWindowTitle();
        let text = AccessibilityUtils.AccessibilityUtils.getNewWindowText();
        if (this.target === "_blank") {
            content = [
                index.h("span", { class: "link-content" }, index.h("slot", null)),
                index.h("span", { class: "icon-font icon-new-window", title: title }, index.h("span", { class: "sr-only" }, " ", text))
            ];
        }
        else {
            content = (index.h("span", { class: "full-content" }, index.h("slot", null)));
        }
        return (index.h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, content));
    }
};
SourceLinkComponent.TAG_NAME = "snt-source-link";
SourceLinkComponent.style = sourceLinkComponentCss;

const sourceListComponentCss = "snt-source-list span.expand-icon{display:inline-block;height:16px;width:16px;position:relative;top:1px;margin-right:10px}snt-source-list button{position:relative;font-size:14px;font-family:inherit;border:0;padding:0;background-color:inherit}snt-source-list button:hover{text-decoration:underline;color:#147582}snt-source-list button:focus::after{-webkit-box-sizing:border-box;box-sizing:border-box;border:1px dashed #323232;content:\"\";right:100%;width:calc(100% + 10px);height:calc(100% + 4px);left:-5px;top:-2px;position:absolute}snt-source-list button:focus{outline:none;text-decoration:underline;color:#147582}snt-source-list .close{display:none}snt-source-list .open{display:block}snt-source-list .source-panel{padding-left:26px}snt-source-list snt-source-link:nth-child(n+1){margin-top:15px;margin-right:15px}";

const SourceListComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.RETURN = 13;
    }
    handleKeydown(event) {
        switch (event.keyCode) {
            case this.RETURN:
                this.toggleExpand();
                event.stopPropagation();
                event.preventDefault();
                break;
        }
    }
    toggleExpand() {
        if (this.buttonEl.getAttribute('aria-expanded') === 'true') {
            this.buttonEl.setAttribute('aria-expanded', 'false');
        }
        else {
            this.buttonEl.setAttribute('aria-expanded', 'true');
        }
        this.buttonEl.classList.toggle('expanded');
        this.toggleContent();
    }
    toggleContent() {
        this.panelEl.classList.toggle('open');
        this.panelEl.classList.toggle('close');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_plus');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_minus');
    }
    render() {
        return (index.h("snt-layout", null, index.h("button", { ref: (el) => (this.buttonEl = el), onKeyDown: this.handleKeydown.bind(this), onClick: this.toggleExpand.bind(this), "aria-expanded": "false", "aria-controls": this.panelId }, index.h("span", { ref: (el) => (this.iconEl = el), class: "expand-icon icon-font icon-icon_legalAccordion_plus" }), this.sourceHeading), index.h("div", { class: "source-panel close", ref: (el) => (this.panelEl = el), id: this.panelId }, index.h("slot", null))));
    }
};
SourceListComponent.TAG_NAME = "snt-source-list";
SourceListComponent.style = sourceListComponentCss;

exports.snt_source_link = SourceLinkComponent;
exports.snt_source_list = SourceListComponent;
