import { Component, h, Host } from "@stencil/core";
export class BlogFeaturedArticlesExample {
    render() {
        return (h(Host, null,
            h("h1", null, "Blog Featured Articles Example"),
            h("h2", null, "Desktop"),
            h("div", { id: "desktop-preview" }, this.getMarkup())));
    }
    getMarkup() {
        return (h("snt-blog-feature-articles", null,
            h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }),
            h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }),
            h("snt-feature-right", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })));
    }
    static get is() { return "blog-feature-articles-example"; }
}
