import { Context } from "../../context/Context";
export interface TemplateEvaluator {
    evaluate(context: Context<any>): string;
}
