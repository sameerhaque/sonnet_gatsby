'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
require('./_commonjsHelpers-fc53004f.js');
const ViewportAttributesBuilder = require('./ViewportAttributesBuilder-0c1b4980.js');

const iconCopyComponentCss = "snt-icon-copy.left .content,snt-icon-copy left.content,.left snt-icon-copy .content{text-align:left}@media (max-width: 767px){snt-icon-copy snt-layout.left-mobile .content,snt-icon-copy snt-layout .left-mobile.content,.left-mobile snt-icon-copy snt-layout .content{text-align:left}}snt-icon-copy.center .content,snt-icon-copy center.content,.center snt-icon-copy .content{text-align:center}@media (max-width: 767px){snt-icon-copy snt-layout.center-mobile .content,snt-icon-copy snt-layout .center-mobile.content,.center-mobile snt-icon-copy snt-layout .content{text-align:center}}snt-icon-copy.right .content,snt-icon-copy right.content,.right snt-icon-copy .content{text-align:right}@media (max-width: 767px){snt-icon-copy snt-layout.right-mobile .content,snt-icon-copy snt-layout .right-mobile.content,.right-mobile snt-icon-copy snt-layout .content{text-align:right}}snt-icon-copy h3{text-align:center;margin-bottom:15px}[viewport=medium] snt-icon-copy h3,snt-icon-copy[viewport=medium] h3{margin-bottom:20px}[viewport=medium] snt-icon-copy .logo,snt-icon-copy[viewport=medium] .logo{height:60px;width:286px}[viewport=medium] snt-icon-copy .logo-image,snt-icon-copy[viewport=medium] .logo-image{max-height:60px;max-width:286px}[viewport=large] snt-icon-copy h3,snt-icon-copy[viewport=large] h3{margin-bottom:25px}[viewport=large] snt-icon-copy .icon,snt-icon-copy[viewport=large] .icon{height:80px;width:80px}[viewport=large] snt-icon-copy .icon-image,snt-icon-copy[viewport=large] .icon-image{height:45px;width:45px}[viewport=large] snt-icon-copy .logo,snt-icon-copy[viewport=large] .logo{height:80px;width:228px}[viewport=large] snt-icon-copy .logo-image,snt-icon-copy[viewport=large] .logo-image{max-height:80px;max-width:228px}[viewport=extra-large] snt-icon-copy h3,snt-icon-copy[viewport=extra-large] h3{margin-bottom:30px}[viewport=extra-large] snt-icon-copy .icon,snt-icon-copy[viewport=extra-large] .icon{height:80px;width:80px}[viewport=extra-large] snt-icon-copy .icon-image,snt-icon-copy[viewport=extra-large] .icon-image{height:45px;width:45px}[viewport=extra-large] snt-icon-copy .logo,snt-icon-copy[viewport=extra-large] .logo{height:80px;width:324px}[viewport=extra-large] snt-icon-copy .logo-image,snt-icon-copy[viewport=extra-large] .logo-image{max-height:80px;max-width:324px}snt-icon-copy.link snt-action-link,snt-icon-copy.link snt-link,snt-icon-copy.link a{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}snt-icon-copy.link h2{font-size:1.75rem;line-height:2.125rem;text-align:center;margin-bottom:1.875rem}snt-icon-copy.link p{text-align:center}snt-icon-copy.link .icon-copy-panel{border:3px solid transparent;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;margin:10px;color:initial;width:calc(100% - 22px);outline-offset:3px;outline:1px dashed transparent}snt-icon-copy.link a{background-image:none;border:none;text-decoration:none;outline:none;margin:0;padding:0}snt-icon-copy.link a:active,snt-icon-copy.link a:hover{background-image:none;margin:0;padding:0}snt-icon-copy.link a:active .icon-copy-panel,snt-icon-copy.link a:hover .icon-copy-panel{border:3px solid #147582}snt-icon-copy.link a:focus{outline:none;margin:0;padding:0}snt-icon-copy.link a:focus .icon-copy-panel{outline:1px dashed #323232}snt-icon-copy.link a:before{display:none}snt-icon-copy .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-icon-copy .icon,snt-icon-copy .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-icon-copy .icon,snt-icon-copy .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-icon-copy .icon,snt-icon-copy .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-icon-copy .icon,snt-icon-copy .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-icon-copy .icon,snt-icon-copy .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-icon-copy .icon,snt-icon-copy .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-icon-copy .icon-image{height:30px;width:30px}snt-icon-copy .icon-copy-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:3px solid #e5e5e5;padding:40px 20px}.neutral-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.neutral-fill{color:#323232;background-color:#ffffff;border:3px solid #e5e5e5}.light-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.light-fill{color:#323232;background-color:#d9f0f4;border:none}.dark-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.dark-fill{color:#ffffff;background-color:#147582;border:none}.float-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.float-fill{color:#323232;background-color:#ffffff;border:none}.primary-fill snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.primary-fill{color:#323232;background-color:#6ebac5;border:none}.light-stroke snt-icon-copy .icon-copy-panel,snt-icon-copy .icon-copy-panel.light-stroke{color:#323232;background-color:#ffffff;border:3px solid #acdde4}snt-icon-copy .hidden{display:none}snt-icon-copy .logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;height:60px;width:214px}snt-icon-copy .logo-image{max-height:60px;max-width:214px}";

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
const IconCopyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.titleString = '';
        this.styleClasses = StringUtils.StringUtils.empty();
        this.logoIsSet = false;
        this.linkId = StringUtils.StringUtils.empty();
    }
    registerViewport(target) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parentLayout = target;
        });
    }
    componentDidLoad() {
        this.data.getData().then(value => {
            this.context = new ViewportAttributesBuilder.DefaultContext().fromObject(value);
            if (this.logoIsSet) {
                //Set Logo-Copy
                const largeLogoUrl = this.context.getInstance('largeLogoUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeLogoUrl);
                if (StringUtils.StringUtils.isEmpty(largeLogoUrl) && StringUtils.StringUtils.isEmpty(largeLogoUrl)) {
                    this.logo.classList.add('hidden');
                }
            }
            else {
                //Set Icon-Copy
                this.normalizeIconValues();
                const largeIconUrl = this.context.getInstance('largeIconUrl');
                const smallIconUrl = this.context.getInstance('smallIconUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeIconUrl);
                if (StringUtils.StringUtils.isEmpty(largeIconUrl) && StringUtils.StringUtils.isEmpty(smallIconUrl)) {
                    this.icon.classList.add('hidden');
                }
            }
            if (this.parentLayout) {
                ViewportAttributesBuilder.ViewportConfigurationService.getInstance().register(this, [ComponentConstants.Pair.of('snt-layout', this.parentLayout)], this.resize);
            }
        });
    }
    normalizeIconValues() {
        const largeIconUrl = this.context.getInstance('largeIconUrl');
        const smallIconUrl = this.context.getInstance('smallIconUrl');
        if (StringUtils.StringUtils.isEmpty(largeIconUrl) && StringUtils.StringUtils.hasValue(smallIconUrl)) {
            this.context.add('largeIconUrl', smallIconUrl);
        }
        else if (StringUtils.StringUtils.isEmpty(smallIconUrl) && StringUtils.StringUtils.hasValue(largeIconUrl)) {
            this.context.add('smallIconUrl', largeIconUrl);
        }
    }
    resize() {
        if (this.logoIsSet) {
            ViewportAttributesBuilder.ViewportConfigurationService.getInstance().process(this, this.context, [ComponentConstants.Pair.of('logo', this.image)]);
        }
        else {
            ViewportAttributesBuilder.ViewportConfigurationService.getInstance().process(this, this.context, [ComponentConstants.Pair.of('icon', this.image)]);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (index.h("div", { ref: (el) => this.logo = el, class: "logo" }, index.h("img", { class: "logo-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        else {
            content = (index.h("div", { ref: (el) => this.icon = el, class: "icon" }, index.h("img", { class: "icon-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        const iconCopyPanel = [
            index.h("div", { class: "icon-copy-panel" }, content, index.h("h3", null, this.titleString), index.h("div", { class: WebUtils.WebUtils.generateClasses(["content"], this.styleClasses) }, index.h("slot", null)))
        ];
        return (index.h(index.Host, { class: (this.linkHref || this.linkActionReference) ? "link" : null }, (this.linkActionReference)
            ? index.h("snt-action-link", { "link-id": this.linkId, actionReference: this.linkActionReference, actionData: this.linkActionData }, iconCopyPanel)
            : (this.linkHref)
                ? index.h("snt-link", { "link-id": this.linkId, href: this.linkHref, title: this.linkTitle, target: this.linkTarget, rel: this.linkRel }, iconCopyPanel)
                : iconCopyPanel, index.h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: (el) => this.data = el })));
    }
    get el() { return index.getElement(this); }
};
IconCopyComponent.TAG_NAME = "snt-icon-copy";
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "icon", void 0);
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{mediumLogoUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeLogoUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('src', '{{extraLargeLogoUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "logo", void 0);
IconCopyComponent.style = iconCopyComponentCss;

exports.snt_icon_copy = IconCopyComponent;
