(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"3cc2":function(e,t,o){"use strict";t["a"]={computed:{isDesktop(){return this.$q.platform.is.desktop},isMobile(){return this.$q.platform.is.mobile}}}},a44f:function(e){e.exports=JSON.parse('[{"label":"Dashboard","icon":"home","to":"/dashboard","level":1},{"label":"Product Management","icon":"menu_book","level":0.5,"children":[{"label":"Category","icon":"category","to":"/category","level":5},{"label":"Product","icon":"redeem","to":"/product","level":1},{"label":"Unit","icon":"straighten","to":"/unit","level":1},{"label":"Price List","icon":"playlist_add","to":"/quotation","level":1},{"label":"Party Price List","icon":"playlist_add_check","to":"/quotation-party","level":1},{"label":"GST Rates","icon":"content_cut","to":"/gst-rate","level":1}]},{"label":"Account","icon":"account_balance","level":0.5,"children":[{"label":"General Ledger","icon":"view_headline","to":"/general-ledger","level":1},{"label":"Account Group","icon":"view_list","to":"/account-group","level":1},{"label":"Account Head","icon":"view_module","to":"/account-head","level":1}]},{"label":"Security","icon":"security","level":0.5,"children":[{"label":"Company","icon":"business","to":"/company","level":1},{"label":"User","icon":"person","to":"/user","level":1},{"label":"User Group","icon":"group","to":"/user-group","level":1}]},{"label":"Contact Us","icon":"location_on","to":"/contact","level":1},{"label":"Settings","icon":"settings","level":0.5,"children":[{"label":"Area of Operation","icon":"add_location","to":"/delivery-places","level":1}]}]')},a473:function(e,t,o){},a9c3:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",{staticStyle:{"font-family":"Lato"},attrs:{view:"hHh LpR lFf"}},[o("q-header",{staticStyle:{"background-color":"#1f509e"},attrs:{reveal:"",elevated:""}},[o("q-toolbar",{staticClass:"q-py-sm"},[e.isMobile?o("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),o("img",{staticClass:"cursor-pointer",staticStyle:{width:"38px"},attrs:{src:"/images/logo.png"},on:{click:function(t){return e.$router.push("/home")}}}),o("q-toolbar-title",[o("span",{staticClass:"float-left q-mt-xs text-h6 text-weight-bold",staticStyle:{"font-size":"17px"}},[e._v(e._s(e.siteName))]),e.isDesktop?o("search-bar"):e._e()],1),o("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"location_on"},on:{click:function(t){e.showPincode=!0}}}),o("q-btn",{staticClass:"q-mr-md",attrs:{dense:"",round:"",flat:"",icon:"shopping_cart"}},[o("q-badge",{staticClass:"text-bold",attrs:{color:"red",floating:"",transparent:""}},[e._v("\n          4\n        ")])],1),e.isDesktop?o("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"settings"}}):e._e(),o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"fas fa-sign-out-alt"},on:{mouseover:function(t){e.showing=!0}}},[o("q-menu",{staticClass:"q-mt-none",attrs:{"auto-close":""},on:{mouseleave:function(t){e.showing=!1}},model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}},[o("q-list",[o("q-item",{attrs:{clickable:""},on:{click:function(t){e.showMenu1=!0}}},[o("q-item-section",[o("q-item-label",[e._v("Login")]),o("q-item-label",{attrs:{caption:""}},[e._v("Standard Login Dialog with image")])],1)],1),o("q-separator",{attrs:{spaced:"",inset:""}}),o("q-item",{attrs:{clickable:""},on:{click:function(t){e.showMenu2=!0}}},[o("q-item-section",[o("q-item-label",[e._v("Accordian")]),o("q-item-label",{attrs:{caption:""}},[e._v("Accordian / Collapsiblee")])],1)],1),o("q-separator",{attrs:{spaced:"",inset:""}}),o("q-item",{attrs:{clickable:""},on:{click:function(t){e.showMenu3=!0}}},[o("q-item-section",[o("q-item-label",[e._v("Horizontal Tab")]),o("q-item-label",{attrs:{caption:""}},[e._v("Horizontal Tabs Login Dialog")])],1)],1),o("q-separator",{attrs:{spaced:"",inset:""}}),o("q-item",{attrs:{clickable:""},on:{click:function(t){e.showMenu4=!0}}},[o("q-item-section",[o("q-item-label",[e._v("Vertical Tab")]),o("q-item-label",{attrs:{caption:""}},[e._v("Vertical Tabs Login Dialog")])],1)],1)],1)],1)],1)],1),e.isDesktop?o("nav-bar"):e._e()],1),o("q-drawer",{attrs:{breakpoint:767,width:250,bordered:"","content-class":"bg-ornage"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[o("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[o("Sidebar",{attrs:{model:e.root,depth:"0"}})],1)],1),o("q-page-container",{staticStyle:{"background-color":"#f1f2f6"}},[o("router-view"),o("site-footer")],1),o("pincode",{attrs:{showPincode:e.showPincode},on:{close:function(t){e.showPincode=!1}}}),o("login1",{attrs:{show:e.showMenu1},on:{close:e.close}}),o("login2",{attrs:{show:e.showMenu2},on:{close:e.close}}),o("login3",{attrs:{show:e.showMenu3},on:{close:e.close}}),o("login4",{attrs:{show:e.showMenu4},on:{close:e.close}})],1)},a=[],l=(o("e6cf"),o("3cc2")),i=o("a44f"),s={mixins:[l["a"]],data(){return{showMenu1:!1,showMenu2:!1,showMenu3:!1,showMenu4:!1,showing:!1,showPincode:!1,leftDrawerOpen:!1,root:i}},components:{"search-bar":()=>Promise.all([o.e(0),o.e(19)]).then(o.bind(null,"032a")),pincode:()=>Promise.all([o.e(0),o.e(12)]).then(o.bind(null,"a3c2")),"site-footer":()=>o.e(18).then(o.bind(null,"056d")),"nav-bar":()=>o.e(16).then(o.bind(null,"2c09")),Sidebar:()=>Promise.all([o.e(0),o.e(17)]).then(o.bind(null,"b312")),login1:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"c6f7")),login2:()=>Promise.all([o.e(0),o.e(22)]).then(o.bind(null,"080b")),login3:()=>Promise.all([o.e(0),o.e(24)]).then(o.bind(null,"b7d4")),login4:()=>Promise.all([o.e(0),o.e(25)]).then(o.bind(null,"c5320"))},methods:{close(){this.showMenu1=!1,this.showMenu2=!1,this.showMenu3=!1,this.showMenu4=!1}},computed:{siteName(){return"My Shop"}},mounted(){console.log("Dotenv Test: (TEST: My Shop, production)")}},c=s,r=(o("cf38"),o("2877")),u=o("4d5a"),d=o("e359"),b=o("65c6"),h=o("9c40"),p=o("6ac5"),m=o("58a81"),f=o("4e73"),g=o("1c1c"),w=o("66e5"),v=o("4074"),q=o("0170"),_=o("eb85"),k=o("9404"),y=o("09e3"),M=o("eebe"),P=o.n(M),S=Object(r["a"])(c,n,a,!1,null,"b01cc212",null);t["default"]=S.exports;P()(S,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:b["a"],QBtn:h["a"],QToolbarTitle:p["a"],QBadge:m["a"],QMenu:f["a"],QList:g["a"],QItem:w["a"],QItemSection:v["a"],QItemLabel:q["a"],QSeparator:_["a"],QDrawer:k["a"],QPageContainer:y["a"]})},cf38:function(e,t,o){"use strict";var n=o("a473"),a=o.n(n);a.a}}]);