(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{524:function(t,n,o){"use strict";o.r(n);var e={layout:"store",name:"LoginPage",methods:{login:function(){return this.$auth.loginWith("auth0").catch((function(t){console.log(t)}))}}},r=o(5),l=o(32),c=o.n(l),h=o(329),m=o(378),d=o(356),v=o(327),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-container",{attrs:{"grid-list-md":"","text-center":""}},[o("h1",{staticClass:"mt-12"},[t._v("Login Required!")]),o("v-btn",{staticClass:"mt-10",attrs:{color:"primary","x-large":""},on:{click:t.login}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-login")]),t._v("Login to Our Time Together")],1),t.$auth.loggedIn?o("v-chip",{attrs:{color:"primary"},domProps:{textContent:t._s(t.$auth.user)}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:h.a,VChip:m.a,VContainer:d.a,VIcon:v.a})}}]);