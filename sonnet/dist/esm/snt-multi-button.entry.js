import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { I as ItemUtils } from './ItemUtils-67c6dda4.js';

const multiButtonCss = ".sliderSelector{position:relative;display:inline-block;background:#f8f8f8;border:1px solid #767676;border-radius:30px;overflow:hidden;z-index:100;width:auto;display:table}.sliderSelector .toggle-button{position:relative;display:table;table-layout:fixed;z-index:300}.sliderSelector .toggle-button button,.sliderSelector .toggle-button button:focus,.sliderSelector .toggle-button button::-moz-focus-inner{outline:none;border:none}.sliderSelector .toggle-button .button-wrapper{display:table-cell;}.sliderSelector .toggle-button .button-wrapper button{height:45px;line-height:45px;padding:0px 25px;font-size:1.2rem;-webkit-box-shadow:none;box-shadow:none;background:0 0;width:100%;outline:none;border:none;cursor:pointer;text-align:center}.sliderSelector .toggle-button .button-wrapper button:focus{text-decoration:underline;border:1px solid transparent}.sliderSelector .toggle-button .button-wrapper button.active{color:#414141;text-decoration:underline}.sliderSelector .toggle-button.three-options .btn{font-size:14px}.sliderSelector .active-indicator{position:absolute;top:0;bottom:0;border:2px solid #414141;border-radius:30px;background:#fff;-webkit-transition:all 0.3s cubic-bezier(0.47, 0, 0.75, 0.72) 0s;transition:all 0.3s cubic-bezier(0.47, 0, 0.75, 0.72) 0s;z-index:200}.sliderSelector .toggle-button .button-wrapper:first-child:nth-last-child(n+3)~*{padding-right:0}@media (max-width: 768px){.sliderSelector{display:block}}@media (max-width: 480px){.sliderSelector .toggle-button .button-wrapper button{font-size:0.9rem}}";

const MultiButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: "sliderSelector" }, h("div", { class: "toggle-button full-width", role: "group" }, Array.from(this.configurations.values()).map((item, index) => h("div", { class: "button-wrapper", "data-key": index }, h("button", { class: (item['selected'] ? 'active' : '') + ' btn', id: 'button-' + StringUtils.toCamelCase(item['label']), type: "button", disabled: item['disabled'], role: "button", "aria-pressed": "false", value: item['key'], "button-index": index, onClick: e => this.handleClick(e) }, item['label'])))), h("div", { class: "active-indicator", id: "active-indicator", style: this.styles })));
    }
    changeStyle(width, translateX) {
        this.styles = {
            'width': `${width}px`,
            'transform': `translateX(${translateX}px) scaleX(1)`
        };
    }
    get element() { return getElement(this); }
};
MultiButtonComponent.style = multiButtonCss;

export { MultiButtonComponent as snt_multi_button };
