import { EventEmitter } from '../../stencil-public-runtime';
export declare class ButtonComponent {
    static readonly TAG_NAME = "snt-button";
    element: HTMLElement;
    sntButtonClick: EventEmitter;
    sntButtonKeyDown: EventEmitter;
    iconClassName: string;
    styleClasses: string;
    hiddenTitle: string;
    buttonId: string;
    handleKeyDown(keyboardEvent: KeyboardEvent): void;
    handleClick(clickEvent: MouseEvent): void;
    render(): any;
}
