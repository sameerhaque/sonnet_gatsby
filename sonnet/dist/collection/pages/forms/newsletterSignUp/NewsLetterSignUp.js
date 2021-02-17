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
export class NewsLetterSignUpForm {
    constructor(formComponent, formModal, errorModal) {
        this.formComponent = formComponent;
        this.formModal = formModal;
        this.errorModal = errorModal;
    }
    ;
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new NewsLetterSignUpForm();
        return this.instance;
    }
    listen() {
        document.addEventListener("formSubmit", (event) => __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined(NewsLetterSignUpForm.FORM_TAG);
            const targetForm = event.target;
            if (!(targetForm && targetForm.hasAttribute(NewsLetterSignUpForm.FORM_IDENTIFIER)))
                return;
            this.formComponent = this.formComponent || targetForm;
            this.formModal = this.formModal || targetForm.closest(NewsLetterSignUpForm.MODAL_TAG);
            const formData = yield event.target.getData();
            const contactData = {
                gRecaptchaResponse: formData.content.recaptcha,
                firstName: formData.content.firstName,
                lastName: formData.content.lastName,
                emailAddress: formData.content.email,
                languageCode: LanguageUtils.isEnglish() ? 'en_CA' : 'fr_CA',
                hasOptedOutOfEmail: 'false',
                interestedIn: formData.content.interest,
                leadSource: 'Marketing Sign-Up',
                deviceType: DeviceUtils.getDeviceType(),
                operatingSystem: DeviceUtils.getOperatingSystem()
            };
            axios.post('/api/vtl/contact', contactData, {
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
            if (this.formModal && modalEvent.target.id === this.formModal.id + NewsLetterSignUpForm.ERROR_MODAL_SUFFIX) {
                if (modalEvent.detail.eventType === "modal-hide") {
                    //Show form modal
                    if (this.formModal) {
                        this.formModal.show();
                    }
                }
            }
        });
        document.addEventListener("sntButtonClick", (evt) => __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined(NewsLetterSignUpForm.MODAL_TAG);
            if (this.formComponent) {
                this.errorModal = this.errorModal || document.getElementById(this.formModal.id + NewsLetterSignUpForm.ERROR_MODAL_SUFFIX);
                if (this.errorModal && this.errorModal.contains(evt.target)) {
                    this.errorModalGoBackAction();
                }
            }
        }));
    }
    errorModalGoBackAction() {
        //Hide error modal
        this.errorModal = this.errorModal || document.getElementById(this.formModal.id + NewsLetterSignUpForm.ERROR_MODAL_SUFFIX);
        if (this.errorModal) {
            this.errorModal.hide();
        }
    }
    showErrorModal(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.formComponent)
                return;
            yield customElements.whenDefined(NewsLetterSignUpForm.FORM_TAG);
            yield customElements.whenDefined(NewsLetterSignUpForm.MODAL_TAG);
            const formModalLangJson = JSON.parse(this.formModal.getAttribute("language-string"));
            const closeText = formModalLangJson["close"] ? formModalLangJson["close"] : "Close";
            const actionData = JSON.parse(`{\"errorModalUrl\":\"modals/newsletter-error-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
            console.log('Error', reason); //TO-DO Add error to error log
            yield this.formModal.hide();
            yield this.formComponent.openErrorModal(actionData, this.formModal.id + NewsLetterSignUpForm.ERROR_MODAL_SUFFIX);
        });
    }
    showSuccessModal() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.formComponent)
                return;
            yield customElements.whenDefined(NewsLetterSignUpForm.FORM_TAG);
            yield customElements.whenDefined(NewsLetterSignUpForm.MODAL_TAG);
            const formModalLangJson = JSON.parse(this.formModal.getAttribute("language-string"));
            const closeText = formModalLangJson["close"] ? formModalLangJson["close"] : "Close";
            const actionData = JSON.parse(`{\"successModalUrl\":\"modals/newsletter-success-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
            yield this.formComponent.reset();
            yield this.formModal.hide();
            yield this.formComponent.openSuccessModal(actionData, this.formModal.id + NewsLetterSignUpForm.SUCCESS_MODAL_SUFFIX);
        });
    }
}
NewsLetterSignUpForm.FORM_TAG = 'snt-form';
NewsLetterSignUpForm.MODAL_TAG = 'snt-modal';
NewsLetterSignUpForm.FORM_IDENTIFIER = 'data-newsletter-sign-up';
NewsLetterSignUpForm.SUCCESS_MODAL_SUFFIX = '-success-modal';
NewsLetterSignUpForm.ERROR_MODAL_SUFFIX = '-error-modal';
NewsLetterSignUpForm.getInstance().listen();
