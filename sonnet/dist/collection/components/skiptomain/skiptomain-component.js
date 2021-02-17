import { Component, h, Prop } from "@stencil/core";
export class SkipToMainComponent {
    componentWillLoad() {
        if (!this.mainContentId) {
            this.mainContentId = '#maincontent';
        }
        if (!this.mainContentId.startsWith('#')) {
            this.mainContentId = '#' + this.mainContentId;
        }
        if (!this.ariaLabel) {
            if (this.linkText) {
                this.ariaLabel = this.linkText;
            }
        }
    }
    render() {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent.srClasses, href: this.mainContentId },
                h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    }
    static get is() { return "snt-skip-to-main"; }
    static get originalStyleUrls() { return {
        "$": ["./skiptomain-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["skiptomain-component.css"]
    }; }
    static get properties() { return {
        "mainContentId": {
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
            "attribute": "main-content-id",
            "reflect": true
        },
        "linkText": {
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
            "attribute": "link-text",
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
        }
    }; }
}
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
