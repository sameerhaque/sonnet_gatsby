'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const breadcrumbComponentCss = "snt-breadcrumb{display:none}@media (min-width: 1024px){snt-breadcrumb{display:block}}snt-breadcrumb ul{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}snt-breadcrumb ul li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;margin-right:5px}snt-breadcrumb ul li a{margin-right:5px;color:#323232;text-decoration:none}snt-breadcrumb ul li a:hover{color:#147582}snt-breadcrumb .iconChevron{font-size:10px}";

const BreadcrumbComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this._trailObj = JSON.parse(this.trail);
    }
    render() {
        return (index.h("snt-layout", null, index.h("ul", null, this._trailObj.map((r, idx) => index.h("li", null, (r.href.length > 0)
            ? index.h("a", { href: r.href }, r.title)
            : index.h("span", null, r.title), (idx !== this._trailObj.length - 1) ? index.h("snt-icon", { styleClasses: "iconChevron" }) : null)))));
    }
};
BreadcrumbComponent.TAG_NAME = "snt-breadcrumb";
BreadcrumbComponent.style = breadcrumbComponentCss;

exports.snt_breadcrumb = BreadcrumbComponent;
