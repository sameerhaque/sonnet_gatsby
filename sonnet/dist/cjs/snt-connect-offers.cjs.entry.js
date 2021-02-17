'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const ImageLazyLoadIntersectionObserverManager = require('./ImageLazyLoadIntersectionObserverManager-977f3554.js');

const sntConnectOffersCss = "snt-connect-offers{-ms-flex-item-align:stretch;align-self:stretch;min-height:100%}snt-connect-offers .connect-offers-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#323232;background-color:#ffffff;border:3px solid #e5e5e5;padding:40px 20px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-left:-3px;margin-right:-3px}snt-connect-offers .connect-offers-panel button-link-group{margin-top:auto}snt-connect-offers .offer-available{border:3px solid #acdde4}snt-connect-offers .offer-available .offer-wrapper{position:absolute;top:0;left:0;height:40px;line-height:40px;padding:0 20px;font-size:14px;font-family:\"Averta-ExtraBold\", sans-serif !important;font-weight:500 !important;background-color:#acdde4}snt-connect-offers .logo{margin-bottom:40px}snt-connect-offers h3{margin-bottom:30px}snt-connect-offers h3,snt-connect-offers p{text-align:center}snt-connect-offers snt-modal .offer-code{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:15px 0;position:relative;width:100%;text-align:center;border-bottom:1px solid #e5e5e5;position:relative;height:21px}snt-connect-offers snt-modal .offer-code .offer-code-wrapper{padding:0 24px 0 15px;background:white}snt-connect-offers snt-modal span.iconCopy{position:absolute;top:1px;right:-18px}snt-connect-offers snt-modal snt-link a{position:relative;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;top:10px;margin-right:5px;font-size:14px;outline:1px solid transparent;padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:none}snt-connect-offers snt-modal snt-link a:before{bottom:3px}snt-connect-offers snt-modal snt-link a:hover{background-image:none}snt-connect-offers snt-modal snt-link a:focus{background-image:none;margin:0px;margin-right:5px;outline-color:#9e0a9a}snt-connect-offers snt-modal button-link-group button-link{width:auto}snt-connect-offers snt-modal .couponCode{position:absolute;left:-9999px}snt-connect-offers snt-modal .code_copied{font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;text-align:center;margin-top:21px}snt-connect-offers snt-accordion.transcript-accordion{margin-top:26px}snt-connect-offers snt-accordion.transcript-accordion .legal-open{display:none}snt-connect-offers snt-accordion.transcript-accordion .legal-close{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-open{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-close{display:none}snt-connect-offers snt-accordion.transcript-accordion .expand-icon{font-size:14px}snt-connect-offers snt-accordion.transcript-accordion .card-header [slot=summary]{font-size:12px}snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:250px}@media (min-width: 1024px){snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:350px}}snt-connect-offers snt-accordion.transcript-accordion .card-body [slot=details] p{text-align:left;line-height:1.5;font-size:12px}";

const ConnectOffersComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.offerAvailable = "";
        this.titleString = "";
        this.logoIsSet = false;
    }
    componentWillLoad() {
        if (StringUtils.StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length < 0)
                return;
            this.logoIsSet = true;
        }
        (this.modalData !== undefined) ? this.parseModalData(this.modalData) : null;
    }
    componentDidLoad() {
        if (this.logoIsSet)
            ImageLazyLoadIntersectionObserverManager.LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    }
    parseModalData(newValue) {
        if (newValue)
            this.modalDataObj = JSON.parse(newValue);
    }
    toggleLegal() {
        const legalCopy = this.element.querySelector('.modal-legal-copy');
        const legalIcon = this.element.querySelector('.modal-legal-link');
        if (legalCopy.classList.contains('d-none')) {
            legalCopy.classList.remove('d-none');
            legalIcon.innerHTML = '[-] ' + this.modalLegalLinkHide;
        }
        else {
            legalCopy.classList.add('d-none');
            legalIcon.innerHTML = '[+] ' + this.modalLegalLinkShow;
        }
    }
    showModal() {
        const modal = this.element.querySelector("snt-modal");
        modal.show();
    }
    copyToClipboard(e) {
        let couponCode = this.element.querySelector('.couponCode');
        couponCode.select();
        couponCode.setSelectionRange(6, couponCode.value.length);
        document.execCommand('copy');
        e.target.classList.add('d-none');
        this.element.querySelector('.iconCopy').classList.add('d-none');
        this.element.querySelector('.code_copied').classList.remove('d-none');
        setTimeout(() => {
            e.target.classList.remove('d-none');
            this.element.querySelector('.iconCopy').classList.remove('d-none');
            this.element.querySelector('.code_copied').classList.add('d-none');
        }, 5000);
    }
    ;
    render() {
        const buttonContent = this.buildButtonContent();
        const modalContent = this.buildModalContent(this.modalDataObj);
        const titleContent = StringUtils.StringUtils.hasValue(this.titleString)
            ? index.h("h3", null, this.titleString)
            : null;
        return (index.h("div", { class: WebUtils.WebUtils.generateClasses(["connect-offers-panel"], (this.offerAvailable ? 'offer-available' : '')) }, index.h("div", { class: "offer-wrapper" }, this.offerAvailable), (this.logoIsSet) ?
            index.h("div", { class: "logo d-flex justify-content-center mb-4", role: "img", "aria-label": this.offerTitle }, index.h("picture", null, index.h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }), index.h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }), index.h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }), index.h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }), index.h("img", { class: "logo-image", src: `${this.logoSourceJson.extraLargeLogoUrl}`, alt: (this.altTag) ? this.altTag : this.offerTitle }))) : '', titleContent, index.h("p", { innerHTML: this.description }), buttonContent, index.h("div", null), modalContent));
    }
    buildButtonContent() {
        if (this.href) {
            return (index.h("button-link-group", null, index.h("button-link", { class: "cta theme-default", href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (index.h("button-link-group", null, index.h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta theme-default", onClick: () => { this.showModal(); }, "link-title": this.buttonLabel })));
        }
        else {
            return null;
        }
    }
    buildModalContent(data) {
        if (this.actionReference) {
            const modalTitle = data.title;
            const modalDescription = data.description;
            const modalButtonLabel = data.button.title;
            const modalButtonHref = data.button.href;
            const modalButtonTarget = data.button.target;
            const modalCode = data.code;
            const modalLegalLinkShowElement = data.linkShow;
            const modalLegalLinkhideElement = data.linkHide;
            const legalCopy = data.legal;
            const copyOfferCodeTxt = data.copyOfferCodeTxt || "Copy offer code";
            const offerCodeCopiedTxt = data.offerCodeCopiedTxt || "Code copied!";
            this.modalLegalLinkShow = modalLegalLinkShowElement;
            this.modalLegalLinkHide = modalLegalLinkhideElement;
            return (index.h("snt-modal", { "language-string": "{\"close\":\"Close\"}", "style-classes": "ready-to-show" }, index.h("snt-title-copy", { "title-string": modalTitle }, index.h("p", { style: { textAlign: "center" }, innerHTML: modalDescription })), index.h("div", { class: "offer-code " + ((modalCode) ? '' : 'd-none') }, index.h("div", { class: "offer-code-wrapper" }, index.h("snt-link", { href: "javascript:void(0)", onClick: (e) => { this.copyToClipboard(e); } }, modalCode, index.h("span", { class: "icon-font iconCopy float-right", title: copyOfferCodeTxt }), index.h("span", { class: "sr-only" }, copyOfferCodeTxt)), index.h("p", { class: "code_copied d-none" }, offerCodeCopiedTxt))), index.h("input", { type: "text", tabindex: "-1", value: modalCode, class: "couponCode" }), index.h("button-link-group", null, index.h("button-link", { class: "cta theme-default", href: modalButtonHref, target: modalButtonTarget, "aria-label": modalButtonLabel }, modalButtonLabel)), index.h("snt-accordion", { class: "transcript-accordion" }, index.h("div", { slot: "summary" }, index.h("span", { class: "legal-close" }, modalLegalLinkShowElement), index.h("span", { class: "legal-open" }, modalLegalLinkhideElement)), index.h("div", { slot: "details" }, index.h("div", { innerHTML: legalCopy })))));
        }
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "modalData": ["parseModalData"]
    }; }
};
ConnectOffersComponent.TAG_NAME = "snt-connect-offers";
ConnectOffersComponent.style = sntConnectOffersCss;

exports.snt_connect_offers = ConnectOffersComponent;
