(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(e,t,r){e.exports=r.p+"img/store-logo-light.b503660.png"},362:function(e,t,r){"use strict";r(49);var n=r(7),o=(r(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.imageId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$get("/w/image/".concat(e.imageId,"?size=").concat(e.size));case 4:r=t.sent,e.imageSrc=r;case 6:case"end":return t.stop()}}),t)})))()}}),l=r(5),c=r(32),m=r.n(c),d=r(331),h=r(130),f=r(339),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",e._g(e._b({attrs:{src:e.imageSrc,height:e.height,contain:e.contain},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports;m()(component,{VImg:d.a,VProgressCircular:h.a,VRow:f.a})},397:function(e,t,r){"use strict";var n={name:"AlbumList",props:{members:{type:Array,default:[]}}},o=r(5),l=r(32),c=r.n(l),m=r(368),d=r(343),h=r(358),f=r(130),v=r(339),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.members.length<1?r("h1",[e._v("Loading ... "),r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1):r("h1",[e._v("List of Albums")]),r("v-row",e._l(e.members,(function(t,n){return r("v-col",{key:t.id,attrs:{cols:"4"}},[r("v-card",[r("v-card-title",[r("nuxt-link",{attrs:{to:{name:e.$route.path.slice(1),query:{cat:t.title.split(":")[1]}}}},[e._v(e._s(t.title.split(":")[1]))])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.a=component.exports;c()(component,{VCard:m.a,VCardTitle:d.b,VCol:h.a,VProgressCircular:f.a,VRow:v.a})},398:function(e,t,r){"use strict";var n={name:"AlbumPhotos",components:{"async-img":r(362).a},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]}},data:function(){return{showCarousels:!1}}},o=r(5),l=r(32),c=r.n(l),m=r(328),d=r(368),h=r(511),f=r(512),v=r(358),y=r(483),w=r(485),_=r(327),C=r(331),V=r(339),k=r(405),$=r(381),x=r(370),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.title))]),n("v-row",e._l(e.members,(function(t,r){return n("v-col",{key:t.id,staticClass:"d-flex child-flex"},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{class:{"on-hover":o},attrs:{elevation:o?16:2}},[n("async-img",{attrs:{imageId:t.id,size:"250",height:"250",contain:"false"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1)]}}],null,!0)})],1)})),1),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":""},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-img",{attrs:{src:r(353),contain:"","max-width":"100",width:"100%"}}),n("v-toolbar-title",[e._v("Album Carousel: "+e._s(e.title))]),n("v-spacer"),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.showCarousels=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-carousel",{attrs:{height:"800",dark:"true",cycle:"true",interval:"6000",progress:"true"}},e._l(e.members,(function(e,t){return n("v-carousel-item",{key:t},[n("async-img",{attrs:{imageId:e.id,size:"800",height:"800"}})],1)})),1)],1)],1)],1)}),[],!1,null,"6d7c6b63",null);t.a=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCarousel:h.a,VCarouselItem:f.a,VCol:v.a,VDialog:y.a,VHover:w.a,VIcon:_.a,VImg:C.a,VRow:V.a,VSpacer:k.a,VToolbar:$.a,VToolbarTitle:x.a})},493:function(e,t,r){"use strict";r.r(t);var n=r(397),o=r(398),l={name:"UserAlbum",layout:"store",auth:!0,components:{"album-list":n.a,"album-photos":o.a},data:function(){return{members:[],wContinue:null,loading:!1}},watch:{$route:function(e,t){this.members=[],this.wContinue=null,this.loadMembers()}},mounted:function(){this.loadMembers()},updated:function(){this.$vuetify.goTo(9999)},methods:{loadMembers:function(){var e=this,option={method:"get",url:e.$route.query&&e.$route.query.cat?"/w/album/"+e.$route.query.cat:"/w/album",params:{limit:10,user:e.$auth.user.email}};e.wContinue&&(option.params.continue=e.wContinue),e.$axios.request(option).then((function(t){null===e.wContinue?e.members=t.data.items:e.members=e.members.concat(t.data.items),e.wContinue=t.data.hasOwnProperty("continue")?t.data.continue:null,e.loading=!1}))},loadMoreMembers:function(){this.loading=!0,this.loadMembers()},albumHref:function(title){return"/demo?cat="+title}}},c=r(5),m=r(32),d=r.n(m),h=r(328),f=r(355),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{ref:"container"},[e.$route.query.cat?r("album-photos",{attrs:{title:e.$route.query.cat,members:e.members}}):r("album-list",{attrs:{members:e.members}}),e.wContinue?r("v-btn",{attrs:{loading:e.loading,disabled:e.loading,block:"",color:"primary"},on:{click:e.loadMoreMembers}},[e._v("Load More")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:h.a,VContainer:f.a})}}]);