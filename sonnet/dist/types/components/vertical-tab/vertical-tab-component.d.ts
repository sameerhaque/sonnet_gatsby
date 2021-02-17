export declare class SntVerticalTabs {
    tabs: any;
    panels: any;
    el: HTMLElement;
    selected: any;
    protected onSelectedChange(index: string): void;
    private activeTabClass;
    componentDidLoad(): void;
    componentDidUnload(): void;
    findFirstSelectedTab: () => any;
    selectTab: (idx?: any) => void;
    tabTitleClick: (e: any) => void;
    tabKeyDown: (e: any) => void;
    render(): any[];
}
