import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { M as ModalComponent, a as ModalOptions } from './modal-component-6e35cfd6.js';
import { H as HtmlContentBuilder } from './HtmlContentBuilder-f513c9f5.js';
var ModalBuilder = /** @class */ (function () {
    function ModalBuilder() {
    }
    ModalBuilder.newInstance = function () {
        return new ModalBuilder();
    };
    ModalBuilder.prototype.withTitle = function (title) {
        this.modalTitle = title;
        return this;
    };
    ModalBuilder.prototype.withId = function (id) {
        this.id = id;
        return this;
    };
    ModalBuilder.prototype.withLanguageString = function (languageString) {
        this.languageString = languageString;
        return this;
    };
    ModalBuilder.prototype.withOptions = function (options) {
        this.options = options;
        return this;
    };
    ModalBuilder.prototype.withContent = function (content) {
        this.content = content;
        return this;
    };
    ModalBuilder.prototype.withFooter = function (footer) {
        this.footer = footer;
        return this;
    };
    ModalBuilder.prototype.withStyleClasses = function (styleClasses) {
        this.styleClasses = styleClasses;
        return this;
    };
    ModalBuilder.prototype.build = function () {
        var component = document.createElement(ModalComponent.TAG_NAME);
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
        WebUtils.appendElement(component, this.content, true);
        WebUtils.appendElement(component, this.footer, false);
        return component;
    };
    return ModalBuilder;
}());
var ModalOptionsBuilder = /** @class */ (function () {
    function ModalOptionsBuilder() {
        this.modalOptions = new ModalOptions();
    }
    ModalOptionsBuilder.newInstance = function () {
        return new ModalOptionsBuilder();
    };
    ModalOptionsBuilder.prototype.withKeyboardClose = function (value) {
        this.modalOptions.keyboardClose = value;
        return this;
    };
    ModalOptionsBuilder.prototype.withBackdropDismiss = function (value) {
        this.modalOptions.backdropDismiss = value;
        return this;
    };
    ModalOptionsBuilder.prototype.build = function () {
        return this.modalOptions;
    };
    return ModalOptionsBuilder;
}());
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.dismiss = function (event) {
        var dismiss = new CustomEvent('sntDismiss', { bubbles: true, detail: {} });
        event.target.dispatchEvent(dismiss);
    };
    Action.toggleSearch = function (event) {
        var close = new CustomEvent('toggleSearch', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    };
    Action.logAction = function (event, data) {
        var message = "Action initiated from " + event.target.tagName + " \n Data: " + JSON.stringify(data);
        window.alert(message);
    };
    Action.openGetQuoteModal = function (_event, actionData) {
        var languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        var getAQuoteUrl = actionData ? actionData['getAQuoteUrl'] || '/getAQuote' : '/getAQuote';
        var modal = document.querySelector(ModalComponent.TAG_NAME + "[id=\"gaq-modal\"]");
        if (!modal) {
            HtmlContentBuilder.newInstance()
                .withUrl(new URL(getAQuoteUrl, window.location.origin))
                .build().then(function (contentFromUrl) {
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
    };
    Action.openFormModal = function (event, actionData) {
        if (!actionData || StringUtils.isEmpty(actionData['formModalUrl'])) {
            throw new Error("Modal url must be a valid string.");
        }
        var languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        var getAQuoteUrl = actionData['formModalUrl'];
        var modalId = (event.target.getAttribute('button-id') || 'form') + '-modal';
        var modal = document.querySelector(ModalComponent.TAG_NAME + "[id=\"" + modalId + "\"]");
        if (!modal) {
            HtmlContentBuilder.newInstance()
                .withUrl(new URL(getAQuoteUrl, window.location.origin))
                .build().then(function (contentFromUrl) {
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
    };
    Action.openErrorModal = function (actionData, modalId) {
        this.openModal(actionData, modalId, 'errorModalUrl', 'error-modal');
    };
    Action.openSuccessModal = function (actionData, modalId) {
        this.openModal(actionData, modalId, 'successModalUrl', 'success-modal');
    };
    Action.openConnectOfferModal = function (actionData, modalId) {
        this.openModal(actionData, modalId, 'offerModalUrl', 'offer-modal');
    };
    Action.openModal = function (actionData, modalId, modalUrlKey, styleClasses) {
        if (!actionData || StringUtils.isEmpty(actionData[modalUrlKey])) {
            throw new Error("Modal url must be a valid string.");
        }
        var languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        var modalUrl = actionData[modalUrlKey];
        var modal = document.querySelector(ModalComponent.TAG_NAME + "[id=\"" + modalId + "\"]");
        if (!modal) {
            HtmlContentBuilder.newInstance()
                .withUrl(new URL(modalUrl, window.location.origin))
                .build().then(function (contentFromUrl) {
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
    };
    Action.close = function (event) {
        var close = new CustomEvent('close', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    };
    return Action;
}());
var SearchSuggestion = /** @class */ (function () {
    function SearchSuggestion(title, url) {
        if (title === void 0) { title = ""; }
        if (url === void 0) { url = ""; }
        this.title = title;
        this.url = url;
    }
    return SearchSuggestion;
}());
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.getResults = function (query) {
        return Search.result.filter(function (datum) {
            var substrRegex = new RegExp(query, 'i');
            var isMatch = (substrRegex.test(datum['title']));
            return isMatch === true;
        });
    };
    return Search;
}());
Search.result = [
    new SearchSuggestion("Auto Insurance", "/auto-insurance"),
    new SearchSuggestion("Home Insurance", "/home-insurance"),
    new SearchSuggestion("Tenant Insurance", "/tenant-insurance"),
    new SearchSuggestion("Landlord Insurance", "/landlord-insurance"),
    new SearchSuggestion("Claims", "/claims"),
    new SearchSuggestion("Blog", "/blog"),
    new SearchSuggestion("Sonnet Connect", "/sonnet-connect")
];
export { Action as A, Search as S };
