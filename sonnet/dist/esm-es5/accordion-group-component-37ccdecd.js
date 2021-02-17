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
import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { A as AccordionComponent, a as AccordionStateEnum } from './accordion-component-e4a51c50.js';
var accordionGroupComponentCss = ".white-fill snt-accordion-group,snt-accordion-group.white-fill{display:block;background-color:#ffffff}.neutral-fill snt-accordion-group,snt-accordion-group.neutral-fill{display:block;background-color:#f8f8f8}";
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
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(hostRef) {
        registerInstance(this, hostRef);
        this.multiExpand = false;
    }
    AccordionGroupComponent.prototype.expandAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                children = this.element.querySelectorAll(AccordionComponent.TAG_NAME + ":not([expanded])");
                children.forEach(function (child) {
                    child.expand().then(null);
                });
                return [2 /*return*/];
            });
        });
    };
    AccordionGroupComponent.prototype.collapseAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                children = this.element.querySelectorAll(AccordionComponent.TAG_NAME + "[expanded]");
                children.forEach(function (child) {
                    child.collapse().then(null);
                });
                return [2 /*return*/];
            });
        });
    };
    AccordionGroupComponent.prototype.addAccordion = function (accordion) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO: Add code to inject in position of other accordion
                this.element.appendChild(accordion);
                return [2 /*return*/];
            });
        });
    };
    AccordionGroupComponent.prototype.componentWillRender = function () {
        if (this.element) {
            if (!this.multiExpand) {
                var numberOfExpandedItems_1 = 0;
                this.element.querySelectorAll("snt-accordion").forEach(function (c) {
                    if (c.hasAttribute("expanded")) {
                        numberOfExpandedItems_1++;
                    }
                    if (numberOfExpandedItems_1 >= 2) {
                        c.expanded = false;
                    }
                });
            }
        }
    };
    AccordionGroupComponent.prototype.render = function () {
        return (h("snt-layout", null, h("slot", null)));
    };
    AccordionGroupComponent.prototype.onAccordionEvent = function (event) {
        if ((event.detail.state == AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {
            this.collapseSibling(event);
        }
    };
    AccordionGroupComponent.prototype.collapseSibling = function (event) {
        var children = this.element.querySelectorAll(AccordionComponent.TAG_NAME + "[expanded]");
        children.forEach(function (child) {
            if (child != event.target) {
                child.collapse().then(null);
            }
        });
    };
    Object.defineProperty(AccordionGroupComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return AccordionGroupComponent;
}());
AccordionGroupComponent.TAG_NAME = "snt-accordion-group";
AccordionGroupComponent.style = accordionGroupComponentCss;
export { AccordionGroupComponent as A };
