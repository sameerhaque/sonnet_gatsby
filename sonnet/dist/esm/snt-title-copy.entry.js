import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';

const titleCopyComponentCss = ".light-fill snt-title-copy,snt-title-copy.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-title-copy,snt-title-copy.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-title-copy,snt-title-copy.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-title-copy,snt-title-copy.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-title-copy,snt-title-copy.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-title-copy.left .content,snt-title-copy left.content,.left snt-title-copy .content{text-align:left}@media (max-width: 767px){snt-title-copy snt-layout.left-mobile .content,snt-title-copy snt-layout .left-mobile.content,.left-mobile snt-title-copy snt-layout .content{text-align:left}}snt-title-copy.center .content,snt-title-copy center.content,.center snt-title-copy .content{text-align:center}@media (max-width: 767px){snt-title-copy snt-layout.center-mobile .content,snt-title-copy snt-layout .center-mobile.content,.center-mobile snt-title-copy snt-layout .content{text-align:center}}snt-title-copy.right .content,snt-title-copy right.content,.right snt-title-copy .content{text-align:right}@media (max-width: 767px){snt-title-copy snt-layout.right-mobile .content,snt-title-copy snt-layout .right-mobile.content,.right-mobile snt-title-copy snt-layout .content{text-align:right}}snt-title-copy.left .header,snt-title-copy left.header,.left snt-title-copy .header{text-align:left}@media (max-width: 767px){snt-title-copy snt-layout.left-mobile .header,snt-title-copy snt-layout .left-mobile.header,.left-mobile snt-title-copy snt-layout .header{text-align:left}}snt-title-copy.center .header,snt-title-copy center.header,.center snt-title-copy .header{text-align:center}@media (max-width: 767px){snt-title-copy snt-layout.center-mobile .header,snt-title-copy snt-layout .center-mobile.header,.center-mobile snt-title-copy snt-layout .header{text-align:center}}snt-title-copy.right .header,snt-title-copy right.header,.right snt-title-copy .header{text-align:right}@media (max-width: 767px){snt-title-copy snt-layout.right-mobile .header,snt-title-copy snt-layout .right-mobile.header,.right-mobile snt-title-copy snt-layout .header{text-align:right}}snt-title-copy .header{text-align:center}snt-title-copy .with-content{padding-top:15px}snt-title-copy snt-layout[viewport=medium] .with-content{padding-top:20px}snt-title-copy snt-layout[viewport=large] .with-content{padding-top:25px}snt-title-copy snt-layout[viewport=extra-large] .with-content{padding-top:30px}snt-title-copy snt-link[target=_blank]{padding-right:25px}";

const TitleCopyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        const slotContentElement = this.hostElement.querySelector('div.content');
        if (!StringUtils.isEmpty(this.titleString) && !StringUtils.isEmpty(slotContentElement.innerHTML.trim())) {
            slotContentElement.classList.add('with-content');
        }
    }
    render() {
        return (h("snt-layout", null, StringUtils.isEmpty(this.titleString)
            ? ''
            : h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString), h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) }, h("slot", null))));
    }
    get hostElement() { return getElement(this); }
};
TitleCopyComponent.TAG_NAME = "snt-title-copy";
TitleCopyComponent.style = titleCopyComponentCss;

export { TitleCopyComponent as snt_title_copy };
