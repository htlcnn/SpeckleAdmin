(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-530a3d58"],{"73cf":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs11:"",lg6:""}},[!1===e.$store.state.isAuth?t("form",{on:{submit:function(r){return r.preventDefault(),e.register(r)}},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-card",{staticClass:"elevation-3"},[t("v-toolbar",{staticClass:"title text-uppercase elevation-0"},[t("span",[e._v("Register  ")]),t("v-spacer"),t("span",{staticClass:"font-weight-light caption"},[e._v("or "),t("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v("?")],1)],1),t("v-card-text",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{"prepend-inner-icon":"developer_board",hint:"The server url you want to connect to.",type:"url",label:"server api adress",name:"server"},on:{blur:e.checkServer},model:{value:e.server,callback:function(r){e.server=r},expression:"server"}})],1),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{rules:e.emailRules,"prepend-inner-icon":"email",required:"",type:"email",label:"your email",name:"email"},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),t("v-flex",{attrs:{xs6:""}},[t("v-text-field",{attrs:{rules:e.nameRules,"prepend-inner-icon":"face",required:"",type:"",label:"your name",name:"name"},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}})],1),t("v-flex",{attrs:{xs6:"","pl-2":""}},[t("v-text-field",{attrs:{rules:e.surnameRules,required:"",type:"",label:"your surname",name:"surname"},model:{value:e.surname,callback:function(r){e.surname=r},expression:"surname"}})],1),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{"prepend-inner-icon":"business",required:"",type:"",label:"your company",name:"company"},model:{value:e.company,callback:function(r){e.company=r},expression:"company"}})],1),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{rules:e.passwordRules,"prepend-inner-icon":"lock",required:"",type:"password",label:"your password",name:"password"},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),t("v-flex",{attrs:{xs12:""}},[e._v("\n                Please be careful with what you do with your data.\n              ")])],1)],1),t("v-card-actions",[t("v-btn",{staticClass:"md-primary md-raised",attrs:{type:"submit"}},[e._v("Register")])],1),t("v-alert",{attrs:{type:"warning",dismissible:""},model:{value:e.showError,callback:function(r){e.showError=r},expression:"showError"}},[e._v("\n            "+e._s(e.errorMessage)+"\n          ")])],1)],1):e._e()])],1)],1)},a=[],n=(t("6762"),t("2fdb"),t("7f7f"),t("bc3a")),i=t.n(n),o={name:"RegisterView",mixins:[validationMixin],components:{SpeckleAlert:SpeckleAlert},computed:{},data:function(){return{valid:!1,server:null,email:null,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],password:null,passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=8||"Password must be at least 8 characters long"}],name:null,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=12||"Name must be less than 12 characters"}],surname:null,surnameRules:[function(e){return!!e||"Surname (family name) is required"},function(e){return e&&e.length<=12||"Name must be less than 12 characters"}],company:null,errorMessage:null,showError:!1,serverOk:!1}},methods:{register:function(){var e=this;i.a.post("/accounts/register",{email:this.email,name:this.name,surname:this.surname,company:this.company,password:this.password}).then(function(r){return console.log(r),e.$store.dispatch("login",{email:e.email,password:e.password})}).then(function(r){console.log("Logged in."),e.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&deleted=false&sort=-lastModified"),e.$store.dispatch("getProjects"),e.$router.push("/")}).catch(function(r){e.errorMessage="Failed to log in: ".concat(r.response.data.message),e.showError=!0})},checkServer:function(){var e=this;this.server.includes("api")||(this.server+="/api"),i.a.get(this.server).then(function(r){if(!r.data.hasOwnProperty("serverName"))throw new Error("Failed to get server.");e.serverOk=!0,e.errorMessage="",e.showError=!1,e.$store.commit("SET_SERVER",e.server),e.$store.commit("SET_SERVER_DETAILS",r.data),localStorage.setItem("server",e.server),i.a.defaults.baseURL=e.server}).catch(function(r){e.serverOk=!1,e.errorMessage="Server url is incorrect.",e.showError=!0})},getValidationClass:function(e){if(this.$v){var r=this.$v[e];if(r)return{"md-invalid":r.$invalid&&r.$dirty}}},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.register()}},mounted:function(){this.$store.state.server&&(this.server=this.$store.state.server,this.checkServer()),!0===this.$store.state.isAuth&&(this.errorMessage="You are already authenticated!",this.showError=!0)}},l=o,u=(t("c00e"),t("2877")),c=Object(u["a"])(l,s,a,!1,null,"0f7ad4e9",null);c.options.__file="Register.vue";r["default"]=c.exports},bfd0:function(e,r,t){},c00e:function(e,r,t){"use strict";var s=t("bfd0"),a=t.n(s);a.a}}]);
//# sourceMappingURL=chunk-530a3d58.759a4c69.js.map