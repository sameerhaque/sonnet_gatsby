export declare class SntBlogInfo {
    hostElement: HTMLElement;
    titleText: string;
    blogLink: string;
    publishedTime: string;
    timeToRead: string;
    accessibilityText: string;
    static readonly TAG_NAME = "snt-blog-info";
    private ariaTextJson;
    componentWillLoad(): void;
    render(): any;
}
