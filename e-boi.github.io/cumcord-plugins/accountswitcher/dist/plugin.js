(function(a,b,h,_,P,p){"use strict";function M(t){if(t&&t.__esModule)return t;var o=Object.create(null);return t&&Object.keys(t).forEach(function(r){if(r!=="default"){var c=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(o,r,c.get?c:{enumerable:!0,get:function(){return t[r]}})}}),o.default=t,Object.freeze(o)}var e=M(_);const w=a.webpack.findByProps("TooltipContainer").TooltipContainer,y=a.webpack.findByProps("openModalLazy");let E;const k=async t=>E=y.openModal(o=>(t.props={...t.props,...o},t)),S=()=>y.closeModal(E),l=a.webpack.findByProps("ModalRoot"),g=a.webpack.findByDisplayName("FormTitle"),f=a.webpack.findByDisplayName("Card"),s=a.webpack.find(t=>t.DropdownSizes),v=a.webpack.findByDisplayName("Text")||a.webpack.findByDisplayName("LegacyText"),G=a.webpack.findByDisplayName("Pencil"),T={dividerDefault:a.webpack.findByProps("dividerDefault").dividerDefault,divider:a.webpack.find(t=>t.divider?.includes("divider-_")).divider};var $=({className:t})=>e.createElement("div",{className:`${T.divider} ${T.dividerDefault} ${t}`});const q=a.webpack.findByDisplayName("FormItem"),Z=a.webpack.findByDisplayName("FormText"),d={...a.webpack.findByProps("marginBottom20"),...a.webpack.findByProps("formText"),...a.webpack.findByDisplayName("Flex")};var A=t=>e.createElement(q,{title:t.title,required:t.required,className:`${d.Direction.VERTICAL} ${d.Justify.START} ${d.Align.STRETCH} ${d.Wrap.NO_WRAP} ${d.marginBottom20}`},t.children,t.note&&e.createElement(Z,{className:`${d.description} ${d.marginTop8}`},t.note),e.createElement($,{className:[d.marginTop20].join(" ")}));const K=a.webpack.findByDisplayName("TextInput");var u=t=>{const o=t.children;return delete t.children,e.createElement(A,{title:o,required:t.required,note:t.note},e.createElement(K,{...t}))},D=({account:t,onClose:o,transitionState:r})=>{const[c,i]=e.useState(t);return e.createElement(l.ModalRoot,{transitionState:r,className:"acc-switch-modal"},e.createElement(l.ModalHeader,null,e.createElement(g,{tag:"h3"},"Add Account")),e.createElement(l.ModalContent,null,e.createElement(f,null,e.createElement(u,{value:c.name,onChange:n=>i({...c,name:n})},"Name:"),e.createElement(u,{value:c.pfp,onChange:n=>i({...c,pfp:n})},"Profile:"),e.createElement(u,{value:c.token,onChange:n=>i({...c,token:n})},"Token:"))),e.createElement(l.ModalFooter,null,e.createElement(s,{onClick:()=>{p.persist.store.accounts.push(c),o()}},"Save"),e.createElement(s,{onClick:o},"Back")))},z=({account:t,idx:o,onClose:r,transitionState:c})=>{const[i,n]=e.useState(t);return e.createElement(l.ModalRoot,{transitionState:c,className:"acc-switch-modal"},e.createElement(l.ModalHeader,null,e.createElement(g,{tag:"h3"},"Edit Account")),e.createElement(l.ModalContent,null,e.createElement(f,null,e.createElement(u,{value:i.name,onChange:m=>n({...i,name:m})},"Name:"),e.createElement(u,{value:i.pfp,onChange:m=>n({...i,pfp:m})},"Profile:"),e.createElement(u,{value:i.token,onChange:m=>n({...i,token:m})},"Token:"))),e.createElement(l.ModalFooter,null,e.createElement(s,{onClick:()=>{p.persist.store.accounts[o]=i,r()}},"Save"),e.createElement(s,{onClick:r},"Back")))};const{getCurrentUser:j}=a.webpack.findByProps("getCurrentUser"),{getToken:C}=a.webpack.findByProps("getToken"),{loginToken:F}=a.webpack.findByProps("loginToken");var L=({transitionState:t})=>{const[o,r]=e.useState({}),[c,i]=e.useState();return P.useNest(p.persist),e.createElement(l.ModalRoot,{transitionState:t,className:"acc-switch-modal"},e.createElement(l.ModalHeader,null,e.createElement(g,{tag:"h3"},"Accounts")),e.createElement(l.ModalContent,null,p.persist.ghost.accounts?.map((n,m)=>e.createElement(f,null,e.createElement("div",{className:`account ${c===n.token&&"selected-account"}`,onClick:x=>{x.target.type=="button"||x.target.nodeName==="svg"||x.target.nodeName==="path"||x.target.parentElement.className==="Token"||i(n.token)}},e.createElement("img",{src:n.pfp}),e.createElement("div",{className:"account-details"},e.createElement("div",{className:"accountName"},n.name,e.createElement(w,{text:"Edit",position:"top"},e.createElement(G,{className:"pencilsvg",onClick:()=>k(e.createElement(z,{account:n,idx:m,persist:p.persist}))}))),e.createElement("div",{className:"Token"},e.createElement(v,{className:"tokenText"},"Token:"),e.createElement(v,{className:`tokenValue ${o[n.token]&&"reveal"}`,onClick:()=>r({...o,[n.token]:!o[n.token]})},n.token))),e.createElement("div",{className:"account-buttons"},e.createElement(s,{onClick:()=>{p.persist.ghost.accounts.splice(m,1),i(n.token),setTimeout(()=>i(null))},color:s.Colors.RED,size:s.Sizes.SMALL},"X")))))),e.createElement(l.ModalFooter,null,e.createElement(s,{color:c?s.Colors.BRAND:s.Colors.GREY,onClick:()=>O(c)},"Switch"),e.createElement(s,{onClick:()=>k(e.createElement(D,{account:I(),persist:p.persist}))},"Add account")))};function I(){const t=j();return{name:t.tag,token:C(),pfp:t.getAvatarURL()}}function O(t){!t||C()!==t&&(S(),F(t))}var H=e.memo(t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",...t},e.createElement("g",null,e.createElement("rect",{fill:"none",height:"24",width:"24",x:"0"})),e.createElement("g",null,e.createElement("g",null,e.createElement("polygon",{points:"7.41,13.41 6,12 2,16 6,20 7.41,18.59 5.83,17 21,17 21,15 5.83,15"}),e.createElement("polygon",{points:"16.59,10.59 18,12 22,8 18,4 16.59,5.41 18.17,7 3,7 3,9 18.17,9"}))))),U=()=>h.injectCSS(".acc-switch-modal{width:650px}.acc-switch-modal .separator-2lLxgC{-webkit-box-shadow:none!important;box-shadow:none!important}.acc-switch-modal .content-2hZxGK{background-color:var(--background-tertiary);padding:10px 4px 0 10px!important;margin-bottom:20px!important;border-radius:5px;margin:0 10px}.acc-switch-modal .content-2hZxGK [aria-hidden=true]{display:none}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__{background-color:transparent;margin-bottom:10px;border:none}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account{background-color:var(--background-secondary);-webkit-transition:background-color .25s ease;transition:background-color .25s ease;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details .accountName{color:var(--text-normal);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;font-size:large;display:-webkit-box;display:-ms-flexbox;display:flex}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details .accountName [aria-label=Edit]{position:relative;margin-left:5px;top:1px}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details .Token{-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details .Token .tokenValue{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;background-color:var(--background-secondary-alt);color:var(--background-secondary-alt);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;border-radius:5px;font-size:12px;margin-left:5px;padding:3px}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-details .Token .tokenValue.reveal{background-color:transparent;color:var(--text-normal);cursor:pointer}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-buttons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;right:0px;top:5px}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-buttons button{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 5px;height:30px;padding:0}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account .account-buttons button:hover{background-color:#b13234}.acc-switch-modal .content-2hZxGK .cardPrimary-3qRT__ .account img{margin-right:13px;border-radius:5%;height:60px}.acc-switch-modal .content-2hZxGK .selected-account{background-color:var(--background-accent)!important}.acc-switch-modal .footer-31IekZ .lookFilled-yCfaCM.colorBrand-I6CyqQ:nth-child(2){position:absolute;left:15px}.acc-switch-modal .footer-31IekZ .lookFilled-yCfaCM.colorGrey-2iAG-B{cursor:not-allowed}.switch-acc-button polygon{fill:var(--interactive-normal)}");const N={...a.webpack.findByProps("iconWrapper","clickable")};let B,R;const V=a.webpack.findByDisplayName("HeaderBarContainer");var W=({persist:t})=>(t.ghost.accounts||(t.store.accounts=[]),{onLoad(){R=U(),B=h.after("renderLoggedIn",V.prototype,(o,r)=>{const c=b.React.createElement(w,{text:"Switch Accounts",position:"bottom"},b.React.createElement("div",{className:["switch-acc-button",N.iconWrapper,N.clickable].join(" ")},b.React.createElement(H,{onClick:()=>k(b.React.createElement(L))})));return r.props.toolbar?r.props.toolbar.props.children.push(c):r.props.toolbar=c,r})},onUnload(){B?.(),R?.()}});return W})(cumcord.modules,cumcord.modules.common,cumcord.patcher,cumcord.modules.common.React,cumcord.utils,cumcord.pluginData);
