export class ViewportAttributes {
    constructor(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    hasAttributes() {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    }
    getAttributes() {
        return this.includes;
    }
    getExcludedAttributes() {
        return this.excludes;
    }
}
