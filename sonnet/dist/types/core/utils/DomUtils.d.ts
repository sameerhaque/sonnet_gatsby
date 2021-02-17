export declare enum PaddingDirectionEnum {
    PADDING_TOP = "padding-top",
    PADDING_BOTTOM = "padding-bottom",
    PADDING_RIGHT = "padding-right",
    PADDING_LEFT = "padding-left"
}
export declare enum ScrollDirectionEnum {
    HORIZONTAL = "x",
    VERTICAL = "y"
}
export declare class DomUtils {
    static getScrollbarSize(scrollDirection: ScrollDirectionEnum): number;
    static setScrollbarPaddingReplacement(scrollbarPaddingReplacement: boolean, scrollDirection: ScrollDirectionEnum): void;
    static hasValidStringAttribute(element: HTMLElement, attributeName: string): boolean;
    static attachHandler(element: HTMLElement, eventName: string, fn: any): void;
}
