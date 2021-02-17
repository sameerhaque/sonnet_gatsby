import { TemplateEvaluator } from "../../domain/TemplateEvaluator";
import { Context } from "../../../context/Context";
export declare class MustacheTemplateEvaluatorImpl implements TemplateEvaluator {
    private readonly template;
    constructor(template: string);
    evaluate(context: Context<any>): any;
    private convert;
}
