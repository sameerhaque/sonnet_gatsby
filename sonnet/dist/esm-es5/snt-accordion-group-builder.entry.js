import { r as registerInstance, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import './accordion-component-e4a51c50.js';
import { A as AccordionComponentBuilder, H as HtmlElementBuilder } from './HtmlElementBuilder-7f4a3396.js';
import { A as AccordionGroupComponent } from './accordion-group-component-37ccdecd.js';
var AccordionGroupBuilder = /** @class */ (function () {
    function AccordionGroupBuilder() {
    }
    AccordionGroupBuilder.newInstance = function () {
        return new AccordionGroupBuilder();
    };
    AccordionGroupBuilder.prototype.withAccordion = function (accordion) {
        this.accordions = this.accordions || new Array();
        this.accordions.push(accordion);
        return this;
    };
    AccordionGroupBuilder.prototype.build = function () {
        var component = document.createElement(AccordionGroupComponent.TAG_NAME);
        if (this.accordions) {
            this.accordions.forEach(function (accordion) {
                component.addAccordion(accordion);
                WebUtils.appendElement(component, accordion, false);
            });
        }
        return component;
    };
    return AccordionGroupBuilder;
}());
var AccordionGroupBuilderComponent = /** @class */ (function () {
    function AccordionGroupBuilderComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    AccordionGroupBuilderComponent.prototype.buildGroups = function () {
        var accordionGroups = document.createDocumentFragment();
        var accordionOne = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        var accordionTwo = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        var accordionGroup = AccordionGroupBuilder.newInstance()
            .withAccordion(accordionOne)
            .withAccordion(accordionTwo)
            .build();
        accordionGroups.appendChild(accordionGroup);
        return accordionGroups;
    };
    AccordionGroupBuilderComponent.prototype.render = function () {
        var _this = this;
        return ([
            h("div", { ref: function (nodeElement) { nodeElement.append(_this.buildGroups()); } })
        ]);
    };
    return AccordionGroupBuilderComponent;
}());
AccordionGroupBuilderComponent.TAG_NAME = "snt-accordion-group-builder";
export { AccordionGroupBuilderComponent as snt_accordion_group_builder };
