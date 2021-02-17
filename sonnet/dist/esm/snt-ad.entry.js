import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LazyLoadIntersectionObserverManager } from './ImageLazyLoadIntersectionObserverManager-28d19548.js';

const adComponentCss = "snt-ad.left .content,snt-ad left.content,.left snt-ad .content{text-align:left}@media (max-width: 767px){snt-ad snt-layout.left-mobile .content,snt-ad snt-layout .left-mobile.content,.left-mobile snt-ad snt-layout .content{text-align:left}}snt-ad.center .content,snt-ad center.content,.center snt-ad .content{text-align:center}@media (max-width: 767px){snt-ad snt-layout.center-mobile .content,snt-ad snt-layout .center-mobile.content,.center-mobile snt-ad snt-layout .content{text-align:center}}snt-ad.right .content,snt-ad right.content,.right snt-ad .content{text-align:right}@media (max-width: 767px){snt-ad snt-layout.right-mobile .content,snt-ad snt-layout .right-mobile.content,.right-mobile snt-ad snt-layout .content{text-align:right}}.desktop-only snt-ad,snt-ad.desktop-only{display:none}@media (min-width: 1024px){.desktop-only snt-ad,snt-ad.desktop-only{display:block}}snt-ad h3{text-align:center;margin-bottom:15px}snt-ad .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-ad .icon,snt-ad .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-ad .icon,snt-ad .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-ad .icon,snt-ad .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-ad .icon,snt-ad .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-ad .icon,snt-ad .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-ad .icon,snt-ad .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-ad .ad-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:3px solid #e5e5e5;padding:40px 30px}.neutral-fill snt-ad .ad-panel,snt-ad .ad-panel.neutral-fill{color:#323232;background-color:#ffffff;border:3px solid #e5e5e5}.light-fill snt-ad .ad-panel,snt-ad .ad-panel.light-fill{color:#323232;background-color:#d9f0f4;border:none}.dark-fill snt-ad .ad-panel,snt-ad .ad-panel.dark-fill{color:#ffffff;background-color:#147582;border:none}.float-fill snt-ad .ad-panel,snt-ad .ad-panel.float-fill{color:#323232;background-color:#ffffff;border:none}.primary-fill snt-ad .ad-panel,snt-ad .ad-panel.primary-fill{color:#323232;background-color:#6ebac5;border:none}.light-stroke snt-ad .ad-panel,snt-ad .ad-panel.light-stroke{color:#323232;background-color:#ffffff;border:3px solid #acdde4}snt-ad .hidden{display:none}snt-ad .logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;height:60px;width:214px}snt-ad .logo-image{max-height:60px;max-width:214px}snt-ad button-link-group{width:unset;margin-top:15px}snt-ad button-link-group button-link,snt-ad button-link-group snt-button button{width:unset;background-color:#ffffff;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link:hover,snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button:hover,snt-ad button-link-group snt-button button:focus{color:#323232;background-color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.neutral-fill,.neutral-fill snt-ad button-link-group button-link,snt-ad button-link-group snt-button button.neutral-fill,.neutral-fill snt-ad button-link-group snt-button button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.neutral-fill:hover,snt-ad button-link-group button-link.neutral-fill:focus,.neutral-fill snt-ad button-link-group button-link:hover,.neutral-fill snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button.neutral-fill:hover,snt-ad button-link-group snt-button button.neutral-fill:focus,.neutral-fill snt-ad button-link-group snt-button button:hover,.neutral-fill snt-ad button-link-group snt-button button:focus{color:#ffffff;background-color:#323232}snt-ad button-link-group button-link.light-fill,.light-fill snt-ad button-link-group button-link,snt-ad button-link-group snt-button button.light-fill,.light-fill snt-ad button-link-group snt-button button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.light-fill:hover,snt-ad button-link-group button-link.light-fill:focus,.light-fill snt-ad button-link-group button-link:hover,.light-fill snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button.light-fill:hover,snt-ad button-link-group snt-button button.light-fill:focus,.light-fill snt-ad button-link-group snt-button button:hover,.light-fill snt-ad button-link-group snt-button button:focus{color:#ffffff;background-color:#d9f0f4}snt-ad button-link-group button-link.float-fill,.float-fill snt-ad button-link-group button-link,snt-ad button-link-group snt-button button.float-fill,.float-fill snt-ad button-link-group snt-button button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.float-fill:hover,snt-ad button-link-group button-link.float-fill:focus,.float-fill snt-ad button-link-group button-link:hover,.float-fill snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button.float-fill:hover,snt-ad button-link-group snt-button button.float-fill:focus,.float-fill snt-ad button-link-group snt-button button:hover,.float-fill snt-ad button-link-group snt-button button:focus{color:#ffffff;background-color:#323232}snt-ad button-link-group button-link.primary-fill,.primary-fill snt-ad button-link-group button-link,snt-ad button-link-group snt-button button.primary-fill,.primary-fill snt-ad button-link-group snt-button button{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.primary-fill:hover,snt-ad button-link-group button-link.primary-fill:focus,.primary-fill snt-ad button-link-group button-link:hover,.primary-fill snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button.primary-fill:hover,snt-ad button-link-group snt-button button.primary-fill:focus,.primary-fill snt-ad button-link-group snt-button button:hover,.primary-fill snt-ad button-link-group snt-button button:focus{color:#323232;background-color:transparent}snt-ad button-link-group button-link.light-stroke,.light-stroke snt-ad button-link-group button-link,snt-ad button-link-group snt-button button.light-stroke,.light-stroke snt-ad button-link-group snt-button button{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.light-stroke:hover,snt-ad button-link-group button-link.light-stroke:focus,.light-stroke snt-ad button-link-group button-link:hover,.light-stroke snt-ad button-link-group button-link:focus,snt-ad button-link-group snt-button button.light-stroke:hover,snt-ad button-link-group snt-button button.light-stroke:focus,.light-stroke snt-ad button-link-group snt-button button:hover,.light-stroke snt-ad button-link-group snt-button button:focus{color:#ffffff;background-color:#323232}@media (min-width: 768px){snt-ad h3{margin-bottom:20px}snt-ad .logo{height:60px;width:min(100%, 286px)}snt-ad .logo-image{max-height:60px;max-width:min(100%, 286px)}snt-ad button-link-group{margin-top:20px}}@media (min-width: 1024px){snt-ad h3{margin-bottom:25px}snt-ad .icon{height:80px;width:80px}snt-ad .icon-image{height:45px;width:45px}snt-ad .logo{height:80px;width:min(100%, 228px)}snt-ad .logo-image{max-height:80px;max-width:min(100%, 228px)}snt-ad button-link-group{margin-top:25px}}@media (min-width: 1440px){snt-ad h3{margin-bottom:30px}snt-ad .icon{height:80px;width:80px}snt-ad .icon-image{height:45px;width:45px}snt-ad .logo{height:80px;width:min(100%, 324px)}snt-ad .logo-image{max-height:80px;max-width:min(100%, 324px)}snt-ad button-link-group{margin-top:30px}}";

const AdComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleString = "";
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.iconIsSet = false;
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.iconSources)) {
            this.iconSourceJson = JSON.parse(this.iconSources);
            if (this.iconSourceJson.largeIconUrl || this.iconSourceJson.smallIconUrl) {
                this.iconIsSet = true;
            }
        }
        if (StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length > 0) {
                this.logoIsSet = true;
            }
        }
    }
    componentDidLoad() {
        if (this.logoIsSet || this.iconIsSet) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (h("div", { class: "logo" }, h("picture", null, h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }), h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }), h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }), h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }), h("img", { class: "logo-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        else if (this.iconIsSet) {
            content = (h("div", { class: "icon" }, h("picture", { class: "icon-image" }, h("source", { "data-srcSet": this.iconSourceJson.largeIconUrl, media: "(min-width: 1024px)" }), h("source", { "data-srcSet": this.iconSourceJson.smallIconUrl, media: "(min-width: 0px)" }), h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        const buttonContent = this.buildButtonContent();
        const titleContent = StringUtils.hasValue(this.titleString)
            ? h("h3", null, this.titleString)
            : null;
        return (h(Host, null, h("snt-layout", null, h("div", { class: "ad-panel" }, content, titleContent, h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) }, h("slot", null)), buttonContent))));
    }
    buildButtonContent() {
        if (this.href && this.buttonLabel) {
            return (h("button-link-group", null, h("button-link", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (h("button-link-group", null, h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta", "link-title": this.buttonLabel })));
        }
        else if (this.linkLabel && this.href) {
            return (h("snt-link", { "class-names": "theme-link theme-action", "aria-label": this.linkLabel, href: this.href }, " ", h("span", { class: "link-content" }, this.linkLabel), "  "));
        }
        else {
            return null;
        }
    }
    get element() { return getElement(this); }
};
AdComponent.TAG_NAME = "snt-ad";
AdComponent.style = adComponentCss;

export { AdComponent as snt_ad };
