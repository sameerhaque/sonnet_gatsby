import { Component, Element, h, Prop } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
export class CtaReminderComponent {
    constructor() {
        this.titleString = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference) && StringUtils.isEmpty(this.url)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, "aria-label": this.linkTitle, href: this.url }, this.linkTitle));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.linkTitle }));
        }
        return (h("snt-layout", null,
            h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString),
            h("div", { class: "action-button" }, content)));
    }
    static get is() { return "snt-cta-reminder"; }
    static get originalStyleUrls() { return {
        "$": ["cta-reminder-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["cta-reminder-component.css"]
    }; }
    static get properties() { return {
        "titleString": {
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
            "attribute": "title-string",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "linkTitle": {
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
            "attribute": "link-title",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "styleClasses": {
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
            "attribute": "style-classes",
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
CtaReminderComponent.TAG_NAME = "snt-cta-reminder";
