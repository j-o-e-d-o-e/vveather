(function(e){function t(t){for(var a,s,o=t[0],l=t[1],i=t[2],b=0,f=[];b<o.length;b++)s=o[b],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vveather/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ef2":function(e,t,n){},"2e5a":function(e,t,n){"use strict";n("4dee")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"4dee":function(e,t,n){},"4fcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"main"},c=Object(a["f"])("hr",null,null,-1);function s(e,t,n,s,o,l){var i=Object(a["y"])("Header"),u=Object(a["y"])("router-view"),b=Object(a["y"])("Footer");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(i,{title:"VVeather",onSettings:l.toggle},null,8,["onSettings"]),Object(a["f"])("div",r,[Object(a["h"])(u,{settings:o.settings,onSettings:l.toggle},null,8,["settings","onSettings"]),c,Object(a["h"])(b)])],64)}var o={class:"navbar navbar-expand-lg navbar-dark bg-dark container-fluid"},l={class:"container-fluid"},i=Object(a["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"navbar-nav ml-auto"},b=Object(a["g"])("Home"),f=Object(a["g"])("About"),j=Object(a["f"])("i",{class:"fas fa-cog"},null,-1),d=[j];function p(e,t,n,r,c,s){var j=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("nav",o,[Object(a["f"])("div",l,[Object(a["h"])(j,{to:"/",class:"navbar-brand"},{default:Object(a["G"])((function(){return[Object(a["g"])(Object(a["A"])(n.title),1)]})),_:1}),i,Object(a["f"])("div",{class:Object(a["n"])(["collapse navbar-collapse justify-content-end",{open:c.navTogglerOpen}]),id:"navbarNav"},[Object(a["f"])("ul",u,[Object(a["f"])("li",{class:"nav-item",onClick:t[0]||(t[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)})},[Object(a["h"])(j,{to:"/",class:"nav-link","aria-current":"page"},{default:Object(a["G"])((function(){return[b]})),_:1})]),Object(a["f"])("li",{class:"nav-item",onClick:t[1]||(t[1]=function(){return s.toggle&&s.toggle.apply(s,arguments)})},[Object(a["h"])(j,{to:"/about",class:"nav-link"},{default:Object(a["G"])((function(){return[f]})),_:1})]),Object(a["f"])("li",{class:"nav-item",onClick:t[3]||(t[3]=function(){return s.toggle&&s.toggle.apply(s,arguments)})},[Object(a["H"])(Object(a["f"])("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("settings")}),class:"nav-link","aria-current":"page"},d,512),[[a["E"],"/"===e.$route.path]])])])],2)])])}var h={name:"Header",props:{title:String},data:function(){return{navTogglerOpen:Boolean}},methods:{toggle:function(){this.navTogglerOpen=!this.navTogglerOpen}},emits:["settings"]},O=n("d959"),m=n.n(O);const g=m()(h,[["render",p]]);var v=g;function y(e,t){return Object(a["r"])(),Object(a["e"])("footer",null," 2024 - joedoe ")}const k={},w=m()(k,[["render",y]]);var _=w,x={name:"App",components:{Header:v,Footer:_},data:function(){return{settings:!1}},methods:{toggle:function(){this.settings=!this.settings}}};n("6995");const S=m()(x,[["render",s]]);var A=S,D=n("6c02"),z=(n("fb6a"),{key:0}),M={key:0},H={key:1},C=Object(a["f"])("hr",null,null,-1),I=Object(a["f"])("hr",null,null,-1),P=Object(a["f"])("hr",null,null,-1),T=Object(a["f"])("hr",null,null,-1);function N(e,t,n,r,c,s){var o=Object(a["y"])("Settings"),l=Object(a["y"])("Current"),i=Object(a["y"])("Hourly"),u=Object(a["y"])("Daily"),b=Object(a["y"])("Misc"),f=Object(a["y"])("Cloth");return c.loading?Object(a["d"])("",!0):(Object(a["r"])(),Object(a["e"])("section",z,[n.settings?(Object(a["r"])(),Object(a["e"])("section",M,[Object(a["h"])(o,{params:c.params,onSettings:s.setParams,onCancel:t[0]||(t[0]=function(t){return e.$emit("settings")})},null,8,["params","onSettings"])])):(Object(a["r"])(),Object(a["e"])("section",H,[Object(a["h"])(l,{current:c.weather.current},null,8,["current"]),C,Object(a["h"])(i,{hours:c.weather.hourly},null,8,["hours"]),I,Object(a["h"])(u,{days:c.weather.daily},null,8,["days"]),P,Object(a["h"])(b,{current:c.weather.current},null,8,["current"]),T,Object(a["h"])(f,{hours:c.weather.hourly.slice(0,5)},null,8,["hours"])]))]))}var q=n("1da1");n("99af"),n("d3b7"),n("96cf");Object(a["u"])("data-v-57775e6a");var F=Object(a["f"])("h1",null,"Settings",-1),R={class:"form-control"},U=Object(a["f"])("label",null,"Latitude",-1),E={class:"form-control"},V=Object(a["f"])("label",null,"Longitude",-1),$={class:"form-control"},B=Object(a["f"])("label",null,"API key",-1),G={class:"form-control"},L=Object(a["f"])("label",null,"Language",-1),W=Object(a["f"])("option",{value:"en"},"English",-1),J=Object(a["f"])("option",{value:"fr"},"Francais",-1),K=Object(a["f"])("option",{value:"de"},"Deutsch",-1),Q=[W,J,K],X=Object(a["f"])("button",{type:"submit",class:"btn btn-secondary"},"Save",-1);function Y(e,t,n,r,c,s){return Object(a["r"])(),Object(a["e"])(a["a"],null,[F,Object(a["f"])("form",{onSubmit:t[5]||(t[5]=Object(a["I"])((function(){return s.submit&&s.submit.apply(s,arguments)}),["prevent"]))},[Object(a["f"])("div",R,[U,Object(a["H"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.lat=e}),placeholder:"e.g. 90.0",name:"lat",type:"number",step:"0.01",required:""},null,512),[[a["D"],c.lat]])]),Object(a["f"])("div",E,[V,Object(a["H"])(Object(a["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.lon=e}),placeholder:"e.g. 45.0",name:"lon",type:"number",step:"0.01",required:""},null,512),[[a["D"],c.lon]])]),Object(a["f"])("div",$,[B,Object(a["H"])(Object(a["f"])("input",{ref:"apikey","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.apikey=e}),placeholder:"visit: https://openweathermap.org/",name:"apikey",type:"password",required:""},null,512),[[a["D"],c.apikey]])]),Object(a["f"])("div",G,[L,Object(a["H"])(Object(a["f"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.lang=e})},Q,512),[[a["C"],c.lang]])]),X,Object(a["f"])("button",{onClick:t[4]||(t[4]=function(t){return e.$emit("cancel")}),class:"btn btn-secondary"},"Cancel")],32)],64)}Object(a["s"])();var Z={name:"Settings",props:{params:Object},data:function(){return{lon:this.params.lon,lat:this.params.lat,apikey:this.params.apikey,lang:this.params.lang}},methods:{submit:function(e){e.preventDefault();var t={lon:this.lon,lat:this.lat,apikey:this.apikey,lang:this.lang};this.$emit("settings",t)}},emits:["settings","cancel"]};n("2e5a");const ee=m()(Z,[["render",Y],["__scopeId","data-v-57775e6a"]]);var te=ee,ne=(n("a4d3"),n("e01a"),["src"]);function ae(e,t,n,r,c,s){return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["f"])("h1",null,Object(a["A"])(Math.floor(n.current.temp))+"° ",1),Object(a["f"])("h3",null,[Object(a["f"])("img",{src:"https://openweathermap.org/img/wn/".concat(this.current.weather[0].icon,"@2x.png"),alt:"icon"},null,8,ne),Object(a["g"])(" "+Object(a["A"])(s.description),1)])])}var re={name:"Current",props:{current:Object},computed:{description:function(){var e=this.current.weather[0].description;return e[0].toUpperCase()+e.slice(1)}}};const ce=m()(re,[["render",ae]]);var se=ce;Object(a["u"])("data-v-1c438683");var oe={class:"table-responsive"},le={class:"table"},ie={class:"grid-container"},ue={key:0,class:"grid-item"},be=Object(a["f"])("div",null,[Object(a["f"])("i",{class:"fas fa-angle-right"}),Object(a["f"])("i",{class:"fas fa-angle-right"}),Object(a["f"])("i",{class:"fas fa-angle-right"})],-1),fe={class:"grid-item"},je=["src"],de=Object(a["g"])(),pe=Object(a["f"])("i",{class:"fas fa-cloud-rain"},null,-1),he=Object(a["g"])();function Oe(e,t,n,r,c,s){return Object(a["r"])(),Object(a["e"])("div",oe,[Object(a["f"])("table",le,[Object(a["f"])("tr",null,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(n.hours,(function(e){return Object(a["r"])(),Object(a["e"])("td",{key:e},[Object(a["f"])("div",ie,["00:00"===s.toTime(e.dt)?(Object(a["r"])(),Object(a["e"])("div",ue,[Object(a["f"])("div",null,Object(a["A"])(s.toDate(e.dt)),1),be])):Object(a["d"])("",!0),Object(a["f"])("div",fe,[Object(a["f"])("div",null,Object(a["A"])(s.toTime(e.dt)),1),Object(a["f"])("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"icon"},null,8,je),Object(a["f"])("div",null,[Object(a["f"])("i",{class:Object(a["n"])(s.thermometer(e.temp))},null,2),de,Object(a["f"])("small",null,Object(a["A"])(Math.floor(e.temp))+"°",1)]),Object(a["f"])("div",null,[pe,he,Object(a["f"])("small",null,Object(a["A"])(Math.floor(100*e.pop))+"%",1)])])])])})),128))])])])}Object(a["s"])();var me=n("c1df"),ge=n.n(me),ve={name:"Hours",props:{hours:Array},methods:{toTime:function(e){return ge()(new Date(1e3*e)).format("HH:mm")},toDate:function(e){return ge()(new Date(1e3*e)).format("dd, DD.MM.")},thermometer:function(e){return e>25?"fas fa-thermometer-full":e>20?"fas fa-thermometer-three-quarters":e>10?"fas fa-thermometer-half":e>5?"fas fa-thermometer-quarter":"fas fa-thermometer-empty"}}};n("93fe");const ye=m()(ve,[["render",Oe],["__scopeId","data-v-1c438683"]]);var ke=ye,we={class:"table"},_e=Object(a["f"])("thead",null,[Object(a["f"])("td"),Object(a["f"])("td"),Object(a["f"])("td",null,[Object(a["f"])("b",null,"Min")]),Object(a["f"])("td",null,[Object(a["f"])("b",null,"Max")]),Object(a["f"])("td",null,[Object(a["f"])("b",null,"Rain")]),Object(a["f"])("td",null,[Object(a["f"])("b",null,"Clouds")])],-1),xe=["src"];function Se(e,t,n,r,c,s){return Object(a["r"])(),Object(a["e"])("table",we,[_e,(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(n.days,(function(e){return Object(a["r"])(),Object(a["e"])("tr",{key:e},[Object(a["f"])("td",null,Object(a["A"])(s.toWeekday(e.dt)),1),Object(a["f"])("td",null,[Object(a["f"])("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"icon"},null,8,xe)]),Object(a["f"])("td",null,Object(a["A"])(Math.floor(e.temp.min))+"°",1),Object(a["f"])("td",null,Object(a["A"])(Math.floor(e.temp.max))+"°",1),Object(a["f"])("td",null,Object(a["A"])(Math.floor(100*e.pop))+"%",1),Object(a["f"])("td",null,Object(a["A"])(Math.floor(e.clouds))+"%",1)])})),128))])}var Ae={name:"Daily",props:{days:Object},methods:{toWeekday:function(e){return ge()(new Date(1e3*e)).format("dd")}}};const De=m()(Ae,[["render",Se]]);var ze=De;Object(a["u"])("data-v-1966f631");var Me={class:"grid-container"},He={class:"grid-item"},Ce=Object(a["f"])("i",{class:"fas fa-wind"},null,-1),Ie={class:"grid-item"},Pe={class:"grid-item"},Te=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),Ne={class:"grid-item"},qe=Object(a["f"])("i",{class:"far fa-sun"},null,-1);function Fe(e,t,n,r,c,s){return Object(a["r"])(),Object(a["e"])("div",Me,[Object(a["f"])("div",He,[Ce,Object(a["g"])(" "+Object(a["A"])(s.windDir+", "+n.current.wind_speed+" km/h"),1)]),Object(a["f"])("div",Ie," Feels like "+Object(a["A"])(Math.floor(n.current.feels_like))+"° ",1),Object(a["f"])("div",Pe,[Te,Object(a["g"])(" "+Object(a["A"])(s.sunrise),1)]),Object(a["f"])("div",Ne,[qe,Object(a["g"])(" "+Object(a["A"])(s.sunset),1)])])}Object(a["s"])();var Re={name:"Misc",props:{current:Object},computed:{sunrise:function(){return ge()(new Date(1e3*this.current.sunrise)).format("HH:mm")},sunset:function(){return ge()(new Date(1e3*this.current.sunset)).format("HH:mm")},windDir:function(){return this.current.wind_deg<45?"North":this.current.wind_deg<135?"West":this.current.wind_deg<225?"South":this.current.wind_deg<315?"East":"North"}}};n("c489");const Ue=m()(Re,[["render",Fe],["__scopeId","data-v-1966f631"]]);var Ee=Ue;Object(a["u"])("data-v-63eaa143");var Ve={class:"grid-item"},$e=["src"],Be={key:0,class:"grid-item",id:"plus"},Ge=Object(a["f"])("i",{class:"fas fa-plus fa-lg"},null,-1),Le=[Ge];function We(e,t,n,r,c,s){return Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(s.clothing,(function(e,t){return Object(a["r"])(),Object(a["e"])("div",{key:e,class:"grid-container"},[Object(a["f"])("div",Ve,[Object(a["f"])("img",{src:"img/".concat(e),alt:"icon"},null,8,$e),Object(a["f"])("i",{class:Object(a["n"])(e)},null,2)]),t!==s.clothing.length-1?(Object(a["r"])(),Object(a["e"])("div",Be,Le)):Object(a["d"])("",!0)])})),128)}Object(a["s"])();var Je={name:"Cloth",props:{hours:Object},computed:{clothing:function(){var e=function(e){return e+".svg"},t=new Date,n=Math.floor(this.hours.reduce((function(e,t){return e+t.temp}),0)/this.hours.length),a=Math.floor(this.hours.reduce((function(e,t){return e+100*t.pop}),0)/this.hours.length),r=Math.floor(this.hours.reduce((function(e,t){return e+t.wind_speed}),0)/this.hours.length),c=Math.floor(this.hours.reduce((function(e,t){return e+t.clouds}),0)/this.hours.length),s=8,o=[];return r<12&&(a>30&&n<s||a>75)&&o.push(e("umbrella")),n<10?o.push(e("winter-hat")):t.getHours()<18&&n>25&&c<10&&o.push(e("summer-hat")),n<3&&o.push(e("scarf")),n<s?o.push(e("winter-coat")):a>30?o.push(e("rain-coat")):n<20&&o.push(e("summer-jacket")),n<10?o.push(e("winter-sweater")):n<20?o.push(e("summer-sweater")):o.push(e("tshirt")),n<3&&o.push(e("gloves")),n>28?o.push(e("summer-pants")):o.push(e("jeans")),n<25&&o.push(e("socks")),n<8?o.push(e("winter-boots")):o.push(e("summer-shoes")),o}}};n("9850");const Ke=m()(Je,[["render",We],["__scopeId","data-v-63eaa143"]]);var Qe=Ke,Xe="https://api.openweathermap.org/data/2.5",Ye={name:"Home",components:{Settings:te,Current:se,Hourly:ke,Daily:ze,Misc:Ee,Cloth:Qe},props:{settings:Boolean},data:function(){var e;return{weather:Object,loading:!0,params:{lat:localStorage.getItem("vv_lat"),lon:localStorage.getItem("vv_lon"),apikey:localStorage.getItem("vv_apikey"),lang:null!==(e=localStorage.getItem("vv_lang"))&&void 0!==e?e:"en"}}},created:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initData();case 2:e.loading=!1;case 3:case"end":return t.stop()}}),t)})))()},methods:{initData:function(){var e=arguments,t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:"".concat(Xe,"/onecall?lat=").concat(t.params.lat,"&lon=").concat(t.params.lon,"&lang=").concat(t.params.lang,"&units=metric&exclude=minutely&appid=").concat(t.params.apikey),n.next=3,fetch(a);case 3:return r=n.sent,n.next=6,r.json();case 6:t.weather=n.sent;case 7:case"end":return n.stop()}}),n)})))()},setParams:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,t.$emit("settings"),localStorage.setItem("vv_lat",e.lat),localStorage.setItem("vv_lon",e.lon),localStorage.setItem("vv_apikey",e.apikey),localStorage.setItem("vv_lang",e.lang),t.params=e,n.next=9,t.initData();case 9:t.loading=!1;case 10:case"end":return n.stop()}}),n)})))()}},emits:["settings"]};const Ze=m()(Ye,[["render",N]]);var et=Ze,tt=Object(a["f"])("h3",null,"About",-1),nt=Object(a["f"])("p",null,[Object(a["g"])(" Data from "),Object(a["f"])("a",{href:"https://openweathermap.org/api/one-call-api",target:"_blank"},"OpenWeather API")],-1),at=Object(a["g"])("Home");function rt(e,t,n,r,c,s){var o=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])(a["a"],null,[tt,nt,Object(a["h"])(o,{to:"/"},{default:Object(a["G"])((function(){return[at]})),_:1})],64)}var ct={name:"About",props:{settings:Boolean},emits:["settings"]};const st=m()(ct,[["render",rt]]);var ot=st,lt=[{path:"/",name:"Home",component:et},{path:"/about",name:"About",component:ot}],it=Object(D["a"])({history:Object(D["b"])("/vveather/"),routes:lt}),ut=it,bt=(n("ab8b"),n("7b17"),n("9483"));Object(bt["a"])("".concat("/vveather/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(a["c"])(A).use(ut).mount("#app")},"581f":function(e,t,n){},6995:function(e,t,n){"use strict";n("4fcb")},"93fe":function(e,t,n){"use strict";n("581f")},9850:function(e,t,n){"use strict";n("1ef2")},c489:function(e,t,n){"use strict";n("c73e")},c73e:function(e,t,n){}});
//# sourceMappingURL=app.97b19e25.js.map