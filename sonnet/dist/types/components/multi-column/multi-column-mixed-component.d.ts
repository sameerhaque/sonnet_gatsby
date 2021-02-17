export declare class MultiColumnComponent {
    hostElement: HTMLElement;
    styleClasses: string;
    columnCount: string;
    private flexGrid;
    private layoutEl;
    private columnCountObj;
    static readonly TAG_NAME: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    registerChildren(): void;
    adjustLayout(): Promise<void>;
    private getViewport;
    toggleImages(viewport: string): void;
    tagLastRow(viewport: string): Promise<void>;
    setColumns(): Promise<void>;
    render(): any;
}
