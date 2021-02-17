import { r as registerInstance, h } from './index-79f6678c.js';

const PageNotFoundExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("snt-hero", { class: "error-fill" }, h("div", { slot: "content" }, h("h1", null, "Oops! Looks like something went wrong..."), h("p", null, "Let's get you back to finding the right coverage.")))));
    }
};

export { PageNotFoundExample as page_not_found_example };
