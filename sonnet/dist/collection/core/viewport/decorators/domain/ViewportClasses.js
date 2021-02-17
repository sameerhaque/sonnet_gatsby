export class ViewportClasses {
    constructor(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    hasClasses() {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    }
    getClasses() {
        return this.includes;
    }
    getExcludedClasses() {
        return this.excludes;
    }
}
