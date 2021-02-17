'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const footerComponentCss = "snt-footer{display:-ms-flexbox;display:flex;width:100%;-ms-flex-flow:column wrap;flex-flow:column wrap}snt-footer .footer{max-width:1440px;width:100%;margin:auto;background-color:#ffffff;border-top:1px solid #323232}snt-footer .col{-webkit-box-sizing:border-box;box-sizing:border-box}snt-footer .col:first-child,snt-footer .col:nth-child(3){padding:0 !important}snt-footer .h5{margin-bottom:0.938em;font-size:1em;line-height:1;display:inline-block;width:100%}@media (max-width: 768px){snt-footer .col:nth-child(3),snt-footer .col:nth-child(4){margin-top:30px}}snt-footer snt-layout[viewport=medium] .col,snt-footer snt-layout[viewport=small] .col,snt-footer snt-layout[viewport=extra-small] .col{margin-top:40px;padding:0}snt-footer .footer-actions snt-nav-item:last-child{display:inline-block;padding-bottom:40px}snt-footer snt-layout[viewport=medium] .h5{margin-bottom:1.25em}snt-footer snt-layout[viewport=large] .h5{margin-bottom:1.563em}snt-footer snt-layout[viewport=large] .footer-actions snt-nav-item:last-child{padding-bottom:60px}snt-footer snt-layout[viewport=extra-large] .h5{margin-bottom:1.875em}snt-footer snt-layout[viewport=extra-large] .footer-actions snt-nav-item:last-child{padding-bottom:60px}snt-footer snt-link,snt-footer snt-link a{line-height:1.2}snt-footer snt-nav-item{padding-bottom:0.625em;width:100%;text-align:left}snt-footer snt-nav-item snt-link a{font-size:0.875em;color:#323232;padding:0;text-decoration:none;background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#147582), to(#147582));background-image:linear-gradient(transparent, transparent), linear-gradient(#147582, #147582);background-size:100% 1px, 0 1px;background-position:100% 100%, 1px 100%;background-repeat:no-repeat}snt-footer snt-nav-item snt-link a .icon-new-window:before{color:#323232}snt-footer snt-nav-item snt-link a:focus,snt-footer snt-nav-item snt-link a:focus-within,snt-footer snt-nav-item snt-link a:hover{color:#147582;background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#147582), to(#147582));background-image:linear-gradient(transparent, transparent), linear-gradient(#147582, #147582)}snt-footer snt-nav-item snt-link a:focus .icon-new-window:before,snt-footer snt-nav-item snt-link a:focus-within .icon-new-window:before,snt-footer snt-nav-item snt-link a:hover .icon-new-window:before{color:#147582}snt-footer snt-nav-item snt-link a:focus{outline:1px solid #147582}snt-footer .nav-link{padding:0;position:relative}snt-footer .nav-link span.icon-font{position:relative;right:0}.footer-row{border-top:1px solid #6f6f6f;border-bottom:1px solid #6f6f6f;margin-bottom:1.875em;padding-top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0 !important}.footer-row .col-md-12{padding-left:0}.footer-row snt-nav{-ms-flex-direction:row;flex-direction:row}.footer-row snt-nav-item{display:inline;line-height:1;padding-right:30px}.footer-row snt-nav-item a{font-size:0.75em}.footer-legal{padding:0 !important;margin:0}.footer-legal p2,.footer-legal p{font-size:12px;line-height:1.5;display:table;margin-bottom:0.475em}.footer-legal a{font-size:12px}@media (max-width: 768px){snt-footer a{margin-bottom:9px}}@media (max-width: 576px){.footer-row snt-nav{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:baseline;align-items:baseline}}.legal_copy{display:none}";

const FooterComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    render() {
        return (index.h("div", { class: WebUtils.WebUtils.generateClasses(["footer"], this.styleClasses) }, index.h("snt-layout", null, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
};
FooterComponent.TAG_NAME = "snt-footer";
FooterComponent.style = footerComponentCss;

exports.snt_footer = FooterComponent;
