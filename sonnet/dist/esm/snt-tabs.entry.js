import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';

const sntTabsCss = "snt-tabs .title{color:#323232;position:relative;text-decoration:none;cursor:pointer;background-color:transparent;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}snt-tabs .title:after{content:attr(data-text);content:attr(data-text)/\"\";height:0;visibility:hidden;overflow:hidden;speak:never;speak:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-family:\"Averta-Regular\", sans-serif}snt-tabs .title:before{content:\"\";position:absolute;width:100%;height:2px;bottom:-1px;left:0;background-color:#147582;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-tabs .title:hover{color:#147582;font-family:\"Averta-ExtraBold\", sans-serif;text-decoration:none}snt-tabs .title[aria-selected=true]{text-decoration:none}snt-tabs .title[aria-selected=true]:before{background-color:#147582;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-tabs .title:focus{z-index:1;outline:2px solid #147582;outline-offset:5px}snt-tabs .panel:focus{outline:1px solid #323232}snt-tabs .panel[aria-hidden=true]{display:none}.tab-wrapper{background-color:#f5f5f5;display:block;width:100%;clear:both;float:right}.tab-wrapper .tab-header{width:92%;display:-ms-flexbox;display:flex;text-align:center;padding:15px 4%;padding-bottom:0}.tab-wrapper .tab-header .tab-item{-ms-flex-positive:1;flex-grow:1;position:relative;border-right:1px solid #323232}.tab-wrapper .tab-header .tab-item:last-child{border-right:0}.panel-wrapper{padding:0}";

const SntTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.findFirstSelectedTab = () => {
            let selectedIdx;
            for (const [i, tab] of this.tabs.entries()) {
                tab.setAttribute('role', 'tab');
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
                tab.setAttribute('tabindex', select ? 0 : -1);
                tab.setAttribute('aria-selected', select);
                this.panels[i].setAttribute('aria-hidden', !select);
            }
        };
        this.tabTitleClick = e => {
            if (e.target.classList.contains('title')) {
                this.selected = this.tabs.indexOf(e.target);
                e.target.focus();
            }
        };
        this.tabKeyDown = e => {
            let idx;
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    idx = this.selected - 1;
                    idx = idx < 0 ? this.tabs.length - 1 : idx;
                    this.tabs[idx].click();
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    idx = this.selected + 1;
                    this.tabs[idx % this.tabs.length].click();
                    break;
            }
        };
    }
    onSelectedChange(index) {
        this.selectTab(index);
    }
    componentDidLoad() {
        this.el.setAttribute('role', 'tablist');
        const tabItems = Array.from(this.el.querySelectorAll('.title'));
        const panelsSlot = Array.from(this.el.querySelectorAll('.panel'));
        this.tabs = tabItems;
        this.panels = panelsSlot;
        this.selected = this.findFirstSelectedTab();
        tabItems.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                this.tabTitleClick(event);
            });
            item.addEventListener('keydown', e => { this.tabKeyDown(e); });
            item.setAttribute('id', item.id);
            item.setAttribute('aria-controls', item.id + '-tab');
            for (const [index, panel] of this.panels.entries()) {
                panel.setAttribute('role', 'tabpanel');
                panel.setAttribute('aria-labelledby', item.textContent);
                panel.setAttribute('id', item.id + '-tab' + index);
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
            h("snt-layout", { padding: "remove-sides" }, h("div", { class: "tab-wrapper" }, h("slot", null)))
        ];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selected": ["onSelectedChange"]
    }; }
};
SntTabs.style = sntTabsCss;

export { SntTabs as snt_tabs };
