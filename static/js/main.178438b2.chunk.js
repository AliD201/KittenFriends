(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=(n(21),function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-red dib br3 pa4 ma2 grow bw2 shadow-5 tc"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?set=set4&size=200x200"),alt:"profile"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null," ",n)))}),s=function(e){console.log(e);var t=e.robots.map((function(e,t){return o.a.createElement(c,{key:t,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,t)},l=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"bg-lightest-blue ba b--green",type:"search",placeholder:"Search the List",onChange:t,"aria-label":"Search robots"}))},u=(n(22),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"45rem",padding:"1rem"}},e.children)}),d=n(9),h=n(10),f=n(15),g=n(14),b=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,"Something went wrong."),o.a.createElement("p",null," ",this.info," ")):this.props.children}}]),n}(o.a.Component),E=n(3),m=Object(E.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})}))}))}}}))((function(e){Object(r.useEffect)((function(){e.onRequestRobots()}),[]);var t=e.robots.filter((function(t){return t.name.toLowerCase().includes(e.searchField)}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"title"},"KITTENFRIENDS"),o.a.createElement(l,{searchChange:e.onSearchChange}),o.a.createElement(u,null,o.a.createElement(b,null,o.a.createElement(s,{robots:t}))))})),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);var w=n(1),S={searchField:""},R={isPending:!1,robots:[],error:""},O=n(12),y=n(13),C=Object(w.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),j=Object(O.createLogger)(),T=Object(w.d)(C,Object(w.a)(y.a,j));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E.a,{store:T},o.a.createElement(m,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/KittenFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/KittenFriends","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.178438b2.chunk.js.map