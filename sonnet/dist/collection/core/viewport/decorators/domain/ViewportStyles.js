export class ViewportStyles {
    constructor(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    hasStyles() {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    }
    getStyles() {
        return this.includes;
    }
    getExcludedStyles() {
        return this.excludes;
    }
}
