var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Host, Listen, Method, Prop } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
import { SearchBarComponent } from "../search/search-bar/search-bar-component";
import { SearchPanelComponent } from "../search/search-panel/search-panel-component";
import { ActionButtonComponent } from "../button/action-button-component";
import focusTrap from "focus-trap";
export class HeaderComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
        this.fixed = false;
        this.languageJson = StringUtils.empty();
        this.mainContentId = StringUtils.empty();
        this.active = false;
        this.shrunk = false;
        this.languageStrings = {};
        this.focusTrap = null;
        this.gaqButtonActionData = null;
    }
    onToggleSearch(evt) {
        evt.composedPath().includes(this.secondaryNavDesktop) || evt.composedPath().includes(this.searchBar)
            ? this.searchBar.toggleActive().then((active) => {
                this.toggleFocusTrap(active);
            })
            : this.searchPanel.toggleActive().then((active) => {
                if (active) {
                    this.mainPanel.classList.add("hidden");
                }
                else {
                    this.mainPanel.classList.remove("hidden");
                    this.navbarCollapse.focus();
                }
            });
    }
    toggleActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            this.toggleFocusTrap(this.active);
            return Promise.resolve(this.active);
        });
    }
    setActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = active;
            this.toggleFocusTrap(this.active);
            return Promise.resolve(this.active);
        });
    }
    onScroll(_evt) {
        this.fixed && this.shrink();
    }
    onViewportChanged() {
        if (this.navbarCollapse) {
            this.navbarCollapse.viewport = this.layout.viewport;
        }
    }
    componentWillLoad() {
        try {
            this.languageStrings = JSON.parse(this.languageJson);
        }
        catch (e) {
            console.error(e);
        }
        ;
        this.gaqButtonActionData = JSON.stringify({
            getAQuoteUrl: this.languageStrings["getAQuoteUrl"],
            languageString: {
                close: this.languageStrings["close"]
            }
        });
    }
    componentDidLoad() {
        this.fixed && this.shrink();
        this.registersubComponents();
        this.setSubComponentClasses();
        this.insertAdditionalElements();
        this.focusTrap = focusTrap(this.element, {});
        this.searchBar = this.element.querySelector(SearchBarComponent.TAG_NAME);
        this.searchPanel = this.element.querySelector(SearchPanelComponent.TAG_NAME);
    }
    registersubComponents() {
        this.secondaryNavDesktop = this.element.querySelector(`[slot=${HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME}]`);
        this.secondaryNavMobile = this.element.querySelector(`[slot=${HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME}]`);
        this.primaryNav = this.element.querySelector(`[slot=${HeaderComponent.PRIMARY_NAV_SLOT_NAME}]`);
    }
    setSubComponentClasses() {
        this.secondaryNavDesktop.classList.add("theme-header-nav", "flex-row", "justify-content-end", "secondary-nav");
        this.secondaryNavMobile.classList.add("theme-header-nav", "secondary-nav");
        this.primaryNav.classList.add("main-nav", "theme-header-nav");
    }
    insertAdditionalElements() {
        const searchButtonHTML = `<snt-nav-item><snt-action-button action-reference="Action.toggleSearch" icon-class-name="iconNavSearch" link-title="${this.languageStrings["search"] || "Search"}"></snt-action-button> </snt-nav-item>`;
        (!this.secondaryNavDesktop.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavMobile.insertAdjacentHTML("beforeend", searchButtonHTML));
    }
    shrink() {
        if (this.secondaryNavPane) {
            if (!this.shrunk && (this.element.offsetTop + window.scrollY) > (this.element.offsetTop + this.element.offsetHeight)) {
                this.secondaryNavPane.collapsed = true;
                this.shrunk = true;
            }
            else if (window.scrollY == 0 && this.shrunk) {
                this.secondaryNavPane.collapsed = false;
                this.shrunk = false;
            }
        }
    }
    toggleFocusTrap(active) {
        active ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { onSntBackdropTap: () => this.setActive(false), onNavbarToggled: () => this.toggleActive() },
            h("div", { class: "header-container" },
                h("snt-layout", { padding: "vertical-only", ref: (elem) => this.layout = elem },
                    h("header", { class: WebUtils.generateClasses(["header"], this.styleClasses) },
                        h("snt-skip-to-main", { "main-content-id": `#${this.mainContentId}` }, this.languageStrings["skipToMainContent"] || "Skip to main content"),
                        h("snt-pane", { animated: true, ref: (elem) => this.secondaryNavPane = elem },
                            h("slot", { name: HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME })),
                        h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson },
                            h("div", { slot: HeaderComponent.NAVBAR_BRAND_SLOT_NAME },
                                h("slot", { name: HeaderComponent.NAVBAR_BRAND_SLOT_NAME })),
                            h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", "logo-url": this.languageStrings["logoUrl"], ref: (elem) => this.navbarCollapse = elem },
                                h("div", { class: "main-panel", ref: (elem) => this.mainPanel = elem },
                                    h("snt-action-button", { "button-id": "get-a-quote-m-header", actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }),
                                    h("slot", { name: HeaderComponent.PRIMARY_NAV_SLOT_NAME }),
                                    h("slot", { name: HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME })),
                                h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })),
                            h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" },
                                h("snt-nav-item", null,
                                    h("snt-shopping-cart", null, " ")),
                                h("snt-nav-item", { styleClasses: "d-none d-md-flex" },
                                    h("snt-action-button", { "button-id": "get-a-quote-header", styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")),
                                h("snt-nav-item", null,
                                    h("slot", { name: "login-slot" }))))),
                    h("snt-search-bar", { languageJson: this.languageJson })))));
    }
    static get is() { return "snt-header"; }
    static get originalStyleUrls() { return {
        "$": ["header-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["header-component.css"]
    }; }
    static get properties() { return {
        "styleClasses": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "style-classes",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "fixed": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fixed",
            "reflect": true,
            "defaultValue": "false"
        },
        "languageJson": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "language-json",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "mainContentId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "main-content-id",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "active": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "toggleActive": {
            "complexType": {
                "signature": "(active?: boolean) => Promise<boolean>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setActive": {
            "complexType": {
                "signature": "(active: boolean) => Promise<boolean>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "toggleSearch",
            "method": "onToggleSearch",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "scroll",
            "method": "onScroll",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "viewportChanged",
            "method": "onViewportChanged",
            "target": "parent",
            "capture": false,
            "passive": false
        }]; }
}
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
