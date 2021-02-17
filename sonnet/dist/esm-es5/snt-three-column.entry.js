import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
var threeColumnComponentCss = "snt-three-column .flex-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}snt-three-column .column{display:-ms-flexbox;display:flex;-ms-flex:0 0 100%;flex:0 0 100%;-ms-flex-pack:center;justify-content:center}@media (max-width: 767px){snt-three-column .column:not(:first-child){margin-top:26px}}snt-three-column .column>*{display:-ms-flexbox;display:flex;width:100%}snt-three-column snt-layout[viewport=medium] .column{margin-top:0px;-ms-flex:0 0 50%;flex:0 0 50%}snt-three-column snt-layout[viewport=medium] .column:nth-child(odd){-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=medium] .column:nth-child(even){-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=medium] .column:nth-child(n+3){margin-top:26px}snt-three-column snt-layout[viewport=medium] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=medium] .column>*:first-child{display:-ms-flexbox;display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=large] .column{margin-top:0px;-ms-flex:0 0 33.3%;flex:0 0 33.3%}snt-three-column snt-layout[viewport=large] .column:first-child{-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=large] .column:last-child{-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column snt-layout[viewport=extra-large] .column{margin-top:0px;-ms-flex:0 0 33.3%;flex:0 0 33.3%}snt-three-column snt-layout[viewport=extra-large] .column:first-child{-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=extra-large] .column:last-child{-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=extra-large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column.neutral-fill snt-layout,.neutral-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.light-fill snt-layout,.light-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.float-fill snt-layout,.float-fill snt-three-column snt-layout{background-color:#f8f8f8}snt-three-column slot{display:-ms-flexbox;display:flex}snt-three-column .flex-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}snt-three-column .column{display:-ms-flexbox;display:flex;-ms-flex:0 0 100%;flex:0 0 100%;-ms-flex-pack:center;justify-content:center}snt-three-column .column:not(:first-child){margin-top:26px}snt-three-column .column>*{display:-ms-flexbox;display:flex;width:100%}";
var ThreeColumnComponent = /** @class */ (function () {
    function ThreeColumnComponent(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    ThreeColumnComponent.prototype.onResize = function (event) {
        var viewport = event.detail.viewport;
        this.leftColumn.setAttribute('viewport', viewport);
        this.centerColumn.setAttribute('viewport', viewport);
        this.rightColumn.setAttribute('viewport', viewport);
    };
    ThreeColumnComponent.prototype.componentDidLoad = function () {
        this.registerChildren(this.leftColumn);
        this.registerChildren(this.centerColumn);
        this.registerChildren(this.rightColumn);
    };
    ThreeColumnComponent.prototype.registerChildren = function (column) {
        var _this = this;
        column.childNodes.forEach(function (childEl) {
            if (childEl.tagName === 'SNT-ICON-COPY') {
                childEl.registerViewport(_this.layoutEl);
            }
        });
    };
    ThreeColumnComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { ref: function (el) { return _this.layoutEl = el; } }, h("div", { class: "flex-row" }, h("div", { class: "column", ref: function (el) { return _this.leftColumn = el; } }, h("slot", { name: "left" })), h("div", { class: "column", ref: function (el) { return _this.centerColumn = el; } }, h("slot", { name: "center" })), h("div", { class: "column", ref: function (el) { return _this.rightColumn = el; } }, h("slot", { name: "right" }))))));
    };
    Object.defineProperty(ThreeColumnComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ThreeColumnComponent;
}());
ThreeColumnComponent.TAG_NAME = "snt-three-column";
ThreeColumnComponent.style = threeColumnComponentCss;
export { ThreeColumnComponent as snt_three_column };
