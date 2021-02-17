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
import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
var multiColumnMixedComponentCss = "snt-multi-column-mixed{display:block;}snt-multi-column-mixed.demo .row{outline:1px dashed red;outline-offset:2px}snt-multi-column-mixed.demo .column{outline:1px dashed orange}snt-multi-column-mixed .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch}snt-multi-column-mixed .column.last-row{margin-bottom:0px}snt-multi-column-mixed .d-none{display:none}snt-multi-column-mixed snt-icon-copy{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-multi-column-mixed .column snt-image-column{display:none}snt-multi-column-mixed snt-image img{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}snt-multi-column-mixed snt-image-column .image-panel{position:relative;width:100%;overflow:hidden}snt-multi-column-mixed snt-action-button{width:100%}snt-multi-column-mixed snt-action-button snt-button{width:100%}snt-multi-column-mixed snt-action-button snt-button button{width:100% !important}@media (min-width: 768px){snt-multi-column-mixed .column snt-image-column{display:none;margin-bottom:0px}snt-multi-column-mixed.with-gutter .row{margin-left:-13px;margin-right:-13px}}@media (min-width: 1024px){snt-multi-column-mixed .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-multi-column-mixed .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-multi-column-mixed.with-gutter .row{margin-left:-15px;margin-right:-15px}}snt-multi-column-mixed.neutral-fill snt-layout,.neutral-fill snt-multi-column-mixed snt-layout{background-color:#ffffff}snt-multi-column-mixed.light-fill snt-layout,.light-fill snt-multi-column-mixed snt-layout{background-color:#ffffff}snt-multi-column-mixed.float-fill snt-layout,.float-fill snt-multi-column-mixed snt-layout{background-color:#f8f8f8}snt-multi-column-mixed.float-fill snt-layout .column,.float-fill snt-multi-column-mixed snt-layout .column{background-color:#ffffff}snt-multi-column-mixed .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;margin-bottom:26px}snt-multi-column-mixed .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 15px);-ms-flex-item-align:center;align-self:center}@media (min-width: 0){snt-multi-column-mixed .column.extra-small-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.extra-small-1>*{width:100%}snt-multi-column-mixed .column.extra-small-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.extra-small-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.extra-small-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.extra-small-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.extra-small-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-small-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.extra-small-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-small-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 576px){snt-multi-column-mixed .column.small-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.small-1>*{width:100%}snt-multi-column-mixed .column.small-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.small-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.small-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.small-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.small-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.small-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.small-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.small-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 768px){snt-multi-column-mixed .column.medium-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.medium-1>*{width:100%}snt-multi-column-mixed .column.medium-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.medium-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.medium-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.medium-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.medium-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.medium-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.medium-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.medium-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1024px){snt-multi-column-mixed .column.large-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.large-1>*{width:100%}snt-multi-column-mixed .column.large-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.large-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.large-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.large-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.large-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.large-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.large-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.large-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1440px){snt-multi-column-mixed .column.extra-large-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}snt-multi-column-mixed .column.extra-large-1>*{width:100%}snt-multi-column-mixed .column.extra-large-2{-ms-flex:0 0 calc(100%/2);flex:0 0 calc(100%/2);max-width:calc(100%/2)}snt-multi-column-mixed .column.extra-large-2:nth-child(2n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-2:nth-child(2n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-3{-ms-flex:0 0 calc(100%/3);flex:0 0 calc(100%/3);max-width:calc(100%/3)}snt-multi-column-mixed .column.extra-large-3:nth-child(3n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-3:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-4{-ms-flex:0 0 calc(100%/4);flex:0 0 calc(100%/4);max-width:calc(100%/4)}snt-multi-column-mixed .column.extra-large-4:nth-child(4n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-4:nth-child(4n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-5{-ms-flex:0 0 calc(100%/5);flex:0 0 calc(100%/5);max-width:calc(100%/5)}snt-multi-column-mixed .column.extra-large-5:nth-child(5n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-5:nth-child(5n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-multi-column-mixed .column.extra-large-6{-ms-flex:0 0 calc(100%/6);flex:0 0 calc(100%/6);max-width:calc(100%/6)}snt-multi-column-mixed .column.extra-large-6:nth-child(6n+1)>*{-ms-flex-item-align:start;align-self:flex-start}snt-multi-column-mixed .column.extra-large-6:nth-child(6n)>*{-ms-flex-item-align:end;align-self:flex-end}}@media (min-width: 1024px){snt-multi-column-mixed .column:not(.last-row){margin-bottom:30px}}@media (min-width: 0){snt-multi-column-mixed.with-gutter .column.extra-small-2{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/2) - 0px);flex:0 0 calc(calc(100%/2) - 0px);max-width:calc(calc(100%/2) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-3{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/3) - 0px);flex:0 0 calc(calc(100%/3) - 0px);max-width:calc(calc(100%/3) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-4{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/4) - 0px);flex:0 0 calc(calc(100%/4) - 0px);max-width:calc(calc(100%/4) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-5{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/5) - 0px);flex:0 0 calc(calc(100%/5) - 0px);max-width:calc(calc(100%/5) - 0px)}snt-multi-column-mixed.with-gutter .column.extra-small-6{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/6) - 0px);flex:0 0 calc(calc(100%/6) - 0px);max-width:calc(calc(100%/6) - 0px)}}@media (min-width: 576px){snt-multi-column-mixed.with-gutter .column.small-2{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/2) - 0px);flex:0 0 calc(calc(100%/2) - 0px);max-width:calc(calc(100%/2) - 0px)}snt-multi-column-mixed.with-gutter .column.small-3{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/3) - 0px);flex:0 0 calc(calc(100%/3) - 0px);max-width:calc(calc(100%/3) - 0px)}snt-multi-column-mixed.with-gutter .column.small-4{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/4) - 0px);flex:0 0 calc(calc(100%/4) - 0px);max-width:calc(calc(100%/4) - 0px)}snt-multi-column-mixed.with-gutter .column.small-5{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/5) - 0px);flex:0 0 calc(calc(100%/5) - 0px);max-width:calc(calc(100%/5) - 0px)}snt-multi-column-mixed.with-gutter .column.small-6{margin-left:0px;margin-right:0px;-ms-flex:0 0 calc(calc(100%/6) - 0px);flex:0 0 calc(calc(100%/6) - 0px);max-width:calc(calc(100%/6) - 0px)}}@media (min-width: 768px){snt-multi-column-mixed.with-gutter .column.medium-2{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/2) - 26px);flex:0 0 calc(calc(100%/2) - 26px);max-width:calc(calc(100%/2) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-3{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/3) - 26px);flex:0 0 calc(calc(100%/3) - 26px);max-width:calc(calc(100%/3) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-4{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/4) - 26px);flex:0 0 calc(calc(100%/4) - 26px);max-width:calc(calc(100%/4) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-5{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/5) - 26px);flex:0 0 calc(calc(100%/5) - 26px);max-width:calc(calc(100%/5) - 26px)}snt-multi-column-mixed.with-gutter .column.medium-6{margin-left:13px;margin-right:13px;-ms-flex:0 0 calc(calc(100%/6) - 26px);flex:0 0 calc(calc(100%/6) - 26px);max-width:calc(calc(100%/6) - 26px)}}@media (min-width: 1024px){snt-multi-column-mixed.with-gutter .column.large-2{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/2) - 30px);flex:0 0 calc(calc(100%/2) - 30px);max-width:calc(calc(100%/2) - 30px)}snt-multi-column-mixed.with-gutter .column.large-3{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/3) - 30px);flex:0 0 calc(calc(100%/3) - 30px);max-width:calc(calc(100%/3) - 30px)}snt-multi-column-mixed.with-gutter .column.large-4{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/4) - 30px);flex:0 0 calc(calc(100%/4) - 30px);max-width:calc(calc(100%/4) - 30px)}snt-multi-column-mixed.with-gutter .column.large-5{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/5) - 30px);flex:0 0 calc(calc(100%/5) - 30px);max-width:calc(calc(100%/5) - 30px)}snt-multi-column-mixed.with-gutter .column.large-6{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/6) - 30px);flex:0 0 calc(calc(100%/6) - 30px);max-width:calc(calc(100%/6) - 30px)}}@media (min-width: 1440px){snt-multi-column-mixed.with-gutter .column.extra-large-2{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/2) - 30px);flex:0 0 calc(calc(100%/2) - 30px);max-width:calc(calc(100%/2) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-3{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/3) - 30px);flex:0 0 calc(calc(100%/3) - 30px);max-width:calc(calc(100%/3) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-4{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/4) - 30px);flex:0 0 calc(calc(100%/4) - 30px);max-width:calc(calc(100%/4) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-5{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/5) - 30px);flex:0 0 calc(calc(100%/5) - 30px);max-width:calc(calc(100%/5) - 30px)}snt-multi-column-mixed.with-gutter .column.extra-large-6{margin-left:15px;margin-right:15px;-ms-flex:0 0 calc(calc(100%/6) - 30px);flex:0 0 calc(calc(100%/6) - 30px);max-width:calc(calc(100%/6) - 30px)}}";
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
var MultiColumnComponent = /** @class */ (function () {
    function MultiColumnComponent(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    MultiColumnComponent.prototype.componentWillLoad = function () {
        if (this.columnCount)
            this.columnCountObj = JSON.parse(this.columnCount);
    };
    MultiColumnComponent.prototype.componentDidLoad = function () {
        this.registerChildren();
        this.adjustLayout();
    };
    MultiColumnComponent.prototype.registerChildren = function () {
        var _this = this;
        this.flexGrid.childNodes.forEach(function (childEl) {
            if (childEl.classList && childEl.classList.contains('column')) {
                childEl.childNodes.forEach(function (columnChildEl) {
                    if (columnChildEl.tagName === 'SNT-ICON-COPY') {
                        columnChildEl.registerViewport(_this.layoutEl);
                    }
                });
            }
        });
    };
    MultiColumnComponent.prototype.adjustLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var viewport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        viewport = this.getViewport();
                        Array.from(this.flexGrid.children).forEach(function (child) {
                            child.setAttribute('viewport', viewport);
                        });
                        this.toggleImages(viewport);
                        return [4 /*yield*/, this.tagLastRow(viewport)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.setColumns()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MultiColumnComponent.prototype.getViewport = function () {
        var viewportBreakpoints = [
            { breakpoint: ComponentConstants.EXTRA_LARGE.getLeft(), viewport: 'extra-large' },
            { breakpoint: ComponentConstants.LARGE.getLeft(), viewport: 'large' },
            { breakpoint: ComponentConstants.MEDIUM.getLeft(), viewport: 'medium' },
            { breakpoint: ComponentConstants.SMALL.getLeft(), viewport: 'small' },
            { breakpoint: ComponentConstants.EXTRA_SMALL.getLeft(), viewport: 'extra-small' }
        ];
        var currentViewBreakpoint = viewportBreakpoints.find(function (viewBreakpoint) { return window.innerWidth >= viewBreakpoint.breakpoint; });
        return currentViewBreakpoint.viewport;
    };
    // TODO: Change into media queries
    MultiColumnComponent.prototype.toggleImages = function (viewport) {
        if (viewport == 'medium' || viewport == 'small') {
            this.hostElement.querySelectorAll('.column').forEach(function (item) {
                if (item.contains(item.querySelector('snt-image-column'))) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.hostElement.querySelectorAll('.column').forEach(function (item) {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            });
        }
    };
    // TODO: Rework this section to prevent repait for performance purposes
    MultiColumnComponent.prototype.tagLastRow = function (viewport) {
        return __awaiter(this, void 0, void 0, function () {
            var columnElements, numberOfColumnsInLastRow, startingElement, index;
            return __generator(this, function (_a) {
                this.hostElement.querySelectorAll('.column').forEach(function (containerEl) {
                    containerEl.classList.remove('last-row');
                });
                columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
                numberOfColumnsInLastRow = columnElements.length % this.columnCountObj[viewport] === 0
                    ? Math.min(columnElements.length, this.columnCountObj[viewport])
                    : columnElements.length % this.columnCountObj[viewport];
                startingElement = columnElements.length - numberOfColumnsInLastRow;
                for (index = startingElement; index < columnElements.length; index++) {
                    columnElements[index].classList.add('last-row');
                }
                return [2 /*return*/];
            });
        });
    };
    MultiColumnComponent.prototype.setColumns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var classList, _i, _a, _b, key, value;
            return __generator(this, function (_c) {
                classList = [];
                for (_i = 0, _a = Object.entries(this.columnCountObj); _i < _a.length; _i++) {
                    _b = _a[_i], key = _b[0], value = _b[1];
                    classList.push(key + "-" + value);
                }
                this.hostElement.querySelectorAll('.column').forEach(function (containerEl) {
                    var _a;
                    (_a = containerEl.classList).add.apply(_a, classList);
                });
                return [2 /*return*/];
            });
        });
    };
    MultiColumnComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { ref: function (el) { return _this.layoutEl = el; } }, h("div", { class: "row", ref: function (el) { return _this.flexGrid = el; } }, h("slot", null)))));
    };
    Object.defineProperty(MultiColumnComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return MultiColumnComponent;
}());
MultiColumnComponent.TAG_NAME = "snt-multi-column-mixed";
MultiColumnComponent.style = multiColumnMixedComponentCss;
export { MultiColumnComponent as snt_multi_column_mixed };
