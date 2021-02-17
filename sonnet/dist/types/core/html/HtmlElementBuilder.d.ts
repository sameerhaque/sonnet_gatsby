export declare class HtmlElementBuilder {
    private tag;
    private attributes;
    private innerText;
    private classList;
    private constructor();
    static newInstance(): HtmlElementBuilder;
    withTag(value: string): HtmlElementBuilder;
    withInnerText(value: string): HtmlElementBuilder;
    withAttribute(key: string, value: string): HtmlElementBuilder;
    withClass(value: string): HtmlElementBuilder;
    build(): HTMLElement;
    private applyInnerText;
    private applyAttributes;
    private applyClasses;
}
