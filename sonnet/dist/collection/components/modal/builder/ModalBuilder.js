import { ModalComponent } from "../modal-component";
import { WebUtils } from "../../../core/utils/WebUtils";
export class ModalBuilder {
    constructor() {
    }
    static newInstance() {
        return new ModalBuilder();
    }
    withTitle(title) {
        this.modalTitle = title;
        return this;
    }
    withId(id) {
        this.id = id;
        return this;
    }
    withLanguageString(languageString) {
        this.languageString = languageString;
        return this;
    }
    withOptions(options) {
        this.options = options;
        return this;
    }
    withContent(content) {
        this.content = content;
        return this;
    }
    withFooter(footer) {
        this.footer = footer;
        return this;
    }
    withStyleClasses(styleClasses) {
        this.styleClasses = styleClasses;
        return this;
    }
    build() {
        const component = document.createElement(ModalComponent.TAG_NAME);
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
    }
}
