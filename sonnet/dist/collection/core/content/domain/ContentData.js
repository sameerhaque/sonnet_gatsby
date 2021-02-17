export class ContentData {
    constructor(type, lazy = true, url, content) {
        this.type = type;
        this.lazy = lazy;
        this.url = url;
        this.content = content;
    }
}
