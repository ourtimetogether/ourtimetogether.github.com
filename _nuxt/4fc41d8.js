(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{467:function(t,e,r){"use strict";r.r(e);r(19);var n={name:"StoreNewsCard",props:{category:String,comments:[Number,String],date:String,divider:Boolean,html:String,icon:String,prominent:Boolean,readMore:Boolean,src:String,text:String,title:String,router:String,truncate:[Number,String]},computed:{truncatedText:function(){if(!this.text)return"";var t=Number(this.truncate);return this.text.length>t?this.text.slice(0,t)+" [...]":this.text}}},o=r(5),l=r(31),c=r.n(l),d=r(322),h=r(335),m=r(323),v=r(334),x=r(105),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"d-block",attrs:{to:t.router}},[r("store-base-img",{attrs:{height:t.prominent?400:250,src:t.src,flat:"",tile:""}},[r("v-row",{staticClass:"ma-0 fill-height",attrs:{align:"end",justify:"end"}},[r("v-sheet",{staticClass:"pa-2 d-inline-flex align-center justify-center",attrs:{color:"primary",dark:"",tile:"",height:"40",width:"40"}},[t.icon?r("v-icon",{domProps:{textContent:t._s(t.icon)}}):t._e()],1)],1)],1)],1),r("div",{staticClass:"pa-4"},[r("store-base-title",{staticClass:"text-truncate text-uppercase",attrs:{title:t.title}}),r("store-base-body",{attrs:{text:t.html?void 0:t.truncatedText,html:t.html,space:"0",align:"left"}})],1),t.readMore?r("v-btn",{staticClass:"font-weight-bold",attrs:{text:""}},[t._v("Read More")]):t._e(),t.divider?r("v-divider",{staticClass:"mt-6"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VDivider:h.a,VIcon:m.a,VRow:v.a,VSheet:x.a})}}]);