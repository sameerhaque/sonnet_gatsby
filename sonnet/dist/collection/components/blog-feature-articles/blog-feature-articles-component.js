import { Component, Element, h, Host } from "@stencil/core";
export class SntBlogFeaturedArticles {
    render() {
        return (h(Host, null,
            h("snt-layout", null,
                h("slot", null))));
    }
    static get is() { return "snt-blog-feature-articles"; }
    static get originalStyleUrls() { return {
        "$": ["blog-feature-articles-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-feature-articles-component.css"]
    }; }
    static get elementRef() { return "hostElement"; }
}
