(function(P,H,d,V,r,Z,a,g,J){"use strict";function K(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(s){if(s!=="default"){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}}),n.default=e,Object.freeze(n)}var t=K(H);const Q=a.findByDisplayName("TextInput"),I=a.findByDisplayName("SwitchItem"),w=a.findByDisplayName("Text")||a.findByDisplayName("LegacyText"),O=a.findByProps("Sizes","Tags"),X=a.findByDisplayName("UserActivityContainer"),$=a.findByDisplayName("FormItem"),D=a.findByDisplayName("ArrowDropDown"),ee=a.findByDisplayName("ArrowDropUp"),M=a.findByDisplayName("SelectTempWrapper"),y=a.find(e=>e.DropdownSizes),c=a.findByDisplayName("Flex"),{ScrollerThin:te}=a.findByProps("ScrollerThin"),re=a.findByDisplayName("SlideIn"),se=a.findByDisplayName("SettingsNotice"),ne=a.findByDisplayName("TransitionGroup"),C=a.findByProps("ModalRoot"),oe=a.findByProps("openModalLazy"),W=e=>oe.openModal(n=>(e.props={...e.props,...n},e)),ie=d.webpack.findByProps("dividerDefault").dividerDefault,ae=d.webpack.findByDisplayName("FormDivider");var N=({className:e})=>t.createElement(ae,{className:[ie,e].join(" ")});const S={...d.webpack.findByProps("marginBottom20")};var x=e=>{Array.isArray(e.children)||(e.children=[e.children]);const n=e.children[0];e.children.splice(0,1);const s=e.children.map(o=>o&&t.createElement(c.Child,{className:"crpc-lowerMargin",grow:0,shrink:0,wrap:!0},o));return delete e.children,t.createElement($,{title:n,className:S.marginBottom20,required:e.required},s.length?t.createElement(c,null,t.createElement(c.Child,{grow:1,shrink:1,wrap:!0},t.createElement(M,{...e})),[...s]):t.createElement(M,{...e}),!e.noDivider&&t.createElement(N,{className:[S.marginTop20,S.marginBottom20].join(" ")}))};const A={...d.webpack.findByProps("marginBottom20")};var h=e=>{const n=e.children;return delete e.children,t.createElement($,{title:n,required:e.required,className:A.marginBottom20},t.createElement(Q,{...e}),!e.noDivider&&t.createElement(N,{className:[A.marginTop20,A.marginBottom20].join(" ")}))};const p={...d.webpack.findByProps("wrapper","base"),...d.webpack.findByProps("flex"),...d.webpack.findByProps("size20"),...d.webpack.findByProps("marginBottom20"),...d.webpack.findByProps("dividerDefault")};var L=({opened:e,children:n,title:s,onChange:o})=>(Array.isArray(n)||(n=[n]),t.createElement("div",null,t.createElement("div",{onClick:()=>o?.(),className:[p.flex,p.alignCenter,p.marginBottom8].join(" ")},e?t.createElement(ee,{className:p.base,width:32,height:32}):t.createElement(D,{className:p.base,width:32,height:32}),t.createElement(w,{className:[p.base,p.size16,p.marginLeft8].join(" ")},s)),e?t.createElement("div",{className:[p.marginLeft8,p.marginBottom20].join(" ")},[...n]):null,!e&&t.createElement(N,{className:p.marginBottom20})));const U=a.findByProps("getActivities"),{useStateFromStores:le}=a.findByProps("useStateFromStores");var F=({user:e})=>{const n=le([U],()=>U.getActivities(e.id));return t.createElement(te,{className:"userProfileScroll-crpc"},n.map(s=>t.createElement(X,{type:"Profile",activity:s,user:e,source:"Profile Modal",className:["userProfile-crpc","newProfileActivityStyles"].join(" ")},s.application_id," - ",s.session_id," - ",s.name)))};const{noticeRegion:ce}=a.findByProps("noticeRegion");var me=({onReset:e,onSave:n})=>t.createElement(ne,null,t.createElement(re,{className:[ce,"crpc-notice"].join(" ")},t.createElement(se,{onReset:e,onSave:n,theme:"dark"})));const{ActionTypes:de}=P.constants,{getAssetIds:pe,getAssets:ue}=a.findByProps("getAssetIds");function he(){if(r.persist.ghost.converte)return;const e=r.persist.ghost.rpc1?Object.entries(r.persist.ghost):Object.entries(r.persist.ghost.rpcs),n=e.map(o=>{if(typeof o[1]!="object")return;const u=o[1];return u.buttons=[],u.buttons.push(u.button1||b.buttons[0]),u.buttons.push(u.button2||b.buttons[1]),u}).filter(o=>o),s=typeof r.persist.ghost.selected!="number"?e.findIndex(o=>o[0]===r.persist.ghost.selected):r.persist.ghost.selected;r.persist.store.rpc1=null,r.persist.store.rpc2=null,r.persist.store.rpc3=null,r.persist.store.rpcs=n,r.persist.store.selected=s,r.persist.store.disabled=r.persist.ghost.disable,r.persist.store.converte=!0}async function E(e){const n=e&&await ge(e);P.FluxDispatcher.dispatch({type:de.LOCAL_ACTIVITY_UPDATE,socketId:"cumcord-epic-sex",pid:69,activity:n})}async function ge(e){const n=await pe(e.client_id,[e.large_image,e.small_image]),s={application_id:e.client_id,name:e.name,details:e.details,state:e.type!==1?e.state:null,assets:{large_image:e.type!==1?n[0]:null,small_image:e.type!==1?n[1]:null,large_text:e.type!==1?e.large_text:null,small_text:e.type!==1?e.small_text:null},timestamps:e.show_time&&{start:Date.now()},type:e.type,url:e.url};return e.buttons?.forEach(o=>{o?.url&&o?.label&&(s.buttons||(s.buttons=[]),s.metadata||(s.metadata={button_urls:[]}),s.buttons.push(o.label),s.metadata.button_urls.push(o.url))}),s}async function fe(e){const n=await ue(e),s=Object.values(n).filter(o=>o.type===1);return s.unshift({name:"",type:1}),s.filter(o=>o.type===1).map(o=>({label:o.name,value:o.name}))}const b={show_time:!0,client_id:"892203377503658064",name:"cum",state:"eating cum",details:"Browsing cum",large_image:"cumcord",small_image:"cumcord",large_text:"cuming",small_text:"made with cum",buttons:[{label:"",url:""},{label:"",url:""}],type:0},{getCurrentUser:ye}=a.findByProps("getCurrentUser"),R={...a.findByProps("h5"),...a.findByProps("marginBottom20")},v=({children:e,grow:n,shrink:s,wrap:o})=>(Array.isArray(e)||(e=[e]),e.map(u=>t.createElement(c.Child,{wrap:o,grow:n||1,shrink:s||1},u)));var k=({rpcName:e,transitionState:n,onClose:s})=>{const[o,u]=g.useState(),[q,Y]=g.useState(),[Pe,G]=g.useState(),[B,we]=g.useState(),[i,Ne]=g.useState(Object.assign({},r.persist.ghost.rpcs[e]));g.useEffect(()=>{i.buttons=i.buttons.map(l=>({label:l.label,url:l.url}))});const m=l=>{const f=l||i;Ne(Object.assign({},f)),_.isEqual(Object.assign({},r.persist.ghost.rpcs[e]),f)?G(!1):G(!0)};return B||fe(i.client_id).then(l=>we(l)).catch(()=>{}),t.createElement(C.ModalRoot,{className:"crpc-edit",transitionState:n},t.createElement(C.ModalHeader,{separator:!1},t.createElement(v,null,t.createElement(O,{size:O.Sizes.SIZE_20,tag:"h2"},"Edit RPC"),t.createElement(C.ModalCloseButton,{onClick:s}))),t.createElement(C.ModalContent,null,t.createElement(c,{wrap:c.Wrap.WRAP},t.createElement(c.Child,{wrap:!0},t.createElement(c,{wrap:c.Wrap.WRAP},t.createElement(v,{wrap:!0,grow:0,shrink:0},t.createElement(h,{required:!0,noDivider:!0,value:i.client_id,onChange:l=>{i.client_id=l,m()}},"Client id"),t.createElement(h,{noDivider:!0,value:i.name,onChange:l=>{i.name=l,m()}},"Name"),t.createElement(h,{noDivider:!0,value:i.details,onChange:l=>{i.details=l,m()}},"Details"),t.createElement(h,{noDivider:!0,value:i.state,onChange:l=>{i.state=l,m()}},"State")),t.createElement(c.Child,null,t.createElement(I,{value:i.show_time,onChange:()=>{i.show_time=!i.show_time,m()}},"Show Time"),t.createElement(L,{title:"Images",opened:q,onChange:()=>!Y(!q)&&u(!1)},t.createElement(c,{wrap:c.Wrap.WRAP},t.createElement(v,{wrap:!0,grow:1,shrink:1},B&&t.createElement(x,{value:i.large_image,options:B,onChange:l=>{i.large_image=l.value,m()}},"Large Image"),t.createElement(h,{value:i.large_text,onChange:l=>{i.large_text=l,m()}},"Large Image Text"))),t.createElement(c,{wrap:c.Wrap.WRAP},t.createElement(v,{wrap:!0,grow:1,shrink:1},B&&t.createElement(x,{value:i.small_image,options:B,onChange:l=>{i.small_image=l.value,m()}},"Small Image"),t.createElement(h,{value:i.small_text,onChange:l=>{i.small_text=l,m()}},"Small Image Text")))),t.createElement(L,{title:"Buttons",opened:o,onChange:()=>!u(!o)&&Y(!1)},i.buttons.map((l,f)=>t.createElement(c,{wrap:c.Wrap.WRAP},t.createElement(v,{wrap:!0,grow:1,shrink:1},t.createElement(h,{value:l.url,placeholder:"https://",onChange:j=>{i.buttons[f].url=j,m()}},"Button ",f+1," URL"),t.createElement(h,{value:l.label,onChange:j=>{i.buttons[f].label=j,m()}},"Button ",f+1," Text"))))),t.createElement(w,{className:`${R.h5} ${R.marginBottom8}`},"Your RPC:"),t.createElement("div",{className:R.marginBottom20,style:{backgroundColor:"var(--background-floating)"}},t.createElement(F,{user:ye()})))))),Pe&&t.createElement(me,{onReset:()=>{m(r.persist.ghost.rpcs[e])},onSave:()=>{r.persist.store.rpcs[e]=i,m(),r.persist.ghost.selected===e&&E(i)}})))};const{getCurrentUser:Ee}=d.webpack.findByProps("getCurrentUser"),T={...d.webpack.findByProps("h5"),...d.webpack.findByProps("marginBottom20")};var ve=()=>{V.useNest(r.persist);const[e,n]=g.useState(r.persist.ghost.selected);return t.createElement("div",null,t.createElement(I,{value:r.persist.ghost.disabled,onChange:()=>{r.persist.store.disabled=!r.persist.ghost.disabled,E(r.persist.ghost.disabled?null:r.persist.ghost.rpcs[e])}},"Disabled"),t.createElement(x,{value:e,onChange:s=>n(s.value),options:r.persist.ghost.rpcs.map((s,o)=>({label:s.name,value:o}))},"RPC'S",!isNaN(e)&&r.persist.ghost.selected!==e&&t.createElement(y,{disabled:r.persist.ghost.selected===e,onClick:()=>{r.persist.store.selected=e,r.persist.ghost.disabled||E(r.persist.ghost.rpcs[e])}},"Set as RPC"),e!==null&&t.createElement(y,{onClick:()=>W(t.createElement(k,{rpcName:e}))},"Edit RPC"),t.createElement(y,{onClick:()=>{r.persist.store.rpcs.push(b),n(r.persist.ghost.rpcs.length-1),W(t.createElement(k,{rpcName:r.persist.ghost.rpcs.length-1}))}},"Create new RPC"),t.createElement(y,{color:y.Colors.RED,onClick:()=>Z.showConfirmationModal({confirmText:"Delete",content:"Are you sure you want to delete that rpc?",type:"danger"},s=>{!s||(r.persist.store.rpcs.splice(e,1),r.persist.store.selected=null,n(null))})},"Delete RPC")),t.createElement(w,{className:`${T.h5} ${T.marginBottom8}`},"Your RPC:"),t.createElement("div",{className:T.marginBottom20,style:{backgroundColor:"var(--background-floating)"}},t.createElement(F,{user:Ee()})))},Be=()=>J.injectCSS(".rpcsetting-select{display:flex}.rpcsetting-select .select-1YfRS9{width:-webkit-fill-available}.rpcsetting-select button{margin-left:9px}.userProfileScroll-crpc{padding:8px 0;height:100%}.userProfile-crpc{position:relative;padding:16px}.crpc-edit{width:800px}.crpc-notice{position:fixed}.crpc-lowerMargin{margin-left:5px;margin-right:5px}");let z;function Ce(){r.persist.store.rpcs=[],r.persist.store.rpcs.push(b),r.persist.store.selected=0}var be=()=>(!r.persist.ghost.converte&&(r.persist.ghost.rpc1||r.persist.ghost.rpcs)?he():r.persist.ghost.rpcs||Ce(),{onLoad(){z=Be(),E(r.persist.ghost.rpcs[r.persist.ghost.selected])},onUnload(){z?.(),E(null)},settings:P.React.createElement(ve)});return be})(cumcord.modules.common,cumcord.modules.common.React,cumcord.modules,cumcord.utils,cumcord.pluginData,cumcord.ui.modals,cumcord.modules.webpack,cumcord.modules.common.React,cumcord.patcher);
