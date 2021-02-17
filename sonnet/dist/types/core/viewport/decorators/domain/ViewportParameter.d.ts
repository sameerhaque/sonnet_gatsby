import { ViewportStyles } from "./ViewportStyles";
import { ViewportClasses } from "./ViewportClasses";
import { ViewportAttributes } from "./ViewportAttributes";
import { WidthViewportDimension } from "../../domain/WidthViewportDimension";
import { HeightViewportDimension } from "../../domain/HeightViewportDimension";
export declare class ViewportParameter {
    private readonly width?;
    private readonly height?;
    private readonly styles?;
    private readonly classes?;
    private readonly attributes?;
    constructor(width?: WidthViewportDimension, height?: HeightViewportDimension, styles?: ViewportStyles, classes?: ViewportClasses, attributes?: ViewportAttributes);
    hasStyles(): boolean;
    hasClasses(): boolean;
    hasAttributes(): boolean;
    getClasses(): ViewportClasses;
    getStyles(): ViewportStyles;
    getAttributes(): ViewportAttributes;
    getWidth(): WidthViewportDimension;
    getHeigth(): HeightViewportDimension;
    inRange(width: number, height: number): boolean;
}
