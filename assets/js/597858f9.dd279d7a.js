"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(2389);const i={},o=void 0,l={unversionedId:"paid/Legacy/SecurityCameras/Configuration/Auth Files",id:"paid/Legacy/SecurityCameras/Configuration/Auth Files",title:"Auth Files",description:"Auth files represent the biggest challenge while configuring the script.",source:"@site/docs/paid/Legacy/SecurityCameras/Configuration/Auth Files.mdx",sourceDirName:"paid/Legacy/SecurityCameras/Configuration",slug:"/paid/Legacy/SecurityCameras/Configuration/Auth Files",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Auth Files",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/paid/Legacy/SecurityCameras/Configuration/Auth Files.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/"},next:{title:"Config File",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Config File"}},s={},u=[{value:"Client Side",id:"client-side",level:2},{value:"InitFramework",id:"initframework",level:3},{value:"pDataLoop",id:"pdataloop",level:3},{value:"GetAuth",id:"getauth",level:3},{value:"notify",id:"notify",level:3},{value:"isAbleToRepair",id:"isabletorepair",level:3},{value:"drawInfo",id:"drawinfo",level:3},{value:"hideUi",id:"hideui",level:3},{value:"onCamBroken",id:"oncambroken",level:3},{value:"Server Side",id:"server-side",level:2},{value:"Exposed Variables",id:"exposed-variables",level:3},{value:"initFramework",id:"initframework-1",level:3},{value:"removeItem",id:"removeitem",level:3},{value:"notify",id:"notify-1",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Auth files represent the biggest challenge while configuring the script.\nIf your environment matches the script defaults (uses a supported version of ESX or QB) then you probably don't need to edit these files.\nHowever, if you are having issues like notifications not showing up, nil variable error spamming and any weird error, you probably do need to edit them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Auth files are meant to be an API that interacts with the script and supplies its independent core with the information it needs\nto behave correctly.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Auth files are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/modules/public/")," folder.")),(0,r.kt)("h2",{id:"client-side"},"Client Side"),(0,r.kt)("h3",{id:"initframework"},"InitFramework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string) -> object"',title:'"(string)',"->":!0,'object"':!0},"local initFramework = function(version)\n    ...\n    return core\nend\n")),(0,r.kt)("p",null,"The job of this function is to return the Framework core.\nIf your framework is different from QB or ESX you should change the content of this function to return\nthe core object of your framework."),(0,r.kt)("h3",{id:"pdataloop"},"pDataLoop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="() -> any"',title:'"()',"->":!0,'any"':!0},"local pDataLoop = function()\n    ...\nend\n")),(0,r.kt)("p",null,"This function is used to update the player data object when necessary."),(0,r.kt)("h3",{id:"getauth"},"GetAuth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="() -> string"',title:'"()',"->":!0,'string"':!0},"local GetAuth = function()\n    if PlayerData == nil or PlayerData.job == nil or PlayerData.job.name == nil then return end\n    return PlayerData.job.name -- In this case, for default reasons, it returns the job name\nend\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"GetAuth")," must return a string that matches the management parameter of the interested zones config,\nthe script uses this function to determine wheter a player has access to a specific zone.\nIn the above case (default code) we can see that it depends on the pDataLoop described before."),(0,r.kt)("h3",{id:"notify"},"notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string) -> any"',title:'"(string)',"->":!0,'any"':!0},'local notify = function(text)\n    local f = (FxCfg.options.useFramework == "ESX") and ESX.ShowNotification or QBCore.Functions.Notify\n    return f(text)\nend\n')),(0,r.kt)("p",null,"This function does exactly what its name tells, it sends a notification with the given text."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you're using ESX double check that your version is new enough to support the used notification syntax")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to edit this function if you are using a custom notification system")),(0,r.kt)("h3",{id:"isabletorepair"},"isAbleToRepair"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(boolean) -> boolean"',title:'"(boolean)',"->":!0,'boolean"':!0},"local isAbleToRepair = function(standard) -- Must return true in order for the player to be able to fix the cameras // The parameter is the standard auth ( player has a management role for the zone )\n    return standard\nend\n")),(0,r.kt)("p",null,'This function is used to differentiate the view and delete permissions from the repair permissions.\nThe parameter "standard" allows you to know wheter the player would be authorized to view them.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This function is meant to be used in RP servers to create a separate job that can repair cameras")),(0,r.kt)("h3",{id:"drawinfo"},"drawInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string, vector3) -> any"',title:'"(string,',"vector3)":!0,"->":!0,'any"':!0},"local drawInfo = function(text,coords) -- Used for drawing text in 3d, change to your liking\n    AddTextEntry('HelpText', text)\n    SetFloatingHelpTextWorldPosition(1, coords)\n    SetFloatingHelpTextStyle(1, 1, 2, -1, 3, 0)\n    BeginTextCommandDisplayHelp('HelpText')\n    EndTextCommandDisplayHelp(2, false, false, -1)\nend\n")),(0,r.kt)("p",null,"As the comment suggests, this function handles the drawing of the blips for repairing or viewing the cameras.\nThe default system uses the ",(0,r.kt)("em",{parentName:"p"},"HelpText")," blip, a clean and built-in 3d marker."),(0,r.kt)("h3",{id:"hideui"},"hideUi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(boolean) -> any"',title:'"(boolean)',"->":!0,'any"':!0},'local hideUi = function(show) \n    ExecuteCommand("toggleui")\nend\n')),(0,r.kt)("p",null,"This function is useful to hide other UIs when the cameras UI is active.\nThe default code invokes the ",(0,r.kt)("em",{parentName:"p"},"toggleui")," command, used in the ",(0,r.kt)("em",{parentName:"p"},"trew_hud_ui")," resource."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," parameter is inverted. It is false when the UI should be visible, and false otherwise.")),(0,r.kt)("h3",{id:"oncambroken"},"onCamBroken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(object, object, boolean) -> any"',title:'"(object,',"object,":!0,"boolean)":!0,"->":!0,'any"':!0},"local onCamBroken = function(baseCfg,cameraCfg,hasAuth) -- hasAuth is true when the player has the permissions needed to view the camera\n    if hasAuth then\n        ...\n    end\nend\n")),(0,r.kt)("p",null,"This function is an event handler triggered when a camera gets broken.\nIt gets triggered on all clients and the function body decides wheter to show it to everyone or just the authorized\nplayers."),(0,r.kt)("p",null,"Here's a description of the parameters: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseCfg")," : the config object for the zone the broken camera is in;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cameraCfg")," : the config object for the broken camera;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasAuth")," : wheter the player would be authorized to view the camera (true) or not (false);")),(0,r.kt)("h2",{id:"server-side"},"Server Side"),(0,r.kt)("h3",{id:"exposed-variables"},"Exposed Variables"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Exposed variables are variables that are not local to the core scope and can be read by the auth_sv.lua script.")),(0,r.kt)("p",null,"These particular variables are used to trigger core functions whenever needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"E.G.")," : When the initFramework function registers the items, it calls the functions inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemCbs")," object to trigger the wanted behaviour."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="ItemCbs"',title:'"ItemCbs"'},'{\n    "cameraItem" = function() ... end,\n    "itemtoView" = function() ... end\n}\n')),(0,r.kt)("p",null,"This is currently the only exposed variable."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cameraItem")," : triggers the placement of a camera it takes the player id as first argument;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"itemtoView")," : shows the tablet UI on a player.")),(0,r.kt)("h3",{id:"initframework-1"},"initFramework"),(0,r.kt)("p",null,"(Same as client-side)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string) -> object"',title:'"(string)',"->":!0,'object"':!0},"local initFramework = function(version)\n    ...\n    return core\nend\n")),(0,r.kt)("p",null,"The job of this function is to return the Framework core.\nIf your framework is different from QB or ESX you should change the content of this function to return\nthe core object of your framework."),(0,r.kt)("h3",{id:"removeitem"},"removeItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string, number, number) -> any"',title:'"(string,',"number,":!0,"number)":!0,"->":!0,'any"':!0},'local removeItem = function(item, q, source)\n    if FxCfg.options.useFramework == "ESX" then\n        local xp = ESX.GetPlayerFromId(source)\n        xp.removeInventoryItem(FxCfg.options.cameraItem, 1)\n    elseif FxCfg.options.useFramework == "QB" then\n        local p = QBCore.Functions.GetPlayer(source)\n        p.Functions.RemoveItem(FxCfg.options.cameraItem, 1, "")\n    end\nend\n')),(0,r.kt)("p",null,"This function removes an item from the player inventory (usually the security camera item)."),(0,r.kt)("p",null,"Parameters :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"item")," : The item name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"q")," : The quantity to remove;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source")," : The target's serverID.")),(0,r.kt)("h3",{id:"notify-1"},"notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="(string, number) -> any"',title:'"(string,',"number)":!0,"->":!0,'any"':!0},"local notify = function(text,pid)\n    TriggerClientEvent('esx:showNotification', pid, text)\nend\n")),(0,r.kt)("p",null,"This function sends a notification to a player."),(0,r.kt)("p",null,"Parameters : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text")," : The notification body;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pid")," : The target's serverID.")))}p.isMDXComponent=!0}}]);