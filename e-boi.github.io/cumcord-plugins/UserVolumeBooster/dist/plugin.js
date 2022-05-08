(function(m,l,u,p,c,f,t){"use strict";function v(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var d=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(i,n,d.get?d:{enumerable:!0,get:function(){return e[n]}})}}),i.default=e,Object.freeze(i)}var a=v(p);const s={dividerDefault:t.webpack.findByProps("dividerDefault").dividerDefault,divider:t.webpack.find(e=>e.divider?.includes("divider-_")).divider};var b=({className:e})=>a.createElement("div",{className:`${s.divider} ${s.dividerDefault} ${e}`});const y=t.webpack.findByDisplayName("FormItem"),h=t.webpack.findByDisplayName("FormText"),r={...t.webpack.findByProps("marginBottom20"),...t.webpack.findByProps("formText"),...t.webpack.findByDisplayName("Flex")};var N=e=>a.createElement(y,{title:e.title,required:e.required,className:`${r.Direction.VERTICAL} ${r.Justify.START} ${r.Align.STRETCH} ${r.Wrap.NO_WRAP} ${r.marginBottom20}`},e.children,e.note&&a.createElement(h,{className:`${r.description} ${r.marginTop8}`},e.note),a.createElement(b,{className:[r.marginTop20].join(" ")}));const g=t.webpack.findByDisplayName("TextInput");var x=e=>{const i=e.children;return delete e.children,a.createElement(N,{title:i,required:e.required,note:e.note},a.createElement(g,{...e}))},$=()=>(f.useNest(c.persist),a.createElement(x,{note:"Maximum adjustable volume on the volume slider",defaultValue:c.persist.ghost.max??400,onChange:e=>!isNaN(e)&&(c.persist.store.max=Number(e))},"Max Volume"));const E=m.findByDisplayName("Slider");let o;var w=({persist:e})=>({onLoad(){o=u.before("render",E.prototype,function(i){return this.props?.["aria-label"]!==l.i18n.Messages.USER_VOLUME||(this.props.maxValue=e.ghost.max??400,this.state.max=e.ghost.max??400,this.state.range=e.ghost.max??400,this.state.value=this.state.initialValueProp),i})},onUnload(){o?.()},settings:$});return w})(cumcord.modules.webpack,cumcord.modules.common,cumcord.patcher,cumcord.modules.common.React,cumcord.pluginData,cumcord.utils,cumcord.modules);