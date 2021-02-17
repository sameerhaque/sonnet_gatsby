import { StringUtils } from "../../utils/StringUtils";
import { TemplateEngineContext } from "./TemplateEngineContext";
export class TemplateEngineUtils {
    static generateContext(element) {
        const context = new TemplateEngineContext();
        // Process label for error messages
        if (element.hasAttribute("title")) {
            context.add("label", element.getAttribute("title"));
        }
        else if (element.hasAttribute("id")) {
            const label = document.querySelector("label[for=" + element.id + "]");
            if (label != null) {
                context.add("label", label.textContent);
            }
        }
        // Add all attributes for a DOM element
        for (let i = 0; i < element.attributes.length; i++) {
            context.add(StringUtils.toCamelCase(element[i].name), element[i].value);
        }
        return context;
    }
}
