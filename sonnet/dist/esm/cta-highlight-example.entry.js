import { r as registerInstance, h } from './index-79f6678c.js';

const CtaHightlightExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("snt-cta-highlight", { cta: "Get a Quote", "action-reference": "Action.logAction" }, "Best offer ever"), "\u00A0", h("snt-cta-highlight", { cta: "Get a Quote", "url-target": "_blank", url: "https://www.sonnet.ca" }, "Best offer ever")));
    }
};

export { CtaHightlightExample as cta_highlight_example };
