import { r as registerInstance, h } from './index-79f6678c.js';
var SkipToMainExample = /** @class */ (function () {
    function SkipToMainExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SkipToMainExample.prototype.render = function () {
        return (h("div", null, h("snt-skip-to-main", { "main-content-id": '#main-content' }, "Skip to main content"), " ", h("br", null), h("br", null), h("br", null), h("br", null), h("button", { id: 'main-content' }, "this is main content!")));
    };
    return SkipToMainExample;
}());
SkipToMainExample.TAG_NAME = 'skiptomain-example';
SkipToMainExample.style = "#main-content:focus{outline:1px solid red;}";
export { SkipToMainExample as skiptomain_example };
