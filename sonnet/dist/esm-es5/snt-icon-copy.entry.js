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
import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { P as Pair, C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import './_commonjsHelpers-7b8ed50b.js';
import { D as DefaultContext, V as ViewportConfigurationService, a as ViewportParameters, b as ViewportParameterBuilder, c as ViewportAttributesBuilder } from './ViewportAttributesBuilder-678f2b08.js';
var iconCopyComponentCss = "snt-icon-copy.left .content,snt-icon-copy left.content,.left snt-icon-copy .content{text-align:left}@media (max-width: 767px){snt-icon-copy snt-layout.left-mobile .content,snt-icon-copy snt-layout .left-mobile.content,.left-mobile snt-icon-copy snt-layout .content{text-align:left}}snt-icon-copy.center .content,snt-icon-copy center.content,.center snt-icon-copy .content{text-align:center}@media (max-width: 767px){snt-icon-copy snt-layout.center-mobile .content,snt-icon-copy snt-layout .center-mobile.content,.center-mobile snt-icon-copy snt-layout .content{text-align:center}}snt-icon-copy.right .content,snt-icon-copy right.content,.right snt-icon-copy .content{text-align:right}@media (max-width: 767px){snt-icon-copy snt-layout.right-mobile .content,snt-icon-copy snt-layout .right-mobile.content,.right-mobile snt-icon-copy snt-layout .content{text-align:right}}snt-icon-copy h3{text-align:center;margin-bottom:15px}[viewport=medium] snt-icon-copy h3,snt-icon-copy[viewport=medium] h3{margin-bottom:20px}[viewport=medium] snt-icon-copy .logo,snt-icon-copy[viewport=medium] .logo{height:60px;width:286px}[viewport=medium] snt-icon-copy .logo-image,snt-icon-copy[viewport=medium] .logo-image{max-height:60px;max-width:286px}[viewport=large] snt-icon-copy h3,snt-icon-copy[viewport=large] h3{margin-bottom:25px}[viewport=large] snt-icon-copy .icon,snt-icon-copy[viewport=large] .icon{height:80px;width:80px}[viewport=large] snt-icon-copy .icon-image,snt-icon-copy[viewport=large] .icon-image{height:45px;width:45px}[viewport=large] snt-icon-copy .logo,snt-icon-copy[viewport=large] .logo{height:80px;width:228px}[viewport=large] snt-icon-copy .logo-image,snt-icon-copy[viewport=large] .logo-image{max-height:80px;max-width:228px}[viewport=extra-large] snt-icon-copy h3,snt-icon-copy[viewport=extra-large] h3{margin-bottom:30px}[viewport=extra-large] snt-icon-copy .icon,snt-icon-copy[viewport=extra-large] .icon{height:80px;width:80px}[viewport=extra-large] snt-icon-copy .icon-image,snt-icon-copy[viewport=extra-large] .icon-image{height:45px;width:45px}[viewport=extra-large] snt-icon-copy .logo,snt-icon-copy[viewport=extra-large] .logo{height:80px;width:324px}[viewport=extra-large] snt-icon-copy .logo-image,snt-icon-copy[viewport=extra-large] .logo-image{max-height:80px;max-width:324px}snt-icon-copy.link snt-action-link,snt-icon-copy.link snt-link,snt-icon-copy.link a{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}snt-icon-copy.link h2{font-size:1.75rem;line-height:2.125rem;text-align:center;margin-bottom:1.875rem}snt-icon-copy.link p{text-align:center}snt-icon-copy.link .icon-copy-panel{border:3px solid transparent;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;margin:10px;color:initial;width:calc(100% - 22px);outline-offset:3px;outline:1px dashed transparent}snt-icon-copy.link a{background-image:none;border:none;text-decoration:none;outline:none;margin:0;padding:0}snt-icon-copy.link a:active,snt-icon-copy.link a:hover{background-image:none;margin:0;padding:0}snt-icon-copy.link a:active .icon-copy-panel,snt-icon-copy.link a:hover .icon-copy-panel{border:3px solid #147582}snt-icon-copy.link a:focus{outline:none;margin:0;padding:0}snt-icon-copy.link a:focus .icon-copy-panel{outline:1px dashed #323232}snt-icon-copy.link a:before{display:none}snt-icon-copy .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-icon-copy .icon,snt-icon-copy .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-icon-copy .icon,snt-icon-copy .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-icon-copy .icon,snt-icon-copy .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-icon-copy .icon,snt-icon-copy .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-icon-copy .icon,snt-icon-copy .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-icon-copy .icon,snt-icon-copy .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-icon-copy .icon-image{height:30px;width:30px}snt-icon-copy .icon-copy-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:3px solid #e5e5e5;padding:40px 20px}.neutral-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.neutral-fill{color:#323232;background-color:#ffffff;border:3px solid #e5e5e5}.light-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.light-fill{color:#323232;background-color:#d9f0f4;border:none}.dark-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.dark-fill{color:#ffffff;background-color:#147582;border:none}.float-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.float-fill{color:#323232;background-color:#ffffff;border:none}.primary-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.primary-fill{color:#323232;background-color:#6ebac5;border:none}.light-stroke snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.light-stroke{color:#323232;background-color:#ffffff;border:3px solid #acdde4}snt-icon-copy .hidden{display:none}snt-icon-copy .logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;height:60px;width:214px}snt-icon-copy .logo-image{max-height:60px;max-width:214px}";
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
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
var IconCopyComponent = /** @class */ (function () {
    function IconCopyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.titleString = '';
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.linkId = StringUtils.empty();
    }
    IconCopyComponent.prototype.registerViewport = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.parentLayout = target;
                return [2 /*return*/];
            });
        });
    };
    IconCopyComponent.prototype.componentDidLoad = function () {
        var _this = this;
        this.data.getData().then(function (value) {
            _this.context = new DefaultContext().fromObject(value);
            if (_this.logoIsSet) {
                //Set Logo-Copy
                var largeLogoUrl = _this.context.getInstance('largeLogoUrl');
                //as a standalone component we currently can only support the one size.
                _this.image.setAttribute('src', largeLogoUrl);
                if (StringUtils.isEmpty(largeLogoUrl) && StringUtils.isEmpty(largeLogoUrl)) {
                    _this.logo.classList.add('hidden');
                }
            }
            else {
                //Set Icon-Copy
                _this.normalizeIconValues();
                var largeIconUrl = _this.context.getInstance('largeIconUrl');
                var smallIconUrl = _this.context.getInstance('smallIconUrl');
                //as a standalone component we currently can only support the one size.
                _this.image.setAttribute('src', largeIconUrl);
                if (StringUtils.isEmpty(largeIconUrl) && StringUtils.isEmpty(smallIconUrl)) {
                    _this.icon.classList.add('hidden');
                }
            }
            if (_this.parentLayout) {
                ViewportConfigurationService.getInstance().register(_this, [Pair.of('snt-layout', _this.parentLayout)], _this.resize);
            }
        });
    };
    IconCopyComponent.prototype.normalizeIconValues = function () {
        var largeIconUrl = this.context.getInstance('largeIconUrl');
        var smallIconUrl = this.context.getInstance('smallIconUrl');
        if (StringUtils.isEmpty(largeIconUrl) && StringUtils.hasValue(smallIconUrl)) {
            this.context.add('largeIconUrl', smallIconUrl);
        }
        else if (StringUtils.isEmpty(smallIconUrl) && StringUtils.hasValue(largeIconUrl)) {
            this.context.add('smallIconUrl', largeIconUrl);
        }
    };
    IconCopyComponent.prototype.resize = function () {
        if (this.logoIsSet) {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('logo', this.image)]);
        }
        else {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('icon', this.image)]);
        }
    };
    IconCopyComponent.prototype.render = function () {
        var _this = this;
        var content;
        if (this.logoIsSet) {
            content = (h("div", { ref: function (el) { return _this.logo = el; }, class: "logo" }, h("img", { class: "logo-image", src: "", alt: "", "aria-hidden": "true", ref: function (el) { return _this.image = el; } })));
        }
        else {
            content = (h("div", { ref: function (el) { return _this.icon = el; }, class: "icon" }, h("img", { class: "icon-image", src: "", alt: "", "aria-hidden": "true", ref: function (el) { return _this.image = el; } })));
        }
        var iconCopyPanel = [
            h("div", { class: "icon-copy-panel" }, content, h("h3", null, this.titleString), h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) }, h("slot", null)))
        ];
        return (h(Host, { class: (this.linkHref || this.linkActionReference) ? "link" : null }, (this.linkActionReference)
            ? h("snt-action-link", { "link-id": this.linkId, actionReference: this.linkActionReference, actionData: this.linkActionData }, iconCopyPanel)
            : (this.linkHref)
                ? h("snt-link", { "link-id": this.linkId, href: this.linkHref, title: this.linkTitle, target: this.linkTarget, rel: this.linkRel }, iconCopyPanel)
                : iconCopyPanel, h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: function (el) { return _this.data = el; } })));
    };
    Object.defineProperty(IconCopyComponent.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return IconCopyComponent;
}());
IconCopyComponent.TAG_NAME = "snt-icon-copy";
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "icon", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{mediumLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{extraLargeLogoUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "logo", void 0);
IconCopyComponent.style = iconCopyComponentCss;
export { IconCopyComponent as snt_icon_copy };
