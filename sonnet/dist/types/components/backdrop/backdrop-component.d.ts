import { EventEmitter } from "../../stencil-public-runtime";
export declare class BackdropComponent {
    static readonly TAG_NAME = "snt-backdrop";
    private lastClick;
    /**
     * If `true`, the backdrop can be clicked and will emit `ionBackdropTap` event.
     */
    tappable: Boolean;
    /**
     * If `true`, the backdroo will stop propagation on tap
     */
    stopPropagation: Boolean;
    /**
     * Emitted when the backdrop is tapped
     */
    sntBackdropTap: EventEmitter<any>;
    protected onTouchStart(evt: TouchEvent): void;
    protected onMouseDown(evt: TouchEvent): void;
    private emitTap;
    render(): any;
}
