import { Component, Element, Event, h, Listen, Prop, } from "@stencil/core";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
export class ButtonLinkComponent {
    constructor() {
        this.classNames = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    render() {
        let content = h("slot", null);
        if (this.target === "_blank" && StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [
                content,
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text)),
            ];
        }
        return [
            h("a", { id: this.buttonId, href: this.href, target: this.target, "aria-label": this.ariaLabel, "aria-describedby": StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? `${this.buttonId}-describedby` : null, class: WebUtils.generateClasses([], this.classNames) }, content),
            StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? (h("div", { class: "sr-only", id: `${this.buttonId}-describedby` }, this.ariaDescribedByText)) : null,
        ];
    }
    static get is() { return "button-link"; }
    static get originalStyleUrls() { return {
        "$": ["button-link-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-link-component.css"]
    }; }
    static get properties() { return {
        "href": {
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
            "attribute": "href",
            "reflect": true
        },
        "target": {
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
            "attribute": "target",
            "reflect": true
        },
        "ariaLabel": {
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
            "attribute": "aria-label",
            "reflect": true
        },
        "ariaDescribedByText": {
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
            "attribute": "aria-described-by-text",
            "reflect": true
        },
        "classNames": {
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
            "attribute": "class-names",
            "reflect": false,
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
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "linkEvent",
            "name": "linkEvent",
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
        }, {
            "name": "mouseover",
            "method": "handleMouseover",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
ButtonLinkComponent.TAG_NAME = "button-link";
