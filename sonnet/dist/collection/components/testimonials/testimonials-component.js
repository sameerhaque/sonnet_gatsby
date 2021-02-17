import { Component, Prop, h, Host, State, Element } from '@stencil/core';
export class TestimonialsComponent {
    componentDidLoad() {
        if (this.element.querySelector('blockquote').innerHTML.length < 0) {
            throw new Error('Cannot have an empty testimonial');
        }
    }
    componentWillLoad() {
        (this.element.parentElement.classList.contains('carousel-inner'))
            ? this.single = false
            : this.single = true;
    }
    render() {
        if (this.single) {
            return (h(Host, { id: this.containerId, class: "carousel slide", "data-ride": "carousel" },
                h("div", { class: "container" },
                    h("h2", { class: "testimonial-title" }, this.headline),
                    h("div", { class: "carousel-inner" },
                        h("div", { class: "carousel-item active" },
                            h("div", { class: "carousel-caption " },
                                h("div", { class: "carousel-quote" },
                                    h("blockquote", null,
                                        h("slot", null)),
                                    h("p2", null, this.from))))))));
        }
        else {
            return (h(Host, { class: "carousel-item", id: this.containerId },
                h("div", { class: "carousel-caption" },
                    h("div", { class: "carousel-quote" },
                        h("blockquote", null,
                            h("slot", null)),
                        h("p2", null, this.from)))));
        }
    }
    static get is() { return "testimonial-quote"; }
    static get originalStyleUrls() { return {
        "$": ["testimonials-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["testimonials-component.css"]
    }; }
    static get properties() { return {
        "containerId": {
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
            "attribute": "container-id",
            "reflect": false
        },
        "fill": {
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
            "attribute": "fill",
            "reflect": false
        },
        "from": {
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
            "attribute": "from",
            "reflect": false
        },
        "headline": {
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
            "attribute": "headline",
            "reflect": false
        }
    }; }
    static get states() { return {
        "single": {}
    }; }
    static get elementRef() { return "element"; }
}
TestimonialsComponent.TAG_NAME = "testimonial-quote";
