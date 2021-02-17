var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Listen, Host, Prop } from "@stencil/core";
import { ViewportParameters } from "../../core/viewport/decorators/ViewportParameters";
import { ViewportStylesBuilder } from "../../core/viewport/builder/ViewportStylesBuilder";
import { ViewportAttributesBuilder } from '../../core/viewport/builder/ViewportAttributesBuilder';
import { ViewportParameterBuilder } from "../../core/viewport/builder/ViewportParameterBuilder";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
import { Pair } from "../../core/objects/pair";
import { DefaultContext } from "../../core/context/DefaultContext";
import { ComponentConstants } from "../ComponentConstants";
import { StringUtils } from "../../core/utils/StringUtils";
export class HeroComponent {
    onResize(event) {
        const viewport = event.detail.viewport;
        this.mobileImage.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.data.getData().then(value => {
            this.context = new DefaultContext().fromObject(value);
            this.mobileImage.setAttribute('src-image', this.context.getInstance('small').styles.backgroundImage);
            this.mobileImage.setAttribute('data-src', this.context.getInstance('small').styles.backgroundImage);
            ViewportConfigurationService.getInstance().register(this, this.getElements(), this.resize);
        }).catch(() => {
        });
    }
    resize() {
        ViewportConfigurationService.getInstance().process(this, this.context, this.getElements());
        if (StringUtils.hasValue(this.logoImage.getAttribute('src-image'))) {
            this.panel.classList.add('logo-present');
        }
        else {
            this.panel.classList.remove('logo-present');
        }
    }
    getElements() {
        const elements = [Pair.of("panel", this.panel), Pair.of("logoImage", this.logoImage)];
        return elements;
    }
    render() {
        return (h(Host, null,
            h("snt-panel", { ref: (el) => this.panel = el },
                h("div", { class: 'hero_container' },
                    h("snt-image", { "src-image": "", "data-src": "", ref: (el) => this.logoImage = el }),
                    h("slot", { name: "content" }))),
            h("snt-image", { class: "mobile-image", "src-image": "", "data-src": "", ref: (el) => this.mobileImage = el }),
            h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: (el) => this.data = el })));
    }
    static get is() { return "snt-hero"; }
    static get originalStyleUrls() { return {
        "$": ["hero-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hero-component.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "viewportChanged",
            "method": "onResize",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{medium.styles.backgroundImage}}')").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{large.styles.backgroundImage}}')").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{extra_large.styles.backgroundImage}}')").build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "panel", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_small.logoUrl}}')
            .with('src-image', '{{extra_small.logoUrl}}')
            .with('img-alt', '{{extra_small.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{small.logoUrl}}')
            .with('src-image', '{{small.logoUrl}}')
            .with('img-alt', '{{small.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{medium.logoUrl}}')
            .with('src-image', '{{medium.logoUrl}}')
            .with('img-alt', '{{medium.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{large.logoUrl}}')
            .with('src-image', '{{large.logoUrl}}')
            .with('img-alt', '{{large.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_large.logoUrl}}')
            .with('src-image', '{{extra_large.logoUrl}}')
            .with('img-alt', '{{extra_large.logoAltText}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "logoImage", void 0);
