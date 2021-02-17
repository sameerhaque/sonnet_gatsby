import { Component, Element, h, Prop } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
export class TitleCopyComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        const slotContentElement = this.hostElement.querySelector('div.content');
        if (!StringUtils.isEmpty(this.titleString) && !StringUtils.isEmpty(slotContentElement.innerHTML.trim())) {
            slotContentElement.classList.add('with-content');
        }
    }
    render() {
        return (h("snt-layout", null,
            StringUtils.isEmpty(this.titleString)
                ? ''
                : h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString),
            h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                h("slot", null))));
    }
    static get is() { return "snt-title-copy"; }
    static get originalStyleUrls() { return {
        "$": ["title-copy-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["title-copy-component.css"]
    }; }
    static get properties() { return {
        "titleString": {
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
            "attribute": "title-string",
            "reflect": true
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
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
TitleCopyComponent.TAG_NAME = "snt-title-copy";
