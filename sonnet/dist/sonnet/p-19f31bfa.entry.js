import{r as t,h as o,g as n}from"./p-75b8bc7c.js";import"./p-e0123cd3.js";import{S as e}from"./p-85cd1ecc.js";import{W as s}from"./p-d7b2933a.js";import{L as i}from"./p-d336ded5.js";const a=class{constructor(o){t(this,o),this.offerAvailable="",this.titleString="",this.logoIsSet=!1}componentWillLoad(){if(e.hasValue(this.logoSources)){if(this.logoSourceJson=JSON.parse(this.logoSources),Object.keys(this.logoSourceJson).length<0)return;this.logoIsSet=!0}void 0!==this.modalData&&this.parseModalData(this.modalData)}componentDidLoad(){this.logoIsSet&&i.getInstance().observe(this.element)}parseModalData(t){t&&(this.modalDataObj=JSON.parse(t))}toggleLegal(){const t=this.element.querySelector(".modal-legal-copy"),o=this.element.querySelector(".modal-legal-link");t.classList.contains("d-none")?(t.classList.remove("d-none"),o.innerHTML="[-] "+this.modalLegalLinkHide):(t.classList.add("d-none"),o.innerHTML="[+] "+this.modalLegalLinkShow)}showModal(){this.element.querySelector("snt-modal").show()}copyToClipboard(t){let o=this.element.querySelector(".couponCode");o.select(),o.setSelectionRange(6,o.value.length),document.execCommand("copy"),t.target.classList.add("d-none"),this.element.querySelector(".iconCopy").classList.add("d-none"),this.element.querySelector(".code_copied").classList.remove("d-none"),setTimeout(()=>{t.target.classList.remove("d-none"),this.element.querySelector(".iconCopy").classList.remove("d-none"),this.element.querySelector(".code_copied").classList.add("d-none")},5e3)}render(){const t=this.buildButtonContent(),n=this.buildModalContent(this.modalDataObj),i=e.hasValue(this.titleString)?o("h3",null,this.titleString):null;return o("div",{class:s.generateClasses(["connect-offers-panel"],this.offerAvailable?"offer-available":"")},o("div",{class:"offer-wrapper"},this.offerAvailable),this.logoIsSet?o("div",{class:"logo d-flex justify-content-center mb-4",role:"img","aria-label":this.offerTitle},o("picture",null,o("source",{"data-srcSet":this.logoSourceJson.extraLargeLogoUrl,media:"(min-width: 1440px)"}),o("source",{"data-srcSet":this.logoSourceJson.largeLogoUrl,media:"(min-width: 1024px)"}),o("source",{"data-srcSet":this.logoSourceJson.mediumLogoUrl,media:"(min-width: 768px)"}),o("source",{"data-srcSet":this.logoSourceJson.smallLogoUrl,media:"(min-width: 0px)"}),o("img",{class:"logo-image",src:""+this.logoSourceJson.extraLargeLogoUrl,alt:this.altTag?this.altTag:this.offerTitle}))):"",i,o("p",{innerHTML:this.description}),t,o("div",null),n)}buildButtonContent(){return this.href?o("button-link-group",null,o("button-link",{class:"cta theme-default",href:this.href,target:this.target,"aria-label":this.ariaLabel},this.buttonLabel)):this.actionReference&&this.actionData&&this.buttonLabel?o("button-link-group",null,o("snt-action-button",{"action-reference":this.actionReference,"action-data":this.actionData,"style-classes":"cta theme-default",onClick:()=>{this.showModal()},"link-title":this.buttonLabel})):null}buildModalContent(t){if(this.actionReference){const n=t.title,e=t.description,s=t.button.title,i=t.button.href,a=t.button.target,c=t.code,r=t.linkShow,l=t.linkHide,d=t.legal,p=t.copyOfferCodeTxt||"Copy offer code",f=t.offerCodeCopiedTxt||"Code copied!";return this.modalLegalLinkShow=r,this.modalLegalLinkHide=l,o("snt-modal",{"language-string":'{"close":"Close"}',"style-classes":"ready-to-show"},o("snt-title-copy",{"title-string":n},o("p",{style:{textAlign:"center"},innerHTML:e})),o("div",{class:"offer-code "+(c?"":"d-none")},o("div",{class:"offer-code-wrapper"},o("snt-link",{href:"javascript:void(0)",onClick:t=>{this.copyToClipboard(t)}},c,o("span",{class:"icon-font iconCopy float-right",title:p}),o("span",{class:"sr-only"},p)),o("p",{class:"code_copied d-none"},f))),o("input",{type:"text",tabindex:"-1",value:c,class:"couponCode"}),o("button-link-group",null,o("button-link",{class:"cta theme-default",href:i,target:a,"aria-label":s},s)),o("snt-accordion",{class:"transcript-accordion"},o("div",{slot:"summary"},o("span",{class:"legal-close"},r),o("span",{class:"legal-open"},l)),o("div",{slot:"details"},o("div",{innerHTML:d}))))}}get element(){return n(this)}static get watchers(){return{modalData:["parseModalData"]}}};a.TAG_NAME="snt-connect-offers",a.style='snt-connect-offers{-ms-flex-item-align:stretch;align-self:stretch;min-height:100%}snt-connect-offers .connect-offers-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#323232;background-color:#ffffff;border:3px solid #e5e5e5;padding:40px 20px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-left:-3px;margin-right:-3px}snt-connect-offers .connect-offers-panel button-link-group{margin-top:auto}snt-connect-offers .offer-available{border:3px solid #acdde4}snt-connect-offers .offer-available .offer-wrapper{position:absolute;top:0;left:0;height:40px;line-height:40px;padding:0 20px;font-size:14px;font-family:"Averta-ExtraBold", sans-serif !important;font-weight:500 !important;background-color:#acdde4}snt-connect-offers .logo{margin-bottom:40px}snt-connect-offers h3{margin-bottom:30px}snt-connect-offers h3,snt-connect-offers p{text-align:center}snt-connect-offers snt-modal .offer-code{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:15px 0;position:relative;width:100%;text-align:center;border-bottom:1px solid #e5e5e5;position:relative;height:21px}snt-connect-offers snt-modal .offer-code .offer-code-wrapper{padding:0 24px 0 15px;background:white}snt-connect-offers snt-modal span.iconCopy{position:absolute;top:1px;right:-18px}snt-connect-offers snt-modal snt-link a{position:relative;font-family:"Averta-ExtraBold", Arial, Helvetica, sans-serif;top:10px;margin-right:5px;font-size:14px;outline:1px solid transparent;padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:none}snt-connect-offers snt-modal snt-link a:before{bottom:3px}snt-connect-offers snt-modal snt-link a:hover{background-image:none}snt-connect-offers snt-modal snt-link a:focus{background-image:none;margin:0px;margin-right:5px;outline-color:#9e0a9a}snt-connect-offers snt-modal button-link-group button-link{width:auto}snt-connect-offers snt-modal .couponCode{position:absolute;left:-9999px}snt-connect-offers snt-modal .code_copied{font-family:"Averta-ExtraBold", Arial, Helvetica, sans-serif;text-align:center;margin-top:21px}snt-connect-offers snt-accordion.transcript-accordion{margin-top:26px}snt-connect-offers snt-accordion.transcript-accordion .legal-open{display:none}snt-connect-offers snt-accordion.transcript-accordion .legal-close{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-open{display:block}snt-connect-offers snt-accordion.transcript-accordion[expanded] .legal-close{display:none}snt-connect-offers snt-accordion.transcript-accordion .expand-icon{font-size:14px}snt-connect-offers snt-accordion.transcript-accordion .card-header [slot=summary]{font-size:12px}snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:250px}@media (min-width: 1024px){snt-connect-offers snt-accordion.transcript-accordion .card-body{max-height:350px}}snt-connect-offers snt-accordion.transcript-accordion .card-body [slot=details] p{text-align:left;line-height:1.5;font-size:12px}';export{a as snt_connect_offers}