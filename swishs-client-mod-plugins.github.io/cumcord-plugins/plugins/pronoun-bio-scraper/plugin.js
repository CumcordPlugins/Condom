(function(E,o,n,t,x,h){"use strict";/**
* NOTICE OF LICENSE
*
* This source file is subject to the GNU General Public License (GPL-3.0).
* You can find more information in the LICENSE.md file.
* More information is also avaliable at this URL:
* https://opensource.org/licenses/GPL-3.0
* 
*
* @copyright Copyright (c) 2022 Paige Jordan
* @license   GPL-3.0 GNU General Public License v3.0
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/tree/main/plugins/pronoun-bio-scraper
*/const v=n.findByDisplayName("SwitchItem");var z=()=>(E.useNest(o.persist),t.React.createElement(t.React.Fragment,null,t.React.createElement(v,{note:"This may get you rate limited if you hop to a bunch of servers in quick succession but you should for the most part be fine. (Use at your own discretion)",onChange:()=>o.persist.store.fetch=!o.persist.ghost.fetch,value:o.persist.ghost.fetch},'Automatically Fetch Pronouns (get rid of "still loading")')));/**
* NOTICE OF LICENSE
*
* This source file is subject to the GNU General Public License (GPL-3.0).
* You can find more information in the LICENSE.md file.
* More information is also avaliable at this URL:
* https://opensource.org/licenses/GPL-3.0
* 
*
* @copyright Copyright (c) 2022 Paige Jordan
* @license   GPL-3.0 GNU General Public License v3.0
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/tree/main/plugins/pronoun-bio-scraper
*/const R=n.findByDisplayName("Flex"),N=n.findByDisplayName("Anchor"),c=n.findByProps("DropdownSizes"),C=n.findByProps("Sizes","Tags"),U=n.findByDisplayName("TextInput"),S=n.findByProps("anchorUnderlineOnHover"),f=n.findByProps("ModalCloseButton"),I=n.findByProps("getUser","filter").getUser;var O=({e,author:s,extract:r})=>{const i=r(I(s).bio)??"",l=s in o.persist?o.persist[s]:i,[a,p]=t.React.useState(l),d=g=>{g.key==="Enter"&&(o.persist[s]=a,e.onClose())};return t.React.useEffect(()=>(document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d))),t.React.createElement(f.ModalRoot,{transitionState:e.transitionState,className:"pronoun-overide-modal",size:"small"},t.React.createElement(x.ErrorBoundary,null,t.React.createElement(f.ModalHeader,{separator:!1},t.React.createElement(R.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},t.React.createElement(C,{tag:"h2",size:C.Sizes.SIZE_20},"Override Pronouns")),t.React.createElement(R.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},t.React.createElement(f.ModalCloseButton,{onClick:e.onClose}))),t.React.createElement(f.ModalContent,null,t.React.createElement(U,{placeholder:"cum/cumself",onChange:p,value:a}),t.React.createElement("div",{style:{marginTop:"3px"}}),t.React.createElement(N,{onClick:()=>p(i),className:S.anchorUnderlineOnHover,style:{fontSize:"14px"},cursor:"pointer"},"Reset Pronouns")),t.React.createElement(f.ModalFooter,null,t.React.createElement(c,{onClick:()=>{o.persist[s]=a,e.onClose()},color:c.Colors.BRAND_NEW},"Change Pronouns"),t.React.createElement(c,{onClick:e.onClose,look:c.Looks.LINK,color:c.Colors.TRANSPARENT},"Cancel"))))};/**
* NOTICE OF LICENSE
*
* This source file is subject to the GNU General Public License (GPL-3.0).
* You can find more information in the LICENSE.md file.
* More information is also avaliable at this URL:
* https://opensource.org/licenses/GPL-3.0
*
*
* @copyright Copyright (c) 2022 Paige Jordan
* @license   GPL-3.0 GNU General Public License v3.0
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/tree/main/plugins/pronoun-bio-scraper
*/const{fetchProfile:T}=n.findByProps("fetchProfile"),{getUserProfile:L}=n.findByProps("getUserProfile"),{getChannelId:A}=n.findByProps("getVoiceChannelId"),{openModal:F}=n.findByProps("openModal","openModalLazy"),{getMessage:_}=n.findByProps("getMessages","getMessage"),{getUser:H}=n.findByProps("getUser","getCurrentUser"),P=n.findByProps("MenuGroup","MenuItem"),G=n.find(e=>e.default?.displayName==="MessageTimestamp"),m=e=>{if(!e)return;e=e.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-z0-9@:%_\+.~#?&//=]*)/gi,"");let s=e.match(/[a-z]+?(?:\/[a-z]+)+/i);if(!s&&~e.indexOf("pronouns")){if(~e.indexOf("any"))return"any pronouns";if(~e.indexOf("avoid"))return"avoid pronouns, use my name";if(~e.indexOf("ask"))return"ask for pronouns";if(~e.indexOf("male"))return"probably he/him";if(~e.indexOf("female"))return"probably she/her"}if(s)return s[0].toLowerCase()};let u=[];const q=async(e,s)=>{const r=l=>l.default&&l.default.displayName===e,i=n.find(r,!1);if(i)s(i);else{const l=n.findByProps("openContextMenuLazy");u.unshift(h.before("openContextMenuLazy",l,a=>{const p=a[1];return a[1]=async()=>{const d=await p(a[0]);return g=>{const B=d(g);return B?.type?.displayName===e&&s&&(u[0](),s(n.find(r)),s=!1),B}},a}))}};let y=[],M=[];var K=()=>({onLoad(){u.push(h.after("default",G,([e],s)=>{let r=_(A(),e.id?.substring(18));if(!r)return;let i=H(r.author.id),l=!L(r.author.id);o.persist.ghost.fetch&&!y.includes(r.id)&&y.push(r.id);let a=r.author.id in o.persist?o.persist[r.author.id]:l?"still loading":m(i.bio);!a||(l&&o.persist.ghost.fetch&&!M.includes(r.author.id)&&y.includes(r.id)&&!t.FluxDispatcher._currentDispatchActionType&&(M.push(r.author.id),T(r.author.id)),!!s?.props?.children?.props&&u.push(h.after("children",s.props.children.props,(p,d)=>{if(d?.props?.children?.props?.children?.[1]!=="edited")return d.props.children.props.children[1]+=` \u2022 ${a}`,d})))})),q("MessageContextMenu",e=>{u.push(h.after("default",e,([s],r)=>(E.findInReactTree(r,i=>i?.props?.id=="pronouns")||r.props.children.push(t.React.createElement(P.MenuGroup,null,t.React.createElement(P.MenuItem,{id:"pronouns",label:"Overide Pronouns",action:()=>F(i=>t.React.createElement(O,{e:i,author:s.message.author.id,extract:m}))}))),r)))})},onUnload(){u.forEach(e=>e())},settings:t.React.createElement(z,null)});return K})(cumcord.utils,cumcord.pluginData,cumcord.modules.webpack,cumcord.modules.common,cumcord.ui.components,cumcord.patcher);
