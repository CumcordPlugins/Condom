(function(e,p,t,o){"use strict";const a=e.findByDisplayName("MiniPopover",!1),u=e.findByDisplayName("EyeHidden"),f=e.findByProps("TooltipContainer").default,m=e.findByProps("popFirstFile","setUploads"),c=e.findByProps("actionBarIcon");let s;var E=A=>({onLoad(){s=p.after("default",a,(I,r)=>{r?.props?.children?.[0]?.props?.text==t.i18n.Messages.ATTACHMENT_UTILITIES_MODIFY&&r.props.children.splice(0,0,t.React.createElement(f,{text:t.i18n.Messages.SPOILER_MARK_SELECTED,hideOnClick:!0},i=>t.React.createElement(a.Button,{onMouseEnter:i.onMouseEnter,onMouseLeave:i.onMouseLeave,onClick:()=>{const d=document.querySelector("."+c.channelAttachmentArea);if(d){const l=o.getReactInstance(d);if(l){const n=o.findInTree(l.memoizedProps,h=>h?.upload);n&&m.update(n.channelId,n.upload.id,{spoiler:!n.upload.spoiler})}}}},t.React.createElement(u,{className:c.actionBarIcon}))))})},onUnload(){s()}});return E})(cumcord.modules.webpackModules,cumcord.patcher,cumcord.modules.common,cumcord.utils);