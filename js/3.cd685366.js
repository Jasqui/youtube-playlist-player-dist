(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{2298:function(t,e,i){"use strict";var a=i("ded3"),n=i.n(a),o=i("2f62");e["a"]={methods:n()(n()({},Object(o["c"])("States",["SetCurrentVideo","SetVideoList","SetShuffledList","GoNextVid","GoPreviousVid","AddVideo","TogglePlayState","ToggleRepeatOptions","RemoveVidTemp"])),Object(o["b"])("States",["GetCurrentVideo","GetCurrentVideoTitle"])),computed:n()({},Object(o["d"])("States",["videoId","originalVideoList","shuffledList","isShuffled","isPlaying"]))}},"713b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("playlist-sidebar",{model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),i("q-page-container",[i("router-view")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{attrs:{value:t.value,"show-if-above":"","content-class":"bg-grey-1",breakpoint:300},on:{input:function(e){return t.$emit("input")}}},[i("q-bar",{staticClass:"bg-primary absolute-top z-top",attrs:{dense:""}},[t.originalVideoList.length?[t.videoId?[i("q-icon",{attrs:{name:"fas fa-music",color:"white"}}),i("q-toolbar-title",{staticClass:"text-white text-center",staticStyle:{"font-size":"13px"}},[t._v("\n                    "+t._s(t.GetCurrentVideoTitle())+"\n\n                    "),i("q-tooltip",[t._v("\n                        "+t._s(t.GetCurrentVideoTitle())+"\n                    ")])],1),i("q-icon",{attrs:{name:"fas fa-music",color:"white"}})]:[i("q-icon",{attrs:{name:"fas fa-hand-pointer",color:"white"}}),i("q-toolbar-title",{staticClass:"text-white text-center",staticStyle:{"font-size":"13px"}},[t._v("\n                    Select a song or press play :)               \n                ")]),i("q-icon",{attrs:{name:"fas fa-hand-pointer",color:"white"}})]]:[i("q-icon",{attrs:{name:"fas fa-arrow-down",color:"white"}}),i("q-toolbar-title",{staticClass:"text-white text-center",staticStyle:{"font-size":"13px"}},[t._v("\n                Enter a playlist link to continue\n            ")]),i("q-icon",{attrs:{name:"fas fa-arrow-down",color:"white"}})]],2),i("q-toolbar",{staticClass:"absolute-top bg-primary q-pa-none z-top",staticStyle:{top:"24px"}},[i("q-input",{ref:"playlistInput",staticClass:"full-width",attrs:{label:"Playlist Link",outlined:"","bg-color":"white"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLinkSubmit(e)},click:t.onPlaylistLinkInputFocus},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-btn",{attrs:{flat:"",round:"",color:t.playlistLinkInput?"primary":void 0,icon:"fas fa-paper-plane",disable:!t.playlistLinkInput},on:{click:t.onLinkSubmit}})]},proxy:!0}]),model:{value:t.playlistLinkInput,callback:function(e){t.playlistLinkInput=e},expression:"playlistLinkInput"}})],1),i("q-slide-transition",[t.originalVideoList.length?i("q-toolbar",{staticClass:"absolute-top z-top justify-between bg-white",staticStyle:{top:"80px"}},[i("q-btn",{attrs:{icon:"fas fa-random",flat:!t.isShuffled,dense:"",round:"",unelevated:t.isShuffled,color:t.isShuffled?"red-2":"primary","text-color":"primary"},on:{click:t.ToggleShuffleList}},[i("q-tooltip",[t._v("\n                    Shuffle\n                ")])],1),i("q-btn",t._b({attrs:{icon:"fas fa-step-backward",color:"primary"},on:{click:t.GoPreviousVid}},"q-btn",t.optionBarBtnProps,!1),[i("q-tooltip",[t._v("\n                    Backward\n                ")])],1),i("q-btn",t._b({attrs:{icon:t.isPlaying?"fas fa-pause":"fas fa-play",color:"primary"},on:{click:t.TogglePlayState}},"q-btn",t.optionBarBtnProps,!1),[i("q-tooltip",[t.isPlaying?i("span",[t._v("Pause")]):i("span",[t._v("Resume")])])],1),i("q-btn",t._b({attrs:{icon:"fas fa-step-forward",color:"primary"},on:{click:t.GoNextVid}},"q-btn",t.optionBarBtnProps,!1),[i("q-tooltip",[t._v("\n                    Next\n                ")])],1),i("q-btn",t._b({attrs:{icon:"fas fa-redo-alt",color:t.isShuffled?"primary":"gray"},on:{click:t.ToggleRepeatOptions}},"q-btn",t.optionBarBtnProps,!1),[i("q-tooltip",[t._v("\n                    Toggle Repeat (W.I.P)\n                ")])],1)],1):t._e()],1),i("q-scroll-area",{staticStyle:{height:"calc(100vh - 144px)","margin-top":"136px"}},[t.originalVideoList.length?i("q-list",t._l(t.isShuffled?t.shuffledList:t.originalVideoList,(function(e){return i("q-item",{key:e.id,attrs:{clickable:"",active:e.contentDetails.videoId==t.videoId},on:{click:function(i){return t.onVideoSelect(e)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-img",{attrs:{src:e.snippet.thumbnails.default.url,width:"60px",height:"45px"}})],1),i("q-item-section",[i("q-item-label",[t._v("\n                        "+t._s(e.snippet.title)+"\n                    ")])],1),i("q-item-section",{attrs:{side:""}},[i("q-btn",{attrs:{flat:"",icon:"fas fa-ellipsis-v",dense:"",size:"xs",round:""},on:{click:function(t){return t.stopPropagation(),function(t){return null}()}}},[i("q-menu",[i("q-list",{staticStyle:{"min-width":"100px"}},[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.CopyLinkToClipboard(e)}}},[i("q-item-section",[t._v("\n                                        Copy Link\n                                    ")])],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("\n                                        Remove\n                                    ")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.RemoveVideoHere(e)}}},[i("q-item-section",[t._v("\n                                                    Here\n                                                ")])],1),i("q-item",{attrs:{clickable:"",disable:""}},[i("q-item-section",[t._v("\n                                                    From Youtube\n                                                ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)})),1):i("div",{staticClass:"full-width flex flex-center",staticStyle:{height:"calc(100vh - 204px)"}},[i("div",{staticClass:"text-center"},[i("q-icon",{attrs:{name:"fas fa-frown-open",size:"42px",color:"grey-5"}}),i("div",{staticClass:"full-width text-center text-italic text-grey-6"},[t._v("\n                    Nothing here yet...\n                ")])],1)])],1),i("q-slide-transition",[t.originalVideoList.length?t._e():i("q-bar",{staticClass:"absolute-bottom bg-white text-center"},[i("q-toolbar-title",{staticClass:"text-primary text-bold",staticStyle:{"font-size":"13px"}},[t._v("\n                App Made by Jasqui\n            ")])],1)],1)],1)},l=[],s=(i("ac1f"),i("1276"),i("448a")),r=i.n(s),c=i("2298"),p=i("cdde"),u={name:"PlaylistSidebar",mixins:[c["a"]],props:{value:Boolean},data:function(){return{playlistItems:[],playlistLinkInput:"https://www.youtube.com/playlist?list=PLVaD_A2r243OFWaJo5Hy5Y1-uQ81r4B_O",playlistSelectedId:"",optionBarBtnProps:{flat:!0,dense:!0,round:!0}}},methods:{CopyLinkToClipboard:function(t){var e=t.contentDetails.videoId;Object(p["a"])("https://www.youtube.com/watch?v=".concat(e))},RemoveVideoHere:function(t){var e=t.id;this.RemoveVidTemp(e)},onPlaylistLinkInputFocus:function(){this.$refs.playlistInput&&this.$refs.playlistInput.focused&&this.$refs.playlistInput.select()},ToggleShuffleList:function(){this.SetShuffledList(!this.isShuffled)},onVideoSelect:function(t){var e=t.contentDetails.videoId;this.SetCurrentVideo(e)},onLinkSubmit:function(){this.playlistSelectedLink=this._getPlaylistIDFromLink(this.playlistLinkInput),this.GetAllPlaylistItems()},_getPlaylistIDFromLink:function(t){var e=t.split("=")[1];return e},GetAllPlaylistItems:function(t){var e=this;this.GetPlaylistItems(t).then((function(t){var i,a=t.data.nextPageToken;(i=e.playlistItems).push.apply(i,r()(t.data.items)),a?e.GetAllPlaylistItems(a):(e.SetVideoList(e.playlistItems),e.SetShuffledList())}))},GetPlaylistItems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this.$axios({method:"GET",url:"https://www.googleapis.com/youtube/v3/playlistItems",params:{part:"id, snippet, contentDetails",playlistId:this.playlistSelectedLink,key:"AIzaSyBAXldq_TvBMhIXP-wpk9Hy1wBsCzsi2tI",pageToken:t,maxResults:50}})}}},d=u,f=i("2877"),m=i("9404"),b=i("d847"),h=i("0016"),y=i("6ac5"),v=i("05c0"),q=i("65c6"),w=i("27f9"),g=i("9c40"),k=i("e9c1"),S=i("4983"),x=i("1c1c"),I=i("66e5"),_=i("4074"),L=i("068f"),P=i("0170"),C=i("4e73"),Q=i("7f67"),T=i("eebe"),V=i.n(T),B=Object(f["a"])(d,o,l,!1,null,null,null),O=B.exports;V()(B,"components",{QDrawer:m["a"],QBar:b["a"],QIcon:h["a"],QToolbarTitle:y["a"],QTooltip:v["a"],QToolbar:q["a"],QInput:w["a"],QBtn:g["a"],QSlideTransition:k["a"],QScrollArea:S["a"],QList:x["a"],QItem:I["a"],QItemSection:_["a"],QImg:L["a"],QItemLabel:P["a"],QMenu:C["a"]}),V()(B,"directives",{ClosePopup:Q["a"]});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{attrs:{value:t.value,side:"right","show-if-above":"",width:65,"content-class":"bg-primary",breakpoint:300},on:{input:function(e){return t.$emit("input")}}},[i("div",{staticClass:"absolute-bottom z-top row q-pa-none"},[i("div",{staticClass:"col-12 q-pr-md q-pl-sm"},[i("q-separator",{attrs:{color:"white"}})],1),i("div",{staticClass:"col-12 flex flex-center q-pr-md q-pl-sm"},[i("q-btn",{staticClass:"full-width",attrs:{icon:"fas fa-cog",color:"white",flat:"",size:"lg"}})],1)])])},G=[],z={name:"OptionsSidebar",props:{value:Boolean}},R=z,A=i("eb85"),$=Object(f["a"])(R,D,G,!1,null,null,null),j=$.exports;V()($,"components",{QDrawer:m["a"],QSeparator:A["a"],QBtn:g["a"]});var F={name:"MainLayout",components:{PlaylistSidebar:O,OptionsSidebar:j},data:function(){return{leftDrawerOpen:!0,rightDrawerOpen:!0}}},H=F,E=i("4d5a"),N=i("e359"),J=i("09e3"),M=Object(f["a"])(H,a,n,!1,null,null,null);e["default"]=M.exports;V()(M,"components",{QLayout:E["a"],QHeader:N["a"],QToolbar:q["a"],QBtn:g["a"],QToolbarTitle:y["a"],QPageContainer:J["a"]})}}]);