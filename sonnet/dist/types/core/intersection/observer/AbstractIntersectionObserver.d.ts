import "intersection-observer";
export declare abstract class AbstractIntersectionObserver {
    private static readonly INTERSECTION_OBSERVER_IDENTIFIER_NAME;
    abstract onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
    abstract observerDoesNotExist(elem: HTMLElement): void;
    observe(element: HTMLElement): void;
    unobserve(observer: IntersectionObserver): void;
}
