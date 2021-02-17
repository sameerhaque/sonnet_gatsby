import { AbstractUrlContentBuilder } from "./AbstractUrlContentBuilder";
export declare class HtmlContentBuilder extends AbstractUrlContentBuilder<Node> {
    private value;
    private parentElement;
    private constructor();
    static newInstance(): HtmlContentBuilder;
    withValue(value: string): HtmlContentBuilder;
    withParent(parent: HTMLElement): HtmlContentBuilder;
    protected parse(value: string): Node;
    build(): Promise<HTMLElement>;
    private setJavascript;
}
