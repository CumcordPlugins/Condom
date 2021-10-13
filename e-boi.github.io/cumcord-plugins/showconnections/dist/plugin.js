(function(t,l,c){"use strict";const{TooltipContainer:p}=t.webpack.findByProps("TooltipContainer"),d=t.webpack.findByProps("connectedAccount"),{get:f}=t.webpack.findByProps("get","isSupported");var u=({account:n})=>{const e=f(n.type);return c.React.createElement(p,{className:"sc-connection scrollbarGhostHairline-1mSOM1",text:n.name},c.React.createElement("a",{target:"_blank",href:e.getPlatformUserUrl?.(n)},c.React.createElement("img",{alt:c.i18n.Messages.IMG_ALT_LOGO.format({name:e?.name}),className:d.connectedAccountIcon,src:e?.icon?.color})))};const a={...t.webpack.findByProps("base","muted"),...t.webpack.findByProps("size12"),...t.webpack.findByProps("bodyTitle"),...t.webpack.findByProps("scrollbarGhostHairline")},{fetchProfile:b}=t.webpack.findByProps("fetchProfile");var y=({user:n})=>{const[e,w]=c.React.useState();return e||b(n,"cumcord",o=>w(o.connected_accounts)),!e?.length>0?null:[c.React.createElement("h3",{className:[a.base,a.muted,a.uppercase,a.size12,a.bodyTitle].join(" ")},"Connections"),c.React.createElement("div",{className:`sc-connectAccounts ${a.scrollbarGhostHairline}`},e.map(o=>c.React.createElement(u,{account:o})))]},h=()=>cumcord.patcher.injectCSS(`.sc-connectAccounts{display:flex;overflow-x:auto;margin-bottom:11px}.sc-connection{display:flex}.sc-connection a{display:flex;height:30px;width:34px}
`);let r,s;const i=t.webpack.find(n=>n.default?.displayName==="UserPopoutBody");var P=()=>({onLoad(){s=h(),r=l.after("default",i,([{user:n}],e)=>e&&(e.props.children.splice(2,0,c.React.createElement(y,{user:n.id})),e)),i.default.displayName="UserPopoutBody"},onUnload(){r?.(),s?.()}});return P})(cumcord.modules,cumcord.patcher,cumcord.modules.common);
