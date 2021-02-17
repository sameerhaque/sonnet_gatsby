/// <reference types="resize-observer-browser" />
export declare abstract class AbstractResizeObserver {
    private static readonly RESIZE_OBSERVER_IDENTIFIER_NAME;
    observe(element: HTMLElement, callback: ResizeObserverCallback): void;
    unobserve(observer: ResizeObserver): void;
}
