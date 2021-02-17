'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const demoAppHomeCss = "";

const DemoAppHome = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, "HOME PAGE"));
    }
    get element() { return index.getElement(this); }
};
DemoAppHome.TAG_NAME = "demo-app-home";
DemoAppHome.style = demoAppHomeCss;

exports.demo_app_home = DemoAppHome;
