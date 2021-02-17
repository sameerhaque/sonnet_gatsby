import { EventFilterEnum } from "./EventFilterEnum";
export class EventKey {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
    isMouseEvent() {
        return (this.key == null || false);
    }
    isKeyboardEvent() {
        return !(this.key == null || false);
    }
    static find(value) {
        return this.VALUES.get(value);
    }
}
EventKey.VALUES = new Map([
    [EventFilterEnum.ENTER, new EventKey("Enter")],
    [EventFilterEnum.SPACE, new EventKey(" ")],
    [EventFilterEnum.ESCAPE, new EventKey("Escape")],
    [EventFilterEnum.BACKSPACE, new EventKey("Backspace")],
    [EventFilterEnum.TAB, new EventKey("Tab")],
    [EventFilterEnum.ARROW_UP, new EventKey("ArrowUp")],
    [EventFilterEnum.ARROW_DOWN, new EventKey("ArrowDown")],
    [EventFilterEnum.ARROW_RIGHT, new EventKey("ArrowRight")],
    [EventFilterEnum.ARROW_LEFT, new EventKey("ArrowLeft")],
    [EventFilterEnum.HOME, new EventKey("Home")],
    [EventFilterEnum.END, new EventKey("End")],
    [EventFilterEnum.DELETE, new EventKey("Delete")],
    [EventFilterEnum.PAGE_UP, new EventKey("PageUp")],
    [EventFilterEnum.PAGE_DOWN, new EventKey("PageDown")]
]);
