var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Listen, Method, Prop } from '@stencil/core';
import { EventConfigurationUtils } from "../../core/events/utils/EventConfigurationUtils";
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
import { StringUtils } from "../../core/utils/StringUtils";
export class ActionLinkComponent {
    constructor() {
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.linkId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    getEventConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.eventConfiguration;
        });
    }
    sntBtnEvent(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentWillLoad() {
        this.eventElems = this.element.querySelectorAll('snt-event');
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
        }
        if (!StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const link = h("snt-link", { "link-id": this.linkId, classNames: this.styleClasses, href: "javascript:void(0);" },
            icon,
            this.linkTitle,
            h("slot", null));
        const events = this.eventElems.length == 0 ? [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })] : '';
        return [events, link];
    }
    static get is() { return "snt-action-link"; }
    static get properties() { return {
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
            "reflect": true,
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
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
        "linkId": {
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
            "attribute": "link-id",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get methods() { return {
        "getEventConfiguration": {
            "complexType": {
                "signature": "() => Promise<EventConfiguration>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "EventConfiguration": {
                        "location": "import",
                        "path": "../../core/events/domain/EventConfiguration"
                    }
                },
                "return": "Promise<EventConfiguration>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "linkEvent",
            "method": "sntBtnEvent",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
ActionLinkComponent.TAG_NAME = "snt-action-link";
