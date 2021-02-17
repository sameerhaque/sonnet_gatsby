import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';

const multiColumnMixedComponentCss = "snt-multi-column-mixed{display:block;}snt-multi-column-mixed.demo .row{outline:1px dashed red;outline-offset:2px}snt-multi-column-mixed.demo .column{outline:1px dashed orange}snt-multi-column-mixed .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch}snt-multi-column-mixed .column.last-row{margin-bottom:0px}snt-multi-column-mixed .d-none{display:none}snt-multi-column-mixed snt-icon-copy{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-multi-column-mixed .column snt-image-column{display:none}snt-multi-column-mixed snt-image img{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}snt-multi-column-mixed snt-image-column .image-panel{position:relative;width:100%;overflow:hidden}snt-multi-column-mixed snt-action-button{width:100%}snt-multi-column-mixed snt-action-button snt-button{width:100%}snt-multi-column-mixed snt-action-button snt-button button{width:100% !important}@media (min-width: 768px){snt-multi-column-mixed .column snt-image-column{display:none;margin-bottom:0px}snt-multi-column-mixed.with-gutter .row{margin-left:-13px;margin-right:-13px}}@media (min-width: 1024px){snt-multi-column-mixed .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-multi-column-mixed .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-multi-column-mixed.with-gutter .row{margin-left:-15px;margin-right:-15px}}snt-multi-column-mixed.neutral-fill snt-layout,.neutral-fill snt-multi-column-mixed snt-layout{background-color:#ffffff}snt-multi-column-mixed.light-fill snt-layout,.light-fill snt-multi-column-mixed snt-layout{background-color:#ffffff}snt-multi-column-mixed.float-fill snt-layout,.float-fill snt-multi-column-mixed snt-layout{background-color:#f8f8f8}snt-multi-column-mixed.float-fill snt-layout .column,.float-fill snt-multi-column-mixed snt-layout .column{background-color:#ffffff}snt-multi-column-mixed .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;margin-bottom:26px}snt-multi-column-mixed .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 15px);-ms-flex-item-align:center;align-self:center}@media (min-width: 0){snt-multi-column-mixed .column.extra-small-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.extra-small-1>*{width:100%}snt-multi-column-mixed .column.extra-small-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.extra-small-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.extra-small-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.extra-small-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.extra-small-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.extra-small-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 576px){snt-multi-column-mixed .column.small-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.small-1>*{width:100%}snt-multi-column-mixed .column.small-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.small-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.small-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.small-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.small-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.small-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 768px){snt-multi-column-mixed .column.medium-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.medium-1>*{width:100%}snt-multi-column-mixed .column.medium-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.medium-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.medium-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.medium-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.medium-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.medium-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1024px){snt-multi-column-mixed .column.large-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.large-1>*{width:100%}snt-multi-column-mixed .column.large-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.large-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.large-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.large-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.large-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.large-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1440px){snt-multi-column-mixed .column.extra-large-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.extra-large-1>*{width:100%}snt-multi-column-mixed .column.extra-large-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.extra-large-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.extra-large-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.extra-large-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.extra-large-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.extra-large-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1024px){snt-multi-column-mixed .column:not(.last-row){margin-bottom:30px}}@media (min-width: 0){snt-multi-column-mixed.with-gutter .column.extra-small-2{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/2) - 0px);flex:0 0 calc(calc(100%/2) - 0px);max-width:calc(calc(100%/2) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-3{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/3) - 0px);flex:0 0 calc(calc(100%/3) - 0px);max-width:calc(calc(100%/3) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-4{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/4) - 0px);flex:0 0 calc(calc(100%/4) - 0px);max-width:calc(calc(100%/4) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-5{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/5) - 0px);flex:0 0 calc(calc(100%/5) - 0px);max-width:calc(calc(100%/5) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-6{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/6) - 0px);flex:0 0 calc(calc(100%/6) - 0px);max-width:calc(calc(100%/6) - 0px)}}@media (min-width: 576px){snt-multi-column-mixed.with-gutter .column.small-2{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/2) - 0px);flex:0 0 calc(calc(100%/2) - 0px);max-width:calc(calc(100%/2) - 0px)}snt-multi-column-mixed.with-gutter .column.small-3{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/3) - 0px);flex:0 0 calc(calc(100%/3) - 0px);max-width:calc(calc(100%/3) - 0px)}snt-multi-column-mixed.with-gutter .column.small-4{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/4) - 0px);flex:0 0 calc(calc(100%/4) - 0px);max-width:calc(calc(100%/4) - 0px)}snt-multi-column-mixed.with-gutter .column.small-5{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/5) - 0px);flex:0 0 calc(calc(100%/5) - 0px);max-width:calc(calc(100%/5) - 0px)}snt-multi-column-mixed.with-gutter .column.small-6{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/6) - 0px);flex:0 0 calc(calc(100%/6) - 0px);max-width:calc(calc(100%/6) - 0px)}}@media (min-width: 768px){snt-multi-column-mixed.with-gutter .column.medium-2{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/2) - 26px);flex:0 0 calc(calc(100%/2) - 26px);max-width:calc(calc(100%/2) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-3{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/3) - 26px);flex:0 0 calc(calc(100%/3) - 26px);max-width:calc(calc(100%/3) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-4{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/4) - 26px);flex:0 0 calc(calc(100%/4) - 26px);max-width:calc(calc(100%/4) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-5{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/5) - 26px);flex:0 0 calc(calc(100%/5) - 26px);max-width:calc(calc(100%/5) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-6{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/6) - 26px);flex:0 0 calc(calc(100%/6) - 26px);max-width:calc(calc(100%/6) - 26px)}}@media (min-width: 1024px){snt-multi-column-mixed.with-gutter .column.large-2{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/2) - 30px);flex:0 0 calc(calc(100%/2) - 30px);max-width:calc(calc(100%/2) - 30px)}snt-multi-column-mixed.with-gutter .column.large-3{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/3) - 30px);flex:0 0 calc(calc(100%/3) - 30px);max-width:calc(calc(100%/3) - 30px)}snt-multi-column-mixed.with-gutter .column.large-4{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/4) - 30px);flex:0 0 calc(calc(100%/4) - 30px);max-width:calc(calc(100%/4) - 30px)}snt-multi-column-mixed.with-gutter .column.large-5{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/5) - 30px);flex:0 0 calc(calc(100%/5) - 30px);max-width:calc(calc(100%/5) - 30px)}snt-multi-column-mixed.with-gutter .column.large-6{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/6) - 30px);flex:0 0 calc(calc(100%/6) - 30px);max-width:calc(calc(100%/6) - 30px)}}@media (min-width: 1440px){snt-multi-column-mixed.with-gutter .column.extra-large-2{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/2) - 30px);flex:0 0 calc(calc(100%/2) - 30px);max-width:calc(calc(100%/2) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-3{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/3) - 30px);flex:0 0 calc(calc(100%/3) - 30px);max-width:calc(calc(100%/3) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-4{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/4) - 30px);flex:0 0 calc(calc(100%/4) - 30px);max-width:calc(calc(100%/4) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-5{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/5) - 30px);flex:0 0 calc(calc(100%/5) - 30px);max-width:calc(calc(100%/5) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-6{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/6) - 30px);flex:0 0 calc(calc(100%/6) - 30px);max-width:calc(calc(100%/6) - 30px)}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const MultiColumnComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    componentWillLoad() {
        if (this.columnCount)
            this.columnCountObj = JSON.parse(this.columnCount);
    }
    componentDidLoad() {
        this.registerChildren();
        this.adjustLayout();
    }
    registerChildren() {
        this.flexGrid.childNodes.forEach((childEl) => {
            if (childEl.classList && childEl.classList.contains('column')) {
                childEl.childNodes.forEach((columnChildEl) => {
                    if (columnChildEl.tagName === 'SNT-ICON-COPY') {
                        columnChildEl.registerViewport(this.layoutEl);
                    }
                });
            }
        });
    }
    adjustLayout() {
        return __awaiter(this, void 0, void 0, function* () {
            let viewport = this.getViewport();
            Array.from(this.flexGrid.children).forEach((child) => {
                child.setAttribute('viewport', viewport);
            });
            this.toggleImages(viewport);
            yield this.tagLastRow(viewport);
            yield this.setColumns();
        });
    }
    getViewport() {
        const viewportBreakpoints = [
            { breakpoint: ComponentConstants.EXTRA_LARGE.getLeft(), viewport: 'extra-large' },
            { breakpoint: ComponentConstants.LARGE.getLeft(), viewport: 'large' },
            { breakpoint: ComponentConstants.MEDIUM.getLeft(), viewport: 'medium' },
            { breakpoint: ComponentConstants.SMALL.getLeft(), viewport: 'small' },
            { breakpoint: ComponentConstants.EXTRA_SMALL.getLeft(), viewport: 'extra-small' }
        ];
        const currentViewBreakpoint = viewportBreakpoints.find((viewBreakpoint) => window.innerWidth >= viewBreakpoint.breakpoint);
        return currentViewBreakpoint.viewport;
    }
    // TODO: Change into media queries
    toggleImages(viewport) {
        if (viewport == 'medium' || viewport == 'small') {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.contains(item.querySelector('snt-image-column'))) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            });
        }
    }
    // TODO: Rework this section to prevent repait for performance purposes
    tagLastRow(viewport) {
        return __awaiter(this, void 0, void 0, function* () {
            this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
                containerEl.classList.remove('last-row');
            });
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            const numberOfColumnsInLastRow = columnElements.length % this.columnCountObj[viewport] === 0
                ? Math.min(columnElements.length, this.columnCountObj[viewport])
                : columnElements.length % this.columnCountObj[viewport];
            const startingElement = columnElements.length - numberOfColumnsInLastRow;
            for (let index = startingElement; index < columnElements.length; index++) {
                columnElements[index].classList.add('last-row');
            }
        });
    }
    setColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            const classList = [];
            for (const [key, value] of Object.entries(this.columnCountObj)) {
                classList.push(`${key}-${value}`);
            }
            this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
                containerEl.classList.add(...classList);
            });
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { ref: (el) => this.layoutEl = el }, h("div", { class: "row", ref: el => this.flexGrid = el }, h("slot", null)))));
    }
    get hostElement() { return getElement(this); }
};
MultiColumnComponent.TAG_NAME = "snt-multi-column-mixed";
MultiColumnComponent.style = multiColumnMixedComponentCss;

export { MultiColumnComponent as snt_multi_column_mixed };
