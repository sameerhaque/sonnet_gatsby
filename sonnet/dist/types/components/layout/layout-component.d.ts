import { EventEmitter } from "../../stencil-public-runtime";
export declare class LayoutComponent {
    private element;
    viewport: string;
    viewportChanged: EventEmitter;
    private context;
    onViewportChanged(value: any): void;
    padding: 'none' | 'top-only' | 'bottom-only' | 'remove-sides' | 'vertical-only';
    componentWillLoad(): void;
    private resize;
    private getElements;
    render(): any;
}
