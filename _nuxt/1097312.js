(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{349:function(e,t,n){"use strict";n(49);var r=n(7),o=(n(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.imageId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$get("/w/image/".concat(e.imageId,"?size=").concat(e.size));case 4:n=t.sent,e.imageSrc=n;case 6:case"end":return t.stop()}}),t)})))()}}),c=n(5),l=n(32),d=n.n(l),m=n(331),h=n(130),v=n(339),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-img",e._g(e._b({attrs:{src:e.imageSrc,height:e.height,contain:e.contain},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VImg:m.a,VProgressCircular:h.a,VRow:v.a})},354:function(e,t,n){e.exports=n.p+"img/store-logo-light.b503660.png"},401:function(e,t,n){"use strict";n(21);var r={name:"AlbumList",props:{members:{type:Array,default:[]}}},o=n(5),c=n(32),l=n.n(c),d=n(373),m=n(341),h=n(360),v=n(130),f=n(339),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.members.length<1?n("h1",[e._v("Loading ... "),n("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1):n("h1",[e._v("List of Albums")]),n("v-row",e._l(e.members,(function(t,r){return n("v-col",{key:t.id,attrs:{cols:"4"}},[n("v-card",[n("v-card-title",[n("nuxt-link",{attrs:{to:{name:e.$route.path.slice(1),query:{cat:t.title.split(":")[1]}}}},[e._v(e._s(t.title.split(":")[1]))])],1)],1)],1)})),1)],1)}),[],!1,null,null,null),y=component.exports;l()(component,{VCard:d.a,VCardTitle:m.d,VCol:h.a,VProgressCircular:v.a,VRow:f.a});var w=n(349),k=(n(49),n(7)),C={name:"PageSettingsCard",components:{"async-img":w.a},props:{title:{type:String,default:"Page Title"},pageId:{type:Number,default:0}},data:function(){return{categories:["one"],newCategory:"",snackbar:!1,snackMessage:""}},watch:{title:function(e,t){this.getCategories()}},methods:{getCategories:function(){var e=this;e.$axios.get("/w/page/".concat(e.title,"/categories")).then((function(t){e.categories=t.data})).catch((function(e){console.error(e)}))},addNewCategory:function(){var e=this;e.$axios.post("/w/page/".concat(e.title,"/add/category/").concat(e.newCategory),{user:e.$auth.user.email}).then((function(t){switch(t.data.status){case"success":e.categories.push(e.newCategory),e.newCategory="",e.snackMessage="Successfully add category!",e.snackbar=!0;break;case"error":e.snackMessage=t.data.message,e.snackbar=!0}}))},removeCategory:function(e){var t=this;t.$axios.post("/w/page/".concat(t.title,"/del/category/").concat(e),{user:t.$auth.user.email}).then((function(n){switch(console.log(n),n.data.status){case"success":t.categories=t.categories.filter((function(t){return t!==e})),t.snackMessage="Successfully removed category!",t.snackbar=!0;break;case"error":t.snackMessage=n.data.message,t.snackbar=!0}}))}},mounted:function(){this.getCategories()}},_=n(328),x=n(403),V=n(493),$=n(327),S=n(494),I=n(406),P=n(504),H=n(379),M=n(357),T=Object(o.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-btn",{attrs:{icon:"",dark:""}},[n("v-icon",[e._v("mdi-cog")])],1),n("v-toolbar-title",[e._v("Settings")]),n("v-spacer"),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.$emit("dialog-cancel")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-card-title",[e._v(e._s(e.title))]),n("v-card-text",{staticClass:"pb-0"},[e.$auth.loggedIn?n("v-text-field",{attrs:{label:"Add new tag",clearable:"","append-outer-icon":"mdi-tag-plus"},on:{"click:append-outer":e.addNewCategory},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}}):e._e()],1),n("v-card-subtitle",{staticClass:"pb-0"},[e._v("Existing Tags:")]),n("v-chip-group",{staticClass:"pl-5",attrs:{column:""}},e._l(e.categories,(function(t,r){return n("v-chip",{key:r,attrs:{close:e.$auth.loggedIn,"close-icon":"mdi-delete",color:"teal","text-color":"white",to:{name:"album",query:{cat:t}}},on:{"click:close":function(n){return e.removeCategory(t)}}},[e._v(e._s(t))])})),1),n("v-snackbar",{attrs:{centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.snackMessage))])],1)}),[],!1,null,null,null),A=T.exports;l()(T,{VBtn:_.a,VCard:d.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VChip:x.a,VChipGroup:V.a,VIcon:$.a,VSnackbar:S.a,VSpacer:I.a,VTextField:P.a,VToolbar:H.a,VToolbarTitle:M.a});var j,D={name:"CarouselsCard",components:{"async-img":w.a,"page-settings-card":A},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]}},data:function(){return{carouselsHeaderHeight:50,windowHeight:"900px",cycle:!0,imageIndex:0,settingsDialog:!1}},mounted:function(){var e=this;e.windowHeight=window.innerHeight-e.carouselsHeaderHeight+"px",e.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},methods:{onResize:function(){this.windowHeight=window.innerHeight-this.carouselsHeaderHeight+"px"},handlePageSettings:(j=Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.settingsDialog=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return j.apply(this,arguments)})}},O=n(526),E=n(527),R=n(495),z=n(331),B=n(497),L=Object(o.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-system-bar",{attrs:{flat:"",color:"primary",dark:"",height:e.carouselsHeaderHeight+"px"}},[r("v-img",{attrs:{src:n(354),contain:"","max-width":"80",width:"100%"}}),r("v-toolbar-title",[e._v("Album Carousel: "+e._s(e.title))]),r("v-spacer"),e.cycle?e._e():r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.handlePageSettings}},[r("v-icon",[e._v("mdi-cog")])],1),e.cycle?e._e():r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!0}}},[r("v-icon",[e._v("mdi-play")])],1),e.cycle?r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!1}}},[r("v-icon",[e._v("mdi-pause")])],1):e._e(),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!1,e.$emit("close-icon-click")}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("v-carousel",{attrs:{height:"100%",dark:!0,cycle:e.cycle,interval:"6000",progress:!0,"show-arrows-on-hover":""},model:{value:e.imageIndex,callback:function(t){e.imageIndex=t},expression:"imageIndex"}},e._l(e.members,(function(t,n){return r("v-carousel-item",{key:n},[r("async-img",{attrs:{imageId:t.id,size:"2048",height:e.windowHeight}})],1)})),1),r("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.mofile,"max-width":"500"},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[r("page-settings-card",{attrs:{pageId:e.members[e.imageIndex].id,title:e.members[e.imageIndex].title},on:{"dialog-cancel":function(t){e.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),N=L.exports;l()(L,{VBtn:_.a,VCard:d.a,VCarousel:O.a,VCarouselItem:E.a,VDialog:R.a,VIcon:$.a,VImg:z.a,VSpacer:I.a,VSystemBar:B.a,VToolbarTitle:M.a});var U={name:"AlbumPhotos",components:{"async-img":w.a,"carousels-card":N},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]}},data:function(){return{showCarousels:!1}},mounted:function(){},methods:{}},J=n(498),F=Object(o.a)(U,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.title))]),n("v-row",e._l(e.members,(function(t,r){return n("v-col",{key:t.id,staticClass:"d-flex child-flex"},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{class:{"on-hover":o},attrs:{elevation:o?16:2}},[n("async-img",{attrs:{imageId:t.id,size:"250",height:"250"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1)]}}],null,!0)})],1)})),1),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":""},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[n("carousels-card",{attrs:{title:e.title,members:e.members},on:{"close-icon-click":function(t){e.showCarousels=!1}}})],1)],1)}),[],!1,null,"482ee746",null),G=F.exports;l()(F,{VCard:d.a,VCol:h.a,VDialog:R.a,VHover:J.a,VRow:f.a});var K={name:"AlbumPage",components:{"album-list":y,"album-photos":G},props:{limitPerPage:{type:Number,default:20},authUser:{type:String,default:null}},data:function(){return{members:[],wContinue:null,loading:!1}},watch:{$route:function(e,t){this.members=[],this.wContinue=null,this.loadMembers()}},mounted:function(){this.loadMembers()},updated:function(){this.$vuetify.goTo(9999)},methods:{loadMembers:function(){var e=this,option={method:"get",url:e.$route.query&&e.$route.query.cat?"/w/album/"+e.$route.query.cat:"/w/album",params:{limit:e.limitPerPage}};e.authUser&&(option.params.user=e.authUser),e.wContinue&&(option.params.continue=e.wContinue),e.$axios.request(option).then((function(t){null===e.wContinue?e.members=t.data.items:e.members=e.members.concat(t.data.items),e.wContinue=t.data.hasOwnProperty("continue")?t.data.continue:null,e.loading=!1}))},loadMoreMembers:function(){this.loading=!0,this.loadMembers()}}},Q=n(356),W=Object(o.a)(K,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{ref:"container"},[e.$route.query.cat?n("album-photos",{attrs:{title:e.$route.query.cat,members:e.members}}):n("album-list",{attrs:{members:e.members}}),e.wContinue?n("v-btn",{attrs:{loading:e.loading,disabled:e.loading,block:"",color:"primary"},on:{click:e.loadMoreMembers}},[e._v("Load More")]):e._e()],1)}),[],!1,null,null,null);t.a=W.exports;l()(W,{VBtn:_.a,VContainer:Q.a})},507:function(e,t,n){"use strict";n.r(t);var r={name:"DemoCategory",layout:"store",auth:!1,components:{"album-page":n(401).a}},o=n(5),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("album-page",{attrs:{limitPerPage:12}})}),[],!1,null,null,null);t.default=component.exports}}]);