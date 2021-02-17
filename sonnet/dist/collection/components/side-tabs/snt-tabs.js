import { Component, Element, State, Watch, h } from '@stencil/core';
export class SntTabs {
    constructor() {
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
                default:
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
            h("snt-layout", { padding: "remove-sides" },
                h("div", { class: "tab-wrapper" },
                    h("slot", null)))
        ];
    }
    static get is() { return "snt-tabs"; }
    static get originalStyleUrls() { return {
        "$": ["snt-tabs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["snt-tabs.css"]
    }; }
    static get states() { return {
        "selected": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "selected",
            "methodName": "onSelectedChange"
        }]; }
}
