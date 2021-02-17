'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const threeColumnComponentCss = "snt-three-column .flex-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}snt-three-column .column{display:-ms-flexbox;display:flex;-ms-flex:0 0 100%;flex:0 0 100%;-ms-flex-pack:center;justify-content:center}@media (max-width: 767px){snt-three-column .column:not(:first-child){margin-top:26px}}snt-three-column .column>*{display:-ms-flexbox;display:flex;width:100%}snt-three-column snt-layout[viewport=medium] .column{margin-top:0px;-ms-flex:0 0 50%;flex:0 0 50%}snt-three-column snt-layout[viewport=medium] .column:nth-child(odd){-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=medium] .column:nth-child(even){-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=medium] .column:nth-child(n+3){margin-top:26px}snt-three-column snt-layout[viewport=medium] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=medium] .column>*:first-child{display:-ms-flexbox;display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=large] .column{margin-top:0px;-ms-flex:0 0 33.3%;flex:0 0 33.3%}snt-three-column snt-layout[viewport=large] .column:first-child{-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=large] .column:last-child{-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column snt-layout[viewport=extra-large] .column{margin-top:0px;-ms-flex:0 0 33.3%;flex:0 0 33.3%}snt-three-column snt-layout[viewport=extra-large] .column:first-child{-ms-flex-pack:start;justify-content:flex-start}snt-three-column snt-layout[viewport=extra-large] .column:last-child{-ms-flex-pack:end;justify-content:flex-end}snt-three-column snt-layout[viewport=extra-large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column.neutral-fill snt-layout,.neutral-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.light-fill snt-layout,.light-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.float-fill snt-layout,.float-fill snt-three-column snt-layout{background-color:#f8f8f8}snt-three-column slot{display:-ms-flexbox;display:flex}snt-three-column .flex-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}snt-three-column .column{display:-ms-flexbox;display:flex;-ms-flex:0 0 100%;flex:0 0 100%;-ms-flex-pack:center;justify-content:center}snt-three-column .column:not(:first-child){margin-top:26px}snt-three-column .column>*{display:-ms-flexbox;display:flex;width:100%}";

const ThreeColumnComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.leftColumn.setAttribute('viewport', viewport);
        this.centerColumn.setAttribute('viewport', viewport);
        this.rightColumn.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.registerChildren(this.leftColumn);
        this.registerChildren(this.centerColumn);
        this.registerChildren(this.rightColumn);
    }
    registerChildren(column) {
        column.childNodes.forEach((childEl) => {
            if (childEl.tagName === 'SNT-ICON-COPY') {
                childEl.registerViewport(this.layoutEl);
            }
        });
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("snt-layout", { ref: (el) => this.layoutEl = el }, index.h("div", { class: "flex-row" }, index.h("div", { class: "column", ref: el => this.leftColumn = el }, index.h("slot", { name: "left" })), index.h("div", { class: "column", ref: el => this.centerColumn = el }, index.h("slot", { name: "center" })), index.h("div", { class: "column", ref: el => this.rightColumn = el }, index.h("slot", { name: "right" }))))));
    }
    get hostElement() { return index.getElement(this); }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column";
ThreeColumnComponent.style = threeColumnComponentCss;

exports.snt_three_column = ThreeColumnComponent;
