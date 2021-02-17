import { r as registerInstance, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const RecaptchaExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.captchas = Array();
        this.siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    }
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 6; i++) {
                yield WebUtils.sleep(500);
                this.captchas = [
                    ...this.captchas,
                    h("div", null, h("h3", null, "Recaptcha ", i), h("snt-recaptcha", { sitekey: this.siteKey, language: "en", id: `grecaptcha-${i}` }))
                ];
            }
        });
    }
    render() {
        return (h("div", null, this.captchas));
    }
};
RecaptchaExample.TAG_NAME = "recaptcha-example";

export { RecaptchaExample as recaptcha_example };
