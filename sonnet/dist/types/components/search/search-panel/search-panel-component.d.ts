export declare class SearchPanelComponent {
    static readonly TAG_NAME = "snt-search-panel";
    private languageStrings;
    active: boolean;
    styleClasses: string;
    languageJson: string;
    toggleActive(active?: boolean): Promise<boolean>;
    componentWillLoad(): void;
    render(): any;
}
