import { EventEmitter } from "../../../stencil-public-runtime";
export declare class NavbarToggleComponent {
    static readonly TAG_NAME = "snt-navbar-toggle";
    element: HTMLElement;
    navbarToggled: EventEmitter;
    collapsed: boolean;
    ariaControls: string;
    languageString: string;
    private languageVariables;
    toggleCollapsed(collapsed?: boolean): Promise<boolean>;
    watchCollapsed(): void;
    componentWillLoad(): void;
    render(): any;
}
