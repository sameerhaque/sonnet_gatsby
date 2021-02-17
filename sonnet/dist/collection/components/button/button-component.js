import { Component, Element, h, Host, Listen, Event, Prop } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
export class ButtonComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
        this.hiddenTitle = StringUtils.empty();
        this.buttonId = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("button", { id: this.buttonId },
                h("slot", null))));
    }
    static get is() { return "snt-button"; }
    static get originalStyleUrls() { return {
        "$": ["button-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-component.css"]
    }; }
    static get properties() { return {
        "iconClassName": {
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
            "attribute": "icon-class-name",
            "reflect": false
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
        "hiddenTitle": {
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
            "attribute": "hidden-title",
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
    static get events() { return [{
            "method": "sntButtonClick",
            "name": "sntButtonClick",
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
            "method": "sntButtonKeyDown",
            "name": "sntButtonKeyDown",
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
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
ButtonComponent.TAG_NAME = "snt-button";
