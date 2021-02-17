import { r as registerInstance, h } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
var articleLinkComponentCss = "snt-article-link{display:block}snt-article-link a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#323232;padding:10px;height:66px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ffffff;overflow:hidden}@media (min-width: 768px){snt-article-link a{padding:15px;height:76px}}@media (min-width: 1024px){snt-article-link a{height:82px}}snt-article-link a:hover{color:#323232;text-decoration:none;outline-width:3px;outline-style:solid;outline-color:#147582;outline-offset:-3px}snt-article-link .article-link{display:block;overflow:hidden;max-height:46px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media (min-width: 768px){snt-article-link .article-link{max-height:46px}}@media (min-width: 1024px){snt-article-link .article-link{max-height:52px}}";
var ArticleLinkComponent = /** @class */ (function () {
    function ArticleLinkComponent(hostRef) {
        registerInstance(this, hostRef);
        this.hiddenTitle = StringUtils.empty();
    }
    ArticleLinkComponent.prototype.render = function () {
        return (h("a", { href: this.href, "aria-label": this.ariaLabel, "hidden-title": this.hiddenTitle }, h("span", { class: "article-link" }, this.copy)));
    };
    return ArticleLinkComponent;
}());
ArticleLinkComponent.TAG_NAME = "snt-article-link";
ArticleLinkComponent.style = articleLinkComponentCss;
var articleListComponentCss = "snt-article-list .article-list{background-color:#f5f5f5;padding:15px 30px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 768px){snt-article-list .article-list{padding:15px 15px}}snt-article-list .article-list a{text-decoration:none}snt-article-list .article-list a:hover{border:2px solid #147582;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 13px}@media (max-width: 768px){snt-article-list .article-list a:hover{padding:8px}}snt-article-list .article-list a:focus{outline:2px dotted #323232;outline-offset:3px}snt-article-list .article-list a:hover:focus{outline-offset:3px;border:3px solid #147582;padding:15px 12px}@media (max-width: 768px){snt-article-list .article-list a:hover:focus{padding:7px}}snt-article-list .article-list snt-article-link:not(:last-child){margin-bottom:15px}snt-article-list .article-title{font-family:\"Averta-ExtraBold\", sans-serif;font-weight:500;margin-bottom:15px}";
var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(hostRef) {
        registerInstance(this, hostRef);
        this.articlesJson = StringUtils.empty();
        this.articles = [];
        this.heading = StringUtils.empty();
    }
    ArticleListComponent.prototype.componentWillLoad = function () {
        if (StringUtils.hasValue(this.articlesJson)) {
            this.articles = JSON.parse(this.articlesJson).articles;
        }
    };
    ArticleListComponent.prototype.render = function () {
        return (h("div", { class: "article-list" }, StringUtils.hasValue(this.heading)
            ? h("div", { class: "article-title" }, this.heading)
            : null, this.articles.map(function (article) {
            return h("snt-article-link", { copy: article.copy, href: article.href, "aria-label": article.ariaLabel, "hidden-title": article.hiddenTitle });
        })));
    };
    return ArticleListComponent;
}());
ArticleListComponent.TAG_NAME = "snt-article-list";
ArticleListComponent.style = articleListComponentCss;
export { ArticleLinkComponent as snt_article_link, ArticleListComponent as snt_article_list };
