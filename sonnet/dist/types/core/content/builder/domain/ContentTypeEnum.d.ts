export declare enum ContentTypeEnum {
    HTML = "html",
    JSON = "json",
    XML = "xml",
    TEXT = "text"
}
export declare namespace ContentTypeEnum {
    function exists(value: string): boolean;
    function findByValue(text: string): ContentTypeEnum;
}
