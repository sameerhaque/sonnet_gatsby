import { ViewportStyles } from "../decorators/domain/ViewportStyles";
export class ViewportStylesBuilder {
    constructor() {
        this.includes = new Map();
        this.excludes = new Set();
    }
    static newInstance() {
        return new ViewportStylesBuilder();
    }
    with(name, value) {
        this.includes.set(name, value);
        return this;
    }
    remove(name) {
        this.excludes.add(name);
        return this;
    }
    build() {
        return new ViewportStyles(this.includes, this.excludes);
    }
}
