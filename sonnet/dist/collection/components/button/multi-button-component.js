import { Component, Element, h, Host, State } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
import { ItemUtils } from "../../core/components/item/ItemUtils";
export class MultiButtonComponent {
    constructor() {
        this.styles = {};
    }
    componentWillLoad() {
        this.configurations = ItemUtils.generateConfigurationFromItemOptions(this.element);
    }
    componentDidLoad() {
        let firstItemWidth = parseFloat(getComputedStyle(this.element.querySelector('.toggle-button .button-wrapper')).width);
        this.changeStyle(firstItemWidth, 0); //Set active style on the first item
    }
    handleClick(event) {
        // Reset all buttons
        Array.from(this.element.querySelectorAll('.btn')).map(element => {
            element.classList.remove('active');
            element.setAttribute('selected', 'false');
            element.setAttribute('aria-pressed', 'false');
        });
        // Set Active button
        let button = event.target;
        let index = parseFloat(button.getAttribute('button-index'));
        button.setAttribute('selected', 'true');
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        let computedWidth = parseFloat(getComputedStyle(button).width) - 4; //adjusting for borders
        let bodyLeft = ((button.getBoundingClientRect().left) - (this.element.getBoundingClientRect().left)) - ((index == 0) ? 1 : 2); //adjusting for the first item
        this.changeStyle(computedWidth, bodyLeft);
    }
    render() {
        return (h(Host, { class: "sliderSelector" },
            h("div", { class: "toggle-button full-width", role: "group" }, Array.from(this.configurations.values()).map((item, index) => h("div", { class: "button-wrapper", "data-key": index },
                h("button", { class: (item['selected'] ? 'active' : '') + ' btn', id: 'button-' + StringUtils.toCamelCase(item['label']), type: "button", disabled: item['disabled'], role: "button", "aria-pressed": "false", value: item['key'], "button-index": index, onClick: e => this.handleClick(e) }, item['label'])))),
            h("div", { class: "active-indicator", id: "active-indicator", style: this.styles })));
    }
    changeStyle(width, translateX) {
        this.styles = {
            'width': `${width}px`,
            'transform': `translateX(${translateX}px) scaleX(1)`
        };
    }
    static get is() { return "snt-multi-button"; }
    static get originalStyleUrls() { return {
        "$": ["multi-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["multi-button.css"]
    }; }
    static get states() { return {
        "styles": {}
    }; }
    static get elementRef() { return "element"; }
}
