var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Host, Element, Prop, h, Method, Watch, Event } from "@stencil/core";
import { AccordionStateEnum } from "./domain/AccordionStateEnum";
import { WebUtils } from "../../core/utils/WebUtils";
import { AccordionEvent } from "./domain/AccordionEvent";
export class AccordionComponent {
    constructor() {
        this.expanded = false;
    }
    isCollapsed() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(!this.expanded);
        });
    }
    isExpanded() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.expanded);
        });
    }
    collapse() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = false;
        });
    }
    expand() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = true;
        });
    }
    toggle() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.expanded) {
                this.collapse();
            }
            else {
                this.expand();
            }
        });
    }
    /** TODO: Annotate this function **/
    transition(transitionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const panel = this.element.querySelector(AccordionComponent.CARD_PANEL);
            panel.classList.add(AccordionComponent.TRANSITIONING_CLASS_NAME);
            if (transitionType == AccordionStateEnum.EXPANDED) {
                const eventualHeight = panel.scrollHeight;
                panel.style.height = "0px";
                yield WebUtils.sleep(100);
                panel.style.height = `${eventualHeight}px`;
            }
            else {
                panel.style.height = `${panel.scrollHeight}px`;
                yield WebUtils.sleep(100);
                panel.style.height = "0px";
            }
            setTimeout(() => {
                panel.classList.remove(AccordionComponent.TRANSITIONING_CLASS_NAME);
                panel.style.height = "";
                return Promise.resolve();
            }, (parseFloat(getComputedStyle(panel).transitionDuration) * 650));
        });
    }
    expandedChanged(newValue) {
        this.accordionEvent.emit(new AccordionEvent(this.expanded ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED));
        const transitionType = (newValue == true) ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED;
        this.transition(transitionType).then(null);
    }
    getExpandIcon(isTranscriptAccordion, isExpanded) {
        return isTranscriptAccordion == true
            ? h("span", { class: `expand-icon icon-font ${isExpanded ? 'icon-icon_legalAccordion_minus' : 'icon-icon_legalAccordion_plus'}` })
            : null;
    }
    render() {
        const accordionId = this.element.id;
        const panelClass = `card-panel collapse ${this.expanded ? "show" : ""}`;
        const ariaExpanded = (this.expanded) ? "true" : "false";
        const isTranscriptAccordion = this.element.classList.contains('transcript-accordion');
        return (h(Host, { expanded: this.expanded },
            h("div", { class: "card pas-accordion" },
                h("div", { id: `${accordionId}-header`, class: "card-header" },
                    h("button", { onClick: this.toggle.bind(this), class: "btn accordion-btn", "aria-expanded": ariaExpanded, "aria-controls": `${accordionId}-panel` },
                        this.getExpandIcon(isTranscriptAccordion, this.expanded),
                        h("div", { class: `mb-0 ${isTranscriptAccordion ? '' : 'h4'}` },
                            h("slot", { name: "summary" })))),
                h("div", { id: `${accordionId}-panel`, class: panelClass, "aria-labelledby": `${accordionId}-header` },
                    h("div", { class: "card-body" },
                        h("slot", { name: "details" }))))));
    }
    static get is() { return "snt-accordion"; }
    static get originalStyleUrls() { return {
        "$": ["accordion-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion-component.css"]
    }; }
    static get properties() { return {
        "expanded": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "expanded",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "accordionEvent",
            "name": "accordionEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "isCollapsed": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "isExpanded": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "collapse": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "expand": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "expanded",
            "methodName": "expandedChanged"
        }]; }
}
AccordionComponent.TAG_NAME = "snt-accordion";
AccordionComponent.CARD_PANEL = ".card-panel";
AccordionComponent.TRANSITIONING_CLASS_NAME = "transitioning";
