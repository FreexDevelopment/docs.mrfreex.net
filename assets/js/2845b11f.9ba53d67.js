"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"paid/Legacy/SecurityCameras/Configuration/Database",id:"paid/Legacy/SecurityCameras/Configuration/Database",title:"Database",description:"Configuration",source:"@site/docs/paid/Legacy/SecurityCameras/Configuration/Database.mdx",sourceDirName:"paid/Legacy/SecurityCameras/Configuration",slug:"/paid/Legacy/SecurityCameras/Configuration/Database",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/paid/Legacy/SecurityCameras/Configuration/Database.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Config File",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Config File"},next:{title:"Placing Cameras",permalink:"/docs/paid/Legacy/SecurityCameras/Placing Cameras"}},u={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Switching to oxmysql",id:"switching-to-oxmysql",level:2}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'If your server is set up correctly, you should just need to execute the "convert_to_db" command.\nThe script will ready your database inserting the needed table. If you are having issues running the command, you may execute the SQL manually.'),(0,a.kt)("h2",{id:"switching-to-oxmysql"},"Switching to oxmysql"),(0,a.kt)("p",null,'Update 1.3.0 introduced the possibility to use oxmysql instead of saving data to JSON files.\nIf you\'d like to do so, set "useDatabase = true" in the config.lua file, restart the script and run the "convert_to_db" command from your server console.'),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"You cannot run the command from your client, you must execute it server side")),(0,a.kt)("p",null,"This command will convert your existing data to the database and will stop the script from updating the JSON files further on."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Do not run the command more than once without emptying the database table")))}p.isMDXComponent=!0}}]);