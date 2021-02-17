export declare enum EventTypeEnum {
    CLICK = "click",
    KEYDOWN = "keydown"
}
export declare namespace EventTypeEnum {
    function exists(value: string): boolean;
    function findByValue(text: string): EventTypeEnum;
}
