import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { NavItemComponent } from "./nav-item/nav-item-component";
import { NavUtils } from "../../core/nav/utils/NavUtils";
import { NavItemTypeEnum } from "../../core/nav/domain/NavItemTypeEnum";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
export class NavComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    handleNavItemEvent(event) {
        const expanded = event.target.expanded;
        if (expanded) {
            this.collapseSiblingSubnavs(event.target);
        }
    }
    componentDidLoad() {
        this.setActiveNavItem();
    }
    setActiveNavItem() {
        const navItems = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
        if (navItems) {
            navItems.forEach((navItem) => {
                if (navItem.isType(NavItemTypeEnum.ACTION_LINK) && NavUtils.isCurrentPage(navItem)) {
                    navItem.toggleCurrent().then(null); //test
                }
            });
        }
    }
    collapseSiblingSubnavs(currentSubnav) {
        const expandedSubnavs = this.element.querySelectorAll(`${NavItemComponent.TAG_NAME}[expanded]`);
        expandedSubnavs.forEach((expandedSubnav) => {
            if (expandedSubnav != currentSubnav) {
                expandedSubnav.collapse().then(null);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar-nav"], this.styleClasses), role: "list" },
            h("slot", null)));
    }
    static get is() { return "snt-nav"; }
    static get originalStyleUrls() { return {
        "$": ["nav-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["nav-component.css"]
    }; }
    static get properties() { return {
        "expander": {
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
            "attribute": "expander",
            "reflect": true
        },
        "separator": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "separator",
            "reflect": true
        },
        "styleClasses": {
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
            "attribute": "style-classes",
            "reflect": true,
            "defaultValue": "StringUtils.empty()"
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "navItemEvent",
            "method": "handleNavItemEvent",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
NavComponent.TAG_NAME = "snt-nav";
