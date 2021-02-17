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
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    NavItemTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return NavItemTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    NavItemTypeEnum.findByValue = findByValue;
})(NavItemTypeEnum || (NavItemTypeEnum = {}));

class NavUtils {
    static isCurrentPage(navItem) {
        if (navItem["href"]) {
            return (navItem["href"] == window.location.search);
        }
        return false;
    }
    static identifyType(element) {
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
    }
}

const navItemComponentCss = "snt-nav-item{position:relative}snt-nav-item .dropdown-toggle{margin-right:0.5rem}snt-nav-item .dropdown-toggle:after{display:none}snt-nav-item .dropdown-menu{top:calc(100% + 1rem);left:-1.875rem;font-family:\"Averta-Regular\", sans-serif;background-color:#323232;border:none;border-radius:0;padding:0.225rem 0 0 0.875rem}@media (min-width: 1024px){snt-nav-item .dropdown-menu{padding:1.5rem 1.875rem}}snt-nav-item .dropdown-menu a{margin-left:15px}@media (min-width: 768px){snt-nav-item .dropdown-menu a{margin-left:initial}}snt-nav-item .dropdown-menu snt-nav-item{line-height:1.3125rem}snt-nav-item .expander{outline:none}snt-nav-item .expander snt-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg);outline:none}";

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
const NavItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navItemEvent = createEvent(this, "navItemEvent", 7);
        this.expanded = false;
        this.current = false;
        this.styleClasses = StringUtils.empty();
        this.isExternal = false;
    }
    expand() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = true;
        });
    }
    collapse() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = false;
        });
    }
    toggleExpanded() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = !this.expanded;
        });
    }
    setCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = true;
        });
    }
    unsetCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = false;
        });
    }
    toggleCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = !this.current;
        });
    }
    watchCurrent() {
        if (this.parent) {
            this.parent.toggleCurrent().then(null);
            if (!(window.innerWidth >= 768)) {
                this.parent.expanded = true;
            }
        }
    }
    watchExpanded() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            this.navItemEvent.emit();
        }
    }
    registerParent(parent) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parent = parent;
        });
    }
    handleMouseOver(_e) {
        if (window.innerWidth >= 768) {
            clearTimeout(this.collapseTimeout);
            if (!this.expanded)
                this.expanded = true;
        }
    }
    handleMouseleave() {
        this.collapseTimeout = setTimeout(() => {
            this.collapse();
        }, 250);
    }
    componentWillLoad() {
        this.type = NavUtils.identifyType(this.element);
    }
    componentDidLoad() {
        this.registerChildren();
    }
    isType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return type == this.type;
        });
    }
    registerChildren() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            const children = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
            if (children) {
                children.forEach((child) => {
                    child.registerParent(this.element);
                });
            }
        }
    }
    render() {
        const subnavId = `${this.element.id}-subnav`;
        const expanderId = `${this.element.id}-expander`;
        const showClass = (this.expanded) ? "show" : "";
        const navLinkClass = `nav-link ${(this.type == NavItemTypeEnum.SUBNAV) ? "dropdown-toggle" : ""}`;
        const linkAriaLabel = `${(this.type == NavItemTypeEnum.SUBNAV) ? `${this.linkTitle}, tab to the next button to expand the sub-menu` : this.linkTitle}`;
        //const ariaCurrent = `${(this.current) ? "page" : false}`;
        const icon = [
            h("snt-icon", { styleClasses: this.iconClassName })
        ];
        const link = [
            h("snt-link", { href: this.href, target: this.target, class: navLinkClass, current: this.current, "aria-label": linkAriaLabel, "aria-current": true, "hidden-title": this.linkTitle, "is-external": this.isExternal }, this.iconClassName ? icon : "", this.linkTitle)
        ];
        const expander = (h("button", { type: "button", class: "expander", onClick: this.toggleExpanded.bind(this), "aria-expanded": this.expanded.toString(), "aria-haspopup": "true", "aria-label": `${this.linkTitle}`, "aria-owns": subnavId }, h("snt-icon", { styleClasses: (this.expanded) ? "icon-icon_nav_minus_inv" : "icon-icon_nav_plus" })));
        const subnav = [
            h("div", { class: "position-relative" }, [link, expander]),
            h("div", { "aria-label": "1 of 1", role: "menu", class: `dropdown-menu ${showClass}`, id: subnavId, "aria-labelledby": expanderId }, h("slot", null))
        ];
        const actionReference = (this.href) ? this.href.replace("action:", "") : "";
        const actionLink = h("snt-action-link", { "action-reference": actionReference, linkTitle: this.linkTitle, iconClassName: this.iconClassName });
        const custom = [
            h("slot", null)
        ];
        const template = {
            "link": link,
            "action-link": actionLink,
            "subnav": subnav,
            "custom": custom
        };
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), role: "listitem" }, template[this.type]));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "current": ["watchCurrent"],
        "expanded": ["watchExpanded"]
    }; }
};
NavItemComponent.TAG_NAME = "snt-nav-item";
NavItemComponent.style = navItemComponentCss;

const navComponentCss = "@charset \"UTF-8\";snt-nav{-ms-flex-align:center;align-items:center}snt-nav[expander=all] snt-nav-item.dropdown .show .expander:after,snt-nav[expander=keyboard] snt-nav-item.dropdown .show .expander:after{content:\"⏶\"}snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{background:transparent;border:0;margin:0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;top:50%;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg);right:0;color:white;display:-ms-flexbox;display:flex;font-size:12px}@media (min-width: 1024px){snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{left:calc(100% + 0.5rem)}}snt-nav[expander=all] .expander:focus,snt-nav[expander=keyboard] .expander:focus{outline:2px solid #b2b2b2}snt-nav[expander=all] .expander{opacity:1}snt-nav[expander=keyboard] snt-nav-item:focus-within:not(:active):not(:hover) .expander{opacity:1}@media (min-width: 1024px){snt-nav[expander=keyboard] snt-nav-item .expander{opacity:0}}snt-nav[separator]>snt-nav-item:last-child{border-right:none}snt-nav.main-nav snt-nav-item{margin:0 0 0.5rem 0;}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item{margin:1.075rem 2.175rem 0 0}}snt-nav.main-nav snt-nav-item a{font-family:Averta-ExtraBold;font-size:1em}snt-nav.main-nav snt-nav-item snt-nav-item{margin:0 0 0.125rem 0}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item snt-nav-item{padding:0;margin:0}}snt-nav.main-nav snt-nav-item snt-nav-item a{font-family:Averta-Regular}snt-nav.secondary-nav{margin-bottom:0.5rem;margin-top:2px}snt-nav.secondary-nav a,snt-nav.secondary-nav button{font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){snt-nav.actions-nav snt-nav-item{margin:0 0 0 1.5rem}}snt-nav.actions-nav snt-nav-item a{font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-nav-item{display:block;line-height:1.3125rem}snt-nav.theme-header-nav snt-nav-item .nav-item,snt-nav.theme-header-nav snt-nav-item .nav-link{padding:0;margin:0}snt-nav.theme-header-nav snt-link a{display:inline-block;margin:0;position:relative;text-decoration:none;border-bottom:none}snt-nav.theme-header-nav snt-button:hover snt-icon,snt-nav.theme-header-nav snt-button:hover button{color:#6ebac5}snt-nav.theme-header-nav snt-button snt-icon{margin-right:8px}snt-nav.theme-header-nav snt-link a,snt-nav.theme-header-nav snt-link button,snt-nav.theme-header-nav snt-button:not(.cta) a,snt-nav.theme-header-nav snt-button:not(.cta) button{margin:2px;outline:2px solid transparent;padding:0;white-space:nowrap;}snt-nav.theme-header-nav snt-link a:active,snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link a:hover,snt-nav.theme-header-nav snt-link button:active,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-link button:hover,snt-nav.theme-header-nav snt-button:not(.cta) a:active,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:hover,snt-nav.theme-header-nav snt-button:not(.cta) button:active,snt-nav.theme-header-nav snt-button:not(.cta) button:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:hover{color:#6ebac5;font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-link a:active:before,snt-nav.theme-header-nav snt-link a:focus:before,snt-nav.theme-header-nav snt-link a:hover:before,snt-nav.theme-header-nav snt-link button:active:before,snt-nav.theme-header-nav snt-link button:focus:before,snt-nav.theme-header-nav snt-link button:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) a:active:before,snt-nav.theme-header-nav snt-button:not(.cta) a:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) a:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) button:active:before,snt-nav.theme-header-nav snt-button:not(.cta) button:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) button:hover:before{visibility:hidden}snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:focus{outline:2px solid #b2b2b2;padding:0}snt-nav.theme-header-nav snt-link a:before,snt-nav.theme-header-nav snt-link button:before,snt-nav.theme-header-nav snt-button:not(.cta) a:before,snt-nav.theme-header-nav snt-button:not(.cta) button:before{background-color:#6ebac5;height:2px}snt-nav.theme-header-nav snt-link a:after,snt-nav.theme-header-nav snt-link button:after,snt-nav.theme-header-nav snt-button:not(.cta) a:after,snt-nav.theme-header-nav snt-button:not(.cta) button:after{display:block;font-family:Averta-ExtraBold;content:attr(hidden-title);height:0;overflow:hidden;visibility:hidden;font-size:1.015em}snt-nav.theme-header-nav snt-link[current] a:before,snt-nav.theme-header-nav snt-link[current] button:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] a:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] button:before{width:100%;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}";

const NavComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    handleNavItemEvent(event) {
        const expanded = event.target.expanded;
        if (expanded) {
            this.collapseSiblingSubnavs(event.target);
        }
    }
    componentDidLoad() {
        this.setActiveNavItem();
    }
    setActiveNavItem() {
        const navItems = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
        if (navItems) {
            navItems.forEach((navItem) => {
                if (navItem.isType(NavItemTypeEnum.ACTION_LINK) && NavUtils.isCurrentPage(navItem)) {
                    navItem.toggleCurrent().then(null); //test
                }
            });
        }
    }
    collapseSiblingSubnavs(currentSubnav) {
        const expandedSubnavs = this.element.querySelectorAll(`${NavItemComponent.TAG_NAME}[expanded]`);
        expandedSubnavs.forEach((expandedSubnav) => {
            if (expandedSubnav != currentSubnav) {
                expandedSubnav.collapse().then(null);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar-nav"], this.styleClasses), role: "list" }, h("slot", null)));
    }
    get element() { return getElement(this); }
};
NavComponent.TAG_NAME = "snt-nav";
NavComponent.style = navComponentCss;

export { NavComponent as snt_nav, NavItemComponent as snt_nav_item };
