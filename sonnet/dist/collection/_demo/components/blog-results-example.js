import { Component, h } from "@stencil/core";
export class BlogResultsExample {
    render() {
        var blogResultJson = `[
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 3\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 4\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 5\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 6\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
        ]`;
        return (h("div", null,
            h("h3", null, "Blog Empty"),
            h("snt-blog-results", { id: "first", blogResultsString: "[]" }),
            h("h3", null, "Blog Results"),
            h("snt-blog-results", { blogResultsString: blogResultJson })));
    }
    static get is() { return "blog-results-example"; }
}
