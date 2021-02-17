export declare class AccessibilityUtils {
    private static NEW_WINDOW_TITLE_EN;
    private static NEW_WINDOW_TITLE_FR;
    private static NEW_WINDOW_TEXT_EN;
    private static NEW_WINDOW_TEXT_FR;
    static isAccessibilityLinkRequired(element: HTMLElement, href: string, target: string): boolean;
    static generateNewWindow(): string;
    static getNewWindowTitle(): string;
    static getNewWindowText(): string;
}
