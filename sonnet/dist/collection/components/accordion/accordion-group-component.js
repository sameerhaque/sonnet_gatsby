var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop, Element, Listen, h, Method } from "@stencil/core";
import { AccordionComponent } from "./accordion-component";
import { AccordionStateEnum } from "./domain/AccordionStateEnum";
export class AccordionGroupComponent {
    constructor() {
        this.multiExpand = false;
    }
    expandAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}:not([expanded])`);
            children.forEach((child) => {
                child.expand().then(null);
            });
        });
    }
    collapseAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
            children.forEach((child) => {
                child.collapse().then(null);
            });
        });
    }
    addAccordion(accordion) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Add code to inject in position of other accordion
            this.element.appendChild(accordion);
        });
    }
    componentWillRender() {
        if (this.element) {
            if (!this.multiExpand) {
                let numberOfExpandedItems = 0;
                this.element.querySelectorAll("snt-accordion").forEach(c => {
                    if (c.hasAttribute("expanded")) {
                        numberOfExpandedItems++;
                    }
                    if (numberOfExpandedItems >= 2) {
                        c.expanded = false;
                    }
                });
            }
        }
    }
    render() {
        return (h("snt-layout", null,
            h("slot", null)));
    }
    onAccordionEvent(event) {
        if ((event.detail.state == AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {
            this.collapseSibling(event);
        }
    }
    collapseSibling(event) {
        let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            if (child != event.target) {
                child.collapse().then(null);
            }
        });
    }
    static get is() { return "snt-accordion-group"; }
    static get originalStyleUrls() { return {
        "$": ["./accordion-group-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion-group-component.css"]
    }; }
    static get properties() { return {
        "multiExpand": {
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
            "attribute": "multi-expand",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "expandAll": {
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
        "collapseAll": {
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
        "addAccordion": {
            "complexType": {
                "signature": "(accordion: HTMLSntAccordionElement) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLSntAccordionElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "accordionEvent",
            "method": "onAccordionEvent",
            "target": {
                "pos": 1765,
                "end": 1778,
                "flags": 0,
                "modifierFlagsCache": 0,
                "transformFlags": 536875008,
                "parent": {
                    "pos": 1757,
                    "end": 1778,
                    "flags": 0,
                    "modifierFlagsCache": 536870912,
                    "transformFlags": 536875008,
                    "parent": {
                        "pos": 1755,
                        "end": 1780,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 536875008,
                        "parent": {
                            "pos": 1731,
                            "end": 1781,
                            "flags": 16384,
                            "modifierFlagsCache": 0,
                            "transformFlags": 536875008,
                            "parent": {
                                "pos": 1724,
                                "end": 1781,
                                "flags": 0,
                                "modifierFlagsCache": 0,
                                "transformFlags": 536877057,
                                "parent": {
                                    "pos": 1724,
                                    "end": 1996,
                                    "flags": 256,
                                    "modifierFlagsCache": 536870912,
                                    "transformFlags": 536877313,
                                    "parent": {
                                        "pos": 257,
                                        "end": 2298,
                                        "flags": 0,
                                        "modifierFlagsCache": 536870913,
                                        "transformFlags": 541067619,
                                        "parent": {
                                            "pos": 0,
                                            "end": 2300,
                                            "flags": 2048,
                                            "modifierFlagsCache": 0,
                                            "transformFlags": 541065571,
                                            "parent": undefined,
                                            "kind": 290,
                                            "text": "import { Component, Prop, Element, Listen, h, Method } from \"@stencil/core\";\r\nimport {AccordionComponent} from \"./accordion-component\";\r\nimport {AccordionEvent} from \"./domain/AccordionEvent\";\r\nimport {AccordionStateEnum} from \"./domain/AccordionStateEnum\";\r\n\r\n@Component({\r\n  tag: \"snt-accordion-group\",\r\n  styleUrl: \"./accordion-group-component.scss\",\r\n  shadow: false\r\n})\r\nexport class AccordionGroupComponent {\r\n\r\n  public static readonly TAG_NAME = \"snt-accordion-group\";\r\n\r\n  @Element() private element!: HTMLElement;\r\n  @Prop() multiExpand: boolean = false;\r\n\r\n  @Method()\r\n  async expandAll() {\r\n    let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}:not([expanded])`);\r\n    children.forEach((child: any) => {\r\n      child.expand().then(null);\r\n    });\r\n  }\r\n\r\n  @Method()\r\n  async collapseAll() {\r\n    let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);\r\n    children.forEach((child: any) => {\r\n      child.collapse().then(null);\r\n    });\r\n  }\r\n\r\n  @Method()\r\n  async addAccordion(accordion:HTMLSntAccordionElement) { //}, position:number = 0) {\r\n    // TODO: Add code to inject in position of other accordion\r\n    this.element.appendChild(accordion);\r\n  }\r\n\r\n\r\n  componentWillRender() {\r\n    if(this.element) {\r\n      if(!this.multiExpand) {\r\n        let numberOfExpandedItems = 0;\r\n        this.element.querySelectorAll(\"snt-accordion\").forEach( c => {\r\n          if(c.hasAttribute(\"expanded\")) {numberOfExpandedItems++}\r\n          if(numberOfExpandedItems >= 2) {\r\n            c.expanded = false\r\n          }\r\n        })\r\n      }\r\n    }\r\n  }\r\n\r\n  render() {\r\n    return (\r\n        <snt-layout>\r\n          <slot />\r\n        </snt-layout>\r\n    )\r\n  }\r\n\r\n  @Listen(\"accordionEvent\", { target: this.element })\r\n  onAccordionEvent(event: CustomEvent<AccordionEvent>) {\r\n    if (((event.detail as AccordionEvent).state == AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {\r\n      this.collapseSibling(event);\r\n    }\r\n  }\r\n\r\n  private collapseSibling(event: CustomEvent<AccordionEvent>) {\r\n    let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);\r\n    children.forEach((child: any) => {\r\n      if (child != event.target) {\r\n        child.collapse().then(null);\r\n      }\r\n    });\r\n  }\r\n}\r\n",
                                            "bindDiagnostics": [],
                                            "bindSuggestionDiagnostics": undefined,
                                            "languageVersion": 2,
                                            "fileName": "C:/_dev/Projects/sonnet_web_ui_framework/src/components/accordion/accordion-group-component.tsx",
                                            "languageVariant": 1,
                                            "isDeclarationFile": false,
                                            "scriptKind": 4,
                                            "pragmas": {},
                                            "checkJsDirective": undefined,
                                            "referencedFiles": [],
                                            "typeReferenceDirectives": [],
                                            "libReferenceDirectives": [],
                                            "amdDependencies": [],
                                            "hasNoDefaultLib": false,
                                            "statements": [{
                                                    "pos": 0,
                                                    "end": 76,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 536870912,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 254,
                                                    "decorators": undefined,
                                                    "modifiers": undefined,
                                                    "importClause": {
                                                        "pos": 6,
                                                        "end": 54,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 255,
                                                        "isTypeOnly": false,
                                                        "namedBindings": {
                                                            "pos": 6,
                                                            "end": 54,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 257,
                                                            "elements": [{
                                                                    "pos": 8,
                                                                    "end": 18,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 8,
                                                                        "end": 18,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "Component",
                                                                        "flowNode": {
                                                                            "flags": 2
                                                                        }
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "Component",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11776,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }, {
                                                                    "pos": 19,
                                                                    "end": 24,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 19,
                                                                        "end": 24,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "Prop",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "Prop",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11777,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }, {
                                                                    "pos": 25,
                                                                    "end": 33,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 25,
                                                                        "end": 33,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "Element",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "Element",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11778,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }, {
                                                                    "pos": 34,
                                                                    "end": 41,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 34,
                                                                        "end": 41,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "Listen",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "Listen",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11779,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }, {
                                                                    "pos": 42,
                                                                    "end": 44,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 42,
                                                                        "end": 44,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "h",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "h",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11780,
                                                                        "isReferenced": 67108863
                                                                    }
                                                                }, {
                                                                    "pos": 45,
                                                                    "end": 52,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 45,
                                                                        "end": 52,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "Method",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "Method",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11781,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }]
                                                        }
                                                    },
                                                    "moduleSpecifier": {
                                                        "pos": 59,
                                                        "end": 75,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 10,
                                                        "text": "@stencil/core"
                                                    }
                                                }, {
                                                    "pos": 76,
                                                    "end": 135,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 536870912,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 254,
                                                    "decorators": undefined,
                                                    "modifiers": undefined,
                                                    "importClause": {
                                                        "pos": 84,
                                                        "end": 105,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 255,
                                                        "isTypeOnly": false,
                                                        "namedBindings": {
                                                            "pos": 84,
                                                            "end": 105,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 257,
                                                            "elements": [{
                                                                    "pos": 86,
                                                                    "end": 104,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 86,
                                                                        "end": 104,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "AccordionComponent",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "AccordionComponent",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11782,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }]
                                                        }
                                                    },
                                                    "moduleSpecifier": {
                                                        "pos": 110,
                                                        "end": 134,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 10,
                                                        "text": "./accordion-component"
                                                    }
                                                }, {
                                                    "pos": 135,
                                                    "end": 192,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 536870912,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 254,
                                                    "decorators": undefined,
                                                    "modifiers": undefined,
                                                    "importClause": {
                                                        "pos": 143,
                                                        "end": 160,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 255,
                                                        "isTypeOnly": false,
                                                        "namedBindings": {
                                                            "pos": 143,
                                                            "end": 160,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 257,
                                                            "elements": [{
                                                                    "pos": 145,
                                                                    "end": 159,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 145,
                                                                        "end": 159,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "AccordionEvent",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "AccordionEvent",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11783,
                                                                        "isReferenced": 788968
                                                                    }
                                                                }]
                                                        }
                                                    },
                                                    "moduleSpecifier": {
                                                        "pos": 165,
                                                        "end": 191,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 10,
                                                        "text": "./domain/AccordionEvent"
                                                    }
                                                }, {
                                                    "pos": 192,
                                                    "end": 257,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 536870912,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 254,
                                                    "decorators": undefined,
                                                    "modifiers": undefined,
                                                    "importClause": {
                                                        "pos": 200,
                                                        "end": 221,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 255,
                                                        "isTypeOnly": false,
                                                        "namedBindings": {
                                                            "pos": 200,
                                                            "end": 221,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 257,
                                                            "elements": [{
                                                                    "pos": 202,
                                                                    "end": 220,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 258,
                                                                    "name": {
                                                                        "pos": 202,
                                                                        "end": 220,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "AccordionStateEnum",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 2097152,
                                                                        "escapedName": "AccordionStateEnum",
                                                                        "declarations": [undefined],
                                                                        "parent": undefined,
                                                                        "id": 11784,
                                                                        "isReferenced": 1160127
                                                                    }
                                                                }]
                                                        }
                                                    },
                                                    "moduleSpecifier": {
                                                        "pos": 226,
                                                        "end": 256,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 10,
                                                        "text": "./domain/AccordionStateEnum"
                                                    }
                                                }, undefined],
                                            "endOfFileToken": {
                                                "pos": 2298,
                                                "end": 2300,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536870912,
                                                "parent": undefined,
                                                "kind": 1
                                            },
                                            "externalModuleIndicator": undefined,
                                            "commentDirectives": undefined,
                                            "nodeCount": 374,
                                            "identifierCount": 109,
                                            "identifiers": {},
                                            "parseDiagnostics": [],
                                            "version": "74c274df56360eab8b0b57b320011908aab4d4af4344b5c0d9e780de8ed1a99e",
                                            "path": "c:/_dev/projects/sonnet_web_ui_framework/src/components/accordion/accordion-group-component.tsx",
                                            "resolvedPath": "c:/_dev/projects/sonnet_web_ui_framework/src/components/accordion/accordion-group-component.tsx",
                                            "originalFileName": "C:/_dev/Projects/sonnet_web_ui_framework/src/components/accordion/accordion-group-component.tsx",
                                            "imports": [undefined, undefined, undefined, undefined],
                                            "moduleAugmentations": [],
                                            "ambientModuleNames": [],
                                            "resolvedModules": {},
                                            "symbol": {
                                                "flags": 512,
                                                "escapedName": "\"C:/_dev/Projects/sonnet_web_ui_framework/src/components/accordion/accordion-group-component\"",
                                                "declarations": [undefined],
                                                "exports": {},
                                                "valueDeclaration": undefined,
                                                "id": 9490
                                            },
                                            "locals": {},
                                            "nextContainer": undefined,
                                            "symbolCount": 46,
                                            "classifiableNames": {},
                                            "id": 15456,
                                            "lineMap": [0, 78, 137, 194, 259, 261, 275, 306, 355, 372, 376, 416, 418, 478, 480, 525, 566, 568, 581, 604, 705, 745, 779, 788, 793, 795, 808, 833, 928, 968, 1004, 1013, 1018, 1020, 1033, 1120, 1184, 1226, 1231, 1233, 1235, 1262, 1286, 1317, 1357, 1429, 1497, 1541, 1573, 1586, 1598, 1607, 1614, 1619, 1621, 1635, 1649, 1671, 1691, 1714, 1721, 1726, 1728, 1783, 1841, 1950, 1986, 1993, 1998, 2000, 2065, 2160, 2200, 2236, 2274, 2283, 2292, 2297, 2300]
                                        },
                                        "kind": 245,
                                        "decorators": [{
                                                "pos": 257,
                                                "end": 374,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536872961,
                                                "parent": undefined,
                                                "kind": 157,
                                                "expression": {
                                                    "pos": 262,
                                                    "end": 374,
                                                    "flags": 16384,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 196,
                                                    "expression": {
                                                        "pos": 262,
                                                        "end": 271,
                                                        "flags": 16384,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 75,
                                                        "escapedText": "Component",
                                                        "flowNode": undefined,
                                                        "id": 15459
                                                    },
                                                    "questionDotToken": undefined,
                                                    "arguments": [{
                                                            "pos": 272,
                                                            "end": 373,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 193,
                                                            "multiLine": true,
                                                            "properties": [{
                                                                    "pos": 273,
                                                                    "end": 303,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 281,
                                                                    "decorators": undefined,
                                                                    "modifiers": undefined,
                                                                    "name": {
                                                                        "pos": 273,
                                                                        "end": 280,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "tag",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "questionToken": undefined,
                                                                    "exclamationToken": undefined,
                                                                    "initializer": {
                                                                        "pos": 281,
                                                                        "end": 303,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 10,
                                                                        "text": "snt-accordion-group"
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 4,
                                                                        "escapedName": "tag",
                                                                        "declarations": [undefined],
                                                                        "valueDeclaration": undefined,
                                                                        "parent": {
                                                                            "flags": 4096,
                                                                            "escapedName": "__object",
                                                                            "declarations": [undefined],
                                                                            "members": {},
                                                                            "valueDeclaration": undefined
                                                                        }
                                                                    }
                                                                }, {
                                                                    "pos": 304,
                                                                    "end": 352,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 281,
                                                                    "decorators": undefined,
                                                                    "modifiers": undefined,
                                                                    "name": {
                                                                        "pos": 304,
                                                                        "end": 316,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "styleUrl",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "questionToken": undefined,
                                                                    "exclamationToken": undefined,
                                                                    "initializer": {
                                                                        "pos": 317,
                                                                        "end": 352,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 10,
                                                                        "text": "./accordion-group-component.scss"
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 4,
                                                                        "escapedName": "styleUrl",
                                                                        "declarations": [undefined],
                                                                        "valueDeclaration": undefined,
                                                                        "parent": undefined
                                                                    }
                                                                }, {
                                                                    "pos": 353,
                                                                    "end": 370,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 536870912,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 281,
                                                                    "decorators": undefined,
                                                                    "modifiers": undefined,
                                                                    "name": {
                                                                        "pos": 353,
                                                                        "end": 363,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "shadow",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "questionToken": undefined,
                                                                    "exclamationToken": undefined,
                                                                    "initializer": {
                                                                        "pos": 364,
                                                                        "end": 370,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 91
                                                                    },
                                                                    "symbol": {
                                                                        "flags": 4,
                                                                        "escapedName": "shadow",
                                                                        "declarations": [undefined],
                                                                        "valueDeclaration": undefined,
                                                                        "parent": undefined
                                                                    }
                                                                }],
                                                            "symbol": undefined,
                                                            "nextContainer": {
                                                                "pos": 564,
                                                                "end": 791,
                                                                "flags": 256,
                                                                "modifierFlagsCache": 536871168,
                                                                "transformFlags": 537991521,
                                                                "parent": undefined,
                                                                "kind": 161,
                                                                "decorators": [{
                                                                        "pos": 564,
                                                                        "end": 579,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536872961,
                                                                        "parent": undefined,
                                                                        "kind": 157,
                                                                        "expression": {
                                                                            "pos": 571,
                                                                            "end": 579,
                                                                            "flags": 16384,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870912,
                                                                            "parent": undefined,
                                                                            "kind": 196,
                                                                            "expression": {
                                                                                "pos": 571,
                                                                                "end": 577,
                                                                                "flags": 16384,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536870912,
                                                                                "parent": undefined,
                                                                                "kind": 75,
                                                                                "escapedText": "Method",
                                                                                "flowNode": {
                                                                                    "flags": 2050
                                                                                },
                                                                                "id": 15472
                                                                            },
                                                                            "questionDotToken": undefined,
                                                                            "arguments": [],
                                                                            "id": 15471
                                                                        },
                                                                        "id": 15470
                                                                    }],
                                                                "modifiers": [{
                                                                        "pos": 579,
                                                                        "end": 588,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536871008,
                                                                        "parent": undefined,
                                                                        "kind": 126
                                                                    }],
                                                                "name": {
                                                                    "pos": 588,
                                                                    "end": 598,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 75,
                                                                    "escapedText": "expandAll",
                                                                    "flowNode": undefined
                                                                },
                                                                "questionToken": undefined,
                                                                "asteriskToken": undefined,
                                                                "typeParameters": undefined,
                                                                "parameters": [],
                                                                "body": {
                                                                    "pos": 600,
                                                                    "end": 791,
                                                                    "flags": 32768,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 537989377,
                                                                    "parent": undefined,
                                                                    "kind": 223,
                                                                    "multiLine": true,
                                                                    "statements": [{
                                                                            "pos": 602,
                                                                            "end": 703,
                                                                            "flags": 32768,
                                                                            "modifierFlagsCache": 536870912,
                                                                            "transformFlags": 537989376,
                                                                            "parent": undefined,
                                                                            "kind": 225,
                                                                            "declarationList": {
                                                                                "pos": 602,
                                                                                "end": 702,
                                                                                "flags": 32769,
                                                                                "modifierFlagsCache": 536870912,
                                                                                "transformFlags": 538120448,
                                                                                "parent": undefined,
                                                                                "kind": 243,
                                                                                "declarations": [{
                                                                                        "pos": 611,
                                                                                        "end": 702,
                                                                                        "flags": 32768,
                                                                                        "modifierFlagsCache": 536870912,
                                                                                        "transformFlags": 537006336,
                                                                                        "parent": undefined,
                                                                                        "kind": 242,
                                                                                        "name": {
                                                                                            "pos": 611,
                                                                                            "end": 620,
                                                                                            "flags": 32768,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 75,
                                                                                            "escapedText": "children",
                                                                                            "flowNode": undefined
                                                                                        },
                                                                                        "type": undefined,
                                                                                        "initializer": {
                                                                                            "pos": 622,
                                                                                            "end": 702,
                                                                                            "flags": 32768,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536875264,
                                                                                            "parent": undefined,
                                                                                            "kind": 196,
                                                                                            "expression": {
                                                                                                "pos": 622,
                                                                                                "end": 652,
                                                                                                "flags": 32768,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536875008,
                                                                                                "parent": undefined,
                                                                                                "kind": 194,
                                                                                                "expression": {
                                                                                                    "pos": 622,
                                                                                                    "end": 635,
                                                                                                    "flags": 32768,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536875008,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 194,
                                                                                                    "expression": {
                                                                                                        "pos": 622,
                                                                                                        "end": 627,
                                                                                                        "flags": 32768,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536875008,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 104,
                                                                                                        "flowNode": undefined,
                                                                                                        "id": 15474
                                                                                                    },
                                                                                                    "questionDotToken": undefined,
                                                                                                    "name": {
                                                                                                        "pos": 628,
                                                                                                        "end": 635,
                                                                                                        "flags": 32768,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536870912,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 75,
                                                                                                        "escapedText": "element",
                                                                                                        "flowNode": undefined
                                                                                                    },
                                                                                                    "flowNode": undefined,
                                                                                                    "id": 15475
                                                                                                },
                                                                                                "questionDotToken": undefined,
                                                                                                "name": {
                                                                                                    "pos": 636,
                                                                                                    "end": 652,
                                                                                                    "flags": 32768,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 75,
                                                                                                    "escapedText": "querySelectorAll",
                                                                                                    "flowNode": undefined
                                                                                                },
                                                                                                "flowNode": undefined,
                                                                                                "id": 15476
                                                                                            },
                                                                                            "questionDotToken": undefined,
                                                                                            "arguments": [{
                                                                                                    "pos": 653,
                                                                                                    "end": 701,
                                                                                                    "flags": 32768,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536871168,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 211,
                                                                                                    "head": {
                                                                                                        "pos": 653,
                                                                                                        "end": 656,
                                                                                                        "flags": 32768,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536871168,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 15,
                                                                                                        "text": "",
                                                                                                        "rawText": "",
                                                                                                        "templateFlags": 0
                                                                                                    },
                                                                                                    "templateSpans": [{
                                                                                                            "pos": 656,
                                                                                                            "end": 701,
                                                                                                            "flags": 32768,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536871168,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 221,
                                                                                                            "expression": {
                                                                                                                "pos": 656,
                                                                                                                "end": 683,
                                                                                                                "flags": 32768,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 194,
                                                                                                                "expression": {
                                                                                                                    "pos": 656,
                                                                                                                    "end": 674,
                                                                                                                    "flags": 32768,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "AccordionComponent",
                                                                                                                    "flowNode": undefined,
                                                                                                                    "id": 15482
                                                                                                                },
                                                                                                                "questionDotToken": undefined,
                                                                                                                "name": {
                                                                                                                    "pos": 675,
                                                                                                                    "end": 683,
                                                                                                                    "flags": 32768,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "TAG_NAME",
                                                                                                                    "flowNode": undefined
                                                                                                                },
                                                                                                                "flowNode": undefined,
                                                                                                                "id": 15483
                                                                                                            },
                                                                                                            "literal": {
                                                                                                                "pos": 683,
                                                                                                                "end": 701,
                                                                                                                "flags": 32768,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536871168,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 17,
                                                                                                                "text": ":not([expanded])",
                                                                                                                "rawText": ":not([expanded])",
                                                                                                                "templateFlags": 0
                                                                                                            }
                                                                                                        }],
                                                                                                    "contextualType": undefined,
                                                                                                    "inferenceContext": undefined
                                                                                                }],
                                                                                            "id": 15480
                                                                                        },
                                                                                        "symbol": {
                                                                                            "flags": 2,
                                                                                            "escapedName": "children",
                                                                                            "declarations": [undefined],
                                                                                            "exports": {},
                                                                                            "valueDeclaration": undefined,
                                                                                            "parent": undefined,
                                                                                            "id": 11797,
                                                                                            "isReferenced": 1160127
                                                                                        }
                                                                                    }]
                                                                            },
                                                                            "flowNode": undefined
                                                                        }, {
                                                                            "pos": 703,
                                                                            "end": 786,
                                                                            "flags": 32768,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536871169,
                                                                            "parent": undefined,
                                                                            "kind": 226,
                                                                            "expression": {
                                                                                "pos": 703,
                                                                                "end": 785,
                                                                                "flags": 32768,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536871169,
                                                                                "parent": undefined,
                                                                                "kind": 196,
                                                                                "expression": {
                                                                                    "pos": 703,
                                                                                    "end": 725,
                                                                                    "flags": 32768,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536870912,
                                                                                    "parent": undefined,
                                                                                    "kind": 194,
                                                                                    "expression": {
                                                                                        "pos": 703,
                                                                                        "end": 717,
                                                                                        "flags": 32768,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536870912,
                                                                                        "parent": undefined,
                                                                                        "kind": 75,
                                                                                        "escapedText": "children",
                                                                                        "flowNode": {
                                                                                            "flags": 2064,
                                                                                            "antecedent": undefined,
                                                                                            "node": undefined
                                                                                        },
                                                                                        "id": 15494
                                                                                    },
                                                                                    "questionDotToken": undefined,
                                                                                    "name": {
                                                                                        "pos": 718,
                                                                                        "end": 725,
                                                                                        "flags": 32768,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536870912,
                                                                                        "parent": undefined,
                                                                                        "kind": 75,
                                                                                        "escapedText": "forEach",
                                                                                        "flowNode": undefined
                                                                                    },
                                                                                    "flowNode": undefined,
                                                                                    "id": 15498
                                                                                },
                                                                                "questionDotToken": undefined,
                                                                                "arguments": [{
                                                                                        "pos": 726,
                                                                                        "end": 784,
                                                                                        "flags": 33024,
                                                                                        "modifierFlagsCache": 536870912,
                                                                                        "transformFlags": 536871169,
                                                                                        "parent": undefined,
                                                                                        "kind": 202,
                                                                                        "modifiers": undefined,
                                                                                        "typeParameters": undefined,
                                                                                        "parameters": [{
                                                                                                "pos": 727,
                                                                                                "end": 737,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 536870912,
                                                                                                "transformFlags": 536870913,
                                                                                                "parent": undefined,
                                                                                                "kind": 156,
                                                                                                "decorators": undefined,
                                                                                                "modifiers": undefined,
                                                                                                "dotDotDotToken": undefined,
                                                                                                "name": {
                                                                                                    "pos": 727,
                                                                                                    "end": 732,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 75,
                                                                                                    "escapedText": "child",
                                                                                                    "flowNode": {
                                                                                                        "flags": 2,
                                                                                                        "node": undefined
                                                                                                    }
                                                                                                },
                                                                                                "questionToken": undefined,
                                                                                                "type": {
                                                                                                    "pos": 733,
                                                                                                    "end": 737,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870913,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 125
                                                                                                },
                                                                                                "initializer": undefined,
                                                                                                "symbol": {
                                                                                                    "flags": 1,
                                                                                                    "escapedName": "child",
                                                                                                    "declarations": [undefined],
                                                                                                    "exports": {},
                                                                                                    "valueDeclaration": undefined,
                                                                                                    "parent": undefined,
                                                                                                    "id": 11815,
                                                                                                    "isReferenced": 1160127
                                                                                                }
                                                                                            }],
                                                                                        "equalsGreaterThanToken": {
                                                                                            "pos": 738,
                                                                                            "end": 741,
                                                                                            "flags": 32768,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 38
                                                                                        },
                                                                                        "body": {
                                                                                            "pos": 741,
                                                                                            "end": 784,
                                                                                            "flags": 0,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 223,
                                                                                            "multiLine": true,
                                                                                            "statements": [{
                                                                                                    "pos": 743,
                                                                                                    "end": 777,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 226,
                                                                                                    "expression": {
                                                                                                        "pos": 743,
                                                                                                        "end": 776,
                                                                                                        "flags": 0,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536870912,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 196,
                                                                                                        "expression": {
                                                                                                            "pos": 743,
                                                                                                            "end": 770,
                                                                                                            "flags": 0,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536870912,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 194,
                                                                                                            "expression": {
                                                                                                                "pos": 743,
                                                                                                                "end": 765,
                                                                                                                "flags": 0,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 196,
                                                                                                                "expression": {
                                                                                                                    "pos": 743,
                                                                                                                    "end": 763,
                                                                                                                    "flags": 0,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 194,
                                                                                                                    "expression": {
                                                                                                                        "pos": 743,
                                                                                                                        "end": 756,
                                                                                                                        "flags": 0,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536870912,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 75,
                                                                                                                        "escapedText": "child",
                                                                                                                        "flowNode": undefined,
                                                                                                                        "id": 15586
                                                                                                                    },
                                                                                                                    "questionDotToken": undefined,
                                                                                                                    "name": {
                                                                                                                        "pos": 757,
                                                                                                                        "end": 763,
                                                                                                                        "flags": 0,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536870912,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 75,
                                                                                                                        "escapedText": "expand",
                                                                                                                        "flowNode": undefined
                                                                                                                    },
                                                                                                                    "flowNode": undefined
                                                                                                                },
                                                                                                                "questionDotToken": undefined,
                                                                                                                "arguments": [],
                                                                                                                "id": 15585
                                                                                                            },
                                                                                                            "questionDotToken": undefined,
                                                                                                            "name": {
                                                                                                                "pos": 766,
                                                                                                                "end": 770,
                                                                                                                "flags": 0,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 75,
                                                                                                                "escapedText": "then",
                                                                                                                "flowNode": undefined
                                                                                                            }
                                                                                                        },
                                                                                                        "questionDotToken": undefined,
                                                                                                        "arguments": [{
                                                                                                                "pos": 771,
                                                                                                                "end": 775,
                                                                                                                "flags": 0,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 100
                                                                                                            }],
                                                                                                        "id": 15584
                                                                                                    },
                                                                                                    "flowNode": undefined
                                                                                                }]
                                                                                        },
                                                                                        "flowNode": undefined,
                                                                                        "symbol": {
                                                                                            "flags": 16,
                                                                                            "escapedName": "__function",
                                                                                            "declarations": [undefined],
                                                                                            "valueDeclaration": undefined,
                                                                                            "id": 11814
                                                                                        },
                                                                                        "locals": {},
                                                                                        "endFlowNode": undefined,
                                                                                        "nextContainer": {
                                                                                            "pos": 791,
                                                                                            "end": 1016,
                                                                                            "flags": 256,
                                                                                            "modifierFlagsCache": 536871168,
                                                                                            "transformFlags": 537991521,
                                                                                            "parent": undefined,
                                                                                            "kind": 161,
                                                                                            "decorators": [{
                                                                                                    "pos": 791,
                                                                                                    "end": 806,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536872961,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 157,
                                                                                                    "expression": {
                                                                                                        "pos": 798,
                                                                                                        "end": 806,
                                                                                                        "flags": 16384,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536870912,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 196,
                                                                                                        "expression": {
                                                                                                            "pos": 798,
                                                                                                            "end": 804,
                                                                                                            "flags": 16384,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536870912,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 75,
                                                                                                            "escapedText": "Method",
                                                                                                            "flowNode": {
                                                                                                                "flags": 2050
                                                                                                            },
                                                                                                            "id": 15507
                                                                                                        },
                                                                                                        "questionDotToken": undefined,
                                                                                                        "arguments": [],
                                                                                                        "id": 15506
                                                                                                    },
                                                                                                    "id": 15505
                                                                                                }],
                                                                                            "modifiers": [{
                                                                                                    "pos": 806,
                                                                                                    "end": 815,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536871008,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 126
                                                                                                }],
                                                                                            "name": {
                                                                                                "pos": 815,
                                                                                                "end": 827,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536870912,
                                                                                                "parent": undefined,
                                                                                                "kind": 75,
                                                                                                "escapedText": "collapseAll",
                                                                                                "flowNode": undefined
                                                                                            },
                                                                                            "questionToken": undefined,
                                                                                            "asteriskToken": undefined,
                                                                                            "typeParameters": undefined,
                                                                                            "parameters": [],
                                                                                            "body": {
                                                                                                "pos": 829,
                                                                                                "end": 1016,
                                                                                                "flags": 32768,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 537989377,
                                                                                                "parent": undefined,
                                                                                                "kind": 223,
                                                                                                "multiLine": true,
                                                                                                "statements": [{
                                                                                                        "pos": 831,
                                                                                                        "end": 926,
                                                                                                        "flags": 32768,
                                                                                                        "modifierFlagsCache": 536870912,
                                                                                                        "transformFlags": 537989376,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 225,
                                                                                                        "declarationList": {
                                                                                                            "pos": 831,
                                                                                                            "end": 925,
                                                                                                            "flags": 32769,
                                                                                                            "modifierFlagsCache": 536870912,
                                                                                                            "transformFlags": 538120448,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 243,
                                                                                                            "declarations": [{
                                                                                                                    "pos": 840,
                                                                                                                    "end": 925,
                                                                                                                    "flags": 32768,
                                                                                                                    "modifierFlagsCache": 536870912,
                                                                                                                    "transformFlags": 537006336,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 242,
                                                                                                                    "name": {
                                                                                                                        "pos": 840,
                                                                                                                        "end": 849,
                                                                                                                        "flags": 32768,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536870912,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 75,
                                                                                                                        "escapedText": "children",
                                                                                                                        "flowNode": undefined
                                                                                                                    },
                                                                                                                    "type": undefined,
                                                                                                                    "initializer": {
                                                                                                                        "pos": 851,
                                                                                                                        "end": 925,
                                                                                                                        "flags": 32768,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536875264,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 196,
                                                                                                                        "expression": {
                                                                                                                            "pos": 851,
                                                                                                                            "end": 881,
                                                                                                                            "flags": 32768,
                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                            "transformFlags": 536875008,
                                                                                                                            "parent": undefined,
                                                                                                                            "kind": 194,
                                                                                                                            "expression": {
                                                                                                                                "pos": 851,
                                                                                                                                "end": 864,
                                                                                                                                "flags": 32768,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536875008,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 194,
                                                                                                                                "expression": {
                                                                                                                                    "pos": 851,
                                                                                                                                    "end": 856,
                                                                                                                                    "flags": 32768,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536875008,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 104,
                                                                                                                                    "flowNode": undefined,
                                                                                                                                    "id": 15509
                                                                                                                                },
                                                                                                                                "questionDotToken": undefined,
                                                                                                                                "name": {
                                                                                                                                    "pos": 857,
                                                                                                                                    "end": 864,
                                                                                                                                    "flags": 32768,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 75,
                                                                                                                                    "escapedText": "element",
                                                                                                                                    "flowNode": undefined
                                                                                                                                },
                                                                                                                                "flowNode": undefined,
                                                                                                                                "id": 15510
                                                                                                                            },
                                                                                                                            "questionDotToken": undefined,
                                                                                                                            "name": {
                                                                                                                                "pos": 865,
                                                                                                                                "end": 881,
                                                                                                                                "flags": 32768,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536870912,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 75,
                                                                                                                                "escapedText": "querySelectorAll",
                                                                                                                                "flowNode": undefined
                                                                                                                            },
                                                                                                                            "flowNode": undefined,
                                                                                                                            "id": 15511
                                                                                                                        },
                                                                                                                        "questionDotToken": undefined,
                                                                                                                        "arguments": [{
                                                                                                                                "pos": 882,
                                                                                                                                "end": 924,
                                                                                                                                "flags": 32768,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536871168,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 211,
                                                                                                                                "head": {
                                                                                                                                    "pos": 882,
                                                                                                                                    "end": 885,
                                                                                                                                    "flags": 32768,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536871168,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 15,
                                                                                                                                    "text": "",
                                                                                                                                    "rawText": "",
                                                                                                                                    "templateFlags": 0
                                                                                                                                },
                                                                                                                                "templateSpans": [{
                                                                                                                                        "pos": 885,
                                                                                                                                        "end": 924,
                                                                                                                                        "flags": 32768,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 536871168,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 221,
                                                                                                                                        "expression": {
                                                                                                                                            "pos": 885,
                                                                                                                                            "end": 912,
                                                                                                                                            "flags": 32768,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 194,
                                                                                                                                            "expression": {
                                                                                                                                                "pos": 885,
                                                                                                                                                "end": 903,
                                                                                                                                                "flags": 32768,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 75,
                                                                                                                                                "escapedText": "AccordionComponent",
                                                                                                                                                "flowNode": undefined,
                                                                                                                                                "id": 15513
                                                                                                                                            },
                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                            "name": {
                                                                                                                                                "pos": 904,
                                                                                                                                                "end": 912,
                                                                                                                                                "flags": 32768,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 75,
                                                                                                                                                "escapedText": "TAG_NAME",
                                                                                                                                                "flowNode": undefined
                                                                                                                                            },
                                                                                                                                            "flowNode": undefined,
                                                                                                                                            "id": 15514
                                                                                                                                        },
                                                                                                                                        "literal": {
                                                                                                                                            "pos": 912,
                                                                                                                                            "end": 924,
                                                                                                                                            "flags": 32768,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536871168,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 17,
                                                                                                                                            "text": "[expanded]",
                                                                                                                                            "rawText": "[expanded]",
                                                                                                                                            "templateFlags": 0
                                                                                                                                        }
                                                                                                                                    }],
                                                                                                                                "contextualType": undefined,
                                                                                                                                "inferenceContext": undefined
                                                                                                                            }],
                                                                                                                        "id": 15512
                                                                                                                    },
                                                                                                                    "symbol": {
                                                                                                                        "flags": 2,
                                                                                                                        "escapedName": "children",
                                                                                                                        "declarations": [undefined],
                                                                                                                        "exports": {},
                                                                                                                        "valueDeclaration": undefined,
                                                                                                                        "parent": undefined,
                                                                                                                        "id": 11816,
                                                                                                                        "isReferenced": 1160127
                                                                                                                    }
                                                                                                                }]
                                                                                                        },
                                                                                                        "flowNode": undefined
                                                                                                    }, {
                                                                                                        "pos": 926,
                                                                                                        "end": 1011,
                                                                                                        "flags": 32768,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536871169,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 226,
                                                                                                        "expression": {
                                                                                                            "pos": 926,
                                                                                                            "end": 1010,
                                                                                                            "flags": 32768,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536871169,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 196,
                                                                                                            "expression": {
                                                                                                                "pos": 926,
                                                                                                                "end": 948,
                                                                                                                "flags": 32768,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 194,
                                                                                                                "expression": {
                                                                                                                    "pos": 926,
                                                                                                                    "end": 940,
                                                                                                                    "flags": 32768,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "children",
                                                                                                                    "flowNode": {
                                                                                                                        "flags": 2064,
                                                                                                                        "antecedent": undefined,
                                                                                                                        "node": undefined
                                                                                                                    },
                                                                                                                    "id": 15516
                                                                                                                },
                                                                                                                "questionDotToken": undefined,
                                                                                                                "name": {
                                                                                                                    "pos": 941,
                                                                                                                    "end": 948,
                                                                                                                    "flags": 32768,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "forEach",
                                                                                                                    "flowNode": undefined
                                                                                                                },
                                                                                                                "flowNode": undefined,
                                                                                                                "id": 15517
                                                                                                            },
                                                                                                            "questionDotToken": undefined,
                                                                                                            "arguments": [{
                                                                                                                    "pos": 949,
                                                                                                                    "end": 1009,
                                                                                                                    "flags": 33024,
                                                                                                                    "modifierFlagsCache": 536870912,
                                                                                                                    "transformFlags": 536871169,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 202,
                                                                                                                    "modifiers": undefined,
                                                                                                                    "typeParameters": undefined,
                                                                                                                    "parameters": [{
                                                                                                                            "pos": 950,
                                                                                                                            "end": 960,
                                                                                                                            "flags": 0,
                                                                                                                            "modifierFlagsCache": 536870912,
                                                                                                                            "transformFlags": 536870913,
                                                                                                                            "parent": undefined,
                                                                                                                            "kind": 156,
                                                                                                                            "decorators": undefined,
                                                                                                                            "modifiers": undefined,
                                                                                                                            "dotDotDotToken": undefined,
                                                                                                                            "name": {
                                                                                                                                "pos": 950,
                                                                                                                                "end": 955,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536870912,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 75,
                                                                                                                                "escapedText": "child",
                                                                                                                                "flowNode": {
                                                                                                                                    "flags": 2,
                                                                                                                                    "node": undefined
                                                                                                                                }
                                                                                                                            },
                                                                                                                            "questionToken": undefined,
                                                                                                                            "type": {
                                                                                                                                "pos": 956,
                                                                                                                                "end": 960,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536870913,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 125
                                                                                                                            },
                                                                                                                            "initializer": undefined,
                                                                                                                            "symbol": {
                                                                                                                                "flags": 1,
                                                                                                                                "escapedName": "child",
                                                                                                                                "declarations": [undefined],
                                                                                                                                "exports": {},
                                                                                                                                "valueDeclaration": undefined,
                                                                                                                                "parent": undefined,
                                                                                                                                "id": 11818,
                                                                                                                                "isReferenced": 1160127
                                                                                                                            }
                                                                                                                        }],
                                                                                                                    "equalsGreaterThanToken": {
                                                                                                                        "pos": 961,
                                                                                                                        "end": 964,
                                                                                                                        "flags": 32768,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536870912,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 38
                                                                                                                    },
                                                                                                                    "body": {
                                                                                                                        "pos": 964,
                                                                                                                        "end": 1009,
                                                                                                                        "flags": 0,
                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                        "transformFlags": 536870912,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 223,
                                                                                                                        "multiLine": true,
                                                                                                                        "statements": [{
                                                                                                                                "pos": 966,
                                                                                                                                "end": 1002,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536870912,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 226,
                                                                                                                                "expression": {
                                                                                                                                    "pos": 966,
                                                                                                                                    "end": 1001,
                                                                                                                                    "flags": 0,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 196,
                                                                                                                                    "expression": {
                                                                                                                                        "pos": 966,
                                                                                                                                        "end": 995,
                                                                                                                                        "flags": 0,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 194,
                                                                                                                                        "expression": {
                                                                                                                                            "pos": 966,
                                                                                                                                            "end": 990,
                                                                                                                                            "flags": 0,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 196,
                                                                                                                                            "expression": {
                                                                                                                                                "pos": 966,
                                                                                                                                                "end": 988,
                                                                                                                                                "flags": 0,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 194,
                                                                                                                                                "expression": {
                                                                                                                                                    "pos": 966,
                                                                                                                                                    "end": 979,
                                                                                                                                                    "flags": 0,
                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                    "parent": undefined,
                                                                                                                                                    "kind": 75,
                                                                                                                                                    "escapedText": "child",
                                                                                                                                                    "flowNode": undefined,
                                                                                                                                                    "id": 15589
                                                                                                                                                },
                                                                                                                                                "questionDotToken": undefined,
                                                                                                                                                "name": {
                                                                                                                                                    "pos": 980,
                                                                                                                                                    "end": 988,
                                                                                                                                                    "flags": 0,
                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                    "parent": undefined,
                                                                                                                                                    "kind": 75,
                                                                                                                                                    "escapedText": "collapse",
                                                                                                                                                    "flowNode": undefined
                                                                                                                                                },
                                                                                                                                                "flowNode": undefined
                                                                                                                                            },
                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                            "arguments": [],
                                                                                                                                            "id": 15588
                                                                                                                                        },
                                                                                                                                        "questionDotToken": undefined,
                                                                                                                                        "name": {
                                                                                                                                            "pos": 991,
                                                                                                                                            "end": 995,
                                                                                                                                            "flags": 0,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 75,
                                                                                                                                            "escapedText": "then",
                                                                                                                                            "flowNode": undefined
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    "questionDotToken": undefined,
                                                                                                                                    "arguments": [{
                                                                                                                                            "pos": 996,
                                                                                                                                            "end": 1000,
                                                                                                                                            "flags": 0,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 100
                                                                                                                                        }],
                                                                                                                                    "id": 15587
                                                                                                                                },
                                                                                                                                "flowNode": undefined
                                                                                                                            }]
                                                                                                                    },
                                                                                                                    "flowNode": undefined,
                                                                                                                    "symbol": {
                                                                                                                        "flags": 16,
                                                                                                                        "escapedName": "__function",
                                                                                                                        "declarations": [undefined],
                                                                                                                        "valueDeclaration": undefined,
                                                                                                                        "id": 11817
                                                                                                                    },
                                                                                                                    "locals": {},
                                                                                                                    "endFlowNode": undefined,
                                                                                                                    "nextContainer": {
                                                                                                                        "pos": 1016,
                                                                                                                        "end": 1229,
                                                                                                                        "flags": 256,
                                                                                                                        "modifierFlagsCache": 536871168,
                                                                                                                        "transformFlags": 536877409,
                                                                                                                        "parent": undefined,
                                                                                                                        "kind": 161,
                                                                                                                        "decorators": [{
                                                                                                                                "pos": 1016,
                                                                                                                                "end": 1031,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536872961,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 157,
                                                                                                                                "expression": {
                                                                                                                                    "pos": 1023,
                                                                                                                                    "end": 1031,
                                                                                                                                    "flags": 16384,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 196,
                                                                                                                                    "expression": {
                                                                                                                                        "pos": 1023,
                                                                                                                                        "end": 1029,
                                                                                                                                        "flags": 16384,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 75,
                                                                                                                                        "escapedText": "Method",
                                                                                                                                        "flowNode": {
                                                                                                                                            "flags": 2050
                                                                                                                                        },
                                                                                                                                        "id": 15521
                                                                                                                                    },
                                                                                                                                    "questionDotToken": undefined,
                                                                                                                                    "arguments": [],
                                                                                                                                    "id": 15520
                                                                                                                                },
                                                                                                                                "id": 15519
                                                                                                                            }],
                                                                                                                        "modifiers": [{
                                                                                                                                "pos": 1031,
                                                                                                                                "end": 1040,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536871008,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 126
                                                                                                                            }],
                                                                                                                        "name": {
                                                                                                                            "pos": 1040,
                                                                                                                            "end": 1053,
                                                                                                                            "flags": 0,
                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                            "transformFlags": 536870912,
                                                                                                                            "parent": undefined,
                                                                                                                            "kind": 75,
                                                                                                                            "escapedText": "addAccordion",
                                                                                                                            "flowNode": undefined
                                                                                                                        },
                                                                                                                        "questionToken": undefined,
                                                                                                                        "asteriskToken": undefined,
                                                                                                                        "typeParameters": undefined,
                                                                                                                        "parameters": [{
                                                                                                                                "pos": 1054,
                                                                                                                                "end": 1087,
                                                                                                                                "flags": 32768,
                                                                                                                                "modifierFlagsCache": 536870912,
                                                                                                                                "transformFlags": 536870913,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 156,
                                                                                                                                "decorators": undefined,
                                                                                                                                "modifiers": undefined,
                                                                                                                                "dotDotDotToken": undefined,
                                                                                                                                "name": {
                                                                                                                                    "pos": 1054,
                                                                                                                                    "end": 1063,
                                                                                                                                    "flags": 32768,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 75,
                                                                                                                                    "escapedText": "accordion",
                                                                                                                                    "flowNode": undefined
                                                                                                                                },
                                                                                                                                "questionToken": undefined,
                                                                                                                                "type": {
                                                                                                                                    "pos": 1064,
                                                                                                                                    "end": 1087,
                                                                                                                                    "flags": 0,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536870913,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 169,
                                                                                                                                    "typeName": {
                                                                                                                                        "pos": 1064,
                                                                                                                                        "end": 1087,
                                                                                                                                        "flags": 0,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 75,
                                                                                                                                        "escapedText": "HTMLSntAccordionElement",
                                                                                                                                        "flowNode": undefined
                                                                                                                                    },
                                                                                                                                    "id": 15522
                                                                                                                                },
                                                                                                                                "initializer": undefined,
                                                                                                                                "symbol": {
                                                                                                                                    "flags": 1,
                                                                                                                                    "escapedName": "accordion",
                                                                                                                                    "declarations": [undefined],
                                                                                                                                    "exports": {},
                                                                                                                                    "valueDeclaration": undefined,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "id": 11819,
                                                                                                                                    "isReferenced": 1160127,
                                                                                                                                    "tags": [],
                                                                                                                                    "documentationComment": []
                                                                                                                                },
                                                                                                                                "jsDocCache": []
                                                                                                                            }],
                                                                                                                        "body": {
                                                                                                                            "pos": 1088,
                                                                                                                            "end": 1229,
                                                                                                                            "flags": 32768,
                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                            "transformFlags": 536875008,
                                                                                                                            "parent": undefined,
                                                                                                                            "kind": 223,
                                                                                                                            "multiLine": true,
                                                                                                                            "statements": [{
                                                                                                                                    "pos": 1090,
                                                                                                                                    "end": 1224,
                                                                                                                                    "flags": 32768,
                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                    "transformFlags": 536875008,
                                                                                                                                    "parent": undefined,
                                                                                                                                    "kind": 226,
                                                                                                                                    "expression": {
                                                                                                                                        "pos": 1090,
                                                                                                                                        "end": 1223,
                                                                                                                                        "flags": 32768,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 536875008,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 196,
                                                                                                                                        "expression": {
                                                                                                                                            "pos": 1090,
                                                                                                                                            "end": 1212,
                                                                                                                                            "flags": 32768,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536875008,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 194,
                                                                                                                                            "expression": {
                                                                                                                                                "pos": 1090,
                                                                                                                                                "end": 1200,
                                                                                                                                                "flags": 32768,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536875008,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 194,
                                                                                                                                                "expression": {
                                                                                                                                                    "pos": 1090,
                                                                                                                                                    "end": 1192,
                                                                                                                                                    "flags": 32768,
                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                    "transformFlags": 536875008,
                                                                                                                                                    "parent": undefined,
                                                                                                                                                    "kind": 104,
                                                                                                                                                    "flowNode": undefined,
                                                                                                                                                    "id": 15525
                                                                                                                                                },
                                                                                                                                                "questionDotToken": undefined,
                                                                                                                                                "name": {
                                                                                                                                                    "pos": 1193,
                                                                                                                                                    "end": 1200,
                                                                                                                                                    "flags": 32768,
                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                    "parent": undefined,
                                                                                                                                                    "kind": 75,
                                                                                                                                                    "escapedText": "element",
                                                                                                                                                    "flowNode": undefined
                                                                                                                                                },
                                                                                                                                                "flowNode": undefined,
                                                                                                                                                "id": 15526
                                                                                                                                            },
                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                            "name": {
                                                                                                                                                "pos": 1201,
                                                                                                                                                "end": 1212,
                                                                                                                                                "flags": 32768,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 75,
                                                                                                                                                "escapedText": "appendChild",
                                                                                                                                                "flowNode": undefined
                                                                                                                                            },
                                                                                                                                            "flowNode": undefined,
                                                                                                                                            "id": 15527
                                                                                                                                        },
                                                                                                                                        "questionDotToken": undefined,
                                                                                                                                        "arguments": [{
                                                                                                                                                "pos": 1213,
                                                                                                                                                "end": 1222,
                                                                                                                                                "flags": 32768,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 75,
                                                                                                                                                "escapedText": "accordion",
                                                                                                                                                "flowNode": undefined,
                                                                                                                                                "contextualType": undefined,
                                                                                                                                                "inferenceContext": undefined,
                                                                                                                                                "id": 15528
                                                                                                                                            }],
                                                                                                                                        "id": 15523
                                                                                                                                    },
                                                                                                                                    "flowNode": undefined
                                                                                                                                }]
                                                                                                                        },
                                                                                                                        "symbol": {
                                                                                                                            "flags": 8192,
                                                                                                                            "escapedName": "addAccordion",
                                                                                                                            "declarations": [undefined],
                                                                                                                            "valueDeclaration": undefined,
                                                                                                                            "parent": {
                                                                                                                                "flags": 32,
                                                                                                                                "escapedName": "AccordionGroupComponent",
                                                                                                                                "declarations": [undefined],
                                                                                                                                "exports": {},
                                                                                                                                "members": {},
                                                                                                                                "valueDeclaration": undefined,
                                                                                                                                "parent": undefined,
                                                                                                                                "id": 11785
                                                                                                                            },
                                                                                                                            "id": 11789
                                                                                                                        },
                                                                                                                        "locals": {},
                                                                                                                        "endFlowNode": {
                                                                                                                            "flags": 512,
                                                                                                                            "antecedent": undefined,
                                                                                                                            "node": undefined
                                                                                                                        },
                                                                                                                        "nextContainer": {
                                                                                                                            "pos": 1229,
                                                                                                                            "end": 1617,
                                                                                                                            "flags": 256,
                                                                                                                            "modifierFlagsCache": 536870912,
                                                                                                                            "transformFlags": 537989376,
                                                                                                                            "parent": undefined,
                                                                                                                            "kind": 161,
                                                                                                                            "decorators": undefined,
                                                                                                                            "modifiers": undefined,
                                                                                                                            "name": {
                                                                                                                                "pos": 1229,
                                                                                                                                "end": 1256,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 536870912,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 75,
                                                                                                                                "escapedText": "componentWillRender",
                                                                                                                                "flowNode": {
                                                                                                                                    "flags": 6146,
                                                                                                                                    "id": 72
                                                                                                                                }
                                                                                                                            },
                                                                                                                            "questionToken": undefined,
                                                                                                                            "asteriskToken": undefined,
                                                                                                                            "typeParameters": undefined,
                                                                                                                            "parameters": [],
                                                                                                                            "body": {
                                                                                                                                "pos": 1258,
                                                                                                                                "end": 1617,
                                                                                                                                "flags": 0,
                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                "transformFlags": 537989376,
                                                                                                                                "parent": undefined,
                                                                                                                                "kind": 223,
                                                                                                                                "multiLine": true,
                                                                                                                                "statements": [{
                                                                                                                                        "pos": 1260,
                                                                                                                                        "end": 1612,
                                                                                                                                        "flags": 0,
                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                        "transformFlags": 537989376,
                                                                                                                                        "parent": undefined,
                                                                                                                                        "kind": 227,
                                                                                                                                        "expression": {
                                                                                                                                            "pos": 1269,
                                                                                                                                            "end": 1281,
                                                                                                                                            "flags": 0,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 536875008,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 194,
                                                                                                                                            "expression": {
                                                                                                                                                "pos": 1269,
                                                                                                                                                "end": 1273,
                                                                                                                                                "flags": 0,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536875008,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 104,
                                                                                                                                                "flowNode": undefined,
                                                                                                                                                "id": 15530
                                                                                                                                            },
                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                            "name": {
                                                                                                                                                "pos": 1274,
                                                                                                                                                "end": 1281,
                                                                                                                                                "flags": 0,
                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                "parent": undefined,
                                                                                                                                                "kind": 75,
                                                                                                                                                "escapedText": "element",
                                                                                                                                                "flowNode": undefined
                                                                                                                                            },
                                                                                                                                            "flowNode": undefined,
                                                                                                                                            "id": 15531
                                                                                                                                        },
                                                                                                                                        "thenStatement": {
                                                                                                                                            "pos": 1282,
                                                                                                                                            "end": 1612,
                                                                                                                                            "flags": 0,
                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                            "transformFlags": 537989376,
                                                                                                                                            "parent": undefined,
                                                                                                                                            "kind": 223,
                                                                                                                                            "multiLine": true,
                                                                                                                                            "statements": [{
                                                                                                                                                    "pos": 1284,
                                                                                                                                                    "end": 1605,
                                                                                                                                                    "flags": 0,
                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                    "transformFlags": 537989376,
                                                                                                                                                    "parent": undefined,
                                                                                                                                                    "kind": 227,
                                                                                                                                                    "expression": {
                                                                                                                                                        "pos": 1295,
                                                                                                                                                        "end": 1312,
                                                                                                                                                        "flags": 0,
                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                        "transformFlags": 536875008,
                                                                                                                                                        "parent": undefined,
                                                                                                                                                        "kind": 207,
                                                                                                                                                        "operator": 53,
                                                                                                                                                        "operand": {
                                                                                                                                                            "pos": 1296,
                                                                                                                                                            "end": 1312,
                                                                                                                                                            "flags": 0,
                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                            "transformFlags": 536875008,
                                                                                                                                                            "parent": undefined,
                                                                                                                                                            "kind": 194,
                                                                                                                                                            "expression": {
                                                                                                                                                                "pos": 1296,
                                                                                                                                                                "end": 1300,
                                                                                                                                                                "flags": 0,
                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                "transformFlags": 536875008,
                                                                                                                                                                "parent": undefined,
                                                                                                                                                                "kind": 104,
                                                                                                                                                                "flowNode": {
                                                                                                                                                                    "flags": 6176,
                                                                                                                                                                    "antecedent": undefined,
                                                                                                                                                                    "node": undefined,
                                                                                                                                                                    "id": 73
                                                                                                                                                                },
                                                                                                                                                                "id": 15532
                                                                                                                                                            },
                                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                                            "name": {
                                                                                                                                                                "pos": 1301,
                                                                                                                                                                "end": 1312,
                                                                                                                                                                "flags": 0,
                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                "parent": undefined,
                                                                                                                                                                "kind": 75,
                                                                                                                                                                "escapedText": "multiExpand",
                                                                                                                                                                "flowNode": undefined
                                                                                                                                                            },
                                                                                                                                                            "flowNode": undefined,
                                                                                                                                                            "id": 15533
                                                                                                                                                        }
                                                                                                                                                    },
                                                                                                                                                    "thenStatement": {
                                                                                                                                                        "pos": 1313,
                                                                                                                                                        "end": 1605,
                                                                                                                                                        "flags": 0,
                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                        "transformFlags": 537989376,
                                                                                                                                                        "parent": undefined,
                                                                                                                                                        "kind": 223,
                                                                                                                                                        "multiLine": true,
                                                                                                                                                        "statements": [{
                                                                                                                                                                "pos": 1315,
                                                                                                                                                                "end": 1355,
                                                                                                                                                                "flags": 0,
                                                                                                                                                                "modifierFlagsCache": 536870912,
                                                                                                                                                                "transformFlags": 537985280,
                                                                                                                                                                "parent": undefined,
                                                                                                                                                                "kind": 225,
                                                                                                                                                                "declarationList": {
                                                                                                                                                                    "pos": 1315,
                                                                                                                                                                    "end": 1354,
                                                                                                                                                                    "flags": 1,
                                                                                                                                                                    "modifierFlagsCache": 536870912,
                                                                                                                                                                    "transformFlags": 538116352,
                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                    "kind": 243,
                                                                                                                                                                    "declarations": [{
                                                                                                                                                                            "pos": 1328,
                                                                                                                                                                            "end": 1354,
                                                                                                                                                                            "flags": 0,
                                                                                                                                                                            "modifierFlagsCache": 536870912,
                                                                                                                                                                            "transformFlags": 537002240,
                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                            "kind": 242,
                                                                                                                                                                            "name": {
                                                                                                                                                                                "pos": 1328,
                                                                                                                                                                                "end": 1350,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 75,
                                                                                                                                                                                "escapedText": "numberOfExpandedItems",
                                                                                                                                                                                "flowNode": {
                                                                                                                                                                                    "flags": 6176,
                                                                                                                                                                                    "antecedent": undefined,
                                                                                                                                                                                    "node": undefined,
                                                                                                                                                                                    "id": 74
                                                                                                                                                                                }
                                                                                                                                                                            },
                                                                                                                                                                            "type": undefined,
                                                                                                                                                                            "initializer": {
                                                                                                                                                                                "pos": 1352,
                                                                                                                                                                                "end": 1354,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 8,
                                                                                                                                                                                "text": "0",
                                                                                                                                                                                "numericLiteralFlags": 0,
                                                                                                                                                                                "id": 15534
                                                                                                                                                                            },
                                                                                                                                                                            "symbol": {
                                                                                                                                                                                "flags": 2,
                                                                                                                                                                                "escapedName": "numberOfExpandedItems",
                                                                                                                                                                                "declarations": [undefined],
                                                                                                                                                                                "exports": {},
                                                                                                                                                                                "valueDeclaration": undefined,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "id": 11820,
                                                                                                                                                                                "isReferenced": 1160127
                                                                                                                                                                            }
                                                                                                                                                                        }]
                                                                                                                                                                },
                                                                                                                                                                "flowNode": undefined
                                                                                                                                                            }, {
                                                                                                                                                                "pos": 1355,
                                                                                                                                                                "end": 1596,
                                                                                                                                                                "flags": 0,
                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                "transformFlags": 536875264,
                                                                                                                                                                "parent": undefined,
                                                                                                                                                                "kind": 226,
                                                                                                                                                                "expression": {
                                                                                                                                                                    "pos": 1355,
                                                                                                                                                                    "end": 1596,
                                                                                                                                                                    "flags": 0,
                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                    "transformFlags": 536875264,
                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                    "kind": 196,
                                                                                                                                                                    "expression": {
                                                                                                                                                                        "pos": 1355,
                                                                                                                                                                        "end": 1419,
                                                                                                                                                                        "flags": 0,
                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                        "transformFlags": 536875008,
                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                        "kind": 194,
                                                                                                                                                                        "expression": {
                                                                                                                                                                            "pos": 1355,
                                                                                                                                                                            "end": 1411,
                                                                                                                                                                            "flags": 0,
                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                            "transformFlags": 536875008,
                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                            "kind": 196,
                                                                                                                                                                            "expression": {
                                                                                                                                                                                "pos": 1355,
                                                                                                                                                                                "end": 1394,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                "transformFlags": 536875008,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 194,
                                                                                                                                                                                "expression": {
                                                                                                                                                                                    "pos": 1355,
                                                                                                                                                                                    "end": 1377,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                    "transformFlags": 536875008,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 194,
                                                                                                                                                                                    "expression": {
                                                                                                                                                                                        "pos": 1355,
                                                                                                                                                                                        "end": 1369,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                        "transformFlags": 536875008,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "kind": 104,
                                                                                                                                                                                        "flowNode": {
                                                                                                                                                                                            "flags": 2064,
                                                                                                                                                                                            "antecedent": undefined,
                                                                                                                                                                                            "node": undefined
                                                                                                                                                                                        },
                                                                                                                                                                                        "id": 15537
                                                                                                                                                                                    },
                                                                                                                                                                                    "questionDotToken": undefined,
                                                                                                                                                                                    "name": {
                                                                                                                                                                                        "pos": 1370,
                                                                                                                                                                                        "end": 1377,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "kind": 75,
                                                                                                                                                                                        "escapedText": "element",
                                                                                                                                                                                        "flowNode": undefined
                                                                                                                                                                                    },
                                                                                                                                                                                    "flowNode": undefined,
                                                                                                                                                                                    "id": 15538
                                                                                                                                                                                },
                                                                                                                                                                                "questionDotToken": undefined,
                                                                                                                                                                                "name": {
                                                                                                                                                                                    "pos": 1378,
                                                                                                                                                                                    "end": 1394,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 75,
                                                                                                                                                                                    "escapedText": "querySelectorAll",
                                                                                                                                                                                    "flowNode": undefined
                                                                                                                                                                                },
                                                                                                                                                                                "flowNode": undefined,
                                                                                                                                                                                "id": 15539
                                                                                                                                                                            },
                                                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                                                            "arguments": [{
                                                                                                                                                                                    "pos": 1395,
                                                                                                                                                                                    "end": 1410,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 10,
                                                                                                                                                                                    "text": "snt-accordion",
                                                                                                                                                                                    "contextualType": undefined,
                                                                                                                                                                                    "inferenceContext": undefined
                                                                                                                                                                                }],
                                                                                                                                                                            "id": 15536
                                                                                                                                                                        },
                                                                                                                                                                        "questionDotToken": undefined,
                                                                                                                                                                        "name": {
                                                                                                                                                                            "pos": 1412,
                                                                                                                                                                            "end": 1419,
                                                                                                                                                                            "flags": 0,
                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                            "kind": 75,
                                                                                                                                                                            "escapedText": "forEach",
                                                                                                                                                                            "flowNode": undefined
                                                                                                                                                                        },
                                                                                                                                                                        "id": 15544
                                                                                                                                                                    },
                                                                                                                                                                    "questionDotToken": undefined,
                                                                                                                                                                    "arguments": [{
                                                                                                                                                                            "pos": 1420,
                                                                                                                                                                            "end": 1595,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "modifierFlagsCache": 536870912,
                                                                                                                                                                            "transformFlags": 536871168,
                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                            "kind": 202,
                                                                                                                                                                            "parameters": [{
                                                                                                                                                                                    "pos": 1420,
                                                                                                                                                                                    "end": 1422,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 536870912,
                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 156,
                                                                                                                                                                                    "name": {
                                                                                                                                                                                        "pos": 1420,
                                                                                                                                                                                        "end": 1422,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "kind": 75,
                                                                                                                                                                                        "escapedText": "c",
                                                                                                                                                                                        "flowNode": {
                                                                                                                                                                                            "flags": 6146,
                                                                                                                                                                                            "node": undefined,
                                                                                                                                                                                            "id": 77
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                    "symbol": {
                                                                                                                                                                                        "flags": 1,
                                                                                                                                                                                        "escapedName": "c",
                                                                                                                                                                                        "declarations": [undefined],
                                                                                                                                                                                        "exports": {},
                                                                                                                                                                                        "valueDeclaration": undefined,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "id": 11822,
                                                                                                                                                                                        "isReferenced": 1160127
                                                                                                                                                                                    }
                                                                                                                                                                                }],
                                                                                                                                                                            "equalsGreaterThanToken": {
                                                                                                                                                                                "pos": 1422,
                                                                                                                                                                                "end": 1425,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 38
                                                                                                                                                                            },
                                                                                                                                                                            "body": {
                                                                                                                                                                                "pos": 1425,
                                                                                                                                                                                "end": 1595,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 223,
                                                                                                                                                                                "multiLine": true,
                                                                                                                                                                                "statements": [{
                                                                                                                                                                                        "pos": 1427,
                                                                                                                                                                                        "end": 1495,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "kind": 227,
                                                                                                                                                                                        "expression": {
                                                                                                                                                                                            "pos": 1442,
                                                                                                                                                                                            "end": 1468,
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                            "kind": 196,
                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                "pos": 1442,
                                                                                                                                                                                                "end": 1456,
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                "kind": 194,
                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                    "pos": 1442,
                                                                                                                                                                                                    "end": 1443,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 75,
                                                                                                                                                                                                    "escapedText": "c",
                                                                                                                                                                                                    "flowNode": undefined,
                                                                                                                                                                                                    "id": 15591
                                                                                                                                                                                                },
                                                                                                                                                                                                "questionDotToken": undefined,
                                                                                                                                                                                                "name": {
                                                                                                                                                                                                    "pos": 1444,
                                                                                                                                                                                                    "end": 1456,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 75,
                                                                                                                                                                                                    "escapedText": "hasAttribute",
                                                                                                                                                                                                    "flowNode": undefined
                                                                                                                                                                                                },
                                                                                                                                                                                                "flowNode": undefined,
                                                                                                                                                                                                "id": 15592
                                                                                                                                                                                            },
                                                                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                                                                            "arguments": [{
                                                                                                                                                                                                    "pos": 1457,
                                                                                                                                                                                                    "end": 1467,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 10,
                                                                                                                                                                                                    "text": "expanded",
                                                                                                                                                                                                    "contextualType": undefined,
                                                                                                                                                                                                    "inferenceContext": undefined
                                                                                                                                                                                                }],
                                                                                                                                                                                            "id": 15590
                                                                                                                                                                                        },
                                                                                                                                                                                        "thenStatement": {
                                                                                                                                                                                            "pos": 1469,
                                                                                                                                                                                            "end": 1495,
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                            "kind": 223,
                                                                                                                                                                                            "statements": [{
                                                                                                                                                                                                    "pos": 1471,
                                                                                                                                                                                                    "end": 1494,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 226,
                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                        "pos": 1471,
                                                                                                                                                                                                        "end": 1494,
                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                                        "kind": 208,
                                                                                                                                                                                                        "operand": {
                                                                                                                                                                                                            "pos": 1471,
                                                                                                                                                                                                            "end": 1492,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 75,
                                                                                                                                                                                                            "escapedText": "numberOfExpandedItems",
                                                                                                                                                                                                            "flowNode": {
                                                                                                                                                                                                                "flags": 6176,
                                                                                                                                                                                                                "antecedent": undefined,
                                                                                                                                                                                                                "node": undefined,
                                                                                                                                                                                                                "id": 76
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "id": 15594
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "operator": 45
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flowNode": undefined
                                                                                                                                                                                                }],
                                                                                                                                                                                            "locals": undefined
                                                                                                                                                                                        },
                                                                                                                                                                                        "elseStatement": undefined,
                                                                                                                                                                                        "flowNode": undefined
                                                                                                                                                                                    }, {
                                                                                                                                                                                        "pos": 1495,
                                                                                                                                                                                        "end": 1584,
                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                        "kind": 227,
                                                                                                                                                                                        "expression": {
                                                                                                                                                                                            "pos": 1510,
                                                                                                                                                                                            "end": 1536,
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                            "kind": 209,
                                                                                                                                                                                            "left": {
                                                                                                                                                                                                "pos": 1510,
                                                                                                                                                                                                "end": 1531,
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                "kind": 75,
                                                                                                                                                                                                "escapedText": "numberOfExpandedItems",
                                                                                                                                                                                                "flowNode": {
                                                                                                                                                                                                    "flags": 6148,
                                                                                                                                                                                                    "antecedents": [{
                                                                                                                                                                                                            "flags": 2064,
                                                                                                                                                                                                            "antecedent": undefined,
                                                                                                                                                                                                            "node": undefined
                                                                                                                                                                                                        }, {
                                                                                                                                                                                                            "flags": 6208,
                                                                                                                                                                                                            "antecedent": undefined,
                                                                                                                                                                                                            "node": undefined
                                                                                                                                                                                                        }],
                                                                                                                                                                                                    "id": 75
                                                                                                                                                                                                },
                                                                                                                                                                                                "id": 15595
                                                                                                                                                                                            },
                                                                                                                                                                                            "operatorToken": {
                                                                                                                                                                                                "pos": 1531,
                                                                                                                                                                                                "end": 1534,
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                "kind": 33
                                                                                                                                                                                            },
                                                                                                                                                                                            "right": {
                                                                                                                                                                                                "pos": 1534,
                                                                                                                                                                                                "end": 1536,
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                "kind": 8,
                                                                                                                                                                                                "text": "2",
                                                                                                                                                                                                "numericLiteralFlags": 0
                                                                                                                                                                                            }
                                                                                                                                                                                        },
                                                                                                                                                                                        "thenStatement": {
                                                                                                                                                                                            "pos": 1537,
                                                                                                                                                                                            "end": 1584,
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                            "kind": 223,
                                                                                                                                                                                            "multiLine": true,
                                                                                                                                                                                            "statements": [{
                                                                                                                                                                                                    "pos": 1539,
                                                                                                                                                                                                    "end": 1571,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 226,
                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                        "pos": 1539,
                                                                                                                                                                                                        "end": 1571,
                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                                        "kind": 209,
                                                                                                                                                                                                        "left": {
                                                                                                                                                                                                            "pos": 1539,
                                                                                                                                                                                                            "end": 1563,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 194,
                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                "pos": 1539,
                                                                                                                                                                                                                "end": 1554,
                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                                "kind": 75,
                                                                                                                                                                                                                "escapedText": "c",
                                                                                                                                                                                                                "flowNode": undefined,
                                                                                                                                                                                                                "id": 15596
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "questionDotToken": undefined,
                                                                                                                                                                                                            "name": {
                                                                                                                                                                                                                "pos": 1555,
                                                                                                                                                                                                                "end": 1563,
                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                                "transformFlags": 536870912,
                                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                                "kind": 75,
                                                                                                                                                                                                                "escapedText": "expanded",
                                                                                                                                                                                                                "flowNode": undefined
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flowNode": undefined,
                                                                                                                                                                                                            "id": 15597
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "operatorToken": {
                                                                                                                                                                                                            "pos": 1563,
                                                                                                                                                                                                            "end": 1565,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 62
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "right": {
                                                                                                                                                                                                            "pos": 1565,
                                                                                                                                                                                                            "end": 1571,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 91
                                                                                                                                                                                                        }
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flowNode": undefined
                                                                                                                                                                                                }],
                                                                                                                                                                                            "locals": undefined
                                                                                                                                                                                        },
                                                                                                                                                                                        "elseStatement": undefined,
                                                                                                                                                                                        "flowNode": undefined
                                                                                                                                                                                    }]
                                                                                                                                                                            },
                                                                                                                                                                            "flowNode": undefined,
                                                                                                                                                                            "symbol": {
                                                                                                                                                                                "flags": 16,
                                                                                                                                                                                "escapedName": "__function",
                                                                                                                                                                                "declarations": [undefined],
                                                                                                                                                                                "valueDeclaration": undefined,
                                                                                                                                                                                "id": 11821
                                                                                                                                                                            },
                                                                                                                                                                            "locals": {},
                                                                                                                                                                            "endFlowNode": {
                                                                                                                                                                                "flags": 4,
                                                                                                                                                                                "antecedents": [{
                                                                                                                                                                                        "flags": 2064,
                                                                                                                                                                                        "antecedent": undefined,
                                                                                                                                                                                        "node": undefined
                                                                                                                                                                                    }, undefined]
                                                                                                                                                                            },
                                                                                                                                                                            "nextContainer": {
                                                                                                                                                                                "pos": 1617,
                                                                                                                                                                                "end": 1724,
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "modifierFlagsCache": 536870912,
                                                                                                                                                                                "transformFlags": 537919778,
                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                "kind": 161,
                                                                                                                                                                                "decorators": undefined,
                                                                                                                                                                                "modifiers": undefined,
                                                                                                                                                                                "name": {
                                                                                                                                                                                    "pos": 1617,
                                                                                                                                                                                    "end": 1629,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                    "transformFlags": 536870912,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 75,
                                                                                                                                                                                    "escapedText": "render",
                                                                                                                                                                                    "flowNode": {
                                                                                                                                                                                        "flags": 2
                                                                                                                                                                                    }
                                                                                                                                                                                },
                                                                                                                                                                                "questionToken": undefined,
                                                                                                                                                                                "asteriskToken": undefined,
                                                                                                                                                                                "typeParameters": undefined,
                                                                                                                                                                                "parameters": [],
                                                                                                                                                                                "body": {
                                                                                                                                                                                    "pos": 1631,
                                                                                                                                                                                    "end": 1724,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                    "transformFlags": 537919522,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "kind": 223,
                                                                                                                                                                                    "multiLine": true,
                                                                                                                                                                                    "statements": [{
                                                                                                                                                                                            "pos": 1633,
                                                                                                                                                                                            "end": 1719,
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                            "transformFlags": 537919522,
                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                            "kind": 235,
                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                "pos": 1645,
                                                                                                                                                                                                "end": 1719,
                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                "transformFlags": 536870914,
                                                                                                                                                                                                "parent": undefined,
                                                                                                                                                                                                "kind": 200,
                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                    "pos": 1647,
                                                                                                                                                                                                    "end": 1712,
                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                    "transformFlags": 536870914,
                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                    "kind": 266,
                                                                                                                                                                                                    "openingElement": {
                                                                                                                                                                                                        "pos": 1647,
                                                                                                                                                                                                        "end": 1669,
                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                                        "transformFlags": 536870914,
                                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                                        "kind": 268,
                                                                                                                                                                                                        "tagName": {
                                                                                                                                                                                                            "pos": 1658,
                                                                                                                                                                                                            "end": 1668,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 75,
                                                                                                                                                                                                            "escapedText": "snt-layout",
                                                                                                                                                                                                            "flowNode": undefined
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "typeArguments": undefined,
                                                                                                                                                                                                        "attributes": {
                                                                                                                                                                                                            "pos": 1668,
                                                                                                                                                                                                            "end": 1668,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870914,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 274,
                                                                                                                                                                                                            "properties": [],
                                                                                                                                                                                                            "symbol": {
                                                                                                                                                                                                                "flags": 4096,
                                                                                                                                                                                                                "escapedName": "__jsxAttributes",
                                                                                                                                                                                                                "declarations": [undefined],
                                                                                                                                                                                                                "members": {},
                                                                                                                                                                                                                "valueDeclaration": undefined
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "nextContainer": {
                                                                                                                                                                                                                "pos": 1686,
                                                                                                                                                                                                                "end": 1686,
                                                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                                                "modifierFlagsCache": 0,
                                                                                                                                                                                                                "transformFlags": 536870914,
                                                                                                                                                                                                                "parent": {
                                                                                                                                                                                                                    "pos": 1681,
                                                                                                                                                                                                                    "end": 1689,
                                                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                                                                                                                    "transformFlags": 536870914,
                                                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                                                    "kind": 267,
                                                                                                                                                                                                                    "tagName": {
                                                                                                                                                                                                                        "pos": 1682,
                                                                                                                                                                                                                        "end": 1686,
                                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                                                        "transformFlags": 536870912,
                                                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                                                        "kind": 75,
                                                                                                                                                                                                                        "escapedText": "slot",
                                                                                                                                                                                                                        "flowNode": undefined
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "typeArguments": undefined,
                                                                                                                                                                                                                    "attributes": undefined,
                                                                                                                                                                                                                    "id": 15599
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "kind": 274,
                                                                                                                                                                                                                "properties": [],
                                                                                                                                                                                                                "symbol": {
                                                                                                                                                                                                                    "flags": 4096,
                                                                                                                                                                                                                    "escapedName": "__jsxAttributes",
                                                                                                                                                                                                                    "declarations": [undefined],
                                                                                                                                                                                                                    "members": {},
                                                                                                                                                                                                                    "valueDeclaration": undefined
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "nextContainer": undefined,
                                                                                                                                                                                                                "contextualType": undefined,
                                                                                                                                                                                                                "inferenceContext": undefined
                                                                                                                                                                                                            }
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "id": 15598
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "children": [{
                                                                                                                                                                                                            "pos": 1669,
                                                                                                                                                                                                            "end": 1681,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870914,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 11,
                                                                                                                                                                                                            "text": "\r\n          ",
                                                                                                                                                                                                            "containsOnlyTriviaWhiteSpaces": true
                                                                                                                                                                                                        }, undefined, {
                                                                                                                                                                                                            "pos": 1689,
                                                                                                                                                                                                            "end": 1699,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870914,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 11,
                                                                                                                                                                                                            "text": "\r\n        ",
                                                                                                                                                                                                            "containsOnlyTriviaWhiteSpaces": true
                                                                                                                                                                                                        }],
                                                                                                                                                                                                    "closingElement": {
                                                                                                                                                                                                        "pos": 1699,
                                                                                                                                                                                                        "end": 1712,
                                                                                                                                                                                                        "flags": 0,
                                                                                                                                                                                                        "modifierFlagsCache": 0,
                                                                                                                                                                                                        "transformFlags": 536870914,
                                                                                                                                                                                                        "parent": undefined,
                                                                                                                                                                                                        "kind": 269,
                                                                                                                                                                                                        "tagName": {
                                                                                                                                                                                                            "pos": 1701,
                                                                                                                                                                                                            "end": 1711,
                                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                                            "modifierFlagsCache": 0,
                                                                                                                                                                                                            "transformFlags": 536870912,
                                                                                                                                                                                                            "parent": undefined,
                                                                                                                                                                                                            "kind": 75,
                                                                                                                                                                                                            "escapedText": "snt-layout",
                                                                                                                                                                                                            "flowNode": undefined
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "id": 15600
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "id": 15548,
                                                                                                                                                                                                    "contextualType": undefined,
                                                                                                                                                                                                    "inferenceContext": undefined
                                                                                                                                                                                                },
                                                                                                                                                                                                "id": 15547
                                                                                                                                                                                            },
                                                                                                                                                                                            "flowNode": undefined
                                                                                                                                                                                        }]
                                                                                                                                                                                },
                                                                                                                                                                                "symbol": {
                                                                                                                                                                                    "flags": 8192,
                                                                                                                                                                                    "escapedName": "render",
                                                                                                                                                                                    "declarations": [undefined],
                                                                                                                                                                                    "valueDeclaration": undefined,
                                                                                                                                                                                    "parent": undefined,
                                                                                                                                                                                    "id": 11791
                                                                                                                                                                                },
                                                                                                                                                                                "locals": {},
                                                                                                                                                                                "nextContainer": undefined,
                                                                                                                                                                                "id": 15546
                                                                                                                                                                            },
                                                                                                                                                                            "contextualType": undefined,
                                                                                                                                                                            "inferenceContext": undefined,
                                                                                                                                                                            "id": 15545
                                                                                                                                                                        }],
                                                                                                                                                                    "id": 15535
                                                                                                                                                                },
                                                                                                                                                                "flowNode": undefined
                                                                                                                                                            }],
                                                                                                                                                        "locals": {},
                                                                                                                                                        "nextContainer": undefined
                                                                                                                                                    },
                                                                                                                                                    "elseStatement": undefined,
                                                                                                                                                    "flowNode": undefined
                                                                                                                                                }],
                                                                                                                                            "locals": undefined
                                                                                                                                        },
                                                                                                                                        "elseStatement": undefined,
                                                                                                                                        "flowNode": undefined
                                                                                                                                    }]
                                                                                                                            },
                                                                                                                            "symbol": {
                                                                                                                                "flags": 8192,
                                                                                                                                "escapedName": "componentWillRender",
                                                                                                                                "declarations": [undefined],
                                                                                                                                "valueDeclaration": undefined,
                                                                                                                                "parent": undefined,
                                                                                                                                "id": 11790
                                                                                                                            },
                                                                                                                            "locals": {},
                                                                                                                            "nextContainer": undefined,
                                                                                                                            "endFlowNode": {
                                                                                                                                "flags": 4,
                                                                                                                                "antecedents": [{
                                                                                                                                        "flags": 2052,
                                                                                                                                        "antecedents": [undefined, {
                                                                                                                                                "flags": 6208,
                                                                                                                                                "antecedent": undefined,
                                                                                                                                                "node": undefined
                                                                                                                                            }]
                                                                                                                                    }, {
                                                                                                                                        "flags": 6208,
                                                                                                                                        "antecedent": undefined,
                                                                                                                                        "node": undefined
                                                                                                                                    }]
                                                                                                                            },
                                                                                                                            "id": 15529
                                                                                                                        },
                                                                                                                        "id": 15524,
                                                                                                                        "jsDocCache": []
                                                                                                                    },
                                                                                                                    "contextualType": undefined,
                                                                                                                    "inferenceContext": undefined,
                                                                                                                    "id": 15518
                                                                                                                }],
                                                                                                            "id": 15515
                                                                                                        },
                                                                                                        "flowNode": undefined
                                                                                                    }]
                                                                                            },
                                                                                            "symbol": {
                                                                                                "flags": 8192,
                                                                                                "escapedName": "collapseAll",
                                                                                                "declarations": [undefined],
                                                                                                "valueDeclaration": undefined,
                                                                                                "parent": undefined,
                                                                                                "id": 11788
                                                                                            },
                                                                                            "locals": {},
                                                                                            "nextContainer": undefined,
                                                                                            "endFlowNode": {
                                                                                                "flags": 512,
                                                                                                "antecedent": undefined,
                                                                                                "node": undefined
                                                                                            },
                                                                                            "id": 15508,
                                                                                            "jsDocCache": []
                                                                                        },
                                                                                        "contextualType": undefined,
                                                                                        "inferenceContext": undefined,
                                                                                        "id": 15501
                                                                                    }],
                                                                                "id": 15493
                                                                            },
                                                                            "flowNode": undefined
                                                                        }]
                                                                },
                                                                "symbol": {
                                                                    "flags": 8192,
                                                                    "escapedName": "expandAll",
                                                                    "declarations": [undefined],
                                                                    "valueDeclaration": undefined,
                                                                    "parent": undefined,
                                                                    "id": 11787
                                                                },
                                                                "locals": {},
                                                                "nextContainer": undefined,
                                                                "endFlowNode": {
                                                                    "flags": 512,
                                                                    "antecedent": undefined,
                                                                    "node": undefined
                                                                },
                                                                "id": 15473,
                                                                "jsDocCache": []
                                                            },
                                                            "contextualType": undefined,
                                                            "inferenceContext": undefined,
                                                            "jsDocCache": []
                                                        }],
                                                    "id": 15458
                                                },
                                                "id": 15457
                                            }],
                                        "modifiers": [{
                                                "pos": 374,
                                                "end": 382,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536870912,
                                                "parent": undefined,
                                                "kind": 89
                                            }],
                                        "name": {
                                            "pos": 388,
                                            "end": 412,
                                            "flags": 0,
                                            "modifierFlagsCache": 0,
                                            "transformFlags": 536870912,
                                            "parent": undefined,
                                            "kind": 75,
                                            "escapedText": "AccordionGroupComponent",
                                            "flowNode": undefined
                                        },
                                        "typeParameters": undefined,
                                        "heritageClauses": undefined,
                                        "members": [{
                                                "pos": 414,
                                                "end": 476,
                                                "flags": 0,
                                                "modifierFlagsCache": 536871012,
                                                "transformFlags": 541067521,
                                                "parent": undefined,
                                                "kind": 159,
                                                "decorators": undefined,
                                                "modifiers": [{
                                                        "pos": 414,
                                                        "end": 426,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 119
                                                    }, {
                                                        "pos": 426,
                                                        "end": 433,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536871168,
                                                        "parent": undefined,
                                                        "kind": 120
                                                    }, {
                                                        "pos": 433,
                                                        "end": 442,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 138
                                                    }],
                                                "name": {
                                                    "pos": 442,
                                                    "end": 451,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 75,
                                                    "escapedText": "TAG_NAME",
                                                    "flowNode": {
                                                        "flags": 2
                                                    }
                                                },
                                                "questionToken": undefined,
                                                "type": undefined,
                                                "initializer": {
                                                    "pos": 453,
                                                    "end": 475,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 10,
                                                    "text": "snt-accordion-group",
                                                    "id": 15461
                                                },
                                                "symbol": {
                                                    "flags": 4,
                                                    "escapedName": "TAG_NAME",
                                                    "declarations": [undefined],
                                                    "valueDeclaration": undefined,
                                                    "parent": undefined,
                                                    "id": 11794
                                                }
                                            }, {
                                                "pos": 476,
                                                "end": 523,
                                                "flags": 0,
                                                "modifierFlagsCache": 536870920,
                                                "transformFlags": 541067265,
                                                "parent": undefined,
                                                "kind": 159,
                                                "decorators": [{
                                                        "pos": 476,
                                                        "end": 492,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536872961,
                                                        "parent": undefined,
                                                        "kind": 157,
                                                        "expression": {
                                                            "pos": 483,
                                                            "end": 492,
                                                            "flags": 16384,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 196,
                                                            "expression": {
                                                                "pos": 483,
                                                                "end": 490,
                                                                "flags": 16384,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870912,
                                                                "parent": undefined,
                                                                "kind": 75,
                                                                "escapedText": "Element",
                                                                "flowNode": undefined,
                                                                "id": 15464
                                                            },
                                                            "questionDotToken": undefined,
                                                            "arguments": [],
                                                            "id": 15463
                                                        },
                                                        "id": 15462
                                                    }],
                                                "modifiers": [{
                                                        "pos": 492,
                                                        "end": 500,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 117
                                                    }],
                                                "name": {
                                                    "pos": 500,
                                                    "end": 508,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 75,
                                                    "escapedText": "element",
                                                    "flowNode": undefined
                                                },
                                                "questionToken": undefined,
                                                "exclamationToken": {
                                                    "pos": 508,
                                                    "end": 509,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 53
                                                },
                                                "type": {
                                                    "pos": 510,
                                                    "end": 522,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870913,
                                                    "parent": undefined,
                                                    "kind": 169,
                                                    "typeName": {
                                                        "pos": 510,
                                                        "end": 522,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 75,
                                                        "escapedText": "HTMLElement",
                                                        "flowNode": undefined
                                                    },
                                                    "id": 15465
                                                },
                                                "initializer": undefined,
                                                "symbol": {
                                                    "flags": 4,
                                                    "escapedName": "element",
                                                    "declarations": [undefined],
                                                    "valueDeclaration": undefined,
                                                    "parent": undefined,
                                                    "id": 11795,
                                                    "isReferenced": 67108863
                                                }
                                            }, {
                                                "pos": 523,
                                                "end": 564,
                                                "flags": 0,
                                                "modifierFlagsCache": 536870912,
                                                "transformFlags": 541067265,
                                                "parent": undefined,
                                                "kind": 159,
                                                "decorators": [{
                                                        "pos": 523,
                                                        "end": 534,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536872961,
                                                        "parent": undefined,
                                                        "kind": 157,
                                                        "expression": {
                                                            "pos": 528,
                                                            "end": 534,
                                                            "flags": 16384,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 196,
                                                            "expression": {
                                                                "pos": 528,
                                                                "end": 532,
                                                                "flags": 16384,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870912,
                                                                "parent": undefined,
                                                                "kind": 75,
                                                                "escapedText": "Prop",
                                                                "flowNode": {
                                                                    "flags": 2
                                                                },
                                                                "id": 15468
                                                            },
                                                            "questionDotToken": undefined,
                                                            "arguments": [],
                                                            "id": 15467
                                                        },
                                                        "id": 15466
                                                    }],
                                                "modifiers": undefined,
                                                "name": {
                                                    "pos": 534,
                                                    "end": 546,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 75,
                                                    "escapedText": "multiExpand",
                                                    "flowNode": undefined
                                                },
                                                "questionToken": undefined,
                                                "type": {
                                                    "pos": 547,
                                                    "end": 555,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870913,
                                                    "parent": undefined,
                                                    "kind": 128
                                                },
                                                "initializer": {
                                                    "pos": 557,
                                                    "end": 563,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 91,
                                                    "id": 15469
                                                },
                                                "symbol": {
                                                    "flags": 4,
                                                    "escapedName": "multiExpand",
                                                    "declarations": [undefined],
                                                    "valueDeclaration": undefined,
                                                    "parent": undefined,
                                                    "id": 11796,
                                                    "tags": [],
                                                    "documentationComment": []
                                                },
                                                "jsDocCache": []
                                            }, undefined, undefined, undefined, undefined, undefined, undefined, {
                                                "pos": 1996,
                                                "end": 2295,
                                                "flags": 256,
                                                "modifierFlagsCache": 536870920,
                                                "transformFlags": 537989377,
                                                "parent": undefined,
                                                "kind": 161,
                                                "decorators": undefined,
                                                "modifiers": [{
                                                        "pos": 1996,
                                                        "end": 2009,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 117
                                                    }],
                                                "name": {
                                                    "pos": 2009,
                                                    "end": 2025,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 75,
                                                    "escapedText": "collapseSibling",
                                                    "flowNode": {
                                                        "flags": 2050
                                                    }
                                                },
                                                "questionToken": undefined,
                                                "asteriskToken": undefined,
                                                "typeParameters": undefined,
                                                "parameters": [{
                                                        "pos": 2026,
                                                        "end": 2060,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 536870912,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 156,
                                                        "decorators": undefined,
                                                        "modifiers": undefined,
                                                        "dotDotDotToken": undefined,
                                                        "name": {
                                                            "pos": 2026,
                                                            "end": 2031,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 75,
                                                            "escapedText": "event",
                                                            "flowNode": undefined
                                                        },
                                                        "questionToken": undefined,
                                                        "type": {
                                                            "pos": 2032,
                                                            "end": 2060,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870913,
                                                            "parent": undefined,
                                                            "kind": 169,
                                                            "typeName": {
                                                                "pos": 2032,
                                                                "end": 2044,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870912,
                                                                "parent": undefined,
                                                                "kind": 75,
                                                                "escapedText": "CustomEvent",
                                                                "flowNode": undefined
                                                            },
                                                            "typeArguments": [{
                                                                    "pos": 2045,
                                                                    "end": 2059,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870913,
                                                                    "parent": undefined,
                                                                    "kind": 169,
                                                                    "typeName": {
                                                                        "pos": 2045,
                                                                        "end": 2059,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "AccordionEvent",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "id": 15572
                                                                }],
                                                            "id": 15571
                                                        },
                                                        "initializer": undefined,
                                                        "symbol": {
                                                            "flags": 1,
                                                            "escapedName": "event",
                                                            "declarations": [undefined],
                                                            "exports": {},
                                                            "valueDeclaration": undefined,
                                                            "parent": undefined,
                                                            "id": 11826,
                                                            "isReferenced": 1160127
                                                        }
                                                    }],
                                                "body": {
                                                    "pos": 2061,
                                                    "end": 2295,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 537989377,
                                                    "parent": undefined,
                                                    "kind": 223,
                                                    "multiLine": true,
                                                    "statements": [{
                                                            "pos": 2063,
                                                            "end": 2158,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 536870912,
                                                            "transformFlags": 537989376,
                                                            "parent": undefined,
                                                            "kind": 225,
                                                            "declarationList": {
                                                                "pos": 2063,
                                                                "end": 2157,
                                                                "flags": 1,
                                                                "modifierFlagsCache": 536870912,
                                                                "transformFlags": 538120448,
                                                                "parent": undefined,
                                                                "kind": 243,
                                                                "declarations": [{
                                                                        "pos": 2072,
                                                                        "end": 2157,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 536870912,
                                                                        "transformFlags": 537006336,
                                                                        "parent": undefined,
                                                                        "kind": 242,
                                                                        "name": {
                                                                            "pos": 2072,
                                                                            "end": 2081,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870912,
                                                                            "parent": undefined,
                                                                            "kind": 75,
                                                                            "escapedText": "children",
                                                                            "flowNode": undefined
                                                                        },
                                                                        "type": undefined,
                                                                        "initializer": {
                                                                            "pos": 2083,
                                                                            "end": 2157,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536875264,
                                                                            "parent": undefined,
                                                                            "kind": 196,
                                                                            "expression": {
                                                                                "pos": 2083,
                                                                                "end": 2113,
                                                                                "flags": 0,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536875008,
                                                                                "parent": undefined,
                                                                                "kind": 194,
                                                                                "expression": {
                                                                                    "pos": 2083,
                                                                                    "end": 2096,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536875008,
                                                                                    "parent": undefined,
                                                                                    "kind": 194,
                                                                                    "expression": {
                                                                                        "pos": 2083,
                                                                                        "end": 2088,
                                                                                        "flags": 0,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536875008,
                                                                                        "parent": undefined,
                                                                                        "kind": 104,
                                                                                        "flowNode": undefined,
                                                                                        "id": 15576
                                                                                    },
                                                                                    "questionDotToken": undefined,
                                                                                    "name": {
                                                                                        "pos": 2089,
                                                                                        "end": 2096,
                                                                                        "flags": 0,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536870912,
                                                                                        "parent": undefined,
                                                                                        "kind": 75,
                                                                                        "escapedText": "element",
                                                                                        "flowNode": undefined
                                                                                    },
                                                                                    "flowNode": undefined,
                                                                                    "id": 15577
                                                                                },
                                                                                "questionDotToken": undefined,
                                                                                "name": {
                                                                                    "pos": 2097,
                                                                                    "end": 2113,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536870912,
                                                                                    "parent": undefined,
                                                                                    "kind": 75,
                                                                                    "escapedText": "querySelectorAll",
                                                                                    "flowNode": undefined
                                                                                },
                                                                                "flowNode": undefined,
                                                                                "id": 15578
                                                                            },
                                                                            "questionDotToken": undefined,
                                                                            "arguments": [{
                                                                                    "pos": 2114,
                                                                                    "end": 2156,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536871168,
                                                                                    "parent": undefined,
                                                                                    "kind": 211,
                                                                                    "head": {
                                                                                        "pos": 2114,
                                                                                        "end": 2117,
                                                                                        "flags": 0,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536871168,
                                                                                        "parent": undefined,
                                                                                        "kind": 15,
                                                                                        "text": "",
                                                                                        "rawText": "",
                                                                                        "templateFlags": 0
                                                                                    },
                                                                                    "templateSpans": [{
                                                                                            "pos": 2117,
                                                                                            "end": 2156,
                                                                                            "flags": 0,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536871168,
                                                                                            "parent": undefined,
                                                                                            "kind": 221,
                                                                                            "expression": {
                                                                                                "pos": 2117,
                                                                                                "end": 2144,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536870912,
                                                                                                "parent": undefined,
                                                                                                "kind": 194,
                                                                                                "expression": {
                                                                                                    "pos": 2117,
                                                                                                    "end": 2135,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 75,
                                                                                                    "escapedText": "AccordionComponent",
                                                                                                    "flowNode": undefined,
                                                                                                    "id": 15580
                                                                                                },
                                                                                                "questionDotToken": undefined,
                                                                                                "name": {
                                                                                                    "pos": 2136,
                                                                                                    "end": 2144,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 75,
                                                                                                    "escapedText": "TAG_NAME",
                                                                                                    "flowNode": undefined
                                                                                                },
                                                                                                "flowNode": undefined,
                                                                                                "id": 15581
                                                                                            },
                                                                                            "literal": {
                                                                                                "pos": 2144,
                                                                                                "end": 2156,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536871168,
                                                                                                "parent": undefined,
                                                                                                "kind": 17,
                                                                                                "text": "[expanded]",
                                                                                                "rawText": "[expanded]",
                                                                                                "templateFlags": 0
                                                                                            }
                                                                                        }],
                                                                                    "contextualType": undefined,
                                                                                    "inferenceContext": undefined
                                                                                }],
                                                                            "id": 15579
                                                                        },
                                                                        "symbol": {
                                                                            "flags": 2,
                                                                            "escapedName": "children",
                                                                            "declarations": [undefined],
                                                                            "exports": {},
                                                                            "valueDeclaration": undefined,
                                                                            "parent": undefined,
                                                                            "isReferenced": 1160127,
                                                                            "id": 11827
                                                                        }
                                                                    }]
                                                            },
                                                            "flowNode": undefined
                                                        }, {
                                                            "pos": 2158,
                                                            "end": 2290,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536871169,
                                                            "parent": undefined,
                                                            "kind": 226,
                                                            "expression": {
                                                                "pos": 2158,
                                                                "end": 2289,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536871169,
                                                                "parent": undefined,
                                                                "kind": 196,
                                                                "expression": {
                                                                    "pos": 2158,
                                                                    "end": 2180,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 194,
                                                                    "expression": {
                                                                        "pos": 2158,
                                                                        "end": 2172,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "children",
                                                                        "flowNode": {
                                                                            "flags": 2064,
                                                                            "antecedent": undefined,
                                                                            "node": undefined
                                                                        },
                                                                        "id": 15575
                                                                    },
                                                                    "questionDotToken": undefined,
                                                                    "name": {
                                                                        "pos": 2173,
                                                                        "end": 2180,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "forEach",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "flowNode": undefined,
                                                                    "id": 15582
                                                                },
                                                                "questionDotToken": undefined,
                                                                "arguments": [{
                                                                        "pos": 2181,
                                                                        "end": 2288,
                                                                        "flags": 256,
                                                                        "modifierFlagsCache": 536870912,
                                                                        "transformFlags": 536871169,
                                                                        "parent": undefined,
                                                                        "kind": 202,
                                                                        "modifiers": undefined,
                                                                        "typeParameters": undefined,
                                                                        "parameters": [{
                                                                                "pos": 2182,
                                                                                "end": 2192,
                                                                                "flags": 0,
                                                                                "modifierFlagsCache": 536870912,
                                                                                "transformFlags": 536870913,
                                                                                "parent": undefined,
                                                                                "kind": 156,
                                                                                "decorators": undefined,
                                                                                "modifiers": undefined,
                                                                                "dotDotDotToken": undefined,
                                                                                "name": {
                                                                                    "pos": 2182,
                                                                                    "end": 2187,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536870912,
                                                                                    "parent": undefined,
                                                                                    "kind": 75,
                                                                                    "escapedText": "child",
                                                                                    "flowNode": {
                                                                                        "flags": 6146,
                                                                                        "node": undefined,
                                                                                        "id": 82
                                                                                    }
                                                                                },
                                                                                "questionToken": undefined,
                                                                                "type": {
                                                                                    "pos": 2188,
                                                                                    "end": 2192,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536870913,
                                                                                    "parent": undefined,
                                                                                    "kind": 125
                                                                                },
                                                                                "initializer": undefined,
                                                                                "symbol": {
                                                                                    "flags": 1,
                                                                                    "escapedName": "child",
                                                                                    "declarations": [undefined],
                                                                                    "exports": {},
                                                                                    "valueDeclaration": undefined,
                                                                                    "parent": undefined,
                                                                                    "id": 11829,
                                                                                    "isReferenced": 1160127
                                                                                }
                                                                            }],
                                                                        "equalsGreaterThanToken": {
                                                                            "pos": 2193,
                                                                            "end": 2196,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870912,
                                                                            "parent": undefined,
                                                                            "kind": 38
                                                                        },
                                                                        "body": {
                                                                            "pos": 2196,
                                                                            "end": 2288,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870912,
                                                                            "parent": undefined,
                                                                            "kind": 223,
                                                                            "multiLine": true,
                                                                            "statements": [{
                                                                                    "pos": 2198,
                                                                                    "end": 2281,
                                                                                    "flags": 0,
                                                                                    "modifierFlagsCache": 0,
                                                                                    "transformFlags": 536870912,
                                                                                    "parent": undefined,
                                                                                    "kind": 227,
                                                                                    "expression": {
                                                                                        "pos": 2210,
                                                                                        "end": 2231,
                                                                                        "flags": 0,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536870912,
                                                                                        "parent": undefined,
                                                                                        "kind": 209,
                                                                                        "left": {
                                                                                            "pos": 2210,
                                                                                            "end": 2215,
                                                                                            "flags": 0,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 75,
                                                                                            "escapedText": "child",
                                                                                            "flowNode": undefined,
                                                                                            "id": 15601
                                                                                        },
                                                                                        "operatorToken": {
                                                                                            "pos": 2215,
                                                                                            "end": 2218,
                                                                                            "flags": 0,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 35
                                                                                        },
                                                                                        "right": {
                                                                                            "pos": 2218,
                                                                                            "end": 2231,
                                                                                            "flags": 0,
                                                                                            "modifierFlagsCache": 0,
                                                                                            "transformFlags": 536870912,
                                                                                            "parent": undefined,
                                                                                            "kind": 194,
                                                                                            "expression": {
                                                                                                "pos": 2218,
                                                                                                "end": 2224,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536870912,
                                                                                                "parent": undefined,
                                                                                                "kind": 75,
                                                                                                "escapedText": "event",
                                                                                                "flowNode": undefined,
                                                                                                "id": 15602
                                                                                            },
                                                                                            "questionDotToken": undefined,
                                                                                            "name": {
                                                                                                "pos": 2225,
                                                                                                "end": 2231,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536870912,
                                                                                                "parent": undefined,
                                                                                                "kind": 75,
                                                                                                "escapedText": "target",
                                                                                                "flowNode": undefined
                                                                                            },
                                                                                            "flowNode": undefined,
                                                                                            "id": 15603
                                                                                        }
                                                                                    },
                                                                                    "thenStatement": {
                                                                                        "pos": 2232,
                                                                                        "end": 2281,
                                                                                        "flags": 0,
                                                                                        "modifierFlagsCache": 0,
                                                                                        "transformFlags": 536870912,
                                                                                        "parent": undefined,
                                                                                        "kind": 223,
                                                                                        "multiLine": true,
                                                                                        "statements": [{
                                                                                                "pos": 2234,
                                                                                                "end": 2272,
                                                                                                "flags": 0,
                                                                                                "modifierFlagsCache": 0,
                                                                                                "transformFlags": 536870912,
                                                                                                "parent": undefined,
                                                                                                "kind": 226,
                                                                                                "expression": {
                                                                                                    "pos": 2234,
                                                                                                    "end": 2271,
                                                                                                    "flags": 0,
                                                                                                    "modifierFlagsCache": 0,
                                                                                                    "transformFlags": 536870912,
                                                                                                    "parent": undefined,
                                                                                                    "kind": 196,
                                                                                                    "expression": {
                                                                                                        "pos": 2234,
                                                                                                        "end": 2265,
                                                                                                        "flags": 0,
                                                                                                        "modifierFlagsCache": 0,
                                                                                                        "transformFlags": 536870912,
                                                                                                        "parent": undefined,
                                                                                                        "kind": 194,
                                                                                                        "expression": {
                                                                                                            "pos": 2234,
                                                                                                            "end": 2260,
                                                                                                            "flags": 0,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536870912,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 196,
                                                                                                            "expression": {
                                                                                                                "pos": 2234,
                                                                                                                "end": 2258,
                                                                                                                "flags": 0,
                                                                                                                "modifierFlagsCache": 0,
                                                                                                                "transformFlags": 536870912,
                                                                                                                "parent": undefined,
                                                                                                                "kind": 194,
                                                                                                                "expression": {
                                                                                                                    "pos": 2234,
                                                                                                                    "end": 2249,
                                                                                                                    "flags": 0,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "child",
                                                                                                                    "flowNode": {
                                                                                                                        "flags": 6176,
                                                                                                                        "antecedent": undefined,
                                                                                                                        "node": undefined,
                                                                                                                        "id": 81
                                                                                                                    },
                                                                                                                    "id": 15608
                                                                                                                },
                                                                                                                "questionDotToken": undefined,
                                                                                                                "name": {
                                                                                                                    "pos": 2250,
                                                                                                                    "end": 2258,
                                                                                                                    "flags": 0,
                                                                                                                    "modifierFlagsCache": 0,
                                                                                                                    "transformFlags": 536870912,
                                                                                                                    "parent": undefined,
                                                                                                                    "kind": 75,
                                                                                                                    "escapedText": "collapse",
                                                                                                                    "flowNode": undefined
                                                                                                                },
                                                                                                                "flowNode": undefined
                                                                                                            },
                                                                                                            "questionDotToken": undefined,
                                                                                                            "arguments": [],
                                                                                                            "id": 15607
                                                                                                        },
                                                                                                        "questionDotToken": undefined,
                                                                                                        "name": {
                                                                                                            "pos": 2261,
                                                                                                            "end": 2265,
                                                                                                            "flags": 0,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536870912,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 75,
                                                                                                            "escapedText": "then",
                                                                                                            "flowNode": undefined
                                                                                                        }
                                                                                                    },
                                                                                                    "questionDotToken": undefined,
                                                                                                    "arguments": [{
                                                                                                            "pos": 2266,
                                                                                                            "end": 2270,
                                                                                                            "flags": 0,
                                                                                                            "modifierFlagsCache": 0,
                                                                                                            "transformFlags": 536870912,
                                                                                                            "parent": undefined,
                                                                                                            "kind": 100
                                                                                                        }],
                                                                                                    "id": 15606
                                                                                                },
                                                                                                "flowNode": undefined
                                                                                            }],
                                                                                        "locals": undefined
                                                                                    },
                                                                                    "elseStatement": undefined,
                                                                                    "flowNode": undefined
                                                                                }]
                                                                        },
                                                                        "flowNode": undefined,
                                                                        "symbol": {
                                                                            "flags": 16,
                                                                            "escapedName": "__function",
                                                                            "declarations": [undefined],
                                                                            "valueDeclaration": undefined,
                                                                            "id": 11828
                                                                        },
                                                                        "locals": {},
                                                                        "endFlowNode": {
                                                                            "flags": 4,
                                                                            "antecedents": [undefined, {
                                                                                    "flags": 6208,
                                                                                    "antecedent": undefined,
                                                                                    "node": undefined
                                                                                }]
                                                                        },
                                                                        "contextualType": undefined,
                                                                        "inferenceContext": undefined,
                                                                        "id": 15583
                                                                    }],
                                                                "id": 15574
                                                            },
                                                            "flowNode": undefined
                                                        }]
                                                },
                                                "symbol": {
                                                    "flags": 8192,
                                                    "escapedName": "collapseSibling",
                                                    "declarations": [undefined],
                                                    "valueDeclaration": undefined,
                                                    "parent": undefined,
                                                    "id": 11793,
                                                    "isReferenced": 67108863
                                                },
                                                "locals": {},
                                                "nextContainer": undefined,
                                                "endFlowNode": {
                                                    "flags": 512,
                                                    "antecedent": undefined,
                                                    "node": undefined
                                                },
                                                "id": 15570
                                            }],
                                        "symbol": undefined,
                                        "localSymbol": {
                                            "flags": 1048576,
                                            "escapedName": "AccordionGroupComponent",
                                            "declarations": [undefined],
                                            "parent": undefined,
                                            "exportSymbol": undefined
                                        },
                                        "nextContainer": undefined,
                                        "id": 15460
                                    },
                                    "kind": 161,
                                    "decorators": [undefined],
                                    "modifiers": undefined,
                                    "name": {
                                        "pos": 1781,
                                        "end": 1801,
                                        "flags": 0,
                                        "modifierFlagsCache": 0,
                                        "transformFlags": 536870912,
                                        "parent": undefined,
                                        "kind": 75,
                                        "escapedText": "onAccordionEvent",
                                        "flowNode": {
                                            "flags": 6146,
                                            "id": 78
                                        }
                                    },
                                    "questionToken": undefined,
                                    "asteriskToken": undefined,
                                    "typeParameters": undefined,
                                    "parameters": [{
                                            "pos": 1802,
                                            "end": 1836,
                                            "flags": 0,
                                            "modifierFlagsCache": 536870912,
                                            "transformFlags": 536870913,
                                            "parent": undefined,
                                            "kind": 156,
                                            "decorators": undefined,
                                            "modifiers": undefined,
                                            "dotDotDotToken": undefined,
                                            "name": {
                                                "pos": 1802,
                                                "end": 1807,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536870912,
                                                "parent": undefined,
                                                "kind": 75,
                                                "escapedText": "event",
                                                "flowNode": undefined
                                            },
                                            "questionToken": undefined,
                                            "type": {
                                                "pos": 1808,
                                                "end": 1836,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536870913,
                                                "parent": undefined,
                                                "kind": 169,
                                                "typeName": {
                                                    "pos": 1808,
                                                    "end": 1820,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536870912,
                                                    "parent": undefined,
                                                    "kind": 75,
                                                    "escapedText": "CustomEvent",
                                                    "flowNode": undefined
                                                },
                                                "typeArguments": [{
                                                        "pos": 1821,
                                                        "end": 1835,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 169,
                                                        "typeName": {
                                                            "pos": 1821,
                                                            "end": 1835,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870912,
                                                            "parent": undefined,
                                                            "kind": 75,
                                                            "escapedText": "AccordionEvent",
                                                            "flowNode": undefined
                                                        },
                                                        "id": 15553
                                                    }],
                                                "id": 15554
                                            },
                                            "initializer": undefined,
                                            "symbol": {
                                                "flags": 1,
                                                "escapedName": "event",
                                                "declarations": [undefined],
                                                "exports": {},
                                                "valueDeclaration": undefined,
                                                "parent": undefined,
                                                "id": 11823,
                                                "isReferenced": 1160127
                                            }
                                        }],
                                    "body": {
                                        "pos": 1837,
                                        "end": 1996,
                                        "flags": 0,
                                        "modifierFlagsCache": 0,
                                        "transformFlags": 536875009,
                                        "parent": undefined,
                                        "kind": 223,
                                        "multiLine": true,
                                        "statements": [{
                                                "pos": 1839,
                                                "end": 1991,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 536875009,
                                                "parent": undefined,
                                                "kind": 227,
                                                "expression": {
                                                    "pos": 1849,
                                                    "end": 1945,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536875009,
                                                    "parent": undefined,
                                                    "kind": 209,
                                                    "left": {
                                                        "pos": 1849,
                                                        "end": 1920,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870913,
                                                        "parent": undefined,
                                                        "kind": 200,
                                                        "expression": {
                                                            "pos": 1850,
                                                            "end": 1919,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536870913,
                                                            "parent": undefined,
                                                            "kind": 209,
                                                            "left": {
                                                                "pos": 1850,
                                                                "end": 1888,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870913,
                                                                "parent": undefined,
                                                                "kind": 194,
                                                                "expression": {
                                                                    "pos": 1850,
                                                                    "end": 1882,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870913,
                                                                    "parent": undefined,
                                                                    "kind": 200,
                                                                    "expression": {
                                                                        "pos": 1851,
                                                                        "end": 1881,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870913,
                                                                        "parent": undefined,
                                                                        "kind": 217,
                                                                        "expression": {
                                                                            "pos": 1851,
                                                                            "end": 1863,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870912,
                                                                            "parent": undefined,
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "pos": 1851,
                                                                                "end": 1856,
                                                                                "flags": 0,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536870912,
                                                                                "parent": undefined,
                                                                                "kind": 75,
                                                                                "escapedText": "event",
                                                                                "flowNode": undefined,
                                                                                "id": 15555
                                                                            },
                                                                            "questionDotToken": undefined,
                                                                            "name": {
                                                                                "pos": 1857,
                                                                                "end": 1863,
                                                                                "flags": 0,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536870912,
                                                                                "parent": undefined,
                                                                                "kind": 75,
                                                                                "escapedText": "detail",
                                                                                "flowNode": undefined
                                                                            },
                                                                            "flowNode": undefined,
                                                                            "id": 15557
                                                                        },
                                                                        "type": {
                                                                            "pos": 1866,
                                                                            "end": 1881,
                                                                            "flags": 0,
                                                                            "modifierFlagsCache": 0,
                                                                            "transformFlags": 536870913,
                                                                            "parent": undefined,
                                                                            "kind": 169,
                                                                            "typeName": {
                                                                                "pos": 1866,
                                                                                "end": 1881,
                                                                                "flags": 0,
                                                                                "modifierFlagsCache": 0,
                                                                                "transformFlags": 536870912,
                                                                                "parent": undefined,
                                                                                "kind": 75,
                                                                                "escapedText": "AccordionEvent",
                                                                                "flowNode": undefined
                                                                            },
                                                                            "id": 15559
                                                                        }
                                                                    },
                                                                    "id": 15560
                                                                },
                                                                "questionDotToken": undefined,
                                                                "name": {
                                                                    "pos": 1883,
                                                                    "end": 1888,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 75,
                                                                    "escapedText": "state",
                                                                    "flowNode": undefined
                                                                },
                                                                "id": 15561
                                                            },
                                                            "operatorToken": {
                                                                "pos": 1888,
                                                                "end": 1891,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870912,
                                                                "parent": undefined,
                                                                "kind": 34
                                                            },
                                                            "right": {
                                                                "pos": 1891,
                                                                "end": 1919,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536870912,
                                                                "parent": undefined,
                                                                "kind": 194,
                                                                "expression": {
                                                                    "pos": 1891,
                                                                    "end": 1910,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 75,
                                                                    "escapedText": "AccordionStateEnum",
                                                                    "flowNode": undefined,
                                                                    "id": 15562
                                                                },
                                                                "questionDotToken": undefined,
                                                                "name": {
                                                                    "pos": 1911,
                                                                    "end": 1919,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536870912,
                                                                    "parent": undefined,
                                                                    "kind": 75,
                                                                    "escapedText": "EXPANDED",
                                                                    "flowNode": undefined
                                                                },
                                                                "flowNode": undefined,
                                                                "id": 15563
                                                            }
                                                        }
                                                    },
                                                    "operatorToken": {
                                                        "pos": 1920,
                                                        "end": 1923,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536870912,
                                                        "parent": undefined,
                                                        "kind": 55
                                                    },
                                                    "right": {
                                                        "pos": 1923,
                                                        "end": 1945,
                                                        "flags": 0,
                                                        "modifierFlagsCache": 0,
                                                        "transformFlags": 536875008,
                                                        "parent": undefined,
                                                        "kind": 200,
                                                        "expression": {
                                                            "pos": 1925,
                                                            "end": 1944,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536875008,
                                                            "parent": undefined,
                                                            "kind": 207,
                                                            "operator": 53,
                                                            "operand": {
                                                                "pos": 1926,
                                                                "end": 1944,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536875008,
                                                                "parent": undefined,
                                                                "kind": 200,
                                                                "expression": {
                                                                    "pos": 1927,
                                                                    "end": 1943,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536875008,
                                                                    "parent": undefined,
                                                                    "kind": 194,
                                                                    "expression": {
                                                                        "pos": 1927,
                                                                        "end": 1931,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536875008,
                                                                        "parent": undefined,
                                                                        "kind": 104,
                                                                        "flowNode": {
                                                                            "flags": 6176,
                                                                            "antecedent": undefined,
                                                                            "node": undefined,
                                                                            "id": 80
                                                                        },
                                                                        "id": 15565
                                                                    },
                                                                    "questionDotToken": undefined,
                                                                    "name": {
                                                                        "pos": 1932,
                                                                        "end": 1943,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "multiExpand",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "flowNode": undefined,
                                                                    "id": 15566
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "thenStatement": {
                                                    "pos": 1946,
                                                    "end": 1991,
                                                    "flags": 0,
                                                    "modifierFlagsCache": 0,
                                                    "transformFlags": 536875008,
                                                    "parent": undefined,
                                                    "kind": 223,
                                                    "multiLine": true,
                                                    "statements": [{
                                                            "pos": 1948,
                                                            "end": 1984,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 536875008,
                                                            "parent": undefined,
                                                            "kind": 226,
                                                            "expression": {
                                                                "pos": 1948,
                                                                "end": 1983,
                                                                "flags": 0,
                                                                "modifierFlagsCache": 0,
                                                                "transformFlags": 536875008,
                                                                "parent": undefined,
                                                                "kind": 196,
                                                                "expression": {
                                                                    "pos": 1948,
                                                                    "end": 1976,
                                                                    "flags": 0,
                                                                    "modifierFlagsCache": 0,
                                                                    "transformFlags": 536875008,
                                                                    "parent": undefined,
                                                                    "kind": 194,
                                                                    "expression": {
                                                                        "pos": 1948,
                                                                        "end": 1960,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536875008,
                                                                        "parent": undefined,
                                                                        "kind": 104,
                                                                        "flowNode": {
                                                                            "flags": 6176,
                                                                            "antecedent": undefined,
                                                                            "node": undefined,
                                                                            "id": 79
                                                                        },
                                                                        "id": 15568
                                                                    },
                                                                    "questionDotToken": undefined,
                                                                    "name": {
                                                                        "pos": 1961,
                                                                        "end": 1976,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "collapseSibling",
                                                                        "flowNode": undefined
                                                                    },
                                                                    "flowNode": undefined,
                                                                    "id": 15569
                                                                },
                                                                "questionDotToken": undefined,
                                                                "arguments": [{
                                                                        "pos": 1977,
                                                                        "end": 1982,
                                                                        "flags": 0,
                                                                        "modifierFlagsCache": 0,
                                                                        "transformFlags": 536870912,
                                                                        "parent": undefined,
                                                                        "kind": 75,
                                                                        "escapedText": "event",
                                                                        "flowNode": undefined,
                                                                        "contextualType": undefined,
                                                                        "inferenceContext": undefined,
                                                                        "id": 15573
                                                                    }],
                                                                "id": 15567
                                                            },
                                                            "flowNode": undefined
                                                        }],
                                                    "locals": undefined
                                                },
                                                "elseStatement": undefined,
                                                "flowNode": undefined
                                            }]
                                    },
                                    "symbol": {
                                        "flags": 8192,
                                        "escapedName": "onAccordionEvent",
                                        "declarations": [undefined],
                                        "valueDeclaration": undefined,
                                        "parent": undefined,
                                        "id": 11792
                                    },
                                    "locals": {},
                                    "nextContainer": undefined,
                                    "endFlowNode": {
                                        "flags": 4,
                                        "antecedents": [{
                                                "flags": 2560,
                                                "antecedent": undefined,
                                                "node": undefined
                                            }, {
                                                "flags": 2052,
                                                "antecedents": [{
                                                        "flags": 2112,
                                                        "antecedent": undefined,
                                                        "node": undefined
                                                    }, {
                                                        "flags": 2112,
                                                        "antecedent": undefined,
                                                        "node": undefined
                                                    }]
                                            }]
                                    },
                                    "id": 15564
                                },
                                "kind": 157,
                                "expression": undefined,
                                "id": 15549
                            },
                            "kind": 196,
                            "expression": {
                                "pos": 1731,
                                "end": 1737,
                                "flags": 16384,
                                "modifierFlagsCache": 0,
                                "transformFlags": 536870912,
                                "parent": undefined,
                                "kind": 75,
                                "escapedText": "Listen",
                                "flowNode": undefined,
                                "id": 15551
                            },
                            "questionDotToken": undefined,
                            "arguments": [{
                                    "pos": 1738,
                                    "end": 1754,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 536870912,
                                    "parent": undefined,
                                    "kind": 10,
                                    "text": "accordionEvent",
                                    "contextualType": undefined,
                                    "inferenceContext": undefined
                                }, undefined],
                            "id": 15550
                        },
                        "kind": 193,
                        "properties": [undefined],
                        "symbol": {
                            "flags": 4096,
                            "escapedName": "__object",
                            "declarations": [undefined],
                            "members": {},
                            "valueDeclaration": undefined
                        },
                        "nextContainer": undefined,
                        "contextualType": undefined,
                        "inferenceContext": undefined,
                        "jsDocCache": []
                    },
                    "kind": 281,
                    "decorators": undefined,
                    "modifiers": undefined,
                    "name": {
                        "pos": 1757,
                        "end": 1764,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 536870912,
                        "parent": undefined,
                        "kind": 75,
                        "escapedText": "target",
                        "flowNode": undefined
                    },
                    "questionToken": undefined,
                    "exclamationToken": undefined,
                    "initializer": undefined,
                    "symbol": {
                        "flags": 4,
                        "escapedName": "target",
                        "declarations": [undefined],
                        "valueDeclaration": undefined,
                        "parent": undefined
                    }
                },
                "kind": 194,
                "expression": {
                    "pos": 1765,
                    "end": 1770,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 536875008,
                    "parent": undefined,
                    "kind": 104,
                    "flowNode": undefined,
                    "id": 15552
                },
                "questionDotToken": undefined,
                "name": {
                    "pos": 1771,
                    "end": 1778,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 536870912,
                    "parent": undefined,
                    "kind": 75,
                    "escapedText": "element",
                    "flowNode": undefined
                },
                "flowNode": undefined
            },
            "capture": false,
            "passive": false
        }]; }
}
AccordionGroupComponent.TAG_NAME = "snt-accordion-group";
