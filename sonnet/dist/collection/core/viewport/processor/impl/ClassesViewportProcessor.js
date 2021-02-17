import { AbstractViewportProcessor } from "./AbstractViewportProcessor";
export class ClassesViewportProcessor extends AbstractViewportProcessor {
    process(element, parameters, context) {
        parameters.forEach(parameter => {
            if (parameter.hasClasses()) {
                parameter.getClasses().getClasses().forEach(value => {
                    element.classList.add(this.apply(value, context));
                });
                parameter.getClasses().getExcludedClasses().forEach(value => element.classList.remove(this.apply(value, context)));
            }
        });
    }
}
