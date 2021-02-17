'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const TipExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("div", { class: "dark-fill" }, index.h("h3", null, "Dark Fill Tip Example"), index.h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component")),
            index.h("br", null),
            index.h("div", { class: "light-fill" }, index.h("h3", null, "Light Fill Tip Example"), index.h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component"))
        ];
    }
};

exports.tip_example = TipExample;
