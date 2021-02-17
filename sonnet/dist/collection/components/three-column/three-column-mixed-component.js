import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
export class ThreeColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        this.registerChildren();
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
    onResize(event) {
        const viewport = event.detail.viewport;
        Array.from(this.flexGrid.children).forEach((child) => {
            child.setAttribute('viewport', viewport);
        });
        this.toggleImages(viewport);
        this.tagLastRow(viewport);
        this.setStartAndEnd(viewport);
    }
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
    tagLastRow(viewport) {
        const columnCount = {
            'extra-small': 1,
            'small': 1,
            'medium': 2,
            'large': 3,
            'extra-large': 3
        };
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('last-row');
        });
        const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
        const numberOfColumnsInLastRow = columnElements.length % columnCount[viewport] === 0
            ? columnCount[viewport]
            : columnElements.length % columnCount[viewport];
        const startingElement = columnElements.length - numberOfColumnsInLastRow;
        for (let index = startingElement; index < columnElements.length; index++) {
            columnElements[index].classList.add('last-row');
        }
    }
    setStartAndEnd(viewport) {
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('row-start');
            containerEl.classList.remove('row-end');
        });
        if (viewport !== 'medium') {
            return;
        }
        else {
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            for (let index = 0; index < columnElements.length; index++) {
                if (index % 2 === 0) {
                    columnElements[index].classList.add('row-start');
                }
                else {
                    columnElements[index].classList.add('row-end');
                }
            }
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "row", ref: el => this.flexGrid = el },
                    h("slot", null)))));
    }
    static get is() { return "snt-three-column-mixed"; }
    static get originalStyleUrls() { return {
        "$": ["three-column-mixed-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["three-column-mixed-component.css"]
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
        }
    }; }
    static get elementRef() { return "hostElement"; }
    static get listeners() { return [{
            "name": "viewportChanged",
            "method": "onResize",
            "target": "parent",
            "capture": false,
            "passive": false
        }]; }
}
ThreeColumnComponent.TAG_NAME = "snt-three-column-mixed";
