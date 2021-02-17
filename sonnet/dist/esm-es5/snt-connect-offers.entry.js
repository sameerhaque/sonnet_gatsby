import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { L as LazyLoadIntersectionObserverManager } from './ImageLazyLoadIntersectionObserverManager-28d19548.js';
var sntConnectOffersCss = "snt-connect-offers{-ms-flex-item-align:stretch;align-self:stretch;min-height:100%}snt-connect-offers .connect-offers-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#323232;background-color:#ffffff;border:3px solid #e5e5e5;padding:40px 20px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-left:-3px;margin-right:-3px}snt-connect-offers .connect-offers-panel button-link-group{margin-top:auto}snt-connect-offers .offer-available{border:3px solid #acdde4}snt-connect-offers .offer-available .offer-wrapper{position:absolute;top:0;left:0;height:40px;line-height:40px;padding:0 20px;font-size:14px;font-family:\"Averta-ExtraBold\", sans-serif !important;font-weight:500 !important;background-color:#acdde4}snt-connect-offers .logo{margin-bottom:40px}snt-connect-offers h3{margin-bottom:30px}snt-connect-offers h3,snt-connect-offers p{text-align:center}snt-connect-offers snt-modal .offer-code{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:15px 0;position:relative;width:100%;text-align:center;border-bottom:1px solid #e5e5e5;position:relative;height:21px}snt-connect-offers snt-modal .offer-code .offer-code-wrapper{padding:0 24px 0 15px;background:white}snt-connect-offers snt-modal span.iconCopy{position:absolute;top:1px;right:-18px}snt-connect-offers snt-modal snt-link a{position:relative;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;top:10px;margin-right:5px;font-size:14px;outline:1px solid transparent;padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:none}snt-connect-offers snt-modal snt-link a:before{bottom:3px}snt-connect-offers snt-modal snt-link a:hover{background-image:none}snt-connect-offers snt-modal snt-link a:focus{background-image:none;margin:0px;margin-right:5px;outline-color:#9e0a9a}snt-connect-offers snt-modal button-link-group button-link{width:auto}snt-connect-offers snt-modal .couponCode{position:absolute;left:-9999px}snt-connect-offers snt-modal .code_copied{font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;text-align:center;margin-top:21px}snt-connect-offers snt-accordion.transcript-accordion{margin-top:26px}snt-connect-offers snt-accordion.transcript-accordion .legal-open{display:none}snt-connect-offers snt-accordion.transcript-accordion .legal-close{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-open{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-close{display:none}snt-connect-offers snt-accordion.transcript-accordion .expand-icon{font-size:14px}snt-connect-offers snt-accordion.transcript-accordion .card-header [slot=summary]{font-size:12px}snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:250px}@media (min-width: 1024px){snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:350px}}snt-connect-offers snt-accordion.transcript-accordion .card-body [slot=details] p{text-align:left;line-height:1.5;font-size:12px}";
var ConnectOffersComponent = /** @class */ (function () {
    function ConnectOffersComponent(hostRef) {
        registerInstance(this, hostRef);
        this.offerAvailable = "";
        this.titleString = "";
        this.logoIsSet = false;
    }
    ConnectOffersComponent.prototype.componentWillLoad = function () {
        if (StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length < 0)
                return;
            this.logoIsSet = true;
        }
        (this.modalData !== undefined) ? this.parseModalData(this.modalData) : null;
    };
    ConnectOffersComponent.prototype.componentDidLoad = function () {
        if (this.logoIsSet)
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    };
    ConnectOffersComponent.prototype.parseModalData = function (newValue) {
        if (newValue)
            this.modalDataObj = JSON.parse(newValue);
    };
    ConnectOffersComponent.prototype.toggleLegal = function () {
        var legalCopy = this.element.querySelector('.modal-legal-copy');
        var legalIcon = this.element.querySelector('.modal-legal-link');
        if (legalCopy.classList.contains('d-none')) {
            legalCopy.classList.remove('d-none');
            legalIcon.innerHTML = '[-] ' + this.modalLegalLinkHide;
        }
        else {
            legalCopy.classList.add('d-none');
            legalIcon.innerHTML = '[+] ' + this.modalLegalLinkShow;
        }
    };
    ConnectOffersComponent.prototype.showModal = function () {
        var modal = this.element.querySelector("snt-modal");
        modal.show();
    };
    ConnectOffersComponent.prototype.copyToClipboard = function (e) {
        var _this = this;
        var couponCode = this.element.querySelector('.couponCode');
        couponCode.select();
        couponCode.setSelectionRange(6, couponCode.value.length);
        document.execCommand('copy');
        e.target.classList.add('d-none');
        this.element.querySelector('.iconCopy').classList.add('d-none');
        this.element.querySelector('.code_copied').classList.remove('d-none');
        setTimeout(function () {
            e.target.classList.remove('d-none');
            _this.element.querySelector('.iconCopy').classList.remove('d-none');
            _this.element.querySelector('.code_copied').classList.add('d-none');
        }, 5000);
    };
    ;
    ConnectOffersComponent.prototype.render = function () {
        var buttonContent = this.buildButtonContent();
        var modalContent = this.buildModalContent(this.modalDataObj);
        var titleContent = StringUtils.hasValue(this.titleString)
            ? h("h3", null, this.titleString)
            : null;
        return (h("div", { class: WebUtils.generateClasses(["connect-offers-panel"], (this.offerAvailable ? 'offer-available' : '')) }, h("div", { class: "offer-wrapper" }, this.offerAvailable), (this.logoIsSet) ?
            h("div", { class: "logo d-flex justify-content-center mb-4", role: "img", "aria-label": this.offerTitle }, h("picture", null, h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }), h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }), h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }), h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }), h("img", { class: "logo-image", src: "" + this.logoSourceJson.extraLargeLogoUrl, alt: (this.altTag) ? this.altTag : this.offerTitle }))) : '', titleContent, h("p", { innerHTML: this.description }), buttonContent, h("div", null), modalContent));
    };
    ConnectOffersComponent.prototype.buildButtonContent = function () {
        var _this = this;
        if (this.href) {
            return (h("button-link-group", null, h("button-link", { class: "cta theme-default", href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (h("button-link-group", null, h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta theme-default", onClick: function () { _this.showModal(); }, "link-title": this.buttonLabel })));
        }
        else {
            return null;
        }
    };
    ConnectOffersComponent.prototype.buildModalContent = function (data) {
        var _this = this;
        if (this.actionReference) {
            var modalTitle = data.title;
            var modalDescription = data.description;
            var modalButtonLabel = data.button.title;
            var modalButtonHref = data.button.href;
            var modalButtonTarget = data.button.target;
            var modalCode = data.code;
            var modalLegalLinkShowElement = data.linkShow;
            var modalLegalLinkhideElement = data.linkHide;
            var legalCopy = data.legal;
            var copyOfferCodeTxt = data.copyOfferCodeTxt || "Copy offer code";
            var offerCodeCopiedTxt = data.offerCodeCopiedTxt || "Code copied!";
            this.modalLegalLinkShow = modalLegalLinkShowElement;
            this.modalLegalLinkHide = modalLegalLinkhideElement;
            return (h("snt-modal", { "language-string": "{\"close\":\"Close\"}", "style-classes": "ready-to-show" }, h("snt-title-copy", { "title-string": modalTitle }, h("p", { style: { textAlign: "center" }, innerHTML: modalDescription })), h("div", { class: "offer-code " + ((modalCode) ? '' : 'd-none') }, h("div", { class: "offer-code-wrapper" }, h("snt-link", { href: "javascript:void(0)", onClick: function (e) { _this.copyToClipboard(e); } }, modalCode, h("span", { class: "icon-font iconCopy float-right", title: copyOfferCodeTxt }), h("span", { class: "sr-only" }, copyOfferCodeTxt)), h("p", { class: "code_copied d-none" }, offerCodeCopiedTxt))), h("input", { type: "text", tabindex: "-1", value: modalCode, class: "couponCode" }), h("button-link-group", null, h("button-link", { class: "cta theme-default", href: modalButtonHref, target: modalButtonTarget, "aria-label": modalButtonLabel }, modalButtonLabel)), h("snt-accordion", { class: "transcript-accordion" }, h("div", { slot: "summary" }, h("span", { class: "legal-close" }, modalLegalLinkShowElement), h("span", { class: "legal-open" }, modalLegalLinkhideElement)), h("div", { slot: "details" }, h("div", { innerHTML: legalCopy })))));
        }
    };
    Object.defineProperty(ConnectOffersComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectOffersComponent, "watchers", {
        get: function () {
            return {
                "modalData": ["parseModalData"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ConnectOffersComponent;
}());
ConnectOffersComponent.TAG_NAME = "snt-connect-offers";
ConnectOffersComponent.style = sntConnectOffersCss;
export { ConnectOffersComponent as snt_connect_offers };
