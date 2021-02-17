export declare class SearchBarComponent {
    static readonly TAG_NAME = "snt-search-bar";
    private searchTypeahead;
    private lastActiveElement;
    active: boolean;
    styleClasses: string;
    languageJson: string;
    toggleActive(active?: boolean): Promise<boolean>;
    watchActive(active: boolean): void;
    componentDidUpdate(): void;
    private setFocus;
    render(): any;
}
