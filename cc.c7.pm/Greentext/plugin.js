(function(u,o,a){"use strict";const r=u.findByProps("parseEmbedTitle"),l=`.theme-dark .greentext {
  color: #afc960;
}
.theme-light .greentext {
  color: #789922;
}`;let c;var i=p=>({onLoad(){o.injectCSS(l),c=o.instead("parse",r,function(s){return r.reactParserFor(Object.assign({greentext:{order:r.defaultRules.text.order,match:function(t,e){return e.inGreentext||e.inQuote?null:/^$|\n$/.test(e.prevCapture!=null?e.prevCapture[0]:"")&&/^(>.+?)(?:\n|$)/.exec(t)},parse:function(t,e,n){n.inGreentext=!0;const d={content:e(t[0],n),type:"greentext"};return delete n.inGreentext,d},react:function(t,e,n){return a.React.createElement("span",{className:"greentext"},e(t.content,n))}}},r.defaultRules)).apply(this,s)})},onUnload(){c&&c()}});return i})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common);
