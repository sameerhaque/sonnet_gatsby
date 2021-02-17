import { Context } from "../../context/Context";
import { ViewportParameter } from "../decorators/domain/ViewportParameter";
export interface ViewportProcessor {
    process(element: HTMLElement, parameters: Array<ViewportParameter>, context: Context<any>): void;
}
