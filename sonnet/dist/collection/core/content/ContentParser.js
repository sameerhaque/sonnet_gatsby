import { ContentTypeEnum } from "./builder/domain/ContentTypeEnum";
import { HtmlContentBuilder } from "./builder/impl/HtmlContentBuilder";
import { JsonUrlContentBuilder } from "./builder/impl/JsonUrlContentBuilder";
export class ContentParser {
    static parse(value) {
        switch (value.type) {
            case ContentTypeEnum.HTML:
                let htmlBuilder = HtmlContentBuilder.newInstance();
                htmlBuilder.withConditionalStringArgument(htmlBuilder.withValue, value.content);
                htmlBuilder.withConditionalObjectArgument(htmlBuilder.withUrl, value.url);
                return htmlBuilder;
            case ContentTypeEnum.JSON:
                let jsonBuilder = JsonUrlContentBuilder.newInstance();
                jsonBuilder.withConditionalStringArgument(jsonBuilder.withValue, value.content);
                jsonBuilder.withConditionalObjectArgument(jsonBuilder.withUrl, value.url);
                return jsonBuilder;
            // case ContentTypeEnum.XML:
            // case ContentTypeEnum.TEXT:
            default:
                throw new Error(`Unable to locate content builder for type ${value.type}`);
        }
    }
}
