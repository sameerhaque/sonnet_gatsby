import { r as registerInstance, h } from './index-79f6678c.js';
var breadcrumbComponentCss = "snt-breadcrumb{display:none}@media (min-width: 1024px){snt-breadcrumb{display:block}}snt-breadcrumb ul{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}snt-breadcrumb ul li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;margin-right:5px}snt-breadcrumb ul li a{margin-right:5px;color:#323232;text-decoration:none}snt-breadcrumb ul li a:hover{color:#147582}snt-breadcrumb .iconChevron{font-size:10px}";
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    BreadcrumbComponent.prototype.componentWillLoad = function () {
        this._trailObj = JSON.parse(this.trail);
    };
    BreadcrumbComponent.prototype.render = function () {
        var _this = this;
        return (h("snt-layout", null, h("ul", null, this._trailObj.map(function (r, idx) { return h("li", null, (r.href.length > 0)
            ? h("a", { href: r.href }, r.title)
            : h("span", null, r.title), (idx !== _this._trailObj.length - 1) ? h("snt-icon", { styleClasses: "iconChevron" }) : null); }))));
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent.TAG_NAME = "snt-breadcrumb";
BreadcrumbComponent.style = breadcrumbComponentCss;
export { BreadcrumbComponent as snt_breadcrumb };
