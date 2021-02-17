var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Prop, Watch, Event } from "@stencil/core";
import { ViewportParameterBuilder } from "../../core/viewport/builder/ViewportParameterBuilder";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
import { Pair } from "../../core/objects/pair";
import { DefaultContext } from "../../core/context/DefaultContext";
import { ComponentConstants } from "../ComponentConstants";
import { ViewportAttributesBuilder } from "../../core/viewport/builder/ViewportAttributesBuilder";
import { ViewportParameters } from "../../core/viewport/decorators/ViewportParameters";
export class LayoutComponent {
    onViewportChanged(value) {
        this.viewportChanged.emit({ viewport: value });
    }
    componentWillLoad() {
        this.context = new DefaultContext();
        ViewportConfigurationService.getInstance().register(this, this.getElements(), this.resize);
    }
    resize() {
        ViewportConfigurationService.getInstance().process(this, this.context, this.getElements());
    }
    getElements() {
        return [Pair.of("element", this.element), Pair.of("element", window.document.body)];
    }
    render() {
        return (h("div", { class: "spacings" },
            " ",
            h("slot", null),
            " "));
    }
    static get is() { return "snt-layout"; }
    static get originalStyleUrls() { return {
        "$": ["layout-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["layout-component.css"]
    }; }
    static get properties() { return {
        "viewport": {
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
            "attribute": "viewport",
            "reflect": true
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'none'|'top-only'|'bottom-only'|'remove-sides'|'vertical-only'",
                "resolved": "\"bottom-only\" | \"none\" | \"remove-sides\" | \"top-only\" | \"vertical-only\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "viewportChanged",
            "name": "viewportChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "viewport",
            "methodName": "onViewportChanged"
        }]; }
}
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance().with("viewport", "extra-small").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance().with("viewport", "small").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance().with("viewport", "medium").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance().with("viewport", "large").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance().with("viewport", "extra-large").build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], LayoutComponent.prototype, "element", void 0);
