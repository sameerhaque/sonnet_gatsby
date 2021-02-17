export declare class StringUtils {
    static readonly SPACE_SEPARATOR = " ";
    static readonly COMMA_SEPARATOR = ", ";
    static toCamelCase(value: string): string;
    static toDashCase(value: string): string;
    static hasValue(value?: any): boolean;
    static hasLength(value: any): boolean;
    static isEmpty(value?: any): boolean;
    static notEmpty(object: any): boolean;
    static isString(value: any): boolean;
    static empty(): string;
    static join(values: Set<string>, separator: string): string;
    private static tryIsString;
    private static isNullOrUndefined;
}
