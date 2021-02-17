import { EventEmitter } from "../../stencil-public-runtime";
export declare class FAQPaginationComponent {
    static readonly TAG_NAME = "snt-pagination";
    prevLinkLang: string;
    nextLinkLang: string;
    pageNumLang: string;
    pageNumAriaLang: string;
    paginationNavLang: string;
    pageChanged: EventEmitter<string>;
    totalPages: number;
    curr: number;
    private ellipsis;
    onPageNumberClick(pageNum: number): void;
    onPreviousClick(): void;
    onNextClick(): void;
    setPageNumber(pageNum: number, emitEvent?: boolean): Promise<void>;
    getPageLink(pageNum: number): any;
    getEllipsis(): any;
    private getPageNumbersForDesktop;
    render(): any[];
}
