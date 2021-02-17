'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const TitleExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("div", null, index.h("h3", null, "h1 example - Centered"), index.h("snt-title", { class: "left", "title-type": 'h1', "clamp-lines": 1, "truncation-string": '..."' }, "Results for \"How do I know how much discount is applied to my preminum?\""), index.h("br", null), index.h("h3", null, "h2 example - Right Aligned"), index.h("snt-title", { class: "right", "title-type": 'h2' }, "This is sample title"), index.h("br", null), index.h("h3", null, "h3 example - Left"), index.h("snt-title", { class: "left", "title-type": 'h3' }, "This is sample title"), index.h("br", null), index.h("h3", null, "h4 example - Centered Left Mobile"), index.h("snt-title", { class: "left-mobile", "title-type": 'h4' }, "This is sample title"))
        ];
    }
};

exports.title_example = TitleExample;
