(function(a,s,c,u){"use strict";const e=s.findByProps("MenuGroup","MenuItem"),t=e.default;Object.assign(t,{Item:e.MenuItem,Group:e.MenuGroup,Separator:e.MenuSeparator,ControlItem:e.MenuControlItem});const m=()=>a.findAndPatch(()=>s.findByDisplayName("MessageContextMenu",!1),n=>a.after("default",n,(r,d)=>{const i=c.findInReactTree(d,o=>Array.isArray(o?.children));i||console.warn("Something went wrong trying to patch MessageContextMenu"),!c.findInReactTree(d,o=>o?.props?.id=="hidemsg")&&i.children.splice(4,0,u.React.createElement(t.Group,null,u.React.createElement(t.Item,{id:"hidemsg",label:"Hide Message",action:()=>{document.getElementById(`chat-messages-${r[0].message.id}`).remove()}})))}));var l=()=>{let n=[m()];return{onUnload:()=>_.forEachRight(n,r=>r())}};return l})(cumcord.patcher,cumcord.modules.webpack,cumcord.utils,cumcord.modules.common);