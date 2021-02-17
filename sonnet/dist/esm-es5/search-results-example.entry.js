import { r as registerInstance, h } from './index-79f6678c.js';
var SearchResultsExample = /** @class */ (function () {
    function SearchResultsExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SearchResultsExample.prototype.render = function () {
        var searchResultListJSON = "[\n            {\"title\":\"Question 1?\",\"description\":\"We ask you a few key questions to access public information about the place you\u2019re renting along with personal information you provide to determine your rate. The information we use includes:<ul><li>Where your rental is located</li><li>Home structure, age, type of heating, etc.</li></ul>Using this information and a whole lot of math and statistics, you get the most competitive price \u2013 savings included. The whole process takes just 5 minutes and the price you\u2019re quoted is final. Buy online right away or save your quote and lock in your price for 45 days or until the coverage start date (whichever is sooner).\",\"url\":\"https://www.sonnet.ca\"},\n            {\"title\":\"Question 2?\",\"description\":\"This is answer 2\",\"url\":\"https://www.sonnet.ca\"},\n            {\"title\":\"Question 3?\",\"description\":\"This is answer 3\",\"url\":\"https://www.sonnet.ca\"},\n            {\"title\":\"Question 4?\",\"description\":\"This is answer 4\",\"url\":\"https://www.sonnet.ca\"},\n            {\"title\":\"Question 5?\",\"description\":\"This is answer 5\",\"url\":\"https://www.sonnet.ca\"}\n        ]";
        var searchResultCategoryListJSON = "[\n            {\"category\":\"Home Insurance\",\"title\":\"Home Insurance Questions\",\"description\":\"This is the description for home insurance\",\"url\":\"https://www.sonnet.ca\"},\n            {\"category\":\"Auto Insurance\",\"title\":\"Auto Insurance Questions\",\"description\":\"This is the description for auto insurance\",\"url\":\"https://www.sonnet.ca\"},\n            {\"category\":\"Auto Insurance\",\"title\":\"No Description\",\"url\":\"https://www.sonnet.ca\"},\n            {\"category\":\"Auto Insurance\",\"title\":\"Auto Insurance Questions\",\"description\":\"This is the description for auto insurance\",\"url\":\"https://www.sonnet.ca\"}\n        ]";
        return [
            h("h3", null, "'Search results' with JSON string"),
            h("snt-search-result-list", { searchResultListJson: searchResultListJSON }),
            h("h3", null, "'Search results' with categories and separator"),
            h("snt-search-result-list", { separator: true, searchResultListJson: searchResultCategoryListJSON }),
        ];
    };
    return SearchResultsExample;
}());
export { SearchResultsExample as search_results_example };
