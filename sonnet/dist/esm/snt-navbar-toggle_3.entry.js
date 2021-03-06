import { r as registerInstance, e as createEvent, h, g as getElement, H as Host } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LanguageUtils } from './LanguageUtils-994fe2d5.js';

const navbarToggleComponentCss = "snt-navbar-toggle .navbar-toggler{border:none;margin:0;padding:0;display:-ms-flexbox;display:flex}@media (min-width: 768px){snt-navbar-toggle .navbar-toggler{font-size:1.75rem;margin-top:2px}}snt-navbar-toggle .navbar-toggler snt-icon{color:#ffffff}";

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
const NavbarToggleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
    }
    toggleCollapsed(collapsed) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
            return Promise.resolve(this.collapsed);
        });
    }
    watchCollapsed() {
        this.navbarToggled.emit();
    }
    componentWillLoad() {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    }
    render() {
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: () => this.toggleCollapsed() }, h("snt-icon", { styleClasses: "iconNavBurger" })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["watchCollapsed"]
    }; }
};
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
NavbarToggleComponent.style = navbarToggleComponentCss;

class AnimationUtils {
    static collapseElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // temporarily disable all css transitions
        const elementTransition = element.style.transition;
        element.style.transition = '';
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        requestAnimationFrame(() => {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(() => {
                element.style.height = 0 + 'px';
                // make element hidden to prevent elements within it being focusable
                element.style.visibility = 'hidden';
            });
        });
    }
    static expandElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // make element visible to allow elements within it becoming focusable again
        element.style.visibility = "visible";
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function fn(_evt) {
            element.style.height = "auto";
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', fn);
            // remove "height" from the element's inline styles, so it can return to its initial value
            //element.style.height = null;
        });
    }
}

const paneComponentCss = "snt-pane{width:100%;display:block}snt-pane[animated]{height:auto;overflow:hidden;-webkit-transition:height 0.3s ease;transition:height 0.3s ease}";

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
const PaneComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    toggleCollapsed(collapsed) {
        return __awaiter$1(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
            return this.collapsed;
        });
    }
    onCollapsed(collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    }
    listenButtonEvent(_event) {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["onCollapsed"]
    }; }
};
PaneComponent.style = paneComponentCss;

const skiptomainComponentCss = "snt-skip-to-main snt-link{position:absolute;top:0;left:0;z-index:100}";

const SkipToMainComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.mainContentId) {
            this.mainContentId = '#maincontent';
        }
        if (!this.mainContentId.startsWith('#')) {
            this.mainContentId = '#' + this.mainContentId;
        }
        if (!this.ariaLabel) {
            if (this.linkText) {
                this.ariaLabel = this.linkText;
            }
        }
    }
    render() {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent.srClasses, href: this.mainContentId }, h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    }
};
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
SkipToMainComponent.style = skiptomainComponentCss;

export { NavbarToggleComponent as snt_navbar_toggle, PaneComponent as snt_pane, SkipToMainComponent as snt_skip_to_main };
