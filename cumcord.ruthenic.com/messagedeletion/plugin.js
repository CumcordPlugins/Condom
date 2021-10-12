(function(n){"use strict";const a=cumcord.modules.webpackModules,r=n.React.useState;a.findByDisplayName("Switch"),a.findByDisplayName("Text"),a.findByDisplayName("Header");const m=a.findByDisplayName("SwitchItem");var u=e=>{const[s,t]=r(e.enabled);return n.React.createElement(m,{value:e.value,note:e.note,onChange:()=>{t(!s),e.onChange()},value:s},e.name)};const l=cumcord.modules.webpackModules,g=l.findByDisplayName("FormTitle"),b=l.findByDisplayName("FormDivider"),w=l.findByDisplayName("FormSection");var y=()=>n.React.createElement(w,null,n.React.createElement(g,{tag:"h1"},"BetterMessageDeletion"),n.React.createElement(b,null),n.React.createElement(u,{name:"Enable Toasts",note:"Show a toast when a message is deleted.",onChange:()=>{window.betterMessageDeletion_enableToasts!==void 0?window.betterMessageDeletion_enableToasts=!window.betterMessageDeletion_enableToasts:window.betterMessageDeletion_enableToasts=!0},enabled:!1}));const p=cumcord.modules.webpackModules.findByProps("getElementFromMessageId").getElementFromMessageId,h=Object.getPrototypeOf(cumcord.modules.webpackModules.findByProps("dispatch")),D=Object.getPrototypeOf(cumcord.modules.webpackModules.findByProps("getChannel")).getChannel,f=Object.getPrototypeOf(cumcord.modules.webpackModules.findByProps("getGuild")).getGuild,E=cumcord.modules.webpackModules.findByDisplayName("SettingsView");let o=[],,d,c,i;function M(){for(let e of o)try{document.getElementById(e.id).classList.contains("deleted-message")||document.getElementById(e.id).classList.add("deleted-message")}catch(s){}}var S={onLoad(){window.betterMessageDeletion_enableToasts=!1,i=cumcord.patcher.injectCSS(".deleted-message{background-color: rgba(240, 71, 71, 0.1);}"),c=setInterval(M,300),d=cumcord.patcher.instead("dispatch",h,(e,s)=>{if(e[0].type==="MESSAGE_DELETE"){console.log(e);try{var t={deletedHtmlElement:p(e[0].id)};if(t.deletedText=t.deletedHtmlElement.innerText.split(`
`)[3],t.id="chat-messages-"+e[0].id,t.deletedHtmlElement,console.log("[messagedeletion] New Deleted Message: "+t.deletedText),o.indexOf(t)==-1&&o.push(t),window.betterMessageDeletion_enableToasts){var B=f(D(e[0].channelId).guild_id).name;cumcord.ui.toasts.showToast({title:`New deleted message in ${B}!`,duration:3e3})}console.log(o);return}catch(T){console.log("[messagedeletion] Failed to get deleted message!"),console.error(T)}}return s(...e)}),cumcord.patcher.after("getPredicateSections",E.prototype,(e,s)=>{const t=[{section:"DIVIDER"},{section:"HEADER",label:"BetterMessageDeletion"},{section:"BMD",label:"Settings",element:y}];return s.push(...t),s})},onUnload(){i(),d(),clearInterval(c)}};return S})(cumcord.modules.common);
