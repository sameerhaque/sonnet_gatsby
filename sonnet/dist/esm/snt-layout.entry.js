import { r as registerInstance, e as createEvent, h, g as getElement } from './index-79f6678c.js';
import { P as Pair, C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import './WebUtils-eeb89633.js';
import './_commonjsHelpers-7b8ed50b.js';
import { D as DefaultContext, V as ViewportConfigurationService, a as ViewportParameters, b as ViewportParameterBuilder, c as ViewportAttributesBuilder } from './ViewportAttributesBuilder-678f2b08.js';

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
        registerInstance(this, hostRef);
        this.viewportChanged = createEvent(this, "viewportChanged", 7);
    }
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
        return (h("div", { class: "spacings" }, " ", h("slot", null), " "));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "viewport": ["onViewportChanged"]
    }; }
};
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
LayoutComponent.style = layoutComponentCss;

export { LayoutComponent as snt_layout };
