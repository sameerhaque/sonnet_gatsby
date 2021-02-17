export declare class AccordionComponent {
    static readonly TAG_NAME = "snt-accordion";
    private static readonly CARD_PANEL;
    private static readonly TRANSITIONING_CLASS_NAME;
    expanded: boolean;
    private accordionEvent;
    private element;
    isCollapsed(): Promise<boolean>;
    isExpanded(): Promise<boolean>;
    collapse(): Promise<void>;
    expand(): Promise<void>;
    toggle(): Promise<void>;
    /** TODO: Annotate this function **/
    private transition;
    expandedChanged(newValue: boolean): void;
    private getExpandIcon;
    render(): any;
}
