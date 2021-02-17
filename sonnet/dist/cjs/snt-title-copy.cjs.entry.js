'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const titleCopyComponentCss = ".light-fill snt-title-copy,snt-title-copy.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-title-copy,snt-title-copy.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-title-copy,snt-title-copy.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-title-copy,snt-title-copy.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-title-copy,snt-title-copy.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-title-copy.left .content,snt-title-copy left.content,.left snt-title-copy .content{text-align:left}@media (max-width: 767px){snt-title-copy snt-layout.left-mobile .content,snt-title-copy snt-layout .left-mobile.content,.left-mobile snt-title-copy snt-layout .content{text-align:left}}snt-title-copy.center .content,snt-title-copy center.content,.center snt-title-copy .content{text-align:center}@media (max-width: 767px){snt-title-copy snt-layout.center-mobile .content,snt-title-copy snt-layout .center-mobile.content,.center-mobile snt-title-copy snt-layout .content{text-align:center}}snt-title-copy.right .content,snt-title-copy right.content,.right snt-title-copy .content{text-align:right}@media (max-width: 767px){snt-title-copy snt-layout.right-mobile .content,snt-title-copy snt-layout .right-mobile.content,.right-mobile snt-title-copy snt-layout .content{text-align:right}}snt-title-copy.left .header,snt-title-copy left.header,.left snt-title-copy .header{text-align:left}@media (max-width: 767px){snt-title-copy snt-layout.left-mobile .header,snt-title-copy snt-layout .left-mobile.header,.left-mobile snt-title-copy snt-layout .header{text-align:left}}snt-title-copy.center .header,snt-title-copy center.header,.center snt-title-copy .header{text-align:center}@media (max-width: 767px){snt-title-copy snt-layout.center-mobile .header,snt-title-copy snt-layout .center-mobile.header,.center-mobile snt-title-copy snt-layout .header{text-align:center}}snt-title-copy.right .header,snt-title-copy right.header,.right snt-title-copy .header{text-align:right}@media (max-width: 767px){snt-title-copy snt-layout.right-mobile .header,snt-title-copy snt-layout .right-mobile.header,.right-mobile snt-title-copy snt-layout .header{text-align:right}}snt-title-copy .header{text-align:center}snt-title-copy .with-content{padding-top:15px}snt-title-copy snt-layout[viewport=medium] .with-content{padding-top:20px}snt-title-copy snt-layout[viewport=large] .with-content{padding-top:25px}snt-title-copy snt-layout[viewport=extra-large] .with-content{padding-top:30px}snt-title-copy snt-link[target=_blank]{padding-right:25px}";

const TitleCopyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    componentDidLoad() {
        const slotContentElement = this.hostElement.querySelector('div.content');
        if (!StringUtils.StringUtils.isEmpty(this.titleString) && !StringUtils.StringUtils.isEmpty(slotContentElement.innerHTML.trim())) {
            slotContentElement.classList.add('with-content');
        }
    }
    render() {
        return (index.h("snt-layout", null, StringUtils.StringUtils.isEmpty(this.titleString)
            ? ''
            : index.h("h2", { class: WebUtils.WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString), index.h("div", { class: WebUtils.WebUtils.generateClasses(["content"], this.styleClasses) }, index.h("slot", null))));
    }
    get hostElement() { return index.getElement(this); }
};
TitleCopyComponent.TAG_NAME = "snt-title-copy";
TitleCopyComponent.style = titleCopyComponentCss;

exports.snt_title_copy = TitleCopyComponent;
