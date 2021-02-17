'use strict';

const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const modalComponent = require('./modal-component-249dc631.js');
const HtmlContentBuilder = require('./HtmlContentBuilder-f7b30367.js');

class ModalBuilder {
    constructor() {
    }
    static newInstance() {
        return new ModalBuilder();
    }
    withTitle(title) {
        this.modalTitle = title;
        return this;
    }
    withId(id) {
        this.id = id;
        return this;
    }
    withLanguageString(languageString) {
        this.languageString = languageString;
        return this;
    }
    withOptions(options) {
        this.options = options;
        return this;
    }
    withContent(content) {
        this.content = content;
        return this;
    }
    withFooter(footer) {
        this.footer = footer;
        return this;
    }
    withStyleClasses(styleClasses) {
        this.styleClasses = styleClasses;
        return this;
    }
    build() {
        const component = document.createElement(modalComponent.ModalComponent.TAG_NAME);
        if (this.id) {
            component.id = this.id;
        }
        if (this.modalTitle) {
            component.modalTitle = this.modalTitle;
        }
        if (this.languageString) {
            component.languageString = this.languageString;
        }
        if (this.options) {
            component.options = this.options;
        }
        if (this.styleClasses) {
            component.styleClasses = this.styleClasses;
        }
        WebUtils.WebUtils.appendElement(component, this.content, true);
        WebUtils.WebUtils.appendElement(component, this.footer, false);
        return component;
    }
}

class ModalOptionsBuilder {
    constructor() {
        this.modalOptions = new modalComponent.ModalOptions();
    }
    static newInstance() {
        return new ModalOptionsBuilder();
    }
    withKeyboardClose(value) {
        this.modalOptions.keyboardClose = value;
        return this;
    }
    withBackdropDismiss(value) {
        this.modalOptions.backdropDismiss = value;
        return this;
    }
    build() {
        return this.modalOptions;
    }
}

class Action {
    static dismiss(event) {
        const dismiss = new CustomEvent('sntDismiss', { bubbles: true, detail: {} });
        event.target.dispatchEvent(dismiss);
    }
    static toggleSearch(event) {
        const close = new CustomEvent('toggleSearch', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    }
    static logAction(event, data) {
        const message = `Action initiated from ${event.target.tagName} \n Data: ${JSON.stringify(data)}`;
        window.alert(message);
    }
    static openGetQuoteModal(_event, actionData) {
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const getAQuoteUrl = actionData ? actionData['getAQuoteUrl'] || '/getAQuote' : '/getAQuote';
        let modal = document.querySelector(`${modalComponent.ModalComponent.TAG_NAME}[id="gaq-modal"]`);
        if (!modal) {
            HtmlContentBuilder.HtmlContentBuilder.newInstance()
                .withUrl(new URL(getAQuoteUrl, window.location.origin))
                .build().then((contentFromUrl) => {
                modal = ModalBuilder.newInstance()
                    .withId("gaq-modal")
                    .withLanguageString(languageString)
                    .withOptions(ModalOptionsBuilder.newInstance()
                    .withBackdropDismiss(true)
                    .withKeyboardClose(true)
                    .build())
                    .withContent(contentFromUrl)
                    .build();
                if (modal) {
                    document.body.appendChild(modal);
                    modal.show();
                }
            });
        }
        else {
            modal.show();
        }
    }
    static openFormModal(event, actionData) {
        if (!actionData || StringUtils.StringUtils.isEmpty(actionData['formModalUrl'])) {
            throw new Error(`Modal url must be a valid string.`);
        }
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const getAQuoteUrl = actionData['formModalUrl'];
        const modalId = (event.target.getAttribute('button-id') || 'form') + '-modal';
        let modal = document.querySelector(`${modalComponent.ModalComponent.TAG_NAME}[id="${modalId}"]`);
        if (!modal) {
            HtmlContentBuilder.HtmlContentBuilder.newInstance()
                .withUrl(new URL(getAQuoteUrl, window.location.origin))
                .build().then((contentFromUrl) => {
                modal = ModalBuilder.newInstance()
                    .withId(modalId)
                    .withLanguageString(languageString)
                    .withOptions(ModalOptionsBuilder.newInstance()
                    .withBackdropDismiss(true)
                    .withKeyboardClose(true)
                    .build())
                    .withContent(contentFromUrl)
                    .withStyleClasses('form-modal')
                    .build();
                if (modal) {
                    document.body.appendChild(modal);
                    modal.show();
                }
            });
        }
        else {
            modal.show();
        }
    }
    static openErrorModal(actionData, modalId) {
        this.openModal(actionData, modalId, 'errorModalUrl', 'error-modal');
    }
    static openSuccessModal(actionData, modalId) {
        this.openModal(actionData, modalId, 'successModalUrl', 'success-modal');
    }
    static openConnectOfferModal(actionData, modalId) {
        this.openModal(actionData, modalId, 'offerModalUrl', 'offer-modal');
    }
    static openModal(actionData, modalId, modalUrlKey, styleClasses) {
        if (!actionData || StringUtils.StringUtils.isEmpty(actionData[modalUrlKey])) {
            throw new Error(`Modal url must be a valid string.`);
        }
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const modalUrl = actionData[modalUrlKey];
        let modal = document.querySelector(`${modalComponent.ModalComponent.TAG_NAME}[id="${modalId}"]`);
        if (!modal) {
            HtmlContentBuilder.HtmlContentBuilder.newInstance()
                .withUrl(new URL(modalUrl, window.location.origin))
                .build().then((contentFromUrl) => {
                modal = ModalBuilder.newInstance()
                    .withId(modalId)
                    .withLanguageString(languageString)
                    .withOptions(ModalOptionsBuilder.newInstance()
                    .withBackdropDismiss(true)
                    .withKeyboardClose(true)
                    .build())
                    .withContent(contentFromUrl)
                    .withStyleClasses(styleClasses)
                    .build();
                if (modal) {
                    document.body.appendChild(modal);
                    modal.show();
                }
            });
        }
        else {
            modal.show();
        }
    }
    static close(event) {
        const close = new CustomEvent('close', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    }
}

class SearchSuggestion {
    constructor(title = "", url = "") {
        this.title = title;
        this.url = url;
    }
}

class Search {
    static getResults(query) {
        return Search.result.filter((datum) => {
            const substrRegex = new RegExp(query, 'i');
            const isMatch = (substrRegex.test(datum['title']));
            return isMatch === true;
        });
    }
}
Search.result = [
    new SearchSuggestion("Auto Insurance", "/auto-insurance"),
    new SearchSuggestion("Home Insurance", "/home-insurance"),
    new SearchSuggestion("Tenant Insurance", "/tenant-insurance"),
    new SearchSuggestion("Landlord Insurance", "/landlord-insurance"),
    new SearchSuggestion("Claims", "/claims"),
    new SearchSuggestion("Blog", "/blog"),
    new SearchSuggestion("Sonnet Connect", "/sonnet-connect")
];

exports.Action = Action;
exports.Search = Search;
