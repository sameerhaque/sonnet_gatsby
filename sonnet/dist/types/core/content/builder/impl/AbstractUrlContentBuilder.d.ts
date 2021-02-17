import { AbstractContentBuilder } from "./AbstractContentBuilder";
export declare abstract class AbstractUrlContentBuilder<T> extends AbstractContentBuilder<T> {
    url: URL;
    protected abstract parse(value: string): T;
    withUrl(url: URL): AbstractUrlContentBuilder<T>;
    build(): Promise<T>;
}
