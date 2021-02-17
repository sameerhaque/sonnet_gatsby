import { AxiosResponse } from 'axios';
import { SearchSuggestion } from '../../core/search/SearchSuggestion';
import { ContentTypes } from '../../core/dotcms/content/ContentTypes';
export declare enum SearchType {
    Global = "global",
    FAQ = "faq"
}
export declare class PredictiveSearch {
    private static instance;
    private static _elementIds;
    static get elementIds(): Map<string, SearchType>;
    private constructor();
    static readonly globalSearchContentTypes: ContentTypes[];
    static readonly faqSearchContentTypes: ContentTypes[];
    static getInstance(): PredictiveSearch;
    register(elementId: string, searchType: SearchType): void;
    static getSearchSuggestions(keywords: string, contentTypes: string[], languageId?: string, resultSize?: number, page?: number): Promise<Array<SearchSuggestion>>;
    static getSearchResults(keywords: string, contentTypes: string[], languageId?: string, resultSize?: number, page?: number): Promise<any>;
    static searchByKeywords(keywords: string, contentTypes: string[], languageId?: string, resultSize?: number, page?: number): Promise<AxiosResponse<any>>;
    static buildSearchQuery(keywords: string, contentTypes: string[], languageId?: string, resultSize?: number, page?: number): string;
}
