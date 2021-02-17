import Handlebars from "handlebars";
export class HandlebarsTemplateEvaluatorImpl {
    constructor(template) {
        this.template = template;
    }
    evaluate(context) {
        let template = Handlebars.compile(this.template);
        return template(this.convert(context));
    }
    convert(context) {
        return context.getObject();
    }
}
