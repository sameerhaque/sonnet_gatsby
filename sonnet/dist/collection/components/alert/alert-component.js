var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, Host, Event, Prop, Watch, State, Method, h } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
export class AlertsBanner {
    constructor() {
        this.dismissible = false;
        this.animatable = true;
        this.type = 'warning';
        this.explorerOnly = StringUtils.empty();
    }
    dismiss() {
        return __awaiter(this, void 0, void 0, function* () {
            this.show = false;
            setTimeout(() => {
                this.dismissed(this.el);
            }, 450);
            setTimeout(() => {
                this.el.parentNode.removeChild(this.el);
            }, 100);
            this.setCookies();
        });
    }
    componentWillLoad() {
        this.setShowFadeState();
        this.checkCookies();
        this.checkIE11();
    }
    render() {
        return (h(Host, { class: {
                alert: true,
                [`alert-${this.type}`]: true,
                'alert-dismissible': this.dismissible,
                show: this.animatable && this.show,
                fade: this.animatable && this.fade,
            }, role: "alert" },
            h("snt-layout", { padding: "vertical-only" },
                h("div", { class: 'alert-container' },
                    this.getDismissButton(),
                    h("p2", null,
                        h("slot", null))))));
    }
    setShowFadeState() {
        if (this.animatable) {
            this.show = true;
            this.fade = true;
        }
    }
    getDismissButton() {
        if (!this.dismissible)
            return null;
        return (h("button", { type: "button", class: "close", "aria-label": "Close", onClick: this.dismiss.bind(this) },
            h("span", { "aria-hidden": "true" })));
    }
    setCookies() {
        let now = new Date(), time = now.getTime();
        time += 30 * 60 * 1000;
        now.setTime(time);
        document.cookie = `closedAlert-${this.el.id}=true; expires= ${now.toUTCString()}; path=/`;
    }
    checkCookies() {
        if (document.cookie.split(';').some((item) => item.includes(`closedAlert-${this.el.id}=true`))) {
            this.el.style.display = 'none';
        }
    }
    checkIE11() {
        if (StringUtils.hasValue(this.explorerOnly) && window.document['documentMode'] === undefined) {
            this.el.style.display = 'none';
        }
    }
    static get is() { return "snt-alert"; }
    static get originalStyleUrls() { return {
        "$": ["alert-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["alert-component.css"]
    }; }
    static get properties() { return {
        "dismissible": {
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
            "attribute": "dismissible",
            "reflect": false,
            "defaultValue": "false"
        },
        "animatable": {
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
            "attribute": "animatable",
            "reflect": false,
            "defaultValue": "true"
        },
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'warning'"
        },
        "explorerOnly": {
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
            "attribute": "explorer-only",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get states() { return {
        "show": {},
        "fade": {}
    }; }
    static get events() { return [{
            "method": "dismissed",
            "name": "dismissed",
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
        "dismiss": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "animatable",
            "methodName": "componentWillLoad"
        }]; }
}
