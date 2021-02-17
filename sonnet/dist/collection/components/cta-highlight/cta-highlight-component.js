import { h, Component, Prop, Element } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
export class CtaHighlightComponent {
    constructor() {
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, href: this.url }, this.cta));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.cta }));
        }
        return (h("snt-layout", { class: "cta-container" },
            h("div", { class: "cta-wrapper" },
                h("div", { class: "text-content" },
                    h("slot", null)),
                content)));
    }
    static get is() { return "snt-cta-highlight"; }
    static get originalStyleUrls() { return {
        "$": ["./cta-highlight-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["cta-highlight-component.css"]
    }; }
    static get properties() { return {
        "cta": {
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
            "attribute": "cta",
            "reflect": false
        },
        "actionReference": {
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
            "attribute": "action-reference",
            "reflect": false
        },
        "actionData": {
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
            "attribute": "action-data",
            "reflect": false
        },
        "url": {
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
            "attribute": "url",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "urlTarget": {
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
            "attribute": "url-target",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "buttonId": {
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
            "attribute": "button-id",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get elementRef() { return "element"; }
}
CtaHighlightComponent.TAG_NAME = "snt-cta-highlight";
