import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
export class AbstractResizeObserver {
    observe(element, callback) {
        const ResizeObserver = (window[AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME]) || ResizeObserverPolyfill;
        const observer = new ResizeObserver(callback);
        observer.observe(element, { box: 'border-box' });
    }
    unobserve(observer) {
        if ((window[AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME]) && (typeof observer)) {
            observer.disconnect();
        }
    }
}
AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME = "ResizeObserver";
