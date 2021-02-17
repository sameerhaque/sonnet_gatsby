import { ModalOptions } from "../domain/ModalOptions";
export declare class ModalBuilder {
    private id;
    private modalTitle;
    private languageString;
    private options;
    private content;
    private footer;
    private styleClasses;
    private constructor();
    static newInstance(): ModalBuilder;
    withTitle(title: string): ModalBuilder;
    withId(id: string): ModalBuilder;
    withLanguageString(languageString: string): ModalBuilder;
    withOptions(options: ModalOptions): ModalBuilder;
    withContent(content: HTMLElement): ModalBuilder;
    withFooter(footer: HTMLElement): ModalBuilder;
    withStyleClasses(styleClasses: string): this;
    build(): HTMLSntModalElement;
}
