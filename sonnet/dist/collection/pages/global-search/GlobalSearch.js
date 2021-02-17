var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export class GlobalSearch {
    constructor() {
        this.keywords = "";
        this.filter = 'all';
        this.category = 'all';
        this.pageNum = "1";
        this.totalCount = 0;
        this.totalBlogCount = 0;
    }
    static getInstance() {
        if (!GlobalSearch.instance) {
            GlobalSearch.instance = new GlobalSearch();
        }
        return GlobalSearch.instance;
    }
    initiate() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            this.keywords = urlParams.get(GlobalSearch.searchUrlParam) || "";
            this.filter = urlParams.get(GlobalSearch.filterUrlParam) || GlobalSearch.defaultFilter;
            this.category = urlParams.get(GlobalSearch.categoryUrlParam) || GlobalSearch.defaultCategory;
            this.pageNum = urlParams.get(GlobalSearch.pageUrlParam) || "1";
            this.toggleLeftRail();
            if (this.keywords !== "") {
                this.showResults();
                yield this.populateFilterItems();
                this.setKeywordsInSearchBox(this.keywords);
                if (this.pageNum !== "1") {
                    this.setPaginationPageNum(Number(this.pageNum));
                }
            }
            else {
                this.showSearch();
            }
        });
    }
    initiateSliderListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined('snt-faq-filter-slider');
            document.addEventListener('faqFilterClick', (event) => __awaiter(this, void 0, void 0, function* () {
                if (!('detail' in event))
                    throw new Error('invalid event');
                const newFilter = event.detail;
                let urlParams = new URLSearchParams(window.location.search.slice(1));
                const currentFilter = urlParams.get(GlobalSearch.filterUrlParam);
                if (newFilter !== currentFilter) {
                    this.filter = newFilter;
                    if (this.filter === 'blog') {
                        this.category = GlobalSearch.defaultCategory;
                        urlParams.set(GlobalSearch.categoryUrlParam, this.category);
                        const treeview = document.querySelector("snt-treeview");
                        if (treeview) {
                            treeview.selectNodeByUrlOrKey(this.category);
                        }
                    }
                    urlParams.set(GlobalSearch.filterUrlParam, this.filter);
                    urlParams.delete(GlobalSearch.pageUrlParam);
                    history.pushState(null, "", `?${urlParams.toString()}`);
                    this.pageNum = "1";
                    yield this.handlePageChange();
                    this.toggleLeftRail();
                    this.setPaginationPageNum(Number(this.pageNum));
                }
            }));
        });
    }
    initiatePageChangedListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-pagination");
            document.addEventListener('pageChanged', (evt) => __awaiter(this, void 0, void 0, function* () {
                if (!('detail' in evt))
                    throw new Error('not a custom event');
                const pageNum = evt.detail;
                const urlParams = new URLSearchParams(window.location.search.slice(1));
                if (Number(pageNum) === 1) {
                    urlParams.delete(GlobalSearch.pageUrlParam);
                }
                else {
                    urlParams.set(GlobalSearch.pageUrlParam, pageNum);
                }
                this.pageNum = pageNum;
                this.handlePageChange();
                this.scrollToTop();
                this.focusFirstResult();
                history.pushState(null, "", `?${urlParams.toString()}${window.location.hash}`);
            }));
        });
    }
    initiateTreeViewListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-treeview");
            document.addEventListener('sntChange', (evt) => __awaiter(this, void 0, void 0, function* () {
                if (!('detail' in evt))
                    throw new Error('not a custom event');
                const detail = evt.detail;
                if (detail.node.key !== this.category) {
                    this.category = detail.node.key;
                    this.pageNum = '1';
                    const urlParams = new URLSearchParams(window.location.search.slice(1));
                    urlParams.set(GlobalSearch.categoryUrlParam, this.category);
                    urlParams.delete(GlobalSearch.pageUrlParam);
                    history.pushState(null, "", `?${urlParams.toString()}${window.location.hash}`);
                    this.handlePageChange(false);
                    this.setPaginationPageNum(1);
                }
            }));
        });
    }
    initiateUrlListener() {
        window.addEventListener("popstate", () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            this.pageNum = (_a = urlParams.get(GlobalSearch.pageUrlParam)) !== null && _a !== void 0 ? _a : "1";
            this.filter = (_b = urlParams.get(GlobalSearch.filterUrlParam)) !== null && _b !== void 0 ? _b : GlobalSearch.defaultFilter;
            this.category = (_c = urlParams.get(GlobalSearch.categoryUrlParam)) !== null && _c !== void 0 ? _c : GlobalSearch.defaultCategory;
            this.keywords = (_d = urlParams.get(GlobalSearch.searchUrlParam)) !== null && _d !== void 0 ? _d : "";
            if (this.keywords === '') {
                this.showSearch();
            }
            else {
                this.showResults();
                this.handlePageChange();
                this.updateFilterSlider(this.filter);
                this.toggleLeftRail();
                const treeview = document.querySelector("snt-treeview");
                if (treeview) {
                    treeview.selectNodeByUrlOrKey(this.category);
                }
                this.setPaginationPageNum(Number(this.pageNum));
            }
        }));
    }
    initiateSearchComboboxListener() {
        document.addEventListener("sntSearchSubmitted", (evt) => __awaiter(this, void 0, void 0, function* () {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            this.keywords = evt.detail.keywords;
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            urlParams.set(GlobalSearch.searchUrlParam, this.keywords);
            urlParams.delete(GlobalSearch.pageUrlParam); //defualt page is page1
            history.pushState(null, "", `?${urlParams.toString()}`);
            yield this.handlePageChange();
            this.populateFilterItems();
            this.showResults();
            this.setPaginationPageNum(1);
        }));
    }
    handlePageChange(updateResultsCount = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-search-result-list");
            var faqResults = document.querySelector("snt-search-result-list");
            var urlParams = new URLSearchParams();
            urlParams.set(GlobalSearch.searchUrlParam, this.keywords);
            urlParams.set(GlobalSearch.filterUrlParam, this.filter);
            urlParams.set(GlobalSearch.categoryUrlParam, this.category);
            urlParams.set(GlobalSearch.pageUrlParam, this.pageNum);
            axios.get(`/api/vtl/globalSearchResults?${urlParams.toString()}`)
                .then((response) => __awaiter(this, void 0, void 0, function* () {
                if (response.data.searchResult.items) {
                    //set search results
                    const results = JSON.stringify(response.data.searchResult.items);
                    if (results && results != "") {
                        const faqResultsContainer = document.querySelector(".search-results");
                        const blogCategoryTree = document.querySelector('.blog-category-treeview');
                        if (results === "[]" && faqResultsContainer) {
                            faqResultsContainer.classList.add("no-results");
                            blogCategoryTree.classList.add("no-results");
                        }
                        else {
                            faqResultsContainer.classList.remove("no-results");
                            blogCategoryTree.classList.remove("no-results");
                        }
                        faqResults.setAttribute("search-result-list-json", results);
                    }
                    //set pagination total count
                    if (response.data.searchResult.total !== null || response.data.searchResult.total !== undefined) {
                        const total = response.data.searchResult.total;
                        if (Number(total) && Number(total) > 0) {
                            this.totalCount = total;
                            this.setPaginationTotalPages(Math.ceil(total / 10));
                        }
                        else if (total === 0) {
                            this.totalCount = 0;
                        }
                    }
                    yield customElements.whenDefined("snt-search-result-list");
                    const resultList = document.querySelector("snt-search-result-list");
                    let resultTitle = "";
                    if (resultList) {
                        resultTitle = resultList.getAttribute("data-search-results-title") || "";
                        resultTitle += ` "${this.keywords}"`;
                    }
                    yield this.setResultsTitle(resultTitle);
                    this.togglePagination(this.totalCount);
                    if (updateResultsCount) {
                        if (this.filter === "blog") {
                            yield this.setResultsCount(this.totalBlogCount);
                        }
                        else {
                            yield this.setResultsCount(this.totalCount);
                        }
                    }
                }
            }), () => {
                console.error(`Promise rejected for search keywords "${this.keywords}"`);
            }).catch((error) => {
                console.error(`Error on fetching search results ${error}`);
            });
        });
    }
    scrollToTop() {
        //Temporary woraround to scroll back to top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    focusFirstResult() {
        var firstResult = document.querySelector(".search-result-list-wrapper a:first-child");
        if (firstResult) {
            firstResult.focus();
        }
        else {
            if (document.activeElement) {
                document.activeElement.blur();
            }
        }
    }
    setPaginationPageNum(pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-pagination");
            const paginationEl = document.querySelector("snt-pagination");
            if (paginationEl) {
                if (pageNum > 0) {
                    paginationEl.setPageNumber(pageNum);
                }
            }
        });
    }
    setPaginationTotalPages(totalPages) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-pagination");
            const paginationEl = document.querySelector("snt-pagination");
            if (paginationEl) {
                if (totalPages > 0) {
                    paginationEl.totalPages = totalPages.toString();
                }
            }
        });
    }
    updateFilterSlider(filterKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filterKey && filterKey !== "") {
                yield customElements.whenDefined("snt-faq-filter-slider");
                const filterSlider = document.querySelector("snt-faq-filter-slider");
                filterSlider.currentActive = filterKey;
            }
        });
    }
    setResultsTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-title");
            const titleH1 = document.querySelector(".results-title-section snt-title[title-type='h1']");
            if (titleH1) {
                titleH1.setTitle(title);
                titleH1.clampTitle();
            }
        });
    }
    setResultsCount(count) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-search-result-list");
            const resultsCount = document.querySelector(".results-count");
            if (resultsCount) {
                resultsCount.innerHTML = count.toString();
            }
        });
    }
    togglePagination(count) {
        const paginationEl = document.querySelector("snt-pagination");
        if (count > 0) {
            paginationEl.classList.remove('d-none');
        }
        else {
            paginationEl.classList.add('d-none');
        }
    }
    setKeywordsInSearchBox(keywords) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-search-combobox");
            const input = document.querySelector('.search-combobox-section snt-search-combobox input');
            if (input) {
                input.value = keywords;
            }
        });
    }
    toggleLeftRail() {
        const searchResultsEl = document.querySelector('.search-results');
        const blogCategoryTree = document.querySelector('.blog-category-treeview');
        if (this.filter !== 'blog' && this.filter !== '') {
            searchResultsEl === null || searchResultsEl === void 0 ? void 0 : searchResultsEl.classList.remove('blog-results');
            blogCategoryTree === null || blogCategoryTree === void 0 ? void 0 : blogCategoryTree.classList.add('d-none');
        }
        else {
            searchResultsEl === null || searchResultsEl === void 0 ? void 0 : searchResultsEl.classList.add('blog-results');
            blogCategoryTree === null || blogCategoryTree === void 0 ? void 0 : blogCategoryTree.classList.remove('d-none');
        }
    }
    populateFilterItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            yield customElements.whenDefined('snt-faq-filter-slider');
            yield customElements.whenDefined('snt-treeview');
            const treeview = document.querySelector("snt-treeview");
            const filterSlider = document.querySelector('snt-faq-filter-slider');
            const treeContentId = treeview.getAttribute('data-content-id');
            if (this.keywords == '') {
                filterSlider.filterItems = '[]';
                return;
            }
            const responseFilterItems = axios.get(`/api/vtl/globalSearchFilterItems?es=${this.keywords}&treeviewId=${treeContentId}`)
                .then((response) => {
                filterSlider.filterItems = response.data.filters;
                treeview.updateTreeView(JSON.stringify(response.data.blogCategories));
                if (response.data.blogCategories.items && !isNaN(response.data.blogCategories.items[0].count)) {
                    this.totalBlogCount = response.data.blogCategories.items[0].count;
                }
            }, () => {
                console.error(`Promise rejected for search keywords "${this.keywords}"`);
            }).catch((error) => {
                console.error(`Error on fetching search results ${error}`);
            });
            urlParams.set(GlobalSearch.filterUrlParam, this.filter);
            urlParams.set(GlobalSearch.categoryUrlParam, this.category);
            urlParams.set(GlobalSearch.pageUrlParam, this.pageNum);
            history.replaceState(null, "", `?${urlParams.toString()}`);
            yield responseFilterItems;
            this.handlePageChange();
            if (this.filter !== GlobalSearch.defaultFilter) {
                this.updateFilterSlider(this.filter);
            }
            if (this.filter === 'blog') {
                if (treeview) {
                    treeview.selectNodeByUrlOrKey(this.category);
                }
            }
        });
    }
    showSearch() {
        var _a, _b, _c, _d, _e, _f;
        (_a = document.querySelector('.search-title-section')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
        (_b = document.querySelector('.search-combobox-section')) === null || _b === void 0 ? void 0 : _b.classList.remove('results-section');
        (_c = document.querySelector('.results-title-section')) === null || _c === void 0 ? void 0 : _c.classList.add('d-none');
        (_d = document.querySelector('.search-results')) === null || _d === void 0 ? void 0 : _d.classList.add('d-none');
        (_e = document.querySelector('.results-filter-section')) === null || _e === void 0 ? void 0 : _e.classList.add('d-none');
        (_f = document.querySelector('.snt-search-results-count')) === null || _f === void 0 ? void 0 : _f.classList.add('d-none');
    }
    showResults() {
        var _a, _b, _c, _d, _e, _f;
        (_a = document.querySelector('.search-title-section')) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
        (_b = document.querySelector('.search-combobox-section')) === null || _b === void 0 ? void 0 : _b.classList.add('results-section');
        (_c = document.querySelector('.results-title-section')) === null || _c === void 0 ? void 0 : _c.classList.remove('d-none');
        (_d = document.querySelector('.search-results')) === null || _d === void 0 ? void 0 : _d.classList.remove('d-none');
        (_e = document.querySelector('.results-filter-section')) === null || _e === void 0 ? void 0 : _e.classList.remove('d-none');
        (_f = document.querySelector('.snt-search-results-count')) === null || _f === void 0 ? void 0 : _f.classList.remove('d-none');
    }
}
GlobalSearch.searchUrlParam = "es";
GlobalSearch.filterUrlParam = 'filter';
GlobalSearch.categoryUrlParam = "category";
GlobalSearch.pageUrlParam = 'page';
GlobalSearch.defaultFilter = 'all';
GlobalSearch.defaultCategory = 'all';
const instance = GlobalSearch.getInstance();
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    instance.initiate();
    instance.initiateSliderListener();
    instance.initiatePageChangedListener();
    instance.initiateUrlListener();
    instance.initiateTreeViewListener();
    instance.initiateSearchComboboxListener();
}));
