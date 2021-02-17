import { TemplateTypeEnum } from "./TemplateTypeEnum";
export declare class Template {
    readonly type: TemplateTypeEnum;
    readonly value: string;
    constructor(type: TemplateTypeEnum, value: string);
}
