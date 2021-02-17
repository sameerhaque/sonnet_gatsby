var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, h, Host, Listen, Prop, Method } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { ComponentConstants } from '../ComponentConstants';
export class MultiColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentWillLoad() {
        if (this.columnCount)
            this.columnCountObj = JSON.parse(this.columnCount);
    }
    componentDidLoad() {
        this.registerChildren();
        this.adjustLayout();
    }
    registerChildren() {
        this.flexGrid.childNodes.forEach((childEl) => {
            if (childEl.classList && childEl.classList.contains('column')) {
                childEl.childNodes.forEach((columnChildEl) => {
                    if (columnChildEl.tagName === 'SNT-ICON-COPY') {
                        columnChildEl.registerViewport(this.layoutEl);
                    }
                });
            }
        });
    }
    adjustLayout() {
        return __awaiter(this, void 0, void 0, function* () {
            let viewport = this.getViewport();
            Array.from(this.flexGrid.children).forEach((child) => {
                child.setAttribute('viewport', viewport);
            });
            this.toggleImages(viewport);
            yield this.tagLastRow(viewport);
            yield this.setColumns();
        });
    }
    getViewport() {
        const viewportBreakpoints = [
            { breakpoint: ComponentConstants.EXTRA_LARGE.getLeft(), viewport: 'extra-large' },
            { breakpoint: ComponentConstants.LARGE.getLeft(), viewport: 'large' },
            { breakpoint: ComponentConstants.MEDIUM.getLeft(), viewport: 'medium' },
            { breakpoint: ComponentConstants.SMALL.getLeft(), viewport: 'small' },
            { breakpoint: ComponentConstants.EXTRA_SMALL.getLeft(), viewport: 'extra-small' }
        ];
        const currentViewBreakpoint = viewportBreakpoints.find((viewBreakpoint) => window.innerWidth >= viewBreakpoint.breakpoint);
        return currentViewBreakpoint.viewport;
    }
    // TODO: Change into media queries
    toggleImages(viewport) {
        if (viewport == 'medium' || viewport == 'small') {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.contains(item.querySelector('snt-image-column'))) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            });
        }
    }
    // TODO: Rework this section to prevent repait for performance purposes
    tagLastRow(viewport) {
        return __awaiter(this, void 0, void 0, function* () {
            this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
                containerEl.classList.remove('last-row');
            });
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            const numberOfColumnsInLastRow = columnElements.length % this.columnCountObj[viewport] === 0
                ? Math.min(columnElements.length, this.columnCountObj[viewport])
                : columnElements.length % this.columnCountObj[viewport];
            const startingElement = columnElements.length - numberOfColumnsInLastRow;
            for (let index = startingElement; index < columnElements.length; index++) {
                columnElements[index].classList.add('last-row');
            }
        });
    }
    setColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            const classList = [];
            for (const [key, value] of Object.entries(this.columnCountObj)) {
                classList.push(`${key}-${value}`);
            }
            this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
                containerEl.classList.add(...classList);
            });
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "row", ref: el => this.flexGrid = el },
                    h("slot", null)))));
    }
    static get is() { return "snt-multi-column-mixed"; }
    static get originalStyleUrls() { return {
        "$": ["multi-column-mixed-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["multi-column-mixed-component.css"]
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
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        },
        "columnCount": {
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
            "attribute": "column-count",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "tagLastRow": {
            "complexType": {
                "signature": "(viewport: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    },
                    "NodeListOf": {
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
        "setColumns": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
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
    static get elementRef() { return "hostElement"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "adjustLayout",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
MultiColumnComponent.TAG_NAME = "snt-multi-column-mixed";
