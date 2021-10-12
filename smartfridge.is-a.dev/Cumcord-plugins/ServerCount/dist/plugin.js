(function(r){"use strict";let s,i,t={},c={},l={},a;function d(){if(console.log("refresh count"),t=r.webpackModules.findByProps("guildSeparator"),c=r.webpackModules.findByProps("modeSelectable"),l=r.webpackModules.findByProps("keybind"),a=r.webpackModules.findByProps("getGuilds"),!t)return;const n=Object.keys(a.getGuilds()).length;let e=document.getElementById("cc_server_count");if(e){e.innerHTML=n+" Servers";return}const o=document.querySelector(`.${t.guildSeparator}`);if(o){e=document.createElement("div"),e.className=`${c?c.description+" ":""}${t.listItem} ${l.keybind}`,e.innerHTML=n+" Servers",e.id="cc_server_count";try{o.parentElement.parentElement.insertBefore(e,o.parentElement)}catch(m){console.error(m)}}}var u={onLoad(){s=window.cumcord.patcher.injectCSS(`
        div#cc_server_count {
            text-align: center;
            font-family: var(--font-primary);
        }
        `),i=setInterval(function(){d()},3e4),d()},onUnload(){try{s(),clearInterval(i),document.getElementById("cc_server_count").remove()}catch(n){console.error(`FAILED TO DETACH SERVER COUNTER: ${n}`)}}};return u})(cumcord.modules);
