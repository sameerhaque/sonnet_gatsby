var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AbstractUrlContentBuilder } from "./AbstractUrlContentBuilder";
import { StringUtils } from "../../../utils/StringUtils";
export class HtmlContentBuilder extends AbstractUrlContentBuilder {
    constructor() {
        super();
    }
    static newInstance() {
        return new HtmlContentBuilder();
    }
    withValue(value) {
        this.value = value;
        this.url = null;
        return this;
    }
    withParent(parent) {
        this.parentElement = parent;
        this.value = null;
        return this;
    }
    parse(value) {
        if (window.document["documentMode"] === undefined) {
            let divElement = document.createElement("div");
            let template = document.createElement("template");
            template.innerHTML = value;
            divElement.appendChild(template.content);
            this.setJavascript(divElement);
            return document.body.appendChild(divElement);
        }
        else {
            let divElement = document.createElement("div");
            divElement.innerHTML = value;
            return divElement;
        }
    }
    build() {
        const _super = Object.create(null, {
            build: { get: () => super.build }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.parentElement =
                this.parentElement || document.createElement("div");
            if (StringUtils.isEmpty(this.value) && this.url) {
                this.parentElement.appendChild(yield _super.build.call(this));
            }
            else if (StringUtils.notEmpty(this.value)) {
                this.parentElement.appendChild(this.parse(this.value));
            }
            else {
                throw new Error("No HTML content has been defined using this builder.");
            }
            return this.parentElement;
        });
    }
    setJavascript(elm) {
        Array.from(elm.querySelectorAll("script")).forEach((oldScript) => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
}
