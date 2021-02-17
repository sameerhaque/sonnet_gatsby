export declare enum EventFilterEnum {
    ENTER = "enter",
    SPACE = "space",
    ESCAPE = "escape",
    BACKSPACE = "backspace",
    TAB = "tab",
    ARROW_UP = "arrow-up",
    ARROW_DOWN = "arrow-down",
    ARROW_RIGHT = "arrow-right",
    ARROW_LEFT = "arrow-left",
    HOME = "home",
    END = "end",
    DELETE = "delete",
    PAGE_UP = "page-up",
    PAGE_DOWN = "page-down",
    ASTERISK = "*"
}
export declare namespace EventFilterEnum {
    function exists(value: string): boolean;
    function findByValue(text: string): any;
}
