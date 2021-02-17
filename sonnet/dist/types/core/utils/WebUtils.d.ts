export declare class WebUtils {
    static getObjectReference(value: string, base: object): any;
    static sleep(duration: number): Promise<unknown>;
    static getTransitionDuration(element: HTMLElement): number;
    static isValidEscapeKey(event: KeyboardEvent): boolean;
    static appendElement(parent: HTMLElement, element?: HTMLElement, elementRequired?: boolean): void;
    static generateClasses(classes: string[], value: string): string;
    static getAbsoluteHeight(el: HTMLElement): number;
    static getObjectFromString(string: string): any;
    static getMediaQueryInstances(): {
        name: string;
        mediaQueryList: MediaQueryList;
    }[];
}
