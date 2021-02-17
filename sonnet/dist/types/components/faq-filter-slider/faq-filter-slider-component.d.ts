import { EventEmitter } from "../../stencil-public-runtime";
export declare class FAQFilterSliderComponent {
    static readonly TAG_NAME = "snt-faq-filter-slider";
    private _filterArr;
    filterItems: string;
    menuAriaLabel: string;
    faqFilterClick: EventEmitter<string>;
    currentActive: string;
    onFilterClick(filterKey: string): void;
    componentWillRender(): void;
    render(): any[];
}
