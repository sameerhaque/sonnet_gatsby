'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const ImageLazyLoadIntersectionObserverManager = require('./ImageLazyLoadIntersectionObserverManager-977f3554.js');

const imageIconComponentCss = "snt-image-icon .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 0px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-image-icon .icon,snt-image-icon .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-image-icon .icon,snt-image-icon .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-image-icon .icon,snt-image-icon .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-image-icon .icon,snt-image-icon .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-image-icon .icon,snt-image-icon .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-image-icon .icon,snt-image-icon .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-image-icon .image-icon{height:30px;width:30px}@media (min-width: 768px){snt-image-icon .icon{height:80px;width:80px}snt-image-icon .image-icon{height:45px;width:45px}}";

const ImageIconComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.properties = "";
        this.imgAlt = "";
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    componentDidLoad() {
        ImageLazyLoadIntersectionObserverManager.LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        let iconSrc = {};
        if (StringUtils.StringUtils.hasValue(this.properties)) {
            iconSrc = JSON.parse(this.properties);
        }
        this.largeIconUrl = iconSrc.largeIconUrl || iconSrc.smallIconUrl;
        this.smallIconUrl = iconSrc.smallIconUrl || this.largeIconUrl;
        this.image.setAttribute("src", this.smallIconUrl);
        this.element.setAttribute("data-src", this.smallIconUrl);
        this.image.setAttribute("data-srcSet", this.smallIconUrl);
        this.largeSource.setAttribute('srcSet', this.largeIconUrl);
        this.largeSource.setAttribute('data-srcSet', this.largeIconUrl);
        if (StringUtils.StringUtils.isEmpty(this.largeIconUrl) &&
            StringUtils.StringUtils.isEmpty(this.smallIconUrl)) {
            this.icon.classList.add("hidden");
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("snt-layout", null, index.h("div", { ref: (el) => (this.icon = el), class: "icon" }, index.h("picture", null, index.h("source", { ref: (el) => (this.largeSource = el), media: "(min-width: 768px)", srcSet: "" }), index.h("img", { class: WebUtils.WebUtils.generateClasses(["image-icon"], this.styleClasses), src: "", alt: this.imgAlt, "aria-hidden": "true", ref: (el) => (this.image = el) }))))));
    }
    get element() { return index.getElement(this); }
};
ImageIconComponent.style = imageIconComponentCss;

exports.snt_image_icon = ImageIconComponent;
