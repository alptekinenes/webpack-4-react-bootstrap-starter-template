!function(e){function t(t){for(var n,o,a=t[0],l=t[1],c=t[2],i=0,s=[];i<a.length;i++)o=a[i],H[o]&&s.push(H[o][0]),H[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(C&&C(t);s.length;)s.shift()();return k.push.apply(k,c||[]),r()}function r(){for(var e,t=0;t<k.length;t++){for(var r=k[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==H[a]&&(n=!1)}n&&(k.splice(t--,1),e=S(S.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!x[e]||!g[e])return;for(var r in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0==--b&&0===E&&D()}(e,t),n&&n(e,t)};var o,a=!0,l="09812ca015ec33ce3139",c=1e4,i={},s=[],d=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:_,apply:I,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:i[e]};return o=void 0,t}var u=[],f="idle";function m(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,y,v,b=0,E=0,w={},g={},x={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,m("check"),(t=c,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=S.p+""+l+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;g={},w={},x=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var r in y={},H)j(r);return"prepare"===f&&0===E&&0===b&&D(),t});var t}function j(e){x[e]?(g[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=S.p+""+e+"."+l+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function D(){m("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return I(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(O(r));e.resolve(t)}}function I(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,c;function d(e){for(var t=[e],r={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),l=o.id,c=o.chain;if((a=P[l])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:l};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:l};for(var i=0;i<a.parents.length;i++){var s=a.parents[i],d=P[s];if(d){if(d.hot._declinedDependencies[l])return{type:"declined",chain:c.concat([s]),moduleId:l,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[l]?(r[s]||(r[s]=[]),p(r[s],[l])):(delete r[s],t.push(s),n.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var u={},h=[],b={},E=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var g;c=O(w);var _=!1,j=!1,D=!1,I="";switch((g=y[w]?d(c):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+g.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(g),t.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(g),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(g),D=!0;break;default:throw new Error("Unexception type "+g.type)}if(_)return m("abort"),Promise.reject(_);if(j)for(c in b[c]=y[c],p(h,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,c)&&(u[c]||(u[c]=[]),p(u[c],g.outdatedDependencies[c]));D&&(p(h,[g.moduleId]),b[c]=E)}var k,M=[];for(n=0;n<h.length;n++)c=h[n],P[c]&&P[c].hot._selfAccepted&&b[c]!==E&&M.push({module:c,errorHandler:P[c].hot._selfAccepted});m("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete H[e]}(e)});for(var A,F,C=h.slice();C.length>0;)if(c=C.pop(),a=P[c]){var T={},q=a.hot._disposeHandlers;for(o=0;o<q.length;o++)(r=q[o])(T);for(i[c]=T,a.hot.active=!1,delete P[c],delete u[c],o=0;o<a.children.length;o++){var U=P[a.children[o]];U&&((k=U.parents.indexOf(c))>=0&&U.parents.splice(k,1))}}for(c in u)if(Object.prototype.hasOwnProperty.call(u,c)&&(a=P[c]))for(F=u[c],o=0;o<F.length;o++)A=F[o],(k=a.children.indexOf(A))>=0&&a.children.splice(k,1);for(c in m("apply"),l=v,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var N=null;for(c in u)if(Object.prototype.hasOwnProperty.call(u,c)&&(a=P[c])){F=u[c];var R=[];for(n=0;n<F.length;n++)if(A=F[n],r=a.hot._acceptedDependencies[A]){if(-1!==R.indexOf(r))continue;R.push(r)}for(n=0;n<R.length;n++){r=R[n];try{r(F)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:F[n],error:e}),t.ignoreErrored||N||(N=e)}}}for(n=0;n<M.length;n++){var B=M[n];c=B.module,s=[c];try{S(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:r,originalError:e}),t.ignoreErrored||N||(N=r),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(m("fail"),Promise.reject(N)):(m("idle"),new Promise(function(e){e(h)}))}var P={},H={0:0},k=[];function S(t){if(P[t])return P[t].exports;var r=P[t]={i:t,l:!1,exports:{},hot:p(t),parents:(d=s,s=[],d),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=P[e];if(!t)return S;var r=function(r){return t.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(s=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&m("prepare"),E++,S.e(e).then(t,function(e){throw t(),e});function t(){E--,"prepare"===f&&(w[e]||j(e),0===E&&0===b&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),S.t(e,-2&t)},r}(t)),r.l=!0,r.exports}S.m=e,S.c=P,S.d=function(e,t,r){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)S.d(r,n,function(t){return e[t]}.bind(null,n));return r},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="",S.h=function(){return l};var M=window.webpackJsonp=window.webpackJsonp||[],A=M.push.bind(M);M.push=t,M=M.slice();for(var F=0;F<M.length;F++)t(M[F]);var C=A;k.push(["./src/index.js",1]),r()}({"./src/index.js":function(e,t,r){"use strict";r.r(t);r("./node_modules/bootstrap/dist/css/bootstrap.min.css"),r("./src/styles/styles.scss"),r("./node_modules/bootstrap/dist/js/bootstrap.js");var n=r("./node_modules/react/index.js"),o=r.n(n),a=r("./node_modules/react-dom/index.js"),l=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Webpack 4 starter boilerplate template with React, Bootstrap 4"),o.a.createElement("div",{className:"welcome"},"Thanks for using this preconfigured starter template. I really wish it will help you maintain and build a fast and scalable application."),o.a.createElement("p",null,"If you encounter any bugs, feel free to open issues here:"," ",o.a.createElement("a",{href:"https://github.com/shivero/webpack-4-react-bootstrap-starter-template"},"[Github]"),"."),o.a.createElement("p",null,"This project can be always better, so if you have ideas - I sincerely encourage you to create a pull request on Github."),o.a.createElement(c,null),o.a.createElement(i,null))};function c(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Example image from /src"),o.a.createElement("div",{className:"bg-demo"}))}function i(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Boostrap Form demo"),o.a.createElement("hr",null),o.a.createElement("form",null,o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleFormControlInput1"},"Email address"),o.a.createElement("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com"})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleFormControlSelect1"},"Example select"),o.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleFormControlSelect2"},"Example multiple select"),o.a.createElement("select",{multiple:!0,class:"form-control",id:"exampleFormControlSelect2"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleFormControlTextarea1"},"Example textarea"),o.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3"}))))}r.n(a).a.render(o.a.createElement(l,null),document.getElementById("app"));var s,d=[1,2,3];(s=console).log.apply(s,d),e.hot.accept()},"./src/styles/styles.scss":function(e,t){}});