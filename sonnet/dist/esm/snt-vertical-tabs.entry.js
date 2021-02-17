import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';

const sntVerticalTabsCss = "snt-vertical-tabs{display:-ms-flexbox;display:flex}.light-fill snt-vertical-tabs,snt-vertical-tabs.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-vertical-tabs,snt-vertical-tabs.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-vertical-tabs,snt-vertical-tabs.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-vertical-tabs,snt-vertical-tabs.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-vertical-tabs,snt-vertical-tabs.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}@media (max-width: 1023px){snt-vertical-tabs>snt-layout>.spacings{padding:0 !important}}snt-vertical-tabs .vertical-tab-items{list-style:none;text-align:left;padding-left:30px;margin-bottom:0;width:100%}snt-vertical-tabs .title{color:#323232;position:relative;text-decoration:none;cursor:pointer;background-color:transparent;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}snt-vertical-tabs .title:after{content:attr(data-text);content:attr(data-text)/\"\";height:0;visibility:hidden;overflow:hidden;speak:never;speak:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-family:\"Averta-Regular\", sans-serif}snt-vertical-tabs .title:before{content:\"\";position:absolute;width:100%;height:2px;bottom:-1px;left:0;background-color:#147582;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-vertical-tabs .title:hover{color:#147582;font-family:\"Averta-ExtraBold\", sans-serif;text-decoration:none}snt-vertical-tabs .title[aria-selected=true]{text-decoration:none}snt-vertical-tabs .title[aria-selected=true]:before{background-color:#147582;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-vertical-tabs .title:focus{z-index:1;outline:2px solid #147582;outline-offset:5px}snt-vertical-tabs .panel{visibility:visible;width:100%;margin-right:-100%}snt-vertical-tabs .panel:focus{outline:1px solid #323232}snt-vertical-tabs .panel[aria-hidden=true]{visibility:hidden}snt-vertical-tabs .tab-wrapper{background-color:#ffffff;border-top:5px solid #147582;border-bottom:5px solid #147582;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;width:100%;clear:both;float:right;-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){snt-vertical-tabs .tab-wrapper{-ms-flex-direction:row;flex-direction:row}}snt-vertical-tabs .tab-wrapper .tab-header{width:100%;display:-ms-flexbox;display:flex;margin-bottom:0px;text-align:center;padding-right:0px;border-right:0;padding-top:26px;border-bottom:2px solid #f2f2f2}@media (min-width: 768px){snt-vertical-tabs .tab-wrapper .tab-header{width:270px;margin-top:40px;margin-bottom:40px;padding-top:0px;padding-right:15px;float:left;border-right:2px solid #f2f2f2;border-bottom:0}}snt-vertical-tabs .tab-wrapper .tab-header .tab-item{-ms-flex-positive:1;flex-grow:1;margin-bottom:20px;position:relative}snt-vertical-tabs .panel-wrapper{width:100%;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (min-width: 768px){snt-vertical-tabs .panel-wrapper{width:75%}}@media (min-width: 576px){snt-vertical-tabs .panel-wrapper snt-ad .spacings{padding:0 !important}}snt-vertical-tabs .panel-wrapper .ad-panel{border:0 !important;padding:0;background:transparent !important;text-align:center}@media (min-width: 768px){snt-vertical-tabs .panel-wrapper .ad-panel{padding:40px 60px;text-align:left}}snt-vertical-tabs .panel-wrapper .ad-panel .icon{margin:0 auto;margin-bottom:40px;display:-ms-flexbox;display:flex;text-align:center}@media (min-width: 768px){snt-vertical-tabs .panel-wrapper .ad-panel .icon{padding:0;margin-bottom:0px;display:-ms-inline-flexbox;display:inline-flex}}snt-vertical-tabs .panel-wrapper .ad-panel h3{display:inline-block;margin-left:0px;margin-bottom:0px}@media (min-width: 768px){snt-vertical-tabs .panel-wrapper .ad-panel h3{margin-left:20px}}snt-vertical-tabs .panel-wrapper .ad-panel .content{margin-top:0px;margin-bottom:30px}@media (min-width: 768px){snt-vertical-tabs .panel-wrapper .ad-panel .content{margin-top:-10px}}snt-vertical-tabs .active-tab:after{border:solid transparent;content:\" \";height:0;width:0;position:absolute;right:5%;top:100%;pointer-events:none;border-color:rgba(136, 183, 213, 0);border-right-color:#147582;border-width:10px;margin-top:-20px}@media (min-width: 768px){snt-vertical-tabs .active-tab:after{right:0%}}@media (max-width: 576px){.combined-top snt-ad>snt-layout>.spacings{padding-top:40px !important}}";

const SntVerticalTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.activeTabClass = 'active-tab';
        this.findFirstSelectedTab = () => {
            let selectedIdx;
            for (const [i, tab] of this.tabs.entries()) {
                tab.setAttribute('role', 'tab');
                if (i == 0) {
                    tab.setAttribute('tabindex', '0');
                }
                else {
                    tab.setAttribute('tabindex', '-1');
                }
                if (tab.classList.contains('selected')) {
                    tab.classList.remove('selected');
                    selectedIdx = i;
                }
            }
            return selectedIdx;
        };
        this.selectTab = (idx = null) => {
            for (let i = 0, tab; (tab = this.tabs[i]); i = i + 1) {
                const select = i === idx;
                tab.setAttribute('tabindex', select ? -1 : i + 1);
                tab.setAttribute('aria-selected', select);
                this.panels[i].setAttribute('aria-hidden', !select);
            }
        };
        this.tabTitleClick = e => {
            if (e.target.classList.contains('title')) {
                this.selected = this.tabs.indexOf(e.target);
                e.target.focus();
                //Set active states on paragraph tag
                const findAllParagraphs = this.el.querySelectorAll('p');
                findAllParagraphs.forEach(p => {
                    if (p.classList.contains(this.activeTabClass))
                        p.classList.remove(this.activeTabClass);
                });
                e.target.parentElement.classList.add(this.activeTabClass);
            }
        };
        this.tabKeyDown = e => {
            let idx = 0;
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    idx = this.selected - 1;
                    idx = idx < 0 ? this.tabs.length - 1 : idx;
                    this.tabs[idx].click();
                    this.tabs.forEach((e, i) => {
                        e.setAttribute('tabindex', '-1');
                        (i == idx) ? e.setAttribute('tabindex', '0') : false;
                    });
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    (this.selected != undefined) ? idx = this.selected + 1 : idx = 1;
                    if (isNaN(idx)) {
                        this.tabs[1].click();
                    }
                    else {
                        if (idx == this.tabs.length)
                            this.tabs[0].click();
                        if (idx < this.tabs.length)
                            this.tabs[idx].clioutputTargetsck();
                    }
                    this.tabs.forEach((e, i) => {
                        e.setAttribute('tabindex', '-1');
                        (i == idx) ? e.setAttribute('tabindex', '0') : false;
                    });
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.target.click();
                    break;
            }
        };
    }
    onSelectedChange(index) {
        this.selectTab(index);
    }
    componentDidLoad() {
        function createVerticalMenu(title, id) {
            let li = document.createElement('li');
            li.classList.add('tab-item');
            li.setAttribute('role', 'tablist');
            li.innerHTML = `<p><a class="title" tabindex="-1" id=${id} data-text=${title}>${title}</a></p>`;
            return li;
        }
        if (this.el.querySelectorAll('snt-data').length > 0) {
            const verticalElement = this.el.querySelector('.vertical-tab-items');
            this.el.querySelectorAll('snt-data').forEach(function (el) {
                let { link } = JSON.parse(el.data);
                try {
                    verticalElement.appendChild(createVerticalMenu(link.title, link.id));
                }
                catch (e) {
                    console.log(e);
                }
            });
        }
        this.el.querySelectorAll('.panel-wrapper section')[0].setAttribute('aria-hidden', 'false');
        this.el.setAttribute('role', 'tablist');
        const tabItems = Array.from(this.el.querySelectorAll('.title'));
        const panelsSlot = Array.from(this.el.querySelectorAll('.panel'));
        this.tabs = tabItems;
        this.panels = panelsSlot;
        this.selected = this.findFirstSelectedTab();
        tabItems.forEach((item, i) => {
            item.addEventListener('click', event => {
                event.preventDefault();
                this.tabTitleClick(event);
            });
            item.addEventListener('keydown', e => { this.tabKeyDown(e); });
            item.setAttribute('id', item.id);
            item.setAttribute('aria-controls', item.id + '-tab');
            //adding active class to the first tab
            if (i === 0) {
                item.parentElement.classList.add(this.activeTabClass);
                item.setAttribute('aria-selected', 'true');
            }
            for (const [index, panel] of this.panels.entries()) {
                panel.setAttribute('role', 'tabpanel');
                panel.setAttribute('id', 'tab-' + index);
            }
        });
    }
    componentDidUnload() {
        const tabItems = Array.from(this.el.querySelectorAll('.title'));
        tabItems.forEach(item => {
            item.removeEventListener('click', e => { this.tabTitleClick(e); });
        });
        tabItems.forEach(item => {
            item.removeEventListener('click', e => { this.tabKeyDown(e); });
        });
    }
    render() {
        return [
            h("snt-layout", null, h("div", { class: "tab-wrapper" }, h("div", { class: "tab-header" }, h("ul", { class: "vertical-tab-items" })), h("slot", null)))
        ];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selected": ["onSelectedChange"]
    }; }
};
SntVerticalTabs.style = sntVerticalTabsCss;

export { SntVerticalTabs as snt_vertical_tabs };
