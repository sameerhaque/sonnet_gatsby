import { AbstractResizeObserver } from "../../../resize/observer/AbstractResizeObserver";
export class ViewportObserverManager extends AbstractResizeObserver {
    constructor() { super(); }
    static getInstance() {
        return new ViewportObserverManager();
    }
    observerDoesNotExist(element) {
        console.log(element, "observer does not exist");
    }
}
