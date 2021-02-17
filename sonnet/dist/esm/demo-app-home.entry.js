import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';

const demoAppHomeCss = "";

const DemoAppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, "HOME PAGE"));
    }
    get element() { return getElement(this); }
};
DemoAppHome.TAG_NAME = "demo-app-home";
DemoAppHome.style = demoAppHomeCss;

export { DemoAppHome as demo_app_home };
