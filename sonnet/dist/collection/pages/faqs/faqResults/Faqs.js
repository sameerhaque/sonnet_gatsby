export class Faqs {
    static buildFaqCollectionQuery(category, filter = "", languageId = "", page = 1, limit = 10) {
        if (category == undefined || category.trim() == "") {
            throw new Error("category cannot be null!");
        }
        var filterQuery = "";
        if (filter != "" && filter != "all") {
            filterQuery = `+(FAQ.filter:${filter})`;
        }
        var query = `+(FAQ.category:${category}) ${filterQuery} +(languageId: ${languageId}) +deleted:false +working:true`;
        var offset = (page - 1) * limit;
        return `
        {
            FAQCollection(query:\"${query}\", limit: ${limit}, offset: ${offset},
            sortBy: \"modDate\") {
                title: question
                description: answer
                url
            }
        }
        `;
    }
}
