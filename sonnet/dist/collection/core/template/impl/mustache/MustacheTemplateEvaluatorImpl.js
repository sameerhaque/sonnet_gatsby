import Mustache from "mustache";
Mustache.escape = function (value) {
    return value;
};
export class MustacheTemplateEvaluatorImpl {
    constructor(template) {
        this.template = template;
    }
    evaluate(context) {
        let result = Mustache.render(this.template, this.convert(context));
        return result;
    }
    convert(context) {
        return context.getObject();
    }
}
