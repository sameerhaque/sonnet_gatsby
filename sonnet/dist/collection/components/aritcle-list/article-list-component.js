import { Component, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class ArticleListComponent {
    constructor() {
        this.articlesJson = StringUtils.empty();
        this.articles = [];
        this.heading = StringUtils.empty();
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.articlesJson)) {
            this.articles = JSON.parse(this.articlesJson).articles;
        }
    }
    render() {
        return (h("div", { class: "article-list" },
            StringUtils.hasValue(this.heading)
                ? h("div", { class: "article-title" }, this.heading)
                : null,
            this.articles.map((article) => {
                return h("snt-article-link", { copy: article.copy, href: article.href, "aria-label": article.ariaLabel, "hidden-title": article.hiddenTitle });
            })));
    }
    static get is() { return "snt-article-list"; }
    static get originalStyleUrls() { return {
        "$": ["article-list-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["article-list-component.css"]
    }; }
    static get properties() { return {
        "articlesJson": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "articles-json",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "articles": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Article[]",
                "resolved": "Article[]",
                "references": {
                    "Article": {
                        "location": "import",
                        "path": "./article"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "heading",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
}
ArticleListComponent.TAG_NAME = "snt-article-list";
