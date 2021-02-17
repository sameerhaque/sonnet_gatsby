import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { E as EventConfigurationBuilder } from './EventConfigurationBuilder-7481df3b.js';
import './ReflectionUtils-6ed4bd5c.js';

const ctaHighlightComponentCss = "snt-cta-highlight.left .text-content,snt-cta-highlight left.text-content,.left snt-cta-highlight .text-content{text-align:left}@media (max-width: 767px){snt-cta-highlight snt-layout.left-mobile .text-content,snt-cta-highlight snt-layout .left-mobile.text-content,.left-mobile snt-cta-highlight snt-layout .text-content{text-align:left}}snt-cta-highlight.center .text-content,snt-cta-highlight center.text-content,.center snt-cta-highlight .text-content{text-align:center}@media (max-width: 767px){snt-cta-highlight snt-layout.center-mobile .text-content,snt-cta-highlight snt-layout .center-mobile.text-content,.center-mobile snt-cta-highlight snt-layout .text-content{text-align:center}}snt-cta-highlight.right .text-content,snt-cta-highlight right.text-content,.right snt-cta-highlight .text-content{text-align:right}@media (max-width: 767px){snt-cta-highlight snt-layout.right-mobile .text-content,snt-cta-highlight snt-layout .right-mobile.text-content,.right-mobile snt-cta-highlight snt-layout .text-content{text-align:right}}snt-cta-highlight .cta-container{background:#6ebac5}snt-cta-highlight .cta-container h4.text-content{margin-right:30px;display:inline-block}snt-cta-highlight button-link{display:inline-block}snt-cta-highlight button-link .icon-font::after{color:white}snt-cta-highlight .text-content{font-size:0.875rem;line-height:21px;display:inline-block;width:100%;margin:0px 0px 15px 0px;font-family:\"Averta-ExtraBold\", sans-serif !important;font-weight:500 !important}snt-cta-highlight snt-layout[viewport] .spacings{padding-top:15px;padding-bottom:15px}@media (min-width: 768px){snt-cta-highlight .cta-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}snt-cta-highlight snt-button,snt-cta-highlight button-link{white-space:nowrap}snt-cta-highlight .text-content{margin-right:30px;margin-bottom:0px;width:inherit}}@media (min-width: 1024px){snt-cta-highlight .text-content{font-size:1rem}}@media (min-width: 1440px){snt-cta-highlight .text-content{font-size:1.313rem;line-height:26px}}";

const CtaHighlightComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, href: this.url }, this.cta));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.cta }));
        }
        return (h("snt-layout", { class: "cta-container" }, h("div", { class: "cta-wrapper" }, h("div", { class: "text-content" }, h("slot", null)), content)));
    }
    get element() { return getElement(this); }
};
CtaHighlightComponent.TAG_NAME = "snt-cta-highlight";
CtaHighlightComponent.style = ctaHighlightComponentCss;

export { CtaHighlightComponent as snt_cta_highlight };
