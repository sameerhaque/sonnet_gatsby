'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

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
        index.registerInstance(this, hostRef);
        this.captchas = Array();
        this.siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    }
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 6; i++) {
                yield WebUtils.WebUtils.sleep(500);
                this.captchas = [
                    ...this.captchas,
                    index.h("div", null, index.h("h3", null, "Recaptcha ", i), index.h("snt-recaptcha", { sitekey: this.siteKey, language: "en", id: `grecaptcha-${i}` }))
                ];
            }
        });
    }
    render() {
        return (index.h("div", null, this.captchas));
    }
};
RecaptchaExample.TAG_NAME = "recaptcha-example";

exports.recaptcha_example = RecaptchaExample;
