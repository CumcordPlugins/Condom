(function(c,w,$,f,L){"use strict";function A(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(o){if(o!=="default"){var a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:function(){return e[o]}})}}),r.default=e,Object.freeze(r)}var t=A(L);const z=c.webpack.findByProps("openModalLazy");let B;const O=async e=>B=z.openModal(r=>(e.props={...e.props,...r},e)),V=()=>z.closeModal(B),x=c.webpack.findByProps("ModalRoot");c.webpack.findByDisplayName("Text")||c.webpack.findByDisplayName("LegacyText");const q=c.webpack.find(e=>e.DropdownSizes),H=c.webpack.findByDisplayName("Spinner"),Q="https://raw.githubusercontent.com/E-boi/assets/main/star.svg",Y="https://raw.githubusercontent.com/E-boi/assets/main/ghfork.svg",J="https://raw.githubusercontent.com/E-boi/assets/main/folder.svg",U="https://raw.githubusercontent.com/E-boi/assets/main/ghfile.svg",Z=c.webpack.findByDisplayName("Arrow"),W=c.webpack.findByProps("parse","parseTopic"),I={markup:cumcord.modules.webpack.findByProps("markup").markup,scrollbarGhostHairline:cumcord.modules.webpack.findByProps("scrollbarGhostHairline").scrollbarGhostHairline};var X=({file:e,path:r})=>t.createElement("div",{className:I.markup},t.createElement("div",{className:"Gpath"},t.createElement("p",null,`/${r}`)),e.isImage?t.createElement("div",{className:`Gimg ${I.scrollbarGhostHairline}`},t.createElement("img",{src:e.content})):W.defaultRules.codeBlock.react({content:e.content,lang:e.type},null,{})),S=({dir:e,onClick:r,path:o})=>t.createElement("div",{className:o?"Gin-folder":"Gout-folder"},o&&t.createElement("div",{className:"Gpath"},t.createElement("p",null,`/${o}`)),e?.map(a=>t.createElement("p",{className:a.type==="dir"?"Gfolder":`Gfile ${a.name.split(".")[a.name.split(".").length-1]} ${a.name.includes(".")?"":"blank"}`},a.type==="dir"?[t.createElement("img",{src:J,height:16,width:16}),t.createElement("a",{onClick:()=>r(a.path,"folder")},a.name)]:[t.createElement("img",{src:U,height:16,width:16}),t.createElement("a",{onClick:()=>r(a.name,"file")},a.name)])));const _={dividerDefault:c.webpack.findByProps("dividerDefault").dividerDefault,divider:c.webpack.find(e=>e.divider?.includes("divider-_")).divider};var j=({className:e})=>t.createElement("div",{className:`${_.divider} ${_.dividerDefault} ${e}`});const ee=c.webpack.findByDisplayName("FormItem"),te=c.webpack.findByDisplayName("SelectTempWrapper"),M={...c.webpack.findByProps("marginBottom20")};var re=e=>{const r=e.children;return delete e.children,t.createElement(ee,{title:r,className:M.marginBottom20,required:e.required},t.createElement(te,{...e}),t.createElement(j,{className:[M.marginTop20,M.marginBottom20].join(" ")}))};const K={...c.webpack.findByProps("emptyStateImage","emptyStateSubtext")},oe=["png","jpg"];var ae=({url:e,key:r,transitionState:o})=>{const[a,s]=t.useState(),[n,d]=t.useState(),[l,p]=t.useState(),[m,y]=t.useState(),[N,be]=t.useState(),[g,F]=t.useState(),[b,fe]=t.useState();n||le(e,r).then(i=>{F(i.default_branch),d(i)}).catch(i=>fe(i.message)),n&&!a&&C(e,g,r).then(i=>s(i)),N||ie(e,r).then(i=>be(i));let v;if(l&&!m){const i=l[0]?.path.split("/");v=l[0].path.replace(`/${i[i.length-1]}`,"")}else m&&(v=m.path);return t.createElement(x.ModalRoot,{transitionState:o,className:`githubModel ${m?"infile":""}`},t.createElement(x.ModalHeader,null,t.createElement("a",{className:"repo-name",href:n?.html_urk||`https://github.com/${e}`,target:"_blank"},n?.name||e),n&&t.createElement("a",{className:"star-svg",href:`${n.html_url}/stargazers`,target:"_blank"},t.createElement("img",{src:Q}),t.createElement("p",null,n.stargazers_count)),l&&!m&&t.createElement("div",{className:"back-outfile",onClick:()=>{const i=ne(l);i||p(null),E(e,i,g,r).then(h=>p(h))}},t.createElement(Z,{direction:"LEFT"})),m&&t.createElement("div",{className:"back-outfile",onClick:()=>y(null)},t.createElement(Z,{direction:"LEFT"})),N&&t.createElement(re,{className:"Gbranches",value:g,onChange:({value:i})=>{g!==i&&(p(null),y(null),F(i),C(e,i,r).then(h=>s(h)))},options:N.map(i=>({label:i.name,value:i.name}))})),t.createElement(x.ModalContent,null,b&&t.createElement("div",{className:"Gerror"},t.createElement("div",{className:K.emptyStateImage}),t.createElement("p",{className:`Gerror-text ${K.emptyStateSubtext}`},b)),!n&&!b&&t.createElement("p",{className:"Gfetching"},"Getting repo",t.createElement(H,{type:"wanderingCubes"})),a&&!l&&!b&&!m&&t.createElement(S,{dir:a,onClick:(i,h)=>h==="folder"?E(e,i,g,r).then(u=>p(u)):D(a,i).then(u=>y(u))}),l&&!b&&!m&&t.createElement(S,{dir:l,onClick:(i,h)=>h==="folder"?E(e,i,g,r).then(u=>p(u)):D(l,i).then(u=>y(u)),path:v}),m&&!b&&t.createElement(X,{file:m,path:v})),t.createElement(x.ModalFooter,null,t.createElement(q,{onClick:()=>V()},"Close"),n&&t.createElement("div",{className:"repo-info"},t.createElement("a",{className:"owner-profile",href:n.owner.html_url,target:"_blank"},t.createElement("img",{height:32,width:32,src:n.owner.avatar_url}),t.createElement("p",null,n.owner.login)),t.createElement("a",{className:"fork-svg",href:`${n.html_url}/network/members`,target:"_blank"},t.createElement("img",{src:Y}),t.createElement("p",null,n.forks)))))};function ne(e){const r=e[0].path.split("/");if(r.length!==2)return e[0].path.replace(`/${r[r.length-2]}/${r[r.length-1]}`,"")}async function ie(e,r){const o=await fetch(`https://api.github.com/repos/${e}/branches?per_page=100`,{headers:r&&{Authorization:`token ${r}`}});return o.ok?await o.json():void 0}async function le(e,r){const o=await fetch(`https://api.github.com/repos/${e}`,{headers:r&&{Authorization:`token ${r}`}});if(!o.ok)throw Error((await o.json()).message);return await o.json()}async function C(e,r,o){const a=await fetch(`https://api.github.com/repos/${e}/contents?ref=${r}`,{headers:o&&{Authorization:`token ${o}`}});if(!a.ok)return;const s=await a.json(),n=s.map(l=>l.type==="dir"&&l).filter(l=>l),d=s.map(l=>l.type==="file"&&l).filter(l=>l);return[...n,...d]}async function E(e,r,o,a){const s=await fetch(`https://api.github.com/repos/${e}/contents/${r}?ref=${o}`,{headers:a&&{Authorization:`token ${a}`}});if(!s.ok)return;const n=await s.json(),d=n.map(p=>p.type==="dir"&&p).filter(p=>p),l=n.map(p=>p.type==="file"&&p).filter(p=>p);return[...d,...l]}async function D(e,r){const o=e.filter(d=>d.type==="file"&&d.name===r),a=r.split("."),s=oe.includes(a[a.length-1]);if(o.length===0)return;if(s)return{path:o[0].path,content:o[0].download_url,type:a[a.length-1],isImage:s};const n=await(await fetch(o[0].download_url)).text();return{path:o[0].path,content:n,type:a[a.length-1],isImage:s}}var ce=()=>w.injectCSS(".infile{height:fit-content!important;min-width:600px!important;width:80%!important;margin:auto}.infile .markup-eYLPri pre{max-width:100%}.infile .markup-eYLPri{margin-left:5px;margin-right:5px}.infile .content-2hZxGK{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.infile .hljs{padding:0!important}.infile .hljs .powercord-codeblock-table{margin-left:7px}.infile .hljs .powercord-codeblock-lang{padding:4px;font-size:12px}.infile .hljs .powercord-codeblock-copy-btn{position:absolute;height:20px;opacity:1;top:29px}.infile .hljs .powercord-codeblock-copy-btn:hover{background-color:var(--background-primary)}.Gpath{margin:0!important;height:25px}.Gpath p{position:absolute;padding-left:10px;left:0;top:-6px}.githubModel{border-radius:10px;width:700px;height:450px}.githubModel .header-1zd7se{border-bottom:solid 2px var(--background-secondary);-webkit-box-shadow:none!important;box-shadow:none!important;color:var(--text-normal);padding:0 0 0 10px;border-radius:0;overflow:unset;height:60px}.githubModel .header-1zd7se .back-outfile{background-color:#0000001a;border:solid 1px rgba(32,34,37,.5);border-radius:7px;position:absolute;padding:6px 10px;right:317px}.githubModel .header-1zd7se .back-outfile:hover{background-color:var(--background-tertiary);cursor:pointer}.githubModel .header-1zd7se .repo-name{color:var(--text-normal);text-transform:capitalize;font-size:24px;margin:0}.githubModel .header-1zd7se .repo-name:hover{text-decoration:underline;cursor:pointer}.githubModel .header-1zd7se .star-svg{color:var(--text-normal);border-left:solid 1px rgba(255,255,255,.1);position:relative;margin-left:8px;padding-left:8px;display:-webkit-box;display:-ms-flexbox;display:flex;height:25px;bottom:2px}.githubModel .header-1zd7se .star-svg img{fill:var(--text-normal);position:relative;height:20px;top:4px}.githubModel .header-1zd7se .star-svg p{position:relative;font-size:18px;bottom:9px;left:5px}.githubModel .header-1zd7se .star-svg p:hover{text-decoration:underline;cursor:pointer}.githubModel .header-1zd7se .marginBottom20-315RVT{position:absolute;width:300px;right:10px;margin:0}.githubModel .header-1zd7se .marginBottom20-315RVT .divider-IqmEqJ,.githubModel .header-1zd7se .marginBottom20-315RVT .css-o3gndj-placeholder{display:none}.githubModel .header-1zd7se .marginBottom20-315RVT .css-gvi9bl-control{border-radius:7px}.githubModel .header-1zd7se .marginBottom20-315RVT .css-3vaxre-menu{margin-top:7px!important;border-radius:7px}.githubModel .header-1zd7se .marginBottom20-315RVT .css-3vaxre-menu ::-webkit-scrollbar{display:none}.githubModel .header-1zd7se .marginBottom20-315RVT:hover{cursor:pointer}.githubModel .content-2hZxGK{border-radius:0;padding:0}.githubModel .content-2hZxGK .Gimg{overflow-x:auto}.githubModel .content-2hZxGK .Gerror{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.githubModel .content-2hZxGK .Gerror div{margin-top:20px;margin-bottom:20px}.githubModel .content-2hZxGK .Gfetching{display:-ms-grid;display:grid;-ms-grid-rows:2rem;grid-template-rows:2rem;text-align:center;color:var(--text-normal)}.githubModel .content-2hZxGK .Gpath{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--text-normal);margin-top:7px;padding-bottom:7px;border-bottom:solid 2px var(--background-secondary)}.githubModel .content-2hZxGK .Gback-button{margin-bottom:12px;margin-top:-11px}.githubModel .content-2hZxGK .Gback-button img{padding:3px 10px 0;position:relative;height:20px;width:20px;top:3px}.githubModel .content-2hZxGK .Gback-button a{background-color:var(--background-secondary);color:var(--text-normal);border-radius:7px;padding:5px 20px}.githubModel .content-2hZxGK .Gback-button a:hover{background-color:var(--background-tertiary)}.githubModel .content-2hZxGK .Gfile,.githubModel .content-2hZxGK .Gfolder{border-top:solid 1px var(--background-secondary);padding:10px 0 0 10px;margin:10px 0}.githubModel .content-2hZxGK .Gfile a,.githubModel .content-2hZxGK .Gfolder a{color:var(--text-normal);padding-left:7px}.githubModel .content-2hZxGK .Gfile a:hover,.githubModel .content-2hZxGK .Gfolder a:hover{text-decoration:underline;color:var(--text-link)}.githubModel .content-2hZxGK .Gfile img,.githubModel .content-2hZxGK .Gfolder img{position:relative;top:2px}.githubModel .content-2hZxGK::-webkit-scrollbar{display:none}.githubModel .content-2hZxGK .Gin-folder .Gback-button{margin-bottom:13px!important;padding-top:14px}.githubModel .footer-31IekZ{border-top:solid 2px var(--background-secondary-alt);border-radius:0 0 7px 7px;overflow:unset;height:57px;padding:0}.githubModel .footer-31IekZ .button-f2h6uQ{background-color:var(--background-tertiary);border-radius:7px;position:absolute;width:40%;right:6px;top:10px}.githubModel .footer-31IekZ .button-f2h6uQ:hover{background-color:var(--background-primary)}.githubModel .footer-31IekZ .repo-info{color:var(--text-normal);position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;left:10px;width:57.5%}.githubModel .footer-31IekZ .owner-profile{color:var(--text-normal);position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;top:7px}.githubModel .footer-31IekZ .owner-profile img{border-radius:5px;height:40px;width:40px}.githubModel .footer-31IekZ .owner-profile p{text-transform:capitalize;padding:11px 0 0 8px;font-size:18px;margin:0}.githubModel .footer-31IekZ .owner-profile p:hover{text-decoration:underline;cursor:pointer}.githubModel .footer-31IekZ .fork-svg{color:var(--text-normal);padding:18px 4px 0 0;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;right:4px}.githubModel .footer-31IekZ .fork-svg p{padding-left:4px;font-size:20px;margin:0}.githubModel .footer-31IekZ .fork-svg p:hover{text-decoration:underline;cursor:pointer}.githubModel .footer-31IekZ .fork-svg img{fill:var(--text-normal);height:20px}");const se=c.webpack.findByDisplayName("TextInput"),pe=c.webpack.findByDisplayName("FormItem"),G={...c.webpack.findByProps("marginBottom20")};var de=e=>{const r=e.children;return delete e.children,t.createElement(pe,{title:r,required:e.required,className:G.marginBottom20},t.createElement(se,{...e}),t.createElement(j,{className:[G.marginTop20,G.marginBottom20].join(" ")}))},me=({persist:e})=>($.useNest(e),t.createElement("div",null,t.createElement(de,{value:e.ghost.apikey,onChange:r=>e.store.apikey=r},"Api key"),t.createElement("p",null,t.createElement("a",{href:"https://github.com/settings/tokens/new?description=GitHub%20in%20Discord&scopes=public_repo",target:"_blank"},"Make a token (just scroll down and click generate token and copy and paste the token)"))));const R=c.webpack.findByProps("MenuGroup","MenuItem");c.webpack.find(e=>e.default?.displayName==="MessageContextMenu");const T=/^https?:\/\/(www.)?github.com\/[\w-]+\/[\w-]+\/?/,k=[];let P;const he=async(e,r)=>{const o=c.webpack.findByDisplayName(e,!1);if(o)r(o);else{const a=c.webpack.findByProps("openContextMenuLazy");k.unshift(w.before("openContextMenuLazy",a,s=>{const n=s[1];return s[1]=async()=>{const d=await n(s[0]);return l=>{const p=d(l);return p?.type?.displayName===e&&r&&(k[0](),r(c.webpack.findByDisplayName(e,!1)),r=!1),p}},s}))}};var ue=({persist:e})=>({onLoad(){P=ce(),he("MessageContextMenu",r=>{k.push(w.after("default",r,([{message:o,target:a}],s)=>{if(!o.content.includes("https://github.com/")||!o.content.includes("https://github.com/"))return;const n=a.href?.match(T)?.[0]||ge(o.content);return n.split("/").length<5||$.findInReactTree(s,d=>d?.props?.id==="githubModal")||s.props.children.splice(4,0,f.React.createElement(R.MenuGroup,null,f.React.createElement(R.MenuItem,{action:()=>O(f.React.createElement(ae,{url:`${n.split("/")[3]}/${n.split("/")[4]}`,key:e.ghost.apikey})),id:"githubModal",label:"Open"}))),s}))})},onUnload(){P?.(),k.forEach(r=>r?.())},settings:f.React.createElement(me,{persist:e})});function ge(e){return e.replace("tree","blob").replace(/(?:\n|<|>|\*|_|`)/g," ").split(" ").filter(r=>r.match(T))[0]}return ue})(cumcord.modules,cumcord.patcher,cumcord.utils,cumcord.modules.common,cumcord.modules.common.React);
