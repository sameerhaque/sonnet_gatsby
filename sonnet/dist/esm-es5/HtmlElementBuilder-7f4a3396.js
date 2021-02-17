import { W as WebUtils } from './WebUtils-eeb89633.js';
import { A as AccordionComponent } from './accordion-component-e4a51c50.js';
var AccordionComponentBuilder = /** @class */ (function () {
    function AccordionComponentBuilder() {
    }
    AccordionComponentBuilder.newInstance = function () {
        return new AccordionComponentBuilder();
    };
    AccordionComponentBuilder.prototype.withSummary = function (summary) {
        this.summary = summary;
        return this;
    };
    AccordionComponentBuilder.prototype.withDetails = function (details) {
        this.details = details;
        return this;
    };
    AccordionComponentBuilder.prototype.build = function () {
        var component = document.createElement(AccordionComponent.TAG_NAME);
        // TODO: Determine if we want an API for adding details and summary
        WebUtils.appendElement(component, this.summary, false);
        WebUtils.appendElement(component, this.details, false);
        return component;
    };
    return AccordionComponentBuilder;
}());
var HtmlElementBuilder = /** @class */ (function () {
    function HtmlElementBuilder() {
    }
    HtmlElementBuilder.newInstance = function () {
        return new HtmlElementBuilder();
    };
    HtmlElementBuilder.prototype.withTag = function (value) {
        this.tag = value;
        return this;
    };
    HtmlElementBuilder.prototype.withInnerText = function (value) {
        this.innerText = value;
        return this;
    };
    HtmlElementBuilder.prototype.withAttribute = function (key, value) {
        this.attributes = this.attributes || new Map();
        this.attributes.set(key, value);
        return this;
    };
    HtmlElementBuilder.prototype.withClass = function (value) {
        this.classList = this.classList || new Set();
        this.classList.add(value);
        return this;
    };
    HtmlElementBuilder.prototype.build = function () {
        if (!(this.tag)) {
            throw new Error("HTML Element cannot be created without a valid tag.");
        }
        var element = document.createElement(this.tag);
        this.applyInnerText(element);
        this.applyAttributes(element);
        this.applyClasses(element);
        return element;
    };
    HtmlElementBuilder.prototype.applyInnerText = function (element) {
        if (this.innerText && this.innerText.length > 0) {
            element.innerText = this.innerText;
        }
    };
    HtmlElementBuilder.prototype.applyAttributes = function (element) {
        if (this.attributes && this.attributes.size > 0) {
            this.attributes.forEach(function (value, key) {
                element.setAttribute(key, value);
            });
        }
    };
    HtmlElementBuilder.prototype.applyClasses = function (element) {
        if (this.classList && this.classList.size > 0) {
            this.classList.forEach(function (value) {
                element.classList.add(value);
            });
        }
    };
    return HtmlElementBuilder;
}());
export { AccordionComponentBuilder as A, HtmlElementBuilder as H };
