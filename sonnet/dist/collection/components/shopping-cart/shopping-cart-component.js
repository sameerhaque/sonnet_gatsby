import { Component, h, Prop } from "@stencil/core";
import { ComponentConstants } from "../ComponentConstants";
import { CookieUtils } from "../../core/utils/CookieUtils";
export class ShoppingCartComponent {
    constructor() {
        this.cartValue = "0";
    }
    componentDidLoad() {
        const cartValue = CookieUtils.readCookie(ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    }
    render() {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (h("snt-link", { href: ShoppingCartComponent.SHOPPING_CART_URL },
                h("snt-icon", { styleClasses: "iconNavCartEmpty" }),
                h("span", { class: "item-counter" }, this.cartValue)));
        }
    }
    static get is() { return "snt-shopping-cart"; }
    static get originalStyleUrls() { return {
        "$": ["shopping-cart-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["shopping-cart-component.css"]
    }; }
    static get properties() { return {
        "cartValue": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "cart-value",
            "reflect": false,
            "defaultValue": "\"0\""
        }
    }; }
}
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
