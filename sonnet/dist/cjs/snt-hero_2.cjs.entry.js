'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
require('./WebUtils-7da67880.js');
require('./_commonjsHelpers-fc53004f.js');
const ViewportAttributesBuilder = require('./ViewportAttributesBuilder-0c1b4980.js');

class ViewportStyles {
    constructor(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    hasStyles() {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    }
    getStyles() {
        return this.includes;
    }
    getExcludedStyles() {
        return this.excludes;
    }
}

class ViewportStylesBuilder {
    constructor() {
        this.includes = new Map();
        this.excludes = new Set();
    }
    static newInstance() {
        return new ViewportStylesBuilder();
    }
    with(name, value) {
        this.includes.set(name, value);
        return this;
    }
    remove(name) {
        this.excludes.add(name);
        return this;
    }
    build() {
        return new ViewportStyles(this.includes, this.excludes);
    }
}

const heroComponentCss = "snt-hero{position:relative;height:100%;width:100%;margin:0 auto;overflow:hidden;background-image:-webkit-gradient(linear, right top, left top, color-stop(30%, rgba(255, 255, 255, 0)), color-stop(115%, #ffffff));background-image:linear-gradient(270deg, rgba(255, 255, 255, 0) 30%, #ffffff 115%)}.light-fill snt-hero,snt-hero.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-hero,snt-hero.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-hero,snt-hero.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-hero,snt-hero.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-hero,snt-hero.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-hero snt-layout[viewport=medium]{min-height:25em}snt-hero snt-layout[viewport=large]{min-height:31.25em;max-width:100%}snt-hero snt-layout[viewport=extra-large]{min-height:39.0625em;max-width:100%}snt-hero snt-panel{min-height:unset}snt-hero snt-panel.logo-present snt-layout .spacings{padding-top:0px}snt-hero snt-layout[viewport=extra-large]{max-width:1440px}snt-hero snt-layout[viewport=extra-large] .hero_container{max-width:60%}snt-hero snt-layout[viewport=extra-large] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=extra-large] button-link{width:auto}snt-hero snt-layout[viewport=large] .hero_container{max-width:60%}snt-hero snt-layout[viewport=large] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=large] button-link{width:auto}snt-hero snt-layout[viewport=medium] .hero_container{max-width:60%}snt-hero snt-layout[viewport=medium] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=medium] button-link{width:auto}snt-hero snt-layout[viewport=extra-small] snt-action-button,snt-hero snt-layout[viewport=extra-small] snt-button,snt-hero snt-layout[viewport=extra-small] button,snt-hero snt-layout[viewport=extra-small] a{width:100% !important}snt-hero snt-layout[viewport=extra-small] .hero_container snt-button{display:-ms-flexbox;display:flex}snt-hero snt-layout[viewport=extra-small] .float-left{width:100%;margin:0 0 1.25em 0}snt-hero snt-layout[viewport=small] snt-action-button,snt-hero snt-layout[viewport=small] snt-button,snt-hero snt-layout[viewport=small] button,snt-hero snt-layout[viewport=small] a{width:100% !important}snt-hero snt-layout[viewport=small] .hero_container snt-button{display:-ms-flexbox;display:flex}snt-hero snt-layout[viewport=small] .float-left{width:100%;margin:0 0 1.25em 0}snt-hero .hero_container{width:100%;float:left}snt-hero .hero_container p{margin:0.938em 0 1.875em}snt-hero .hero_container .float-left{margin:0 1.25em 1.25em 0}snt-hero snt-image.mobile-image[viewport=medium],snt-hero snt-image.mobile-image[viewport=large],snt-hero snt-image.mobile-image[viewport=extra-large]{display:none}snt-hero snt-image.mobile-image img{-o-object-fit:cover;object-fit:cover;max-height:670px;width:100%}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
const HeroComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.mobileImage.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.data.getData().then(value => {
            this.context = new ViewportAttributesBuilder.DefaultContext().fromObject(value);
            this.mobileImage.setAttribute('src-image', this.context.getInstance('small').styles.backgroundImage);
            this.mobileImage.setAttribute('data-src', this.context.getInstance('small').styles.backgroundImage);
            ViewportAttributesBuilder.ViewportConfigurationService.getInstance().register(this, this.getElements(), this.resize);
        }).catch(() => {
        });
    }
    resize() {
        ViewportAttributesBuilder.ViewportConfigurationService.getInstance().process(this, this.context, this.getElements());
        if (StringUtils.StringUtils.hasValue(this.logoImage.getAttribute('src-image'))) {
            this.panel.classList.add('logo-present');
        }
        else {
            this.panel.classList.remove('logo-present');
        }
    }
    getElements() {
        const elements = [ComponentConstants.Pair.of("panel", this.panel), ComponentConstants.Pair.of("logoImage", this.logoImage)];
        return elements;
    }
    render() {
        return (index.h(index.Host, null, index.h("snt-panel", { ref: (el) => this.panel = el }, index.h("div", { class: 'hero_container' }, index.h("snt-image", { "src-image": "", "data-src": "", ref: (el) => this.logoImage = el }), index.h("slot", { name: "content" }))), index.h("snt-image", { class: "mobile-image", "src-image": "", "data-src": "", ref: (el) => this.mobileImage = el }), index.h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: (el) => this.data = el })));
    }
    get element() { return index.getElement(this); }
};
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{medium.styles.backgroundImage}}')").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{large.styles.backgroundImage}}')").build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{extra_large.styles.backgroundImage}}')").build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "panel", void 0);
__decorate([
    ViewportAttributesBuilder.ViewportParameters([
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_small.logoUrl}}')
            .with('src-image', '{{extra_small.logoUrl}}')
            .with('img-alt', '{{extra_small.logoAltText}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.SMALL.getLeft(), ComponentConstants.ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{small.logoUrl}}')
            .with('src-image', '{{small.logoUrl}}')
            .with('img-alt', '{{small.logoAltText}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.MEDIUM.getLeft(), ComponentConstants.ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{medium.logoUrl}}')
            .with('src-image', '{{medium.logoUrl}}')
            .with('img-alt', '{{medium.logoAltText}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.LARGE.getLeft(), ComponentConstants.ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{large.logoUrl}}')
            .with('src-image', '{{large.logoUrl}}')
            .with('img-alt', '{{large.logoAltText}}')
            .build())
            .build(),
        ViewportAttributesBuilder.ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_large.logoUrl}}')
            .with('src-image', '{{extra_large.logoUrl}}')
            .with('img-alt', '{{extra_large.logoAltText}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "logoImage", void 0);
HeroComponent.style = heroComponentCss;

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return Object.freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global = typeof window !== 'undefined' ? window : {};

var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return Object.freeze({
        inlineSize: (switchSizes ? blockSize : inlineSize) || 0,
        blockSize: (switchSizes ? inlineSize : blockSize) || 0
    });
};
var zeroBoxes = Object.freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = Object.freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = [boxes.borderBoxSize];
        this.contentBoxSize = [boxes.contentBoxSize];
        this.devicePixelContentBoxSize = [boxes.devicePixelContentBoxSize];
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());

var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

class AbstractResizeObserver {
    observe(element, callback) {
        const ResizeObserver$1 = (window[AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME]) || ResizeObserver;
        const observer = new ResizeObserver$1(callback);
        observer.observe(element, { box: 'border-box' });
    }
    unobserve(observer) {
        if ((window[AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME]) && (typeof observer)) {
            observer.disconnect();
        }
    }
}
AbstractResizeObserver.RESIZE_OBSERVER_IDENTIFIER_NAME = "ResizeObserver";

class ViewportObserverManager extends AbstractResizeObserver {
    constructor() { super(); }
    static getInstance() {
        return new ViewportObserverManager();
    }
    observerDoesNotExist(element) {
        console.log(element, "observer does not exist");
    }
}

const panelComponentCss = "snt-panel{display:block;width:100%;min-height:39.063em;background-repeat:no-repeat;background-size:cover}";

const PanelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const configEl = this.element.querySelector("snt-data");
        if (configEl) {
            const config = JSON.parse(configEl.innerHTML);
            // Create array from JSON obj keys, cast to number array, sort descending
            const viewportSizes = ((Object.keys(config.viewport)).map(Number)).sort((a, b) => b - a);
            ViewportObserverManager.getInstance().observe(this.element, (entries) => {
                const entry = entries[0];
                for (let viewportSize of viewportSizes) {
                    if (entry.contentRect.width >= viewportSize) {
                        console.log(entry.contentRect.width + " >= " + viewportSize);
                        const style = config.viewport[viewportSize].style;
                        for (let styleKey of (Object.keys(style))) {
                            this.element.style[styleKey] = style[styleKey];
                        }
                        const elClass = config.viewport[viewportSize]["class"];
                        if (elClass) {
                            for (let classVal of elClass) {
                                if (!this.element.classList.contains(classVal)) {
                                    this.element.classList.add(classVal);
                                }
                            }
                        }
                        break;
                    }
                }
            });
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("snt-layout", null, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
};
PanelComponent.style = panelComponentCss;

exports.snt_hero = HeroComponent;
exports.snt_panel = PanelComponent;
