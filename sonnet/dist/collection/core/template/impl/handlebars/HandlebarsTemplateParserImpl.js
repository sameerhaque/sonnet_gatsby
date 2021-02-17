import { HandlebarsTemplateEvaluatorImpl } from "./HandlebarsTemplateEvaluatorImpl";
export class HandlebarsTemplateParserImpl {
    parse(template) {
        return new HandlebarsTemplateEvaluatorImpl(template.value);
    }
}
