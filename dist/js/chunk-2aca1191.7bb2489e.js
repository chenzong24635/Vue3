(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aca1191"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?f(t):c(n(t))}},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),o=r("17c2"),i=r("9112");for(var f in c){var a=n[f],u=a&&a.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(s){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),o=r("ae40"),i=c("forEach"),f=o("forEach");t.exports=i&&f?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),c=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=c},{forEach:c})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6f0f":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,o(0,r)):t[i]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),i=r("c430"),f=r("83ab"),a=r("4930"),u=r("fdbf"),s=r("d039"),b=r("5135"),l=r("e8b5"),d=r("861d"),p=r("825a"),g=r("7b0b"),O=r("fc6a"),y=r("c04e"),v=r("5c6c"),h=r("7c73"),j=r("df75"),m=r("241c"),S=r("057f"),w=r("7418"),L=r("06cf"),P=r("9bf2"),E=r("d1e7"),T=r("9112"),M=r("6eeb"),D=r("5692"),k=r("f772"),C=r("d012"),N=r("90e3"),x=r("b622"),V=r("e538"),G=r("746f"),A=r("d44e"),F=r("69f3"),H=r("b727").forEach,J=k("hidden"),R="Symbol",I="prototype",q=x("toPrimitive"),B=F.set,_=F.getterFor(R),z=Object[I],Q=c.Symbol,W=o("JSON","stringify"),K=L.f,U=P.f,X=S.f,Y=E.f,Z=D("symbols"),$=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),rt=D("wks"),nt=c.QObject,ct=!nt||!nt[I]||!nt[I].findChild,ot=f&&s((function(){return 7!=h(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(z,e);n&&delete z[e],U(t,e,r),n&&t!==z&&U(z,e,n)}:U,it=function(t,e){var r=Z[t]=h(Q[I]);return B(r,{type:R,tag:t,description:e}),f||(r.description=e),r},ft=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,r){t===z&&at($,e,r),p(t);var n=y(e,!0);return p(r),b(Z,n)?(r.enumerable?(b(t,J)&&t[J][n]&&(t[J][n]=!1),r=h(r,{enumerable:v(0,!1)})):(b(t,J)||U(t,J,v(1,{})),t[J][n]=!0),ot(t,n,r)):U(t,n,r)},ut=function(t,e){p(t);var r=O(e),n=j(r).concat(pt(r));return H(n,(function(e){f&&!bt.call(r,e)||at(t,e,r[e])})),t},st=function(t,e){return void 0===e?h(t):ut(h(t),e)},bt=function(t){var e=y(t,!0),r=Y.call(this,e);return!(this===z&&b(Z,e)&&!b($,e))&&(!(r||!b(this,e)||!b(Z,e)||b(this,J)&&this[J][e])||r)},lt=function(t,e){var r=O(t),n=y(e,!0);if(r!==z||!b(Z,n)||b($,n)){var c=K(r,n);return!c||!b(Z,n)||b(r,J)&&r[J][n]||(c.enumerable=!0),c}},dt=function(t){var e=X(O(t)),r=[];return H(e,(function(t){b(Z,t)||b(C,t)||r.push(t)})),r},pt=function(t){var e=t===z,r=X(e?$:O(t)),n=[];return H(r,(function(t){!b(Z,t)||e&&!b(z,t)||n.push(Z[t])})),n};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===z&&r.call($,t),b(this,J)&&b(this[J],e)&&(this[J][e]=!1),ot(this,e,v(1,t))};return f&&ct&&ot(z,e,{configurable:!0,set:r}),it(e,t)},M(Q[I],"toString",(function(){return _(this).tag})),M(Q,"withoutSetter",(function(t){return it(N(t),t)})),E.f=bt,P.f=at,L.f=lt,m.f=S.f=dt,w.f=pt,V.f=function(t){return it(x(t),t)},f&&(U(Q[I],"description",{configurable:!0,get:function(){return _(this).description}}),i||M(z,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),H(j(rt),(function(t){G(t)})),n({target:R,stat:!0,forced:!a},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ft(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!f},{create:st,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),W){var gt=!a||s((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!ft(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ft(e))return e}),c[1]=e,W.apply(null,c)}})}Q[I][q]||T(Q[I],q,Q[I].valueOf),A(Q,R),C[J]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),o=r("df75"),i=r("d039"),f=i((function(){o(1)}));n({target:"Object",stat:!0,forced:f},{keys:function(t){return o(c(t))}})},ca2a:function(t,e,r){"use strict";r("6f0f")},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),o=r("56ef"),i=r("fc6a"),f=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),c=f.f,u=o(n),s={},b=0;while(u.length>b)r=c(n,e=u[b++]),void 0!==r&&a(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),o=r("fc6a"),i=r("06cf").f,f=r("83ab"),a=c((function(){i(1)})),u=!f||a;n({target:"Object",stat:!0,forced:u,sham:!f},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f0a0:function(t,e,r){"use strict";r.r(e);var n=r("5c40"),c=r("9ff4"),o=Object(n["M"])("data-v-b749484c");Object(n["B"])("data-v-b749484c");var i={class:""};Object(n["z"])();var f=o((function(t,e){return Object(n["y"])(),Object(n["e"])("div",i,[Object(n["i"])("p",null,"age--- "+Object(c["E"])(t.age),1),Object(n["i"])("p",null,"age1--- "+Object(c["E"])(t.age1),1),Object(n["i"])("p",null,"count--- "+Object(c["E"])(t.count),1),Object(n["i"])("p",null,"userMsg--- "+Object(c["E"])(t.userMsg),1),Object(n["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"add")])})),a=r("5530"),u=r("a1e9"),s={setup:function(){var t=Object(u["i"])({age:11,age1:Object(n["d"])((function(){return t.age-1}))}),e=Object(n["d"])((function(){return"age:"+t.age}));console.log(e);var r=Object(n["d"])({get:function(){return"我的年龄是:"+t.age},set:function(e){t.age=e}});t.age=666,console.log(r);var c={add:function(){t.age++}};return Object(a["a"])({},Object(u["q"])(t),{count:e,userMsg:r},c)}};r("ca2a");s.render=f,s.__scopeId="data-v-b749484c";e["default"]=s},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);