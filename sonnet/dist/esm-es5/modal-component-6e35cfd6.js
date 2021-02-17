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
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { f as focusTrap_1 } from './index-a882e395.js';
var PaddingDirectionEnum;
(function (PaddingDirectionEnum) {
    PaddingDirectionEnum["PADDING_TOP"] = "padding-top";
    PaddingDirectionEnum["PADDING_BOTTOM"] = "padding-bottom";
    PaddingDirectionEnum["PADDING_RIGHT"] = "padding-right";
    PaddingDirectionEnum["PADDING_LEFT"] = "padding-left";
})(PaddingDirectionEnum || (PaddingDirectionEnum = {}));
var ScrollDirectionEnum;
(function (ScrollDirectionEnum) {
    ScrollDirectionEnum["HORIZONTAL"] = "x";
    ScrollDirectionEnum["VERTICAL"] = "y";
})(ScrollDirectionEnum || (ScrollDirectionEnum = {}));
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    DomUtils.getScrollbarSize = function (scrollDirection) {
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL) {
            return window.innerHeight - document.documentElement.clientHeight;
        }
        else if (scrollDirection == ScrollDirectionEnum.VERTICAL) {
            return window.innerWidth - document.documentElement.clientWidth;
        }
        else {
            throw new Error(scrollDirection + " is not a valid scroll direction.");
        }
    };
    DomUtils.setScrollbarPaddingReplacement = function (scrollbarPaddingReplacement, scrollDirection) {
        if (scrollbarPaddingReplacement === void 0) { scrollbarPaddingReplacement = true; }
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL ||
            scrollDirection == ScrollDirectionEnum.VERTICAL) {
            var paddingMap = new Map([
                [ScrollDirectionEnum.VERTICAL, PaddingDirectionEnum.PADDING_RIGHT],
                [ScrollDirectionEnum.HORIZONTAL, PaddingDirectionEnum.PADDING_BOTTOM]
            ]), paddingDirection = paddingMap.get(scrollDirection);
            if (scrollbarPaddingReplacement) {
                document.body.style[paddingDirection] = DomUtils.getScrollbarSize(scrollDirection) + 'px';
            }
            else {
                document.body.style[paddingDirection] = '0px';
            }
        }
        else {
            throw new Error(scrollDirection + " is not a valid scroll direction.");
        }
    };
    DomUtils.hasValidStringAttribute = function (element, attributeName) {
        return ((element.hasAttribute(attributeName) && (StringUtils.notEmpty(element.getAttribute(attributeName)))));
    };
    DomUtils.attachHandler = function (element, eventName, fn) {
        if (element.addEventListener) {
            element.addEventListener(eventName, fn, false);
        }
    };
    ;
    return DomUtils;
}());
var ModalOptions = /** @class */ (function () {
    function ModalOptions(keyboardClose, backdrop, backdropDismiss, 
    // TODO: Add support for the items below back into Modal Component
    keyboardDismiss, clickDismiss) {
        if (keyboardClose === void 0) { keyboardClose = true; }
        if (backdrop === void 0) { backdrop = true; }
        if (backdropDismiss === void 0) { backdropDismiss = true; }
        if (keyboardDismiss === void 0) { keyboardDismiss = true; }
        if (clickDismiss === void 0) { clickDismiss = true; }
        this.keyboardClose = keyboardClose;
        this.backdrop = backdrop;
        this.backdropDismiss = backdropDismiss;
        this.keyboardDismiss = keyboardDismiss;
        this.clickDismiss = clickDismiss;
    }
    return ModalOptions;
}());
var ModalLanguageVariables = /** @class */ (function () {
    function ModalLanguageVariables(close) {
        if (close === void 0) { close = null; }
        this.close = close;
    }
    return ModalLanguageVariables;
}());
var modalComponentCss = "snt-modal{z-index:100;position:fixed;top:0;left:0;height:100%;width:100%;display:none}snt-modal.ready-to-show{display:block}snt-modal.ready-to-show .modal{display:block}snt-modal snt-layout[viewport=medium] .modal-content{padding:40px;height:auto}snt-modal snt-layout[viewport=medium] .modal-dialog{margin:auto;width:334px;max-width:none}snt-modal snt-layout[viewport=medium] .form-modal .modal-dialog,snt-modal snt-layout[viewport=medium] .contact-us-login .modal-dialog{width:514px}snt-modal snt-layout[viewport=large] .modal-content{padding:60px;height:auto}snt-modal snt-layout[viewport=large] .modal-dialog{margin:auto;width:426px;max-width:none}snt-modal snt-layout[viewport=large] .form-modal .modal-dialog{width:578px}snt-modal snt-layout[viewport=large] .contact-us-login .modal-dialog{width:730px}snt-modal snt-layout[viewport=extra-large] .modal-content{padding:60px;height:auto}snt-modal snt-layout[viewport=extra-large] .modal-dialog{margin:auto;width:570px;max-width:none}snt-modal snt-layout[viewport=extra-large] .form-modal .modal-dialog{width:770px}snt-modal snt-layout[viewport=extra-large] .contact-us-login .modal-dialog{width:970px}snt-modal .modal-dialog{width:100vw;max-width:100%;margin:0}snt-modal .modal-content{height:100vh;overflow:auto;padding:40px;border-radius:0px;-webkit-box-sizing:border-box;box-sizing:border-box}snt-modal .modal-header{-ms-flex-pack:center;justify-content:center}snt-modal .close{opacity:1;outline:none;position:absolute;display:-ms-flexbox;display:flex;top:17px;right:17px}snt-modal .close:not(:disabled):not(.disabled):hover{opacity:1}snt-modal .close:not(:disabled):not(.disabled):hover .icon{background-image:url(\"/asset/fonts/icons/icon_global_closeStandAlone_hover.svg\")}snt-modal .close .label{font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif;font-size:12px;color:#9E0A9A;padding-right:4px}snt-modal .close .icon{display:block;background-image:url(\"/asset/fonts/icons/icon_global_closeStandalone_lk.svg\");background-repeat:no-repeat;background-size:cover;height:15px;width:15px;content:\" \"}snt-modal .close:focus{outline:none}snt-modal .close:focus .icon{outline:1px dotted #323232;outline-offset:2px}snt-modal .modal-body{padding:0px}snt-modal .modal-body button-link-group,snt-modal .modal-body snt-multi-column-mixed{padding-top:30px}snt-modal .modal-footer{border-top:none}snt-modal .modal-title{color:#323232;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;font-size:18px;line-height:32px;margin-bottom:0;font-weight:normal;text-align:center}snt-modal .modal-backdrop{display:block}snt-modal .no-content{display:none}snt-modal .no-header-content{padding:0px}";
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
var ModalComponent = /** @class */ (function () {
    function ModalComponent(hostRef) {
        registerInstance(this, hostRef);
        this.modalEvent = createEvent(this, "modalEvent", 7);
        this.shown = false;
        this.modalTitle = StringUtils.empty();
        this.options = ModalComponent.DEFAULT_OPTIONS;
        this.styleClasses = StringUtils.empty();
        this.languageString = StringUtils.empty();
    }
    ModalComponent.prototype.toggleModal = function (shown) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!shown) return [3 /*break*/, 4];
                        this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOW });
                        this.element.classList.add(ModalComponent.CLASS_READY_TO_SHOW);
                        return [4 /*yield*/, WebUtils.sleep(WebUtils.getTransitionDuration(this.element))];
                    case 1:
                        _a.sent();
                        if (!this.options.backdrop) return [3 /*break*/, 3];
                        this.backdropElement.classList.add(ModalComponent.CLASS_SHOW);
                        return [4 /*yield*/, WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.modalDialogElement.classList.add(ModalComponent.CLASS_SHOW);
                        this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOWN });
                        return [3 /*break*/, 8];
                    case 4:
                        this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDE });
                        this.modalDialogElement.classList.remove(ModalComponent.CLASS_SHOW);
                        return [4 /*yield*/, WebUtils.sleep(WebUtils.getTransitionDuration(this.element))];
                    case 5:
                        _a.sent();
                        if (!this.backdropElement) return [3 /*break*/, 7];
                        this.backdropElement.classList.remove(ModalComponent.CLASS_SHOW);
                        return [4 /*yield*/, WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement))];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        this.element.classList.remove(ModalComponent.CLASS_READY_TO_SHOW);
                        this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDDEN });
                        _a.label = 8;
                    case 8:
                        this.toggleFocusTrap();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalComponent.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shown = true;
                return [2 /*return*/];
            });
        });
    };
    ModalComponent.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shown = false;
                return [2 /*return*/];
            });
        });
    };
    ModalComponent.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shown = !this.shown;
                return [2 /*return*/];
            });
        });
    };
    ModalComponent.prototype.isShown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.shown];
            });
        });
    };
    ModalComponent.prototype.modalEventHandler = function (modalEvent) {
        switch (modalEvent.detail.eventType) {
            case ModalComponent.EVENT_MODAL_SHOW:
                this.lastActiveElement = document.activeElement || document.body;
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(true, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.add(ModalComponent.CLASS_MODAL_OPEN);
                }
                break;
            case ModalComponent.EVENT_MODAL_SHOWN:
                break;
            case ModalComponent.EVENT_MODAL_HIDE:
                break;
            case ModalComponent.EVENT_MODAL_HIDDEN:
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(false, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.remove(ModalComponent.CLASS_MODAL_OPEN);
                }
                this.lastActiveElement.focus();
                break;
            default:
                throw new Error("Unsupported modal event type.");
        }
    };
    ModalComponent.prototype.componentWillLoad = function () {
        var _this = this;
        this.languageVariables = new ModalLanguageVariables();
        try {
            var parsedJson_1 = JSON.parse(this.languageString);
            Object.keys(this.languageVariables).forEach(function (key) {
                if (parsedJson_1.hasOwnProperty(key)) {
                    _this.languageVariables[key] = parsedJson_1[key];
                }
                else {
                    console.error("Required language variable '" + key + "' not passed through 'language-string' property.");
                }
            });
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    };
    ModalComponent.prototype.componentDidLoad = function () {
        var footerContentElement = this.element.querySelector('.modal-footer');
        if (StringUtils.isEmpty(footerContentElement.innerHTML.trim())) {
            footerContentElement.classList.add('no-content');
        }
        var headerContentElement = this.element.querySelector('.modal-header');
        if (StringUtils.isEmpty(this.modalTitle)) {
            headerContentElement.classList.add('no-header-content');
        }
        this.dialogTitle = this.modalContentElement.querySelector("h1, h2, h3, h4, h5, h6");
        this.dialogDescription = this.modalContentElement.querySelector("p");
        this.dialogTitle && (this.dialogTitle.id = this.dialogTitle.id || "dialog-title");
        this.dialogDescription && (this.dialogDescription.id = this.dialogDescription.id || "dialog-description");
        this.focusTrap = focusTrap_1(this.element, { initialFocus: this.modalDialogElement });
    };
    ModalComponent.prototype.toggleFocusTrap = function () {
        (this.shown) ? this.focusTrap.activate() : this.focusTrap.deactivate();
    };
    ModalComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { shown: this.shown, onSntDismiss: this.hide.bind(this) }, h("snt-layout", { padding: "none" }, h("div", { id: "backdrop", class: "modal-backdrop fade", ref: function (thisElement) { return _this.backdropElement = thisElement; } }), h("div", { class: WebUtils.generateClasses(["modal", "fade"], this.styleClasses), tabindex: "-1", role: "dialog", "aria-labelledby": this.dialogTitle ? this.dialogTitle['id'] : null, "aria-describedby": this.dialogDescription ? this.dialogDescription['id'] : null, "aria-hidden": (this.shown) ? "false" : "true", ref: function (thisElement) { return _this.modalDialogElement = thisElement; }, onClick: function (event) { return (event.target == event.currentTarget && _this.hide()); }, onKeyDown: function (event) { return (WebUtils.isValidEscapeKey(event) && _this.hide()); } }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content", ref: function (elem) { return _this.modalContentElement = elem; } }, h("div", { class: "modal-header" }), h("div", { class: "modal-body" }, h("slot", null)), h("div", { class: "modal-footer" }, h("slot", { name: "footer" })), h("button", { type: "button", class: "close", onClick: this.hide.bind(this) }, h("span", { class: "sr-only" }, this.languageVariables.close), h("span", { class: "icon", "aria-hidden": "true" }))))))));
    };
    Object.defineProperty(ModalComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalComponent, "watchers", {
        get: function () {
            return {
                "shown": ["toggleModal"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ModalComponent;
}());
ModalComponent.TAG_NAME = "snt-modal";
ModalComponent.DEFAULT_OPTIONS = new ModalOptions();
ModalComponent.EVENT_MODAL_SHOWN = "modal-shown";
ModalComponent.EVENT_MODAL_SHOW = "modal-show";
ModalComponent.EVENT_MODAL_HIDDEN = "modal-hidden";
ModalComponent.EVENT_MODAL_HIDE = "modal-hide";
ModalComponent.CLASS_SHOW = "show";
ModalComponent.CLASS_READY_TO_SHOW = "ready-to-show";
ModalComponent.CLASS_MODAL_OPEN = "modal-open";
ModalComponent.style = modalComponentCss;
export { DomUtils as D, ModalComponent as M, ModalOptions as a };
