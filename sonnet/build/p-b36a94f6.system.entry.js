var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(t){return function(e){return a([t,e])}}function a(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(l){u=[6,l];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-286eaa2f.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.g}],execute:function(){var i="";var o=undefined&&undefined.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{a(r.next(t))}catch(e){o(e)}}function l(t){try{a(r["throw"](t))}catch(e){o(e)}}function a(t){t.done?n(t.value):i(t.value).then(u,l)}a((r=r.apply(t,e||[])).next())}))};var u=t("snt_faq_block_list",function(){function t(t){e(this,t);this.faqBlockList=[];this.menuAriaLabel=""}t.prototype.componentDidRender=function(){return o(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this.multiColumnEl.querySelector("snt-layout");return[4,this.multiColumnEl.tagLastRow(t.getAttribute("viewport"))];case 1:e.sent();return[4,this.multiColumnEl.setColumns()];case 2:e.sent();return[2]}}))}))};t.prototype.render=function(){var t=this;var e='{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';return[n("snt-multi-column-mixed",{ref:function(e){return t.multiColumnEl=e},"aria-label":this.menuAriaLabel,class:"with-gutter","column-count":e},this.faqBlockList.map((function(t){return n("div",{class:"column"},n("snt-faq-block",{"title-text":t.titleText,"body-text":t.bodyText,"block-link":t.blockLink,"articles-count":t.articlesCount}))})))]};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());u.TAG_NAME="snt-faq-block-list";u.style=i}}}));