'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
require('./LanguageUtils-fbb05914.js');
const AccessibilityUtils = require('./AccessibilityUtils-64349711.js');

const buttonLinkComponentCss = "@charset \"UTF-8\";button-link{width:100%}button-link.theme-default{background-color:#6ebac5;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}button-link.theme-default:hover,button-link.theme-default:focus,button-link.theme-default:focus-within{color:#ffffff;background-color:#147582;-webkit-box-shadow:inset 0 0 0 3px #147582;box-shadow:inset 0 0 0 3px #147582}button-link.theme-secondary{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}button-link.theme-secondary:hover,button-link.theme-secondary:focus,button-link.theme-secondary:focus-within{color:#ffffff;background-color:#323232}button-link.theme-secondaryDarkBg{background-color:transparent;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #ffffff;box-shadow:inset 0 0 0 3px #ffffff}button-link.theme-secondaryDarkBg:hover,button-link.theme-secondaryDarkBg:focus,button-link.theme-secondaryDarkBg:focus-within{color:#323232;background-color:#ffffff}button-link.theme-primary{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}button-link.theme-primary:hover,button-link.theme-primary:focus,button-link.theme-primary:focus-within{color:#323232;background-color:transparent}button-link.theme-headerNav{background-color:transparent;color:#6ebac5;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}button-link.theme-headerNav:hover,button-link.theme-headerNav:focus,button-link.theme-headerNav:focus-within{color:#323232;background-color:#6ebac5}button-link.theme-disabled{background-color:#e5e5e5;color:#7f7f7f;-webkit-box-shadow:inset 0 0 0 3px #e5e5e5;box-shadow:inset 0 0 0 3px #e5e5e5}button-link.theme-disabled:hover,button-link.theme-disabled:focus,button-link.theme-disabled:focus-within{color:#7f7f7f}button-link.theme-disabledSecondary{background-color:transparent;color:#b2b2b2;-webkit-box-shadow:inset 0 0 0 3px #b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}button-link.theme-disabledSecondary:hover,button-link.theme-disabledSecondary:focus,button-link.theme-disabledSecondary:focus-within{color:#b2b2b2}@media (min-width: 768px){button-link{width:auto}}button-link a:hover{color:inherit;text-decoration:inherit}button-link a:hover .icon-new-window:after{color:inherit}button-link a:focus .icon-new-window:after{color:inherit}button-link a{color:inherit;text-decoration:inherit;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:100%;text-align:center;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}button-link .icon-new-window:before{all:unset}button-link .icon-new-window:after{content:\"\";font-size:1.02em !important;right:-21px;padding-left:5px;color:#323232;display:inline-block}";

const ButtonLinkComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.linkEvent = index.createEvent(this, "linkEvent", 7);
        this.classNames = StringUtils.StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    render() {
        let content = index.h("slot", null);
        if (this.target === "_blank" && StringUtils.StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.AccessibilityUtils.getNewWindowText();
            content = [
                content,
                index.h("span", { class: "icon-font icon-new-window", title: title }, index.h("span", { class: "sr-only" }, " ", text)),
            ];
        }
        return [
            index.h("a", { id: this.buttonId, href: this.href, target: this.target, "aria-label": this.ariaLabel, "aria-describedby": StringUtils.StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? `${this.buttonId}-describedby` : null, class: WebUtils.WebUtils.generateClasses([], this.classNames) }, content),
            StringUtils.StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? (index.h("div", { class: "sr-only", id: `${this.buttonId}-describedby` }, this.ariaDescribedByText)) : null,
        ];
    }
    get element() { return index.getElement(this); }
};
ButtonLinkComponent.TAG_NAME = "button-link";
ButtonLinkComponent.style = buttonLinkComponentCss;

const buttonLinkGroupComponentCss = "button-link-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}button-link-group button-link{text-align:center;width:100%}button-link-group button-link:nth-child(n+2){margin-top:40px}";

const ButtonLinkGroupComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};
ButtonLinkGroupComponent.TAG_NAME = "button-link-group";
ButtonLinkGroupComponent.style = buttonLinkGroupComponentCss;

exports.button_link = ButtonLinkComponent;
exports.button_link_group = ButtonLinkGroupComponent;
