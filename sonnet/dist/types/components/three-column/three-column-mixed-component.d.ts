export declare class ThreeColumnComponent {
    hostElement: HTMLElement;
    styleClasses: string;
    private flexGrid;
    private layoutEl;
    static readonly TAG_NAME: string;
    componentDidLoad(): void;
    registerChildren(): void;
    onResize(event: CustomEvent): void;
    toggleImages(viewport: string): void;
    tagLastRow(viewport: string): void;
    setStartAndEnd(viewport: string): void;
    render(): any;
}
