var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { h, Component, Element, Host, Listen, Prop, Method, Watch } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { AnimationUtils } from "../../core/utils/AnimationUtils";
export class PaneComponent {
    constructor() {
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    toggleCollapsed(collapsed) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
            return this.collapsed;
        });
    }
    onCollapsed(collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    }
    listenButtonEvent(_event) {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" },
            h("slot", null)));
    }
    static get is() { return "snt-pane"; }
    static get originalStyleUrls() { return {
        "$": ["pane-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pane-component.css"]
    }; }
    static get properties() { return {
        "collapsed": {
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
            "attribute": "collapsed",
            "reflect": true,
            "defaultValue": "false"
        },
        "animated": {
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
            "attribute": "animated",
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
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get methods() { return {
        "toggleCollapsed": {
            "complexType": {
                "signature": "(collapsed?: boolean) => Promise<boolean>",
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
            "propName": "collapsed",
            "methodName": "onCollapsed"
        }]; }
    static get listeners() { return [{
            "name": "close",
            "method": "listenButtonEvent",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
