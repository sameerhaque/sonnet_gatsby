export declare class PaneComponent {
    element: HTMLElement;
    collapsed: boolean;
    animated: boolean;
    styleClasses: string;
    toggleCollapsed(collapsed?: boolean): Promise<boolean>;
    onCollapsed(collapsed: string): void;
    listenButtonEvent(_event: CustomEvent): void;
    render(): any;
}
