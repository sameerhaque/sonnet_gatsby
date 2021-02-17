import { r as registerInstance, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import './WebUtils-eeb89633.js';
import './accordion-component-e4a51c50.js';
import { A as AccordionComponentBuilder, H as HtmlElementBuilder } from './HtmlElementBuilder-7f4a3396.js';
var AccordionBuilderComponent = /** @class */ (function () {
    function AccordionBuilderComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    AccordionBuilderComponent.prototype.buildAccordions = function () {
        var accordions = document.createDocumentFragment();
        var accordion = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        accordions.appendChild(accordion);
        return accordions;
    };
    AccordionBuilderComponent.prototype.render = function () {
        var _this = this;
        return ([
            h("div", { ref: function (nodeElement) { nodeElement.append(_this.buildAccordions()); } })
        ]);
    };
    return AccordionBuilderComponent;
}());
AccordionBuilderComponent.TAG_NAME = "snt-accordion-builder";
export { AccordionBuilderComponent as snt_accordion_builder };
