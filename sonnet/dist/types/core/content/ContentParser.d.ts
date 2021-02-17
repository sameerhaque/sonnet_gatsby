import { ContentData } from "./domain/ContentData";
import { ContentBuilder } from "./builder/ContentBuilder";
export declare class ContentParser {
    static parse(value: ContentData): ContentBuilder<any>;
}
