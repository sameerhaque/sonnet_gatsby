import { ViewportParameter } from "../decorators/domain/ViewportParameter";
import { HeightViewportDimension } from "../domain/HeightViewportDimension";
import { WidthViewportDimension } from "../domain/WidthViewportDimension";
export class ViewportParameterBuilder {
    constructor() { }
    static newInstance() {
        return new ViewportParameterBuilder();
    }
    withWidth(minimum, maximum) {
        this.width = ((minimum || maximum) ? new WidthViewportDimension(minimum, maximum) : null);
        return this;
    }
    withHeight(minimum, maximum) {
        this.height = ((minimum || maximum) ? new HeightViewportDimension(minimum, maximum) : null);
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
    withAttributes(attributes) {
        this.attributes = attributes;
        return this;
    }
    build() {
        return new ViewportParameter(this.width, this.height, this.styles, this.classes, this.attributes);
    }
}
