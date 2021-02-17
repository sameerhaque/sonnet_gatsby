import { ViewportAttributes } from "../decorators/domain/ViewportAttributes";
export declare class ViewportAttributesBuilder {
    protected includes: Map<string, string>;
    protected excludes: Set<string>;
    private constructor();
    static newInstance(): ViewportAttributesBuilder;
    with(name: string, value: string): ViewportAttributesBuilder;
    remove(name: string): ViewportAttributesBuilder;
    build(): ViewportAttributes;
}
