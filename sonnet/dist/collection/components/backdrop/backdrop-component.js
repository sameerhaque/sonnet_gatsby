import { Component, Event, h, Host, Listen, Prop } from "@stencil/core";
import { EventUtils } from "../../core/utils/EventUtils";
export class BackdropComponent {
    constructor() {
        this.lastClick = -10000;
        /**
         * If `true`, the backdrop can be clicked and will emit `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdroo will stop propagation on tap
         */
        this.stopPropagation = true;
    }
    onTouchStart(evt) {
        this.lastClick = EventUtils.now(evt);
        this.emitTap(evt);
    }
    onMouseDown(evt) {
        if (this.lastClick < EventUtils.now(evt) - 2500) {
            this.emitTap(evt);
        }
    }
    emitTap(evt) {
        if (this.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        if (this.tappable) {
            this.sntBackdropTap.emit(evt);
        }
    }
    render() {
        return (h(Host, { tabindex: "-1" }));
    }
    static get is() { return "snt-backdrop"; }
    static get originalStyleUrls() { return {
        "$": ["backdrop-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["backdrop-component.css"]
    }; }
    static get properties() { return {
        "tappable": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Boolean",
                "resolved": "Boolean",
                "references": {
                    "Boolean": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the backdrop can be clicked and will emit `ionBackdropTap` event."
            },
            "defaultValue": "true"
        },
        "stopPropagation": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Boolean",
                "resolved": "Boolean",
                "references": {
                    "Boolean": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the backdroo will stop propagation on tap"
            },
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "sntBackdropTap",
            "name": "sntBackdropTap",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the backdrop is tapped"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get listeners() { return [{
            "name": "touchstart",
            "method": "onTouchStart",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "click",
            "method": "onMouseDown",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "mousedown",
            "method": "onMouseDown",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
BackdropComponent.TAG_NAME = "snt-backdrop";
