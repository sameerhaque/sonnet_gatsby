import { TitleCopyComponent } from '../title-copy-component';
export declare class TitleCopyBuilder {
    private title;
    private content;
    private constructor();
    static newInstance(): TitleCopyComponent;
    withTitle(value: any): TitleCopyBuilder;
    withContent(content: HTMLElement): TitleCopyBuilder;
    build(): TitleCopyComponent;
}
