var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host, g as getElement, e as createEvent } from './index-79f6678c.js';
var testimonialsComponentCss = "testimonial-quote{color:#323232;background-color:#f8f8f8;}testimonial-quote.carousel{width:100%;display:-ms-flexbox;display:flex;position:relative}testimonial-quote .carousel-item{height:-webkit-max-content;height:-moz-max-content;height:max-content;min-height:100%}testimonial-quote .carousel-item .carousel-caption{left:0;right:0;position:relative}@media (max-width: 480px){testimonial-quote .carousel-item .carousel-caption{padding-bottom:0}}testimonial-quote .carousel-item blockquote,testimonial-quote .carousel-item p2{text-align:left;display:-ms-flexbox;display:flex}testimonial-quote .carousel-caption{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:208px}@media (min-width: 768px){testimonial-quote .carousel-caption{height:161px}}@media (min-width: 1024px){testimonial-quote .carousel-caption{height:136px}}@media (min-width: 1440px){testimonial-quote .carousel-caption{height:176px}}.light-fill testimonial-quote,testimonial-quote.light-fill{color:#323232;background-color:#d9f0f4}.neutral-fill testimonial-quote,testimonial-quote.neutral-fill{color:#323232;background-color:#f8f8f8}.dark-fill testimonial-quote,testimonial-quote.dark-fill{color:#ffffff;background-color:#147582}.white-fill testimonial-quote,testimonial-quote.white-fill{color:#323232;background-color:#ffffff}testimonials-group{display:block;color:#323232;background-color:#f8f8f8;}.light-fill testimonials-group,testimonials-group.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill testimonials-group,testimonials-group.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill testimonials-group,testimonials-group.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill testimonials-group,testimonials-group.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill testimonials-group,testimonials-group.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}.light-fill testimonials-group .carousel-control-next,.light-fill testimonials-group .carousel-control-prev,testimonials-group.light-fill .carousel-control-next,testimonials-group.light-fill .carousel-control-prev{border-color:#323232}.light-fill testimonials-group .carousel-control-prev-icon,.light-fill testimonials-group .carousel-control-next-icon,testimonials-group.light-fill .carousel-control-prev-icon,testimonials-group.light-fill .carousel-control-next-icon{fill:#323232}.light-fill testimonials-group .carousel-indicators li,testimonials-group.light-fill .carousel-indicators li{border-color:#323232}.light-fill testimonials-group .carousel-indicators .active,testimonials-group.light-fill .carousel-indicators .active{background-color:#323232}.light-fill testimonials-group i.arrows,testimonials-group.light-fill i.arrows{border-color:#323232}.neutral-fill testimonials-group .carousel-control-next,.neutral-fill testimonials-group .carousel-control-prev,testimonials-group.neutral-fill .carousel-control-next,testimonials-group.neutral-fill .carousel-control-prev{border-color:#323232}.neutral-fill testimonials-group .carousel-control-prev-icon,.neutral-fill testimonials-group .carousel-control-next-icon,testimonials-group.neutral-fill .carousel-control-prev-icon,testimonials-group.neutral-fill .carousel-control-next-icon{fill:#323232}.neutral-fill testimonials-group .carousel-indicators li,testimonials-group.neutral-fill .carousel-indicators li{border-color:#323232}.neutral-fill testimonials-group .carousel-indicators .active,testimonials-group.neutral-fill .carousel-indicators .active{background-color:#323232}.neutral-fill testimonials-group i.arrows,testimonials-group.neutral-fill i.arrows{border-color:#323232}.dark-fill testimonials-group .carousel-control-next,.dark-fill testimonials-group .carousel-control-prev,testimonials-group.dark-fill .carousel-control-next,testimonials-group.dark-fill .carousel-control-prev{border-color:#ffffff}.dark-fill testimonials-group .carousel-control-prev-icon,.dark-fill testimonials-group .carousel-control-next-icon,testimonials-group.dark-fill .carousel-control-prev-icon,testimonials-group.dark-fill .carousel-control-next-icon{fill:#ffffff}.dark-fill testimonials-group .carousel-indicators li,testimonials-group.dark-fill .carousel-indicators li{border-color:#ffffff}.dark-fill testimonials-group .carousel-indicators .active,testimonials-group.dark-fill .carousel-indicators .active{background-color:#ffffff}.dark-fill testimonials-group i.arrows,testimonials-group.dark-fill i.arrows{border-color:#ffffff}.white-fill testimonials-group .carousel-control-next,.white-fill testimonials-group .carousel-control-prev,testimonials-group.white-fill .carousel-control-next,testimonials-group.white-fill .carousel-control-prev{border-color:#323232}.white-fill testimonials-group .carousel-control-prev-icon,.white-fill testimonials-group .carousel-control-next-icon,testimonials-group.white-fill .carousel-control-prev-icon,testimonials-group.white-fill .carousel-control-next-icon{fill:#ffffff}.white-fill testimonials-group .carousel-indicators li,testimonials-group.white-fill .carousel-indicators li{border-color:#323232}.white-fill testimonials-group .carousel-indicators .active,testimonials-group.white-fill .carousel-indicators .active{background-color:#ffffff}.white-fill testimonials-group i.arrows,testimonials-group.white-fill i.arrows{border-color:#323232}testimonials-group .testimonial-controls{position:relative;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}@media (max-width: 480px){testimonials-group .testimonial-controls{-ms-flex-pack:center;justify-content:center;height:30px}}testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{z-index:9;width:45px;height:45px;opacity:1;position:relative;border:3px solid;border-radius:50%;cursor:pointer;border-color:#323232}@media (max-width: 480px){testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{display:none}}testimonials-group .carousel-control-prev-icon,testimonials-group .carousel-control-next-icon{fill:#323232;background:none}testimonials-group .carousel-control-prev-icon{-webkit-transform:translate(3px, 2px);transform:translate(3px, 2px)}testimonials-group .carousel-control-next-icon{-webkit-transform:translate(-2px, 2px) rotateY(360deg);transform:translate(-2px, 2px) rotateY(360deg)}@media (min-width: 1024px){testimonials-group .carousel-control-prev-icon{-webkit-transform:translate(3px, 0px);transform:translate(3px, 0px)}testimonials-group .carousel-control-next-icon{-webkit-transform:translate(-2px, 0px) rotateY(360deg);transform:translate(-2px, 0px) rotateY(360deg)}}testimonials-group .carousel-indicators{position:relative;margin-right:1%;margin-left:1%;bottom:-20px;z-index:1}testimonials-group .carousel-indicators .active{background-color:#323232}testimonials-group .carousel-indicators li{width:6px;height:6px;cursor:pointer;border:3px solid;border-color:#323232;background:transparent;border-radius:50%;opacity:1;margin-left:7px;margin-right:7px}testimonials-group .full_container{width:100%}testimonials-group i.arrows{border-color:#323232;border-style:solid;border-width:0 3px 3px 0;display:inline-block;padding:6px}testimonials-group .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}testimonials-group .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}@media (max-width: 480px){testimonials-group{}}testimonials-group .carousel-slider-wrap{overflow-x:hidden}testimonials-group .carousel-inner{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;--carouselCount:1;min-width:100%;width:calc(var(--carouselCount) * 100%)}testimonials-group .carousel-inner .carousel-item{min-width:100%;width:calc(100% / var(--carouselCount));pointer-events:none;-webkit-transform-origin:0%;transform-origin:0%;-webkit-transition:0.6s all cubic-bezier(0.6, 0, 0.35, 1);transition:0.6s all cubic-bezier(0.6, 0, 0.35, 1)}h2.testimonial-title{margin-bottom:30px}@media (max-width: 480px){h2.testimonial-title{margin-bottom:15px}}";
var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    TestimonialsComponent.prototype.componentDidLoad = function () {
        if (this.element.querySelector('blockquote').innerHTML.length < 0) {
            throw new Error('Cannot have an empty testimonial');
        }
    };
    TestimonialsComponent.prototype.componentWillLoad = function () {
        (this.element.parentElement.classList.contains('carousel-inner'))
            ? this.single = false
            : this.single = true;
    };
    TestimonialsComponent.prototype.render = function () {
        if (this.single) {
            return (h(Host, { id: this.containerId, class: "carousel slide", "data-ride": "carousel" }, h("div", { class: "container" }, h("h2", { class: "testimonial-title" }, this.headline), h("div", { class: "carousel-inner" }, h("div", { class: "carousel-item active" }, h("div", { class: "carousel-caption " }, h("div", { class: "carousel-quote" }, h("blockquote", null, h("slot", null)), h("p2", null, this.from))))))));
        }
        else {
            return (h(Host, { class: "carousel-item", id: this.containerId }, h("div", { class: "carousel-caption" }, h("div", { class: "carousel-quote" }, h("blockquote", null, h("slot", null)), h("p2", null, this.from)))));
        }
    };
    Object.defineProperty(TestimonialsComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TestimonialsComponent;
}());
TestimonialsComponent.TAG_NAME = "testimonial-quote";
TestimonialsComponent.style = testimonialsComponentCss;
var testimonialsComponentCss$1 = "testimonial-quote{color:#323232;background-color:#f8f8f8;}testimonial-quote.carousel{width:100%;display:-ms-flexbox;display:flex;position:relative}testimonial-quote .carousel-item{height:-webkit-max-content;height:-moz-max-content;height:max-content;min-height:100%}testimonial-quote .carousel-item .carousel-caption{left:0;right:0;position:relative}@media (max-width: 480px){testimonial-quote .carousel-item .carousel-caption{padding-bottom:0}}testimonial-quote .carousel-item blockquote,testimonial-quote .carousel-item p2{text-align:left;display:-ms-flexbox;display:flex}testimonial-quote .carousel-caption{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:208px}@media (min-width: 768px){testimonial-quote .carousel-caption{height:161px}}@media (min-width: 1024px){testimonial-quote .carousel-caption{height:136px}}@media (min-width: 1440px){testimonial-quote .carousel-caption{height:176px}}.light-fill testimonial-quote,testimonial-quote.light-fill{color:#323232;background-color:#d9f0f4}.neutral-fill testimonial-quote,testimonial-quote.neutral-fill{color:#323232;background-color:#f8f8f8}.dark-fill testimonial-quote,testimonial-quote.dark-fill{color:#ffffff;background-color:#147582}.white-fill testimonial-quote,testimonial-quote.white-fill{color:#323232;background-color:#ffffff}testimonials-group{display:block;color:#323232;background-color:#f8f8f8;}.light-fill testimonials-group,testimonials-group.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill testimonials-group,testimonials-group.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill testimonials-group,testimonials-group.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill testimonials-group,testimonials-group.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill testimonials-group,testimonials-group.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}.light-fill testimonials-group .carousel-control-next,.light-fill testimonials-group .carousel-control-prev,testimonials-group.light-fill .carousel-control-next,testimonials-group.light-fill .carousel-control-prev{border-color:#323232}.light-fill testimonials-group .carousel-control-prev-icon,.light-fill testimonials-group .carousel-control-next-icon,testimonials-group.light-fill .carousel-control-prev-icon,testimonials-group.light-fill .carousel-control-next-icon{fill:#323232}.light-fill testimonials-group .carousel-indicators li,testimonials-group.light-fill .carousel-indicators li{border-color:#323232}.light-fill testimonials-group .carousel-indicators .active,testimonials-group.light-fill .carousel-indicators .active{background-color:#323232}.light-fill testimonials-group i.arrows,testimonials-group.light-fill i.arrows{border-color:#323232}.neutral-fill testimonials-group .carousel-control-next,.neutral-fill testimonials-group .carousel-control-prev,testimonials-group.neutral-fill .carousel-control-next,testimonials-group.neutral-fill .carousel-control-prev{border-color:#323232}.neutral-fill testimonials-group .carousel-control-prev-icon,.neutral-fill testimonials-group .carousel-control-next-icon,testimonials-group.neutral-fill .carousel-control-prev-icon,testimonials-group.neutral-fill .carousel-control-next-icon{fill:#323232}.neutral-fill testimonials-group .carousel-indicators li,testimonials-group.neutral-fill .carousel-indicators li{border-color:#323232}.neutral-fill testimonials-group .carousel-indicators .active,testimonials-group.neutral-fill .carousel-indicators .active{background-color:#323232}.neutral-fill testimonials-group i.arrows,testimonials-group.neutral-fill i.arrows{border-color:#323232}.dark-fill testimonials-group .carousel-control-next,.dark-fill testimonials-group .carousel-control-prev,testimonials-group.dark-fill .carousel-control-next,testimonials-group.dark-fill .carousel-control-prev{border-color:#ffffff}.dark-fill testimonials-group .carousel-control-prev-icon,.dark-fill testimonials-group .carousel-control-next-icon,testimonials-group.dark-fill .carousel-control-prev-icon,testimonials-group.dark-fill .carousel-control-next-icon{fill:#ffffff}.dark-fill testimonials-group .carousel-indicators li,testimonials-group.dark-fill .carousel-indicators li{border-color:#ffffff}.dark-fill testimonials-group .carousel-indicators .active,testimonials-group.dark-fill .carousel-indicators .active{background-color:#ffffff}.dark-fill testimonials-group i.arrows,testimonials-group.dark-fill i.arrows{border-color:#ffffff}.white-fill testimonials-group .carousel-control-next,.white-fill testimonials-group .carousel-control-prev,testimonials-group.white-fill .carousel-control-next,testimonials-group.white-fill .carousel-control-prev{border-color:#323232}.white-fill testimonials-group .carousel-control-prev-icon,.white-fill testimonials-group .carousel-control-next-icon,testimonials-group.white-fill .carousel-control-prev-icon,testimonials-group.white-fill .carousel-control-next-icon{fill:#ffffff}.white-fill testimonials-group .carousel-indicators li,testimonials-group.white-fill .carousel-indicators li{border-color:#323232}.white-fill testimonials-group .carousel-indicators .active,testimonials-group.white-fill .carousel-indicators .active{background-color:#ffffff}.white-fill testimonials-group i.arrows,testimonials-group.white-fill i.arrows{border-color:#323232}testimonials-group .testimonial-controls{position:relative;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}@media (max-width: 480px){testimonials-group .testimonial-controls{-ms-flex-pack:center;justify-content:center;height:30px}}testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{z-index:9;width:45px;height:45px;opacity:1;position:relative;border:3px solid;border-radius:50%;cursor:pointer;border-color:#323232}@media (max-width: 480px){testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{display:none}}testimonials-group .carousel-control-prev-icon,testimonials-group .carousel-control-next-icon{fill:#323232;background:none}testimonials-group .carousel-control-prev-icon{-webkit-transform:translate(3px, 2px);transform:translate(3px, 2px)}testimonials-group .carousel-control-next-icon{-webkit-transform:translate(-2px, 2px) rotateY(360deg);transform:translate(-2px, 2px) rotateY(360deg)}@media (min-width: 1024px){testimonials-group .carousel-control-prev-icon{-webkit-transform:translate(3px, 0px);transform:translate(3px, 0px)}testimonials-group .carousel-control-next-icon{-webkit-transform:translate(-2px, 0px) rotateY(360deg);transform:translate(-2px, 0px) rotateY(360deg)}}testimonials-group .carousel-indicators{position:relative;margin-right:1%;margin-left:1%;bottom:-20px;z-index:1}testimonials-group .carousel-indicators .active{background-color:#323232}testimonials-group .carousel-indicators li{width:6px;height:6px;cursor:pointer;border:3px solid;border-color:#323232;background:transparent;border-radius:50%;opacity:1;margin-left:7px;margin-right:7px}testimonials-group .full_container{width:100%}testimonials-group i.arrows{border-color:#323232;border-style:solid;border-width:0 3px 3px 0;display:inline-block;padding:6px}testimonials-group .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}testimonials-group .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}@media (max-width: 480px){testimonials-group{}}testimonials-group .carousel-slider-wrap{overflow-x:hidden}testimonials-group .carousel-inner{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;--carouselCount:1;min-width:100%;width:calc(var(--carouselCount) * 100%)}testimonials-group .carousel-inner .carousel-item{min-width:100%;width:calc(100% / var(--carouselCount));pointer-events:none;-webkit-transform-origin:0%;transform-origin:0%;-webkit-transition:0.6s all cubic-bezier(0.6, 0, 0.35, 1);transition:0.6s all cubic-bezier(0.6, 0, 0.35, 1)}h2.testimonial-title{margin-bottom:30px}@media (max-width: 480px){h2.testimonial-title{margin-bottom:15px}}";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: 'inactive',
    timing: 600
};
var TestimonialsGroupComponent = /** @class */ (function () {
    function TestimonialsGroupComponent(hostRef) {
        registerInstance(this, hostRef);
        this.showSlide = createEvent(this, "showSlide", 7);
        this.hideSlide = createEvent(this, "hideSlide", 7);
        this.selected = 0;
        this.slideSelector = '.carousel-item';
        this.indicatorSelector = '[data-slide-to]';
        this.prevSelector = '[data-slide="prev"]';
        this.nextSelector = '[data-slide="next"]';
        this.cycleType = 'hover';
        this.ride = false;
        this.wrap = true;
        this.listeners = {};
        this.currentSlide = 0;
        this.x0 = null; //intial click/touch position on testimonial
    }
    TestimonialsGroupComponent.prototype.unify = function (e) { return e.changedTouches ? e.changedTouches[0] : e; };
    ;
    TestimonialsGroupComponent.prototype.lock = function (e) {
        this.x0 = this.unify(e).clientX;
    };
    ;
    TestimonialsGroupComponent.prototype.move = function (e) {
        if (this.x0 || this.x0 === 0) {
            var dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
            if ((this.currentSlide > 0 || s < 0) && (this.currentSlide < this.slideElements.length - 1 || s > 0)) {
                this.currentSlide -= s;
                if (s == -1) {
                    this.onShow(this.currentSlide);
                }
                else if (s == 1) {
                    this.onShow(this.currentSlide);
                }
            }
            this.x0 = null;
        }
    };
    ;
    TestimonialsGroupComponent.prototype.componentDidLoad = function () {
        this._carouselContainer = this.element.querySelector('.carousel-inner');
        this._carouselContainer.addEventListener('mousedown', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('touchstart', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('mouseup', this.move.bind(this), false);
        this._carouselContainer.addEventListener('touchend', this.move.bind(this), false);
        this.element.querySelector('.carousel-item').classList.add('active');
        this.currentSlide = this.selected || 0;
        this.getSlideElements();
        this.getIndicatorElements();
        this.getPrevNextButtons();
        if (this.currentSlide > 0) {
            this.onShow(this.selected);
        }
    };
    TestimonialsGroupComponent.prototype.componentDidUnload = function () {
        var _this = this;
        if (this.slideElements && this.slideElements.length) {
            this.slideElements.forEach(function (element, i) {
                element.removeEventListener('click', _this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('click', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('click', this.nextListener);
        }
    };
    TestimonialsGroupComponent.prototype.getPrevNextButtons = function () {
        var _this = this;
        this.prevElement = this.element.querySelector(this.prevSelector);
        this.nextElement = this.element.querySelector(this.nextSelector);
        if (this.prevElement) {
            this.prevListener = this.addClickHandler(this.prevElement, function () { return _this.prev(); });
        }
        if (this.nextElement) {
            this.nextListener = this.addClickHandler(this.nextElement, function () { return _this.next(); });
        }
    };
    TestimonialsGroupComponent.prototype.getSlideElements = function () {
        this.slideElements = this.element.querySelectorAll(this.slideSelector);
    };
    TestimonialsGroupComponent.prototype.getIndicatorElements = function () {
        var _this = this;
        this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
        this.indicatorElements.forEach(function (element, i) {
            _this.indicatorClickHandler(element, i);
        });
    };
    TestimonialsGroupComponent.prototype.addClickHandler = function (element, fn) {
        if (fn === void 0) { fn = this.next; }
        if (!element)
            return;
        var eventHandler = function () {
            if (fn) {
                fn();
            }
        };
        element.addEventListener('click', eventHandler);
        return eventHandler;
    };
    TestimonialsGroupComponent.prototype.indicatorClickHandler = function (element, index) {
        var _this = this;
        if (!element)
            return;
        var eventHandler = function () {
            _this.onShow(index);
        };
        element.addEventListener('click', eventHandler);
        this.listeners[index] = eventHandler;
    };
    TestimonialsGroupComponent.prototype.addActiveClass = function (element) {
        setTimeout(function () { element.classList.add(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        {
            element.classList.remove(TOGGLE_CLASSES.inactive);
        }
    };
    TestimonialsGroupComponent.prototype.removeActiveClass = function (elements) {
        if (elements === void 0) { elements = this.slideElements; }
        elements.forEach(function (item) {
            setTimeout(function () { item.classList.remove(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        });
    };
    TestimonialsGroupComponent.prototype.onShow = function (index) {
        if (index === void 0) { index = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.removeActiveClass();
                if (this.indicatorElements && this.indicatorElements.length) {
                    this.removeActiveClass(this.indicatorElements);
                    this.addActiveClass(this.indicatorElements[index]);
                }
                this.indicatorClickHandler(this.slideElements[index], index);
                this.addActiveClass(this.slideElements[index]);
                this.currentSlide = index;
                this.showSlide.emit({
                    current: this.currentSlide,
                    element: this.slideElements[index]
                });
                return [2 /*return*/];
            });
        });
    };
    TestimonialsGroupComponent.prototype.onHide = function (index) {
        if (index === void 0) { index = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.removeActiveClass();
                if (this.indicatorElements && this.indicatorElements.length) {
                    this.removeActiveClass(this.indicatorElements);
                }
                this.hideSlide.emit({
                    current: this.currentSlide,
                    element: this.slideElements[index]
                });
                this.currentSlide = 0;
                return [2 /*return*/];
            });
        });
    };
    TestimonialsGroupComponent.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
                    this.onShow(0);
                }
                else {
                    this.onShow(this.currentSlide + 1);
                }
                return [2 /*return*/];
            });
        });
    };
    TestimonialsGroupComponent.prototype.prev = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.currentSlide <= 0)
                    ;
                else {
                    this.onShow(this.currentSlide - 1);
                }
                return [2 /*return*/];
            });
        });
    };
    TestimonialsGroupComponent.prototype.render = function () {
        var _this = this;
        var testimonials = Array.from(this.element.querySelectorAll(TestimonialsComponent.TAG_NAME));
        return (h(Host, { id: this.groupId, class: "carousel slide", "data-ride": "carousel" }, h("div", { class: "full_container" }, h("snt-layout", null, h("h2", { class: "testimonial-title" }, this.groupHeadline), h("div", { class: "carousel-slider-wrap" }, h("div", { class: "carousel-inner" }, h("slot", null))), h("div", { class: "testimonial-controls " + (testimonials.length > 1 ? '' : 'd-none') }, h("a", { class: "carousel-control-prev", href: "javascript:void(0);", role: "button", "data-slide": "prev" }, h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }, h("i", { class: "arrows left" })), h("span", { class: "sr-only" }, "Previous")), h("ol", { class: "carousel-indicators" }, testimonials.map(function (_elem, index) { return h("li", { "data-target": "#" + _this.groupId, "data-slide-to": index, class: (index == 0) ? 'active' : '' }); })), h("a", { class: "carousel-control-next", href: "javascript:void(0);", role: "button", "data-slide": "next" }, h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }, h("i", { class: "arrows right" })), h("span", { class: "sr-only" }, "Next")))))));
    };
    Object.defineProperty(TestimonialsGroupComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TestimonialsGroupComponent;
}());
TestimonialsGroupComponent.style = testimonialsComponentCss$1;
export { TestimonialsComponent as testimonial_quote, TestimonialsGroupComponent as testimonials_group };
