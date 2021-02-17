import { h, Component, Element, Host } from "@stencil/core";
import { ViewportObserverManager } from "../../core/components/viewport/observer/ViewportObserverManager";
export class PanelComponent {
    componentDidLoad() {
        const configEl = this.element.querySelector("snt-data");
        if (configEl) {
            const config = JSON.parse(configEl.innerHTML);
            // Create array from JSON obj keys, cast to number array, sort descending
            const viewportSizes = ((Object.keys(config.viewport)).map(Number)).sort((a, b) => b - a);
            ViewportObserverManager.getInstance().observe(this.element, (entries) => {
                const entry = entries[0];
                for (let viewportSize of viewportSizes) {
                    if (entry.contentRect.width >= viewportSize) {
                        console.log(entry.contentRect.width + " >= " + viewportSize);
                        const style = config.viewport[viewportSize].style;
                        for (let styleKey of (Object.keys(style))) {
                            this.element.style[styleKey] = style[styleKey];
                        }
                        const elClass = config.viewport[viewportSize]["class"];
                        if (elClass) {
                            for (let classVal of elClass) {
                                if (!this.element.classList.contains(classVal)) {
                                    this.element.classList.add(classVal);
                                }
                            }
                        }
                        break;
                    }
                }
            });
        }
    }
    render() {
        return (h(Host, null,
            h("snt-layout", null,
                h("slot", null))));
    }
    static get is() { return "snt-panel"; }
    static get originalStyleUrls() { return {
        "$": ["panel-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["panel-component.css"]
    }; }
    static get elementRef() { return "element"; }
}
