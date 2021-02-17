import { PredictiveSearch } from "../predictive-search/PredictiveSearch";
export declare class Header {
    private static instance;
    constructor();
    static getInstance(): Header;
    static predictiveSearch: PredictiveSearch;
    listen(): void;
}
