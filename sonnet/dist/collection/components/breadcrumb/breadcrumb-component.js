import { h, Component, Prop } from '@stencil/core';
export class BreadcrumbComponent {
    componentWillLoad() {
        this._trailObj = JSON.parse(this.trail);
    }
    render() {
        return (h("snt-layout", null,
            h("ul", null, this._trailObj.map((r, idx) => h("li", null,
                (r.href.length > 0)
                    ? h("a", { href: r.href }, r.title)
                    : h("span", null, r.title),
                (idx !== this._trailObj.length - 1) ? h("snt-icon", { styleClasses: "iconChevron" }) : null)))));
    }
    static get is() { return "snt-breadcrumb"; }
    static get originalStyleUrls() { return {
        "$": ["./breadcrumb-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumb-component.css"]
    }; }
    static get properties() { return {
        "trail": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "trail",
            "reflect": false
        }
    }; }
}
BreadcrumbComponent.TAG_NAME = "snt-breadcrumb";
