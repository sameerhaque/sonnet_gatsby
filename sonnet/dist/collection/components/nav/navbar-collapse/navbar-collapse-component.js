var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, Event, h, Host, Method, Prop, Watch } from "@stencil/core";
export class NavbarCollapseComponent {
    constructor() {
        this.shown = false;
        this.viewport = null;
        this.logoUrl = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
    }
    toggleShown(shown) {
        return __awaiter(this, void 0, void 0, function* () {
            this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
            return Promise.resolve(this.shown);
        });
    }
    onShown(shown) {
        if (shown) {
            this.lastActiveElement = document.activeElement || document.body;
        }
        this.elementToFocusOn = shown ? this.element : this.lastActiveElement;
    }
    onViewport() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentWillRender() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentDidUpdate() {
        if (this.elementToFocusOn !== null) {
            this.elementToFocusOn.focus();
            this.elementToFocusOn = null;
        }
    }
    render() {
        return (h(Host, { class: `collapse navbar-collapse ${this.shown ? "show" : ""}`, tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" },
            h("div", { class: "spacer" }),
            h("div", { class: "header d-flex d-lg-none align-items-center" },
                h("snt-button", { class: "d-inline-flex", onClick: () => this.navbarToggled.emit() },
                    h("snt-icon", { styleClasses: "iconNavClose" })),
                h("snt-image", { "data-src": this.logoUrl, width: "100", height: "100" })),
            h("div", { class: "body" },
                h("slot", null))));
    }
    static get is() { return "snt-navbar-collapse"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-collapse-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-collapse-component.css"]
    }; }
    static get properties() { return {
        "shown": {
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
            "attribute": "shown",
            "reflect": true,
            "defaultValue": "false"
        },
        "viewport": {
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
            "attribute": "viewport",
            "reflect": true,
            "defaultValue": "null"
        },
        "logoUrl": {
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
            "attribute": "logo-url",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get events() { return [{
            "method": "navbarToggled",
            "name": "navbarToggled",
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
    static get methods() { return {
        "toggleShown": {
            "complexType": {
                "signature": "(shown?: boolean) => Promise<boolean>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "shown",
            "methodName": "onShown"
        }, {
            "propName": "viewport",
            "methodName": "onViewport"
        }]; }
}
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
