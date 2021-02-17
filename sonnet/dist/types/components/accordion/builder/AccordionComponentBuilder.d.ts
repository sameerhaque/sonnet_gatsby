export declare class AccordionComponentBuilder {
    private summary;
    private details;
    private constructor();
    static newInstance(): AccordionComponentBuilder;
    withSummary(summary: HTMLElement): AccordionComponentBuilder;
    withDetails(details: HTMLElement): AccordionComponentBuilder;
    build(): HTMLSntAccordionElement;
}
