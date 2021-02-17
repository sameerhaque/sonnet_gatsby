export class ViewportParameter {
    constructor(width, height, styles, classes, attributes) {
        this.width = width;
        this.height = height;
        this.styles = styles;
        this.classes = classes;
        this.attributes = attributes;
    }
    hasStyles() {
        return ((this.styles) && (this.styles.hasStyles()));
    }
    hasClasses() {
        return ((this.classes) && (this.classes.hasClasses()));
    }
    hasAttributes() {
        return ((this.attributes) && (this.attributes.hasAttributes()));
    }
    getClasses() {
        return this.classes;
    }
    getStyles() {
        return this.styles;
    }
    getAttributes() {
        return this.attributes;
    }
    getWidth() {
        return this.width;
    }
    getHeigth() {
        return this.height;
    }
    inRange(width, height) {
        return (((!(this.width)) || (this.width.inRange(width))) && ((!(this.height)) || (this.height.inRange(height))));
    }
}
