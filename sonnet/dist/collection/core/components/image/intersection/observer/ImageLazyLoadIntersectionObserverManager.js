import { AbstractIntersectionObserver } from "../../../../intersection/observer/AbstractIntersectionObserver";
export class LazyLoadIntersectionObserverManager extends AbstractIntersectionObserver {
    constructor() { super(); }
    static getInstance() {
        return new LazyLoadIntersectionObserverManager();
    }
    onIntersection(entries, observer) {
        const currentImg = entries[0];
        if (currentImg.isIntersecting) {
            currentImg.target.querySelector('img').setAttribute('src', currentImg.target.getAttribute('data-src'));
            currentImg.target.querySelectorAll('source').forEach((sourceEl) => {
                sourceEl.setAttribute('srcSet', sourceEl.getAttribute('data-srcSet'));
            });
            super.unobserve(observer);
        }
    }
    observerDoesNotExist(element) {
        element.setAttribute('src', element.getAttribute('data-src'));
    }
}
