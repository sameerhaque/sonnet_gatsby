'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const ButtonLinkExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        //return (<div>Hello!</div>);
        return [
            index.h("div", null, "Mobile"),
            index.h("div", { class: "mobile" }, index.h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            index.h("div", null, "Tablet"),
            index.h("div", { class: "tablet" }, index.h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            index.h("div", null, "Desktop"),
            index.h("div", { class: "desktop" }, index.h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            index.h("div", null, "HD"),
            index.h("div", { class: "hd" }, index.h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!"))
        ];
    }
};
ButtonLinkExample.TAG_NAME = "button-link-example";
ButtonLinkExample.style = ".mobile {\n        width: 320px;\n    }\n    .tablet {\n        width: 768px;\n    }\n    .desktop {\n        width: 1024px;\n    }\n    .hd {\n        width: 1440px;\n    }";

exports.button_link_example = ButtonLinkExample;
