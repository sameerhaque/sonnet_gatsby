import { TemplateEvaluator } from "./TemplateEvaluator";
import { Template } from "./Template";
import { Context } from "../../context/Context";
export interface TemplateParser {
    parse(template: Template): TemplateEvaluator;
    parse(template: Template, context: Context<any>): TemplateEvaluator;
}
