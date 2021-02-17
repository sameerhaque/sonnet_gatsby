export declare class TwoColumnFeatureComponent {
    private context;
    private layoutEl;
    private dataEl;
    hostElement: HTMLElement;
    titleString: string;
    copyText: string;
    imagePath: string;
    imageAltText: string;
    imagePosition: string;
    primaryButtonText: string;
    primaryButtonAction: string;
    primaryButtonData: string;
    secondaryButtonText: string;
    secondaryButtonAction: string;
    secondaryButtonData: string;
    linkTitle: string;
    linkUrl: string;
    openLinkInNewWindow: boolean;
    properties?: string;
    static readonly TAG_NAME: string;
    private imageElement;
    componentDidLoad(): void;
    private viewportResize;
    render(): any[];
    buildActionButton(buttonText: string, buttonAction: string, buttonData: string, buttonClass: string): HTMLElement;
    buildLink(linkTitle: string, linkUrl: string, linkClass: string): HTMLElement;
}
