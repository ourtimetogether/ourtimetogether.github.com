(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{345:function(t,e,r){"use strict";r(49);var o=r(7),n=(r(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.imageId){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.$get("/w/image/".concat(t.imageId,"?size=").concat(t.size));case 4:r=e.sent,t.imageSrc=r;case 6:case"end":return e.stop()}}),e)})))()}}),l=r(5),c=r(31),d=r.n(c),m=r(330),h=r(130),v=r(340),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",t._g(t._b({attrs:{src:t.imageSrc,height:t.height,contain:t.contain},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VImg:m.a,VProgressCircular:h.a,VRow:v.a})},349:function(t,e,r){t.exports=r.p+"img/store-logo-light.b503660.png"},362:function(t,e,r){"use strict";r(21),r(49);var o=r(7),n=r(345),l=(r(46),r(4),{name:"PageSettingsCard",components:{"async-img":n.a},props:{title:{type:String,default:"Page Title"},pageId:{type:Number,default:0}},data:function(){return{items:[],searchCategories:"",categories:["Loading ..."],newCategory:"",snackbar:!1,snackMessage:""}},watch:{title:function(t,e){this.getCategories()},searchCategories:function(t){var e=this;t&&(t.length<=2||this.$axios.get("/w/search/category",{params:{term:t}}).then((function(t){var r=t.data.pages.map((function(t){return t.title.split(":")[1]}));e.items=r.map((function(title){return{text:title,value:title}}))})).catch((function(t){console.log(t)})).finally((function(){e.items.filter((function(e){return e.value===t})).length<1&&e.items.push({text:"Add new category: ".concat(t),value:t})})))}},methods:{getCategories:function(){var t=this;t.$axios.get("/w/page/".concat(t.title,"/categories")).then((function(e){t.categories=e.data})).catch((function(t){console.error(t)}))},addNewCategory:function(){var t=this;t.$axios.post("/w/page/".concat(t.title,"/add/category/").concat(t.newCategory),{user:t.$auth.user.email}).then((function(e){switch(e.data.status){case"success":t.categories.push(t.newCategory),t.newCategory="",t.snackMessage="Successfully add category!",t.snackbar=!0;break;case"error":t.snackMessage=e.data.message,t.snackbar=!0}}))},removeCategory:function(t){var e=this;e.$axios.post("/w/page/".concat(e.title,"/del/category/").concat(t),{user:e.$auth.user.email}).then((function(r){switch(console.log(r),r.data.status){case"success":e.categories=e.categories.filter((function(e){return e!==t})),e.snackMessage="Successfully removed category!",e.snackbar=!0;break;case"error":e.snackMessage=r.data.message,e.snackbar=!0}}))}},mounted:function(){this.getCategories()}}),c=r(5),d=r(31),m=r.n(d),h=r(534),v=r(329),f=r(384),_=r(341),y=r(386),k=r(523),x=r(328),w=r(524),C=r(435),V=r(399),$=r(343),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""}},[r("v-icon",[t._v("mdi-cog")])],1),r("v-toolbar-title",[t._v("Settings")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("dialog-cancel")}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-title",[t._v(t._s(t.title))]),r("v-card-text",{staticClass:"pb-0"},[t.$auth.loggedIn?r("v-autocomplete",{attrs:{items:t.items,"search-input":t.searchCategories,label:"Add new tag",placeholder:"Start typing to search","append-outer-icon":"mdi-tag-plus"},on:{"update:searchInput":function(e){t.searchCategories=e},"update:search-input":function(e){t.searchCategories=e},"click:append-outer":t.addNewCategory},model:{value:t.newCategory,callback:function(e){t.newCategory=e},expression:"newCategory"}}):t._e()],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Existing Tags:")]),r("v-chip-group",{staticClass:"pl-5",attrs:{column:""}},t._l(t.categories,(function(e,o){return r("v-chip",{key:o,attrs:{close:t.$auth.loggedIn,"close-icon":"mdi-delete",color:"teal","text-color":"white",to:{name:"album",query:{cat:e}}},on:{"click:close":function(r){return t.removeCategory(e)}}},[t._v(t._s(e))])})),1),r("v-snackbar",{attrs:{centered:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackMessage))])],1)}),[],!1,null,null,null),A=component.exports;m()(component,{VAutocomplete:h.a,VBtn:v.a,VCard:f.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VChip:y.a,VChipGroup:k.a,VIcon:x.a,VSnackbar:w.a,VSpacer:C.a,VToolbar:V.a,VToolbarTitle:$.a});var S,I={name:"CarouselsCard",components:{"async-img":n.a,"page-settings-card":A},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]},imageIndex:{type:Number,default:0}},data:function(){return{carouselsHeaderHeight:50,windowHeight:"900px",cycle:!0,settingsDialog:!1}},mounted:function(){var t=this;t.windowHeight=window.innerHeight-t.carouselsHeaderHeight+"px",t.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},methods:{onResize:function(){this.windowHeight=window.innerHeight-this.carouselsHeaderHeight+"px"},handlePageSettings:(S=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.settingsDialog=!0;case 1:case"end":return t.stop()}}),t,this)}))),function(){return S.apply(this,arguments)})}},B=r(555),O=r(525),T=r(526),P=r(330),j=r(527),D=Object(c.a)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-system-bar",{attrs:{flat:"",color:"primary",dark:"",height:t.carouselsHeaderHeight+"px"}},[o("v-img",{attrs:{src:r(349),contain:"","max-width":"80",width:"100%"}}),o("v-toolbar-title",[t._v("Album Carousel: "+t._s(t.title))]),o("v-spacer"),t.cycle?t._e():o("v-btn",{attrs:{icon:"",dark:""},on:{click:t.handlePageSettings}},[o("v-icon",[t._v("mdi-cog")])],1),t.cycle?t._e():o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!0}}},[o("v-icon",[t._v("mdi-play")])],1),t.cycle?o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!1}}},[o("v-icon",[t._v("mdi-pause")])],1):t._e(),o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!1,t.$emit("close-icon-click")}}},[o("v-icon",[t._v("mdi-close")])],1)],1),o("v-carousel",{attrs:{height:"100%",dark:!0,cycle:t.cycle,interval:"6000",progress:!0,"show-arrows-on-hover":""},model:{value:t.imageIndex,callback:function(e){t.imageIndex=e},expression:"imageIndex"}},t._l(t.members,(function(e,r){return o("v-carousel-item",{key:r},[o("async-img",{attrs:{imageId:e.id,size:"2048",height:t.windowHeight}})],1)})),1),o("v-dialog",{attrs:{fullscreen:t.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[o("page-settings-card",{attrs:{pageId:t.members[t.imageIndex].id,title:t.members[t.imageIndex].title},on:{"dialog-cancel":function(e){t.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),M=D.exports;m()(D,{VBtn:v.a,VCard:f.a,VCarousel:B.a,VCarouselItem:O.a,VDialog:T.a,VIcon:x.a,VImg:P.a,VSpacer:C.a,VSystemBar:j.a,VToolbarTitle:$.a});var E={name:"AlbumPhotoCard",components:{"async-img":n.a,"page-settings-card":A},props:{member:{type:Object,default:null},index:{type:Number,default:0}},data:function(){return{settingsDialog:!1,selected:!1}},computed:{photoTimeStamp:function(){return new Date(this.member.timestamp).toLocaleString("en-ca",{dateStyle:"long",timeStyle:"short",timeZone:"America/New_York"})}}},H=r(554),z=r(528),N=Object(c.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{class:{"on-hover":o},attrs:{elevation:o?16:2}},[r("async-img",{attrs:{imageId:t.member.id,size:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$emit("album-photo-click",t.index)}}}),r("v-card-text",[r("div",{staticClass:"font-weight-black"},[t._v(t._s(t.member.title.substring(5,35)))]),r("div",[t._v(t._s(t.photoTimeStamp))])]),t.$auth.loggedIn?r("v-card-actions",[r("v-checkbox",{attrs:{color:"warning"},on:{change:function(e){return t.$emit("album-photo-select",t.selected,t.member.id)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),r("v-spacer"),r("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(e){t.settingsDialog=!0}}},[r("v-icon",[t._v("mdi-tag-plus")])],1),r("v-btn",{attrs:{icon:"",color:"indigo"}},[r("v-icon",[t._v("mdi-download")])],1)],1):t._e()],1)]}}])}),r("v-dialog",{attrs:{fullscreen:t.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[r("page-settings-card",{attrs:{pageId:t.member.id,title:t.member.title},on:{"dialog-cancel":function(e){t.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),L=N.exports;m()(N,{VBtn:v.a,VCard:f.a,VCardActions:_.a,VCardText:_.c,VCheckbox:H.a,VDialog:T.a,VHover:z.a,VIcon:x.a,VSpacer:C.a});var R={name:"AlbumActionsDrawer",props:{selectedPhotosAmount:{type:Number,default:0}},data:function(){return{}},computed:{labelAddCategory:function(){return this.selectedPhotosAmount>0?"Add category ("+this.selectedPhotosAmount+")":"Select photo(s) to add category"}}},J=r(333),U=r(429),W=r(392),Y=r(430),G=r(394),Z=r(342),F=r(494),K=Object(c.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{staticClass:"ml-6",staticStyle:{top:"140px",height:"auto","max-height":"calc(100% - 80px)"},attrs:{floating:"",fixed:"",clipped:"","expand-on-hover":"",dark:""}},[r("v-list",[r("v-list-item",{staticClass:"px-2"},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",[t._v("mdi-dots-vertical")])],1),r("v-list-item-title",[t._v("Actions")])],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:"",disabled:t.selectedPhotosAmount<=0},on:{click:function(e){return t.$emit("album-actions-add-category")}}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"green"}},[t._v("mdi-tag-plus")])],1),r("v-list-item-title",[t._v(t._s(t.labelAddCategory))])],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-up-bold")])],1),r("v-list-item-title",[t._v("Back to Top")])],1)],1)],1)}),[],!1,null,null,null),Q=K.exports;m()(K,{VDivider:J.a,VIcon:x.a,VList:U.a,VListItem:W.a,VListItemAvatar:Y.a,VListItemIcon:G.a,VListItemTitle:Z.c,VNavigationDrawer:F.a});var X={name:"BulkAddTagCard",props:{members:{type:Array,default:[]}},data:function(){return{items:[],searchCategories:"",newCategory:"",categories:["loading ..."],snackbar:!1,snackMessage:""}},watch:{searchCategories:function(t){var e=this;!t||t.length<=2?this.newCategory="":this.$axios.get("/w/search/category",{params:{term:t}}).then((function(t){var r=t.data.pages.map((function(t){return t.title.split(":")[1]}));e.items=r.map((function(title){return{text:title,value:title}}))})).catch((function(t){console.log(t)})).finally((function(){e.items.filter((function(e){return e.value===t})).length<1&&e.items.push({text:"Add new category: ".concat(t),value:t})}))}},methods:{bulkAddNewCategory:function(){var t=this;t.$axios.post("/w/bulk/add/category",{user:t.$auth.user.email,pageids:t.members.join("|"),category:t.newCategory}).then((function(e){switch(e.data.status){case"success":t.newCategory="",t.snackMessage="Successfully add category!",t.snackbar=!0;break;case"error":t.snackMessage=e.data.message,t.snackbar=!0}}))}}},tt=Object(c.a)(X,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""}},[r("v-icon",[t._v("mdi-cog")])],1),r("v-toolbar-title",[t._v("Add Category")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("dialog-cancel")}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-title",[t._v("Add category for "+t._s(t.members.length)+" pages")]),r("v-card-text",[t.$auth.loggedIn?r("v-autocomplete",{attrs:{items:t.items,"search-input":t.searchCategories,label:"Add Category",placeholder:"Start typing to search existing categories"},on:{"update:searchInput":function(e){t.searchCategories=e},"update:search-input":function(e){t.searchCategories=e}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-icon",{attrs:{color:"success",disabled:t.newCategory.length<2},on:{click:t.bulkAddNewCategory}},[t._v("mdi-tag-plus")])]},proxy:!0}],null,!1,3977055828),model:{value:t.newCategory,callback:function(e){t.newCategory=e},expression:"newCategory"}}):t._e()],1),r("v-snackbar",{attrs:{timeout:"2000",centered:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackMessage))])],1)}),[],!1,null,null,null),et=tt.exports;m()(tt,{VAutocomplete:h.a,VBtn:v.a,VCard:f.a,VCardText:_.c,VCardTitle:_.d,VIcon:x.a,VSnackbar:w.a,VSpacer:C.a,VToolbar:V.a,VToolbarTitle:$.a});var at={name:"AlbumPhotos",components:{"carousels-card":M,"album-photo-card":L,"album-actions-drawer":Q,"bulk-add-tag-card":et},props:{title:{type:String,default:null},amount:{type:Number,default:0},members:{type:Array,default:[{id:123}]}},data:function(){return{imageIndex:0,showCarousels:!1,showBulkAddTags:!1,selectedMembers:[]}},mounted:function(){},methods:{handleAlbumPhotoClick:function(t){this.imageIndex=t,this.showCarousels=!0},handleAlbumPhotoSelect:function(t,e){t?this.selectedMembers.push(e):this.selectedMembers=this.selectedMembers.filter((function(t){return t!=e}))},handleBulkAddCategory:function(){this.showBulkAddTags=!0}}},ot=r(369),nt=r(363),it=r(340),st=Object(c.a)(at,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[t.$auth.loggedIn?r("album-actions-drawer",{attrs:{selectedPhotosAmount:t.selectedMembers.length},on:{"album-actions-add-category":t.handleBulkAddCategory}}):t._e(),r("v-container",{attrs:{fluid:""}},[t.title?r("h1",[t._v(t._s(t.title)+" ("+t._s(t.members.length)+" / "+t._s(t.amount)+")")]):t._e(),r("v-row",t._l(t.members,(function(e,o){return r("v-col",{key:e.id,staticClass:"d-flex child-flex"},[r("album-photo-card",{attrs:{member:e,index:o},on:{"album-photo-click":t.handleAlbumPhotoClick,"album-photo-select":t.handleAlbumPhotoSelect}})],1)})),1)],1),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":""},model:{value:t.showCarousels,callback:function(e){t.showCarousels=e},expression:"showCarousels"}},[r("carousels-card",{attrs:{title:t.title,members:t.members,imageIndex:t.imageIndex},on:{"close-icon-click":function(e){t.showCarousels=!1}}})],1),r("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showBulkAddTags,callback:function(e){t.showBulkAddTags=e},expression:"showBulkAddTags"}},[r("bulk-add-tag-card",{attrs:{members:t.selectedMembers},on:{"dialog-cancel":function(e){t.showBulkAddTags=!1}}})],1)],1)}),[],!1,null,"5fbc5752",null);e.a=st.exports;m()(st,{VCard:f.a,VCol:ot.a,VContainer:nt.a,VDialog:T.a,VRow:it.a})},408:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5db1c400",content,!0,{sourceMap:!1})},409:function(t,e,r){(e=r(23)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},517:function(t,e,r){"use strict";r(20),r(8),r(6),r(4),r(12);var o=r(2),n=(r(41),r(42),r(408),r(138)),l=r(326),c=r(325),d=r(135),m=r(40),h=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(32),f=r(10);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=y(y({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||m.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},538:function(t,e,r){"use strict";r.r(e);var o={name:"SharingAlbum",layout:"store",auth:!1,components:{"album-photos":r(362).a},data:function(){return{members:[],wContinue:null,photoAmount:-1,loading:!1,limitPerPage:12}},watch:{$route:function(t,e){this.members=[],this.wContinue=null,this.photoAmount=-1,this.loadMembers()}},mounted:function(){this.loadMembers()},updated:function(){this.$vuetify.goTo(document.body.scrollHeight)},methods:{loadMembers:function(){var t=this,option={method:"get",url:t.$route.query&&t.$route.query.cat?"/w/album/"+t.$route.query.cat:"/w/album",params:{limit:t.limitPerPage}};t.authUser&&(option.params.user=t.authUser),t.wContinue&&(option.params.continue=t.wContinue),t.$axios.request(option).then((function(e){e.data.error||(null===t.wContinue?t.members=e.data.items:t.members=t.members.concat(e.data.items),t.wContinue=e.data.hasOwnProperty("continue")?e.data.continue:null,t.photoAmount=e.data.hasOwnProperty("amount")?e.data.amount:-1,t.loading=!1)}))},loadMoreMembers:function(){this.loading=!0,this.loadMembers()}},computed:{pageHeight:function(){return document.body.scrollHeight}}},n=r(5),l=r(31),c=r.n(l),d=r(517),m=r(329),h=r(363),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{ref:"container"},[t.$route.query.cat&&t.members.length>0?r("album-photos",{attrs:{title:t.$route.query.cat,amount:t.photoAmount,members:t.members}}):r("div",[r("v-alert",{staticClass:"mt-12",attrs:{border:"bottom",type:"warning",prominent:""}},[t._v("You need "),r("strong",{staticClass:"purple--text"},[t._v("valid ")]),t._v("sharing id to access sharing albums!"),r("br"),t._v("Contact the "),r("strong",{staticClass:"purple--text"},[t._v("site owner ")]),t._v("to get the sharing id!")])],1),t.wContinue?r("v-btn",{attrs:{loading:t.loading,disabled:t.loading,block:"",color:"primary"},on:{click:t.loadMoreMembers}},[t._v("Click to Load More (Showing "+t._s(t.members.length)+" of "+t._s(t.photoAmount)+" items)")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:m.a,VContainer:h.a})}}]);