import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
var demoAppHomeCss = "";
var DemoAppHome = /** @class */ (function () {
    function DemoAppHome(hostRef) {
        registerInstance(this, hostRef);
    }
    DemoAppHome.prototype.render = function () {
        return (h("div", null, "HOME PAGE"));
    };
    Object.defineProperty(DemoAppHome.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return DemoAppHome;
}());
DemoAppHome.TAG_NAME = "demo-app-home";
DemoAppHome.style = demoAppHomeCss;
export { DemoAppHome as demo_app_home };
