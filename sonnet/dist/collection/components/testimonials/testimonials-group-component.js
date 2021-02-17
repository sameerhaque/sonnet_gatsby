var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, h, Host, Element, Event, Method } from '@stencil/core';
const TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: 'inactive',
    timing: 600
};
import { TestimonialsComponent } from "./testimonials-component";
export class TestimonialsGroupComponent {
    constructor() {
        this.selected = 0;
        this.slideSelector = '.carousel-item';
        this.indicatorSelector = '[data-slide-to]';
        this.prevSelector = '[data-slide="prev"]';
        this.nextSelector = '[data-slide="next"]';
        this.cycleType = 'hover';
        this.ride = false;
        this.wrap = true;
        this.listeners = {};
        this.currentSlide = 0;
        this.x0 = null; //intial click/touch position on testimonial
    }
    unify(e) { return e.changedTouches ? e.changedTouches[0] : e; }
    ;
    lock(e) {
        this.x0 = this.unify(e).clientX;
    }
    ;
    move(e) {
        if (this.x0 || this.x0 === 0) {
            let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
            if ((this.currentSlide > 0 || s < 0) && (this.currentSlide < this.slideElements.length - 1 || s > 0)) {
                this.currentSlide -= s;
                if (s == -1) {
                    this.onShow(this.currentSlide);
                }
                else if (s == 1) {
                    this.onShow(this.currentSlide);
                }
            }
            this.x0 = null;
        }
    }
    ;
    componentDidLoad() {
        this._carouselContainer = this.element.querySelector('.carousel-inner');
        this._carouselContainer.addEventListener('mousedown', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('touchstart', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('mouseup', this.move.bind(this), false);
        this._carouselContainer.addEventListener('touchend', this.move.bind(this), false);
        this.element.querySelector('.carousel-item').classList.add('active');
        this.currentSlide = this.selected || 0;
        this.getSlideElements();
        this.getIndicatorElements();
        this.getPrevNextButtons();
        if (this.currentSlide > 0) {
            this.onShow(this.selected);
        }
    }
    componentDidUnload() {
        if (this.slideElements && this.slideElements.length) {
            this.slideElements.forEach((element, i) => {
                element.removeEventListener('click', this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('click', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('click', this.nextListener);
        }
    }
    getPrevNextButtons() {
        this.prevElement = this.element.querySelector(this.prevSelector);
        this.nextElement = this.element.querySelector(this.nextSelector);
        if (this.prevElement) {
            this.prevListener = this.addClickHandler(this.prevElement, () => this.prev());
        }
        if (this.nextElement) {
            this.nextListener = this.addClickHandler(this.nextElement, () => this.next());
        }
    }
    getSlideElements() {
        this.slideElements = this.element.querySelectorAll(this.slideSelector);
    }
    getIndicatorElements() {
        this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
        this.indicatorElements.forEach((element, i) => {
            this.indicatorClickHandler(element, i);
        });
    }
    addClickHandler(element, fn = this.next) {
        if (!element)
            return;
        let eventHandler = () => {
            if (fn) {
                fn();
            }
        };
        element.addEventListener('click', eventHandler);
        return eventHandler;
    }
    indicatorClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = () => {
            this.onShow(index);
        };
        element.addEventListener('click', eventHandler);
        this.listeners[index] = eventHandler;
    }
    addActiveClass(element) {
        setTimeout(() => { element.classList.add(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        if (TOGGLE_CLASSES.inactive) {
            element.classList.remove(TOGGLE_CLASSES.inactive);
        }
    }
    removeActiveClass(elements = this.slideElements) {
        elements.forEach(item => {
            setTimeout(() => { item.classList.remove(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        });
    }
    onShow(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            this.removeActiveClass();
            if (this.indicatorElements && this.indicatorElements.length) {
                this.removeActiveClass(this.indicatorElements);
                this.addActiveClass(this.indicatorElements[index]);
            }
            this.indicatorClickHandler(this.slideElements[index], index);
            this.addActiveClass(this.slideElements[index]);
            this.currentSlide = index;
            this.showSlide.emit({
                current: this.currentSlide,
                element: this.slideElements[index]
            });
        });
    }
    onHide(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            this.removeActiveClass();
            if (this.indicatorElements && this.indicatorElements.length) {
                this.removeActiveClass(this.indicatorElements);
            }
            this.hideSlide.emit({
                current: this.currentSlide,
                element: this.slideElements[index]
            });
            this.currentSlide = 0;
        });
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
                this.onShow(0);
            }
            else {
                this.onShow(this.currentSlide + 1);
            }
        });
    }
    prev() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentSlide <= 0) {
            }
            else {
                this.onShow(this.currentSlide - 1);
            }
        });
    }
    render() {
        let testimonials = Array.from(this.element.querySelectorAll(TestimonialsComponent.TAG_NAME));
        return (h(Host, { id: this.groupId, class: "carousel slide", "data-ride": "carousel" },
            h("div", { class: "full_container" },
                h("snt-layout", null,
                    h("h2", { class: "testimonial-title" }, this.groupHeadline),
                    h("div", { class: "carousel-slider-wrap" },
                        h("div", { class: "carousel-inner" },
                            h("slot", null))),
                    h("div", { class: "testimonial-controls " + (testimonials.length > 1 ? '' : 'd-none') },
                        h("a", { class: "carousel-control-prev", href: "javascript:void(0);", role: "button", "data-slide": "prev" },
                            h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows left" })),
                            h("span", { class: "sr-only" }, "Previous")),
                        h("ol", { class: "carousel-indicators" }, testimonials.map((_elem, index) => h("li", { "data-target": "#" + this.groupId, "data-slide-to": index, class: (index == 0) ? 'active' : '' }))),
                        h("a", { class: "carousel-control-next", href: "javascript:void(0);", role: "button", "data-slide": "next" },
                            h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows right" })),
                            h("span", { class: "sr-only" }, "Next")))))));
    }
    static get is() { return "testimonials-group"; }
    static get originalStyleUrls() { return {
        "$": ["testimonials-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["testimonials-component.css"]
    }; }
    static get properties() { return {
        "groupId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "group-id",
            "reflect": false
        },
        "groupHeadline": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "group-headline",
            "reflect": false
        },
        "selected": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "selected",
            "reflect": false,
            "defaultValue": "0"
        },
        "slideSelector": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "slide-selector",
            "reflect": false,
            "defaultValue": "'.carousel-item'"
        },
        "indicatorSelector": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "indicator-selector",
            "reflect": false,
            "defaultValue": "'[data-slide-to]'"
        },
        "prevSelector": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prev-selector",
            "reflect": false,
            "defaultValue": "'[data-slide=\"prev\"]'"
        },
        "nextSelector": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "next-selector",
            "reflect": false,
            "defaultValue": "'[data-slide=\"next\"]'"
        },
        "cycleType": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | boolean",
                "resolved": "boolean | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "cycle-type",
            "reflect": false,
            "defaultValue": "'hover'"
        },
        "ride": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "ride",
            "reflect": false,
            "defaultValue": "false"
        },
        "wrap": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "wrap",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "showSlide",
            "name": "showSlide",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "hideSlide",
            "name": "hideSlide",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "onShow": {
            "complexType": {
                "signature": "(index?: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
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
        "onHide": {
            "complexType": {
                "signature": "(index?: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
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
        "next": {
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
        "prev": {
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
}
