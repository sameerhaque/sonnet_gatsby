import{r as t,e as o,h as i,g as n}from"./p-75b8bc7c.js";import{P as e,C as a}from"./p-e0123cd3.js";import"./p-85cd1ecc.js";import"./p-d7b2933a.js";import"./p-2094943b.js";import{D as s,V as p,a as d,b as l,c as r}from"./p-e9c224d2.js";const m=class{constructor(i){t(this,i),this.viewportChanged=o(this,"viewportChanged",7)}onViewportChanged(t){this.viewportChanged.emit({viewport:t})}componentWillLoad(){this.context=new s,p.getInstance().register(this,this.getElements(),this.resize)}resize(){p.getInstance().process(this,this.context,this.getElements())}getElements(){return[e.of("element",this.element),e.of("element",window.document.body)]}render(){return i("div",{class:"spacings"}," ",i("slot",null)," ")}get element(){return n(this)}static get watchers(){return{viewport:["onViewportChanged"]}}};(function(t,o,i,n){var e,a=arguments.length,s=a<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,n);else for(var p=t.length-1;p>=0;p--)(e=t[p])&&(s=(a<3?e(s):a>3?e(o,i,s):e(o,i))||s);a>3&&s&&Object.defineProperty(o,i,s)})([d([l.newInstance().withWidth(a.EXTRA_SMALL.getLeft(),a.EXTRA_SMALL.getRight()).withAttributes(r.newInstance().with("viewport","extra-small").build()).build(),l.newInstance().withWidth(a.SMALL.getLeft(),a.SMALL.getRight()).withAttributes(r.newInstance().with("viewport","small").build()).build(),l.newInstance().withWidth(a.MEDIUM.getLeft(),a.MEDIUM.getRight()).withAttributes(r.newInstance().with("viewport","medium").build()).build(),l.newInstance().withWidth(a.LARGE.getLeft(),a.LARGE.getRight()).withAttributes(r.newInstance().with("viewport","large").build()).build(),l.newInstance().withWidth(a.EXTRA_LARGE.getLeft()).withAttributes(r.newInstance().with("viewport","extra-large").build()).build()]),function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)}("design:type",HTMLElement)],m.prototype,"element",void 0),m.style="snt-layout{display:block;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box}snt-layout>.spacings{overflow:auto}snt-layout[viewport=extra-large] .spacings{padding:3.75em 8.438em}snt-layout[viewport=large] .spacings{padding:3.75em 4.438em}snt-layout[viewport=medium] .spacings{padding:2.5em 2.313em}snt-layout[viewport=small] .spacings{padding:2.5em 1.875em}snt-layout[viewport=extra-small] .spacings{padding:2.5em 1.875em}snt-layout[padding=none]>.spacings{padding:0}snt-layout[padding=top-only]>.spacings{padding-bottom:0}snt-layout[padding=bottom-only]>.spacings{padding-top:0}snt-layout[padding=remove-sides]>.spacings{padding-left:0;padding-right:0}snt-layout[padding=vertical-only]>.spacings{padding-top:0;padding-bottom:0}.two-column-combined{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.combined-bottom snt-layout>.spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){.combined-bottom snt-layout>.spacings{padding-bottom:0.938em !important}}.combined-top snt-layout>.spacings{padding-top:0.813em !important}@media (min-width: 1024px){.combined-top snt-layout>.spacings{padding-top:0.938em !important}}.no-top snt-layout>.spacings{padding-top:0 !important}.no-bottom snt-layout>.spacings{padding-bottom:0 !important}.no-padding snt-layout>.spacings{padding:0 !important}.no-sides snt-layout>.spacings{padding-left:0 !important;padding-right:0 !important}";export{m as snt_layout}