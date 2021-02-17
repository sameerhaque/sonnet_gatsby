var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, h, Host, Method, Prop } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
export class SearchPanelComponent {
    constructor() {
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.empty();
        this.languageJson = StringUtils.empty();
    }
    toggleActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            return this.active;
        });
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }),
            h("snt-search-typeahead", { "search-combobox-id": "global-search-panel-combobox", languageJson: this.languageJson })));
    }
    static get is() { return "snt-search-panel"; }
    static get originalStyleUrls() { return {
        "$": ["search-panel-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search-panel-component.css"]
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
            "reflect": true,
            "defaultValue": "false"
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
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
}
SearchPanelComponent.TAG_NAME = "snt-search-panel";
