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
var recaptchaComponentCss = "";
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
var RecaptchaComponent = /** @class */ (function () {
    function RecaptchaComponent(hostRef) {
        registerInstance(this, hostRef);
        this.grecaptchaLoaded = createEvent(this, "grecaptchaLoaded", 7);
    }
    RecaptchaComponent.prototype.componentWillLoad = function () {
        this.loadRecaptchaScript();
    };
    RecaptchaComponent.prototype.componentDidLoad = function () {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    };
    RecaptchaComponent.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.grecaptcha.reset(this.grecaptchWidgetId);
                return [2 /*return*/];
            });
        });
    };
    RecaptchaComponent.prototype.handleGrecaptchaLoaded = function () {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    };
    RecaptchaComponent.prototype.loadRecaptchaScript = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hlParam, scriptSrc, recaptchaScriptEl, scriptTag, documentHead;
            var _this = this;
            return __generator(this, function (_a) {
                hlParam = this.language && this.language == 'fr' ? 'fr-CA' : 'en';
                scriptSrc = "https://www.google.com/recaptcha/api.js?hl=" + hlParam + "&onload=grecaptchaOnLoadCallback&render=explicit";
                recaptchaScriptEl = document.querySelector("[src=\"" + scriptSrc + "\"]");
                if (!window['grecaptcha]'] && !recaptchaScriptEl) {
                    scriptTag = document.createElement('script');
                    scriptTag.type = "text/javascript";
                    scriptTag.src = scriptSrc;
                    scriptTag.async = true;
                    scriptTag.defer = true;
                    scriptTag.onload = function () { };
                    window.grecaptchaOnLoadCallback = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.grecaptchaLoaded.emit();
                            return [2 /*return*/];
                        });
                    }); };
                    documentHead = document.getElementsByTagName('head')[0];
                    documentHead.appendChild(scriptTag);
                }
                return [2 /*return*/];
            });
        });
    };
    RecaptchaComponent.prototype.grecaptchaCallback = function (value) {
        this.checkbox.value = value;
        this.toggleChecked(this.checkbox, true);
    };
    RecaptchaComponent.prototype.grecaptchaExpiredCallback = function () {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    };
    RecaptchaComponent.prototype.grecaptchaErrorCallback = function () {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    };
    RecaptchaComponent.prototype.toggleChecked = function (checkbox, checked) {
        if (checked != checkbox.checked) {
            checkbox.click();
        }
    };
    RecaptchaComponent.prototype.renderRecaptcha = function (recaptcha) {
        var recaptchaPlaceholder = this.element.querySelector('.g-recaptcha');
        if (recaptchaPlaceholder.childNodes.length === 0) {
            this.grecaptchWidgetId = recaptcha.render(recaptchaPlaceholder, {
                'sitekey': this.sitekey,
                'callback': this.grecaptchaCallback.bind(this),
                'expired-callback': this.grecaptchaExpiredCallback.bind(this),
                'error-callback': this.grecaptchaErrorCallback.bind(this)
            });
        }
    };
    RecaptchaComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "g-recaptcha", id: this.element.id + "-g-recaptcha" }), h("input", { ref: function (el) { return _this.checkbox = el; }, id: "recaptcha", name: "recaptcha", type: "checkbox", value: "", class: "hidden", "data-field": "recaptcha", tabindex: "-1", "aria-checked": "false", "aria-invalid": "false", "aria-describedby": "recaptcha_error", required: true }), h("slot", { name: "error-messages" })));
    };
    Object.defineProperty(RecaptchaComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return RecaptchaComponent;
}());
RecaptchaComponent.TAG_NAME = "snt-recaptcha";
RecaptchaComponent.style = recaptchaComponentCss;
export { RecaptchaComponent as R };
