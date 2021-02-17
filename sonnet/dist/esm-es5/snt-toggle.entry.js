import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
var toggleComponentCss = "";
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = createEvent(this, "toggle", 7);
    }
    ToggleComponent.prototype.handleClick = function () {
        this.toggle.emit();
    };
    ToggleComponent.prototype.render = function () {
        return (h(Host, { onClick: this.handleClick.bind(this) }, "X", h("span", { class: "sr-only" }, "Search")));
    };
    Object.defineProperty(ToggleComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ToggleComponent;
}());
ToggleComponent.TAG_NAME = "snt-header";
ToggleComponent.style = toggleComponentCss;
export { ToggleComponent as snt_toggle };
