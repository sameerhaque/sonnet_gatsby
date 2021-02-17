export declare class NavbarComponent {
    static readonly TAG_NAME = "snt-navbar";
    element: HTMLElement;
    styleClasses: string;
    active: boolean;
    viewport: string;
    languageString: string;
    private navbarCollapse;
    private navbarToggle;
    listenNavbarTogglerEvent(_event: CustomEvent): void;
    toggleActive(active?: boolean): Promise<boolean>;
    watchActive(): void;
    componentDidLoad(): void;
    render(): any;
}
