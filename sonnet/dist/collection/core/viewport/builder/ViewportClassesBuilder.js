import { ViewportClasses } from "../decorators/domain/ViewportClasses";
export class ViewportClassesBuilder {
    constructor() {
        this.includes = new Set();
        this.excludes = new Set();
    }
    static newInstance() {
        return new ViewportClassesBuilder();
    }
    with(names) {
        names.forEach((name) => this.includes.add(name));
        return this;
    }
    remove(names) {
        names.forEach((name) => this.excludes.add(name));
        return this;
    }
    build() {
        return new ViewportClasses(this.includes, this.excludes);
    }
}
