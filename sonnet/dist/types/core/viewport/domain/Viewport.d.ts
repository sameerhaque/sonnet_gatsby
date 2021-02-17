import { ViewportTypeEnum } from "./ViewportTypeEnum";
import { HeightViewportDimension } from "./HeightViewportDimension";
import { WidthViewportDimension } from "./WidthViewportDimension";
export declare class Viewport {
    type: ViewportTypeEnum;
    classes: Set<string>;
    styles: Set<string>;
    width?: WidthViewportDimension;
    heigth?: HeightViewportDimension;
    constructor(type: ViewportTypeEnum, classes: Set<string>, styles: Set<string>, width?: WidthViewportDimension, heigth?: HeightViewportDimension);
}
