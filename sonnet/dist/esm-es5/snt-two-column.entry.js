import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
var twoColumnComponentCss = ".light-fill snt-two-column,snt-two-column.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-two-column,snt-two-column.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-two-column,snt-two-column.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-two-column,snt-two-column.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-two-column,snt-two-column.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-two-column .flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}snt-two-column .column-left,snt-two-column .column-right{display:block;width:100%}snt-two-column snt-layout[viewport=small] .column-left .spacings,snt-two-column snt-layout[viewport=small] .column-right .spacings{padding:2.5em 1.875em}snt-two-column snt-layout[viewport=small] .column-left .spacings{padding-bottom:0.813em}snt-two-column snt-layout[viewport=extra-small] .column-left .spacings,snt-two-column snt-layout[viewport=extra-small] .column-right .spacings{padding:2.5em 1.875em}snt-two-column snt-layout[viewport=extra-small] .column-left .spacings{padding-bottom:0.813em}snt-two-column snt-layout[viewport=medium] .column-left .spacings{padding:2.5em 2.313em;padding-right:13px}snt-two-column snt-layout[viewport=medium] .column-right .spacings{padding:2.5em 2.313em;padding-left:13px}snt-two-column snt-layout[viewport=medium] .column-left,snt-two-column snt-layout[viewport=medium] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column snt-layout[viewport=large] .column-left .spacings{padding:3.75em 4.438em;padding-right:15px}snt-two-column snt-layout[viewport=large] .column-right .spacings{padding:3.75em 4.438em;padding-left:15px}snt-two-column snt-layout[viewport=large] .column-left,snt-two-column snt-layout[viewport=large] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column snt-layout[viewport=extra-large] .column-left .spacings{padding:3.75em 8.438em;padding-right:15px}snt-two-column snt-layout[viewport=extra-large] .column-right .spacings{padding:3.75em 8.438em;padding-left:15px}snt-two-column snt-layout[viewport=extra-large] .column-left,snt-two-column snt-layout[viewport=extra-large] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}";
var TwoColumnComponent = /** @class */ (function () {
    function TwoColumnComponent(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    TwoColumnComponent.prototype.onResize = function (event) {
        var viewport = event.detail.viewport;
        this.columnLeft.setAttribute('viewport', viewport);
        this.columnRight.setAttribute('viewport', viewport);
    };
    TwoColumnComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { padding: "none" }, h("div", { class: "flex-container " }, h("div", { class: "column-left", ref: function (el) { return _this.columnLeft = el; } }, h("slot", { name: "left" })), h("div", { class: "column-right", ref: function (el) { return _this.columnRight = el; } }, h("slot", { name: "right" }))))));
    };
    Object.defineProperty(TwoColumnComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TwoColumnComponent;
}());
TwoColumnComponent.TAG_NAME = "snt-two-column";
TwoColumnComponent.style = twoColumnComponentCss;
export { TwoColumnComponent as snt_two_column };
