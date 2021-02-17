'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const IconCopyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageSrc = '';
        this.imgAlt = '';
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "image-panel" }, index.h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    }
};
IconCopyComponent.TAG_NAME = "snt-image-column";

const threeColumnMixedComponentCss = "snt-three-column-mixed .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch}snt-three-column-mixed .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;margin-bottom:26px}snt-three-column-mixed .last-row{margin-bottom:0px}snt-three-column-mixed .column.row-start>*{-ms-flex-item-align:start;align-self:flex-start}snt-three-column-mixed .column.row-end>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed .d-none{display:none}snt-three-column-mixed snt-icon-copy{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed .column snt-image-column{display:none}snt-three-column-mixed snt-image img{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}snt-three-column-mixed snt-image-column .image-panel{position:relative;width:100%;overflow:hidden}snt-three-column-mixed snt-action-button{width:100%}snt-three-column-mixed snt-action-button snt-button{width:100%}snt-three-column-mixed snt-action-button snt-button button{width:100% !important}snt-three-column-mixed snt-blog snt-image img{position:relative;top:unset}snt-three-column-mixed snt-layout[viewport=medium] .column snt-image-column{display:none;margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=medium] .column{-ms-flex:1 0 50%;flex:1 0 50%;max-width:50%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=medium] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 15px)}snt-three-column-mixed snt-layout[viewport=medium] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=large] .column{-ms-flex:1 0 33.33%;flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n+2)>*{-ms-flex-item-align:center;align-self:center}snt-three-column-mixed snt-layout[viewport=large] .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed snt-layout[viewport=large] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=extra-large] .column{-ms-flex:1 0 33.33%;flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=extra-large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n+2)>*{-ms-flex-item-align:center;align-self:center}snt-three-column-mixed snt-layout[viewport=extra-large] .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed snt-layout[viewport=extra-large] .last-row{margin-bottom:0px}snt-three-column-mixed.neutral-fill snt-layout,.neutral-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.light-fill snt-layout,.light-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.float-fill snt-layout,.float-fill snt-three-column-mixed snt-layout{background-color:#f8f8f8}";

const ThreeColumnComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.styleClasses = StringUtils.StringUtils.empty();
    }
    componentDidLoad() {
        this.registerChildren();
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
    onResize(event) {
        const viewport = event.detail.viewport;
        Array.from(this.flexGrid.children).forEach((child) => {
            child.setAttribute('viewport', viewport);
        });
        this.toggleImages(viewport);
        this.tagLastRow(viewport);
        this.setStartAndEnd(viewport);
    }
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
    tagLastRow(viewport) {
        const columnCount = {
            'extra-small': 1,
            'small': 1,
            'medium': 2,
            'large': 3,
            'extra-large': 3
        };
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('last-row');
        });
        const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
        const numberOfColumnsInLastRow = columnElements.length % columnCount[viewport] === 0
            ? columnCount[viewport]
            : columnElements.length % columnCount[viewport];
        const startingElement = columnElements.length - numberOfColumnsInLastRow;
        for (let index = startingElement; index < columnElements.length; index++) {
            columnElements[index].classList.add('last-row');
        }
    }
    setStartAndEnd(viewport) {
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('row-start');
            containerEl.classList.remove('row-end');
        });
        if (viewport !== 'medium') {
            return;
        }
        else {
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            for (let index = 0; index < columnElements.length; index++) {
                if (index % 2 === 0) {
                    columnElements[index].classList.add('row-start');
                }
                else {
                    columnElements[index].classList.add('row-end');
                }
            }
        }
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("snt-layout", { ref: (el) => this.layoutEl = el }, index.h("div", { class: "row", ref: el => this.flexGrid = el }, index.h("slot", null)))));
    }
    get hostElement() { return index.getElement(this); }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column-mixed";
ThreeColumnComponent.style = threeColumnMixedComponentCss;

exports.snt_image_column = IconCopyComponent;
exports.snt_three_column_mixed = ThreeColumnComponent;
