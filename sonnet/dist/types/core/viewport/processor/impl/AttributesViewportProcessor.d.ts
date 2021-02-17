import { Context } from "../../../context/Context";
import { AbstractViewportProcessor } from "./AbstractViewportProcessor";
import { ViewportParameter } from "../../decorators/domain/ViewportParameter";
export declare class AttributesViewportProcessor extends AbstractViewportProcessor {
    process(element: HTMLElement, parameters: Array<ViewportParameter>, context: Context<any>): void;
}
