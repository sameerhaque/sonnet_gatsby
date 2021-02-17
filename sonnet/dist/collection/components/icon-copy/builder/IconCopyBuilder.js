import { IconCopyComponent } from '../icon-copy-component';
export class IconCopyBuilder {
    constructor() {
    }
    static newInstance() {
        return new IconCopyComponent();
    }
    withTitle(value) {
        this.title = value;
        return this;
    }
    build() {
        let component;
        component = document.createElement(IconCopyComponent.TAG_NAME);
        component.titleString = this.title;
        return component;
    }
}
