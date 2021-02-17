import { ContentBuilder } from "../ContentBuilder";
export declare abstract class AbstractContentBuilder<T> implements ContentBuilder<T> {
    abstract build(): Promise<T>;
    withConditionalBooleanArgument(fn: Function, arg?: boolean): AbstractContentBuilder<T>;
    withConditionalObjectArgument(fn: Function, arg?: object): AbstractContentBuilder<T>;
    withConditionalStringArgument(fn: Function, arg?: string): AbstractContentBuilder<T>;
    withConditionalArguments(fn: Function, ...args: any[]): AbstractContentBuilder<T>;
}
