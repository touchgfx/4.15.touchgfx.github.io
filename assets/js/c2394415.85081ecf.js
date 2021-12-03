(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4591],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),c=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&h(t,n,e[n]);if(g)for(var n of g(e))k.call(e,n)&&h(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:c,to:h,href:N,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":v,autoAddBaseUrl:w=!0}=n,x=((t,e)=>{var n={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&g)for(var r of g(t))e.indexOf(r)<0&&k.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:C}=(0,u.C)(),W=(0,r.useContext)(s),T=h||N,R=(0,l.Z)(T),P=null==T?void 0:T.replace("pathname://","");let j=void 0!==P?(z=P,w&&(t=>t.startsWith("/"))(z)?C(z):z):void 0;var z;j&&R&&(j=(0,d.applyTrailingSlash)(j,O));const M=(0,r.useRef)(!1),S=c?a.OL:a.rU,U=o.Z.canUseIntersectionObserver;let L;(0,r.useEffect)((()=>(!U&&R&&null!=j&&window.docusaurus.prefetch(j),()=>{U&&L&&L.disconnect()})),[j,U,R]);const Z=null!==(e=null==j?void 0:j.startsWith("#"))&&void 0!==e&&e,B=!j||!R||Z;return j&&R&&!Z&&!v&&W.collectLink(j),B?r.createElement("a",b(b({href:j},T&&!R&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(S,b((D=b({},x),p(D,m({onMouseEnter:()=>{M.current||null==j||(window.docusaurus.preload(j),M.current=!0)},innerRef:t=>{var e,n;U&&t&&R&&(e=t,n=()=>{null!=j&&window.docusaurus.prefetch(j)},L=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(L.unobserve(e),L.disconnect(),n())}))})),L.observe(e))},to:j||""}))),c&&{isActive:_,activeClassName:y}));var D}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,r)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),r="/"===n?"/":(a=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(a):function(t){return t.endsWith("/")?t.slice(0,-1):t}(a));var a;return t.replace(n,r)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},22255:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return h},default:function(){return N}});var r=n(3905),a=n(31217),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))c.call(e,n)&&p(t,n,e[n]);return t};const g={title:"CanvasWidgetRenderer"},f=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_canvas_widget_renderer",id:"api/classes/classtouchgfx_1_1_canvas_widget_renderer",isDocsHomePage:!1,title:"CanvasWidgetRenderer",description:"Class for supporting drawing of figures.",source:"@site/docs/api/classes/classtouchgfx_1_1_canvas_widget_renderer.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_canvas_widget_renderer",permalink:"/4.15/docs/api/classes/classtouchgfx_1_1_canvas_widget_renderer",version:"current",frontMatter:{title:"CanvasWidgetRenderer"},sidebar:"docs",previous:{title:"CanvasWidget",permalink:"/4.15/docs/api/classes/classtouchgfx_1_1_canvas_widget"},next:{title:"Circle",permalink:"/4.15/docs/api/classes/classtouchgfx_1_1_circle"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getMissingBufferSize",id:"getmissingbuffersize",children:[]},{value:"getUsedBufferSize",id:"getusedbuffersize",children:[]},{value:"getWriteMemoryUsageReport",id:"getwritememoryusagereport",children:[]},{value:"setupBuffer",id:"setupbuffer",children:[]},{value:"setWriteMemoryUsageReport",id:"setwritememoryusagereport",children:[]}]}],b={toc:h};function N(t){var e,n=t,{components:l}=n,p=((t,e)=>{var n={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&c.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},b),p),o(e,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," Class for supporting drawing of figures.\nThis class holds the memory which is used by the underlying algorithms. ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget")," will not allocate memory dynamically, but will use memory from the buffer passed to ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer"),". When using the TouchGFX simulator, it is also possible to get a report on the actual amount of memory used for drawing with ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," to help adjusting the buffer size."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_widget"}),"Widget"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport"}),"setWriteMemoryUsageReport"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport"}),"getWriteMemoryUsageReport")),(0,r.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"unsigned"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"Link"},"getMissingBufferSize")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Calculate how much memory was required by CanvasWidgets, but was unavailable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"unsigned"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"Link"},"getUsedBufferSize")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Calculate how much memory has been required by CanvasWidgets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"bool"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"Link"},"getWriteMemoryUsageReport")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Gets write memory usage report flag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"Link"},"setupBuffer")),"(uint8_t * buffer, unsigned bufferSize)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Setup the buffers used by ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"Link"},"setWriteMemoryUsageReport")),"(bool writeUsageReport)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Memory reporting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"getmissingbuffersize"}),"getMissingBufferSize"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","unsigned","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"Link"},"getMissingBufferSize")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Calculate how much memory was required by CanvasWidgets, but was unavailable. "),(0,r.kt)("p",null,"If the value returned is greater than 0 it means the This can be used to fine tune the size of the buffer passed to ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," upon initialization."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The number of bytes required. ")))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"getusedbuffersize"}),"getUsedBufferSize"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","unsigned","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"Link"},"getUsedBufferSize")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Calculate how much memory has been required by CanvasWidgets. "),(0,r.kt)("p",null,"This can be used to fine tune the size of the buffer passed to ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," upon initialization."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The number of bytes required. ")))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"getwritememoryusagereport"}),"getWriteMemoryUsageReport"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"Link"},"getWriteMemoryUsageReport")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets write memory usage report flag. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"true if it CWR writes memory reports, false if not. ")))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"setupbuffer"}),"setupBuffer"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"Link"},"setupBuffer")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"uint8_t *"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"buffer ,"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"unsigned"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"bufferSize"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Setup the buffers used by ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),". "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"buffer"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Buffer reserved for ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"bufferSize"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The size of the buffer."))))))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"setwritememoryusagereport"}),"setWriteMemoryUsageReport"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"Link"},"setWriteMemoryUsageReport")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"writeUsageReport"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Memory reporting. "),(0,r.kt)("p",null,"Memory reporting can be turned on (and off) using this method. CWR will try to work with the given amount of memory passed when calling ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer"}),"setupBuffer()"),". If the outline of the figure is too complex, this will be reported."),(0,r.kt)("p",null,'"CWR requires X bytes" means that X bytes is the highest number of bytes required by CWR so far, but since the size of the invalidated area and the shape of things draw can influence this, this may be reported several times with a higher and higher number. Leave your app running for a long time to find out what the memory requirements are.'),(0,r.kt)("p",null,'"CWR requires X bytes (Y bytes missing)" means the same as the report above, but there as was not enough memory to render the entire shape. To get around this, CWR will split the shape into two separate drawings of half size. This means that less memory is required, but drawing will be (somewhat) slower. After you see this message all future draws will be split into smaller chunks, so memory requirements might not get as high. This is followed by:'),(0,r.kt)("p",null,'"CWR will split draw into multiple draws due to limited memory." actually just means that CWR will try to work with a smaller amount of memory.'),(0,r.kt)("p",null,'In general, if there is enough memory available to run the simulation and never see the message "CWR will split draw ...", this is preferred. The size of the buffer required will be the highest number X reported as "CWR requires X bytes". Good numbers can also be around half of X.'),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"writeUsageReport"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"true to write report."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer"}),"setupBuffer"))))))}N.isMDXComponent=!0}}]);