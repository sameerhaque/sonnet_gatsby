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
import { r as registerInstance, e as createEvent, h, g as getElement, H as Host } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LanguageUtils } from './LanguageUtils-994fe2d5.js';
var navbarToggleComponentCss = "snt-navbar-toggle .navbar-toggler{border:none;margin:0;padding:0;display:-ms-flexbox;display:flex}@media (min-width: 768px){snt-navbar-toggle .navbar-toggler{font-size:1.75rem;margin-top:2px}}snt-navbar-toggle .navbar-toggler snt-icon{color:#ffffff}";
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
var NavbarToggleComponent = /** @class */ (function () {
    function NavbarToggleComponent(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
    }
    NavbarToggleComponent.prototype.toggleCollapsed = function (collapsed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
                return [2 /*return*/, Promise.resolve(this.collapsed)];
            });
        });
    };
    NavbarToggleComponent.prototype.watchCollapsed = function () {
        this.navbarToggled.emit();
    };
    NavbarToggleComponent.prototype.componentWillLoad = function () {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    };
    NavbarToggleComponent.prototype.render = function () {
        var _this = this;
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: function () { return _this.toggleCollapsed(); } }, h("snt-icon", { styleClasses: "iconNavBurger" })));
    };
    Object.defineProperty(NavbarToggleComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavbarToggleComponent, "watchers", {
        get: function () {
            return {
                "collapsed": ["watchCollapsed"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return NavbarToggleComponent;
}());
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
NavbarToggleComponent.style = navbarToggleComponentCss;
var AnimationUtils = /** @class */ (function () {
    function AnimationUtils() {
    }
    AnimationUtils.collapseElement = function (element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        // temporarily disable all css transitions
        var elementTransition = element.style.transition;
        element.style.transition = '';
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        requestAnimationFrame(function () {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(function () {
                element.style.height = 0 + 'px';
                // make element hidden to prevent elements within it being focusable
                element.style.visibility = 'hidden';
            });
        });
    };
    AnimationUtils.expandElement = function (element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
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
    };
    return AnimationUtils;
}());
var paneComponentCss = "snt-pane{width:100%;display:block}snt-pane[animated]{height:auto;overflow:hidden;-webkit-transition:height 0.3s ease;transition:height 0.3s ease}";
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
var PaneComponent = /** @class */ (function () {
    function PaneComponent(hostRef) {
        registerInstance(this, hostRef);
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    PaneComponent.prototype.toggleCollapsed = function (collapsed) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
                return [2 /*return*/, this.collapsed];
            });
        });
    };
    PaneComponent.prototype.onCollapsed = function (collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    };
    PaneComponent.prototype.listenButtonEvent = function (_event) {
        this.collapsed = !this.collapsed;
    };
    PaneComponent.prototype.render = function () {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" }, h("slot", null)));
    };
    Object.defineProperty(PaneComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaneComponent, "watchers", {
        get: function () {
            return {
                "collapsed": ["onCollapsed"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return PaneComponent;
}());
PaneComponent.style = paneComponentCss;
var skiptomainComponentCss = "snt-skip-to-main snt-link{position:absolute;top:0;left:0;z-index:100}";
var SkipToMainComponent = /** @class */ (function () {
    function SkipToMainComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    SkipToMainComponent.prototype.componentWillLoad = function () {
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
    };
    SkipToMainComponent.prototype.render = function () {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent.srClasses, href: this.mainContentId }, h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    };
    return SkipToMainComponent;
}());
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
SkipToMainComponent.style = skiptomainComponentCss;
export { NavbarToggleComponent as snt_navbar_toggle, PaneComponent as snt_pane, SkipToMainComponent as snt_skip_to_main };
