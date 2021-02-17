import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { A as AccordionComponent, a as AccordionStateEnum } from './accordion-component-e4a51c50.js';

const accordionGroupComponentCss = ".white-fill snt-accordion-group,snt-accordion-group.white-fill{display:block;background-color:#ffffff}.neutral-fill snt-accordion-group,snt-accordion-group.neutral-fill{display:block;background-color:#f8f8f8}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const AccordionGroupComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.multiExpand = false;
    }
    expandAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}:not([expanded])`);
            children.forEach((child) => {
                child.expand().then(null);
            });
        });
    }
    collapseAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
            children.forEach((child) => {
                child.collapse().then(null);
            });
        });
    }
    addAccordion(accordion) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Add code to inject in position of other accordion
            this.element.appendChild(accordion);
        });
    }
    componentWillRender() {
        if (this.element) {
            if (!this.multiExpand) {
                let numberOfExpandedItems = 0;
                this.element.querySelectorAll("snt-accordion").forEach(c => {
                    if (c.hasAttribute("expanded")) {
                        numberOfExpandedItems++;
                    }
                    if (numberOfExpandedItems >= 2) {
                        c.expanded = false;
                    }
                });
            }
        }
    }
    render() {
        return (h("snt-layout", null, h("slot", null)));
    }
    onAccordionEvent(event) {
        if ((event.detail.state == AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {
            this.collapseSibling(event);
        }
    }
    collapseSibling(event) {
        let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            if (child != event.target) {
                child.collapse().then(null);
            }
        });
    }
    get element() { return getElement(this); }
};
AccordionGroupComponent.TAG_NAME = "snt-accordion-group";
AccordionGroupComponent.style = accordionGroupComponentCss;

export { AccordionGroupComponent as A };
