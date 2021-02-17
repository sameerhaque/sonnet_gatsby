import { Component, h, Prop } from "@stencil/core";
export class SourceListComponent {
    constructor() {
        this.RETURN = 13;
    }
    handleKeydown(event) {
        switch (event.keyCode) {
            case this.RETURN:
                this.toggleExpand();
                event.stopPropagation();
                event.preventDefault();
                break;
            default:
                break;
        }
    }
    toggleExpand() {
        if (this.buttonEl.getAttribute('aria-expanded') === 'true') {
            this.buttonEl.setAttribute('aria-expanded', 'false');
        }
        else {
            this.buttonEl.setAttribute('aria-expanded', 'true');
        }
        this.buttonEl.classList.toggle('expanded');
        this.toggleContent();
    }
    toggleContent() {
        this.panelEl.classList.toggle('open');
        this.panelEl.classList.toggle('close');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_plus');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_minus');
    }
    render() {
        return (h("snt-layout", null,
            h("button", { ref: (el) => (this.buttonEl = el), onKeyDown: this.handleKeydown.bind(this), onClick: this.toggleExpand.bind(this), "aria-expanded": "false", "aria-controls": this.panelId },
                h("span", { ref: (el) => (this.iconEl = el), class: "expand-icon icon-font icon-icon_legalAccordion_plus" }),
                this.sourceHeading),
            h("div", { class: "source-panel close", ref: (el) => (this.panelEl = el), id: this.panelId },
                h("slot", null))));
    }
    static get is() { return "snt-source-list"; }
    static get originalStyleUrls() { return {
        "$": ["source-list-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["source-list-component.css"]
    }; }
    static get properties() { return {
        "panelId": {
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
            "attribute": "panel-id",
            "reflect": false
        },
        "sourceHeading": {
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
            "attribute": "source-heading",
            "reflect": false
        }
    }; }
}
SourceListComponent.TAG_NAME = "snt-source-list";
