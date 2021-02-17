var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, Event, h, Method, Prop, Watch } from "@stencil/core";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
export class NavbarToggleComponent {
    toggleCollapsed(collapsed) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
            return Promise.resolve(this.collapsed);
        });
    }
    watchCollapsed() {
        this.navbarToggled.emit();
    }
    componentWillLoad() {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    }
    render() {
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: () => this.toggleCollapsed() },
            h("snt-icon", { styleClasses: "iconNavBurger" })));
    }
    static get is() { return "snt-navbar-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-toggle-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-toggle-component.css"]
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
            "reflect": true
        },
        "ariaControls": {
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
            "attribute": "aria-controls",
            "reflect": false
        },
        "languageString": {
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
            "attribute": "language-string",
            "reflect": false
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
            "methodName": "watchCollapsed"
        }]; }
}
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
