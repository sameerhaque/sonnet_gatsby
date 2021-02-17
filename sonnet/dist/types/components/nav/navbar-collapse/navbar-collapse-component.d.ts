import { EventEmitter } from "../../../stencil-public-runtime";
export declare class NavbarCollapseComponent {
    static readonly TAG_NAME = "snt-navbar-collapse";
    element: HTMLElement;
    shown: boolean;
    viewport: string;
    logoUrl: string;
    navbarToggled: EventEmitter;
    private inDesktopMode;
    private elementToFocusOn;
    private lastActiveElement;
    toggleShown(shown?: boolean): Promise<boolean>;
    onShown(shown: boolean): void;
    onViewport(): void;
    componentWillRender(): void;
    componentDidUpdate(): void;
    render(): any;
}
