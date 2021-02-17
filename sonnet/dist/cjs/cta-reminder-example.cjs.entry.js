'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const CtaReminderExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "action-reference": "Action.logAction" }), "\u00A0", index.h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "url-target": "_blank", url: "https://www.sonnet.ca" })));
    }
};
CtaReminderExample.TAG_NAME = "cta-reminder-example";

exports.cta_reminder_example = CtaReminderExample;
