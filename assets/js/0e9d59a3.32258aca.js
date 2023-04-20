"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[366],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>p});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return a?t.createElement(g,i(i({ref:n},d),{},{components:a})):t.createElement(g,i({ref:n},d))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));a.p;const o={},i=void 0,s={unversionedId:"paid/Legacy/SecurityCameras/Configuration/Config File",id:"paid/Legacy/SecurityCameras/Configuration/Config File",title:"Config File",description:"The config file, named config.lua contains the most basic configuration options.",source:"@site/docs/paid/Legacy/SecurityCameras/Configuration/Config File.mdx",sourceDirName:"paid/Legacy/SecurityCameras/Configuration",slug:"/paid/Legacy/SecurityCameras/Configuration/Config File",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Config File",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/paid/Legacy/SecurityCameras/Configuration/Config File.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auth Files",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Auth Files"},next:{title:"Database",permalink:"/docs/paid/Legacy/SecurityCameras/Configuration/Database"}},l={},c=[{value:"Zones configuration",id:"zones-configuration",level:2},{value:"Advanced permissions",id:"advanced-permissions",level:3},{value:"Using identifiers with Advanced Permissions",id:"using-identifiers-with-advanced-permissions",level:3},{value:"Generic Options",id:"generic-options",level:2},{value:"Database or JSON?",id:"database-or-json",level:3},{value:"The mount controls",id:"the-mount-controls",level:3}],d={toc:c};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The config file, named ",(0,r.kt)("inlineCode",{parentName:"p"},"config.lua")," contains the most basic configuration options."),(0,r.kt)("h2",{id:"zones-configuration"},"Zones configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'    ...\n    cameras = {\n        pacific = {\n            label = "Pacific Standard",\n            managementOverride = "Law Enforcement Agencies",\n            management = {\n                {\n                    label = "Police",\n                    job = "police",\n                    identifiers = {\n                        ["steam:100000000"] = true -- Fake identifier, just for demonstration (only steam identifiers allowed)\n                    },\n                    permissions = { -- Set to nil if you don\'t want advanced permissions for this job\n                        view = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                            if FxCfg.options.useFramework == "ESX" then\n                                return true\n                            else\n                                return true\n                            end\n                        end,\n\n                        repair = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                            if FxCfg.options.useFramework == "ESX" then\n                                return true\n                            else\n                                return true\n                            end\n                        end,\n\n                        create = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                            print("JD", json.encode(jobData))\n                            if FxCfg.options.useFramework == "ESX" then\n                                return jobData.grade > 3\n                            else\n                                return jobData.grade.level > 3\n                            end\n                        end,\n\n                        delete = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                            if FxCfg.options.useFramework == "ESX" then\n                                return jobData.grade > 3\n                            else\n                                return jobData.grade.level > 3\n                            end\n                        end,\n                    }\n                }\n            },\n\n            cams = {},\n\n            repairCams = vector3(263.1777, 211.5018, 110.2872)\n        }\n    }\n    ...\n')),(0,r.kt)("p",null,"The shown code illustrates an example of a working configuration."),(0,r.kt)("p",null,"The configuration parameters mean the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"label")," : The shown name of the zone on the tablet and the placement configurator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"managementOverride")," : When set, the tablet management section shows its value (by default, a string with the management jobs separated by comas is shown)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"management")," : The authorized jobs for the zone. Each job must have a ",(0,r.kt)("em",{parentName:"li"},"label")," and a ",(0,r.kt)("em",{parentName:"li"},"job")," parameter, where the job is the framework job id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cams")," : A set of pre-existing cameras can be shown from the beginning. Each camera is an object with a ",(0,r.kt)("em",{parentName:"li"},"label"),", a ",(0,r.kt)("em",{parentName:"li"},"coords")," (as a vector3) and a ",(0,r.kt)("em",{parentName:"li"},"heading")," parameter. We suggest using in-game placement as this was a really old feature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"repairCams")," : Describes the position of the 3d marker that is used to trigger the cam repairing.")),(0,r.kt)("p",null,'To create a zone, simply copy and paste the default displayed zone ("pacific") and add a coma after the existing one.\nThen change the name of the zone to avoid duplicates and edit it accordingly to your needs.'),(0,r.kt)("p",null,"Example of a multi-zone config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'...\n    cameras = {\n        pacific = {\n            label = "Pacific Standard",\n            managementOverride = "Law Enforcement Agencies",\n            management = {\n                {\n                    label = "Police",\n                    job = "police"\n                }\n            },\n\n            cams = {},\n\n            repairCams = vector3(263.1777, 211.5018, 110.2872)\n        },\n\n        // highlight-next-line\n        zone2 = {\n            label = "Another zone",\n            managementOverride = "Another job",\n            management = {\n                {\n                    label = "Medics",\n                    job = "ambulance"\n                }\n            },\n\n            cams = {},\n            // highlight-next-line\n            repairCams = vector3(112.6789, 111.1058, 100.0562)\n        },\n\n    }\n...\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The highlighted lines must be different between zones in order for the script to work properly")),(0,r.kt)("h3",{id:"advanced-permissions"},"Advanced permissions"),(0,r.kt)("p",null,"Advanced permissions is the latest introduced feature in the product.\nIt allows to split the different actions into different permissions, so that you can have a job that can only create cameras, but not delete them, or have certain people of that job authorized only for some of the possible actions."),(0,r.kt)("p",null,"You can define the permissions for each job in the ",(0,r.kt)("em",{parentName:"p"},"management")," object, as shown in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'...\nmanagement = {\n    {\n        label = "LSPD",\n        job = "police",\n\n        permissions = {\n            view = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                if FxCfg.options.useFramework == "ESX" then\n                    return true\n                else\n                    return true\n                end\n            end,\n\n            repair = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                if FxCfg.options.useFramework == "ESX" then\n                    return true\n                else\n                    return true\n                end\n            end,\n\n            create = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                if FxCfg.options.useFramework == "ESX" then\n                    return jobData.grade > 3\n                else\n                    return jobData.grade.level > 3\n                end\n            end,\n\n            delete = function(jobData) -- [[ QB: jobData.grade.level, jobData.grade.name, ESX: jobData.grade, jobData.grade_name ]]\n                if FxCfg.options.useFramework == "ESX" then\n                    return jobData.grade > 3\n                else\n                    return jobData.grade.level > 3\n                end\n            end,\n        }\n    }\n}\n...\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The previous configuration is defaulted to have everyone able to view and repair cameras, you may need to adjust it to your own needs")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To avoid using advanced permissions, you may set permissions = nil")),(0,r.kt)("h3",{id:"using-identifiers-with-advanced-permissions"},"Using identifiers with Advanced Permissions"),(0,r.kt)("p",null,"Using identifiers with advanced permissions may seem tricky.\nThe functions to check the permissions do not provide directly the identifiers data.\nHowever, you may use ",(0,r.kt)("em",{parentName:"p"},"Fx.vars.identifers")," to access the player identifiers client-side."),(0,r.kt)("h2",{id:"generic-options"},"Generic Options"),(0,r.kt)("h3",{id:"database-or-json"},"Database or JSON?"),(0,r.kt)("p",null,"The script can use either a database or a json file to store the cameras.\nWe recommend switching to the new database system (more about it here: TODO) as it avoids file permissions and compatibility problems.\nHowever, if you don't want to download oxmysql or prefer using the old system, you can set ",(0,r.kt)("em",{parentName:"p"},"useDatabase")," to false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'...\n    options = {\n        useFramework = "ESX", -- available: ESX,QB\n        esxEvent = "esx:getSharedObject",\n        useDatabase = true, -- Decides wheter to use the old json system or the database update\n        debug = true,\n        drawDistance = 5.0,\n        drawSleep = 50, -- Higher : more optimized, blips lag; Lower : less optimized, blips are fluid\n        timeToFixCams = 60 * 1000 * 10, -- Ms that take for cameras to be fixed\n        itemtoView = "tablet", -- Item name (ESX/QB only) that if used opens the cameras menu\n        cameraItem = "security_camera", -- Camera item (ESX/QB only) that can be placed via an in game menu,\n        mountControls = {\n            up = 172, -- you can find all of the controls here : https://docs.fivem.net/docs/game-references/controls/\n            down = 173,\n            left = 174,\n            right = 175,\n            rleft = 20,\n            rright = 26\n        },\n        ui = {\n            menuLogo = "https://www.rapidalarms.com.au/wp-content/uploads/2019/06/dome-cctv-camera.jpg",\n            menuText = "Los Santos CCTV"\n        }\n    }\n...\n')),(0,r.kt)("p",null,"Many settings in the ",(0,r.kt)("em",{parentName:"p"},"options")," object are pretty much self-explanatory or explained by comments."),(0,r.kt)("h3",{id:"the-mount-controls"},"The mount controls"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deprecated, the script now uses the UI to move the camera.")))}m.isMDXComponent=!0}}]);