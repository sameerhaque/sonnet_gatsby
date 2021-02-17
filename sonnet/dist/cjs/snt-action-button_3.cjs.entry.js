'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const EventConfigurationBuilder = require('./EventConfigurationBuilder-ca448050.js');
require('./ReflectionUtils-89506fdc.js');
const actionButtonComponent = require('./action-button-component-384b704c.js');

const buttonComponentCss = "snt-button.cta button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:100%;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}@media (min-width: 768px){snt-button.cta button{width:auto}}snt-button.cta.theme-default button{background-color:#6ebac5;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-button.cta.theme-default button:hover,snt-button.cta.theme-default button:focus{color:#ffffff;background-color:#147582;-webkit-box-shadow:inset 0 0 0 3px #147582;box-shadow:inset 0 0 0 3px #147582}snt-button.cta.theme-secondary button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-button.cta.theme-secondary button:hover,snt-button.cta.theme-secondary button:focus{color:#ffffff;background-color:#323232}snt-button.cta.theme-secondaryDarkBg button{background-color:transparent;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #ffffff;box-shadow:inset 0 0 0 3px #ffffff}snt-button.cta.theme-secondaryDarkBg button:hover,snt-button.cta.theme-secondaryDarkBg button:focus{color:#323232;background-color:#ffffff}snt-button.cta.theme-primary button{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-button.cta.theme-primary button:hover,snt-button.cta.theme-primary button:focus{color:#323232;background-color:transparent}snt-button.cta.theme-headerNav button{background-color:transparent;color:#6ebac5;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-button.cta.theme-headerNav button:hover,snt-button.cta.theme-headerNav button:focus{color:#323232;background-color:#6ebac5}snt-button.cta.theme-disabled button{background-color:#e5e5e5;color:#7f7f7f;-webkit-box-shadow:inset 0 0 0 3px #e5e5e5;box-shadow:inset 0 0 0 3px #e5e5e5}snt-button.cta.theme-disabled button:hover,snt-button.cta.theme-disabled button:focus{color:#7f7f7f}snt-button.cta.theme-disabledSecondary button{background-color:transparent;color:#b2b2b2;-webkit-box-shadow:inset 0 0 0 3px #b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}snt-button.cta.theme-disabledSecondary button:hover,snt-button.cta.theme-disabledSecondary button:focus{color:#b2b2b2}";

const ButtonComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sntButtonClick = index.createEvent(this, "sntButtonClick", 7);
        this.sntButtonKeyDown = index.createEvent(this, "sntButtonKeyDown", 7);
        this.styleClasses = StringUtils.StringUtils.empty();
        this.hiddenTitle = StringUtils.StringUtils.empty();
        this.buttonId = StringUtils.StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("button", { id: this.buttonId }, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
};
ButtonComponent.TAG_NAME = "snt-button";
ButtonComponent.style = buttonComponentCss;

exports.snt_event = EventConfigurationBuilder.EventComponent;
exports.snt_action_button = actionButtonComponent.ActionButtonComponent;
exports.snt_button = ButtonComponent;
