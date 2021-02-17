import { HtmlContentBuilder } from "../../content/builder/impl/HtmlContentBuilder";
import { ModalBuilder } from "../../../components/modal/builder/ModalBuilder";
import { ModalOptionsBuilder } from "../../../components/modal/builder/ModalOptionsBuilder";
import { ModalComponent } from "../../../components/modal/modal-component";
import { StringUtils } from '../../utils/StringUtils';
export class Action {
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
        let modal = document.querySelector(`${ModalComponent.TAG_NAME}[id="gaq-modal"]`);
        if (!modal) {
            HtmlContentBuilder.newInstance()
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
        if (!actionData || StringUtils.isEmpty(actionData['formModalUrl'])) {
            throw new Error(`Modal url must be a valid string.`);
        }
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const getAQuoteUrl = actionData['formModalUrl'];
        const modalId = (event.target.getAttribute('button-id') || 'form') + '-modal';
        let modal = document.querySelector(`${ModalComponent.TAG_NAME}[id="${modalId}"]`);
        if (!modal) {
            HtmlContentBuilder.newInstance()
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
        if (!actionData || StringUtils.isEmpty(actionData[modalUrlKey])) {
            throw new Error(`Modal url must be a valid string.`);
        }
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const modalUrl = actionData[modalUrlKey];
        let modal = document.querySelector(`${ModalComponent.TAG_NAME}[id="${modalId}"]`);
        if (!modal) {
            HtmlContentBuilder.newInstance()
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
