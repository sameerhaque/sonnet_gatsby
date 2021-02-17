import { SearchSuggestion } from "./SearchSuggestion";
export class Search {
    static getResults(query) {
        return Search.result.filter((datum) => {
            const substrRegex = new RegExp(query, 'i');
            const isMatch = (substrRegex.test(datum['title']));
            return isMatch === true;
        });
    }
}
Search.result = [
    new SearchSuggestion("Auto Insurance", "/auto-insurance"),
    new SearchSuggestion("Home Insurance", "/home-insurance"),
    new SearchSuggestion("Tenant Insurance", "/tenant-insurance"),
    new SearchSuggestion("Landlord Insurance", "/landlord-insurance"),
    new SearchSuggestion("Claims", "/claims"),
    new SearchSuggestion("Blog", "/blog"),
    new SearchSuggestion("Sonnet Connect", "/sonnet-connect")
];
