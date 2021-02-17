import { Component, h, Prop, Event } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
export class FAQFilterSliderComponent {
    onFilterClick(filterKey) {
        if (this.currentActive !== filterKey) {
            this.currentActive = filterKey;
            this.faqFilterClick.emit(filterKey);
        }
    }
    componentWillRender() {
        try {
            this._filterArr = JSON.parse(this.filterItems);
        }
        catch (e) {
            console.log(`Error parsing filterItems: ${this.filterItems}`);
        }
        if (StringUtils.isEmpty(this.currentActive)) {
            this.currentActive = this._filterArr.length != 0 ? this._filterArr[0].key : "";
        }
    }
    render() {
        return [
            h("host", { class: this._filterArr.length === 0 ? "hide" : "" },
                h("snt-layout", null,
                    h("div", { class: "wrapper" },
                        h("div", { class: "right-gradient" }),
                        h("div", { class: "left-gradient" }),
                        h("div", { class: "filter-container" },
                            h("nav", { "aria-label": this.menuAriaLabel },
                                h("ul", null, this._filterArr.map(item => (h("li", null,
                                    h("a", { href: "javascript:void(0)", class: item.key == this.currentActive ? "active" : "", onClick: this.onFilterClick.bind(this, item.key) }, item.title),
                                    h("span", { class: "bold-hidden" }, item.title))))))))))
        ];
    }
    static get is() { return "snt-faq-filter-slider"; }
    static get originalStyleUrls() { return {
        "$": ["faq-filter-slider-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["faq-filter-slider-component.css"]
    }; }
    static get properties() { return {
        "filterItems": {
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
            "attribute": "filter-items",
            "reflect": true
        },
        "menuAriaLabel": {
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
            "attribute": "menu-aria-label",
            "reflect": false
        },
        "currentActive": {
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
            "attribute": "current-active",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "faqFilterClick",
            "name": "faqFilterClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
FAQFilterSliderComponent.TAG_NAME = "snt-faq-filter-slider";
