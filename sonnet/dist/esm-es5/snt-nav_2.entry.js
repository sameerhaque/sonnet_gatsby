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
import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
var NavItemTypeEnum;
(function (NavItemTypeEnum) {
    NavItemTypeEnum["LINK"] = "link";
    NavItemTypeEnum["SUBNAV"] = "subnav";
    NavItemTypeEnum["ACTION_LINK"] = "action-link";
    NavItemTypeEnum["CUSTOM"] = "custom";
})(NavItemTypeEnum || (NavItemTypeEnum = {}));
(function (NavItemTypeEnum) {
    function exists(value) {
        if (value) {
            return (NavItemTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error("Argument with value " + value + " must be a valid string.");
    }
    NavItemTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return NavItemTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error("Argument text with value " + text + " does not exist.");
    }
    NavItemTypeEnum.findByValue = findByValue;
})(NavItemTypeEnum || (NavItemTypeEnum = {}));
var NavUtils = /** @class */ (function () {
    function NavUtils() {
    }
    NavUtils.isCurrentPage = function (navItem) {
        if (navItem["href"]) {
            return (navItem["href"] == window.location.search);
        }
        return false;
    };
    NavUtils.identifyType = function (element) {
        if (element.querySelectorAll(NavItemComponent.TAG_NAME).length > 0) {
            return NavItemTypeEnum.SUBNAV;
        }
        else if (element.href) {
            if (element.href.includes("action:")) {
                return NavItemTypeEnum.ACTION_LINK;
            }
            else {
                return NavItemTypeEnum.LINK;
            }
        }
        else {
            return NavItemTypeEnum.CUSTOM;
        }
    };
    return NavUtils;
}());
var navItemComponentCss = "snt-nav-item{position:relative}snt-nav-item .dropdown-toggle{margin-right:0.5rem}snt-nav-item .dropdown-toggle:after{display:none}snt-nav-item .dropdown-menu{top:calc(100% + 1rem);left:-1.875rem;font-family:\"Averta-Regular\", sans-serif;background-color:#323232;border:none;border-radius:0;padding:0.225rem 0 0 0.875rem}@media (min-width: 1024px){snt-nav-item .dropdown-menu{padding:1.5rem 1.875rem}}snt-nav-item .dropdown-menu a{margin-left:15px}@media (min-width: 768px){snt-nav-item .dropdown-menu a{margin-left:initial}}snt-nav-item .dropdown-menu snt-nav-item{line-height:1.3125rem}snt-nav-item .expander{outline:none}snt-nav-item .expander snt-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg);outline:none}";
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
var NavItemComponent = /** @class */ (function () {
    function NavItemComponent(hostRef) {
        registerInstance(this, hostRef);
        this.navItemEvent = createEvent(this, "navItemEvent", 7);
        this.expanded = false;
        this.current = false;
        this.styleClasses = StringUtils.empty();
        this.isExternal = false;
    }
    NavItemComponent.prototype.expand = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.expanded = true;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.collapse = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.expanded = false;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.toggleExpanded = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.expanded = !this.expanded;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.setCurrent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.current = true;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.unsetCurrent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.current = false;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.toggleCurrent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.current = !this.current;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.watchCurrent = function () {
        if (this.parent) {
            this.parent.toggleCurrent().then(null);
            if (!(window.innerWidth >= 768)) {
                this.parent.expanded = true;
            }
        }
    };
    NavItemComponent.prototype.watchExpanded = function () {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            this.navItemEvent.emit();
        }
    };
    NavItemComponent.prototype.registerParent = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.parent = parent;
                return [2 /*return*/];
            });
        });
    };
    NavItemComponent.prototype.handleMouseOver = function (_e) {
        if (window.innerWidth >= 768) {
            clearTimeout(this.collapseTimeout);
            if (!this.expanded)
                this.expanded = true;
        }
    };
    NavItemComponent.prototype.handleMouseleave = function () {
        var _this = this;
        this.collapseTimeout = setTimeout(function () {
            _this.collapse();
        }, 250);
    };
    NavItemComponent.prototype.componentWillLoad = function () {
        this.type = NavUtils.identifyType(this.element);
    };
    NavItemComponent.prototype.componentDidLoad = function () {
        this.registerChildren();
    };
    NavItemComponent.prototype.isType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, type == this.type];
            });
        });
    };
    NavItemComponent.prototype.registerChildren = function () {
        var _this = this;
        if (this.type == NavItemTypeEnum.SUBNAV) {
            var children = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
            if (children) {
                children.forEach(function (child) {
                    child.registerParent(_this.element);
                });
            }
        }
    };
    NavItemComponent.prototype.render = function () {
        var subnavId = this.element.id + "-subnav";
        var expanderId = this.element.id + "-expander";
        var showClass = (this.expanded) ? "show" : "";
        var navLinkClass = "nav-link " + ((this.type == NavItemTypeEnum.SUBNAV) ? "dropdown-toggle" : "");
        var linkAriaLabel = "" + ((this.type == NavItemTypeEnum.SUBNAV) ? this.linkTitle + ", tab to the next button to expand the sub-menu" : this.linkTitle);
        //const ariaCurrent = `${(this.current) ? "page" : false}`;
        var icon = [
            h("snt-icon", { styleClasses: this.iconClassName })
        ];
        var link = [
            h("snt-link", { href: this.href, target: this.target, class: navLinkClass, current: this.current, "aria-label": linkAriaLabel, "aria-current": true, "hidden-title": this.linkTitle, "is-external": this.isExternal }, this.iconClassName ? icon : "", this.linkTitle)
        ];
        var expander = (h("button", { type: "button", class: "expander", onClick: this.toggleExpanded.bind(this), "aria-expanded": this.expanded.toString(), "aria-haspopup": "true", "aria-label": "" + this.linkTitle, "aria-owns": subnavId }, h("snt-icon", { styleClasses: (this.expanded) ? "icon-icon_nav_minus_inv" : "icon-icon_nav_plus" })));
        var subnav = [
            h("div", { class: "position-relative" }, [link, expander]),
            h("div", { "aria-label": "1 of 1", role: "menu", class: "dropdown-menu " + showClass, id: subnavId, "aria-labelledby": expanderId }, h("slot", null))
        ];
        var actionReference = (this.href) ? this.href.replace("action:", "") : "";
        var actionLink = h("snt-action-link", { "action-reference": actionReference, linkTitle: this.linkTitle, iconClassName: this.iconClassName });
        var custom = [
            h("slot", null)
        ];
        var template = {
            "link": link,
            "action-link": actionLink,
            "subnav": subnav,
            "custom": custom
        };
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), role: "listitem" }, template[this.type]));
    };
    Object.defineProperty(NavItemComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavItemComponent, "watchers", {
        get: function () {
            return {
                "current": ["watchCurrent"],
                "expanded": ["watchExpanded"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return NavItemComponent;
}());
NavItemComponent.TAG_NAME = "snt-nav-item";
NavItemComponent.style = navItemComponentCss;
var navComponentCss = "@charset \"UTF-8\";snt-nav{-ms-flex-align:center;align-items:center}snt-nav[expander=all] snt-nav-item.dropdown .show .expander:after,snt-nav[expander=keyboard] snt-nav-item.dropdown .show .expander:after{content:\"⏶\"}snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{background:transparent;border:0;margin:0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;top:50%;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg);right:0;color:white;display:-ms-flexbox;display:flex;font-size:12px}@media (min-width: 1024px){snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{left:calc(100% + 0.5rem)}}snt-nav[expander=all] .expander:focus,snt-nav[expander=keyboard] .expander:focus{outline:2px solid #b2b2b2}snt-nav[expander=all] .expander{opacity:1}snt-nav[expander=keyboard] snt-nav-item:focus-within:not(:active):not(:hover) .expander{opacity:1}@media (min-width: 1024px){snt-nav[expander=keyboard] snt-nav-item .expander{opacity:0}}snt-nav[separator]>snt-nav-item:last-child{border-right:none}snt-nav.main-nav snt-nav-item{margin:0 0 0.5rem 0;}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item{margin:1.075rem 2.175rem 0 0}}snt-nav.main-nav snt-nav-item a{font-family:Averta-ExtraBold;font-size:1em}snt-nav.main-nav snt-nav-item snt-nav-item{margin:0 0 0.125rem 0}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item snt-nav-item{padding:0;margin:0}}snt-nav.main-nav snt-nav-item snt-nav-item a{font-family:Averta-Regular}snt-nav.secondary-nav{margin-bottom:0.5rem;margin-top:2px}snt-nav.secondary-nav a,snt-nav.secondary-nav button{font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){snt-nav.actions-nav snt-nav-item{margin:0 0 0 1.5rem}}snt-nav.actions-nav snt-nav-item a{font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-nav-item{display:block;line-height:1.3125rem}snt-nav.theme-header-nav snt-nav-item .nav-item,snt-nav.theme-header-nav snt-nav-item .nav-link{padding:0;margin:0}snt-nav.theme-header-nav snt-link a{display:inline-block;margin:0;position:relative;text-decoration:none;border-bottom:none}snt-nav.theme-header-nav snt-button:hover snt-icon,snt-nav.theme-header-nav snt-button:hover button{color:#6ebac5}snt-nav.theme-header-nav snt-button snt-icon{margin-right:8px}snt-nav.theme-header-nav snt-link a,snt-nav.theme-header-nav snt-link button,snt-nav.theme-header-nav snt-button:not(.cta) a,snt-nav.theme-header-nav snt-button:not(.cta) button{margin:2px;outline:2px solid transparent;padding:0;white-space:nowrap;}snt-nav.theme-header-nav snt-link a:active,snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link a:hover,snt-nav.theme-header-nav snt-link button:active,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-link button:hover,snt-nav.theme-header-nav snt-button:not(.cta) a:active,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:hover,snt-nav.theme-header-nav snt-button:not(.cta) button:active,snt-nav.theme-header-nav snt-button:not(.cta) button:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:hover{color:#6ebac5;font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-link a:active:before,snt-nav.theme-header-nav snt-link a:focus:before,snt-nav.theme-header-nav snt-link a:hover:before,snt-nav.theme-header-nav snt-link button:active:before,snt-nav.theme-header-nav snt-link button:focus:before,snt-nav.theme-header-nav snt-link button:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) a:active:before,snt-nav.theme-header-nav snt-button:not(.cta) a:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) a:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) button:active:before,snt-nav.theme-header-nav snt-button:not(.cta) button:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) button:hover:before{visibility:hidden}snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:focus{outline:2px solid #b2b2b2;padding:0}snt-nav.theme-header-nav snt-link a:before,snt-nav.theme-header-nav snt-link button:before,snt-nav.theme-header-nav snt-button:not(.cta) a:before,snt-nav.theme-header-nav snt-button:not(.cta) button:before{background-color:#6ebac5;height:2px}snt-nav.theme-header-nav snt-link a:after,snt-nav.theme-header-nav snt-link button:after,snt-nav.theme-header-nav snt-button:not(.cta) a:after,snt-nav.theme-header-nav snt-button:not(.cta) button:after{display:block;font-family:Averta-ExtraBold;content:attr(hidden-title);height:0;overflow:hidden;visibility:hidden;font-size:1.015em}snt-nav.theme-header-nav snt-link[current] a:before,snt-nav.theme-header-nav snt-link[current] button:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] a:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] button:before{width:100%;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}";
var NavComponent = /** @class */ (function () {
    function NavComponent(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    NavComponent.prototype.handleNavItemEvent = function (event) {
        var expanded = event.target.expanded;
        if (expanded) {
            this.collapseSiblingSubnavs(event.target);
        }
    };
    NavComponent.prototype.componentDidLoad = function () {
        this.setActiveNavItem();
    };
    NavComponent.prototype.setActiveNavItem = function () {
        var navItems = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
        if (navItems) {
            navItems.forEach(function (navItem) {
                if (navItem.isType(NavItemTypeEnum.ACTION_LINK) && NavUtils.isCurrentPage(navItem)) {
                    navItem.toggleCurrent().then(null); //test
                }
            });
        }
    };
    NavComponent.prototype.collapseSiblingSubnavs = function (currentSubnav) {
        var expandedSubnavs = this.element.querySelectorAll(NavItemComponent.TAG_NAME + "[expanded]");
        expandedSubnavs.forEach(function (expandedSubnav) {
            if (expandedSubnav != currentSubnav) {
                expandedSubnav.collapse().then(null);
            }
        });
    };
    NavComponent.prototype.render = function () {
        return (h(Host, { class: WebUtils.generateClasses(["navbar-nav"], this.styleClasses), role: "list" }, h("slot", null)));
    };
    Object.defineProperty(NavComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return NavComponent;
}());
NavComponent.TAG_NAME = "snt-nav";
NavComponent.style = navComponentCss;
export { NavComponent as snt_nav, NavItemComponent as snt_nav_item };
