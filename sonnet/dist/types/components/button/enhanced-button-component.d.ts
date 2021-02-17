import { EventEmitter } from "../../stencil-public-runtime";
export declare class EnhancedButtonComponent {
    static readonly TAG_NAME = "snt-enhanced-button";
    element: HTMLElement;
    sntButtonClick: EventEmitter;
    sntButtonKeyDown: EventEmitter;
    styleClasses: string;
    discountText: string;
    ctaText: string;
    href: string;
    target: string;
    ariaLabel: string;
    leftIconSources: string;
    rightIconSources: string;
    linkId: string;
    private leftIconJson;
    private rightIconJson;
    handleKeyDown(keyboardEvent: KeyboardEvent): void;
    handleClick(clickEvent: MouseEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
    private buildLinkContent;
    private buildDiscountContent;
    private buildIconContent;
    private buildPictureContent;
}
