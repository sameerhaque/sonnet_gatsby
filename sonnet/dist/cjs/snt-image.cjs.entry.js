'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const ImageLazyLoadIntersectionObserverManager = require('./ImageLazyLoadIntersectionObserverManager-977f3554.js');

const imageComponentCss = "snt-image img{max-width:100%;height:auto;display:block}snt-image .hidden{display:none}snt-image .hiddenOnMobile{display:none}@media (min-width: 768px){snt-image .hiddenOnMobile{display:block}}snt-image[data-width] img{width:100%}@media (min-width: 768px){snt-image[data-width] img{width:var(--blog-img-width, 100%)}}snt-image .center{margin-left:auto;margin-right:auto}snt-image .left{margin-right:auto}snt-image .right{margin-left:auto}";

const ImageComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.emptyString = 'data:,';
        this.dataSrc = '';
        this.srcImage = '';
        this.srcset = '';
        this.imgAlt = '';
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    componentDidLoad() {
        ImageLazyLoadIntersectionObserverManager.LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    }
    render() {
        let sourceUrl;
        let dataSource;
        sourceUrl = StringUtils.StringUtils.isEmpty(this.srcImage) ? this.emptyString : this.srcImage;
        dataSource = StringUtils.StringUtils.isEmpty(this.dataSrc) ? this.emptyString : this.dataSrc;
        return (index.h(index.Host, null, index.h("img", { class: WebUtils.WebUtils.generateClasses([
                StringUtils.StringUtils.isEmpty(this.srcImage) && StringUtils.StringUtils.isEmpty(this.dataSrc) ? "hidden" : ""
            ], this.styleClasses), src: sourceUrl, "data-src": dataSource, height: this.height, width: this.width, alt: this.imgAlt, srcset: this.srcset ? this.srcset : '', loading: 'lazy', sizes: this.sizes ? this.sizes : undefined })));
    }
    ;
    get element() { return index.getElement(this); }
};
ImageComponent.style = imageComponentCss;

exports.snt_image = ImageComponent;
