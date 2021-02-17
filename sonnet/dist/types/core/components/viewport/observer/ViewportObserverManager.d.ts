import { AbstractResizeObserver } from "../../../resize/observer/AbstractResizeObserver";
export declare class ViewportObserverManager extends AbstractResizeObserver {
    private constructor();
    static getInstance(): ViewportObserverManager;
    observerDoesNotExist(element: HTMLElement): void;
}
