import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LazyLoadIntersectionObserverManager } from './ImageLazyLoadIntersectionObserverManager-28d19548.js';
var imageIconComponentCss = "snt-image-icon .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 0px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-image-icon .icon,snt-image-icon .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-image-icon .icon,snt-image-icon .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-image-icon .icon,snt-image-icon .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-image-icon .icon,snt-image-icon .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-image-icon .icon,snt-image-icon .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-image-icon .icon,snt-image-icon .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-image-icon .image-icon{height:30px;width:30px}@media (min-width: 768px){snt-image-icon .icon{height:80px;width:80px}snt-image-icon .image-icon{height:45px;width:45px}}";
var ImageIconComponent = /** @class */ (function () {
    function ImageIconComponent(hostRef) {
        registerInstance(this, hostRef);
        this.properties = "";
        this.imgAlt = "";
        this.styleClasses = StringUtils.empty();
    }
    ImageIconComponent.prototype.componentDidLoad = function () {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        var iconSrc = {};
        if (StringUtils.hasValue(this.properties)) {
            iconSrc = JSON.parse(this.properties);
        }
        this.largeIconUrl = iconSrc.largeIconUrl || iconSrc.smallIconUrl;
        this.smallIconUrl = iconSrc.smallIconUrl || this.largeIconUrl;
        this.image.setAttribute("src", this.smallIconUrl);
        this.element.setAttribute("data-src", this.smallIconUrl);
        this.image.setAttribute("data-srcSet", this.smallIconUrl);
        this.largeSource.setAttribute('srcSet', this.largeIconUrl);
        this.largeSource.setAttribute('data-srcSet', this.largeIconUrl);
        if (StringUtils.isEmpty(this.largeIconUrl) &&
            StringUtils.isEmpty(this.smallIconUrl)) {
            this.icon.classList.add("hidden");
        }
    };
    ImageIconComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("snt-layout", null, h("div", { ref: function (el) { return (_this.icon = el); }, class: "icon" }, h("picture", null, h("source", { ref: function (el) { return (_this.largeSource = el); }, media: "(min-width: 768px)", srcSet: "" }), h("img", { class: WebUtils.generateClasses(["image-icon"], this.styleClasses), src: "", alt: this.imgAlt, "aria-hidden": "true", ref: function (el) { return (_this.image = el); } }))))));
    };
    Object.defineProperty(ImageIconComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ImageIconComponent;
}());
ImageIconComponent.style = imageIconComponentCss;
export { ImageIconComponent as snt_image_icon };
