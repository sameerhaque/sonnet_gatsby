import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { E as EventConfigurationBuilder } from './EventConfigurationBuilder-7481df3b.js';
import './ReflectionUtils-6ed4bd5c.js';
var ctaReminderComponentCss = "snt-cta-reminder{background-color:#6ebac5;display:block}snt-cta-reminder h2{margin:0px}snt-cta-reminder.left .header,snt-cta-reminder left.header,.left snt-cta-reminder .header{text-align:left}@media (max-width: 767px){snt-cta-reminder snt-layout.left-mobile .header,snt-cta-reminder snt-layout .left-mobile.header,.left-mobile snt-cta-reminder snt-layout .header{text-align:left}}snt-cta-reminder.center .header,snt-cta-reminder center.header,.center snt-cta-reminder .header{text-align:center}@media (max-width: 767px){snt-cta-reminder snt-layout.center-mobile .header,snt-cta-reminder snt-layout .center-mobile.header,.center-mobile snt-cta-reminder snt-layout .header{text-align:center}}snt-cta-reminder.right .header,snt-cta-reminder right.header,.right snt-cta-reminder .header{text-align:right}@media (max-width: 767px){snt-cta-reminder snt-layout.right-mobile .header,snt-cta-reminder snt-layout .right-mobile.header,.right-mobile snt-cta-reminder snt-layout .header{text-align:right}}snt-cta-reminder .action-button{margin-top:30px;text-align:center;width:100%}snt-cta-reminder .action-button button-link{display:inline-block}snt-cta-reminder .action-button button-link .icon-font::after{color:white}snt-cta-reminder snt-action-button snt-button.cta button{width:100%}snt-cta-reminder button-link{width:100%}snt-cta-reminder snt-layout[viewport=medium] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=medium] button-link{width:auto}snt-cta-reminder snt-layout[viewport=large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=large] button-link{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] button-link{width:auto}";
var CtaReminderComponent = /** @class */ (function () {
    function CtaReminderComponent(hostRef) {
        registerInstance(this, hostRef);
        this.titleString = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    CtaReminderComponent.prototype.componentDidLoad = function () {
        if (!StringUtils.isEmpty(this.actionReference) && StringUtils.isEmpty(this.url)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    };
    CtaReminderComponent.prototype.render = function () {
        var content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, "aria-label": this.linkTitle, href: this.url }, this.linkTitle));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.linkTitle }));
        }
        return (h("snt-layout", null, h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString), h("div", { class: "action-button" }, content)));
    };
    Object.defineProperty(CtaReminderComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return CtaReminderComponent;
}());
CtaReminderComponent.TAG_NAME = "snt-cta-reminder";
CtaReminderComponent.style = ctaReminderComponentCss;
export { CtaReminderComponent as snt_cta_reminder };
