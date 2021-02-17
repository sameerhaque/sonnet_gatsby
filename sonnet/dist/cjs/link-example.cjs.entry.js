'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const linkExampleCss = "link-example table{width:100%}link-example th{padding:5px;width:25%;border:1px solid black}link-example td{width:25%;text-align:left;border:1px solid black}link-example td p{padding:5px}.light-fill link-example td p,link-example td p.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill link-example td p,link-example td p.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill link-example td p,link-example td p.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill link-example td p,link-example td p.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill link-example td p,link-example td p.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}";

const LinkExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("h1", null, "Link Styles"), index.h("br", null), index.h("h2", null, "Regular Links (<a> tags)"), index.h("snt-layout", null, index.h("table", null, index.h("tr", null, index.h("th", null, "White"), index.h("th", null, "Secondary light"), index.h("th", null, "Grey 03"), index.h("th", null, "Primary Accent")), index.h("tr", null, index.h("td", null, index.h("p", { class: "white-fill" }, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags"))), index.h("td", null, index.h("p", { class: "light-fill" }, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags"))), index.h("td", null, index.h("p", { class: "neutral-fill" }, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags"))), index.h("td", null, index.h("p", { class: "dark-fill" }, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags")))))), index.h("h2", null, "SntLink Links"), index.h("snt-layout", null, index.h("table", null, index.h("tr", null, index.h("th", null, "White"), index.h("th", null, "Secondary light"), index.h("th", null, "Grey 03"), index.h("th", null, "Primary Accent")), index.h("tr", null, index.h("td", null, index.h("p", { class: "white-fill" }, index.h("snt-link", { href: "www.sonnet.ca" }, "Sonnet Link"))), index.h("td", null, index.h("p", { class: "light-fill" }, index.h("snt-link", { href: "www.sonnet.ca" }, "Sonnet Link"))), index.h("td", null, index.h("p", { class: "neutral-fill" }, index.h("snt-link", { href: "www.sonnet.ca" }, "Sonnet Link"))), index.h("td", null, index.h("p", { class: "dark-fill" }, index.h("snt-link", { href: "www.sonnet.ca" }, "Sonnet Link")))))), index.h("h2", null, "H's"), index.h("snt-layout", null, index.h("table", null, index.h("tr", null, index.h("th", null, "White"), index.h("th", null, "Secondary light"), index.h("th", null, "Grey 03"), index.h("th", null, "Primary Accent")), index.h("tr", null, index.h("td", null, index.h("p", { class: "white-fill" }, index.h("h3", null, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags")))), index.h("td", null, index.h("p", { class: "light-fill" }, index.h("h3", null, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags")))), index.h("td", null, index.h("p", { class: "neutral-fill" }, index.h("h3", null, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags"), index.h("br", null), index.h("snt-link", { target: "_blank", href: "www.sonnet.ca" }, "Regular")))), index.h("td", null, index.h("p", { class: "dark-fill" }, index.h("h3", null, index.h("a", { href: "www.sonnet.ca" }, "Regular anchor tags"))))))), index.h("h2", null, "Footer & Breadcrumbs"), index.h("snt-layout", null, index.h("table", null, index.h("tr", null, index.h("th", null, "Footer Vertical"), index.h("th", null, "Footer Horizontal"), index.h("th", null, "Breadcrumb")), index.h("tr", null, index.h("td", null, index.h("snt-footer", null, index.h("div", { class: "footer-actions" }, index.h("snt-nav", null, index.h("snt-nav-item", { href: "?insurance", target: "_self", "link-title": "Insurance" }))))), index.h("td", null, index.h("snt-footer", null, index.h("div", { class: "footer-row" }, index.h("snt-nav", null, index.h("snt-nav-item", { href: "?privacy", target: "_self", "link-title": "Privacy" }))))), index.h("td", null, index.h("snt-breadcrumb", { trail: '[{"title": "test", "href": "/test" },{ "title": "Current Page", "href": ""}]' }))))), index.h("h2", null, "Pagination"), index.h("snt-layout", null, index.h("table", null, index.h("tr", null, index.h("th", null, "Pagination")), index.h("tr", null, index.h("td", null, index.h("snt-pagination", { "total-pages": 2, curr: 1 }))))), index.h("br", null)));
    }
};
LinkExample.style = linkExampleCss;

exports.link_example = LinkExample;
