import { EventEmitter } from "../../stencil-public-runtime";
export declare class LinkComponent {
    static readonly TAG_NAME = "snt-link";
    linkId: string;
    href: string;
    target: string;
    ariaLabel: string;
    current: boolean;
    downloadName: string;
    ariaCurrent: string | boolean;
    rel: string;
    hiddenTitle: string;
    isExternal: boolean;
    classNames: string;
    element: HTMLElement;
    linkEvent: EventEmitter;
    handleKeyDown(keyboardEvent: KeyboardEvent): void;
    handleClick(clickEvent: MouseEvent): void;
    handleMouseover(clickEvent: MouseEvent): void;
    render(): any[];
}
