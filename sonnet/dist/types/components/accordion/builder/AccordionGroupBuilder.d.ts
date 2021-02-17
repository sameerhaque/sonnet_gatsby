export declare class AccordionGroupBuilder {
    private accordions;
    private constructor();
    static newInstance(): AccordionGroupBuilder;
    withAccordion(accordion: HTMLSntAccordionElement): AccordionGroupBuilder;
    build(): HTMLSntAccordionGroupElement;
}
