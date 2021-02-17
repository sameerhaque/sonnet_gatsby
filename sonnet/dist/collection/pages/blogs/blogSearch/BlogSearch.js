import axios from 'axios';
export class BlogSearch {
    static search(languageId, category, resultSize = 8, page = 1) {
        const query = this.buildSearchQuery(category, languageId, page, resultSize);
        return axios.post('/api/v1/graphql', { query }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    static buildSearchQuery(category, languageId = "", page = 1, limit = 8) {
        let categoryQuery = "";
        if (category.trim() !== "" && category !== undefined && category !== 'all') {
            categoryQuery = `+(Blog.category:${category})`;
        }
        let query = `${categoryQuery} +(languageId: ${languageId})`;
        let offset = page === 1 ? 0 : 8 + (page - 2) * limit;
        return `
        {
            blogCollection(query:\"${query}\", limit: ${limit}, offset: ${offset},
            sortBy: \"Blog.publish desc\") {
                headline
                url
                timeToRead
                category {
                    key
                }
                image {
                    titleImage {
                        versionPath
                    }
                }
            }
        }
        `;
    }
}
