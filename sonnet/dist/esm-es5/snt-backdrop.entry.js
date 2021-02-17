import { r as registerInstance, e as createEvent, h, H as Host } from './index-79f6678c.js';
var EventUtils = /** @class */ (function () {
    function EventUtils() {
    }
    return EventUtils;
}());
EventUtils.now = function (ev) {
    return ev.timeStamp || Date.now();
};
var backdropComponentCss = "snt-backdrop{display:none;top:0;bottom:0;left:0;right:0;position:fixed;height:100%;width:100%;z-index:-1;background-color:rgba(51, 51, 51, 0.75);overflow:hidden}";
var BackdropComponent = /** @class */ (function () {
    function BackdropComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sntBackdropTap = createEvent(this, "sntBackdropTap", 7);
        this.lastClick = -10000;
        /**
         * If `true`, the backdrop can be clicked and will emit `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdroo will stop propagation on tap
         */
        this.stopPropagation = true;
    }
    BackdropComponent.prototype.onTouchStart = function (evt) {
        this.lastClick = EventUtils.now(evt);
        this.emitTap(evt);
    };
    BackdropComponent.prototype.onMouseDown = function (evt) {
        if (this.lastClick < EventUtils.now(evt) - 2500) {
            this.emitTap(evt);
        }
    };
    BackdropComponent.prototype.emitTap = function (evt) {
        if (this.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        if (this.tappable) {
            this.sntBackdropTap.emit(evt);
        }
    };
    BackdropComponent.prototype.render = function () {
        return (h(Host, { tabindex: "-1" }));
    };
    return BackdropComponent;
}());
BackdropComponent.TAG_NAME = "snt-backdrop";
BackdropComponent.style = backdropComponentCss;
export { BackdropComponent as snt_backdrop };
