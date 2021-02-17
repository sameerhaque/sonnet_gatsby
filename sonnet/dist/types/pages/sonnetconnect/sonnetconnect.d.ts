export declare class SonnetConnect {
    private static instance;
    private category;
    private static readonly filterUrlParam;
    constructor();
    static getInstance(): SonnetConnect;
    initiate(): Promise<void>;
    updateFilterSlider(filterKey: string): Promise<void>;
    initiateSliderListener(): Promise<void>;
    initiateUrlListener(): void;
    handlePageChange(): Promise<void>;
}
