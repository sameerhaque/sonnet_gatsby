import { h, Component, Prop, Element, Host } from "@stencil/core";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
export class ImageComponent {
    constructor() {
        this.emptyString = 'data:,';
        this.dataSrc = '';
        this.srcImage = '';
        this.srcset = '';
        this.imgAlt = '';
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    }
    render() {
        let sourceUrl;
        let dataSource;
        sourceUrl = StringUtils.isEmpty(this.srcImage) ? this.emptyString : this.srcImage;
        dataSource = StringUtils.isEmpty(this.dataSrc) ? this.emptyString : this.dataSrc;
        return (h(Host, null,
            h("img", { class: WebUtils.generateClasses([
                    StringUtils.isEmpty(this.srcImage) && StringUtils.isEmpty(this.dataSrc) ? "hidden" : ""
                ], this.styleClasses), src: sourceUrl, "data-src": dataSource, height: this.height, width: this.width, alt: this.imgAlt, srcset: this.srcset ? this.srcset : '', loading: 'lazy', sizes: this.sizes ? this.sizes : undefined })));
    }
    ;
    static get is() { return "snt-image"; }
    static get originalStyleUrls() { return {
        "$": ["image-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["image-component.css"]
    }; }
    static get properties() { return {
        "dataSrc": {
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
            "attribute": "data-src",
            "reflect": false,
            "defaultValue": "''"
        },
        "srcImage": {
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
            "attribute": "src-image",
            "reflect": false,
            "defaultValue": "''"
        },
        "width": {
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
            "attribute": "width",
            "reflect": false
        },
        "height": {
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
            "attribute": "height",
            "reflect": false
        },
        "srcset": {
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
            "attribute": "srcset",
            "reflect": false,
            "defaultValue": "''"
        },
        "imgAlt": {
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
            "attribute": "img-alt",
            "reflect": false,
            "defaultValue": "''"
        },
        "sizes": {
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
            "attribute": "sizes",
            "reflect": false
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
    static get elementRef() { return "element"; }
}
