import { ViewportStyles } from "../decorators/domain/ViewportStyles";
export declare class ViewportStylesBuilder {
    protected includes: Map<string, string>;
    protected excludes: Set<string>;
    private constructor();
    static newInstance(): ViewportStylesBuilder;
    with(name: string, value: string): ViewportStylesBuilder;
    remove(name: string): ViewportStylesBuilder;
    build(): ViewportStyles;
}
