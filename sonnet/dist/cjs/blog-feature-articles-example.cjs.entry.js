'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const BlogFeaturedArticlesExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("h1", null, "Blog Featured Articles Example"), index.h("h2", null, "Desktop"), index.h("div", { id: "desktop-preview" }, this.getMarkup())));
    }
    getMarkup() {
        return (index.h("snt-blog-feature-articles", null, index.h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }), index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }), index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })));
    }
};

exports.blog_feature_articles_example = BlogFeaturedArticlesExample;
