/*! Built with http://stenciljs.com */
AgcWeaningPercentage.loadBundle("6lg0ggj8",["exports"],function(e){var t=window.AgcWeaningPercentage.h,a=function(e,t){var a=e.querySelector('[name="'+t+'"]'),s=e.querySelector('[data-validates="'+t+'"');return a.checkValidity()?(a.className=a.className.replace(" invalid",""),s.style.display="none",!0):(-1===a.className.indexOf("invalid")&&(a.className+=" invalid"),s.style.display="block",!1)},s=function(){function e(){this.socket="",this.tract="",this.mode="step",this.currentStep=0,this.cache={},this.submitted=!1,this.results={}}return e.prototype.render=function(){var e=this;return t("div",null,t("form",{onSubmit:function(e){return e.preventDefault()},ref:function(t){return e.form=t},"data-wizard":"agc-weaning-percentage","data-wizard-mode":this.mode,class:"agc-wizard"},t("slot",null),t("section",{"data-wizard-section":"1"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.number-weaned"},"Total Calves Weaned"),t("input",{name:"numberWeaned",type:"number",min:"1",step:"1",required:!0}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.number-weaned.required","data-validates":"numberWeaned"},"Please enter a whole number of 1 or more."),t("p",{"data-i18n":"hints.number-weaned"},"⮤ Enter the total number of calves weaned.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖"))),t("section",{"data-wizard-section":"2"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.females-exposed"},"Total Females Exposed"),t("input",{name:"femalesExposed",type:"number",min:"1",step:"1",required:!0}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-exposed.required","data-validates":"femalesExposed"},"Please enter a whole number of 1 or more."),t("p",{"data-i18n":"hints.femalesExposed"},"⮤ Enter the total number of females exposed to breeding.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&[t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),t("section",{"data-wizard-section":"3"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.females-sold-died"},"Total Females Sold or Died"),t("input",{name:"femalesSoldDied",type:"number",min:"0",step:"1",required:!0}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-sold-died.required","data-validates":"femalesSoldDied"},"Please enter a whole number of 0 or more."),t("p",{"data-i18n":"hints.females-sold-died"},"⮤ Enter the total number of females that were sold or died.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&[t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),t("section",{"data-wizard-section":"4"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.females-purchased"},"Total Females Purchased"),t("input",{name:"femalesPurchased",type:"number",min:"0",step:"1",required:!0}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-purchased.required","data-validates":"femalesPurchased"},"Please enter a whole number of 0 or more."),t("p",{"data-i18n":"hints.females-purchased"},"⮤ Enter the total number of females that were purchased and added to the herd.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)}," Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.finish",onClick:this.nextPrev.bind(this,"step"===this.mode?1:4)},"Calculate 🠖"))),t("section",{"data-wizard-results":!0},t("slot",{name:"results"}))))},e.prototype.showTab=function(e){"step"===this.mode&&(this.cache.sections[e].style.display="block"),this.socket&&this.agcStepChanged.emit({socket:this.socket,tract:this.tract,step:this.currentStep})},e.prototype.reset=function(){this.currentStep=0,this.submitted=!1,this.showTab(0)},e.prototype.validateForm=function(){var e=!0;return 0!==this.currentStep&&"full"!==this.mode||a(this.form,"numberWeaned")||(e=!1),1!==this.currentStep&&"full"!==this.mode||a(this.form,"femalesExposed")||(e=!1),2!==this.currentStep&&"full"!==this.mode||a(this.form,"femalesSoldDied")||(e=!1),3!==this.currentStep&&"full"!==this.mode||a(this.form,"femalesPurchased")||(e=!1),e},e.prototype.nextPrev=function(e,t){if(t&&t.preventDefault(),"full"===this.mode){if(!this.validateForm())return!1}else if(1==e&&!this.validateForm())return!1;if("step"===this.mode&&(this.cache.sections[this.currentStep].style.display="none"),this.currentStep=this.currentStep+e,this.currentStep>=this.cache.sections.length)return this.submitted=!0,this.showResults.call(this),!1;this.showTab.call(this,this.currentStep)},e.prototype.showResults=function(){var e=parseInt(this.form.querySelector('[name="numberWeaned"').value),t=parseInt(this.form.querySelector('[name="femalesExposed"').value),a=parseInt(this.form.querySelector('[name="femalesSoldDied"').value),s=parseInt(this.form.querySelector('[name="femalesPurchased"').value),i=t-a+s,n=(2,+(Math.round(new Number(e/i*100+"e+2").valueOf())+"e-2")),r={socket:this.socket,tract:this.tract,numberWeaned:e,femalesExposed:t,femalesSoldDied:a,femalesPurchased:s,totalFemales:i,weaningPercentage:n,calculated:new Date};this.socket&&this.agcCalculated.emit({socket:this.socket,tract:this.tract,results:Object.assign({},r)}),this.results=Object.assign({},r),this.cache.results.forEach(function(e){e.style.display="block"})},e.prototype.handleAction=function(e){"reset"===e.detail.action&&this.reset()},e.prototype.componentDidLoad=function(){var e=Array.from(this.form.querySelectorAll("[data-wizard-section]")).map(function(e){return e}).map(function(e){return e}),t=Array.from(this.form.querySelectorAll("[data-wizard-results]")).map(function(e){return e}).map(function(e){return e});this.cache=Object.assign({},this.cache,{sections:e,results:t}),window.document.addEventListener("agcAction",this.handleAction.bind(this)),this.form.querySelector('[name="femalesSoldDied"]').defaultValue="0",this.form.querySelector('[name="femalesPurchased"]').defaultValue="0",this.showTab(0)},e.prototype.componentDidUnload=function(){window.document.removeEventListener("agcAction",this.handleAction)},Object.defineProperty(e,"is",{get:function(){return"agc-weaning-percentage"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cache:{state:!0},currentStep:{state:!0},mode:{type:String,attr:"mode"},results:{state:!0},socket:{type:String,attr:"socket"},submitted:{state:!0},tract:{type:String,attr:"tract"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"agcCalculated",method:"agcCalculated",bubbles:!0,cancelable:!0,composed:!0},{name:"agcStepChanged",method:"agcStepChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();e.AgcWeaningPercentage=s,Object.defineProperty(e,"__esModule",{value:!0})});