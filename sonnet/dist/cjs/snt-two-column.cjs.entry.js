'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const twoColumnComponentCss = ".light-fill snt-two-column,snt-two-column.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-two-column,snt-two-column.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-two-column,snt-two-column.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-two-column,snt-two-column.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-two-column,snt-two-column.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-two-column .flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}snt-two-column .column-left,snt-two-column .column-right{display:block;width:100%}snt-two-column snt-layout[viewport=small] .column-left .spacings,snt-two-column snt-layout[viewport=small] .column-right .spacings{padding:2.5em 1.875em}snt-two-column snt-layout[viewport=small] .column-left .spacings{padding-bottom:0.813em}snt-two-column snt-layout[viewport=extra-small] .column-left .spacings,snt-two-column snt-layout[viewport=extra-small] .column-right .spacings{padding:2.5em 1.875em}snt-two-column snt-layout[viewport=extra-small] .column-left .spacings{padding-bottom:0.813em}snt-two-column snt-layout[viewport=medium] .column-left .spacings{padding:2.5em 2.313em;padding-right:13px}snt-two-column snt-layout[viewport=medium] .column-right .spacings{padding:2.5em 2.313em;padding-left:13px}snt-two-column snt-layout[viewport=medium] .column-left,snt-two-column snt-layout[viewport=medium] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column snt-layout[viewport=large] .column-left .spacings{padding:3.75em 4.438em;padding-right:15px}snt-two-column snt-layout[viewport=large] .column-right .spacings{padding:3.75em 4.438em;padding-left:15px}snt-two-column snt-layout[viewport=large] .column-left,snt-two-column snt-layout[viewport=large] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column snt-layout[viewport=extra-large] .column-left .spacings{padding:3.75em 8.438em;padding-right:15px}snt-two-column snt-layout[viewport=extra-large] .column-right .spacings{padding:3.75em 8.438em;padding-left:15px}snt-two-column snt-layout[viewport=extra-large] .column-left,snt-two-column snt-layout[viewport=extra-large] .column-right{-ms-flex:0 0 50%;flex:0 0 50%}";

const TwoColumnComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.columnLeft.setAttribute('viewport', viewport);
        this.columnRight.setAttribute('viewport', viewport);
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("snt-layout", { padding: "none" }, index.h("div", { class: "flex-container " }, index.h("div", { class: "column-left", ref: el => this.columnLeft = el }, index.h("slot", { name: "left" })), index.h("div", { class: "column-right", ref: el => this.columnRight = el }, index.h("slot", { name: "right" }))))));
    }
    get hostElement() { return index.getElement(this); }
};
TwoColumnComponent.TAG_NAME = "snt-two-column";
TwoColumnComponent.style = twoColumnComponentCss;

exports.snt_two_column = TwoColumnComponent;
