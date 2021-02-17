var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Element, Event, h, Host, Listen, Method, Prop, Watch } from "@stencil/core";
import { NavItemTypeEnum } from "../../../core/nav/domain/NavItemTypeEnum";
import { NavUtils } from "../../../core/nav/utils/NavUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
import { StringUtils } from "../../../core/utils/StringUtils";
export class NavItemComponent {
    constructor() {
        this.expanded = false;
        this.current = false;
        this.styleClasses = StringUtils.empty();
        this.isExternal = false;
    }
    expand() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = true;
        });
    }
    collapse() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = false;
        });
    }
    toggleExpanded() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expanded = !this.expanded;
        });
    }
    setCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = true;
        });
    }
    unsetCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = false;
        });
    }
    toggleCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current = !this.current;
        });
    }
    watchCurrent() {
        if (this.parent) {
            this.parent.toggleCurrent().then(null);
            if (!(window.innerWidth >= 768)) {
                this.parent.expanded = true;
            }
        }
    }
    watchExpanded() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            this.navItemEvent.emit();
        }
    }
    registerParent(parent) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parent = parent;
        });
    }
    handleMouseOver(_e) {
        if (window.innerWidth >= 768) {
            clearTimeout(this.collapseTimeout);
            if (!this.expanded)
                this.expanded = true;
        }
    }
    handleMouseleave() {
        this.collapseTimeout = setTimeout(() => {
            this.collapse();
        }, 250);
    }
    componentWillLoad() {
        this.type = NavUtils.identifyType(this.element);
    }
    componentDidLoad() {
        this.registerChildren();
    }
    isType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return type == this.type;
        });
    }
    registerChildren() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            const children = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
            if (children) {
                children.forEach((child) => {
                    child.registerParent(this.element);
                });
            }
        }
    }
    render() {
        const subnavId = `${this.element.id}-subnav`;
        const expanderId = `${this.element.id}-expander`;
        const showClass = (this.expanded) ? "show" : "";
        const navItemClass = ["nav-item"];
        (this.type == NavItemTypeEnum.SUBNAV) ? navItemClass.push(`dropdown ${showClass}`) : false;
        const navLinkClass = `nav-link ${(this.type == NavItemTypeEnum.SUBNAV) ? "dropdown-toggle" : ""}`;
        const linkAriaLabel = `${(this.type == NavItemTypeEnum.SUBNAV) ? `${this.linkTitle}, tab to the next button to expand the sub-menu` : this.linkTitle}`;
        //const ariaCurrent = `${(this.current) ? "page" : false}`;
        const icon = [
            h("snt-icon", { styleClasses: this.iconClassName })
        ];
        const link = [
            h("snt-link", { href: this.href, target: this.target, class: navLinkClass, current: this.current, "aria-label": linkAriaLabel, "aria-current": true, "hidden-title": this.linkTitle, "is-external": this.isExternal },
                this.iconClassName ? icon : "",
                this.linkTitle)
        ];
        const expander = (h("button", { type: "button", class: "expander", onClick: this.toggleExpanded.bind(this), "aria-expanded": this.expanded.toString(), "aria-haspopup": "true", "aria-label": `${this.linkTitle}`, "aria-owns": subnavId },
            h("snt-icon", { styleClasses: (this.expanded) ? "icon-icon_nav_minus_inv" : "icon-icon_nav_plus" })));
        const subnav = [
            h("div", { class: "position-relative" }, [link, expander]),
            h("div", { "aria-label": "1 of 1", role: "menu", class: `dropdown-menu ${showClass}`, id: subnavId, "aria-labelledby": expanderId },
                h("slot", null))
        ];
        const actionReference = (this.href) ? this.href.replace("action:", "") : "";
        const actionLink = h("snt-action-link", { "action-reference": actionReference, linkTitle: this.linkTitle, iconClassName: this.iconClassName });
        const custom = [
            h("slot", null)
        ];
        const template = {
            "link": link,
            "action-link": actionLink,
            "subnav": subnav,
            "custom": custom
        };
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), role: "listitem" }, template[this.type]));
    }
    static get is() { return "snt-nav-item"; }
    static get originalStyleUrls() { return {
        "$": ["nav-item-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["nav-item-component.css"]
    }; }
    static get properties() { return {
        "href": {
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
            "attribute": "href",
            "reflect": true
        },
        "target": {
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
            "attribute": "target",
            "reflect": true
        },
        "linkTitle": {
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
            "attribute": "link-title",
            "reflect": true
        },
        "iconClassName": {
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
            "attribute": "icon-class-name",
            "reflect": true
        },
        "expanded": {
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
            "attribute": "expanded",
            "reflect": true,
            "defaultValue": "false"
        },
        "current": {
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
            "attribute": "current",
            "reflect": true,
            "defaultValue": "false"
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
        },
        "isExternal": {
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
            "attribute": "is-external",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "navItemEvent",
            "name": "navItemEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "expand": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "collapse": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggleExpanded": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setCurrent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "unsetCurrent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggleCurrent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "registerParent": {
            "complexType": {
                "signature": "(parent: HTMLSntNavItemElement) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLSntNavItemElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "isType": {
            "complexType": {
                "signature": "(type: NavItemTypeEnum) => Promise<boolean>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "NavItemTypeEnum": {
                        "location": "import",
                        "path": "../../../core/nav/domain/NavItemTypeEnum"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "current",
            "methodName": "watchCurrent"
        }, {
            "propName": "expanded",
            "methodName": "watchExpanded"
        }]; }
    static get listeners() { return [{
            "name": "mouseover",
            "method": "handleMouseOver",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "mouseleave",
            "method": "handleMouseleave",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
NavItemComponent.TAG_NAME = "snt-nav-item";
