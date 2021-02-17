import "intersection-observer";
export class AbstractIntersectionObserver {
    observe(element) {
        const observer = new IntersectionObserver(this.onIntersection, { rootMargin: '50px 0px', threshold: 0.2 });
        (window[AbstractIntersectionObserver.INTERSECTION_OBSERVER_IDENTIFIER_NAME]) ? observer.observe(element) : this.observerDoesNotExist(element);
    }
    unobserve(observer) {
        if ((window[AbstractIntersectionObserver.INTERSECTION_OBSERVER_IDENTIFIER_NAME]) && (typeof observer)) {
            observer.disconnect();
        }
    }
}
AbstractIntersectionObserver.INTERSECTION_OBSERVER_IDENTIFIER_NAME = "IntersectionObserver";
