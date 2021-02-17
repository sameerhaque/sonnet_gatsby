'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const FeatureRightExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.viewport = "";
    }
    render() {
        return [
            index.h("h1", null, "Feature Right Example"),
            index.h("h3", null, "HD Viewport"),
            index.h("host", { viewport: "extra-large" }, index.h("div", { class: "col-6" }, index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), index.h("br", null),
            index.h("h3", null, "Desktop Viewport"),
            index.h("host", { viewport: "large" }, index.h("div", { class: "col-5" }, index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), index.h("br", null),
            index.h("h3", null, "Tablet Viewport"),
            index.h("host", { viewport: "medium" }, index.h("div", { class: "col-4" }, index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), index.h("br", null),
            index.h("h3", null, "Mobile Viewport"),
            index.h("host", { viewport: "small" }, index.h("div", { class: "col-3" }, index.h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })))
        ];
    }
};
FeatureRightExample.TAG_NAME = "feature-right-example";

exports.feature_right_example = FeatureRightExample;
