import { StringUtils } from './StringUtils';
import Sqrl from 'squirrelly';
export class TemplateService {
    static generateContextForElement(element) {
        var _context = {};
        // Process label for error messages
        if (element.hasAttribute("title")) {
            _context["label"] = element.getAttribute("title");
        }
        else if (element.hasAttribute("id")) {
            var _label = document.querySelector("label[for=" + element.id + "]");
            if (_label !== null) {
                _context["label"] = _label.textContent;
            }
        }
        // Add all attributes for a DOM element
        Array.from(element.attributes).forEach(function (attribute) {
            _context[StringUtils.toCamelCase(attribute.name)] = attribute.value;
        });
        return _context;
    }
    static process(template, context) {
        var _isTemplate = template.includes("<%");
        return (_isTemplate ? Sqrl.render(template, context, Sqrl.getConfig({ tags: ["<%", "%>"] })) : template);
    }
}
