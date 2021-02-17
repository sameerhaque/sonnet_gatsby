'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');

const articleLinkComponentCss = "snt-article-link{display:block}snt-article-link a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#323232;padding:10px;height:66px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ffffff;overflow:hidden}@media (min-width: 768px){snt-article-link a{padding:15px;height:76px}}@media (min-width: 1024px){snt-article-link a{height:82px}}snt-article-link a:hover{color:#323232;text-decoration:none;outline-width:3px;outline-style:solid;outline-color:#147582;outline-offset:-3px}snt-article-link .article-link{display:block;overflow:hidden;max-height:46px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media (min-width: 768px){snt-article-link .article-link{max-height:46px}}@media (min-width: 1024px){snt-article-link .article-link{max-height:52px}}";

const ArticleLinkComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hiddenTitle = StringUtils.StringUtils.empty();
    }
    render() {
        return (index.h("a", { href: this.href, "aria-label": this.ariaLabel, "hidden-title": this.hiddenTitle }, index.h("span", { class: "article-link" }, this.copy)));
    }
};
ArticleLinkComponent.TAG_NAME = "snt-article-link";
ArticleLinkComponent.style = articleLinkComponentCss;

const articleListComponentCss = "snt-article-list .article-list{background-color:#f5f5f5;padding:15px 30px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 768px){snt-article-list .article-list{padding:15px 15px}}snt-article-list .article-list a{text-decoration:none}snt-article-list .article-list a:hover{border:2px solid #147582;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 13px}@media (max-width: 768px){snt-article-list .article-list a:hover{padding:8px}}snt-article-list .article-list a:focus{outline:2px dotted #323232;outline-offset:3px}snt-article-list .article-list a:hover:focus{outline-offset:3px;border:3px solid #147582;padding:15px 12px}@media (max-width: 768px){snt-article-list .article-list a:hover:focus{padding:7px}}snt-article-list .article-list snt-article-link:not(:last-child){margin-bottom:15px}snt-article-list .article-title{font-family:\"Averta-ExtraBold\", sans-serif;font-weight:500;margin-bottom:15px}";

const ArticleListComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.articlesJson = StringUtils.StringUtils.empty();
        this.articles = [];
        this.heading = StringUtils.StringUtils.empty();
    }
    componentWillLoad() {
        if (StringUtils.StringUtils.hasValue(this.articlesJson)) {
            this.articles = JSON.parse(this.articlesJson).articles;
        }
    }
    render() {
        return (index.h("div", { class: "article-list" }, StringUtils.StringUtils.hasValue(this.heading)
            ? index.h("div", { class: "article-title" }, this.heading)
            : null, this.articles.map((article) => {
            return index.h("snt-article-link", { copy: article.copy, href: article.href, "aria-label": article.ariaLabel, "hidden-title": article.hiddenTitle });
        })));
    }
};
ArticleListComponent.TAG_NAME = "snt-article-list";
ArticleListComponent.style = articleListComponentCss;

exports.snt_article_link = ArticleLinkComponent;
exports.snt_article_list = ArticleListComponent;
