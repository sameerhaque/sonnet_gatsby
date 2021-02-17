'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const EventConfigurationBuilder = require('./EventConfigurationBuilder-ca448050.js');
require('./ReflectionUtils-89506fdc.js');

const ctaReminderComponentCss = "snt-cta-reminder{background-color:#6ebac5;display:block}snt-cta-reminder h2{margin:0px}snt-cta-reminder.left .header,snt-cta-reminder left.header,.left snt-cta-reminder .header{text-align:left}@media (max-width: 767px){snt-cta-reminder snt-layout.left-mobile .header,snt-cta-reminder snt-layout .left-mobile.header,.left-mobile snt-cta-reminder snt-layout .header{text-align:left}}snt-cta-reminder.center .header,snt-cta-reminder center.header,.center snt-cta-reminder .header{text-align:center}@media (max-width: 767px){snt-cta-reminder snt-layout.center-mobile .header,snt-cta-reminder snt-layout .center-mobile.header,.center-mobile snt-cta-reminder snt-layout .header{text-align:center}}snt-cta-reminder.right .header,snt-cta-reminder right.header,.right snt-cta-reminder .header{text-align:right}@media (max-width: 767px){snt-cta-reminder snt-layout.right-mobile .header,snt-cta-reminder snt-layout .right-mobile.header,.right-mobile snt-cta-reminder snt-layout .header{text-align:right}}snt-cta-reminder .action-button{margin-top:30px;text-align:center;width:100%}snt-cta-reminder .action-button button-link{display:inline-block}snt-cta-reminder .action-button button-link .icon-font::after{color:white}snt-cta-reminder snt-action-button snt-button.cta button{width:100%}snt-cta-reminder button-link{width:100%}snt-cta-reminder snt-layout[viewport=medium] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=medium] button-link{width:auto}snt-cta-reminder snt-layout[viewport=large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=large] button-link{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] button-link{width:auto}";

const CtaReminderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.titleString = StringUtils.StringUtils.empty();
        this.linkTitle = StringUtils.StringUtils.empty();
        this.url = StringUtils.StringUtils.empty();
        this.urlTarget = StringUtils.StringUtils.empty();
        this.actionReference = StringUtils.StringUtils.empty();
        this.actionData = StringUtils.StringUtils.empty();
        this.styleClasses = StringUtils.StringUtils.empty();
        this.buttonId = StringUtils.StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.StringUtils.isEmpty(this.actionReference) && StringUtils.StringUtils.isEmpty(this.url)) {
            this.eventConfiguration = EventConfigurationBuilder.EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.StringUtils.hasValue(this.url)) {
            content = (index.h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, "aria-label": this.linkTitle, href: this.url }, this.linkTitle));
        }
        else {
            content = (index.h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.linkTitle }));
        }
        return (index.h("snt-layout", null, index.h("h2", { class: WebUtils.WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString), index.h("div", { class: "action-button" }, content)));
    }
    get element() { return index.getElement(this); }
};
CtaReminderComponent.TAG_NAME = "snt-cta-reminder";
CtaReminderComponent.style = ctaReminderComponentCss;

exports.snt_cta_reminder = CtaReminderComponent;
