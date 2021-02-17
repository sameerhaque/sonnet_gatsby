var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LanguageUtils } from "../../core/utils/LanguageUtils";
import { PredictiveSearch, SearchType } from "../predictive-search/PredictiveSearch";
export class Header {
    constructor() { }
    static getInstance() {
        if (!Header.instance) {
            Header.instance = new Header();
        }
        return Header.instance;
    }
    listen() {
        document.addEventListener('sntInput', (event) => __awaiter(this, void 0, void 0, function* () {
            if (!('detail' in event)) {
                throw new Error('not a custom event');
            }
            event = event;
            const el = event.target;
            if (el && el.tagName === 'SNT-SEARCH-COMBOBOX' && PredictiveSearch.elementIds.has(el.id)) {
                let contentTypes = [];
                switch (PredictiveSearch.elementIds.get(el.id)) {
                    case SearchType.Global:
                        contentTypes = PredictiveSearch.globalSearchContentTypes;
                        break;
                    case SearchType.FAQ:
                        contentTypes = PredictiveSearch.faqSearchContentTypes;
                        break;
                }
                const result = yield PredictiveSearch.getSearchSuggestions(el.value, contentTypes, LanguageUtils.isFrench()
                    ? LanguageUtils.LANGUAGE_ID.fr
                    : LanguageUtils.LANGUAGE_ID.en, 10);
                el.setSearchSuggestions(result);
            }
        }));
    }
}
Header.predictiveSearch = PredictiveSearch.getInstance();
const instance = Header.getInstance();
instance.listen();
Header.predictiveSearch.register('combobox-search', SearchType.FAQ);
