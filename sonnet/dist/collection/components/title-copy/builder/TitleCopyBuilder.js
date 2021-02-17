import { TitleCopyComponent } from '../title-copy-component';
import { WebUtils } from '../../../core/utils/WebUtils';
export class TitleCopyBuilder {
    constructor() {
    }
    static newInstance() {
        return new TitleCopyComponent();
    }
    withTitle(value) {
        this.title = value;
        return this;
    }
    withContent(content) {
        this.content = content;
        return this;
    }
    build() {
        let component;
        component = document.createElement(TitleCopyComponent.TAG_NAME);
        component.titleString = this.title;
        WebUtils.appendElement(component, this.content, true);
        return component;
    }
}
