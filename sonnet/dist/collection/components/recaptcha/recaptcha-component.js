var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Prop, Host, Method, Listen, Event } from "@stencil/core";
export class RecaptchaComponent {
    componentWillLoad() {
        this.loadRecaptchaScript();
    }
    componentDidLoad() {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            window.grecaptcha.reset(this.grecaptchWidgetId);
        });
    }
    handleGrecaptchaLoaded() {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    }
    loadRecaptchaScript() {
        return __awaiter(this, void 0, void 0, function* () {
            const hlParam = this.language && this.language == 'fr' ? 'fr-CA' : 'en';
            const scriptSrc = `https://www.google.com/recaptcha/api.js?hl=${hlParam}&onload=grecaptchaOnLoadCallback&render=explicit`;
            const recaptchaScriptEl = document.querySelector(`[src="${scriptSrc}"]`);
            if (!window['grecaptcha]'] && !recaptchaScriptEl) {
                const scriptTag = document.createElement('script');
                scriptTag.type = "text/javascript";
                scriptTag.src = scriptSrc;
                scriptTag.async = true;
                scriptTag.defer = true;
                scriptTag.onload = () => { };
                window.grecaptchaOnLoadCallback = () => __awaiter(this, void 0, void 0, function* () {
                    this.grecaptchaLoaded.emit();
                });
                const documentHead = document.getElementsByTagName('head')[0];
                documentHead.appendChild(scriptTag);
            }
        });
    }
    grecaptchaCallback(value) {
        this.checkbox.value = value;
        this.toggleChecked(this.checkbox, true);
    }
    grecaptchaExpiredCallback() {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    }
    grecaptchaErrorCallback() {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    }
    toggleChecked(checkbox, checked) {
        if (checked != checkbox.checked) {
            checkbox.click();
        }
    }
    renderRecaptcha(recaptcha) {
        const recaptchaPlaceholder = this.element.querySelector('.g-recaptcha');
        if (recaptchaPlaceholder.childNodes.length === 0) {
            this.grecaptchWidgetId = recaptcha.render(recaptchaPlaceholder, {
                'sitekey': this.sitekey,
                'callback': this.grecaptchaCallback.bind(this),
                'expired-callback': this.grecaptchaExpiredCallback.bind(this),
                'error-callback': this.grecaptchaErrorCallback.bind(this)
            });
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: "g-recaptcha", id: `${this.element.id}-g-recaptcha` }),
            h("input", { ref: el => this.checkbox = el, id: "recaptcha", name: "recaptcha", type: "checkbox", value: "", class: "hidden", "data-field": "recaptcha", tabindex: "-1", "aria-checked": "false", "aria-invalid": "false", "aria-describedby": "recaptcha_error", required: true }),
            h("slot", { name: "error-messages" })));
    }
    static get is() { return "snt-recaptcha"; }
    static get originalStyleUrls() { return {
        "$": ["recaptcha-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["recaptcha-component.css"]
    }; }
    static get properties() { return {
        "sitekey": {
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
            "attribute": "sitekey",
            "reflect": false
        },
        "language": {
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
            "attribute": "language",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "grecaptchaLoaded",
            "name": "grecaptchaLoaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "reset": {
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
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "grecaptchaLoaded",
            "method": "handleGrecaptchaLoaded",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
RecaptchaComponent.TAG_NAME = "snt-recaptcha";
