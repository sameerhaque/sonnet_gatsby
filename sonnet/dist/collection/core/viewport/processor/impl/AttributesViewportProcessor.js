import { AbstractViewportProcessor } from "./AbstractViewportProcessor";
export class AttributesViewportProcessor extends AbstractViewportProcessor {
    process(element, parameters, context) {
        parameters.forEach(parameter => {
            if (parameter.hasAttributes()) {
                parameter.getAttributes().getAttributes().forEach((value, name) => {
                    element.setAttribute(name, this.apply(value, context));
                });
                parameter.getAttributes().getExcludedAttributes().forEach(name => element.removeAttribute(this.apply(name, context)));
            }
        });
    }
}
