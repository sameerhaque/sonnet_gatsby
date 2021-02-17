var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { h, Component, Element, Host, Listen, Prop, Watch, Method } from "@stencil/core";
import { NavbarCollapseComponent } from "../navbar-collapse/navbar-collapse-component";
import { StringUtils } from "../../../core/utils/StringUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
export class NavbarComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    listenNavbarTogglerEvent(_event) {
        this.toggleActive().then(null);
    }
    toggleActive(active) {
        return __awaiter(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            return this.active;
        });
    }
    watchActive() {
        if (this.navbarCollapse) {
            this.navbarCollapse.toggleShown(this.active)
                .then(null);
        }
    }
    componentDidLoad() {
        this.navbarCollapse = document.querySelector(`${NavbarCollapseComponent.TAG_NAME}`);
        if (this.navbarCollapse) {
            this.navbarToggle.ariaControls = this.navbarCollapse.id;
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: () => this.toggleActive() },
            h("div", { class: "brand-and-toggle" },
                h("snt-navbar-toggle", { ref: (elem) => this.navbarToggle = elem, languageString: this.languageString }),
                h("slot", { name: "navbar-brand" })),
            h("slot", { name: "navbar-collapse" }),
            h("slot", null),
            h("snt-backdrop", null)));
    }
    static get is() { return "snt-navbar"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-component.css"]
    }; }
    static get properties() { return {
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
            "reflect": true
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
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "watchActive"
        }]; }
    static get listeners() { return [{
            "name": "navbarToggled",
            "method": "listenNavbarTogglerEvent",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
NavbarComponent.TAG_NAME = "snt-navbar";
