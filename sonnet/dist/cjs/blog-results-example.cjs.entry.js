'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const BlogResultsExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var blogResultJson = `[
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 3\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 4\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 5\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 6\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
        ]`;
        return (index.h("div", null, index.h("h3", null, "Blog Empty"), index.h("snt-blog-results", { id: "first", blogResultsString: "[]" }), index.h("h3", null, "Blog Results"), index.h("snt-blog-results", { blogResultsString: blogResultJson })));
    }
};

exports.blog_results_example = BlogResultsExample;
