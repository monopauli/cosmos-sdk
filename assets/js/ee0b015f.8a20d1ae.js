"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[9445],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(t),d=n,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||p;return t?r.createElement(k,i(i({ref:a},m),{},{components:t})):r.createElement(k,i({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2537:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var r=t(7462),n=(t(7294),t(3905));const p={sidebar_position:1},i="x/params",l={unversionedId:"modules/params/README",id:"modules/params/README",title:"x/params",description:"Note: The Params module has been depreacted in favour of each module housing its own parameters.",source:"@site/docs/modules/params/README.md",sourceDirName:"modules/params",slug:"/modules/params/",permalink:"/main/modules/params/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"x/nft",permalink:"/main/modules/nft/"},next:{title:"x/slashing",permalink:"/main/modules/slashing/"}},s={},o=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Keeper",id:"keeper",level:2},{value:"Subspace",id:"subspace",level:2},{value:"Key",id:"key",level:3},{value:"KeyTable",id:"keytable",level:3},{value:"ParamSet",id:"paramset",level:3}],m={toc:o};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xparams"},(0,n.kt)("inlineCode",{parentName:"h1"},"x/params")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: The Params module has been depreacted in favour of each module housing its own parameters. ")),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"Package params provides a globally available parameter store."),(0,n.kt)("p",null,"There are two main types, Keeper and Subspace. Subspace is an isolated namespace for a\nparamstore, where keys are prefixed by preconfigured spacename. Keeper has a\npermission to access all existing spaces."),(0,n.kt)("p",null,"Subspace can be used by the individual keepers, which need a private parameter store\nthat the other keepers cannot modify. The params Keeper can be used to add a route to ",(0,n.kt)("inlineCode",{parentName:"p"},"x/gov")," router in order to modify any parameter in case a proposal passes."),(0,n.kt)("p",null,"The following contents explains how to use params module for master and user modules."),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#keeper"},"Keeper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#subspace"},"Subspace"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#key"},"Key")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#keytable"},"KeyTable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#paramset"},"ParamSet"))))),(0,n.kt)("h2",{id:"keeper"},"Keeper"),(0,n.kt)("p",null,"In the app initialization stage, ",(0,n.kt)("a",{parentName:"p",href:"#subspace"},"subspaces")," can be allocated for other modules' keeper using ",(0,n.kt)("inlineCode",{parentName:"p"},"Keeper.Subspace")," and are stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"Keeper.spaces"),". Then, those modules can have a reference to their specific parameter store through ",(0,n.kt)("inlineCode",{parentName:"p"},"Keeper.GetSubspace"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type ExampleKeeper struct {\n    paramSpace paramtypes.Subspace\n}\n\nfunc (k ExampleKeeper) SetParams(ctx sdk.Context, params types.Params) {\n    k.paramSpace.SetParamSet(ctx, &params)\n}\n")),(0,n.kt)("h2",{id:"subspace"},"Subspace"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Subspace")," is a prefixed subspace of the parameter store. Each module which uses the\nparameter store will take a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subspace")," to isolate permission to access."),(0,n.kt)("h3",{id:"key"},"Key"),(0,n.kt)("p",null,"Parameter keys are human readable alphanumeric strings. A parameter for the key\n",(0,n.kt)("inlineCode",{parentName:"p"},'"ExampleParameter"')," is stored under ",(0,n.kt)("inlineCode",{parentName:"p"},'[]byte("SubspaceName" + "/" + "ExampleParameter")'),",\nwhere ",(0,n.kt)("inlineCode",{parentName:"p"},'"SubspaceName"')," is the name of the subspace."),(0,n.kt)("p",null,"Subkeys are secondary parameter keys those are used along with a primary parameter key.\nSubkeys can be used for grouping or dynamic parameter key generation during runtime."),(0,n.kt)("h3",{id:"keytable"},"KeyTable"),(0,n.kt)("p",null,"All of the parameter keys that will be used should be registered at the compile\ntime. ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyTable")," is essentially a ",(0,n.kt)("inlineCode",{parentName:"p"},"map[string]attribute"),", where the ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," is a parameter key."),(0,n.kt)("p",null,"Currently, ",(0,n.kt)("inlineCode",{parentName:"p"},"attribute")," consists of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reflect.Type"),", which indicates the parameter\ntype to check that provided key and value are compatible and registered, as well as a function ",(0,n.kt)("inlineCode",{parentName:"p"},"ValueValidatorFn")," to validate values."),(0,n.kt)("p",null,"Only primary keys have to be registered on the ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyTable"),". Subkeys inherit the\nattribute of the primary key."),(0,n.kt)("h3",{id:"paramset"},"ParamSet"),(0,n.kt)("p",null,"Modules often define parameters as a proto message. The generated struct can implement\n",(0,n.kt)("inlineCode",{parentName:"p"},"ParamSet")," interface to be used with the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"KeyTable.RegisterParamSet()"),": registers all parameters in the struct"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Subspace.{Get, Set}ParamSet()"),": Get to & Set from the struct")),(0,n.kt)("p",null,"The implementor should be a pointer in order to use ",(0,n.kt)("inlineCode",{parentName:"p"},"GetParamSet()"),"."))}u.isMDXComponent=!0}}]);