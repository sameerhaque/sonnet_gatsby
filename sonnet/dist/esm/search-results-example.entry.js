import { r as registerInstance, h } from './index-79f6678c.js';

const SearchResultsExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var searchResultListJSON = `[
            {\"title\":\"Question 1?\",\"description\":\"We ask you a few key questions to access public information about the place you’re renting along with personal information you provide to determine your rate. The information we use includes:<ul><li>Where your rental is located</li><li>Home structure, age, type of heating, etc.</li></ul>Using this information and a whole lot of math and statistics, you get the most competitive price – savings included. The whole process takes just 5 minutes and the price you’re quoted is final. Buy online right away or save your quote and lock in your price for 45 days or until the coverage start date (whichever is sooner).\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"title\":\"Question 2?\",\"description\":\"This is answer 2\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"title\":\"Question 3?\",\"description\":\"This is answer 3\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"title\":\"Question 4?\",\"description\":\"This is answer 4\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"title\":\"Question 5?\",\"description\":\"This is answer 5\",\"url\":\"https:\/\/www.sonnet.ca\"}
        ]`;
        var searchResultCategoryListJSON = `[
            {\"category\":\"Home Insurance\",\"title\":\"Home Insurance Questions\",\"description\":\"This is the description for home insurance\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"category\":\"Auto Insurance\",\"title\":\"Auto Insurance Questions\",\"description\":\"This is the description for auto insurance\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"category\":\"Auto Insurance\",\"title\":\"No Description\",\"url\":\"https:\/\/www.sonnet.ca\"},
            {\"category\":\"Auto Insurance\",\"title\":\"Auto Insurance Questions\",\"description\":\"This is the description for auto insurance\",\"url\":\"https:\/\/www.sonnet.ca\"}
        ]`;
        return [
            h("h3", null, "'Search results' with JSON string"),
            h("snt-search-result-list", { searchResultListJson: searchResultListJSON }),
            h("h3", null, "'Search results' with categories and separator"),
            h("snt-search-result-list", { separator: true, searchResultListJson: searchResultCategoryListJSON }),
        ];
    }
};

export { SearchResultsExample as search_results_example };
