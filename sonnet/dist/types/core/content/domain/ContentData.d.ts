import { ContentTypeEnum } from "../builder/domain/ContentTypeEnum";
export declare class ContentData {
    readonly type: ContentTypeEnum;
    readonly lazy: boolean;
    readonly url?: URL;
    readonly content?: string;
    constructor(type: ContentTypeEnum, lazy?: boolean, url?: URL, content?: string);
}
