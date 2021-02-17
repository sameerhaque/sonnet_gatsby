'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');

const blogComponentCss = "snt-blog .blog-container{position:relative;height:304px;width:100%;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5}snt-blog a{width:100%;display:inline-block;text-decoration:none}snt-blog a:focus,snt-blog a:active,snt-blog a:hover{border:none;outline:none;text-decoration:none}snt-blog a:focus .blog-container,snt-blog a:active .blog-container,snt-blog a:hover .blog-container{outline:5px solid #147582}snt-blog .blog-img{width:100%;height:153px}snt-blog .blog-img img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}snt-blog snt-image{display:-ms-flexbox;display:flex;width:100%;height:100%}snt-blog .blog-tag{position:absolute;background-color:#acdde4;color:#323232;padding:10px 20px;top:130px;font-size:14px;font-family:\"Averta-ExtraBold\";font-weight:800;line-height:23px;text-transform:uppercase}snt-blog .blog-content{position:relative;padding:15px}snt-blog .blog-title{position:relative;color:#323232;text-align:left;margin-top:15px;margin-bottom:40px;font-size:14px;line-height:21px}snt-blog .blog-min-read{position:absolute;color:#6f6f6f;font-family:\"Averta-Regular\";padding-left:20px;bottom:16px;font-size:12px;line-height:18px}snt-blog .h4{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}[viewport=medium] snt-blog .blog-container,snt-blog[viewport=medium] .blog-container{height:308px}[viewport=medium] snt-blog .blog-img,snt-blog[viewport=medium] .blog-img{height:167px}[viewport=medium] snt-blog .blog-img img,snt-blog[viewport=medium] .blog-img img{height:167px}[viewport=medium] snt-blog .blog-tag,snt-blog[viewport=medium] .blog-tag{padding:10px 20px;top:145px;font-size:14px;line-height:23px}[viewport=medium] snt-blog .blog-content,snt-blog[viewport=medium] .blog-content{padding:15px}[viewport=medium] snt-blog .blog-title,snt-blog[viewport=medium] .blog-title{margin-top:15px;margin-bottom:40px;font-size:14px;line-height:21px}[viewport=medium] snt-blog .blog-min-read,snt-blog[viewport=medium] .blog-min-read{padding-left:20px;bottom:16px;font-size:12px;line-height:18px}[viewport=large] snt-blog .blog-container,snt-blog[viewport=large] .blog-container{height:276px}[viewport=large] snt-blog .blog-img,snt-blog[viewport=large] .blog-img{height:120px}[viewport=large] snt-blog .blog-img img,snt-blog[viewport=large] .blog-img img{height:120px}[viewport=large] snt-blog .blog-tag,snt-blog[viewport=large] .blog-tag{padding:10px 20px;top:97px;font-size:14px;line-height:23px}[viewport=large] snt-blog .blog-content,snt-blog[viewport=large] .blog-content{padding:20px}[viewport=large] snt-blog .blog-title,snt-blog[viewport=large] .blog-title{margin-top:10px;margin-bottom:50px}[viewport=large] snt-blog .blog-title-text,snt-blog[viewport=large] .blog-title-text{font-size:16px;line-height:21px}[viewport=large] snt-blog .blog-min-read,snt-blog[viewport=large] .blog-min-read{padding-left:20px;bottom:20px;font-size:14px;line-height:20px}[viewport=extra-large] snt-blog .blog-container,snt-blog[viewport=extra-large] .blog-container{height:317px}[viewport=extra-large] snt-blog .blog-img,snt-blog[viewport=extra-large] .blog-img{height:161px}[viewport=extra-large] snt-blog .blog-img img,snt-blog[viewport=extra-large] .blog-img img{height:161px}[viewport=extra-large] snt-blog .blog-tag,snt-blog[viewport=extra-large] .blog-tag{padding:10px 20px;top:139px;font-size:14px;line-height:23px}[viewport=extra-large] snt-blog .blog-content,snt-blog[viewport=extra-large] .blog-content{padding:20px}[viewport=extra-large] snt-blog .blog-title,snt-blog[viewport=extra-large] .blog-title{margin-top:10px;margin-bottom:50px;font-size:16px;line-height:21px}[viewport=extra-large] snt-blog .blog-min-read,snt-blog[viewport=extra-large] .blog-min-read{padding-left:20px;bottom:20px;font-size:14px;line-height:20px}";

const BlogComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imgSrcSet = StringUtils.StringUtils.empty();
        this.imgAltText = "";
        this.openInNewWindow = false;
    }
    render() {
        return [
            index.h("a", { href: this.blogLink, target: this.openInNewWindow ? "_blank" : "_self" }, index.h("div", { class: "blog-container" }, index.h("div", { class: 'blog-img' }, index.h("snt-image", { "data-src": this.imgSrc, "img-alt": this.imgAltText })), index.h("div", { class: 'blog-tag' }, index.h("span", null, this.tagText)), index.h("div", { class: 'blog-content' }, index.h("div", { class: "blog-title" }, index.h("div", { class: "h4" }, this.titleText))), index.h("span", { class: "blog-min-read" }, this.timeToRead)))
        ];
    }
    get hostElement() { return index.getElement(this); }
};
BlogComponent.TAG_NAME = "snt-blog";
BlogComponent.style = blogComponentCss;

exports.snt_blog = BlogComponent;
