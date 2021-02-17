var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { DeviceUtils } from '../../../core/utils/DeviceUtils';
import { LanguageUtils } from '../../../core/utils/LanguageUtils';
export class ReferAFriend {
    constructor(formComponent, formModal, successModal, errorModal) {
        this.formComponent = formComponent;
        this.formModal = formModal;
        this.successModal = successModal;
        this.errorModal = errorModal;
    }
    ;
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ReferAFriend();
        return this.instance;
    }
    listen() {
        document.addEventListener("formSubmit", (event) => __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined(ReferAFriend.FORM_TAG);
            const targetForm = event.target;
            if (!(targetForm && targetForm.hasAttribute(ReferAFriend.FORM_IDENTIFIER)))
                return;
            this.formComponent = this.formComponent || targetForm;
            this.formModal = this.formModal || targetForm.closest(ReferAFriend.MODAL_TAG);
            const formData = yield event.target.getData();
            const RafData = {
                gRecaptchaResponse: formData.content.recaptcha,
                firstName: formData.content.firstName,
                lastName: formData.content.lastName,
                emailAddress: formData.content.email,
                refFirstName: formData.content.referFirstName,
                refLastName: formData.content.referLastName,
                refEmailAddress: formData.content.referEmail,
                languageCode: LanguageUtils.isEnglish() ? 'en_CA' : 'fr_CA',
                leadSource: 'Referral',
                hasOptedOutOfEmail: 'true',
                hasRefOptedOutOfEmail: 'true',
                deviceType: DeviceUtils.getDeviceType(),
                operatingSystem: DeviceUtils.getOperatingSystem()
            };
            axios.post('/api/vtl/contact', RafData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                if (response.data.sfResponse &&
                    response.data.sfResponse.response &&
                    response.data.sfResponse.response.toLowerCase().includes("success")) {
                    this.showSuccessModal();
                }
                else {
                    this.showErrorModal(`SF request failed: ${response.data.sfResponse}`);
                }
            }, (reason) => __awaiter(this, void 0, void 0, function* () {
                this.showErrorModal(reason.message);
            }));
        }));
        document.addEventListener("modalEvent", evt => {
            if (!('detail' in evt)) {
                throw new Error('not a custom event');
            }
            const modalEvent = evt;
            if (this.formModal && modalEvent.target.id === this.formModal.id + ReferAFriend.ERROR_MODAL_SUFFIX) {
                if (modalEvent.detail.eventType === "modal-hide") {
                    //Show form modal
                    if (this.formModal) {
                        this.formModal.show();
                    }
                }
            }
        });
        document.addEventListener("sntButtonClick", (evt) => __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined(ReferAFriend.MODAL_TAG);
            if (this.formComponent) {
                this.errorModal = this.errorModal || document.getElementById(this.formModal.id + ReferAFriend.ERROR_MODAL_SUFFIX);
                this.successModal = this.successModal || document.getElementById(this.formModal.id + ReferAFriend.SUCCESS_MODAL_SUFFIX);
                if (this.errorModal && this.errorModal.contains(evt.target)) {
                    this.errorModalGoBackAction();
                }
                if (this.successModal && this.successModal.contains(evt.target)) {
                    this.successModalGoBackAction();
                }
            }
        }));
    }
    errorModalGoBackAction() {
        //Hide error modal
        this.errorModal = this.errorModal || document.getElementById(this.formModal.id + ReferAFriend.ERROR_MODAL_SUFFIX);
        if (this.errorModal) {
            this.successModal.hide();
        }
    }
    successModalGoBackAction() {
        //Hide error modal
        this.successModal = this.successModal || document.getElementById(this.formModal.id + ReferAFriend.SUCCESS_MODAL_SUFFIX);
        if (this.successModal) {
            this.successModal.hide();
        }
    }
    showErrorModal(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.formComponent)
                return;
            yield customElements.whenDefined(ReferAFriend.FORM_TAG);
            yield customElements.whenDefined(ReferAFriend.MODAL_TAG);
            const formModalLangJson = JSON.parse(this.formModal.getAttribute("language-string"));
            const closeText = formModalLangJson["close"] ? formModalLangJson["close"] : "Close";
            const actionData = JSON.parse(`{\"errorModalUrl\":\"modals/refer-a-friend-error-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
            console.error('Error', reason); //TO-DO Add error to error log
            yield this.formModal.hide();
            yield this.formComponent.openErrorModal(actionData, this.formModal.id + ReferAFriend.ERROR_MODAL_SUFFIX);
        });
    }
    showSuccessModal() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.formComponent)
                return;
            yield customElements.whenDefined(ReferAFriend.FORM_TAG);
            yield customElements.whenDefined(ReferAFriend.MODAL_TAG);
            const formModalLangJson = JSON.parse(this.formModal.getAttribute("language-string"));
            const closeText = formModalLangJson["close"] ? formModalLangJson["close"] : "Close";
            const actionData = JSON.parse(`{\"successModalUrl\":\"modals/refer-a-friend-success-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
            yield this.formComponent.reset();
            yield this.formModal.hide();
            yield this.formComponent.openSuccessModal(actionData, this.formModal.id + ReferAFriend.SUCCESS_MODAL_SUFFIX);
        });
    }
}
ReferAFriend.FORM_TAG = 'snt-form';
ReferAFriend.MODAL_TAG = 'snt-modal';
ReferAFriend.FORM_IDENTIFIER = 'data-refer-a-friend';
ReferAFriend.SUCCESS_MODAL_SUFFIX = '-success-modal';
ReferAFriend.ERROR_MODAL_SUFFIX = '-error-modal';
ReferAFriend.getInstance().listen();
