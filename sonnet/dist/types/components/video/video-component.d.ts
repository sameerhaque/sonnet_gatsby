export declare class VideoComponent {
    static readonly TAG_NAME = "snt-video";
    headline: string;
    shareUrl: string;
    oembedUrl: string;
    playUrl: string;
    transcriptSummaryOpen: string;
    transcriptSummaryClose: string;
    element: any;
    playerEmbed: any;
    private playerScript;
    componentWillLoad(): Promise<void>;
    processOembed(): Promise<void>;
    componentDidLoad(): void;
    getFullOembedUrl(shareUrl: string, oembedUrl: string, playUrl: string): string;
    getDocumentFragmentFromHtmlString(htmlString: any): Document;
    getPlayerScript(docFragment: Document): HTMLScriptElement;
    getPlayerEmbed(docFragment: Document): HTMLElement;
    render(): any;
}
