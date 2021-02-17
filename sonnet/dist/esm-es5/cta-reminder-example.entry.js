import { r as registerInstance, h } from './index-79f6678c.js';
var CtaReminderExample = /** @class */ (function () {
    function CtaReminderExample(hostRef) {
        registerInstance(this, hostRef);
    }
    CtaReminderExample.prototype.render = function () {
        return (h("div", null, h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "action-reference": "Action.logAction" }), "\u00A0", h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "url-target": "_blank", url: "https://www.sonnet.ca" })));
    };
    return CtaReminderExample;
}());
CtaReminderExample.TAG_NAME = "cta-reminder-example";
export { CtaReminderExample as cta_reminder_example };
