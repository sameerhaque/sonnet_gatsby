import { Component, h } from "@stencil/core";
export class HeaderExample {
    render() {
        const langJsonEn = `{"search": "Search", "toggleNavigation":"toggleNavigation","close":"Close","searchUrl":"https://www.sonnet.ca/search.aspx","login":"Log In","gaq":"Get a Quote","back":"Back","skipToMainContent":"Skip to main content","getAQuoteUrl":"http://localhost:3333/getAQuote.html"}`;
        //const langJsonFr = `{\"search\":\"Rechercher\",\"login\":\"Connexion\",\"gaq\":\"Obtenir une soumission\",\"back\":\"retourner\",\"skipToMainContent\":\"Aller au contenu principal\"}`;
        return [
            h("snt-header", { fixed: true, "style-classes": "theme-primary", "language-json": langJsonEn },
                h("snt-nav", { slot: "secondary-nav-desktop", id: "secondary-nav-desktop" },
                    h("snt-nav-item", { href: "?contact-us", target: "_self", "link-title": "Contact Us" }),
                    h("snt-nav-item", { href: "?about-us", target: "_self", "link-title": "About Us" }),
                    h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })),
                h("snt-nav", { slot: "secondary-nav-mobile", id: "secondary-nav-mobile" },
                    h("snt-nav-item", { href: "?contact-us", target: "_self", linkTitle: "Contact Us" }),
                    h("snt-nav-item", { href: "?about-us", target: "_self", linkTitle: "About Us" }),
                    h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })),
                h("snt-nav", { slot: "primary-nav", id: "main-nav", expander: "keyboard" },
                    h("snt-nav-item", { href: "?insurance", target: "_self", "link-title": "Insurance" },
                        h("snt-nav-item", { href: "?auto-insurance", target: "_self", "link-title": "Auto" }),
                        h("snt-nav-item", { href: "?home-insurance", target: "_self", "link-title": "Home" }),
                        h("snt-nav-item", { href: "?tenant-insurance", target: "_self", "link-title": "Tenant" })),
                    h("snt-nav-item", { href: "?sonnet-connect", target: "_self", "link-title": "Sonnet Connect" }),
                    h("snt-nav-item", { href: "?claims", target: "_self", "link-title": "Claims" })))
        ];
    }
    static get is() { return "header-example"; }
    static get styles() { return "#sidebar-wrapper { min-height: 125vh; }"; }
}
