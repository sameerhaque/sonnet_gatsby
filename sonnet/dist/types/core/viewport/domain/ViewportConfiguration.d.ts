import { ViewportParameter } from "../decorators/domain/ViewportParameter";
export declare class ViewportConfiguration {
    private parameters;
    addParameters(key: string, parameters: Array<ViewportParameter>): void;
    getParametersByKey(key: string): Array<ViewportParameter>;
    hasKey(key: string): boolean;
    hasStylesForKey(key: string): boolean;
    hasClassesForKey(key: string): boolean;
    hasAttributesForKey(key: string): boolean;
    getStyles(): void;
}
