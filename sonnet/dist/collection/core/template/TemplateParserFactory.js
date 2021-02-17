import { TemplateTypeEnum } from "./domain/TemplateTypeEnum";
import { MustacheTemplateParserImpl } from "./impl/mustache/MustacheTemplateParserImpl";
export class TemplateParserFactory {
    static getInstance(template) {
        switch (template.type) {
            case TemplateTypeEnum.MUSTACHE:
                return new MustacheTemplateParserImpl();
            case TemplateTypeEnum.HANDLEBARS:
                return new MustacheTemplateParserImpl();
            default:
                throw new Error(`Unable to locate an expression parser for ${template.type}`);
        }
    }
}
