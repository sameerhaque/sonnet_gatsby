'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');

const faqFilterSliderComponentCss = "snt-faq-filter-slider.float-fill,.float-fill snt-faq-filter-slider{display:block;background-color:#f8f8f8;color:#323232}snt-faq-filter-slider.float-fill .filter-container,.float-fill snt-faq-filter-slider .filter-container{background-color:#ffffff}snt-faq-filter-slider .wrapper{position:relative;overflow:hidden;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;margin:0 auto 20px}snt-faq-filter-slider .right-gradient{position:absolute;pointer-events:none;right:0px;top:0px;width:21px;height:45px;z-index:1;background-image:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(#ffffff));background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)}snt-faq-filter-slider .left-gradient{position:absolute;left:0px;top:0px;width:21px;height:45px;z-index:1;background-image:-webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), to(#ffffff));background-image:linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);pointer-events:none}snt-faq-filter-slider .filter-container{position:relative;width:100%;height:53px;line-height:43px;text-align:center;overflow-x:scroll;padding:0px;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin-bottom:-10px;scrollbar-color:transparent transparent}snt-faq-filter-slider nav{width:100%}snt-faq-filter-slider ul{width:100%;list-style:none;display:inline-block;margin:0px 7px 0px 7px;padding:0px;overflow-y:hidden;overflow-x:scroll;height:53px;white-space:nowrap}snt-faq-filter-slider li{color:#323232;font-size:16px;letter-spacing:0;line-height:21px;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column;padding:5px 13px}snt-faq-filter-slider a{color:#323232;font-size:16px;font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif;letter-spacing:0;line-height:21px;width:auto;height:21px;text-decoration:none}snt-faq-filter-slider a:focus{display:inline;outline-offset:3px;outline:2px solid #147582}snt-faq-filter-slider a:hover{color:#147582;text-decoration:none !important;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;font-weight:bold}snt-faq-filter-slider .bold-hidden{display:block;font-weight:bold;height:0;overflow:hidden;visibility:hidden}snt-faq-filter-slider a.active,snt-faq-filter-slider a:focus{position:relative;color:#147582;font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif}snt-faq-filter-slider a.active{color:#323232}snt-faq-filter-slider a.active:hover{color:#147582 !important;text-decoration:none !important;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;font-weight:bold}snt-faq-filter-slider a.active:after{content:\"\";position:absolute;bottom:0px;margin:0 auto;left:0;right:0;height:2px;width:100%;background:#147582}snt-faq-filter-slider ::-webkit-scrollbar{width:0px;background:transparent;}snt-faq-filter-slider li:first-child{margin-left:30px}snt-faq-filter-slider li:last-child{margin-right:30px}snt-faq-filter-slider snt-layout[viewport=small] .spacings{padding-left:0px !important;padding-right:0px !important}snt-faq-filter-slider snt-layout[viewport=medium] .right-gradient{width:100px}snt-faq-filter-slider snt-layout[viewport=medium] .left-gradient{width:100px}snt-faq-filter-slider snt-layout[viewport=medium] li:first-child{margin-left:75px}snt-faq-filter-slider snt-layout[viewport=medium] li:last-child{margin-right:75px}snt-faq-filter-slider.hide-desktop snt-layout[viewport=large] .wrapper{display:none}snt-faq-filter-slider.hide-desktop snt-layout[viewport=extra-large] .wrapper{display:none}snt-faq-filter-slider .hide{display:none}";

const FAQFilterSliderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.faqFilterClick = index.createEvent(this, "faqFilterClick", 7);
    }
    onFilterClick(filterKey) {
        if (this.currentActive !== filterKey) {
            this.currentActive = filterKey;
            this.faqFilterClick.emit(filterKey);
        }
    }
    componentWillRender() {
        try {
            this._filterArr = JSON.parse(this.filterItems);
        }
        catch (e) {
            console.log(`Error parsing filterItems: ${this.filterItems}`);
        }
        if (StringUtils.StringUtils.isEmpty(this.currentActive)) {
            this.currentActive = this._filterArr.length != 0 ? this._filterArr[0].key : "";
        }
    }
    render() {
        return [
            index.h("host", { class: this._filterArr.length === 0 ? "hide" : "" }, index.h("snt-layout", null, index.h("div", { class: "wrapper" }, index.h("div", { class: "right-gradient" }), index.h("div", { class: "left-gradient" }), index.h("div", { class: "filter-container" }, index.h("nav", { "aria-label": this.menuAriaLabel }, index.h("ul", null, this._filterArr.map(item => (index.h("li", null, index.h("a", { href: "javascript:void(0)", class: item.key == this.currentActive ? "active" : "", onClick: this.onFilterClick.bind(this, item.key) }, item.title), index.h("span", { class: "bold-hidden" }, item.title))))))))))
        ];
    }
};
FAQFilterSliderComponent.TAG_NAME = "snt-faq-filter-slider";
FAQFilterSliderComponent.style = faqFilterSliderComponentCss;

exports.snt_faq_filter_slider = FAQFilterSliderComponent;
