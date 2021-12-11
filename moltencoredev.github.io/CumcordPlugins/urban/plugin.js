(function(a){"use strict";var o=d=>{let n;return{onLoad:()=>{n=a.addCommand({name:"urban",description:"Searches urban dictionary for a word",args:[{name:"word",description:"The word to search for",type:"string",required:!0},{name:"send",description:"Whether to send the result in a message",type:"bool",required:!1}],handler:async(e,i)=>{let r=await(await fetch(`https://api.urbandictionary.com/v0/define?term=${e.args.word}`)).json();if(!r?.list[0]){i(`Couldn't find the definition for "${e.args.word}".`);return}let t=`Top definition for "${e.args.word}":
\`\`\`
${r?.list[0]?.definition}
\`\`\`
link: ${r?.list[0]?.permalink}`;if(e.args.send)return t;i(t)}})},onUnload:()=>{n()}}};return o})(cumcord.commands);
