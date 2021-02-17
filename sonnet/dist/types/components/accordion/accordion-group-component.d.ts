import { AccordionEvent } from "./domain/AccordionEvent";
export declare class AccordionGroupComponent {
    static readonly TAG_NAME = "snt-accordion-group";
    private element;
    multiExpand: boolean;
    expandAll(): Promise<void>;
    collapseAll(): Promise<void>;
    addAccordion(accordion: HTMLSntAccordionElement): Promise<void>;
    componentWillRender(): void;
    render(): any;
    onAccordionEvent(event: CustomEvent<AccordionEvent>): void;
    private collapseSibling;
}
