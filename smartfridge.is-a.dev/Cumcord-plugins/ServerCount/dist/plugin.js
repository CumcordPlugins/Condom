(function(r,d){"use strict";let s,i,t={},n={},l={},a;function u(){if(console.log("refresh count"),t=r.webpackModules.findByProps("guildSeparator"),n=r.webpackModules.findByProps("modeSelectable"),l=r.webpackModules.findByProps("keybind"),a=r.webpackModules.findByProps("getGuilds"),!t)return;const c=Object.keys(a.getGuilds()).length;let e=document.getElementById("cc_server_count");if(e){e.innerHTML=c+" Servers";return}const o=document.querySelector(`.${t.guildSeparator}`);if(o){e=document.createElement("div"),e.className=`${n?n.description+" ":""}${t.listItem} ${l.keybind}`,e.innerHTML=c+" Servers",e.id="cc_server_count";try{o.parentElement.parentElement.insertBefore(e,o.parentElement)}catch(p){console.error(p)}}}var m=c=>({onLoad(){s=d.injectCSS(`
        div#cc_server_count {
            text-align: center;
            font-family: var(--font-primary);
        }
        `),i=setInterval(function(){u()},3e4),u()},onUnload(){try{s(),clearInterval(i),document.getElementById("cc_server_count").remove()}catch(e){console.error(`FAILED TO DETACH SERVER COUNTER: ${e}`)}}});return m})(cumcord.modules,cumcord.patcher);
