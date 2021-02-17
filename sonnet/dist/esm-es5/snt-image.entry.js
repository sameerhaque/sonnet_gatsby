import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LazyLoadIntersectionObserverManager } from './ImageLazyLoadIntersectionObserverManager-28d19548.js';
var imageComponentCss = "snt-image img{max-width:100%;height:auto;display:block}snt-image .hidden{display:none}snt-image .hiddenOnMobile{display:none}@media (min-width: 768px){snt-image .hiddenOnMobile{display:block}}snt-image[data-width] img{width:100%}@media (min-width: 768px){snt-image[data-width] img{width:var(--blog-img-width, 100%)}}snt-image .center{margin-left:auto;margin-right:auto}snt-image .left{margin-right:auto}snt-image .right{margin-left:auto}";
var ImageComponent = /** @class */ (function () {
    function ImageComponent(hostRef) {
        registerInstance(this, hostRef);
        this.emptyString = 'data:,';
        this.dataSrc = '';
        this.srcImage = '';
        this.srcset = '';
        this.imgAlt = '';
        this.styleClasses = StringUtils.empty();
    }
    ImageComponent.prototype.componentDidLoad = function () {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    };
    ImageComponent.prototype.render = function () {
        var sourceUrl;
        var dataSource;
        sourceUrl = StringUtils.isEmpty(this.srcImage) ? this.emptyString : this.srcImage;
        dataSource = StringUtils.isEmpty(this.dataSrc) ? this.emptyString : this.dataSrc;
        return (h(Host, null, h("img", { class: WebUtils.generateClasses([
                StringUtils.isEmpty(this.srcImage) && StringUtils.isEmpty(this.dataSrc) ? "hidden" : ""
            ], this.styleClasses), src: sourceUrl, "data-src": dataSource, height: this.height, width: this.width, alt: this.imgAlt, srcset: this.srcset ? this.srcset : '', loading: 'lazy', sizes: this.sizes ? this.sizes : undefined })));
    };
    ;
    Object.defineProperty(ImageComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ImageComponent;
}());
ImageComponent.style = imageComponentCss;
export { ImageComponent as snt_image };
