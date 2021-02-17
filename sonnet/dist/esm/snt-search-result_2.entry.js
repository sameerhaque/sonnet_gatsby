import { r as registerInstance, h } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const searchResultComponentCss = "snt-search-result .search-result-wrapper{margin-bottom:26px}snt-search-result .search-result-wrapper .description{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;visibility:visible}@media (min-width: 768px){snt-search-result .search-result-wrapper .description{-webkit-line-clamp:1}}snt-search-result .link-content{display:inline;font-size:0.875rem;line-height:21px;margin:0;font-family:\"Averta-ExtraBold\", sans-serif !important;font-weight:500 !important}@media (min-width: 768px){snt-search-result .search-result-wrapper{margin-bottom:30px}}snt-search-result snt-link{display:block;margin-bottom:5px}@media (min-width: 1024px){snt-search-result .link-content{font-size:1rem}}@media (min-width: 1440px){snt-search-result .link-content{font-size:1.313rem;line-height:26px}}";

const SearchResultComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.descriptionText = StringUtils.empty();
    }
    componentWillRender() {
        var elem = document.createElement('p');
        elem.innerHTML = this.searchResult.description;
        this.descriptionText = elem.innerText || "";
    }
    render() {
        const categoryLabel = StringUtils.hasValue(this.searchResult.category) ?
            h("p", null, this.searchResult.category) : null;
        const descriptionText = StringUtils.hasValue(this.searchResult.description) ?
            h("p", { class: "description", innerHTML: this.descriptionText }) : null;
        return (h("div", { class: "search-result-wrapper" }, categoryLabel, h("snt-link", { "class-names": "theme-link theme-action", href: this.searchResult.url }, h("div", { class: "link-content", innerHTML: this.searchResult.title })), descriptionText));
    }
};
SearchResultComponent.style = searchResultComponentCss;

const searchResultListComponentCss = "snt-search-result-list .search-result-list-wrapper snt-layout .spacings{padding:2.5em 1.875em}@media (min-width: 768px){snt-search-result-list .search-result-list-wrapper snt-layout .spacings{padding:2.5em 2.313em}}@media (min-width: 1024px){snt-search-result-list .search-result-list-wrapper snt-layout .spacings{padding:3.75em 4.438em}}@media (min-width: 1440px){snt-search-result-list .search-result-list-wrapper snt-layout .spacings{padding:3.75em 8.438em}}snt-search-result-list .separator snt-search-result .search-result-wrapper{padding-bottom:26px}@media (min-width: 1024px){snt-search-result-list .separator snt-search-result .search-result-wrapper{padding-bottom:30px}}snt-search-result-list .separator snt-search-result:not(:last-child) .search-result-wrapper{border-bottom:1px solid #e5e5e5}snt-search-result-list .separator snt-search-result:last-child .search-result-wrapper{padding-bottom:0px;margin-bottom:0px}snt-search-result-list .separator snt-search-result:last-child .description{margin-bottom:0px}snt-search-result-list snt-search-result:last-child snt-search-result .search-result-wrapper{padding-bottom:0px}snt-search-result-list snt-search-result:last-child snt-search-result .description{margin-bottom:0px}";

const SearchResultListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchResultList = [];
        this.searchResultListJson = StringUtils.empty();
        this.noResultMsg = "No results found";
        this.separator = false;
    }
    render() {
        var content;
        if (StringUtils.hasValue(this.searchResultListJson) && this.searchResultListJson != "[]") {
            this.searchResultList = JSON.parse(this.searchResultListJson);
            content = (h("div", { class: `search-result-list-wrapper ${this.separator ? 'separator' : ''}`, "aria-live": "polite" }, h("snt-layout", null, this.searchResultList.map(faq => (h("snt-search-result", { searchResult: faq }))))));
        }
        else {
            content = (h("snt-layout", null, h("h4", null, this.noResultMsg)));
        }
        return (content);
    }
};
SearchResultListComponent.style = searchResultListComponentCss;

export { SearchResultComponent as snt_search_result, SearchResultListComponent as snt_search_result_list };
