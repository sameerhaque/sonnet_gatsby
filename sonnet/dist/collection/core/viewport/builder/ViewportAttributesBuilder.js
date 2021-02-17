import { ViewportAttributes } from "../decorators/domain/ViewportAttributes";
export class ViewportAttributesBuilder {
    constructor() {
        this.includes = new Map();
        this.excludes = new Set();
    }
    static newInstance() {
        return new ViewportAttributesBuilder();
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
        return new ViewportAttributes(this.includes, this.excludes);
    }
}
