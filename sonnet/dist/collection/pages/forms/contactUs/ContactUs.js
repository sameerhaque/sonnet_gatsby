var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { DeviceUtils } from "../../../core/utils/DeviceUtils";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
export class ContactUs {
    constructor() { }
    static getInstance() {
        if (!ContactUs.instance) {
            ContactUs.instance = new ContactUs();
        }
        return ContactUs.instance;
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-form");
            document.addEventListener("formSubmit", (event) => __awaiter(this, void 0, void 0, function* () {
                const formData = yield event.target.getData();
                const contactData = {
                    gRecaptchaResponse: formData.content.recaptcha,
                    firstName: formData.content.firstName,
                    lastName: formData.content.lastName,
                    emailAddress: formData.content.email,
                    languageCode: LanguageUtils.isEnglish() ? "en_CA" : "fr_CA",
                    interestedIn: formData.content.interested,
                    leadSource: "Case (Contact Us)",
                    hasOptedOutOfEmail: 'true',
                    caseType: formData.content.subject,
                    caseDescription: formData.content.message,
                    deviceType: DeviceUtils.getDeviceType(),
                    operatingSystem: DeviceUtils.getOperatingSystem(),
                };
                axios
                    .post("/api/vtl/contact", contactData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(this.onSuccess.bind(this), this.onFailure.bind(this));
            }));
        });
    }
    onSuccess(response) {
        if (response.data.sfResponse &&
            response.data.sfResponse.response &&
            response.data.sfResponse.response.toLowerCase().includes("success")) {
            window.location.href = LanguageUtils.isFrench() ? ContactUs.FR_URL : ContactUs.EN_URL;
        }
        else {
            this.showErrorModal(`SF request failed: ${response.data.sfResponse}`);
        }
    }
    onFailure(error) {
        this.showErrorModal(`SF request failed: ${error.message}`);
    }
    showErrorModal(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            //open error modal
            const FORM_TAG = "snt-form";
            const ERROR_MODAL_ID = "error-modal";
            yield customElements.whenDefined(FORM_TAG);
            var formComponent = document.querySelector(FORM_TAG);
            yield customElements.whenDefined("snt-modal");
            const closeText = formComponent.getAttribute("data-close") || "Close";
            const actionData = JSON.parse(`{\"errorModalUrl\":\"modals/contact-us-login-error-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
            console.log(reason); //TO-DO Add error to error log
            yield formComponent.openErrorModal(actionData, ERROR_MODAL_ID);
        });
    }
}
ContactUs.EN_URL = "/contact-us/email-success";
ContactUs.FR_URL = "/pour-nous-joindre/courriel-succes";
const contactUs = ContactUs.getInstance();
contactUs.listen();
