(function(t,a,c){"use strict";const e=t.findByDisplayName("UserActivity"),o=t.findByDisplayName("ActivityTimeBar");let r;var m=d=>({onLoad(){r=a.instead("renderTimeBar",e.prototype,function([u]){const{timestamps:n}=u;if(!n)return null;const{start:i,end:s}=n;return!i||!s?null:c.React.createElement(o,{start:i,end:s,className:this.getTypeClass("timeBar"),themed:this.props.type===e.Types.VOICE_CHANNEL})})},onUnload(){r()}});return m})(cumcord.modules.webpackModules,cumcord.patcher,cumcord.modules.common);
