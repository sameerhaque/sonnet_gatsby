import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';

const toggleComponentCss = "";

const ToggleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = createEvent(this, "toggle", 7);
    }
    handleClick() {
        this.toggle.emit();
    }
    render() {
        return (h(Host, { onClick: this.handleClick.bind(this) }, "X", h("span", { class: "sr-only" }, "Search")));
    }
    get element() { return getElement(this); }
};
ToggleComponent.TAG_NAME = "snt-header";
ToggleComponent.style = toggleComponentCss;

export { ToggleComponent as snt_toggle };
