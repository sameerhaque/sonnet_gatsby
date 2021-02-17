import { EventEmitter } from "../../../stencil-public-runtime";
import { SearchSuggestion } from "../../../core/search/SearchSuggestion";
export declare class SearchComboboxComponent {
    static readonly TAG_NAME = "snt-search-combobox";
    /**
     * Local Properties
     */
    private input;
    private keyboardEventProcessor;
    private languageVariables;
    private searchFunction;
    private userInput;
    /**
     * Reference To Host HTML Element
     */
    hostElement: HTMLSntSearchComboboxElement;
    /**
     * State Variables
     */
    focused: boolean;
    expanded: boolean;
    SearchSuggestion: Array<SearchSuggestion>;
    /**
     * Public Properties API
     */
    autoComplete: boolean;
    ariaLabelledby: string;
    ariaLabel: string;
    languageJson: string;
    languageString: string;
    searchFunctionRef: string;
    value?: string | null;
    padding: 'none' | 'top-only' | 'bottom-only' | 'remove-sides' | 'vertical-only';
    /**
     * Prop Lifecycle Events
     */
    activeIndex: number;
    activeIndexChange(activeIndex: number): void;
    /**
     * Events Section
     */
    sntInput: EventEmitter<KeyboardEvent>;
    sntFocus: EventEmitter<void>;
    sntBlur: EventEmitter<void>;
    sntSearchSubmitted: EventEmitter;
    /**
     * Component Lifecycle Events
     */
    componentWillLoad(): void;
    /**
     * Listeners
     */
    onClick(evt: Event): void;
    /**
     * Public Methods API
     */
    setFocus(): Promise<void>;
    getInputElement(): Promise<HTMLInputElement>;
    setSearchSuggestions(suggestions: Array<SearchSuggestion>): Promise<void>;
    /**
     * Local Methods
     */
    private onFocus;
    private onInput;
    onBlur(): void;
    private onListboxClick;
    private selectItem;
    private clear;
    private dismiss;
    private updateSearchSuggestions;
    private initKeyboardEventProcessor;
    private processKeyboardEvent;
    private setNextActiveIndex;
    private highlightPattern;
    private submit;
    private restoreUserInput;
    render(): any;
}
