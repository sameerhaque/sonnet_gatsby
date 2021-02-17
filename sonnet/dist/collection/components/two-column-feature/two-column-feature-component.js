var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { DefaultContext } from "../../core/context/DefaultContext";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
import { ViewportParameters } from "../../core/viewport/decorators/ViewportParameters";
import { ViewportParameterBuilder } from "../../core/viewport/builder/ViewportParameterBuilder";
import { ComponentConstants } from "../ComponentConstants";
import { ViewportAttributesBuilder } from "../../core/viewport/builder/ViewportAttributesBuilder";
import { Pair } from "../../core/objects/pair";
export class TwoColumnFeatureComponent {
    constructor() {
        this.imagePosition = "left";
        this.primaryButtonText = StringUtils.empty();
        this.primaryButtonAction = StringUtils.empty();
        this.primaryButtonData = StringUtils.empty();
        this.secondaryButtonText = StringUtils.empty();
        this.secondaryButtonAction = StringUtils.empty();
        this.secondaryButtonData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.linkUrl = StringUtils.empty();
        this.openLinkInNewWindow = false;
    }
    componentDidLoad() {
        this.layoutEl = this.hostElement.querySelector('snt-layout');
        if (this.dataEl && typeof (this.dataEl.getData) == 'function') {
            this.dataEl.getData().then(value => {
                this.context = new DefaultContext().fromObject(value);
                ViewportConfigurationService.getInstance().register(this, [Pair.of('snt-layout', this.layoutEl)], this.viewportResize);
            });
        }
    }
    viewportResize() {
        ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('imageElement', this.imageElement)]);
    }
    render() {
        const imageColumn = (h("div", { class: `image-column ${this.imagePosition}`, slot: this.imagePosition == "left" ? "left" : "right" },
            h("snt-image", { "data-src": this.imagePath, "src-image": this.imagePath, "img-alt": this.imageAltText, ref: (el) => this.imageElement = el })));
        const primaryButtonContent = this.buildActionButton(this.primaryButtonText, this.primaryButtonAction, this.primaryButtonData, 'theme-default');
        const secondaryButtonContent = this.buildActionButton(this.secondaryButtonText, this.secondaryButtonAction, this.secondaryButtonData, 'theme-secondary');
        const linkContent = this.buildLink(this.linkTitle, this.linkUrl, 'theme-link');
        const contentColumn = (h("div", { class: "content-column", slot: this.imagePosition == "left" ? "right" : "left" },
            h("div", { class: "content-container" },
                h("h2", null, this.titleString),
                h("div", { class: "content", innerHTML: this.copyText }),
                primaryButtonContent,
                secondaryButtonContent,
                linkContent)));
        return [
            h("snt-two-column", null,
                imageColumn,
                contentColumn),
            h("div", null, this.properties
                ? h("snt-data", { type: "json", data: this.properties, ref: (el) => this.dataEl = el })
                : null)
        ];
    }
    buildActionButton(buttonText, buttonAction, buttonData, buttonClass) {
        return StringUtils.isEmpty(buttonText)
            ? null
            : h("snt-action-button", { "style-classes": 'cta ' + buttonClass, "action-reference": buttonAction, "action-data": buttonData, "link-title": buttonText });
    }
    buildLink(linkTitle, linkUrl, linkClass) {
        const linkContent = this.openLinkInNewWindow
            ? linkTitle
            : h("span", { class: "link-content" }, linkTitle);
        return StringUtils.isEmpty(linkTitle)
            ? null
            : h("snt-link", { "class-names": linkClass + ' theme-action', href: linkUrl, target: this.openLinkInNewWindow ? "_blank" : "" }, linkContent);
    }
    static get is() { return "snt-two-column-feature"; }
    static get originalStyleUrls() { return {
        "$": ["two-column-feature-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["two-column-feature-component.css"]
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
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "title-string",
            "reflect": true
        },
        "copyText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "copy-text",
            "reflect": true
        },
        "imagePath": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "image-path",
            "reflect": true
        },
        "imageAltText": {
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
            "attribute": "image-alt-text",
            "reflect": true
        },
        "imagePosition": {
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
            "attribute": "image-position",
            "reflect": true,
            "defaultValue": "\"left\""
        },
        "primaryButtonText": {
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
            "attribute": "primary-button-text",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "primaryButtonAction": {
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
            "attribute": "primary-button-action",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "primaryButtonData": {
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
            "attribute": "primary-button-data",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "secondaryButtonText": {
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
            "attribute": "secondary-button-text",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "secondaryButtonAction": {
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
            "attribute": "secondary-button-action",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "secondaryButtonData": {
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
            "attribute": "secondary-button-data",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "linkTitle": {
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
            "attribute": "link-title",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "linkUrl": {
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
            "attribute": "link-url",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        },
        "openLinkInNewWindow": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "open-link-in-new-window",
            "reflect": false,
            "defaultValue": "false"
        },
        "properties": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "properties",
            "reflect": false
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
TwoColumnFeatureComponent.TAG_NAME = "snt-two-column";
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{mobileImageUrl}}')
            .with('src-image', '{{mobileImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{tabletImageUrl}}')
            .with('src-image', '{{tabletImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopImageUrl}}')
            .with('src-image', '{{desktopImageUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{desktopHdTabletUrl}}')
            .with('src-image', '{{desktopHdTabletUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], TwoColumnFeatureComponent.prototype, "imageElement", void 0);
