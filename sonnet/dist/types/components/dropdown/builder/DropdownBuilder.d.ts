import { DropdownComponent } from "../dropdown-component";
export declare class DropdownBuilder {
    private itemConfiguration;
    private placeholderText;
    private labelText;
    private constructor();
    static newInstance(): DropdownBuilder;
    withPlaceholderText(value: any): this;
    withLabelText(value: any): this;
    withConfiguration(value: any): this;
    build(): DropdownComponent;
}
