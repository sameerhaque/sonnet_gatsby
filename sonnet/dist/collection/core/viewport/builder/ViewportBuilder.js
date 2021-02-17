import { Viewport } from "../domain/Viewport";
export class ViewportBuilder {
    constructor() {
    }
    static newInstanceof() {
        return new ViewportBuilder();
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withStyles(styles) {
        this.styles = styles;
        return this;
    }
    withClasses(classes) {
        this.classes = classes;
        return this;
    }
    withWidth(width) {
        this.width = width;
        return this;
    }
    withHeight(height) {
        this.height = height;
        return this;
    }
    build() {
        // TODO: Add checks for non optional values
        return new Viewport(this.type, this.classes, this.styles, this.width, this.height);
    }
}
