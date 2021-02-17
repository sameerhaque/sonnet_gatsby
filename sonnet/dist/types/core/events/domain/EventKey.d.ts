import { EventFilterEnum } from "./EventFilterEnum";
export declare class EventKey {
    private key;
    private static VALUES;
    private constructor();
    getKey(): string;
    isMouseEvent(): boolean;
    isKeyboardEvent(): boolean;
    static find(value: EventFilterEnum): EventKey;
}
