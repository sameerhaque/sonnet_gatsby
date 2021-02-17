var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LanguageUtils } from '../../../core/utils/LanguageUtils';
import axios from "axios";
export class FaqIndex {
    constructor() { }
    static getInstance() {
        if (!FaqIndex.instance) {
            FaqIndex.instance = new FaqIndex();
        }
        return FaqIndex.instance;
    }
    listen() {
        document.addEventListener("sntSearchSubmitted", (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const keywords = evt.detail.keywords;
            let params = new URLSearchParams();
            params.append("es", keywords);
            if (LanguageUtils.isFrench()) {
                window.location.href = "/faq/resultats?" + params.toString();
            }
            else {
                window.location.href = "/FAQs/results?" + params.toString();
            }
        });
        window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
            const blockList = document.querySelector('snt-faq-block-list');
            yield customElements.whenDefined('snt-faq-block-list');
            axios.get(`/api/vtl/faqs/${blockList.getAttribute('data-content-id')}`).then((response) => {
                blockList.faqBlockList = response.data.categories;
            }, () => {
                console.error('Error retrieving faq list');
            });
        }));
    }
}
const faqIndex = FaqIndex.getInstance();
faqIndex.listen();
