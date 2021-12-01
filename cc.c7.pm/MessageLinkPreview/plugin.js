(function(s,P,n){"use strict";const i=/https?:\/\/(?:\w+\.)?discord(?:app)?\.com\/channels\/(\d{17,19}|@me)\/(\d{17,19})\/(\d{17,19})/g,l=/\/channels\/(\d+|@me)(?:\/)?(\d+)(?:\/)(\d+)/,{default:C}=s.find(a=>a?.default?.type?.displayName=="ChannelMessage"),I=s.findByDisplayName("Embed"),E=s.findByProps("get","put"),g=s.findByProps("isAccessibleChannelOrThreadPath"),R=s.findByProps("createMessageRecord"),{getGuildIconURL:S}=s.findByProps("getGuildIconURL"),{renderMaskedLinkComponent:B}=s.findByProps("renderMaskedLinkComponent"),A=s.findByProps("getGuild"),G=s.findByProps("getChannel","getDMUserIds"),L=s.findByProps("getMessage","getMessages"),M=s.findByProps("messageDisplayCompact"),D=s.findByProps("searchResult","message","buttonsContainer"),m=new Set,h=new Map;function U(a){const{message:r}=a,c=r.content.match(i),[,T]=n.React.useState(),_=n.React.useCallback(()=>T({}),[]);if(c){const p=[];for(const H of c){const b=H.match(l)[0],e=g.tryParseChannelPath(b);if(e.messageId==r.id)continue;const d=e.guildId=="@me"?null:A.getGuild(e.guildId),f=G.getChannel(e.channelId),t=L.getMessage(e.channelId,e.messageId)||h.get(e.messageId);if(!t&&!m.has(e.messageId)&&(E.get({url:n.constants.Endpoints.MESSAGES(e.channelId),query:{limit:1,around:e.messageId},retries:2,oldFormErrors:!0}).then(o=>{h.set(e.messageId,R.createMessageRecord(o.body[0])),_()}),m.add(e.messageId)),!t)continue;const y=t.content.match(i);if(y){let o=!1;for(const $ of y){const k=$.match(l)[0];if(g.tryParseChannelPath(k).messageId==r.id){o=!0;break}}if(o)continue}const X=e.guildId=="@me"?null:S({id:d.id,icon:d.icon,size:24});p.push(n.React.createElement(I,{embed:{rawDescription:"",author:{name:e.guildId=="@me"?"Direct Message":`${d.name} - #${f.name}`,iconProxyURL:X}},renderLinkComponent:B,renderDescription:()=>n.React.createElement("div",{className:D.message,key:t.id},n.React.createElement(C,{id:"message-link-preview-"+t.id,message:t,channel:f,animateAvatar:!1,subscribeToComponentDispatch:!1,compact:M.messageDisplayCompact}))}))}return p}return null}const{MessageAccessories:N}=s.findByProps("MessageAccessories");let u;var v=a=>({onLoad(){u=P.after("render",N.prototype,function(r,c){c.props.children.push(n.React.createElement(U,{message:this.props.message}))})},onUnload(){u()}});return v})(cumcord.modules.webpackModules,cumcord.patcher,cumcord.modules.common);