export declare class SearchTypeaheadComponent {
    static readonly TAG_NAME = "snt-search-typeahead";
    private baseHref;
    private searchHref;
    private searchComboBox;
    private searchSntButton;
    private languageStrings;
    languageJson: string;
    searchComboboxId: string;
    handleSearchButtonClick(evt: any): void;
    private onKeyDown;
    private onInput;
    componentWillLoad(): void;
    render(): any;
}
