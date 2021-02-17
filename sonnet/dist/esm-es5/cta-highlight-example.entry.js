import { r as registerInstance, h } from './index-79f6678c.js';
var CtaHightlightExample = /** @class */ (function () {
    function CtaHightlightExample(hostRef) {
        registerInstance(this, hostRef);
    }
    CtaHightlightExample.prototype.render = function () {
        return (h("div", null, h("snt-cta-highlight", { cta: "Get a Quote", "action-reference": "Action.logAction" }, "Best offer ever"), "\u00A0", h("snt-cta-highlight", { cta: "Get a Quote", "url-target": "_blank", url: "https://www.sonnet.ca" }, "Best offer ever")));
    };
    return CtaHightlightExample;
}());
export { CtaHightlightExample as cta_highlight_example };
