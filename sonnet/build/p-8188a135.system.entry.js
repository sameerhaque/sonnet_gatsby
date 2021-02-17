System.register(["./p-286eaa2f.system.js","./p-c52706bc.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js"],(function(t){"use strict";var e,n,l,o,i,s;return{setters:[function(t){e=t.r;n=t.h;l=t.H;o=t.g},function(){},function(t){i=t.S},function(t){s=t.W}],execute:function(){var r=t("snt_image_column",function(){function t(t){e(this,t);this.imageSrc="";this.imgAlt=""}t.prototype.render=function(){return n(l,null,n("div",{class:"image-panel"},n("snt-image",{"data-src":this.imageSrc,"img-alt":this.imgAlt})))};return t}());r.TAG_NAME="snt-image-column";var m="snt-three-column-mixed .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch}snt-three-column-mixed .column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;margin-bottom:26px}snt-three-column-mixed .last-row{margin-bottom:0px}snt-three-column-mixed .column.row-start>*{-ms-flex-item-align:start;align-self:flex-start}snt-three-column-mixed .column.row-end>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed .d-none{display:none}snt-three-column-mixed snt-icon-copy{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed .column snt-image-column{display:none}snt-three-column-mixed snt-image img{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}snt-three-column-mixed snt-image-column .image-panel{position:relative;width:100%;overflow:hidden}snt-three-column-mixed snt-action-button{width:100%}snt-three-column-mixed snt-action-button snt-button{width:100%}snt-three-column-mixed snt-action-button snt-button button{width:100% !important}snt-three-column-mixed snt-blog snt-image img{position:relative;top:unset}snt-three-column-mixed snt-layout[viewport=medium] .column snt-image-column{display:none;margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=medium] .column{-ms-flex:1 0 50%;flex:1 0 50%;max-width:50%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=medium] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 15px)}snt-three-column-mixed snt-layout[viewport=medium] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=large] .column{-ms-flex:1 0 33.33%;flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n+2)>*{-ms-flex-item-align:center;align-self:center}snt-three-column-mixed snt-layout[viewport=large] .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed snt-layout[viewport=large] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=extra-large] .column{-ms-flex:1 0 33.33%;flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=extra-large] .column>*{display:-ms-flexbox;display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n)>*{-ms-flex-item-align:end;align-self:flex-end}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n+2)>*{-ms-flex-item-align:center;align-self:center}snt-three-column-mixed snt-layout[viewport=extra-large] .column snt-image-column{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}snt-three-column-mixed snt-layout[viewport=extra-large] .last-row{margin-bottom:0px}snt-three-column-mixed.neutral-fill snt-layout,.neutral-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.light-fill snt-layout,.light-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.float-fill snt-layout,.float-fill snt-three-column-mixed snt-layout{background-color:#f8f8f8}";var a=t("snt_three_column_mixed",function(){function t(t){e(this,t);this.styleClasses=i.empty()}t.prototype.componentDidLoad=function(){this.registerChildren()};t.prototype.registerChildren=function(){var t=this;this.flexGrid.childNodes.forEach((function(e){if(e.classList&&e.classList.contains("column")){e.childNodes.forEach((function(e){if(e.tagName==="SNT-ICON-COPY"){e.registerViewport(t.layoutEl)}}))}}))};t.prototype.onResize=function(t){var e=t.detail.viewport;Array.from(this.flexGrid.children).forEach((function(t){t.setAttribute("viewport",e)}));this.toggleImages(e);this.tagLastRow(e);this.setStartAndEnd(e)};t.prototype.toggleImages=function(t){if(t=="medium"||t=="small"){this.hostElement.querySelectorAll(".column").forEach((function(t){if(t.contains(t.querySelector("snt-image-column"))){t.classList.add("d-none")}}))}else{this.hostElement.querySelectorAll(".column").forEach((function(t){if(t.classList.contains("d-none")){t.classList.remove("d-none")}}))}};t.prototype.tagLastRow=function(t){var e={"extra-small":1,small:1,medium:2,large:3,"extra-large":3};this.hostElement.querySelectorAll(".column").forEach((function(t){t.classList.remove("last-row")}));var n=this.hostElement.querySelectorAll(".column:not(.d-none)");var l=n.length%e[t]===0?e[t]:n.length%e[t];var o=n.length-l;for(var i=o;i<n.length;i++){n[i].classList.add("last-row")}};t.prototype.setStartAndEnd=function(t){this.hostElement.querySelectorAll(".column").forEach((function(t){t.classList.remove("row-start");t.classList.remove("row-end")}));if(t!=="medium"){return}else{var e=this.hostElement.querySelectorAll(".column:not(.d-none)");for(var n=0;n<e.length;n++){if(n%2===0){e[n].classList.add("row-start")}else{e[n].classList.add("row-end")}}}};t.prototype.render=function(){var t=this;return n(l,{class:s.generateClasses([],this.styleClasses)},n("snt-layout",{ref:function(e){return t.layoutEl=e}},n("div",{class:"row",ref:function(e){return t.flexGrid=e}},n("slot",null))))};Object.defineProperty(t.prototype,"hostElement",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());a.TAG_NAME="snt-three-column-mixed";a.style=m}}}));