import { Template } from "./domain/Template";
import { TemplateParser } from "./domain/TemplateParser";
export declare class TemplateParserFactory {
    static getInstance(template: Template): TemplateParser;
}
