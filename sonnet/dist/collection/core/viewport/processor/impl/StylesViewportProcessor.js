import { AbstractViewportProcessor } from "./AbstractViewportProcessor";
export class StylesViewportProcessor extends AbstractViewportProcessor {
    process(element, parameters, context) {
        parameters.forEach(parameter => {
            if (parameter.hasStyles()) {
                parameter.getStyles().getStyles().forEach((value, name) => {
                    element.style[name] = this.apply(value, context);
                });
                parameter.getStyles().getExcludedStyles().forEach(name => element.style.removeProperty(this.apply(name, context)));
            }
        });
    }
}
