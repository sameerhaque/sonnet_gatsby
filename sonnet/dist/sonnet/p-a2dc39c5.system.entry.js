System.register(["./p-286eaa2f.system.js","./p-c52706bc.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js","./p-326f6e68.system.js","./p-2bf73368.system.js"],(function(t){"use strict";var e,n,i,o,s,a,d,p,r,c,l;return{setters:[function(t){e=t.r;n=t.e;i=t.h;o=t.g},function(t){s=t.P;a=t.C},function(){},function(){},function(){},function(t){d=t.D;p=t.V;r=t.a;c=t.b;l=t.c}],execute:function(){var g="snt-layout{display:block;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box}snt-layout>.spacings{overflow:auto}snt-layout[viewport=extra-large] .spacings{padding:3.75em 8.438em}snt-layout[viewport=large] .spacings{padding:3.75em 4.438em}snt-layout[viewport=medium] .spacings{padding:2.5em 2.313em}snt-layout[viewport=small] .spacings{padding:2.5em 1.875em}snt-layout[viewport=extra-small] .spacings{padding:2.5em 1.875em}snt-layout[padding=none]>.spacings{padding:0}snt-layout[padding=top-only]>.spacings{padding-bottom:0}snt-layout[padding=bottom-only]>.spacings{padding-top:0}snt-layout[padding=remove-sides]>.spacings{padding-left:0;padding-right:0}snt-layout[padding=vertical-only]>.spacings{padding-top:0;padding-bottom:0}.two-column-combined{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.combined-bottom snt-layout>.spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){.combined-bottom snt-layout>.spacings{padding-bottom:0.938em !important}}.combined-top snt-layout>.spacings{padding-top:0.813em !important}@media (min-width: 1024px){.combined-top snt-layout>.spacings{padding-top:0.938em !important}}.no-top snt-layout>.spacings{padding-top:0 !important}.no-bottom snt-layout>.spacings{padding-bottom:0 !important}.no-padding snt-layout>.spacings{padding:0 !important}.no-sides snt-layout>.spacings{padding-left:0 !important;padding-right:0 !important}";var u=undefined&&undefined.__decorate||function(t,e,n,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)if(a=t[d])s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s;return o>3&&s&&Object.defineProperty(e,n,s),s};var m=undefined&&undefined.__metadata||function(t,e){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(t,e)};var f=t("snt_layout",function(){function t(t){e(this,t);this.viewportChanged=n(this,"viewportChanged",7)}t.prototype.onViewportChanged=function(t){this.viewportChanged.emit({viewport:t})};t.prototype.componentWillLoad=function(){this.context=new d;p.getInstance().register(this,this.getElements(),this.resize)};t.prototype.resize=function(){p.getInstance().process(this,this.context,this.getElements())};t.prototype.getElements=function(){return[s.of("element",this.element),s.of("element",window.document.body)]};t.prototype.render=function(){return i("div",{class:"spacings"}," ",i("slot",null)," ")};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{viewport:["onViewportChanged"]}},enumerable:false,configurable:true});return t}());u([r([c.newInstance().withWidth(a.EXTRA_SMALL.getLeft(),a.EXTRA_SMALL.getRight()).withAttributes(l.newInstance().with("viewport","extra-small").build()).build(),c.newInstance().withWidth(a.SMALL.getLeft(),a.SMALL.getRight()).withAttributes(l.newInstance().with("viewport","small").build()).build(),c.newInstance().withWidth(a.MEDIUM.getLeft(),a.MEDIUM.getRight()).withAttributes(l.newInstance().with("viewport","medium").build()).build(),c.newInstance().withWidth(a.LARGE.getLeft(),a.LARGE.getRight()).withAttributes(l.newInstance().with("viewport","large").build()).build(),c.newInstance().withWidth(a.EXTRA_LARGE.getLeft()).withAttributes(l.newInstance().with("viewport","extra-large").build()).build()]),m("design:type",HTMLElement)],f.prototype,"element",void 0);f.style=g}}}));