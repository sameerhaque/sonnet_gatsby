var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, h, Prop, Element, State } from '@stencil/core';
import axios from 'axios';
export class VideoComponent {
    componentWillLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.processOembed();
        });
    }
    processOembed() {
        return __awaiter(this, void 0, void 0, function* () {
            const fullOembedUrl = this.getFullOembedUrl(this.shareUrl, this.oembedUrl, this.playUrl);
            yield axios.get(fullOembedUrl).then((oembedResponse) => {
                const docFragment = this.getDocumentFragmentFromHtmlString(oembedResponse.data.html);
                const playerEmbed = this.getPlayerEmbed(docFragment);
                this.playerScript = this.getPlayerScript(docFragment);
                //Vidyard embed code that gets replaced with the iFrame                        
                this.playerEmbed = h("div", { class: "player-embed", innerHTML: playerEmbed.outerHTML });
            });
        });
    }
    componentDidLoad() {
        //Add Vidyard script that replaces embed code with iFrame
        if (document.querySelector(`script[src="${this.playerScript.src}"]`) == null) {
            document.body.appendChild(this.playerScript);
        }
    }
    getFullOembedUrl(shareUrl, oembedUrl, playUrl) {
        const uuid = shareUrl.match(/[^\/]+$/);
        const fullPlayUrl = playUrl + '/' + uuid;
        return `${oembedUrl}?url=${fullPlayUrl}&format=json`;
    }
    getDocumentFragmentFromHtmlString(htmlString) {
        const domParser = new DOMParser();
        return domParser.parseFromString(htmlString, 'text/html');
    }
    getPlayerScript(docFragment) {
        const playerScript = document.createElement("script");
        const unexecutablePlayerScrupt = docFragment.querySelector('script');
        playerScript.setAttribute("src", unexecutablePlayerScrupt.getAttribute('src'));
        playerScript.setAttribute("type", unexecutablePlayerScrupt.getAttribute('type'));
        playerScript.setAttribute("async", unexecutablePlayerScrupt.getAttribute('async'));
        playerScript.classList.add("player-script");
        return playerScript;
    }
    getPlayerEmbed(docFragment) {
        const playerEmbed = docFragment.querySelector('.vidyard-player-embed');
        playerEmbed.setAttribute('data-width', '');
        playerEmbed.setAttribute('data-height', '');
        return playerEmbed;
    }
    render() {
        return (h("snt-layout", null,
            h("div", { class: "intro" },
                h("h3", { class: "headline" }, this.headline),
                h("slot", { name: "description" })),
            this.playerEmbed,
            this.transcriptSummaryOpen && this.transcriptSummaryClose
                ? h("snt-accordion", { class: "transcript-accordion", id: `${this.element.id}-accordion` },
                    h("div", { slot: "summary" },
                        h("span", { class: "transcript-summary-open" }, this.transcriptSummaryOpen),
                        h("span", { class: "transcript-summary-close" }, this.transcriptSummaryClose)),
                    h("div", { slot: "details" },
                        h("slot", { name: "transcript-details" })))
                : null));
    }
    static get is() { return "snt-video"; }
    static get originalStyleUrls() { return {
        "$": ["video-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["video-component.css"]
    }; }
    static get properties() { return {
        "headline": {
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
            "attribute": "headline",
            "reflect": false
        },
        "shareUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "share-url",
            "reflect": false
        },
        "oembedUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "oembed-url",
            "reflect": false
        },
        "playUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "play-url",
            "reflect": false
        },
        "transcriptSummaryOpen": {
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
            "attribute": "transcript-summary-open",
            "reflect": false
        },
        "transcriptSummaryClose": {
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
            "attribute": "transcript-summary-close",
            "reflect": false
        }
    }; }
    static get states() { return {
        "playerEmbed": {}
    }; }
    static get elementRef() { return "element"; }
}
VideoComponent.TAG_NAME = "snt-video";
