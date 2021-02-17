import { AbstractUrlContentBuilder } from "./AbstractUrlContentBuilder";
export declare class JsonUrlContentBuilder extends AbstractUrlContentBuilder<any> {
    private value;
    private constructor();
    static newInstance(): JsonUrlContentBuilder;
    withValue(value: string): JsonUrlContentBuilder;
    build(): any;
    protected parse(value: string): any;
}
