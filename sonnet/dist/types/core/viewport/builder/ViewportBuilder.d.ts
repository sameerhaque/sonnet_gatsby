import { ViewportTypeEnum } from "../domain/ViewportTypeEnum";
import { Viewport } from "../domain/Viewport";
import { WidthViewportDimension } from "../domain/WidthViewportDimension";
import { HeightViewportDimension } from "../domain/HeightViewportDimension";
export declare class ViewportBuilder {
    private type;
    private styles?;
    private classes?;
    private width?;
    private height?;
    private constructor();
    static newInstanceof(): ViewportBuilder;
    withType(type: ViewportTypeEnum): ViewportBuilder;
    withStyles(styles: Set<string>): ViewportBuilder;
    withClasses(classes: Set<string>): ViewportBuilder;
    withWidth(width: WidthViewportDimension): ViewportBuilder;
    withHeight(height: HeightViewportDimension): ViewportBuilder;
    build(): Viewport;
}
