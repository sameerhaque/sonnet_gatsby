var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, h, Host, Method, Prop, Watch } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
export class SearchBarComponent {
    constructor() {
        this.languageJson = StringUtils.empty();
    }
    toggleActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") || !this.active;
            return this.active;
        });
    }
    watchActive(active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    }
    componentDidUpdate() {
        this.setFocus();
    }
    setFocus() {
        if (this.active) {
            const input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    }
    render() {
        return (h(Host, { onSntBackdropTap: this.toggleActive.bind(this) },
            h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" },
                h("snt-search-typeahead", { "search-combobox-id": "global-search-combobox", ref: (el) => this.searchTypeahead = el, languageJson: this.languageJson }),
                h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })),
            ",",
            h("snt-backdrop", null)));
    }
    static get is() { return "snt-search-bar"; }
    static get originalStyleUrls() { return {
        "$": ["search-bar-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-bar-component.css"]
    }; }
    static get properties() { return {
        "active": {
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
            "attribute": "active",
            "reflect": true
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
            "reflect": true
        },
        "languageJson": {
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
            "attribute": "language-json",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get methods() { return {
        "toggleActive": {
            "complexType": {
                "signature": "(active?: boolean) => Promise<boolean>",
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
    static get watchers() { return [{
            "propName": "active",
            "methodName": "watchActive"
        }]; }
}
SearchBarComponent.TAG_NAME = "snt-search-bar";
