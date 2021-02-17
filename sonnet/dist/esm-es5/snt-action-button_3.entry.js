import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
export { b as snt_event } from './EventConfigurationBuilder-7481df3b.js';
import './ReflectionUtils-6ed4bd5c.js';
export { A as snt_action_button } from './action-button-component-5520aeb1.js';
var buttonComponentCss = "snt-button.cta button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:100%;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}@media (min-width: 768px){snt-button.cta button{width:auto}}snt-button.cta.theme-default button{background-color:#6ebac5;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-button.cta.theme-default button:hover,snt-button.cta.theme-default button:focus{color:#ffffff;background-color:#147582;-webkit-box-shadow:inset 0 0 0 3px #147582;box-shadow:inset 0 0 0 3px #147582}snt-button.cta.theme-secondary button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-button.cta.theme-secondary button:hover,snt-button.cta.theme-secondary button:focus{color:#ffffff;background-color:#323232}snt-button.cta.theme-secondaryDarkBg button{background-color:transparent;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #ffffff;box-shadow:inset 0 0 0 3px #ffffff}snt-button.cta.theme-secondaryDarkBg button:hover,snt-button.cta.theme-secondaryDarkBg button:focus{color:#323232;background-color:#ffffff}snt-button.cta.theme-primary button{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-button.cta.theme-primary button:hover,snt-button.cta.theme-primary button:focus{color:#323232;background-color:transparent}snt-button.cta.theme-headerNav button{background-color:transparent;color:#6ebac5;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-button.cta.theme-headerNav button:hover,snt-button.cta.theme-headerNav button:focus{color:#323232;background-color:#6ebac5}snt-button.cta.theme-disabled button{background-color:#e5e5e5;color:#7f7f7f;-webkit-box-shadow:inset 0 0 0 3px #e5e5e5;box-shadow:inset 0 0 0 3px #e5e5e5}snt-button.cta.theme-disabled button:hover,snt-button.cta.theme-disabled button:focus{color:#7f7f7f}snt-button.cta.theme-disabledSecondary button{background-color:transparent;color:#b2b2b2;-webkit-box-shadow:inset 0 0 0 3px #b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}snt-button.cta.theme-disabledSecondary button:hover,snt-button.cta.theme-disabledSecondary button:focus{color:#b2b2b2}";
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sntButtonClick = createEvent(this, "sntButtonClick", 7);
        this.sntButtonKeyDown = createEvent(this, "sntButtonKeyDown", 7);
        this.styleClasses = StringUtils.empty();
        this.hiddenTitle = StringUtils.empty();
        this.buttonId = StringUtils.empty();
    }
    ButtonComponent.prototype.handleKeyDown = function (keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    };
    ButtonComponent.prototype.handleClick = function (clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    };
    ButtonComponent.prototype.render = function () {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("button", { id: this.buttonId }, h("slot", null))));
    };
    Object.defineProperty(ButtonComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ButtonComponent;
}());
ButtonComponent.TAG_NAME = "snt-button";
ButtonComponent.style = buttonComponentCss;
export { ButtonComponent as snt_button };
