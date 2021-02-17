export declare class FAQBlockListComponent {
    static readonly TAG_NAME = "snt-faq-block-list";
    private multiColumnEl;
    host: HTMLElement;
    faqBlockList: {
        titleText: string;
        blockLink?: string;
        bodyText: string;
        articlesCount: string;
    }[];
    menuAriaLabel: string;
    componentDidRender(): Promise<void>;
    render(): any[];
}
