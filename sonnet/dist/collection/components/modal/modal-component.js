var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Method, Watch, Prop, Listen, Event, Host } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
import { ModalOptions } from "./domain/ModalOptions";
import { ModalLanguageVariables } from "./domain/ModalLanguageVariables";
import { StringUtils } from "../../core/utils/StringUtils";
import focusTrap from "focus-trap";
import { DomUtils, ScrollDirectionEnum } from "../../core/utils/DomUtils";
export class ModalComponent {
    constructor() {
        this.shown = false;
        this.modalTitle = StringUtils.empty();
        this.options = ModalComponent.DEFAULT_OPTIONS;
        this.styleClasses = StringUtils.empty();
        this.languageString = StringUtils.empty();
    }
    toggleModal(shown) {
        return __awaiter(this, void 0, void 0, function* () {
            if (shown) {
                this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOW });
                this.element.classList.add(ModalComponent.CLASS_READY_TO_SHOW);
                yield WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
                if (this.options.backdrop) {
                    this.backdropElement.classList.add(ModalComponent.CLASS_SHOW);
                    yield WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
                }
                this.modalDialogElement.classList.add(ModalComponent.CLASS_SHOW);
                this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOWN });
            }
            else {
                this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDE });
                this.modalDialogElement.classList.remove(ModalComponent.CLASS_SHOW);
                yield WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
                if (this.backdropElement) {
                    this.backdropElement.classList.remove(ModalComponent.CLASS_SHOW);
                    yield WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
                }
                this.element.classList.remove(ModalComponent.CLASS_READY_TO_SHOW);
                this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDDEN });
            }
            this.toggleFocusTrap();
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shown = true;
        });
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shown = false;
        });
    }
    toggle() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shown = !this.shown;
        });
    }
    isShown() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shown;
        });
    }
    modalEventHandler(modalEvent) {
        switch (modalEvent.detail.eventType) {
            case ModalComponent.EVENT_MODAL_SHOW:
                this.lastActiveElement = document.activeElement || document.body;
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(true, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.add(ModalComponent.CLASS_MODAL_OPEN);
                }
                break;
            case ModalComponent.EVENT_MODAL_SHOWN:
                break;
            case ModalComponent.EVENT_MODAL_HIDE:
                break;
            case ModalComponent.EVENT_MODAL_HIDDEN:
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(false, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.remove(ModalComponent.CLASS_MODAL_OPEN);
                }
                this.lastActiveElement.focus();
                break;
            default:
                throw new Error("Unsupported modal event type.");
        }
    }
    componentWillLoad() {
        this.languageVariables = new ModalLanguageVariables();
        try {
            const parsedJson = JSON.parse(this.languageString);
            Object.keys(this.languageVariables).forEach((key) => {
                if (parsedJson.hasOwnProperty(key)) {
                    this.languageVariables[key] = parsedJson[key];
                }
                else {
                    console.error(`Required language variable '${key}' not passed through 'language-string' property.`);
                }
            });
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    }
    componentDidLoad() {
        const footerContentElement = this.element.querySelector('.modal-footer');
        if (StringUtils.isEmpty(footerContentElement.innerHTML.trim())) {
            footerContentElement.classList.add('no-content');
        }
        const headerContentElement = this.element.querySelector('.modal-header');
        if (StringUtils.isEmpty(this.modalTitle)) {
            headerContentElement.classList.add('no-header-content');
        }
        this.dialogTitle = this.modalContentElement.querySelector("h1, h2, h3, h4, h5, h6");
        this.dialogDescription = this.modalContentElement.querySelector("p");
        this.dialogTitle && (this.dialogTitle.id = this.dialogTitle.id || "dialog-title");
        this.dialogDescription && (this.dialogDescription.id = this.dialogDescription.id || "dialog-description");
        this.focusTrap = focusTrap(this.element, { initialFocus: this.modalDialogElement });
    }
    toggleFocusTrap() {
        (this.shown) ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { shown: this.shown, onSntDismiss: this.hide.bind(this) },
            h("snt-layout", { padding: "none" },
                h("div", { id: "backdrop", class: "modal-backdrop fade", ref: (thisElement) => this.backdropElement = thisElement }),
                h("div", { class: WebUtils.generateClasses(["modal", "fade"], this.styleClasses), tabindex: "-1", role: "dialog", "aria-labelledby": this.dialogTitle ? this.dialogTitle['id'] : null, "aria-describedby": this.dialogDescription ? this.dialogDescription['id'] : null, "aria-hidden": (this.shown) ? "false" : "true", ref: (thisElement) => this.modalDialogElement = thisElement, onClick: (event) => (event.target == event.currentTarget && this.hide()), onKeyDown: (event) => (WebUtils.isValidEscapeKey(event) && this.hide()) },
                    h("div", { class: "modal-dialog modal-dialog-centered", role: "document" },
                        h("div", { class: "modal-content", ref: (elem) => this.modalContentElement = elem },
                            h("div", { class: "modal-header" }),
                            h("div", { class: "modal-body" },
                                h("slot", null)),
                            h("div", { class: "modal-footer" },
                                h("slot", { name: "footer" })),
                            h("button", { type: "button", class: "close", onClick: this.hide.bind(this) },
                                h("span", { class: "sr-only" }, this.languageVariables.close),
                                h("span", { class: "icon", "aria-hidden": "true" }))))))));
    }
    static get is() { return "snt-modal"; }
    static get originalStyleUrls() { return {
        "$": ["modal-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-component.css"]
    }; }
    static get properties() { return {
        "shown": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "shown",
            "reflect": true,
            "defaultValue": "false"
        },
        "modalTitle": {
            "type": "string",
            "mutable": true,
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
            "attribute": "modal-title",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "options": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ModalOptions",
                "resolved": "ModalOptions",
                "references": {
                    "ModalOptions": {
                        "location": "import",
                        "path": "./domain/ModalOptions"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "ModalComponent.DEFAULT_OPTIONS"
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
        "languageString": {
            "type": "string",
            "mutable": true,
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
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get events() { return [{
            "method": "modalEvent",
            "name": "modalEvent",
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
        "show": {
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
        },
        "hide": {
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
        },
        "toggle": {
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
        },
        "isShown": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
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
            "propName": "shown",
            "methodName": "toggleModal"
        }]; }
    static get listeners() { return [{
            "name": "modalEvent",
            "method": "modalEventHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
ModalComponent.TAG_NAME = "snt-modal";
ModalComponent.DEFAULT_OPTIONS = new ModalOptions();
ModalComponent.EVENT_MODAL_SHOWN = "modal-shown";
ModalComponent.EVENT_MODAL_SHOW = "modal-show";
ModalComponent.EVENT_MODAL_HIDDEN = "modal-hidden";
ModalComponent.EVENT_MODAL_HIDE = "modal-hide";
ModalComponent.CLASS_SHOW = "show";
ModalComponent.CLASS_READY_TO_SHOW = "ready-to-show";
ModalComponent.CLASS_MODAL_OPEN = "modal-open";
