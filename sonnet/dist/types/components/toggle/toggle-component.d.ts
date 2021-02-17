import { EventEmitter } from "../../stencil-public-runtime";
export declare class ToggleComponent {
    static readonly TAG_NAME = "snt-header";
    element: HTMLElement;
    toggle: EventEmitter;
    handleClick(): void;
    render(): any;
}
