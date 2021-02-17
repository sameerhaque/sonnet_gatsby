'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const AccordionExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const modal = document.querySelector("snt-modal#modal-1");
        if (modal) {
            modal.show();
        }
    }
    render() {
        return [
            index.h("div", null, index.h("h3", null, "Modal Component Examples"), index.h("snt-modal", { id: "modal-1", "language-string": "{\"close\":\"Close\"}", "style-classes": "contact-us-login" }, index.h("snt-title-copy", { "title-string": "What can we help with?" }, index.h("p", { style: { textAlign: "center" } }, "Tell us a little bit about you and your inquiry - we'll point you in the right direction")), index.h("snt-multi-column-mixed", { "column-count": '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}' }, index.h("div", { class: "column" }, index.h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://t.ly/9hiJ", \r\n                                "smallIconUrl": "https://t.ly/9hiJ"\r\n                            }', "title-string": "I have a Sonnet account", "link-href": "https://secure.sonnet.ca/#/login?lang=en" }, index.h("p", null, "Log in first, then start a chat. This way, we can talk about policy and account specifics."))), index.h("div", { class: "column" }, index.h("snt-icon-copy", { properties: '{\r\n                                    "largeIconUrl": "https://t.ly/9hiJ", \r\n                                    "smallIconUrl": "https://t.ly/9hiJ"\r\n                                }', "title-string": "I have a general inquiry", "link-action-reference": "Action.dismiss", "link-action-data": '{}' }, index.h("p", null, "Ask us your general questions about quoting, insurance and more via chat or email. "))))))
        ];
    }
};
AccordionExample.TAG_NAME = "modal-example";

exports.modal_example = AccordionExample;
