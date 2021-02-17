'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
require('./StringUtils-cfa686e8.js');
require('./WebUtils-7da67880.js');
require('./_commonjsHelpers-fc53004f.js');
const ViewportAttributesBuilder = require('./ViewportAttributesBuilder-0c1b4980.js');

const layoutComponentCss = "snt-layout{display:block;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box}snt-layout>.spacings{overflow:auto}snt-layout[viewport=extra-large] .spacings{padding:3.75em 8.438em}snt-layout[viewport=large] .spacings{padding:3.75em 4.438em}snt-layout[viewport=medium] .spacings{padding:2.5em 2.313em}snt-layout[viewport=small] .spacings{padding:2.5em 1.875em}snt-layout[viewport=extra-small] .spacings{padding:2.5em 1.875em}snt-layout[padding=none]>.spacings{padding:0}snt-layout[padding=top-only]>.spacings{padding-bottom:0}snt-layout[padding=bottom-only]>.spacings{padding-top:0}snt-layout[padding=remove-sides]>.spacings{padding-left:0;padding-right:0}snt-layout[padding=vertical-only]>.spacings{padding-top:0;padding-bottom:0}.two-column-combined{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.combined-bottom snt-layout>.spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){.combined-bottom snt-layout>.spacings{padding-bottom:0.938em !important}}.combined-top snt-layout>.spacings{padding-top:0.813em !important}@media (min-width: 1024px){.combined-top snt-layout>.spacings{padding-top:0.938em !important}}.no-top snt-layout>.spacings{padding-top:0 !important}.no-bottom snt-layout>.spacings{padding-bottom:0 !important}.no-padding snt-layout>.spacings{padding:0 !important}.no-sides snt-layout>.spacings{padding-left:0 !important;padding-right:0 !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
const LayoutComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.viewportChanged = index.createEvent(this, "viewportChanged", 7);
    }
    onViewportChanged(value) {
        this.viewportChanged.emit({ viewport: value });
    }
    componentWillLoad() {
        this.context = new ViewportAttributesBuilder.DefaultContext();
        ViewportAttributesBuilder.ViewportConfigurationService.getInstance().register(this, this.getElements(), this.resize);
    }
    resize() {
        ViewportAttributesBuilder.ViewportConfigurationService.getInstance().process(this, this.context, this.getElements());
    }
    getElements() {
        return [ComponentConstants.Pair.of("element", this.element), ComponentConstants.Pair.of("element", window.document.body)];
    }
    render() {
        return (index.h("div", { class: "spacings" }, " ", index.h("slot", null), " "));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "viewport": ["onViewportChanged"]
    }; }
};
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance().with("viewport", "extra-small").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance().with("viewport", "small").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance().with("viewport", "medium").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance().with("viewport", "large").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance().with("viewport", "extra-large").build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], LayoutComponent.prototype, "element", void 0);
LayoutComponent.style = layoutComponentCss;

exports.snt_layout = LayoutComponent;
