(function(R,n,l,f,o,V){"use strict";const m=o.webpack.findByProps("TooltipContainer").TooltipContainer,q=o.webpack.findByDisplayName("Arrow"),W=o.webpack.findByDisplayName("Clickable"),C=o.webpack.findByProps("ModalRoot"),L=o.webpack.findByDisplayName("Pin"),Z=o.webpack.findByDisplayName("FormTitle"),x=o.webpack.find(e=>e.DropdownSizes),J=o.webpack.findByDisplayName("ListSectionItem"),N=o.webpack.findByProps("openModalLazy");let T;const Q=e=>T=N.openModal(t=>(e.props={...e.props,...t},e)),Y=()=>N.closeModal(T),{default:K,MenuSeparator:X,MenuItem:ee,MenuCheckboxItem:te}=l.findByProps("MenuGroup"),{closeContextMenu:ne}=l.findByProps("openContextMenu");function S(e){switch(e.id=`cc-pd-${e.id}`,e.type){case"item":return n.React.createElement(ee,{...e},e.items?.()?.map(S));case"separator":return n.React.createElement(X,null);case"checkbox":return n.React.createElement(te,{...e});default:return null}}var ie=e=>(e.items=e.items.map(S),e.rawItems?[...e.items]:n.React.createElement(K,{onClose:()=>ne()},e.items));const _={dividerDefault:o.webpack.findByProps("dividerDefault").dividerDefault,divider:o.webpack.find(e=>e.divider?.includes("divider-_")).divider};var se=({className:e})=>n.React.createElement("div",{className:`${_.divider} ${_.dividerDefault} ${e}`});const re=o.webpack.findByDisplayName("FormItem"),ae=o.webpack.findByDisplayName("FormText"),h={...o.webpack.findByProps("marginBottom20"),...o.webpack.findByProps("formText"),...o.webpack.findByDisplayName("Flex")};var le=e=>n.React.createElement(re,{title:e.title,required:e.required,className:`${h.Direction.VERTICAL} ${h.Justify.START} ${h.Align.STRETCH} ${h.Wrap.NO_WRAP} ${h.marginBottom20}`},e.children,e.note&&n.React.createElement(ae,{className:`${h.description} ${h.marginTop8}`},e.note),n.React.createElement(se,{className:[h.marginTop20].join(" ")}));const A=o.webpack.findByDisplayName("TextInput");var F=e=>{Array.isArray(e.children)||(e.children=[e.children]);const t=e.children;return delete e.children,n.React.createElement(le,{title:t[0],required:e.required,note:e.note},t[1]?n.React.createElement("div",{className:"cc-pp-setting-input"},n.React.createElement(A,{...e}),t[1]):n.React.createElement(A,{...e}))},ce=({transitionState:e,dmId:t,settings:i})=>{const[s,a]=n.React.useState("");return n.React.createElement(C.ModalRoot,{transitionState:e},n.React.createElement(C.ModalHeader,null,n.React.createElement(Z,{tag:"h3"},"New Catgory")),n.React.createElement(C.ModalContent,null,n.React.createElement(F,{placeholder:"Category name",value:s,onChange:a},"New Category:")),n.React.createElement(C.ModalFooter,null,n.React.createElement(x,{disabled:!s,onClick:()=>{const c=i.get("categories",[]);c.push({name:s,dms:[t],pos:c.length,collapsed:!1}),i.set("categories",c),Y(),E()}},"Save")))};const{scroller:oe}=l.findByProps("privateChannelsHeaderContainer");function E(){const e=document.getElementsByClassName(oe)[0];!e||(e.dispatchEvent(new Event("focusin")),setTimeout(()=>{e.dispatchEvent(new Event("focusout"))},10))}function v(e,t,i){let s=[];const a=t.get("categories",[]).find(r=>r.dms.includes(e.id)),c=t.get("guildlist",[]).includes(e.id);if(a?s.push({type:"item",id:"remove-from-category",color:"colorDanger",label:`Remove from ${a.name}`,action(){a.dms=a.dms.filter(r=>r!==e.id),t.set(`categories[${a.pos}]`,a),E()}}):s.push({type:"item",id:"catgory-submenu",label:"Pin to Channel List",items(){const r=[{type:"item",id:"create-new-catgory",color:"colorBrand",label:"Add to new catgory",action(){Q(n.React.createElement(ce,{dmId:e.id,settings:t}))}},{type:"separator"}];return t.get("categories",[]).forEach(d=>r.push({type:"item",id:`add-to-category-${d.name}`,label:d.name,action(){d.dms.push(e.id),t.set(`categories[${d.pos}]`,d),E()}})),[...r]}}),c?s.push({type:"item",id:"remove-from-list",label:"Unpin from Server List",color:"colorDanger",action:()=>{const r=t.get("guildlist",[]).filter(d=>d!==e.id);t.set("guildlist",r),n.FluxDispatcher.dirtyDispatch({type:"PDM_GUILDLIST_REMOVE"})}}):s.push({type:"item",id:"add-to-list",label:"Pin to Server List",action:()=>{const r=t.get("guildlist",[]);r.push(e.id),t.set("guildlist",r),n.FluxDispatcher.dirtyDispatch({type:"PDM_GUILDLIST_ADD"})}}),i){const r=s;s=[{type:"item",label:"PinDMs",id:"submenu",items:()=>[...r]}]}return ie({items:s,rawItems:i})}const{GroupDM:de,DirectMessage:pe}=l.findByProps("DirectMessage"),{getChannel:ue}=l.findByProps("getChannel","hasChannel");var w=({channelId:e,selected:t})=>{const i=ue(e);return i?i.type===3?n.React.createElement(de,{channel:i,selected:t,tabIndex:-1}):n.React.createElement(pe,{channel:i,selected:t,tabIndex:-1}):null};const P={...l.findByProps("privateChannelsHeaderContainer"),...l.findByProps("containerDefault","name")};var he=({category:e,settings:t})=>{const[i,s]=n.React.useState(e.collapsed);return e.dms.length?n.React.createElement(W,{tabIndex:-1,className:[P.clickable,"cc-pd-header"].join(" "),onClick:()=>{e.collapsed=!i,t.set(`categories[${e.pos}]`,e),E(),s(!i)}},n.React.createElement(J,{className:P.privateChannelsHeaderContainer},n.React.createElement("span",{className:P.headerText},e.name),n.React.createElement(q,{className:"cc-pd-arrow",direction:i?"LEFT":"DOWN"}))):null};const{default:fe}=l.findByProps("DirectMessage"),ye=l.findByDisplayName("ConnectedPrivateChannelsList",!1),{openContextMenu:ge}=l.findByProps("openContextMenu"),{lastMessageId:U}=l.findByProps("lastMessageId");function Ee(){const e=this;this.injections.push(f.after("render",fe.prototype,function(t,i){const s=i.props.children({role:"listitem"});return i.props.children=()=>{const a=n.React.createElement(m,{text:"Pin",position:"top"},n.React.createElement(L,{className:"cc-pd-pin",onClick:c=>{c.preventDefault();const r=v(this.props.channel,e.settings);ge(c,()=>r)},icon:L}));return s.props.children.props.children.splice(1,0,a),s},i})),this.injections.push(f.after("default",ye,(t,i)=>{const s=[],a=i.props.children.props.children.props.selectedChannelId,c=this.settings.get("categories",[]);return c.forEach(r=>s.push(...r.dms)),i.props.children.props.children.props.privateChannelIds=i.props.children.props.children.props.privateChannelIds.filter(r=>!s.includes(r)),i.props.children.props.children.props.children=[...i.props.children.props.children.props.children],c.forEach(r=>{const d=n.React.createElement(he,{category:r,settings:this.settings});if(i.props.children.props.children.props.children.push(d),r.collapsed){if(r.dms.includes(a)){const p=r.dms.find(u=>u===a);if(!p)return;i.props.children.props.children.props.children.push(n.React.createElement(w,{channelId:p,selected:a}))}}else{const p=r.dms.sort((u,B)=>U(B)-U(u)).map(u=>n.React.createElement(w,{channelId:u,selected:a===u}));i.props.children.props.children.props.children.push(...p)}}),i}))}const{default:De}=l.findByProps("DirectMessage"),{getUser:Ce}=l.findByProps("getUser","findByTag"),{isMobileOnline:xe,getStatus:j,getState:Me}=l.findByProps("isMobileOnline"),{getChannel:Re}=l.findByProps("getDMFromUserId"),{listItemTooltip:ve}=l.findByProps("listItemTooltip"),{openContextMenu:Pe}=l.findByProps("openContextMenu"),{transitionTo:be}=l.findByProps("transitionTo"),{getMentionCount:k}=l.findByProps("getMentionCount"),Be=l.findByDisplayName("AnimatedHalfPill");var Ie=({settings:e})=>{const[t,i]=n.React.useState(e.get("guildlist",[]));return n.React.useEffect(()=>{const s=({removeAll:a})=>i(a?[]:[...e.get("guildlist",[])]);return n.FluxDispatcher.subscribe("PDM_GUILDLIST_ADD",s),n.FluxDispatcher.subscribe("PDM_GUILDLIST_REMOVE",s),()=>{n.FluxDispatcher.unsubscribe("PDM_GUILDLIST_ADD",s),n.FluxDispatcher.unsubscribe("PDM_GUILDLIST_REMOVE",s)}}),t.map(s=>n.React.createElement(me,{channelId:s,settings:e}))};function me({channelId:e,settings:t}){const[i,s]=n.React.useState(!1),[a,c]=n.React.useState(!1),[r,d]=n.React.useState(!!k(e)),p=Re(e);if(!p)return null;const u=Ce(p.recipients[0]),[B,je]=n.React.useState(j(u?.id)),I=De.prototype.renderAvatar.call({props:{user:u,channel:p,status:B,isMobile:xe.bind({getState:()=>Me()})(u?.id)}});return I.props.src=I.props.src.replace("size=32","size=64"),n.React.useEffect(()=>{const M=g=>g.user?.id===u?.id&&je(j(g.user.id)),$=g=>{g.channelId===p.id?c(!0):c(!1)},z=g=>g.id===e&&d(!!k(e));return n.FluxDispatcher.subscribe("PRESENCE_UPDATE",M),n.FluxDispatcher.subscribe("PDM_UPDATE",z),n.FluxDispatcher.subscribe("CHANNEL_SELECT",$),()=>{n.FluxDispatcher.unsubscribe("PRESENCE_UPDATE",M),n.FluxDispatcher.unsubscribe("CHANNEL_SELECT",$),n.FluxDispatcher.unsubscribe("PDM_UPDATE",z)}}),n.React.createElement(m,{text:p.type===3?p.name:u.username,position:"left","aria-label":!1,tooltipClassName:ve},n.React.createElement("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onContextMenu:M=>{Pe(M,()=>v(p,t))},onClick:()=>be(n.constants.Routes.CHANNEL("@me",p.id)),className:"cc-pd-guildpins"},n.React.createElement(Be,{className:"pill-L_aLMQ",unread:r,selected:a,hovered:i}),I))}const Le=l.findByProps("HomeButton"),Ne=l.findByDisplayName("TransitionGroup",!1);function Te(){this.injections.push(f.after("HomeButton",Le,(e,t)=>(Array.isArray(t)||(t=[t]),this.settings.get("guildlist",[]).includes(t[0].props.selectedChannelId)&&(t[0].props.selected=!1),t.push(n.React.createElement(Ie,{settings:this.settings})),t))),this.injections.push(f.after("render",Ne.default.prototype,(e,t)=>(t.props.children.length&&t.props.children.forEach((i,s)=>{this.settings.get("guildlist",[]).includes(i.key.replace(".$",""))&&(t.props.children.splice(s,1),n.FluxDispatcher.dirtyDispatch({type:"PDM_UPDATE",id:i.key.replace(".$","")}))}),t)))}const Se=["DMUserContextMenu","GroupDMUserContextMenu","GuildChannelUserContextMenu","GroupDMContextMenu"],{getDMFromUserId:G,getChannel:H}=l.findByProps("getDMFromUserId");async function b(e,t){const i=l.findByDisplayName(e,!1);if(i)t(i);else{const s=l.findByProps("openContextMenuLazy");this.injections.unshift(f.before("openContextMenuLazy",s,a=>{const c=a[1];return a[1]=async()=>{const r=await c(a[0]);return d=>{const p=r(d);return p?.type?.displayName===e&&t&&(this.injections[0](),t(l.findByDisplayName(e,!1)),t=!1),p}},a}))}}function _e(){b=b.bind(this),Se.forEach(e=>{b(e,t=>{this.injections.push(f.after("default",t,([i],s)=>{const a=V.findInReactTree(s,r=>Array.isArray(r)&&r.find(d=>d?.props?.id==="user-profile"||d?.props?.id==="remove-icon"));if(!a)return s;if(!!(i.channel||H(G(i.user.id))))return a.push(v(i.channel||H(G(i.user.id)),this.settings,!0)),s}))})})}var y={Categories:Ee,GuildList:Te,ContextMenus:_e},Ae=()=>cumcord.patcher.injectCSS(".channel-1Shao0>.interactive-1vLZ_I{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.cc-pd-pin{width:15px;min-width:15px;min-height:15px;height:15px;display:none;opacity:.4}.channel-1Shao0>.interactive-1vLZ_I:hover .cc-pd-pin{display:block;opacity:.8}.cc-pd-guildpins{display:flex;justify-content:center;position:relative;cursor:pointer}.cc-pd-guildpins .wrapper-1VLyxH{margin-bottom:8px;height:48px!important;width:48px!important}.cc-pd-header{display:flex;justify-content:center;align-items:center}.cc-pd-arrow{height:18px;width:18px}.cc-pd-arrow>polygon{fill:var(--channels-default)}.cc-pd-header:hover .cc-pd-arrow polygon{fill:var(--interactive-hover)}.cc-pp-setting-input{display:flex}.cc-pp-setting-input .inputWrapper-1YNMmM{width:-webkit-fill-available}.cc-pp-setting-input button{margin-left:9px;min-width:130px;min-height:40px}");function Fe({category:e,settings:t,onDelete:i}){const[s,a]=n.React.useState(e.name);return console.log(s),n.React.createElement(F,{value:s,onChange:c=>{e.name=c,t.set(`categories[${e.pos}]`,e),a(c)}},s,n.React.createElement(x,{color:x.Colors.RED,onClick:()=>i?.(e.pos)},"Delete Category"))}var we=({settings:e})=>{const[t,i]=n.React.useState(e.get("categories",[]));return t?n.React.createElement("div",null,t.map(s=>n.React.createElement(Fe,{category:s,settings:e,onDelete:a=>{t.splice(a,1),t.forEach((c,r)=>c.pos=r),e.set("categories",t),i(null),setTimeout(()=>i(t))}})),n.React.createElement(x,{onClick:()=>{t.push({name:"New Category",dms:[],pos:t.length,collapsed:!1}),e.set("categories",t),i(null),setTimeout(()=>i(t))}},"Add a category")):null};const D={},O={get(e,t){return window._.get(R.persist.ghost,e)??t},set(e,t){R.persist.store=window._.set(R.persist.ghost,e,t)}};var Ue=()=>(Object.keys(y).forEach(e=>{D[e]=[],y[e]=y[e].bind({injections:D[e],settings:O})}),{onLoad(){Object.keys(y).forEach(e=>y[e]()),D.css=[Ae()]},onUnload(){Object.keys(y).forEach(e=>{D[e].forEach(t=>t?.())}),D.css[0]?.(),E(),n.FluxDispatcher.dirtyDispatch({type:"PDM_GUILDLIST_REMOVE",removeAll:!0})},settings:n.React.createElement(we,{settings:O})});return Ue})(cumcord.pluginData,cumcord.modules.common,cumcord.modules.webpack,cumcord.patcher,cumcord.modules,cumcord.utils);