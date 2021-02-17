'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const toggleComponentCss = "";

const ToggleComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggle = index.createEvent(this, "toggle", 7);
    }
    handleClick() {
        this.toggle.emit();
    }
    render() {
        return (index.h(index.Host, { onClick: this.handleClick.bind(this) }, "X", index.h("span", { class: "sr-only" }, "Search")));
    }
    get element() { return index.getElement(this); }
};
ToggleComponent.TAG_NAME = "snt-header";
ToggleComponent.style = toggleComponentCss;

exports.snt_toggle = ToggleComponent;
