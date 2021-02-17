var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host, g as getElement, e as createEvent } from './index-79f6678c.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { C as CookieUtils } from './CookieUtils-d59e6373.js';
import './EventConfigurationBuilder-7481df3b.js';
import './ReflectionUtils-6ed4bd5c.js';
import { f as focusTrap_1 } from './index-a882e395.js';
import { A as ActionButtonComponent } from './action-button-component-5520aeb1.js';
var searchBarComponentCss = "snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(hostRef) {
        registerInstance(this, hostRef);
        this.languageJson = StringUtils.empty();
    }
    SearchBarComponent.prototype.toggleActive = function (active) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = (typeof (active) === "boolean") || !this.active;
                return [2 /*return*/, this.active];
            });
        });
    };
    SearchBarComponent.prototype.watchActive = function (active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    };
    SearchBarComponent.prototype.componentDidUpdate = function () {
        this.setFocus();
    };
    SearchBarComponent.prototype.setFocus = function () {
        if (this.active) {
            var input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    };
    SearchBarComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { onSntBackdropTap: this.toggleActive.bind(this) }, h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" }, h("snt-search-typeahead", { "search-combobox-id": "global-search-combobox", ref: function (el) { return _this.searchTypeahead = el; }, languageJson: this.languageJson }), h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })), ",", h("snt-backdrop", null)));
    };
    Object.defineProperty(SearchBarComponent, "watchers", {
        get: function () {
            return {
                "active": ["watchActive"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return SearchBarComponent;
}());
SearchBarComponent.TAG_NAME = "snt-search-bar";
SearchBarComponent.style = searchBarComponentCss;
var searchPanelComponentCss = "snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SearchPanelComponent = /** @class */ (function () {
    function SearchPanelComponent(hostRef) {
        registerInstance(this, hostRef);
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.empty();
        this.languageJson = StringUtils.empty();
    }
    SearchPanelComponent.prototype.toggleActive = function (active) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = (typeof (active) === "boolean") ? active : !this.active;
                return [2 /*return*/, this.active];
            });
        });
    };
    SearchPanelComponent.prototype.componentWillLoad = function () {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
    };
    SearchPanelComponent.prototype.render = function () {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }), h("snt-search-typeahead", { "search-combobox-id": "global-search-panel-combobox", languageJson: this.languageJson })));
    };
    return SearchPanelComponent;
}());
SearchPanelComponent.TAG_NAME = "snt-search-panel";
SearchPanelComponent.style = searchPanelComponentCss;
var headerComponentCss = "snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:-webkit-sticky;position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:-ms-flexbox;display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:-ms-flexbox;display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{-ms-flex-order:1;order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{-ms-flex-order:initial;order:initial}}snt-header snt-navbar{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{background-image:none;color:#ffffff}snt-header snt-link a:hover,snt-header snt-link a:focus{background-image:none}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2;outline-offset:0px}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";
var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(hostRef) {
        registerInstance(this, hostRef);
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
    HeaderComponent.prototype.onToggleSearch = function (evt) {
        var _this = this;
        evt.composedPath().includes(this.secondaryNavDesktop) || evt.composedPath().includes(this.searchBar)
            ? this.searchBar.toggleActive().then(function (active) {
                _this.toggleFocusTrap(active);
            })
            : this.searchPanel.toggleActive().then(function (active) {
                if (active) {
                    _this.mainPanel.classList.add("hidden");
                }
                else {
                    _this.mainPanel.classList.remove("hidden");
                    _this.navbarCollapse.focus();
                }
            });
    };
    HeaderComponent.prototype.toggleActive = function (active) {
        return __awaiter$2(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = (typeof (active) === "boolean") ? active : !this.active;
                this.toggleFocusTrap(this.active);
                return [2 /*return*/, Promise.resolve(this.active)];
            });
        });
    };
    HeaderComponent.prototype.setActive = function (active) {
        return __awaiter$2(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = active;
                this.toggleFocusTrap(this.active);
                return [2 /*return*/, Promise.resolve(this.active)];
            });
        });
    };
    HeaderComponent.prototype.onScroll = function (_evt) {
        this.fixed && this.shrink();
    };
    HeaderComponent.prototype.onViewportChanged = function () {
        if (this.navbarCollapse) {
            this.navbarCollapse.viewport = this.layout.viewport;
        }
    };
    HeaderComponent.prototype.componentWillLoad = function () {
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
    };
    HeaderComponent.prototype.componentDidLoad = function () {
        this.fixed && this.shrink();
        this.registersubComponents();
        this.setSubComponentClasses();
        this.insertAdditionalElements();
        this.focusTrap = focusTrap_1(this.element, {});
        this.searchBar = this.element.querySelector(SearchBarComponent.TAG_NAME);
        this.searchPanel = this.element.querySelector(SearchPanelComponent.TAG_NAME);
    };
    HeaderComponent.prototype.registersubComponents = function () {
        this.secondaryNavDesktop = this.element.querySelector("[slot=" + HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME + "]");
        this.secondaryNavMobile = this.element.querySelector("[slot=" + HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME + "]");
        this.primaryNav = this.element.querySelector("[slot=" + HeaderComponent.PRIMARY_NAV_SLOT_NAME + "]");
    };
    HeaderComponent.prototype.setSubComponentClasses = function () {
        this.secondaryNavDesktop.classList.add("theme-header-nav", "flex-row", "justify-content-end", "secondary-nav");
        this.secondaryNavMobile.classList.add("theme-header-nav", "secondary-nav");
        this.primaryNav.classList.add("main-nav", "theme-header-nav");
    };
    HeaderComponent.prototype.insertAdditionalElements = function () {
        var searchButtonHTML = "<snt-nav-item><snt-action-button action-reference=\"Action.toggleSearch\" icon-class-name=\"iconNavSearch\" link-title=\"" + (this.languageStrings["search"] || "Search") + "\"></snt-action-button> </snt-nav-item>";
        (!this.secondaryNavDesktop.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavMobile.insertAdjacentHTML("beforeend", searchButtonHTML));
    };
    HeaderComponent.prototype.shrink = function () {
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
    };
    HeaderComponent.prototype.toggleFocusTrap = function (active) {
        active ? this.focusTrap.activate() : this.focusTrap.deactivate();
    };
    HeaderComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { onSntBackdropTap: function () { return _this.setActive(false); }, onNavbarToggled: function () { return _this.toggleActive(); } }, h("div", { class: "header-container" }, h("snt-layout", { padding: "vertical-only", ref: function (elem) { return _this.layout = elem; } }, h("header", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, h("snt-skip-to-main", { "main-content-id": "#" + this.mainContentId }, this.languageStrings["skipToMainContent"] || "Skip to main content"), h("snt-pane", { animated: true, ref: function (elem) { return _this.secondaryNavPane = elem; } }, h("slot", { name: HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME })), h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson }, h("div", { slot: HeaderComponent.NAVBAR_BRAND_SLOT_NAME }, h("slot", { name: HeaderComponent.NAVBAR_BRAND_SLOT_NAME })), h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", "logo-url": this.languageStrings["logoUrl"], ref: function (elem) { return _this.navbarCollapse = elem; } }, h("div", { class: "main-panel", ref: function (elem) { return _this.mainPanel = elem; } }, h("snt-action-button", { "button-id": "get-a-quote-m-header", actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }), h("slot", { name: HeaderComponent.PRIMARY_NAV_SLOT_NAME }), h("slot", { name: HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME })), h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })), h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" }, h("snt-nav-item", null, h("snt-shopping-cart", null, " ")), h("snt-nav-item", { styleClasses: "d-none d-md-flex" }, h("snt-action-button", { "button-id": "get-a-quote-header", styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")), h("snt-nav-item", null, h("slot", { name: "login-slot" }))))), h("snt-search-bar", { languageJson: this.languageJson })))));
    };
    Object.defineProperty(HeaderComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return HeaderComponent;
}());
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
HeaderComponent.style = headerComponentCss;
var navbarCollapseComponentCss = "snt-navbar-collapse{width:290px}snt-navbar-collapse hr{border-top:1px solid #ffffff;margin:0}snt-navbar-collapse snt-nav{padding:0.825rem 0 0.5rem;border-bottom:1px solid #ffffff}@media (min-width: 1024px){snt-navbar-collapse snt-nav{padding:0;border-bottom:none}}snt-navbar-collapse snt-nav:last-of-type{border-bottom:none}snt-navbar-collapse snt-nav-item{width:100%}@media (min-width: 1024px){snt-navbar-collapse snt-nav-item{width:auto}}snt-navbar-collapse .header{padding:20px 30px 20px 30px}@media (min-width: 1024px){snt-navbar-collapse .header{padding:initial}}snt-navbar-collapse .header snt-icon{font-size:1rem;margin-right:24px}snt-navbar-collapse .header snt-image{width:100%;max-width:85px}snt-navbar-collapse .body{position:relative;padding:0.75rem 2rem 2rem}@media (min-width: 1024px){snt-navbar-collapse .body{padding:0}}snt-navbar-collapse .body snt-button.cta button{width:100%}snt-navbar-collapse .spacer{display:none}@media (min-width: 1024px){snt-navbar-collapse .spacer{display:-ms-flexbox;display:flex;-ms-flex:0 1 4.375rem;flex:0 1 4.375rem;min-width:1rem}}snt-navbar-collapse[shown]{z-index:10000;position:fixed;left:0;top:0;bottom:0;background-color:#323232}@media (min-width: 1024px){snt-navbar-collapse[shown]{position:initial}}";
var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var NavbarCollapseComponent = /** @class */ (function () {
    function NavbarCollapseComponent(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
        this.shown = false;
        this.viewport = null;
        this.logoUrl = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
    }
    NavbarCollapseComponent.prototype.toggleShown = function (shown) {
        return __awaiter$3(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
                return [2 /*return*/, Promise.resolve(this.shown)];
            });
        });
    };
    NavbarCollapseComponent.prototype.onShown = function (shown) {
        if (shown) {
            this.lastActiveElement = document.activeElement || document.body;
        }
        this.elementToFocusOn = shown ? this.element : this.lastActiveElement;
    };
    NavbarCollapseComponent.prototype.onViewport = function () {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    };
    NavbarCollapseComponent.prototype.componentWillRender = function () {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    };
    NavbarCollapseComponent.prototype.componentDidUpdate = function () {
        if (this.elementToFocusOn !== null) {
            this.elementToFocusOn.focus();
            this.elementToFocusOn = null;
        }
    };
    NavbarCollapseComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "collapse navbar-collapse " + (this.shown ? "show" : ""), tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" }, h("div", { class: "spacer" }), h("div", { class: "header d-flex d-lg-none align-items-center" }, h("snt-button", { class: "d-inline-flex", onClick: function () { return _this.navbarToggled.emit(); } }, h("snt-icon", { styleClasses: "iconNavClose" })), h("snt-image", { "data-src": this.logoUrl, width: "100", height: "100" })), h("div", { class: "body" }, h("slot", null))));
    };
    Object.defineProperty(NavbarCollapseComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavbarCollapseComponent, "watchers", {
        get: function () {
            return {
                "shown": ["onShown"],
                "viewport": ["onViewport"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return NavbarCollapseComponent;
}());
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
NavbarCollapseComponent.style = navbarCollapseComponentCss;
var navbarComponentCss = "snt-navbar{width:100%}snt-navbar.navbar{margin:0;padding:0;}@media (min-width: 768px){snt-navbar.navbar.navbar-expand-md .nav-link,snt-navbar.navbar.navbar-expand-lg .nav-link{padding-left:0;padding-right:0}}@media (max-width: 1023px){snt-navbar[active] snt-backdrop{display:block}}snt-navbar snt-backdrop{display:none}snt-navbar .actions-nav,snt-navbar .brand-and-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap}@media (min-width: 1024px){snt-navbar .actions-nav,snt-navbar .brand-and-toggle{-ms-flex-flow:column nowrap;flex-flow:column nowrap}}snt-navbar .brand-and-toggle>*:not(:last-child){margin-right:1.25rem}snt-navbar .actions-nav>*:not(:first-child){margin-left:1.25rem}@media (min-width: 1024px){snt-navbar .actions-nav>*:not(:first-child){margin-left:1.625rem}}snt-navbar .main-panel.hidden{visibility:hidden}";
var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    NavbarComponent.prototype.listenNavbarTogglerEvent = function (_event) {
        this.toggleActive().then(null);
    };
    NavbarComponent.prototype.toggleActive = function (active) {
        return __awaiter$4(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = (typeof (active) === "boolean") ? active : !this.active;
                return [2 /*return*/, this.active];
            });
        });
    };
    NavbarComponent.prototype.watchActive = function () {
        if (this.navbarCollapse) {
            this.navbarCollapse.toggleShown(this.active)
                .then(null);
        }
    };
    NavbarComponent.prototype.componentDidLoad = function () {
        this.navbarCollapse = document.querySelector("" + NavbarCollapseComponent.TAG_NAME);
        if (this.navbarCollapse) {
            this.navbarToggle.ariaControls = this.navbarCollapse.id;
        }
    };
    NavbarComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: function () { return _this.toggleActive(); } }, h("div", { class: "brand-and-toggle" }, h("snt-navbar-toggle", { ref: function (elem) { return _this.navbarToggle = elem; }, languageString: this.languageString }), h("slot", { name: "navbar-brand" })), h("slot", { name: "navbar-collapse" }), h("slot", null), h("snt-backdrop", null)));
    };
    Object.defineProperty(NavbarComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavbarComponent, "watchers", {
        get: function () {
            return {
                "active": ["watchActive"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return NavbarComponent;
}());
NavbarComponent.TAG_NAME = "snt-navbar";
NavbarComponent.style = navbarComponentCss;
var shoppingCartComponentCss = "snt-shopping-cart snt-link{display:-ms-flexbox;display:flex}snt-shopping-cart snt-link a{position:relative;font-size:1.5rem;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;margin:0 0.5rem 0.25rem}snt-shopping-cart .item-counter{position:absolute;top:-15%;right:-40%;height:14px;width:14px;border:1px solid #323232;background-color:#6ebac5;border-radius:50%;color:#323232;font-size:10px;line-height:14px;text-align:center;vertical-align:center}";
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(hostRef) {
        registerInstance(this, hostRef);
        this.cartValue = "0";
    }
    ShoppingCartComponent.prototype.componentDidLoad = function () {
        var cartValue = CookieUtils.readCookie(ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    };
    ShoppingCartComponent.prototype.render = function () {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (h("snt-link", { href: ShoppingCartComponent.SHOPPING_CART_URL }, h("snt-icon", { styleClasses: "iconNavCartEmpty" }), h("span", { class: "item-counter" }, this.cartValue)));
        }
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
ShoppingCartComponent.style = shoppingCartComponentCss;
export { HeaderComponent as snt_header, NavbarComponent as snt_navbar, NavbarCollapseComponent as snt_navbar_collapse, SearchBarComponent as snt_search_bar, SearchPanelComponent as snt_search_panel, ShoppingCartComponent as snt_shopping_cart };
