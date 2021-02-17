import { ViewportProcessorTypeEnum } from "./domain/ViewportProcessorTypeEnum";
import { StylesViewportProcessor } from "./impl/StylesViewportProcessor";
import { AttributesViewportProcessor } from "./impl/AttributesViewportProcessor";
import { ClassesViewportProcessor } from "./impl/ClassesViewportProcessor";
export class ViewportProcessorFactory {
    static getInstance(type) {
        switch (type) {
            case ViewportProcessorTypeEnum.STYLES:
                return new StylesViewportProcessor();
            case ViewportProcessorTypeEnum.ATTRIBUTES:
                return new AttributesViewportProcessor();
            case ViewportProcessorTypeEnum.CLASSES:
                return new ClassesViewportProcessor();
            default:
                throw new Error(`Unable to locate an viewport processor for ${type}`);
        }
    }
}
