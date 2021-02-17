import { Component, Element, Event, h, Listen, Prop } from "@stencil/core";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
export class LinkComponent {
    constructor() {
        this.hiddenTitle = StringUtils.empty();
        this.isExternal = false;
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
        const isExternalLink = AccessibilityUtils.isAccessibilityLinkRequired(this.element, this.href, this.target);
        if (isExternalLink) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [h("span", { class: "link-content" }, content),
                h("span", { class: 'icon-font icon-new-window', title: title },
                    h("span", { class: 'sr-only' },
                        " ",
                        text))
            ];
        }
        return [
            h("a", { id: this.linkId, rel: isExternalLink ? 'noopener' : null, href: this.href, target: this.target, download: this.downloadName, "aria-label": this.ariaLabel, class: WebUtils.generateClasses([], this.classNames), "hidden-title": this.hiddenTitle }, content)
        ];
    }
    static get is() { return "snt-link"; }
    static get originalStyleUrls() { return {
        "$": ["link-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["link-component.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        },
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
        "current": {
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
            "attribute": "current",
            "reflect": true
        },
        "downloadName": {
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
            "attribute": "download-name",
            "reflect": true
        },
        "ariaCurrent": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string|boolean",
                "resolved": "boolean | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "aria-current",
            "reflect": true
        },
        "rel": {
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
            "attribute": "rel",
            "reflect": true
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
        "isExternal": {
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
            "attribute": "is-external",
            "reflect": false,
            "defaultValue": "false"
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
LinkComponent.TAG_NAME = "snt-link";
