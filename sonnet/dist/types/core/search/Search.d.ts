import { SearchSuggestion } from "./SearchSuggestion";
export declare class Search {
    static result: Array<SearchSuggestion>;
    static getResults(query: string): Array<object>;
}
