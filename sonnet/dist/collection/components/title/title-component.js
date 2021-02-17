var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, h, Method } from "@stencil/core";
import { TitleTypeEnum } from "./TitleTypeEnum";
import clampJs from "clamp-js-main";
export class TitleComponent {
    constructor() {
        this.clampLines = 0;
        this.truncationString = "...";
    }
    getContent(titleType) {
        switch (titleType) {
            case TitleTypeEnum.h1: return (h("h1", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h2: return (h("h2", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h3: return (h("h3", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h4: return (h("h4", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            default: return "";
        }
    }
    componentDidRender() {
        if (this.clampLines > 0) {
            clampJs.clamp(this.titleElement, { clamp: this.clampLines, truncationChar: this.truncationString, useNativeClamp: false });
        }
    }
    clampTitle(clampLines = this.clampLines) {
        return __awaiter(this, void 0, void 0, function* () {
            clampJs.clamp(this.titleElement, { clamp: clampLines, truncationChar: this.truncationString, useNativeClamp: false });
        });
    }
    setTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            this.titleElement.innerHTML = title;
        });
    }
    render() {
        let content = this.getContent(this.titleType);
        return [
            h("snt-layout", null, content)
        ];
    }
    static get is() { return "snt-title"; }
    static get originalStyleUrls() { return {
        "$": ["./title-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["title-component.css"]
    }; }
    static get properties() { return {
        "titleType": {
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
            "attribute": "title-type",
            "reflect": false
        },
        "clampLines": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "clamp-lines",
            "reflect": false,
            "defaultValue": "0"
        },
        "truncationString": {
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
            "attribute": "truncation-string",
            "reflect": false,
            "defaultValue": "\"...\""
        }
    }; }
    static get methods() { return {
        "clampTitle": {
            "complexType": {
                "signature": "(clampLines?: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setTitle": {
            "complexType": {
                "signature": "(title: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
TitleComponent.TAG_NAME = "snt-title";
