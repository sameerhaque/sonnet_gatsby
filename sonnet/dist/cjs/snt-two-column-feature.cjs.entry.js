'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
require('./WebUtils-7da67880.js');
require('./_commonjsHelpers-fc53004f.js');
const ViewportAttributesBuilder = require('./ViewportAttributesBuilder-0c1b4980.js');

const twoColumnFeatureComponentCss = "snt-two-column-feature snt-two-column snt-layout .spacings{padding:0px}snt-two-column-feature snt-two-column img{height:100%;width:100%}snt-two-column-feature snt-two-column .flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden}snt-two-column-feature snt-two-column .image-column{position:relative;height:100%}snt-two-column-feature snt-two-column .left{left:0}snt-two-column-feature snt-two-column .right{right:0}snt-two-column-feature snt-two-column snt-layout[viewport=medium] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=large] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content-container{padding:40px 37px}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=medium] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content{margin-top:20px}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content-container{padding:60px 71px}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=large] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content{margin-top:25px}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content-container{padding:60px 135px}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content{margin-top:30px}snt-two-column-feature snt-two-column snt-action-button{display:block;margin-top:30px}snt-two-column-feature snt-two-column snt-link{display:block;margin-top:30px}snt-two-column-feature snt-two-column .content-container{padding:40px 30px}snt-two-column-feature snt-two-column .content-column,snt-two-column-feature snt-two-column .image-column{-ms-flex:0 0 100%;flex:0 0 100%}snt-two-column-feature snt-two-column .content{margin-top:15px;font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif}snt-two-column-feature snt-two-column .content snt-link{display:unset;margin-top:unset}snt-two-column-feature snt-two-column snt-image{display:-ms-flexbox;display:flex;width:100%;height:100%}snt-two-column-feature .mobile-hide-image snt-layout[viewport=extra-small] .image-column,.mobile-hide-image snt-two-column-feature snt-layout[viewport=extra-small] .image-column,snt-two-column-feature.mobile-hide-image snt-layout[viewport=extra-small] .image-column{display:none}snt-two-column-feature .mobile-hide-image snt-layout[viewport=small] .image-column,.mobile-hide-image snt-two-column-feature snt-layout[viewport=small] .image-column,snt-two-column-feature.mobile-hide-image snt-layout[viewport=small] .image-column{display:none}";

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
const TwoColumnFeatureComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imagePosition = "left";
        this.primaryButtonText = StringUtils.StringUtils.empty();
        this.primaryButtonAction = StringUtils.StringUtils.empty();
        this.primaryButtonData = StringUtils.StringUtils.empty();
        this.secondaryButtonText = StringUtils.StringUtils.empty();
        this.secondaryButtonAction = StringUtils.StringUtils.empty();
        this.secondaryButtonData = StringUtils.StringUtils.empty();
        this.linkTitle = StringUtils.StringUtils.empty();
        this.linkUrl = StringUtils.StringUtils.empty();
        this.openLinkInNewWindow = false;
    }
    componentDidLoad() {
        this.layoutEl = this.hostElement.querySelector('snt-layout');
        if (this.dataEl && typeof (this.dataEl.getData) == 'function') {
            this.dataEl.getData().then(value => {
                this.context = new ViewportAttributesBuilder.DefaultContext().fromObject(value);
                ViewportAttributesBuilder.ViewportConfigurationService.getInstance().register(this, [ComponentConstants.Pair.of('snt-layout', this.layoutEl)], this.viewportResize);
            });
        }
    }
    viewportResize() {
        ViewportAttributesBuilder.ViewportConfigurationService.getInstance().process(this, this.context, [ComponentConstants.Pair.of('imageElement', this.imageElement)]);
    }
    render() {
        const imageColumn = (index.h("div", { class: `image-column ${this.imagePosition}`, slot: this.imagePosition == "left" ? "left" : "right" }, index.h("snt-image", { "data-src": this.imagePath, "src-image": this.imagePath, "img-alt": this.imageAltText, ref: (el) => this.imageElement = el })));
        const primaryButtonContent = this.buildActionButton(this.primaryButtonText, this.primaryButtonAction, this.primaryButtonData, 'theme-default');
        const secondaryButtonContent = this.buildActionButton(this.secondaryButtonText, this.secondaryButtonAction, this.secondaryButtonData, 'theme-secondary');
        const linkContent = this.buildLink(this.linkTitle, this.linkUrl, 'theme-link');
        const contentColumn = (index.h("div", { class: "content-column", slot: this.imagePosition == "left" ? "right" : "left" }, index.h("div", { class: "content-container" }, index.h("h2", null, this.titleString), index.h("div", { class: "content", innerHTML: this.copyText }), primaryButtonContent, secondaryButtonContent, linkContent)));
        return [
            index.h("snt-two-column", null, imageColumn, contentColumn),
            index.h("div", null, this.properties
                ? index.h("snt-data", { type: "json", data: this.properties, ref: (el) => this.dataEl = el })
                : null)
        ];
    }
    buildActionButton(buttonText, buttonAction, buttonData, buttonClass) {
        return StringUtils.StringUtils.isEmpty(buttonText)
            ? null
            : index.h("snt-action-button", { "style-classes": 'cta ' + buttonClass, "action-reference": buttonAction, "action-data": buttonData, "link-title": buttonText });
    }
    buildLink(linkTitle, linkUrl, linkClass) {
        const linkContent = this.openLinkInNewWindow
            ? linkTitle
            : index.h("span", { class: "link-content" }, linkTitle);
        return StringUtils.StringUtils.isEmpty(linkTitle)
            ? null
            : index.h("snt-link", { "class-names": linkClass + ' theme-action', href: linkUrl, target: this.openLinkInNewWindow ? "_blank" : "" }, linkContent);
    }
    get hostElement() { return index.getElement(this); }
};
TwoColumnFeatureComponent.TAG_NAME = "snt-two-column";
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{tabletImageUrl}}')
            .with('src-image', '{{tabletImageUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopImageUrl}}')
            .with('src-image', '{{desktopImageUrl}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopHdTabletUrl}}')
            .with('src-image', '{{desktopHdTabletUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], TwoColumnFeatureComponent.prototype, "imageElement", void 0);
TwoColumnFeatureComponent.style = twoColumnFeatureComponentCss;

exports.snt_two_column_feature = TwoColumnFeatureComponent;
