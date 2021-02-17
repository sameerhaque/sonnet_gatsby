import { Component, h, Prop } from "@stencil/core";
import { ComponentConstants } from "../ComponentConstants";
import { CookieUtils } from "../../core/utils/CookieUtils";
import { StringUtils } from "../../core/utils/StringUtils";
export class LoginComponent {
    constructor() {
        this.authed = "0";
        this.languageJson = StringUtils.empty();
        this.accountLoginUrl = "https://secure.sonnet.ca/#/login";
        this.accountDashboardUrl = "https://secure.sonnet.ca/#/account/dashboard";
        this.languageStrings = {};
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
    componentDidLoad() {
        const authed = CookieUtils.readCookie(ComponentConstants.AUTH_COOKIE_NAME);
        this.authed = authed || this.authed;
    }
    render() {
        return ((this.authed && parseInt(this.authed) == 1) ?
            h("snt-link", { href: this.accountDashboardUrl },
                h("snt-icon", { styleClasses: "icon-icon_nav_LoggedIn_act" }))
            :
                h("snt-link", { href: this.accountLoginUrl }, this.languageStrings["login"] || "Log In"));
    }
    static get is() { return "snt-login"; }
    static get originalStyleUrls() { return {
        "$": ["login-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["login-component.css"]
    }; }
    static get properties() { return {
        "authed": {
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
            "attribute": "authed",
            "reflect": false,
            "defaultValue": "\"0\""
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
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "accountLoginUrl": {
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
            "attribute": "account-login-url",
            "reflect": false,
            "defaultValue": "\"https://secure.sonnet.ca/#/login\""
        },
        "accountDashboardUrl": {
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
            "attribute": "account-dashboard-url",
            "reflect": false,
            "defaultValue": "\"https://secure.sonnet.ca/#/account/dashboard\""
        }
    }; }
}
LoginComponent.TAG_NAME = "snt-login";
