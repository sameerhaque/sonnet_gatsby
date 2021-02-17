import { r as registerInstance, h, g as getElement, H as Host } from './index-79f6678c.js';
var iconComponentCss = "";
var IconComponent = /** @class */ (function () {
    function IconComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    IconComponent.prototype.render = function () {
        return (h(Host, { class: "icon-font " + this.styleClasses, "aria-hidden": "true" }));
    };
    Object.defineProperty(IconComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return IconComponent;
}());
IconComponent.TAG_NAME = "snt-icon";
IconComponent.style = iconComponentCss;
export { IconComponent as snt_icon };
