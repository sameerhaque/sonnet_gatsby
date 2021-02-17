export declare class IconCopyComponent {
    el: HTMLElement;
    titleString: string;
    styleClasses: string;
    propertiesSrc?: string;
    properties?: string;
    resizeEl: HTMLElement;
    logoIsSet: boolean;
    linkHref: string;
    linkTitle: string;
    linkTarget: string;
    linkRel: string;
    linkActionReference: string;
    linkActionData: string;
    linkId: string;
    private icon;
    private logo;
    private image;
    private data;
    private context;
    private parentLayout;
    static readonly TAG_NAME: string;
    registerViewport(target: HTMLElement): Promise<void>;
    componentDidLoad(): void;
    private normalizeIconValues;
    private resize;
    render(): any;
}
