var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Event, Method, Prop, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { DomUtils } from "../../core/utils/DomUtils";
import { FormService } from '../../core/utils/FormService';
import { FormAttributes } from "./form-attributes.enum";
import { Action } from "../../core/reflection";
import { RecaptchaComponent } from '../recaptcha/recaptcha-component';
export class FormComponent {
    /**
     * Methods
     */
    openErrorModal(actionData, modalId) {
        return __awaiter(this, void 0, void 0, function* () {
            Action.openErrorModal(actionData, modalId);
        });
    }
    openSuccessModal(actionData, modalId) {
        return __awaiter(this, void 0, void 0, function* () {
            Action.openSuccessModal(actionData, modalId);
        });
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            this.formEl.reset();
            const recaptchaElement = this.formEl.querySelector(RecaptchaComponent.TAG_NAME);
            if (recaptchaElement) {
                yield recaptchaElement.reset();
            }
        });
    }
    componentDidLoad() {
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            DomUtils.attachHandler(_element, "invalid", this.onInvalidateFormElementHandler.bind(this));
            DomUtils.attachHandler(_element, "change", this.onChangeInputBlankHandler.bind(this));
            if (_element.tagName !== "SELECT") {
                DomUtils.attachHandler(_element, "blur", this.onBlurFormElementHandler.bind(this));
            }
            if (_element.tagName === "SELECT" || _element.type === "checkbox") {
                DomUtils.attachHandler(_element, "change", this.onChangeValueFormElementHandler.bind(this));
            }
        });
        // Attach onSubmit to call callback handler
        if (this.submitCallBackhandler) {
            DomUtils.attachHandler(this.formEl, "submit", this.submitCallBackhandler.bind(this));
        }
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            var _result = {
                method: this.formEl.getAttribute("method"),
                action: this.formEl.getAttribute("action"),
                content: this.getPayload(),
            };
            return _result;
        });
    }
    onChangeInputBlankHandler(event) {
        const element = event.target;
        if (element.hasAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME)) {
            const _form = element.form;
            const inputElement = _form.querySelector("[" +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                "=" +
                element.getAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME) +
                "]");
            if (inputElement) {
                inputElement.value = '';
            }
        }
    }
    onChangeValueFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    onBlurFormElementHandler(event) {
        var _element = event.target;
        var _value = FormService.getValue(_element);
        if (StringUtils.hasLength(_value)) {
            FormService.process(event);
        }
        else {
            var _form = _element.form;
            var _dataErrorParent = _form.querySelector("[" +
                FormAttributes.DATA_FOR_ATTRIBUTE_NAME +
                "=" +
                _element.id +
                "]");
            if (_dataErrorParent) {
                var _errorMessageNode = FormService.getErrorMessageNode(_dataErrorParent);
                _errorMessageNode.classList.add("hidden");
            }
        }
        event.preventDefault();
    }
    onInvalidateFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    getPayload() {
        var _result = {};
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            _result[this.getPayloadNameForElement(_element)] = FormService.getValue(_element);
        });
        return _result;
    }
    submitForm(e) {
        this.formSubmit.emit(e);
        e.preventDefault();
    }
    getFormElements() {
        return this.formEl.querySelectorAll("input[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], select[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], textarea[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "]");
    }
    getPayloadNameForElement(element) {
        if (DomUtils.hasValidStringAttribute(element, FormAttributes.DATA_FIELD_ATTRUBITE_NAME)) {
            return element.getAttribute(FormAttributes.DATA_FIELD_ATTRUBITE_NAME);
        }
        else if (DomUtils.hasValidStringAttribute(element, "name")) {
            return element.getAttribute("name");
        }
        throw "Element " + element + " does not have a payload name.";
    }
    render() {
        return (h("form", { ref: (el) => (this.formEl = el), onSubmit: (e) => {
                this.submitForm(e);
            } },
            h("slot", null)));
    }
    static get is() { return "snt-form"; }
    static get originalStyleUrls() { return {
        "$": ["./form-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-component.css"]
    }; }
    static get properties() { return {
        "text": {
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
            "attribute": "text",
            "reflect": true
        },
        "submitCallBackhandler": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "submit-call-backhandler",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "formSubmit",
            "name": "formSubmit",
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
        "openErrorModal": {
            "complexType": {
                "signature": "(actionData: JSON, modalId: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "JSON": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Methods",
                "tags": []
            }
        },
        "openSuccessModal": {
            "complexType": {
                "signature": "(actionData: JSON, modalId: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "JSON": {
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
        "reset": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLSntRecaptchaElement": {
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
        "getData": {
            "complexType": {
                "signature": "() => Promise<{ method: string; action: string; content: {}; }>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<{ method: string; action: string; content: {}; }>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
