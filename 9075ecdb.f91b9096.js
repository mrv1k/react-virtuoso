(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),i=(r(0),r(131)),c={id:"_interfaces_.scrollseekconfiguration",title:"Interface: ScrollSeekConfiguration",sidebar_label:"ScrollSeekConfiguration"},o={unversionedId:"api/interfaces/_interfaces_.scrollseekconfiguration",id:"api/interfaces/_interfaces_.scrollseekconfiguration",isDocsHomePage:!1,title:"Interface: ScrollSeekConfiguration",description:'"interfaces".ScrollSeekConfiguration',source:"@site/docs/api/interfaces/_interfaces_.scrollseekconfiguration.md",slug:"/api/interfaces/_interfaces_.scrollseekconfiguration",permalink:"/api/interfaces/_interfaces_.scrollseekconfiguration",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.scrollseekconfiguration.md",version:"current",sidebar_label:"ScrollSeekConfiguration",sidebar:"someSidebar",previous:{title:"Interface: RecordItem<D>",permalink:"/api/interfaces/_interfaces_.recorditem"},next:{title:"Interface: ScrollSeekToggle",permalink:"/api/interfaces/_interfaces_.scrollseektoggle"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"change",id:"change",children:[]},{value:"enter",id:"enter",children:[]},{value:"exit",id:"exit",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".ScrollSeekConfiguration"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ScrollSeekConfiguration"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"change"},"change"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"change"),": (velocity: number, range: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1b86b0e/src/interfaces.ts#L90"}),"interfaces.ts:90"))),Object(i.b)("p",null,"called during scrolling in scroll seek mode - use to display a hint where the list is."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"enter"},"enter"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"enter"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseektoggle"}),"ScrollSeekToggle")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1b86b0e/src/interfaces.ts#L86"}),"interfaces.ts:86"))),Object(i.b)("p",null,'Callback to determine if the list should enter "scroll seek" mode.'),Object(i.b)("hr",null),Object(i.b)("h3",{id:"exit"},"exit"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"exit"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseektoggle"}),"ScrollSeekToggle")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1b86b0e/src/interfaces.ts#L94"}),"interfaces.ts:94"))),Object(i.b)("p",null,'Callback to determine if the list should enter "scroll seek" mode.'))}b.isMDXComponent=!0}}]);