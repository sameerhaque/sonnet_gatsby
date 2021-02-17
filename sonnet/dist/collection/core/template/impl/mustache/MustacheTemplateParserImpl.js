import { MustacheTemplateEvaluatorImpl } from "./MustacheTemplateEvaluatorImpl";
export class MustacheTemplateParserImpl {
    parse(template) {
        return new MustacheTemplateEvaluatorImpl(template.value);
    }
}
