'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const HeaderExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const langJsonEn = `{"search": "Search", "toggleNavigation":"toggleNavigation","close":"Close","searchUrl":"https://www.sonnet.ca/search.aspx","login":"Log In","gaq":"Get a Quote","back":"Back","skipToMainContent":"Skip to main content","getAQuoteUrl":"http://localhost:3333/getAQuote.html"}`;
        //const langJsonFr = `{\"search\":\"Rechercher\",\"login\":\"Connexion\",\"gaq\":\"Obtenir une soumission\",\"back\":\"retourner\",\"skipToMainContent\":\"Aller au contenu principal\"}`;
        return [
            index.h("snt-header", { fixed: true, "style-classes": "theme-primary", "language-json": langJsonEn }, index.h("snt-nav", { slot: "secondary-nav-desktop", id: "secondary-nav-desktop" }, index.h("snt-nav-item", { href: "?contact-us", target: "_self", "link-title": "Contact Us" }), index.h("snt-nav-item", { href: "?about-us", target: "_self", "link-title": "About Us" }), index.h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })), index.h("snt-nav", { slot: "secondary-nav-mobile", id: "secondary-nav-mobile" }, index.h("snt-nav-item", { href: "?contact-us", target: "_self", linkTitle: "Contact Us" }), index.h("snt-nav-item", { href: "?about-us", target: "_self", linkTitle: "About Us" }), index.h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })), index.h("snt-nav", { slot: "primary-nav", id: "main-nav", expander: "keyboard" }, index.h("snt-nav-item", { href: "?insurance", target: "_self", "link-title": "Insurance" }, index.h("snt-nav-item", { href: "?auto-insurance", target: "_self", "link-title": "Auto" }), index.h("snt-nav-item", { href: "?home-insurance", target: "_self", "link-title": "Home" }), index.h("snt-nav-item", { href: "?tenant-insurance", target: "_self", "link-title": "Tenant" })), index.h("snt-nav-item", { href: "?sonnet-connect", target: "_self", "link-title": "Sonnet Connect" }), index.h("snt-nav-item", { href: "?claims", target: "_self", "link-title": "Claims" })))
        ];
    }
};
HeaderExample.style = "#sidebar-wrapper { min-height: 125vh; }";

exports.header_example = HeaderExample;
