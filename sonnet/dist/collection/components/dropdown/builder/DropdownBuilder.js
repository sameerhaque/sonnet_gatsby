import { DropdownComponent } from "../dropdown-component";
export class DropdownBuilder {
    constructor() {
    }
    static newInstance() {
        return new DropdownBuilder();
    }
    withPlaceholderText(value) {
        this.placeholderText = value;
        return this;
    }
    withLabelText(value) {
        this.labelText = value;
        return this;
    }
    withConfiguration(value) {
        this.itemConfiguration = value;
        return this;
    }
    build() {
        let component;
        component = document.createElement(DropdownComponent.TAG_NAME);
        component.itemConfiguration = this.itemConfiguration;
        component.labelText = this.labelText;
        component.placeholderText = this.placeholderText;
        return component;
    }
}
