export declare class ThreeColumnComponent {
    hostElement: HTMLElement;
    styleClasses: string;
    private leftColumn;
    private centerColumn;
    private rightColumn;
    private layoutEl;
    static readonly TAG_NAME: string;
    onResize(event: CustomEvent): void;
    componentDidLoad(): void;
    registerChildren(column: HTMLElement): void;
    render(): any;
}
