import { ViewportParameter } from "../decorators/domain/ViewportParameter";
import { ViewportStyles } from "../decorators/domain/ViewportStyles";
import { ViewportClasses } from "../decorators/domain/ViewportClasses";
import { ViewportAttributes } from "../decorators/domain/ViewportAttributes";
export declare class ViewportParameterBuilder {
    private height;
    private width;
    private styles;
    private classes;
    private attributes;
    private constructor();
    static newInstance(): ViewportParameterBuilder;
    withWidth(minimum?: number, maximum?: number): this;
    withHeight(minimum?: number, maximum?: number): this;
    withStyles(styles: ViewportStyles): ViewportParameterBuilder;
    withClasses(classes: ViewportClasses): ViewportParameterBuilder;
    withAttributes(attributes: ViewportAttributes): ViewportParameterBuilder;
    build(): ViewportParameter;
}
