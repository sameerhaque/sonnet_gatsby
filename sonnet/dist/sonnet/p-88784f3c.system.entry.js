System.register(["./p-286eaa2f.system.js"],(function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.r;i=t.h;n=t.g}],execute:function(){var r='snt-tabs .title{color:#323232;position:relative;text-decoration:none;cursor:pointer;background-color:transparent;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}snt-tabs .title:after{content:attr(data-text);content:attr(data-text)/"";height:0;visibility:hidden;overflow:hidden;speak:never;speak:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-family:"Averta-Regular", sans-serif}snt-tabs .title:before{content:"";position:absolute;width:100%;height:2px;bottom:-1px;left:0;background-color:#147582;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-tabs .title:hover{color:#147582;font-family:"Averta-ExtraBold", sans-serif;text-decoration:none}snt-tabs .title[aria-selected=true]{text-decoration:none}snt-tabs .title[aria-selected=true]:before{background-color:#147582;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-tabs .title:focus{z-index:1;outline:2px solid #147582;outline-offset:5px}snt-tabs .panel:focus{outline:1px solid #323232}snt-tabs .panel[aria-hidden=true]{display:none}.tab-wrapper{background-color:#f5f5f5;display:block;width:100%;clear:both;float:right}.tab-wrapper .tab-header{width:92%;display:-ms-flexbox;display:flex;text-align:center;padding:15px 4%;padding-bottom:0}.tab-wrapper .tab-header .tab-item{-ms-flex-positive:1;flex-grow:1;position:relative;border-right:1px solid #323232}.tab-wrapper .tab-header .tab-item:last-child{border-right:0}.panel-wrapper{padding:0}';var a=t("snt_tabs",function(){function t(t){var i=this;e(this,t);this.findFirstSelectedTab=function(){var t;for(var e=0,n=i.tabs.entries();e<n.length;e++){var r=n[e],a=r[0],s=r[1];s.setAttribute("role","tab");if(s.classList.contains("selected")){s.classList.remove("selected");t=a}}return t};this.selectTab=function(t){if(t===void 0){t=null}for(var e=0,n=void 0;n=i.tabs[e];e=e+1){var r=e===t;n.setAttribute("tabindex",r?0:-1);n.setAttribute("aria-selected",r);i.panels[e].setAttribute("aria-hidden",!r)}};this.tabTitleClick=function(t){if(t.target.classList.contains("title")){i.selected=i.tabs.indexOf(t.target);t.target.focus()}};this.tabKeyDown=function(t){var e;switch(t.code){case"ArrowUp":case"ArrowLeft":t.preventDefault();e=i.selected-1;e=e<0?i.tabs.length-1:e;i.tabs[e].click();break;case"ArrowDown":case"ArrowRight":t.preventDefault();e=i.selected+1;i.tabs[e%i.tabs.length].click();break}}}t.prototype.onSelectedChange=function(t){this.selectTab(t)};t.prototype.componentDidLoad=function(){var t=this;this.el.setAttribute("role","tablist");var e=Array.from(this.el.querySelectorAll(".title"));var i=Array.from(this.el.querySelectorAll(".panel"));this.tabs=e;this.panels=i;this.selected=this.findFirstSelectedTab();e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();t.tabTitleClick(e)}));e.addEventListener("keydown",(function(e){t.tabKeyDown(e)}));e.setAttribute("id",e.id);e.setAttribute("aria-controls",e.id+"-tab");for(var i=0,n=t.panels.entries();i<n.length;i++){var r=n[i],a=r[0],s=r[1];s.setAttribute("role","tabpanel");s.setAttribute("aria-labelledby",e.textContent);s.setAttribute("id",e.id+"-tab"+a)}}))};t.prototype.componentDidUnload=function(){var t=this;var e=Array.from(this.el.querySelectorAll(".title"));e.forEach((function(e){e.removeEventListener("click",(function(e){t.tabTitleClick(e)}))}));e.forEach((function(e){e.removeEventListener("click",(function(e){t.tabKeyDown(e)}))}))};t.prototype.render=function(){return[i("snt-layout",{padding:"remove-sides"},i("div",{class:"tab-wrapper"},i("slot",null)))]};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selected:["onSelectedChange"]}},enumerable:false,configurable:true});return t}());a.style=r}}}));