import { EventEmitter } from "../../stencil-public-runtime";
export declare class ButtonLinkComponent {
    static readonly TAG_NAME = "button-link";
    href: string;
    target: string;
    ariaLabel: string;
    ariaDescribedByText: string;
    classNames: string;
    buttonId: string;
    element: HTMLElement;
    linkEvent: EventEmitter;
    handleKeyDown(keyboardEvent: KeyboardEvent): void;
    handleClick(clickEvent: MouseEvent): void;
    handleMouseover(clickEvent: MouseEvent): void;
    render(): any[];
}
