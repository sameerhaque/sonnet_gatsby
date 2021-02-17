import { ViewportProcessor } from "../ViewportProcessor";
import { Context } from "../../../context/Context";
import { ViewportParameter } from "../../decorators/domain/ViewportParameter";
export declare abstract class AbstractViewportProcessor implements ViewportProcessor {
    constructor();
    abstract process(element: HTMLElement, parameters: Array<ViewportParameter>, context: Context<any>): void;
    protected apply(value: string, context: Context<any>): string;
}
