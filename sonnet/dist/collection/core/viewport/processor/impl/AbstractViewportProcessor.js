import { TemplateParserFactory } from "../../../template/TemplateParserFactory";
import { TemplateTypeEnum } from "../../../template/domain/TemplateTypeEnum";
import { Template } from "../../../template/domain/Template";
export class AbstractViewportProcessor {
    constructor() {
    }
    apply(value, context) {
        let template = new Template(TemplateTypeEnum.MUSTACHE, value);
        let parser = TemplateParserFactory.getInstance(template).parse(template);
        return parser.evaluate(context);
    }
}
