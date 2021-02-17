export declare class NavComponent {
    static readonly TAG_NAME = "snt-nav";
    expander: string;
    separator: boolean;
    styleClasses: string;
    element: HTMLElement;
    handleNavItemEvent(event: CustomEvent): void;
    componentDidLoad(): void;
    private setActiveNavItem;
    private collapseSiblingSubnavs;
    render(): any;
}
