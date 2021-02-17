import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
export class ThreeColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.leftColumn.setAttribute('viewport', viewport);
        this.centerColumn.setAttribute('viewport', viewport);
        this.rightColumn.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.registerChildren(this.leftColumn);
        this.registerChildren(this.centerColumn);
        this.registerChildren(this.rightColumn);
    }
    registerChildren(column) {
        column.childNodes.forEach((childEl) => {
            if (childEl.tagName === 'SNT-ICON-COPY') {
                childEl.registerViewport(this.layoutEl);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "flex-row" },
                    h("div", { class: "column", ref: el => this.leftColumn = el },
                        h("slot", { name: "left" })),
                    h("div", { class: "column", ref: el => this.centerColumn = el },
                        h("slot", { name: "center" })),
                    h("div", { class: "column", ref: el => this.rightColumn = el },
                        h("slot", { name: "right" }))))));
    }
    static get is() { return "snt-three-column"; }
    static get originalStyleUrls() { return {
        "$": ["three-column-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["three-column-component.css"]
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
ThreeColumnComponent.TAG_NAME = "snt-three-column";
