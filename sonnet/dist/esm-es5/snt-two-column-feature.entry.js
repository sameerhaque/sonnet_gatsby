import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { P as Pair, C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import './WebUtils-eeb89633.js';
import './_commonjsHelpers-7b8ed50b.js';
import { D as DefaultContext, V as ViewportConfigurationService, a as ViewportParameters, b as ViewportParameterBuilder, c as ViewportAttributesBuilder } from './ViewportAttributesBuilder-678f2b08.js';
var twoColumnFeatureComponentCss = "snt-two-column-feature snt-two-column snt-layout .spacings{padding:0px}snt-two-column-feature snt-two-column img{height:100%;width:100%}snt-two-column-feature snt-two-column .flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden}snt-two-column-feature snt-two-column .image-column{position:relative;height:100%}snt-two-column-feature snt-two-column .left{left:0}snt-two-column-feature snt-two-column .right{right:0}snt-two-column-feature snt-two-column snt-layout[viewport=medium] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=large] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] img{position:absolute;top:0;-o-object-fit:cover;object-fit:cover}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content-container{padding:40px 37px}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=medium] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=medium] .content{margin-top:20px}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content-container{padding:60px 71px}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=large] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=large] .content{margin-top:25px}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content-container{padding:60px 135px}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content-column,snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .image-column{-ms-flex:0 0 50%;flex:0 0 50%}snt-two-column-feature snt-two-column snt-layout[viewport=extra-large] .content{margin-top:30px}snt-two-column-feature snt-two-column snt-action-button{display:block;margin-top:30px}snt-two-column-feature snt-two-column snt-link{display:block;margin-top:30px}snt-two-column-feature snt-two-column .content-container{padding:40px 30px}snt-two-column-feature snt-two-column .content-column,snt-two-column-feature snt-two-column .image-column{-ms-flex:0 0 100%;flex:0 0 100%}snt-two-column-feature snt-two-column .content{margin-top:15px;font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif}snt-two-column-feature snt-two-column .content snt-link{display:unset;margin-top:unset}snt-two-column-feature snt-two-column snt-image{display:-ms-flexbox;display:flex;width:100%;height:100%}snt-two-column-feature .mobile-hide-image snt-layout[viewport=extra-small] .image-column,.mobile-hide-image snt-two-column-feature snt-layout[viewport=extra-small] .image-column,snt-two-column-feature.mobile-hide-image snt-layout[viewport=extra-small] .image-column{display:none}snt-two-column-feature .mobile-hide-image snt-layout[viewport=small] .image-column,.mobile-hide-image snt-two-column-feature snt-layout[viewport=small] .image-column,snt-two-column-feature.mobile-hide-image snt-layout[viewport=small] .image-column{display:none}";
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
var TwoColumnFeatureComponent = /** @class */ (function () {
    function TwoColumnFeatureComponent(hostRef) {
        registerInstance(this, hostRef);
        this.imagePosition = "left";
        this.primaryButtonText = StringUtils.empty();
        this.primaryButtonAction = StringUtils.empty();
        this.primaryButtonData = StringUtils.empty();
        this.secondaryButtonText = StringUtils.empty();
        this.secondaryButtonAction = StringUtils.empty();
        this.secondaryButtonData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.linkUrl = StringUtils.empty();
        this.openLinkInNewWindow = false;
    }
    TwoColumnFeatureComponent.prototype.componentDidLoad = function () {
        var _this = this;
        this.layoutEl = this.hostElement.querySelector('snt-layout');
        if (this.dataEl && typeof (this.dataEl.getData) == 'function') {
            this.dataEl.getData().then(function (value) {
                _this.context = new DefaultContext().fromObject(value);
                ViewportConfigurationService.getInstance().register(_this, [Pair.of('snt-layout', _this.layoutEl)], _this.viewportResize);
            });
        }
    };
    TwoColumnFeatureComponent.prototype.viewportResize = function () {
        ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('imageElement', this.imageElement)]);
    };
    TwoColumnFeatureComponent.prototype.render = function () {
        var _this = this;
        var imageColumn = (h("div", { class: "image-column " + this.imagePosition, slot: this.imagePosition == "left" ? "left" : "right" }, h("snt-image", { "data-src": this.imagePath, "src-image": this.imagePath, "img-alt": this.imageAltText, ref: function (el) { return _this.imageElement = el; } })));
        var primaryButtonContent = this.buildActionButton(this.primaryButtonText, this.primaryButtonAction, this.primaryButtonData, 'theme-default');
        var secondaryButtonContent = this.buildActionButton(this.secondaryButtonText, this.secondaryButtonAction, this.secondaryButtonData, 'theme-secondary');
        var linkContent = this.buildLink(this.linkTitle, this.linkUrl, 'theme-link');
        var contentColumn = (h("div", { class: "content-column", slot: this.imagePosition == "left" ? "right" : "left" }, h("div", { class: "content-container" }, h("h2", null, this.titleString), h("div", { class: "content", innerHTML: this.copyText }), primaryButtonContent, secondaryButtonContent, linkContent)));
        return [
            h("snt-two-column", null, imageColumn, contentColumn),
            h("div", null, this.properties
                ? h("snt-data", { type: "json", data: this.properties, ref: function (el) { return _this.dataEl = el; } })
                : null)
        ];
    };
    TwoColumnFeatureComponent.prototype.buildActionButton = function (buttonText, buttonAction, buttonData, buttonClass) {
        return StringUtils.isEmpty(buttonText)
            ? null
            : h("snt-action-button", { "style-classes": 'cta ' + buttonClass, "action-reference": buttonAction, "action-data": buttonData, "link-title": buttonText });
    };
    TwoColumnFeatureComponent.prototype.buildLink = function (linkTitle, linkUrl, linkClass) {
        var linkContent = this.openLinkInNewWindow
            ? linkTitle
            : h("span", { class: "link-content" }, linkTitle);
        return StringUtils.isEmpty(linkTitle)
            ? null
            : h("snt-link", { "class-names": linkClass + ' theme-action', href: linkUrl, target: this.openLinkInNewWindow ? "_blank" : "" }, linkContent);
    };
    Object.defineProperty(TwoColumnFeatureComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TwoColumnFeatureComponent;
}());
TwoColumnFeatureComponent.TAG_NAME = "snt-two-column";
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{tabletImageUrl}}')
            .with('src-image', '{{tabletImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopImageUrl}}')
            .with('src-image', '{{desktopImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopHdTabletUrl}}')
            .with('src-image', '{{desktopHdTabletUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], TwoColumnFeatureComponent.prototype, "imageElement", void 0);
TwoColumnFeatureComponent.style = twoColumnFeatureComponentCss;
export { TwoColumnFeatureComponent as snt_two_column_feature };
