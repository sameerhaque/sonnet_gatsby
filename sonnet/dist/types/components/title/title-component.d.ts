export declare class TitleComponent {
    static readonly TAG_NAME = "snt-title";
    titleType: string;
    clampLines: number;
    truncationString: string;
    private titleElement;
    getContent(titleType: string): any;
    componentDidRender(): void;
    clampTitle(clampLines?: number): Promise<void>;
    setTitle(title: string): Promise<void>;
    render(): any[];
}
