'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

class EventUtils {
}
EventUtils.now = (ev) => {
    return ev.timeStamp || Date.now();
};

const backdropComponentCss = "snt-backdrop{display:none;top:0;bottom:0;left:0;right:0;position:fixed;height:100%;width:100%;z-index:-1;background-color:rgba(51, 51, 51, 0.75);overflow:hidden}";

const BackdropComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sntBackdropTap = index.createEvent(this, "sntBackdropTap", 7);
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
    onTouchStart(evt) {
        this.lastClick = EventUtils.now(evt);
        this.emitTap(evt);
    }
    onMouseDown(evt) {
        if (this.lastClick < EventUtils.now(evt) - 2500) {
            this.emitTap(evt);
        }
    }
    emitTap(evt) {
        if (this.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        if (this.tappable) {
            this.sntBackdropTap.emit(evt);
        }
    }
    render() {
        return (index.h(index.Host, { tabindex: "-1" }));
    }
};
BackdropComponent.TAG_NAME = "snt-backdrop";
BackdropComponent.style = backdropComponentCss;

exports.snt_backdrop = BackdropComponent;
