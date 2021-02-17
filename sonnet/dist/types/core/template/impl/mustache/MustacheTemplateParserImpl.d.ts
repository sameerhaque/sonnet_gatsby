import { TemplateParser } from "../../domain/TemplateParser";
import { Template } from "../../domain/Template";
import { TemplateEvaluator } from "../../domain/TemplateEvaluator";
export declare class MustacheTemplateParserImpl implements TemplateParser {
    parse(template: Template): TemplateEvaluator;
}
