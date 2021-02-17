export declare enum NavItemTypeEnum {
    LINK = "link",
    SUBNAV = "subnav",
    ACTION_LINK = "action-link",
    CUSTOM = "custom"
}
export declare namespace NavItemTypeEnum {
    function exists(value: string): boolean;
    function findByValue(text: string): NavItemTypeEnum;
}
