import { ViewportProcessorTypeEnum } from "./domain/ViewportProcessorTypeEnum";
import { ViewportProcessor } from "./ViewportProcessor";
export declare class ViewportProcessorFactory {
    static getInstance(type: ViewportProcessorTypeEnum): ViewportProcessor;
}
