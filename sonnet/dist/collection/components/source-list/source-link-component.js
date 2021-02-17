import { Component, h, Prop } from "@stencil/core";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
export class SourceLinkComponent {
    render() {
        let content;
        let title = AccessibilityUtils.getNewWindowTitle();
        let text = AccessibilityUtils.getNewWindowText();
        if (this.target === "_blank") {
            content = [
                h("span", { class: "link-content" },
                    h("slot", null)),
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text))
            ];
        }
        else {
            content = (h("span", { class: "full-content" },
                h("slot", null)));
        }
        return (h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, content));
    }
    static get is() { return "snt-source-link"; }
    static get originalStyleUrls() { return {
        "$": ["source-link-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["source-link-component.css"]
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
        }
    }; }
}
SourceLinkComponent.TAG_NAME = "snt-source-link";
