var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class SonnetConnect {
    constructor() {
        this.category = 'all';
    }
    static getInstance() {
        if (!SonnetConnect.instance) {
            SonnetConnect.instance = new SonnetConnect();
        }
        return SonnetConnect.instance;
    }
    initiate() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParams = new URLSearchParams(window.location.search);
            history.replaceState(null, "", `?${urlParams.toString()}#`);
            this.category = urlParams.get(SonnetConnect.filterUrlParam) || 'all';
            yield this.handlePageChange();
            yield this.updateFilterSlider(this.category);
        });
    }
    updateFilterSlider(filterKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filterKey && filterKey !== "") {
                yield customElements.whenDefined("snt-faq-filter-slider");
                const filterSlider = document.querySelector("snt-faq-filter-slider");
                if (filterSlider) {
                    filterSlider.currentActive = filterKey;
                }
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
                const currentFilter = urlParams.get(SonnetConnect.filterUrlParam);
                if (newFilter !== currentFilter) {
                    this.category = newFilter;
                    urlParams.set(SonnetConnect.filterUrlParam, this.category);
                    history.pushState(null, "", `?${urlParams.toString()}#`);
                    yield this.handlePageChange();
                }
            }));
        });
    }
    initiateUrlListener() {
        window.addEventListener('popstate', () => __awaiter(this, void 0, void 0, function* () {
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            let category = urlParams.get(SonnetConnect.filterUrlParam) || 'all';
            if (category !== this.category) {
                this.category = category;
                yield this.handlePageChange();
                yield this.updateFilterSlider(this.category);
            }
        }));
    }
    handlePageChange() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-multi-column-mixed");
            const multiColumnMixedEl = document.querySelector("snt-multi-column-mixed");
            if (multiColumnMixedEl) {
                if (this.category !== "all") {
                    const tilesToHide = multiColumnMixedEl.querySelectorAll(`.column:not([data-category='${this.category}'])`);
                    if (tilesToHide) {
                        tilesToHide.forEach(el => {
                            el.classList.add("d-none");
                        });
                    }
                    const tilesToShow = multiColumnMixedEl.querySelectorAll(`.column[data-category='${this.category}']`);
                    if (tilesToShow) {
                        tilesToShow.forEach(el => {
                            el.classList.remove("d-none");
                        });
                    }
                }
                else {
                    //show all
                    const tiles = multiColumnMixedEl.querySelectorAll('.column');
                    if (tiles) {
                        tiles.forEach(el => {
                            el.classList.remove("d-none");
                        });
                    }
                }
                const viewport = (_a = multiColumnMixedEl.querySelector("snt-layout")) === null || _a === void 0 ? void 0 : _a.getAttribute("viewport");
                if (viewport && viewport !== "") {
                    multiColumnMixedEl.tagLastRow(viewport);
                }
            }
        });
    }
}
SonnetConnect.filterUrlParam = "category";
const instance = SonnetConnect.getInstance();
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    instance.initiate();
    instance.initiateSliderListener();
    instance.initiateUrlListener();
}));
