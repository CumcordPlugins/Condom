(function(){"use strict";let e=()=>{},t=!1,n;var d=o=>({onLoad(){n=async r=>{r.code=="F11"&&(r.preventDefault(),t=!t,e(),e=cumcord.patcher.injectCSS(`body {filter: blur(${t?.8:0}rem);}`))},document.addEventListener("keydown",n)},onUnload(){e("lmao"),document.removeEventListener("keydown",n)}});return d})();