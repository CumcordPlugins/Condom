(function(D,s,d){"use strict";var b=()=>cumcord.patcher.injectCSS('[aria-label$=hidden]>div path[d^=M2][d*="19"],[aria-label$=hidden]>div path[d^=M17][d*="19"]{fill:#ed4245!important}'),E=Object.defineProperty,m=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e,n)=>(m(t,typeof e!="symbol"?e+"":e,n),n);class g{constructor(){a(this,"servers",new Map),a(this,"has",e=>{this.servers.has(e)}),a(this,"add",(e,n)=>{this.servers.set(e,n)}),a(this,"update",(e,n)=>{this.servers.set(e,n)}),a(this,"remove",e=>{this.servers.delete(e)}),a(this,"reset",()=>{this.servers.clear()}),a(this,"get",e=>this.servers.get(e))}}class p{constructor(){a(this,"channelAmount",null),a(this,"hiddenChannels",new Map),a(this,"addChannel",(e,n)=>{this.hiddenChannels.set(e,n)}),a(this,"updateChannel",(e,n)=>{this.hiddenChannels.set(e,n)}),a(this,"removeChannel",e=>{this.hiddenChannels.delete(e)}),a(this,"setChannelAmount",e=>{this.channelAmount=e})}}const l={},{getChannel:w,getMutableGuildChannelsByGuild:f}=s.webpack.findByProps("getMutableGuildChannels"),{ChannelTypes:c,Permissions:P}=s.common.constants,v=s.webpack.findByProps("computePermissions").can,N=s.webpack.findByProps("getCurrentUser").getCurrentUser(),M=s.webpack.findByProps("getCategories","initialize"),C=s.webpack.findByProps("hasUnread"),U=s.webpack.findByProps("fetchMessages","sendMessage"),I=s.webpack.findByDisplayName("ChannelItem",!1),o=new g,h=t=>{if(typeof t!="object"&&!t.id)try{t=w(t)}catch{}if(!t||[c.DM,c.GROUP_DM,c.GUILD_CATEGORY].includes(t.type))return!0;let e=[c.GUILD_TEXT,c.GUILD_VOICE,c.GUILD_STAGE_VOICE,c.GUILD_ANNOUNCEMENT,c.ANNOUNCEMENT_THREAD,c.PRIVATE_THREAD,c.PUBLIC_THREAD].includes(t.type),n=v(P.VIEW_CHANNEL,N,t);return e&&n},_=()=>{const t=f();for(let[e,n]of Object.entries(t)){const r=new p;n=Object.values(n),r.setChannelAmount(n.length);for(let i of n)h(i)||r.addChannel(i.id,i);o.add(e,r)}},T=t=>{const e=Object.values(f()[t]);if(e?.length==0)return;const n=new p;n.setChannelAmount(e.length);for(let r of e)h(r)||n.addChannel(r.id,r);o.add(t,n)},B=()=>{const t=document.querySelector(`.${s.webpack.findByProps("messagesWrapper").messagesWrapper}`);if(!t)return;t.firstChild.style.display="none",t.firstChild.nextSibling&&(t.firstChild.nextSibling.style.display="none"),t.parentElement.children[1].style.display="none",t.parentElement.parentElement.children[1].style.display="none";const e=document.querySelector(`.${s.webpack.findByProps("toolbar","selected").toolbar}`);e.style.display="none";const n=document.createElement("div"),r=s.webpack.findByProps("h5"),i=s.webpack.findByProps("flex","directionColumn","alignCenter");n.className=i.flexCenter,n.style.width="100%",n.innerHTML=`
        <div class="${i.flex} ${i.directionColumn} ${i.alignCenter}">
        <h2 class="${r.h2} ${r.defaultColor}">This is a hidden channel.</h2>
        <h5 class="${r.h5} ${r.defaultColor}">You cannot see the contents of this channel. However, you may see its name and topic.</h5>
        </div>`,t.appendChild(n)},u=t=>{h(t?.channelId)||setImmediate(B)};var L=t=>({onLoad(){l.css=b(),_(),l.getCategories=d.patcher.after("getCategories",M,(e,n)=>{o.has(e[0])||T(e[0]);for(let[r,i]of o.get(e[0]).hiddenChannels){if(!i)return n;const y=n[i.parent_id||"null"];if(y.filter(S=>S?.channel?.id===i.id).length)return n;y.push({channel:i,index:0})}return n}),l.channelSelect=()=>{s.common.FluxDispatcher.unsubscribe("CHANNEL_SELECT",u)},s.common.FluxDispatcher.subscribe("CHANNEL_SELECT",u),l.channelItem=d.patcher.before("default",I,e=>(h(e[0].channel.id)||(e[0]["aria-label"]+=" hidden"),e)),l.hasUnread=d.patcher.before("hasUnread",C,e=>(h(e[0])||(e[0]=""),e)),l.hasUnreadPins=d.patcher.before("hasUnreadPins",C,e=>h(e[0])?e:["unread"]),l.fetchMessages=d.patcher.instead("fetchMessages",U,(e,n)=>{if(!!h(e[0].channelId))return n(...e)})},onUnload(){for(let e of Object.values(l))e()}});return L})(cumcord.utils.logger,cumcord.modules,cumcord);
