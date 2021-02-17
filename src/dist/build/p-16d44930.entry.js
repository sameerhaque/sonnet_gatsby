import{r as t,h as i,g as n}from"./p-75b8bc7c.js";import{S as e}from"./p-85cd1ecc.js";import{E as h}from"./p-12725a73.js";import"./p-6624233e.js";const a=class{constructor(i){t(this,i),this.url=e.empty(),this.urlTarget=e.empty(),this.buttonId=e.empty(),this.eventConfiguration=null}componentDidLoad(){e.isEmpty(this.actionReference)||(this.eventConfiguration=h.newInstanceof().withComponent(this.element).build())}render(){let t;return t=e.hasValue(this.url)?i("button-link",{"button-id":this.buttonId,class:"theme-primary",target:this.urlTarget,href:this.url},this.cta):i("snt-action-button",{"button-id":this.buttonId,"style-classes":"cta theme-primary","action-reference":this.actionReference,"action-data":this.actionData,"link-title":this.cta}),i("snt-layout",{class:"cta-container"},i("div",{class:"cta-wrapper"},i("div",{class:"text-content"},i("slot",null)),t))}get element(){return n(this)}};a.TAG_NAME="snt-cta-highlight",a.style='snt-cta-highlight.left .text-content,snt-cta-highlight left.text-content,.left snt-cta-highlight .text-content{text-align:left}@media (max-width: 767px){snt-cta-highlight snt-layout.left-mobile .text-content,snt-cta-highlight snt-layout .left-mobile.text-content,.left-mobile snt-cta-highlight snt-layout .text-content{text-align:left}}snt-cta-highlight.center .text-content,snt-cta-highlight center.text-content,.center snt-cta-highlight .text-content{text-align:center}@media (max-width: 767px){snt-cta-highlight snt-layout.center-mobile .text-content,snt-cta-highlight snt-layout .center-mobile.text-content,.center-mobile snt-cta-highlight snt-layout .text-content{text-align:center}}snt-cta-highlight.right .text-content,snt-cta-highlight right.text-content,.right snt-cta-highlight .text-content{text-align:right}@media (max-width: 767px){snt-cta-highlight snt-layout.right-mobile .text-content,snt-cta-highlight snt-layout .right-mobile.text-content,.right-mobile snt-cta-highlight snt-layout .text-content{text-align:right}}snt-cta-highlight .cta-container{background:#6ebac5}snt-cta-highlight .cta-container h4.text-content{margin-right:30px;display:inline-block}snt-cta-highlight button-link{display:inline-block}snt-cta-highlight button-link .icon-font::after{color:white}snt-cta-highlight .text-content{font-size:0.875rem;line-height:21px;display:inline-block;width:100%;margin:0px 0px 15px 0px;font-family:"Averta-ExtraBold", sans-serif !important;font-weight:500 !important}snt-cta-highlight snt-layout[viewport] .spacings{padding-top:15px;padding-bottom:15px}@media (min-width: 768px){snt-cta-highlight .cta-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}snt-cta-highlight snt-button,snt-cta-highlight button-link{white-space:nowrap}snt-cta-highlight .text-content{margin-right:30px;margin-bottom:0px;width:inherit}}@media (min-width: 1024px){snt-cta-highlight .text-content{font-size:1rem}}@media (min-width: 1440px){snt-cta-highlight .text-content{font-size:1.313rem;line-height:26px}}';export{a as snt_cta_highlight}