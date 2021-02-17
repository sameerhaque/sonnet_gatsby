export declare class SearchComboboxExample {
    static getSearchSuggestions(keywords: string): {
        title: string;
        question: string;
        answer: string;
        faqUrl: string;
    }[];
    render(): any;
}
declare global {
    interface Window {
        SearchComboboxExample: any;
    }
}
