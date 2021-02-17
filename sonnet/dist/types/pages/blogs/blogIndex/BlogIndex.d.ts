export declare class BlogIndex {
    private static instance;
    private page;
    private category;
    private static readonly filterUrlParam;
    constructor();
    static getInstance(): BlogIndex;
    getPage(): number;
    initiate(): Promise<void>;
    initiateMoreArticleListener(): Promise<void>;
    initiateSliderListener(): Promise<void>;
    initiateUrlListener(): void;
    handlePageChange(): Promise<void>;
    updateFilterSlider(filterKey: string): Promise<void>;
    onMoreArticlesClick(): void;
    showComeBackButton(): void;
    showMoreArticlesButton(): void;
    buildBlog(blog: any): Promise<{
        imageSource: any;
        titleText: any;
        tagText: any;
        timeToRead: any;
        blogLink: any;
    }>;
    getSelectedCategory(): Promise<string>;
}
