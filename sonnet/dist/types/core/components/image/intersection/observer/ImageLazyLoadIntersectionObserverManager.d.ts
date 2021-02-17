import { AbstractIntersectionObserver } from "../../../../intersection/observer/AbstractIntersectionObserver";
export declare class LazyLoadIntersectionObserverManager extends AbstractIntersectionObserver {
    private constructor();
    static getInstance(): AbstractIntersectionObserver;
    onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
    observerDoesNotExist(element: HTMLElement): void;
}
