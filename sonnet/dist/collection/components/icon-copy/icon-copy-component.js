var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, Host, h, Method, Prop } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { ViewportParameters } from "../../core/viewport/decorators/ViewportParameters";
import { ViewportAttributesBuilder } from '../../core/viewport/builder/ViewportAttributesBuilder';
import { ViewportParameterBuilder } from "../../core/viewport/builder/ViewportParameterBuilder";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
import { Pair } from "../../core/objects/pair";
import { DefaultContext } from "../../core/context/DefaultContext";
import { ComponentConstants } from "../ComponentConstants";
export class IconCopyComponent {
    constructor() {
        this.titleString = '';
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.linkId = StringUtils.empty();
    }
    registerViewport(target) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parentLayout = target;
        });
    }
    componentDidLoad() {
        this.data.getData().then(value => {
            this.context = new DefaultContext().fromObject(value);
            if (this.logoIsSet) {
                //Set Logo-Copy
                const largeLogoUrl = this.context.getInstance('largeLogoUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeLogoUrl);
                if (StringUtils.isEmpty(largeLogoUrl) && StringUtils.isEmpty(largeLogoUrl)) {
                    this.logo.classList.add('hidden');
                }
            }
            else {
                //Set Icon-Copy
                this.normalizeIconValues();
                const largeIconUrl = this.context.getInstance('largeIconUrl');
                const smallIconUrl = this.context.getInstance('smallIconUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeIconUrl);
                if (StringUtils.isEmpty(largeIconUrl) && StringUtils.isEmpty(smallIconUrl)) {
                    this.icon.classList.add('hidden');
                }
            }
            if (this.parentLayout) {
                ViewportConfigurationService.getInstance().register(this, [Pair.of('snt-layout', this.parentLayout)], this.resize);
            }
        });
    }
    normalizeIconValues() {
        const largeIconUrl = this.context.getInstance('largeIconUrl');
        const smallIconUrl = this.context.getInstance('smallIconUrl');
        if (StringUtils.isEmpty(largeIconUrl) && StringUtils.hasValue(smallIconUrl)) {
            this.context.add('largeIconUrl', smallIconUrl);
        }
        else if (StringUtils.isEmpty(smallIconUrl) && StringUtils.hasValue(largeIconUrl)) {
            this.context.add('smallIconUrl', largeIconUrl);
        }
    }
    resize() {
        if (this.logoIsSet) {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('logo', this.image)]);
        }
        else {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('icon', this.image)]);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (h("div", { ref: (el) => this.logo = el, class: "logo" },
                h("img", { class: "logo-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        else {
            content = (h("div", { ref: (el) => this.icon = el, class: "icon" },
                h("img", { class: "icon-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        const iconCopyPanel = [
            h("div", { class: "icon-copy-panel" },
                content,
                h("h3", null, this.titleString),
                h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                    h("slot", null)))
        ];
        return (h(Host, { class: (this.linkHref || this.linkActionReference) ? "link" : null },
            (this.linkActionReference)
                ? h("snt-action-link", { "link-id": this.linkId, actionReference: this.linkActionReference, actionData: this.linkActionData }, iconCopyPanel)
                : (this.linkHref)
                    ? h("snt-link", { "link-id": this.linkId, href: this.linkHref, title: this.linkTitle, target: this.linkTarget, rel: this.linkRel }, iconCopyPanel)
                    : iconCopyPanel,
            h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: (el) => this.data = el })));
    }
    static get is() { return "snt-icon-copy"; }
    static get originalStyleUrls() { return {
        "$": ["icon-copy-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon-copy-component.css"]
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
            "reflect": true,
            "defaultValue": "''"
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
        },
        "propertiesSrc": {
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
            "attribute": "properties-src",
            "reflect": false
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
        },
        "resizeEl": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "logoIsSet": {
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
            "attribute": "logo-is-set",
            "reflect": false,
            "defaultValue": "false"
        },
        "linkHref": {
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
            "attribute": "link-href",
            "reflect": false
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
            "reflect": false
        },
        "linkTarget": {
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
            "attribute": "link-target",
            "reflect": false
        },
        "linkRel": {
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
            "attribute": "link-rel",
            "reflect": false
        },
        "linkActionReference": {
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
            "attribute": "link-action-reference",
            "reflect": false
        },
        "linkActionData": {
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
            "attribute": "link-action-data",
            "reflect": false
        },
        "linkId": {
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
            "attribute": "link-id",
            "reflect": false,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get methods() { return {
        "registerViewport": {
            "complexType": {
                "signature": "(target: HTMLElement) => Promise<void>",
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
    static get elementRef() { return "el"; }
}
IconCopyComponent.TAG_NAME = "snt-icon-copy";
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "icon", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{mediumLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{extraLargeLogoUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "logo", void 0);
