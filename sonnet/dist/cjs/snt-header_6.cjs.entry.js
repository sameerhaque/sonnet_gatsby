'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const CookieUtils = require('./CookieUtils-b0147207.js');
require('./EventConfigurationBuilder-ca448050.js');
require('./ReflectionUtils-89506fdc.js');
const index$1 = require('./index-aa081a2a.js');
const actionButtonComponent = require('./action-button-component-384b704c.js');

const searchBarComponentCss = "snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SearchBarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.languageJson = StringUtils.StringUtils.empty();
    }
    toggleActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") || !this.active;
            return this.active;
        });
    }
    watchActive(active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    }
    componentDidUpdate() {
        this.setFocus();
    }
    setFocus() {
        if (this.active) {
            const input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    }
    render() {
        return (index.h(index.Host, { onSntBackdropTap: this.toggleActive.bind(this) }, index.h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" }, index.h("snt-search-typeahead", { "search-combobox-id": "global-search-combobox", ref: (el) => this.searchTypeahead = el, languageJson: this.languageJson }), index.h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })), ",", index.h("snt-backdrop", null)));
    }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
SearchBarComponent.TAG_NAME = "snt-search-bar";
SearchBarComponent.style = searchBarComponentCss;

const searchPanelComponentCss = "snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SearchPanelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.StringUtils.empty();
        this.languageJson = StringUtils.StringUtils.empty();
    }
    toggleActive(active) {
        return __awaiter$1(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            return this.active;
        });
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }), index.h("snt-search-typeahead", { "search-combobox-id": "global-search-panel-combobox", languageJson: this.languageJson })));
    }
};
SearchPanelComponent.TAG_NAME = "snt-search-panel";
SearchPanelComponent.style = searchPanelComponentCss;

const headerComponentCss = "snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:-webkit-sticky;position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:-ms-flexbox;display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:-ms-flexbox;display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{-ms-flex-order:1;order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{-ms-flex-order:initial;order:initial}}snt-header snt-navbar{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{background-image:none;color:#ffffff}snt-header snt-link a:hover,snt-header snt-link a:focus{background-image:none}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2;outline-offset:0px}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const HeaderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
        this.fixed = false;
        this.languageJson = StringUtils.StringUtils.empty();
        this.mainContentId = StringUtils.StringUtils.empty();
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
        return __awaiter$2(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            this.toggleFocusTrap(this.active);
            return Promise.resolve(this.active);
        });
    }
    setActive(active) {
        return __awaiter$2(this, void 0, void 0, function* () {
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
        this.focusTrap = index$1.focusTrap_1(this.element, {});
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
        (!this.secondaryNavDesktop.querySelector(actionButtonComponent.ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(actionButtonComponent.ActionButtonComponent.TAG_NAME) &&
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
        return (index.h(index.Host, { onSntBackdropTap: () => this.setActive(false), onNavbarToggled: () => this.toggleActive() }, index.h("div", { class: "header-container" }, index.h("snt-layout", { padding: "vertical-only", ref: (elem) => this.layout = elem }, index.h("header", { class: WebUtils.WebUtils.generateClasses(["header"], this.styleClasses) }, index.h("snt-skip-to-main", { "main-content-id": `#${this.mainContentId}` }, this.languageStrings["skipToMainContent"] || "Skip to main content"), index.h("snt-pane", { animated: true, ref: (elem) => this.secondaryNavPane = elem }, index.h("slot", { name: HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME })), index.h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson }, index.h("div", { slot: HeaderComponent.NAVBAR_BRAND_SLOT_NAME }, index.h("slot", { name: HeaderComponent.NAVBAR_BRAND_SLOT_NAME })), index.h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", "logo-url": this.languageStrings["logoUrl"], ref: (elem) => this.navbarCollapse = elem }, index.h("div", { class: "main-panel", ref: (elem) => this.mainPanel = elem }, index.h("snt-action-button", { "button-id": "get-a-quote-m-header", actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }), index.h("slot", { name: HeaderComponent.PRIMARY_NAV_SLOT_NAME }), index.h("slot", { name: HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME })), index.h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })), index.h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" }, index.h("snt-nav-item", null, index.h("snt-shopping-cart", null, " ")), index.h("snt-nav-item", { styleClasses: "d-none d-md-flex" }, index.h("snt-action-button", { "button-id": "get-a-quote-header", styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")), index.h("snt-nav-item", null, index.h("slot", { name: "login-slot" }))))), index.h("snt-search-bar", { languageJson: this.languageJson })))));
    }
    get element() { return index.getElement(this); }
};
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
HeaderComponent.style = headerComponentCss;

const navbarCollapseComponentCss = "snt-navbar-collapse{width:290px}snt-navbar-collapse hr{border-top:1px solid #ffffff;margin:0}snt-navbar-collapse snt-nav{padding:0.825rem 0 0.5rem;border-bottom:1px solid #ffffff}@media (min-width: 1024px){snt-navbar-collapse snt-nav{padding:0;border-bottom:none}}snt-navbar-collapse snt-nav:last-of-type{border-bottom:none}snt-navbar-collapse snt-nav-item{width:100%}@media (min-width: 1024px){snt-navbar-collapse snt-nav-item{width:auto}}snt-navbar-collapse .header{padding:20px 30px 20px 30px}@media (min-width: 1024px){snt-navbar-collapse .header{padding:initial}}snt-navbar-collapse .header snt-icon{font-size:1rem;margin-right:24px}snt-navbar-collapse .header snt-image{width:100%;max-width:85px}snt-navbar-collapse .body{position:relative;padding:0.75rem 2rem 2rem}@media (min-width: 1024px){snt-navbar-collapse .body{padding:0}}snt-navbar-collapse .body snt-button.cta button{width:100%}snt-navbar-collapse .spacer{display:none}@media (min-width: 1024px){snt-navbar-collapse .spacer{display:-ms-flexbox;display:flex;-ms-flex:0 1 4.375rem;flex:0 1 4.375rem;min-width:1rem}}snt-navbar-collapse[shown]{z-index:10000;position:fixed;left:0;top:0;bottom:0;background-color:#323232}@media (min-width: 1024px){snt-navbar-collapse[shown]{position:initial}}";

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NavbarCollapseComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.navbarToggled = index.createEvent(this, "navbarToggled", 7);
        this.shown = false;
        this.viewport = null;
        this.logoUrl = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
    }
    toggleShown(shown) {
        return __awaiter$3(this, void 0, void 0, function* () {
            this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
            return Promise.resolve(this.shown);
        });
    }
    onShown(shown) {
        if (shown) {
            this.lastActiveElement = document.activeElement || document.body;
        }
        this.elementToFocusOn = shown ? this.element : this.lastActiveElement;
    }
    onViewport() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentWillRender() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentDidUpdate() {
        if (this.elementToFocusOn !== null) {
            this.elementToFocusOn.focus();
            this.elementToFocusOn = null;
        }
    }
    render() {
        return (index.h(index.Host, { class: `collapse navbar-collapse ${this.shown ? "show" : ""}`, tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" }, index.h("div", { class: "spacer" }), index.h("div", { class: "header d-flex d-lg-none align-items-center" }, index.h("snt-button", { class: "d-inline-flex", onClick: () => this.navbarToggled.emit() }, index.h("snt-icon", { styleClasses: "iconNavClose" })), index.h("snt-image", { "data-src": this.logoUrl, width: "100", height: "100" })), index.h("div", { class: "body" }, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "shown": ["onShown"],
        "viewport": ["onViewport"]
    }; }
};
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
NavbarCollapseComponent.style = navbarCollapseComponentCss;

const navbarComponentCss = "snt-navbar{width:100%}snt-navbar.navbar{margin:0;padding:0;}@media (min-width: 768px){snt-navbar.navbar.navbar-expand-md .nav-link,snt-navbar.navbar.navbar-expand-lg .nav-link{padding-left:0;padding-right:0}}@media (max-width: 1023px){snt-navbar[active] snt-backdrop{display:block}}snt-navbar snt-backdrop{display:none}snt-navbar .actions-nav,snt-navbar .brand-and-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap}@media (min-width: 1024px){snt-navbar .actions-nav,snt-navbar .brand-and-toggle{-ms-flex-flow:column nowrap;flex-flow:column nowrap}}snt-navbar .brand-and-toggle>*:not(:last-child){margin-right:1.25rem}snt-navbar .actions-nav>*:not(:first-child){margin-left:1.25rem}@media (min-width: 1024px){snt-navbar .actions-nav>*:not(:first-child){margin-left:1.625rem}}snt-navbar .main-panel.hidden{visibility:hidden}";

var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NavbarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    listenNavbarTogglerEvent(_event) {
        this.toggleActive().then(null);
    }
    toggleActive(active) {
        return __awaiter$4(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            return this.active;
        });
    }
    watchActive() {
        if (this.navbarCollapse) {
            this.navbarCollapse.toggleShown(this.active)
                .then(null);
        }
    }
    componentDidLoad() {
        this.navbarCollapse = document.querySelector(`${NavbarCollapseComponent.TAG_NAME}`);
        if (this.navbarCollapse) {
            this.navbarToggle.ariaControls = this.navbarCollapse.id;
        }
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: () => this.toggleActive() }, index.h("div", { class: "brand-and-toggle" }, index.h("snt-navbar-toggle", { ref: (elem) => this.navbarToggle = elem, languageString: this.languageString }), index.h("slot", { name: "navbar-brand" })), index.h("slot", { name: "navbar-collapse" }), index.h("slot", null), index.h("snt-backdrop", null)));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
NavbarComponent.TAG_NAME = "snt-navbar";
NavbarComponent.style = navbarComponentCss;

const shoppingCartComponentCss = "snt-shopping-cart snt-link{display:-ms-flexbox;display:flex}snt-shopping-cart snt-link a{position:relative;font-size:1.5rem;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;margin:0 0.5rem 0.25rem}snt-shopping-cart .item-counter{position:absolute;top:-15%;right:-40%;height:14px;width:14px;border:1px solid #323232;background-color:#6ebac5;border-radius:50%;color:#323232;font-size:10px;line-height:14px;text-align:center;vertical-align:center}";

const ShoppingCartComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cartValue = "0";
    }
    componentDidLoad() {
        const cartValue = CookieUtils.CookieUtils.readCookie(ComponentConstants.ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    }
    render() {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (index.h("snt-link", { href: ShoppingCartComponent.SHOPPING_CART_URL }, index.h("snt-icon", { styleClasses: "iconNavCartEmpty" }), index.h("span", { class: "item-counter" }, this.cartValue)));
        }
    }
};
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
ShoppingCartComponent.style = shoppingCartComponentCss;

exports.snt_header = HeaderComponent;
exports.snt_navbar = NavbarComponent;
exports.snt_navbar_collapse = NavbarCollapseComponent;
exports.snt_search_bar = SearchBarComponent;
exports.snt_search_panel = SearchPanelComponent;
exports.snt_shopping_cart = ShoppingCartComponent;
