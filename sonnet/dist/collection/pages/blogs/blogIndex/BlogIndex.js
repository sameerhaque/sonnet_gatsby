var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { LanguageUtils } from '../../../core/utils/LanguageUtils';
import { BlogSearch } from '../blogSearch/BlogSearch';
export class BlogIndex {
    constructor() {
        this.page = 1;
        this.category = 'all';
    }
    static getInstance() {
        if (!BlogIndex.instance) {
            BlogIndex.instance = new BlogIndex();
        }
        return BlogIndex.instance;
    }
    getPage() {
        return this.page;
    }
    initiate() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            history.replaceState(null, "", `?${urlParams.toString()}#`);
            this.category = yield this.getSelectedCategory();
            BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category)
                .then((results) => __awaiter(this, void 0, void 0, function* () {
                const resultJson = yield Promise.all(results.data.data.blogCollection.map((blog) => __awaiter(this, void 0, void 0, function* () {
                    return yield this.buildBlog(blog);
                })));
                yield customElements.whenDefined('snt-blog-results');
                const blogResultsEl = document.querySelector('snt-blog-results');
                blogResultsEl.blogResultsString = JSON.stringify(resultJson);
                yield this.updateFilterSlider(this.category);
            }))
                .catch((error) => {
                console.log('error:', error);
            });
        });
    }
    initiateMoreArticleListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined('button-link');
            const moreArticlesEl = document.querySelector('button-link[button-id="more-articles-btn"]');
            moreArticlesEl === null || moreArticlesEl === void 0 ? void 0 : moreArticlesEl.addEventListener('linkEvent', (evt) => {
                if (evt.detail.type === 'click') {
                    this.onMoreArticlesClick();
                }
            });
        });
    }
    initiateSliderListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined('snt-faq-filter-slider');
            const sliderEl = document.querySelector('snt-faq-filter-slider');
            sliderEl === null || sliderEl === void 0 ? void 0 : sliderEl.addEventListener('faqFilterClick', (event) => __awaiter(this, void 0, void 0, function* () {
                if (!('detail' in event))
                    throw new Error('invalid event');
                const detail = event.detail;
                let urlParams = new URLSearchParams(window.location.search.slice(1));
                const currentFilter = urlParams.get(BlogIndex.filterUrlParam);
                if (detail !== currentFilter) {
                    this.category = detail;
                    urlParams.set(BlogIndex.filterUrlParam, this.category);
                    history.pushState(null, "", `?${urlParams.toString()}#`);
                    yield this.handlePageChange();
                }
            }));
        });
    }
    initiateUrlListener() {
        window.addEventListener('popstate', () => __awaiter(this, void 0, void 0, function* () {
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            let category = urlParams.get(BlogIndex.filterUrlParam) || 'all';
            if (category !== this.category) {
                this.category = category;
                yield this.handlePageChange();
                yield this.updateFilterSlider(this.category);
            }
        }));
    }
    handlePageChange() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined('snt-blog-results');
            const blogResultsEl = document.querySelector('snt-blog-results');
            blogResultsEl.blogResultsString = '[]';
            BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category)
                .then((results) => __awaiter(this, void 0, void 0, function* () {
                this.page = 1;
                const resultJson = yield Promise.all(results.data.data.blogCollection.map((blog) => __awaiter(this, void 0, void 0, function* () {
                    return yield this.buildBlog(blog);
                })));
                blogResultsEl.blogResultsString = JSON.stringify(resultJson);
                this.showMoreArticlesButton();
            }));
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
    onMoreArticlesClick() {
        this.page += 1;
        BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category, 9, this.page)
            .then((results) => __awaiter(this, void 0, void 0, function* () {
            if (results.data.data.blogCollection.length === 0) {
                this.showComeBackButton();
            }
            else {
                const resultJson = yield Promise.all(results.data.data.blogCollection.map((blog) => __awaiter(this, void 0, void 0, function* () {
                    return yield this.buildBlog(blog);
                })));
                yield customElements.whenDefined('snt-blog-results');
                const blogResultsEl = document.querySelector('snt-blog-results');
                const lastColumn = blogResultsEl.querySelector('snt-multi-column-mixed:last-child .column:last-child a');
                if (lastColumn) {
                    lastColumn.focus();
                }
                let blogResult = JSON.parse(blogResultsEl.blogResultsString);
                blogResult = blogResult.concat(resultJson);
                blogResultsEl.blogResultsString = JSON.stringify(blogResult);
            }
        }))
            .catch((error) => {
            console.log('error:', error);
        });
    }
    showComeBackButton() {
        const moreArticlesEl = document.querySelector('button-link-group[id="more-articles-btn-group"]');
        moreArticlesEl === null || moreArticlesEl === void 0 ? void 0 : moreArticlesEl.classList.add('d-none');
        const comeBackEl = document.querySelector('button-link-group[id="please-check-back-btn-group"]');
        comeBackEl === null || comeBackEl === void 0 ? void 0 : comeBackEl.classList.remove('d-none');
    }
    showMoreArticlesButton() {
        const moreArticlesEl = document.querySelector('button-link-group[id="more-articles-btn-group"]');
        moreArticlesEl === null || moreArticlesEl === void 0 ? void 0 : moreArticlesEl.classList.remove('d-none');
        const comeBackEl = document.querySelector('button-link-group[id="please-check-back-btn-group"]');
        comeBackEl === null || comeBackEl === void 0 ? void 0 : comeBackEl.classList.add('d-none');
    }
    buildBlog(blog) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined('snt-data');
            const dataEl = document.querySelector('snt-data#category-translations');
            const translationData = yield dataEl.getData();
            return {
                imageSource: blog.image ? blog.image.titleImage.versionPath : '',
                titleText: blog.headline,
                tagText: translationData[blog.category[0].key],
                timeToRead: blog.timeToRead,
                blogLink: blog.url
            };
        });
    }
    getSelectedCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            let category;
            const urlParams = new URLSearchParams(window.location.search);
            const queryCategory = urlParams.get(BlogIndex.filterUrlParam);
            const pathname = window.location.pathname;
            if (queryCategory) {
                return queryCategory;
            }
            yield axios.get('/api/vtl/categoryFilters').then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.data.categories) {
                    category = result.data.categories.find((cat) => cat.url === pathname);
                }
            }));
            return category ? category.category : 'all';
        });
    }
}
BlogIndex.filterUrlParam = 'category';
const blogIndex = BlogIndex.getInstance();
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    yield blogIndex.initiate();
    blogIndex.initiateMoreArticleListener();
    blogIndex.initiateSliderListener();
    blogIndex.initiateUrlListener();
}), false);
