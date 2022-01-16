(function(s,o,g,t,m,p){"use strict";/**
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
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/pronoun-bio-scraper
*/const B=s.findByDisplayName("SwitchItem");var v=()=>(g.useNest(o.persist),t.React.createElement(B,{note:"This may get you rate limited if you hop to a bunch of servers in quick succession but you should for the most part be fine. (Use at your own discretion)",onChange:()=>o.persist.store.fetch=!o.persist.ghost.fetch,value:o.persist.ghost.fetch},'Automatically Fetch Pronouns (get rid of "still loading")'));/**
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
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/pronoun-bio-scraper
*/const E=s.findByDisplayName("Flex"),x=s.findByDisplayName("Anchor"),l=s.findByProps("DropdownSizes"),R=s.findByProps("Sizes","Tags"),N=s.findByDisplayName("TextInput"),U=s.findByProps("anchorUnderlineOnHover"),d=s.findByProps("ModalCloseButton"),z=s.findByProps("getUser","filter").getUser;var S=({e,author:r,extract:n})=>{const u=n(z(r).bio)??"",f=r in o.persist?o.persist[r]:u,[i,y]=t.React.useState(f),a=q=>{q.key==="Enter"&&(o.persist[r]=i,e.onClose())};return t.React.useEffect(()=>(document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a))),t.React.createElement(d.ModalRoot,{transitionState:e.transitionState,className:"pronoun-overide-modal",size:"small"},t.React.createElement(m.ErrorBoundary,null,t.React.createElement(d.ModalHeader,{separator:!1},t.React.createElement(E.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},t.React.createElement(R,{tag:"h2",size:R.Sizes.SIZE_20},"Override Pronouns")),t.React.createElement(E.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},t.React.createElement(d.ModalCloseButton,{onClick:e.onClose}))),t.React.createElement(d.ModalContent,null,t.React.createElement(N,{style:{paddingBottom:"10px"},placeholder:"cum/cumself",onChange:y,value:i}),t.React.createElement("div",{style:{marginTop:"3px"}}),t.React.createElement(x,{onClick:()=>y(u),className:U.anchorUnderlineOnHover,style:{fontSize:"14px"},cursor:"pointer"},"Reset Pronouns")),t.React.createElement(d.ModalFooter,null,t.React.createElement(l,{onClick:()=>{o.persist[r]=i,e.onClose()},color:l.Colors.BRAND_NEW},"Change Pronouns"),t.React.createElement(l,{onClick:e.onClose,look:l.Looks.LINK,color:l.Colors.TRANSPARENT},"Cancel"))))};/**
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
* @link      https://github.com/swishs-client-mod-plugins/cumcord-plugins/pronoun-bio-scraper
*/const{fetchProfile:I}=s.findByProps("fetchProfile"),{getUserProfile:T}=s.findByProps("getUserProfile"),{getChannelId:O}=s.findByProps("getVoiceChannelId"),{openModal:A}=s.findByProps("openModal","openModalLazy"),{getMessage:L}=s.findByProps("getMessages","getMessage"),{getUser:_}=s.findByProps("getUser","getCurrentUser"),C=s.findByProps("MenuGroup","MenuItem"),F=s.find(e=>e.default?.displayName==="MessageTimestamp"),H=s.find(e=>e.default?.displayName==="MessageContextMenu"),P=e=>{if(!e)return;e=e.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-z0-9@:%_\+.~#?&//=]*)/gi,"");let r=e.match(/[a-z]+?(?:\/[a-z]+)+/i);if(!r&&~e.indexOf("pronouns")){if(~e.indexOf("any"))return"any pronouns";if(~e.indexOf("avoid"))return"avoid pronouns, use my name";if(~e.indexOf("ask"))return"ask for pronouns"}if(r)return r[0]};let c=[],h=[],M=[];var G=()=>({onLoad(){c.push(p.after("default",F,([e],r)=>{let n=L(O(),e.id?.substring(18)),u=_(n?.author?.id),f=!T(n?.author?.id);f&&o.persist.ghost.fetch&&!M.includes(n?.author?.id)&&h.includes(n?.id)&&!t.FluxDispatcher._currentDispatchActionType&&(M.push(n?.author?.id),I(n?.author?.id)),o.persist.ghost.fetch&&!h.includes(n?.id)&&h.push(n?.id);let i=n?.author?.id in o.persist?o.persist[n.author.id]:f?"still loading":P(u?.bio);!i||c.push(p.after("children",r.props.children.props,(y,a)=>{if(a.props.children.props.children[1]!=="edited")return a.props.children.props.children[1]+=` \u2022 ${i}`,a}))})),c.push(p.after("default",H,([e],r)=>(g.findInReactTree(r,n=>n?.props?.id=="pronouns")||r.props.children.push(t.React.createElement(C.MenuGroup,null,t.React.createElement(C.MenuItem,{id:"pronouns",label:"Overide Pronouns",action:()=>A(n=>t.React.createElement(S,{e:n,author:e.message.author.id,extract:P}))}))),r)))},onUnload(){c.forEach(e=>e())},settings:t.React.createElement(v,null)});return G})(cumcord.modules.webpack,cumcord.pluginData,cumcord.utils,cumcord.modules.common,cumcord.ui.components,cumcord.patcher);
