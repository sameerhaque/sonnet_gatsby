'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const iconComponentCss = "";

const IconComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: `icon-font ${this.styleClasses}`, "aria-hidden": "true" }));
    }
    get element() { return index.getElement(this); }
};
IconComponent.TAG_NAME = "snt-icon";
IconComponent.style = iconComponentCss;

exports.snt_icon = IconComponent;
