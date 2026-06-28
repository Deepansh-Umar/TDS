var So=Object.create;var ae=Object.defineProperty;var Co=Object.getOwnPropertyDescriptor;var Eo=Object.getOwnPropertyNames;var $o=Object.getPrototypeOf,To=Object.prototype.hasOwnProperty;var A=(l,u)=>()=>(l&&(u=l(l=0)),u);var U=(l,u)=>()=>(u||l((u={exports:{}}).exports,u),u.exports),I=(l,u)=>{for(var t in u)ae(l,t,{get:u[t],enumerable:!0})},Ao=(l,u,t,i)=>{if(u&&typeof u=="object"||typeof u=="function")for(let n of Eo(u))!To.call(l,n)&&n!==t&&ae(l,n,{get:()=>u[n],enumerable:!(i=Co(u,n))||i.enumerable});return l};var R=(l,u,t)=>(t=l!=null?So($o(l)):{},Ao(u||!l||!l.__esModule?ae(t,"default",{value:l,enumerable:!0}):t,l));var Me={};I(Me,{default:()=>Mo});import{html as No}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Mo({weight:l=1}){let u="q-vs-code-version",t="VS Code Version",i = () => true,n=No`
    <div class="mb-3">
      <p>
        Install and run Visual Studio Code. In your Terminal (or Command Prompt), type <code>code -s</code> and press
        Enter. Copy and paste the <em>entire output</em> below.
      </p>

      <label for="${u}" class="form-label">What is the output of <code>code -s</code>?</label>
      <textarea class="form-control" id="${u}" name="${u}" rows="3"></textarea>
    </div>
  `;return{id:u,title:t,weight:l,question:n,answer:i}}var Ie=A(()=>{"use strict"});var Le=U((Oe,ce)=>{(function(l,u,t){function i(e){var c=this,m=d();c.next=function(){var r=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=r-(c.c=r|0)},c.c=1,c.s0=m(" "),c.s1=m(" "),c.s2=m(" "),c.s0-=m(e),c.s0<0&&(c.s0+=1),c.s1-=m(e),c.s1<0&&(c.s1+=1),c.s2-=m(e),c.s2<0&&(c.s2+=1),m=null}function n(e,c){return c.c=e.c,c.s0=e.s0,c.s1=e.s1,c.s2=e.s2,c}function h(e,c){var m=new i(e),r=c&&c.state,a=m.next;return a.int32=function(){return m.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,r&&(typeof r=="object"&&n(r,m),a.state=function(){return n(m,{})}),a}function d(){var e=4022871197,c=function(m){m=String(m);for(var r=0;r<m.length;r++){e+=m.charCodeAt(r);var a=.02519603282416938*e;e=a>>>0,a-=e,a*=e,e=a>>>0,a-=e,e+=a*4294967296}return(e>>>0)*23283064365386963e-26};return c}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.alea=h})(Oe,typeof ce=="object"&&ce,typeof define=="function"&&define)});var qe=U((Re,le)=>{(function(l,u,t){function i(d){var e=this,c="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var r=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^r^r>>>8},d===(d|0)?e.x=d:c+=d;for(var m=0;m<c.length+64;m++)e.x^=c.charCodeAt(m)|0,e.next()}function n(d,e){return e.x=d.x,e.y=d.y,e.z=d.z,e.w=d.w,e}function h(d,e){var c=new i(d),m=e&&e.state,r=function(){return(c.next()>>>0)/4294967296};return r.double=function(){do var a=c.next()>>>11,s=(c.next()>>>0)/4294967296,o=(a+s)/(1<<21);while(o===0);return o},r.int32=c.next,r.quick=r,m&&(typeof m=="object"&&n(m,c),r.state=function(){return n(c,{})}),r}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.xor128=h})(Re,typeof le=="object"&&le,typeof define=="function"&&define)});var _e=U((Pe,de)=>{(function(l,u,t){function i(d){var e=this,c="";e.next=function(){var r=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(r^r<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,d===(d|0)?e.x=d:c+=d;for(var m=0;m<c.length+64;m++)e.x^=c.charCodeAt(m)|0,m==c.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function n(d,e){return e.x=d.x,e.y=d.y,e.z=d.z,e.w=d.w,e.v=d.v,e.d=d.d,e}function h(d,e){var c=new i(d),m=e&&e.state,r=function(){return(c.next()>>>0)/4294967296};return r.double=function(){do var a=c.next()>>>11,s=(c.next()>>>0)/4294967296,o=(a+s)/(1<<21);while(o===0);return o},r.int32=c.next,r.quick=r,m&&(typeof m=="object"&&n(m,c),r.state=function(){return n(c,{})}),r}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.xorwow=h})(Pe,typeof de=="object"&&de,typeof define=="function"&&define)});var je=U((Ue,ue)=>{(function(l,u,t){function i(d){var e=this;e.next=function(){var m=e.x,r=e.i,a,s,o;return a=m[r],a^=a>>>7,s=a^a<<24,a=m[r+1&7],s^=a^a>>>10,a=m[r+3&7],s^=a^a>>>3,a=m[r+4&7],s^=a^a<<7,a=m[r+7&7],a=a^a<<13,s^=a^a<<9,m[r]=s,e.i=r+1&7,s};function c(m,r){var a,s,o=[];if(r===(r|0))s=o[0]=r;else for(r=""+r,a=0;a<r.length;++a)o[a&7]=o[a&7]<<15^r.charCodeAt(a)+o[a+1&7]<<13;for(;o.length<8;)o.push(0);for(a=0;a<8&&o[a]===0;++a);for(a==8?s=o[7]=-1:s=o[a],m.x=o,m.i=0,a=256;a>0;--a)m.next()}c(e,d)}function n(d,e){return e.x=d.x.slice(),e.i=d.i,e}function h(d,e){d==null&&(d=+new Date);var c=new i(d),m=e&&e.state,r=function(){return(c.next()>>>0)/4294967296};return r.double=function(){do var a=c.next()>>>11,s=(c.next()>>>0)/4294967296,o=(a+s)/(1<<21);while(o===0);return o},r.int32=c.next,r.quick=r,m&&(m.x&&n(m,c),r.state=function(){return n(c,{})}),r}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.xorshift7=h})(Ue,typeof ue=="object"&&ue,typeof define=="function"&&define)});var Fe=U((De,pe)=>{(function(l,u,t){function i(d){var e=this;e.next=function(){var m=e.w,r=e.X,a=e.i,s,o;return e.w=m=m+1640531527|0,o=r[a+34&127],s=r[a=a+1&127],o^=o<<13,s^=s<<17,o^=o>>>15,s^=s>>>12,o=r[a]=o^s,e.i=a,o+(m^m>>>16)|0};function c(m,r){var a,s,o,p,y,b=[],S=128;for(r===(r|0)?(s=r,r=null):(r=r+"\0",s=0,S=Math.max(S,r.length)),o=0,p=-32;p<S;++p)r&&(s^=r.charCodeAt((p+32)%r.length)),p===0&&(y=s),s^=s<<10,s^=s>>>15,s^=s<<4,s^=s>>>13,p>=0&&(y=y+1640531527|0,a=b[p&127]^=s+y,o=a==0?o+1:0);for(o>=128&&(b[(r&&r.length||0)&127]=-1),o=127,p=4*128;p>0;--p)s=b[o+34&127],a=b[o=o+1&127],s^=s<<13,a^=a<<17,s^=s>>>15,a^=a>>>12,b[o]=s^a;m.w=y,m.X=b,m.i=o}c(e,d)}function n(d,e){return e.i=d.i,e.w=d.w,e.X=d.X.slice(),e}function h(d,e){d==null&&(d=+new Date);var c=new i(d),m=e&&e.state,r=function(){return(c.next()>>>0)/4294967296};return r.double=function(){do var a=c.next()>>>11,s=(c.next()>>>0)/4294967296,o=(a+s)/(1<<21);while(o===0);return o},r.int32=c.next,r.quick=r,m&&(m.X&&n(m,c),r.state=function(){return n(c,{})}),r}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.xor4096=h})(De,typeof pe=="object"&&pe,typeof define=="function"&&define)});var Je=U((Be,me)=>{(function(l,u,t){function i(d){var e=this,c="";e.next=function(){var r=e.b,a=e.c,s=e.d,o=e.a;return r=r<<25^r>>>7^a,a=a-s|0,s=s<<24^s>>>8^o,o=o-r|0,e.b=r=r<<20^r>>>12^a,e.c=a=a-s|0,e.d=s<<16^a>>>16^o,e.a=o-r|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,d===Math.floor(d)?(e.a=d/4294967296|0,e.b=d|0):c+=d;for(var m=0;m<c.length+20;m++)e.b^=c.charCodeAt(m)|0,e.next()}function n(d,e){return e.a=d.a,e.b=d.b,e.c=d.c,e.d=d.d,e}function h(d,e){var c=new i(d),m=e&&e.state,r=function(){return(c.next()>>>0)/4294967296};return r.double=function(){do var a=c.next()>>>11,s=(c.next()>>>0)/4294967296,o=(a+s)/(1<<21);while(o===0);return o},r.int32=c.next,r.quick=r,m&&(typeof m=="object"&&n(m,c),r.state=function(){return n(c,{})}),r}u&&u.exports?u.exports=h:t&&t.amd?t(function(){return h}):this.tychei=h})(Be,typeof me=="object"&&me,typeof define=="function"&&define)});var ze=U(()=>{});var He=U((Ye,ee)=>{(function(l,u,t){var i=256,n=6,h=52,d="random",e=t.pow(i,n),c=t.pow(2,h),m=c*2,r=i-1,a;function s(f,x,C){var g=[];x=x==!0?{entropy:!0}:x||{};var E=b(y(x.entropy?[f,$(u)]:f??S(),3),g),k=new o(g),w=function(){for(var v=k.g(n),N=e,M=0;v<c;)v=(v+M)*i,N*=i,M=k.g(1);for(;v>=m;)v/=2,N/=2,M>>>=1;return(v+M)/N};return w.int32=function(){return k.g(4)|0},w.quick=function(){return k.g(4)/4294967296},w.double=w,b($(k.S),u),(x.pass||C||function(v,N,M,T){return T&&(T.S&&p(T,k),v.state=function(){return p(k,{})}),M?(t[d]=v,N):v})(w,E,"global"in x?x.global:this==t,x.state)}function o(f){var x,C=f.length,g=this,E=0,k=g.i=g.j=0,w=g.S=[];for(C||(f=[C++]);E<i;)w[E]=E++;for(E=0;E<i;E++)w[E]=w[k=r&k+f[E%C]+(x=w[E])],w[k]=x;(g.g=function(v){for(var N,M=0,T=g.i,O=g.j,P=g.S;v--;)N=P[T=r&T+1],M=M*i+P[r&(P[T]=P[O=r&O+N])+(P[O]=N)];return g.i=T,g.j=O,M})(i)}function p(f,x){return x.i=f.i,x.j=f.j,x.S=f.S.slice(),x}function y(f,x){var C=[],g=typeof f,E;if(x&&g=="object")for(E in f)try{C.push(y(f[E],x-1))}catch{}return C.length?C:g=="string"?f:f+"\0"}function b(f,x){for(var C=f+"",g,E=0;E<C.length;)x[r&E]=r&(g^=x[r&E]*19)+C.charCodeAt(E++);return $(x)}function S(){try{var f;return a&&(f=a.randomBytes)?f=f(i):(f=new Uint8Array(i),(l.crypto||l.msCrypto).getRandomValues(f)),$(f)}catch{var x=l.navigator,C=x&&x.plugins;return[+new Date,l,C,l.screen,$(u)]}}function $(f){return String.fromCharCode.apply(0,f)}if(b(t.random(),u),typeof ee=="object"&&ee.exports){ee.exports=s;try{a=ze()}catch{}}else typeof define=="function"&&define.amd?define(function(){return s}):t["seed"+d]=s})(typeof self<"u"?self:Ye,[],Math)});var L=U((Zr,Ve)=>{var Io=Le(),Oo=qe(),Lo=_e(),Ro=je(),qo=Fe(),Po=Je(),J=He();J.alea=Io;J.xor128=Oo;J.xorwow=Lo;J.xorshift7=Ro;J.xor4096=qo;J.tychei=Po;Ve.exports=J});function j(l,u){let t=URL.createObjectURL(l),i=document.createElement("a");i.href=t,i.download=u,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}var X=A(()=>{"use strict"});async function z(l){let t=new TextEncoder().encode(l),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map(d=>d.toString(16).padStart(2,"0")).join("")}var te=A(()=>{"use strict"});function q(l){return Array.from({length:Math.floor(l()*10)+1},()=>oe[Math.floor(l()*oe.length)]).join("")}function Ge(l,u){return Array.from({length:l},()=>{let t=u();return t<.8?oe[Math.floor(t/.8*oe.length)]:t<.99?" ":`
`})}var oe,re=A(()=>{"use strict";oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"});var Ke={};I(Ke,{default:()=>Uo});import{html as _o}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Uo({user:l,weight:u=1.5}){let t="q-multi-cursor-json",i="Multi-cursor edits to convert to JSON",n=(0,We.default)(`${l.email}#${t}`),h=Object.fromEntries(Array.from({length:100},()=>[q(n),q(n)])),d=Object.entries(h).map(([m,r])=>`${m}=${r}`).join(`
`),e=await z(JSON.stringify(h)),c=_o`
    <p>
      Download
      <button
        class="btn btn-sm btn-outline-primary"
        type="button"
        @click=${()=>j(new Blob([d],{type:"text/plain"}),`${t}.txt`)}
      >
        ${t}.txt
      </button>
      and use <a href="https://youtu.be/4lssq0zYxv0">multi-cursors</a> and convert it into a single JSON object, where
      <code>key=value</code> pairs are converted into <code>{key: value, key: value, ...}</code>.
    </p>
    <div class="mb-3">
      <label for="${t}" class="form-label"
        >What's the result when you paste the JSON at
        <a href="https://tools-in-data-science.pages.dev/jsonhash">tools-in-data-science.pages.dev/jsonhash</a> and
        click the Hash button?</label
      >
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:i,weight:u,question:c,answer:e}}var We,Xe=A(()=>{"use strict";We=R(L(),1);X();te();re()});var Ze={};I(Ze,{default:()=>Bo});import{html as jo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{format as Do}from"https://cdn.jsdelivr.net/npm/prettier@3.4.2/+esm";import Fo from"https://cdn.jsdelivr.net/npm/prettier@3.4.2/plugins/markdown.mjs";async function Bo({user:l,weight:u=1}){let t="q-npx-prettier",i="Run command with npx",n=["#  Badly  Formatted  Markdown    ","","*  This is an uneven list","* With inconsistent spacing","   *    And weird indentation","",">This quote has no space",">   This one has too many",""].join(`
`),h=(0,Qe.default)(`${l.email}#${t}`),d=n+`
`+Ge(300,h).join(""),e=new Blob([d],{type:"text/markdown"}),c=await Do(d,{parser:"markdown",plugins:[Fo]}),m=await z(c),r=s=>s.trim().split(/\s+/).at(0)===m,a=jo`
    <div class="mb-3">
      <p>Let's make sure you know how to use <code>npx</code> and <code>prettier</code>.</p>
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>j(e,"README.md")}>
          README.md</button
        >. In the directory where you downloaded it, make sure it is called <code>README.md</code>, and run
        <code>npx -y prettier@3.4.2 README.md | sha256sum</code>.
      </p>

      <label for="${t}" class="form-label">What is the output of the command?</label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:i,weight:u,question:a,answer:r}}var Qe,et=A(()=>{"use strict";Qe=R(L(),1);X();te();re()});var _,tt,he=A(()=>{"use strict";_=(l,u)=>l[Math.floor(u()*l.length)],tt=function(l,u){for(let t=l.length-1;t>0;t--){let i=Math.floor(u()*(t+1));[l[t],l[i]]=[l[i],l[t]]}return l}});var nt={};I(nt,{default:()=>Yo});import{html as Jo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Yo({user:l,weight:u=2}){let t="q-llm-bash",i="Execute a Bash pipeline using the llm CLI tool",n=(0,rt.default)(`${l.email}#${t}`),h=_(zo,n),d=`Evaluate if the user's command would successfully accomplish the task.

Task: ${h}

Consider:
- Does it use Simon Willison's 'llm' CLI tool appropriately?
- Is it a valid bash pipeline?
- Would it actually accomplish the stated task?
- Is it practical and executable?
`,e=Jo`
    <p></p>

    <p>Use your <a href="https://aipipe.org/">AI Pipe</a> token when prompted.</p>
    <div class="mb-3">
      <p>
        Write a bash pipeline command using Simon Willison's
        <a href="https://llm.datasette.io/" target="_blank"><code>llm</code></a> tool to: <strong>${h}</strong>
      </p>
      <p>The command will be verified by GPT-5 Nano using these instructions:</p>
      <pre class="hljs language-md"><code>${d}</code></pre>
      <label for="${t}" class="form-label">What is the bash command?</label>
      <textarea class="form-control" rows="6" id="${t}" name="${t}"></textarea>
      <p class="text-muted">
        Your command should be a complete bash pipeline that uses <code>llm</code> to accomplish the task. You may use
        pipes, redirects, and other standard Unix tools.
      </p>
    </div>
  `;return{id:t,title:i,weight:u,question:e,answer:async m=>{if(!m)return!1;if(!m.includes("llm"))throw new Error("Your command must use the 'llm' tool.");let r=fe;if((ot!==m||!fe)&&(globalThis.aiPipeToken||(globalThis.aiPipeToken=prompt("Enter your AI Pipe Token")),r=(await(await fetch("https://aipipe.org/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${globalThis.aiPipeToken}`},body:JSON.stringify({model:"gpt-5-nano",reasoning_effort:"minimal",messages:[{role:"user",content:`You are verifying if a bash command accomplishes a specific task.

${d}

Command provided by user:
${m}

Respond with EXACTLY this format:
YES - [brief reason explaining how it accomplishes the task]
OR
NO - [brief reason explaining why it doesn't accomplish the task]

Your response:`}]})})).json()).choices?.[0]?.message?.content,ot=m,fe=r),console.log(`${t} verification:`,r),r.trim().slice(0,10).includes("YES"))return!0;throw new Error(r)}}}var rt,zo,ot,fe,st=A(()=>{"use strict";rt=R(L(),1);he();zo=["fetch weather data from wttr.in for London and extract just the temperature in Celsius","list all JavaScript files in the current directory and summarize their purpose in one line each","read a JSON file and convert it to a markdown table","analyze git commit messages from the last 10 commits and suggest areas for improvement","fetch the top Hacker News story title and generate 3 alternative headlines","find all TODO comments in Python files in the current directory and prioritize them by urgency","get the latest Bitcoin price from a crypto API and explain if it's a good time to buy","read a CSV file and generate a brief statistical summary with insights","fetch a random Wikipedia article summary and rewrite it for a 10-year-old audience","list all environment variables and identify which ones might contain sensitive information"]});async function ye(l){let u="q-rename-files-server",t=l?.version??"",i=(0,ct.default)(`${l?.email??""}#${u}${t}`),n=at[Math.floor(i()*at.length)],h=[],d=["docs","content","archive","project"],e=["chapter1","section-a","part 2","m\xF3dulo-3","2024"],c=["intro","advanced","appendix","donn\xE9es","r\xE9f\xE9rences"];for(let s=0;s<30;s++){let o=1+Math.floor(i()*3),p=[];if(p.push(d[Math.floor(i()*d.length)]),o>=2&&p.push(e[Math.floor(i()*e.length)]),o>=3&&p.push(c[Math.floor(i()*c.length)]),i()<.2){let C=["spaces here","file-name","na\xEFve","caf\xE9-2024","test_file"];p.push(C[Math.floor(i()*C.length)])}let y=`file${String(s+1).padStart(2,"0")}.txt`,S=i()<.1?y.replace("i","\u0456"):y,$=[...p,S].join("/"),f;i()<.3&&ge.length>0?f=ge[Math.floor(i()*ge.length)]:f=it[Math.floor(i()*it.length)];let x=`category: ${f}

${n.context.toUpperCase()} - File ${s+1}

This is a test file for the reorganization exercise.
Path: ${$}
Category: ${f}

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;h.push({path:$,category:f,content:x})}let m=h.map(s=>{let o=s.path.split("/"),p=o[o.length-1],y=o.slice(0,-1).join("-");return`${s.category}/${y}-${p}`});m.sort((s,o)=>{for(let p=0;p<Math.min(s.length,o.length);p++)if(s.charCodeAt(p)!==o.charCodeAt(p))return s.charCodeAt(p)-o.charCodeAt(p);return s.length-o.length});let r=m.map(s=>`./${s}`).join(`
`)+`
`,a=await Ho(r);return{scenario:n,files:h,expectedFiles:m,expectedHash:a,fileList:r}}async function Ho(l){let u=new TextEncoder().encode(l),t=await crypto.subtle.digest("SHA-256",u);return Array.from(new Uint8Array(t)).map(n=>n.toString(16).padStart(2,"0")).join("")}async function lt(l){let{expectedHash:u}=await ye(l);return async t=>{if(!t||typeof t!="string")throw new Error("Please submit the SHA256 hash from the find command.");if(t.trim().split(/\s+/)[0]===u)return!0;throw t.includes("-")?new Error("Please submit only the hash value (first part before the dash). Run: find . -type f | LC_ALL=C sort | sha256sum | cut -d' ' -f1"):new Error("Incorrect hash. This means the files were not renamed/moved correctly. Make sure to: (1) Extract the category from the FIRST line matching 'category: ...', (2) Create category directories, (3) Move files to {category}/{path-with-dashes}-{filename}, (4) Use LC_ALL=C sort for consistent ordering. Check the README.md for examples.")}}var ct,it,ge,at,dt=A(()=>{"use strict";ct=R(L(),1),it=["documentation","reports","notes","configs","data","logs","scripts","templates","resources","archives"],ge=["r\xE9sum\xE9","na\xEFve-bayes","\u65E5\u672C\u8A9E","m\xFCnchen","caf\xE9"],at=[{name:"documentation_cleanup",title:"Documentation Repository Reorganization",description:"Reorganize scattered documentation files into a category-based flat structure",context:"technical documentation"},{name:"archive_migration",title:"Legacy Archive Migration",description:"Migrate legacy archive files from nested structure to categorized flat layout",context:"historical archives"},{name:"content_management",title:"Content Management System Refactoring",description:"Restructure CMS content files from hierarchical to category-based organization",context:"content files"},{name:"knowledge_base",title:"Knowledge Base Reorganization",description:"Flatten knowledge base articles while preserving category information",context:"knowledge articles"}]});var ut={};I(ut,{default:()=>Wo});import Vo from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as Go}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Wo({user:l,weight:u=1,version:t=""}){let i="q-rename-files-server",n="Reorganize Files with Shell Commands",h={...l,version:t},d=await ye(h),{files:e}=d,c=new Vo;for(let s of e)c.file(s.path,s.content);c.file("README.md",`# ${d.scenario.title}

## Task

You have ${e.length} text files scattered across a nested directory structure. Your job is to reorganize them into a flat structure based on categories.

**Rules:**
1. Read the **first line** in each .txt file that matches \`category: ...\`
2. Create a directory for each category
3. Move each file to: \`{category}/{path-with-dashes}-{filename}\`
   - Replace all \`/\` in the original path with \`-\`
   - Keep the filename as-is

**Example:**
- Original: \`docs/chapter1/file01.txt\` with first line \`category: reports\`
- New location: \`reports/docs-chapter1-file01.txt\`

**Example:**
- Original: \`project/part 2/intro/file15.txt\` with first line \`category: documentation\`
- New location: \`documentation/project-part 2-intro-file15.txt\`

## Instructions

1. Extract the ZIP file
2. Use shell commands (bash) to reorganize the files
3. After reorganization, run: \`find . -type f | LC_ALL=C sort | sha256sum\`
4. Submit the hash (first part before the space/dash)

## Important Notes

- Some filenames/paths contain **Unicode characters**, **spaces**, and **special characters**
- Some categories use **non-ASCII characters** (accents, diacritics, etc.)
- Use \`LC_ALL=C\` to ensure consistent sorting regardless of locale
- The hash must match exactly, including directory structure

## Hints

- Use \`grep -m 1\` to get the first matching line
- Use \`tr '/' '-'\` to replace slashes with dashes
- Use \`find\`, \`grep\`, \`cut\`, \`mkdir\`, \`mv\` commands
- Quote paths properly to handle spaces and special characters
`);let m=await c.generateAsync({type:"blob"}),r=URL.createObjectURL(m),a=Go`
    <p>
      <strong>Scenario:</strong> You're a DevOps engineer tasked with reorganizing a legacy file
      archive. The files are scattered across nested directories, but each file has a category tag. You
      need to flatten the structure while grouping files by category.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Download and extract the ZIP file (${e.length} text files in nested directories)</li>
      <li>Write a shell script to reorganize files based on their category</li>
      <li>Move each file to: <code>{category}/{path-with-dashes}-{filename}</code></li>
      <li>
        Run: <code>find . -type f | LC_ALL=C sort | sha256sum</code> to get the verification hash
      </li>
      <li>Submit the hash value</li>
    </ol>

    <p>
      <a href="${r}" download="files_to_reorganize.zip" class="btn btn-primary btn-sm">
        📥 Download Files (ZIP)
      </a>
    </p>

    <details class="my-3">
      <summary><strong>📋 Reorganization Rules</strong></summary>

      <p>Each <code>.txt</code> file contains a category on its first line matching this pattern:</p>
      <pre><code>category: {category-name}</code></pre>

      <p><strong>Transformation:</strong></p>
      <ul>
        <li>
          <strong>Before:</strong> <code>docs/chapter1/lesson1.txt</code> (contains
          <code>category: reports</code>)
        </li>
        <li><strong>After:</strong> <code>reports/docs-chapter1-lesson1.txt</code></li>
      </ul>

      <p><strong>Steps:</strong></p>
      <ol>
        <li>Extract category from first matching line in each file</li>
        <li>Create directory for the category (if it doesn't exist)</li>
        <li>Convert original path <code>a/b/c/file.txt</code> to <code>a-b-c-file.txt</code></li>
        <li>Move file to <code>{category}/{new-name}</code></li>
      </ol>
    </details>

    <details class="my-3">
      <summary><strong>💡 Shell Command Hints</strong></summary>

      <h6>Extract category from a file:</h6>
      <pre><code>grep -m 1 "^category:" file.txt | cut -d' ' -f2-</code></pre>

      <h6>Replace slashes with dashes:</h6>
      <pre><code>echo "path/to/file.txt" | tr '/' '-'
# Output: path-to-file.txt</code></pre>

      <h6>Find all .txt files:</h6>
      <pre><code>find . -type f -name "*.txt"</code></pre>

      <h6>Create directory if it doesn't exist:</h6>
      <pre><code>mkdir -p "category-name"</code></pre>

      <h6>Move file:</h6>
      <pre><code>mv "old/path/file.txt" "category/new-name.txt"</code></pre>

      <h6>Generate verification hash:</h6>
      <pre><code>find . -type f | LC_ALL=C sort | sha256sum</code></pre>

      <p class="text-warning mt-2">
        ⚠️ Important: Use <code>LC_ALL=C sort</code> to ensure consistent ASCII-based sorting regardless
        of your system locale. This is crucial for matching the expected hash.
      </p>
    </details>

    <details class="my-3">
      <summary><strong>🔧 Example Bash Script</strong></summary>

      <pre><code>#!/bin/bash

# Step 1: Extract categories and create directories
for file in $(find . -type f -name "*.txt"); do
  category=$(grep -m 1 "^category:" "$file" | cut -d' ' -f2-)
  mkdir -p "$category"
done

# Step 2: Move and rename files
for file in $(find . -type f -name "*.txt"); do
  category=$(grep -m 1 "^category:" "$file" | cut -d' ' -f2-)
  relpath=$(echo "$file" | sed 's|^\./||')  # Remove leading ./
  newname=$(echo "$relpath" | tr '/' '-')    # Replace / with -
  mv "$file" "$category/$newname"
done

# Step 3: Clean up empty directories
find . -type d -empty -delete

# Step 4: Generate and display hash
find . -type f | LC_ALL=C sort | sha256sum</code></pre>

      <p class="text-muted">
        You can adapt this script or write your own. Make sure to handle spaces and special characters
        properly by quoting variables!
      </p>
    </details>

    <details class="my-3">
      <summary><strong>⚠️ Common Pitfalls</strong></summary>

      <ul>
        <li>
          <strong>Locale issues:</strong> Always use <code>LC_ALL=C sort</code>, not just
          <code>sort</code>
        </li>
        <li>
          <strong>Spaces in paths:</strong> Quote variables: <code>"$file"</code> not
          <code>$file</code>
        </li>
        <li>
          <strong>Windows line endings:</strong> Category might have \r, use
          <code>tr -d '\r'</code>
        </li>
        <li>
          <strong>Wrong category:</strong> Extract from FIRST matching line only:
          <code>grep -m 1</code>
        </li>
        <li><strong>Keeping ./ prefix:</strong> Remove it with <code>sed 's|^\./||'</code></li>
      </ul>
    </details>

    <div class="mb-3">
      <label for="${i}" class="form-label">
        <strong
          >Submit the SHA256 hash from: <code>find . -type f | LC_ALL=C sort | sha256sum</code></strong
        >
      </label>
      <input
        type="text"
        class="form-control font-monospace"
        id="${i}"
        name="${i}"
        placeholder="e.g., 1a2b3c4d5e6f..."
        required
      />
      <div class="form-text">
        Copy only the hash value (first part before the space). Should be 64 hexadecimal characters for
        SHA256, or 32 for the hash function used by this system.
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>🎓 This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Write effective bash scripts for file operations</li>
        <li>Use find, grep, sed, tr, and other Unix utilities</li>
        <li>Handle edge cases (spaces, unicode, special characters)</li>
        <li>Verify results with cryptographic hashes</li>
        <li>Understand locale-specific sorting behavior</li>
      </ul>
    </div>
  `;return{id:i,title:n,weight:u,question:a,answer:await lt(h)}}var pt=A(()=>{"use strict";dt()});function be(l){let u="q-asciirec-server",t=l?.version??"",i=(0,ft.default)(`${l?.email??""}#${u}${t}`),n=mt[Math.floor(i()*mt.length)],h=ht[Math.floor(i()*ht.length)],d=`SESSION_${i().toString(36).substring(2,10).toUpperCase()}`;return{scenario:n,commands:h.commands,commandDescription:h.description,marker:d}}async function gt(l){return async u=>{let{commands:t,marker:i}=be(l);if(!u||typeof u!="string")throw new Error("Please submit the asciinema output file content.");let n=u.trim().split(`
`);if(n.length===0)throw new Error("Empty output submitted.");let h;try{h=JSON.parse(n[0])}catch{throw new Error("Invalid asciinema file format: Header is not valid JSON.")}h.version;let d="";for(let c=1;c<n.length;c++){let m=n[c].trim();if(m)try{let r=JSON.parse(m);if(Array.isArray(r)&&r.length===3){let[a,s,o]=r;s==="o"&&(d+=o)}}catch{continue}}if(!d.includes(i))throw new Error(`Missing session marker "${i}". Make sure to run the exact command sequence shown in the instructions.`);let e=[];for(let c of t)d.includes(c)||e.push(c);if(e.length>0)throw new Error(`Missing commands in output: ${e.join(", ")}. Make sure to type all commands exactly as shown.`);return!0}}var ft,mt,ht,yt=A(()=>{"use strict";ft=R(L(),1),mt=[{name:"git_workflow",title:"Record Git Workflow Tutorial",description:"Create a tutorial showing common Git commands",context:"version control tutorial"},{name:"file_operations",title:"Document File Operations",description:"Record file manipulation commands for documentation",context:"command line tutorial"},{name:"data_processing",title:"Create Data Processing Demo",description:"Record a data processing pipeline demonstration",context:"data analysis tutorial"},{name:"deployment_steps",title:"Record Deployment Procedure",description:"Document deployment steps with asciinema",context:"deployment documentation"}],ht=[{commands:["echo 'Hello World'","date","pwd"],description:"Basic shell commands"},{commands:["ls -la","cat /etc/os-release | head -5","whoami"],description:"System information"},{commands:["mkdir test_dir","cd test_dir","touch file.txt","ls"],description:"File operations"},{commands:["echo 'test' > output.txt","cat output.txt","wc -l output.txt"],description:"File manipulation"},{commands:["python --version","echo 'print(2 + 2)' | python","date +%Y-%m-%d"],description:"Python and date"}]});var wt={};I(wt,{default:()=>Ko});import{html as bt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ko({user:l,weight:u=1,version:t=""}){let i="q-asciirec-server",n="Record Terminal Session with asciinema",h={...l,version:t},d=be(h),{commands:e,marker:c,commandDescription:m}=d,r=bt`
    <p>
      <strong>Scenario:</strong> You're creating ${d.scenario.context} for your team. Use
      <strong>asciinema</strong> (asciinema recorder) to record a terminal session showing
      ${m}.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Install/use asciinema: <code>uvx asciinema --version</code></li>
      <li>Start recording: <code>uvx asciinema rec session.cast</code></li>
      <li>Type the exact command sequence below (including the marker)</li>
      <li>Stop recording: Press <kbd>Ctrl+D</kbd></li>
      <li>Submit the contents of <code>session.cast</code> (JSON format)</li>
    </ol>

    <div class="alert alert-warning" role="alert">
      <strong>⚠️ IMPORTANT: Type these commands in this EXACT order:</strong>
      <ol class="mb-0">
        <li><code>echo '${c}'</code> <span class="text-danger">← Session marker (REQUIRED)</span></li>
        ${e.map(a=>bt`<li><code>${a}</code></li>`)}
      </ol>
    </div>

    <details class="my-3">
      <summary><strong>📹 What is asciinema?</strong></summary>

      <p>
        <strong>asciinema</strong> (asciinema) is a terminal session recorder. It captures what you type
        and the output, saving it in a replayable format.
      </p>

      <h6>Why use it?</h6>
      <ul>
        <li>Create shareable terminal tutorials</li>
        <li>Document command sequences</li>
        <li>Debug issues by sharing exact terminal output</li>
        <li>Lightweight (text-based, not video)</li>
      </ul>

      <h6>Installation:</h6>
      <pre><code># Using uvx (no install needed)
uvx asciinema --version

# Or install globally
pip install asciinema</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>🎬 How to Record</strong></summary>

      <h6>Step 1: Start Recording</h6>
      <pre><code>uvx asciinema rec session.cast</code></pre>

      <h6>Step 2: Type Commands</h6>
      <p>Your terminal is now being recorded. Type each command from the list above.</p>

      <h6>Step 3: Stop Recording</h6>
      <pre><code># Press Ctrl+D (or type 'exit')
# Recording saved to session.cast</code></pre>

      <h6>Step 4: View Output</h6>
      <pre><code># The .cast file is JSON format
cat session.cast

# Or play it back
uvx asciinema play session.cast</code></pre>

      <h6>Step 5: Submit</h6>
      <p>Copy the entire contents of <code>session.cast</code> and paste below.</p>
    </details>

    <details class="my-3">
      <summary><strong>💡 Tips & Troubleshooting</strong></summary>

      <h6>Common Issues:</h6>
      <ul>
        <li>
          <strong>Command not found:</strong> Use <code>uvx asciinema</code> instead of
          <code>asciinema</code>
        </li>
        <li>
          <strong>Wrong marker:</strong> Make sure to type the marker EXACTLY: <code>${c}</code>
        </li>
        <li>
          <strong>Missing commands:</strong> Type ALL commands in the list, in order
        </li>
        <li>
          <strong>Invalid output:</strong> Submit the raw JSON from .cast file, don't modify it
        </li>
      </ul>

      <h6>Testing:</h6>
      <pre><code># Test that asciinema works
uvx asciinema rec test.cast
echo "hello"
# Press Ctrl+D
cat test.cast</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>📝 Example Output</strong></summary>

      <p>The <code>session.cast</code> file will look like this (JSON format):</p>
      <pre><code>{
  "version": 2,
  "width": 80,
  "height": 24,
  "timestamp": 1234567890,
  "env": {
    "SHELL": "/bin/bash",
    "TERM": "xterm-256color"
  },
  "stdout": [
    [0.1, "$ echo 'SESSION_MARKER'\\r\\n"],
    [0.2, "SESSION_MARKER\\r\\n"],
    [0.3, "$ command1\\r\\n"],
    [0.4, "output...\\r\\n"],
    ...
  ]
}</code></pre>
    </details>

    <div class="mb-3">
      <label for="${i}" class="form-label">
        <strong>Paste the contents of <code>session.cast</code> here</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="${i}"
        name="${i}"
        rows="15"
        placeholder='{"version": 2, "width": 80, "height": 24, ...}'
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        Submit the complete JSON output from <code>session.cast</code>. Must include marker
        <code>${c}</code> and all commands.
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>🎓 This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Use terminal recording tools</li>
        <li>Follow command sequences precisely</li>
        <li>Capture and share terminal output</li>
        <li>Work with command-line tools like uvx</li>
      </ul>
    </div>

    <div class="alert alert-success" role="alert">
      <strong>✅ Verification:</strong> The session marker <code>${c}</code> proves you actually ran
      these commands (not copied from another student).
    </div>
  `;return{id:i,title:n,weight:u,question:r,answer:await gt(h)}}var xt=A(()=>{"use strict";yt()});var vt={};I(vt,{default:()=>er});import Xo from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as Qo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as Zo}from"https://cdn.jsdelivr.net/npm/seedrandom/+esm";async function er({user:l,weight:u=1}){let t="q-config-merge-conflicts",i="Three-Way Configuration Merge: Detect Conflicts",n=Zo(`${l.email}#${t}`),h=50+Math.floor(n()*30),d=Array.from({length:h},(C,g)=>`setting_${String(g+1).padStart(3,"0")}`),e={};d.forEach(C=>{e[C]={value:Math.floor(n()*100),enabled:n()<.7,priority:Math.floor(n()*10)}});let c=JSON.parse(JSON.stringify(e)),m=new Set,r=Math.floor(h*.3);for(let C=0;C<r;C++){let g=d[Math.floor(n()*d.length)];m.add(g),c[g].value=Math.floor(n()*100)}let a=JSON.parse(JSON.stringify(e)),s=new Set,o=Math.floor(h*.3);for(let C=0;C<o;C++){let g=d[Math.floor(n()*d.length)];s.add(g),a[g].value=Math.floor(n()*100)}let p=0,y=[];m.forEach(C=>{s.has(C)&&c[C].value!==a[C].value&&(p++,y.push(C))});let b=new Xo;b.file("base.json",JSON.stringify(e,null,2)),b.file("branch_a.json",JSON.stringify(c,null,2)),b.file("branch_b.json",JSON.stringify(a,null,2)),b.file("README.txt",`Configuration Merge Analysis

This archive contains three configuration files:
- base.json: Original configuration (common ancestor)
- branch_a.json: Configuration from branch A
- branch_b.json: Configuration from branch B

Task: Perform a three-way merge analysis to detect conflicts.

A CONFLICT occurs when:
1. The same setting is modified in BOTH branch_a and branch_b
2. The 'value' field differs between the two branches
3. Compared to the base configuration

Count the total number of conflicting settings.
`);let S=await b.generateAsync({type:"blob"}),$=URL.createObjectURL(S),f=C=>{let g=parseInt(C.trim(),10);if(isNaN(g))throw new Error("Please provide a valid integer for the conflict count.");if(Math.abs(g-p)>0)throw new Error(`Incorrect conflict count. Expected: ${p}, Got: ${g}. Hint: A conflict occurs when the SAME key is modified in BOTH branches with DIFFERENT values. Check the 'value' field specifically.`);return!0},x=Qo`
    <p>
      <strong>Scenario:</strong> You are a DevOps engineer at <strong>CloudScale Systems</strong>. Two teams (Team A and
      Team B) independently modified the same configuration file. You need to perform a
      <strong>three-way merge analysis</strong> to identify conflicts before the configurations can be merged.
    </p>

    <p><strong>Task:</strong></p>
    <ol>
      <li>Download the ZIP containing three JSON configuration files</li>
      <li>Compare <code>branch_a.json</code> and <code>branch_b.json</code> against <code>base.json</code></li>
      <li>Identify settings modified in <strong>BOTH</strong> branches</li>
      <li>Count conflicts where the <code>value</code> field differs between branches</li>
      <li>Submit the total number of conflicts</li>
    </ol>

    <p>
      <a href="${$}" download="config_merge.zip" class="btn btn-primary btn-sm">
        📥 Download Configuration Files (ZIP)
      </a>
    </p>

    <p><strong>Merge Conflict Rules:</strong></p>
    <ul>
      <li><strong>Clean Merge:</strong> Setting changed in only ONE branch → No conflict</li>
      <li><strong>Identical Change:</strong> Same change in both branches → No conflict</li>
      <li><strong>CONFLICT:</strong> Setting changed in BOTH branches with DIFFERENT values</li>
      <li>Only check the <code>value</code> field for conflicts</li>
      <li>Ignore changes to <code>enabled</code> and <code>priority</code> fields</li>
    </ul>

    <p><strong>Configuration Details:</strong></p>
    <ul>
      <li>Total settings: <strong>${h}</strong></li>
      <li>Each setting has: <code>value</code>, <code>enabled</code>, <code>priority</code></li>
      <li>Changes in branch_a: ~${r} settings</li>
      <li>Changes in branch_b: ~${o} settings</li>
    </ul>

    <div class="mb-3">
      <label for="${t}" class="form-label"> Enter the total number of merge conflicts (integer only) </label>
      <input type="number" class="form-control" id="${t}" name="${t}" placeholder="e.g., 12" required />
    </div>

    <details>
      <summary>💡 Three-Way Merge Concept</summary>
      <p><strong>What is a Three-Way Merge?</strong></p>
      <p>In version control (like Git), a three-way merge compares:</p>
      <ul>
        <li><strong>Base:</strong> Common ancestor version</li>
        <li><strong>Branch A:</strong> First modified version</li>
        <li><strong>Branch B:</strong> Second modified version</li>
      </ul>

      <p><strong>Conflict Detection Logic:</strong></p>
      <pre><code>For each setting key:
  if (base[key].value != branchA[key].value) AND 
     (base[key].value != branchB[key].value) AND
     (branchA[key].value != branchB[key].value):
    → CONFLICT!</code></pre>
    </details>

    <details>
      <summary>🔍 Algorithm Hint</summary>
      <p><strong>Step-by-step approach:</strong></p>
      <ol>
        <li>Load all three JSON files</li>
        <li>Find keys that changed in branch_a (compare to base)</li>
        <li>Find keys that changed in branch_b (compare to base)</li>
        <li>Find intersection: keys changed in BOTH branches</li>
        <li>For each key in intersection, check if values differ</li>
        <li>Count the differences as conflicts</li>
      </ol>
    </details>
  `;return{id:t,title:i,weight:u,question:x,answer:f}}var St=A(()=>{"use strict"});import we from"https://cdn.jsdelivr.net/npm/pako@2/+esm";async function ne(l){let u=typeof l=="string"?new TextEncoder().encode(l):l,t=await crypto.subtle.digest("SHA-1",u);return Array.from(new Uint8Array(t)).map(n=>n.toString(16).padStart(2,"0")).join("")}async function xe(l){let u=new TextEncoder,t=u.encode(l),i=`blob ${t.length}\0`,n=u.encode(i),h=new Uint8Array(n.length+t.length);h.set(n,0),h.set(t,n.length);let d=await ne(h),e=we.deflate(h);return{hash:d,compressed:e,content:l,size:t.length}}async function Ct(l){let u=[...l].sort((r,a)=>r.name<a.name?-1:r.name>a.name?1:0),t=[];for(let r of u){let s=`${r.mode||"100644"} ${r.name}\0`;t.push(new TextEncoder().encode(s));let o=new Uint8Array(20);for(let p=0;p<20;p++)o[p]=parseInt(r.hash.substring(p*2,p*2+2),16);t.push(o)}let i=t.reduce((r,a)=>r+a.length,0),n=new Uint8Array(i),h=0;for(let r of t)n.set(r,h),h+=r.length;let d=new TextEncoder().encode(`tree ${n.length}\0`),e=new Uint8Array(d.length+n.length);e.set(d,0),e.set(n,d.length);let c=await ne(e),m=we.deflate(e);return{hash:c,compressed:m}}async function Et({treeHash:l,parentHash:u,message:t,author:i,timestamp:n}){let h=`tree ${l}
`;u&&(h+=`parent ${u}
`);let d=Math.floor(n.getTime()/1e3);h+=`author ${i.name} <${i.email}> ${d} +0000
`,h+=`committer ${i.name} <${i.email}> ${d} +0000
`,h+=`
${t}
`;let c=`commit ${h.length}\0`+h,m=await ne(c),r=we.deflate(new TextEncoder().encode(c));return{hash:m,compressed:r,content:h}}async function $t(l,u){let t=[...l].sort((o,p)=>o.name<p.name?-1:o.name>p.name?1:0),i=[],n=new Uint8Array(12);n[0]=68,n[1]=73,n[2]=82,n[3]=67,n[4]=0,n[5]=0,n[6]=0,n[7]=2;let h=t.length;n[8]=h>>24&255,n[9]=h>>16&255,n[10]=h>>8&255,n[11]=h&255,i.push(n);let d=Math.floor(u.getTime()/1e3);for(let o of t){let p=[],y=new Uint8Array(8);y[0]=d>>24&255,y[1]=d>>16&255,y[2]=d>>8&255,y[3]=d&255,p.push(y);let b=new Uint8Array(8);b[0]=d>>24&255,b[1]=d>>16&255,b[2]=d>>8&255,b[3]=d&255,p.push(b),p.push(new Uint8Array(8));let S=new Uint8Array(4);S[0]=0,S[1]=0,S[2]=129,S[3]=164,p.push(S),p.push(new Uint8Array(8));let $=new Uint8Array(4);$[0]=o.size>>24&255,$[1]=o.size>>16&255,$[2]=o.size>>8&255,$[3]=o.size&255,p.push($);let f=new Uint8Array(20);for(let T=0;T<20;T++)f[T]=parseInt(o.hash.substring(T*2,T*2+2),16);p.push(f);let x=Math.min(o.name.length,4095),C=new Uint8Array(2);C[0]=x>>8&15,C[1]=x&255,p.push(C);let g=new TextEncoder().encode(o.name+"\0"),k=(8-(62+g.length)%8)%8,w=new Uint8Array(g.length+k);w.set(g,0),p.push(w);let v=p.reduce((T,O)=>T+O.length,0),N=new Uint8Array(v),M=0;for(let T of p)N.set(T,M),M+=T.length;i.push(N)}let e=i.reduce((o,p)=>o+p.length,0),c=new Uint8Array(e),m=0;for(let o of i)c.set(o,m),m+=o.length;let r=await ne(c),a=new Uint8Array(20);for(let o=0;o<20;o++)a[o]=parseInt(r.substring(o*2,o*2+2),16);let s=new Uint8Array(c.length+20);return s.set(c,0),s.set(a,c.length),s}var Tt=A(()=>{"use strict"});var Nt={};I(Nt,{default:()=>sr});import tr from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as or}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function sr({user:l,weight:u=1.5}){let t="q-git-time-travel",i="Git Time Travel: History Investigation",n=(0,kt.default)(`${l.email}#${t}`),h=t,d=`${_(At,n).first} ${_(At,n).last}`,e=`${d.toLowerCase().replace(/ /g,".")}@${_(nr,n)}`,c=D(n,50,60),m=[30,45,60,90,120,150,180,210,240,270,300,330,360,420,480,540,600,900,1200],r=_(m,n),a=D(n,10,c-10),s=[],o=new Set;for(let g=0;g<c;g++)if(g===a)s.push(r),o.add(r);else{let E;do E=_(m.filter(k=>k!==r),n);while(o.has(E)&&o.size<m.length-1);s.push(E),o.add(E)}let p=[],y=tt([...rr],n);for(let g=0;g<c;g++){let E;g===0?E="Initial commit":g===a?E="Update timeout settings":E=y[g%y.length]+` (#${D(n,100,999)})`;let k=new Date("2025-08-01T10:00:00Z").getTime(),w=g*D(n,7200,172800)*1e3;p.push({message:E,timeout:s[g],timestamp:new Date(k+w),retries:D(n,1,5),maxConnections:D(n,10,100),debug:n()>.7})}let b=null,S=null,$={name:d,email:e},f=async()=>{if(S)return S;let g=new tr,E=g.folder(h),k=E.folder(".git"),w=k.folder("objects"),v=[],N=null,M=null,T=null,O=null,P=null;for(let H=0;H<p.length;H++){let B=p[H],Te={appName:h,version:`${D(n,1,3)}.${H}.${D(n,0,9)}`,environment:_(["development","staging","production"],n),settings:{timeout:B.timeout,retries:B.retries,maxConnections:B.maxConnections,debug:B.debug,logLevel:_(["debug","info","warn","error"],n)},metadata:{lastUpdated:B.timestamp.toISOString(),updatedBy:$.name}},Ae=JSON.stringify(Te,null,2),ke=H===0||n()>.8?`# ${h}

Version ${Te.version}

A sample project for testing.

## Configuration

See config.json for settings.
`:T,V=await xe(Ae),G=await xe(ke);O=V,P=G,w.folder(V.hash.substring(0,2)).file(V.hash.substring(2),V.compressed),w.folder(G.hash.substring(0,2)).file(G.hash.substring(2),G.compressed);let Z=await Ct([{mode:"100644",name:"config.json",hash:V.hash},{mode:"100644",name:"README.md",hash:G.hash}]);w.folder(Z.hash.substring(0,2)).file(Z.hash.substring(2),Z.compressed);let W=await Et({treeHash:Z.hash,parentHash:N,message:B.message,author:$,timestamp:B.timestamp});w.folder(W.hash.substring(0,2)).file(W.hash.substring(2),W.compressed),v.push(W.hash),N=W.hash,M=Ae,T=ke}b=v[a-1].substring(0,7),k.file("HEAD",`ref: refs/heads/main
`),k.folder("refs").folder("heads").file("main",N+`
`),k.file("config",`[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallaliases = false
[user]
	name = ${$.name}
	email = ${$.email}
`);let F=[{name:"config.json",hash:O.hash,size:O.size},{name:"README.md",hash:P.hash,size:P.size}],vo=await $t(F,p[p.length-1].timestamp);return k.file("index",vo),E.file("config.json",M),E.file("README.md",T),S=await g.generateAsync({type:"blob"}),S},x=or`
    <div class="mb-3">
      <h4>Case Study: Git Time Travel: History Investigation</h4>
      <p>
        <strong>Scenario:</strong> You're investigating a production incident caused by a configuration change. The
        operations team needs to identify when a specific timeout value was introduced so they can understand what other
        changes were deployed at the same time.
      </p>
      <ol>
        <li>Download the repository zip file below</li>
        <li>Extract and navigate into the repository folder</li>
        <li>
          Use Git commands to explore the commit history (e.g., <code>git log</code>, <code>git show</code>,
          <code>git diff</code>)
        </li>
        <li>
          Find the commit where <code>config.json</code> was modified to change the <code>timeout</code> value to
          <strong>${r}</strong>
        </li>
        <li>Identify the <strong>parent commit</strong> of that commit</li>
        <li>Enter the 7-character short hash of the parent commit</li>
      </ol>
      <p>
        Download the repository:
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${async()=>j(await f(),`${t}.zip`)}>
          ${t}.zip
        </button>
      </p>
      <label for="${t}" class="form-label">
        What is the 7-character short hash of the <strong>parent</strong> of the commit that set timeout to
        ${r}?
      </label>
      <input
        class="form-control"
        id="${t}"
        name="${t}"
        placeholder="e.g., a1b2c3d"
        pattern="[a-f0-9]{7}"
        maxlength="7"
      />
    </div>
  `;return{id:t,title:i,weight:u,question:x,answer:async g=>{if(!g||typeof g!="string")throw new Error("Answer is required");let E=g.trim().toLowerCase();if(E.length===0)throw new Error("Answer cannot be empty");if(!/^[a-f0-9]{7}$/.test(E))throw new Error("Answer must be a 7-character hex string (e.g., a1b2c3d)");if(await f(),E!==b)throw new Error(`Incorrect commit hash. Make sure you found the parent of the commit that set timeout to ${r}.`);return!0}}}var kt,D,rr,At,nr,Mt=A(()=>{"use strict";kt=R(L(),1);X();Tt();he();D=(l,u,t)=>Math.floor(l()*(t-u+1))+u,rr=["Initial commit","Add configuration file","Update README","Fix typo in docs","Update timeout settings","Refactor config structure","Add logging configuration","Update API endpoint","Fix configuration bug","Bump version number","Add error handling config","Update database settings","Modify retry settings","Change cache duration","Update security settings","Add feature flags","Update rate limiting","Fix memory leak config","Add monitoring settings","Update connection pool","Refactor timeout logic","Add backup configuration","Update SSL settings","Fix race condition","Add health check config","Update worker threads","Modify batch size","Change log level","Update compression settings","Add circuit breaker","Fix deadlock issue","Update queue settings","Add throttling config","Update pagination","Fix null pointer config","Add validation rules","Update serialization","Modify buffer size","Change polling interval","Update proxy settings","Add failover config","Fix timeout overflow","Update auth settings","Add CORS configuration","Modify chunk size","Change heartbeat interval","Update session timeout","Add cleanup config","Fix memory settings","Update thread pool","Add graceful shutdown","Modify max connections","Change request timeout","Update response cache"],At=[{first:"Alice",last:"Johnson"},{first:"Bob",last:"Smith"},{first:"Carol",last:"Davis"},{first:"David",last:"Miller"},{first:"Eve",last:"Wilson"},{first:"Frank",last:"Moore"},{first:"Grace",last:"Taylor"},{first:"Hank",last:"Anderson"},{first:"Ivy",last:"Thomas"},{first:"Jack",last:"Jackson"}],nr=["example.com","test.com","sample.org","demo.net"]});var It={};I(It,{default:()=>ar});import{html as ir}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function ar({user:l,weight:u=1}){let t="q-github-pages",i="Host your portfolio on GitHub Pages",n=async d=>{if(d=d.trim(),!new URL(d).hostname.includes("github.io"))throw new Error("URL should be hosted on github.io");let c=await fetch(`/proxy/${d}`).then(m=>m.text());if(!c.match(l.email))throw new Error(`${l.email} is not in the response: ${c.slice(0,1e3)}...`);return!0},h=ir`
    <div class="mb-3">
      <p>
        Publish a page using <a href="https://pages.github.com/">GitHub Pages</a> that showcases your work. Ensure that
        your email address <strong><code>${l.email}</code></strong> is in the page's HTML.
      </p>
      <p>
        GitHub pages are served via CloudFlare which
        <a href="https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/">obfuscates emails</a>.
        So, wrap your email address inside a:
        <pre><code class="language-html">&lt;!--email_off--&gt;${l.email}&lt;!--/email_off--&gt;</code></pre>
      </p>
      <label for="${t}" class="form-label">
        What is the GitHub Pages URL? It might look like:
        <code>https://[USER].github.io/[REPO]/</code>
      </label>
      <input class="form-control" id="${t}" name="${t}" />
      <p class="text-muted">
        If a recent change that's not reflected, add <code>?v=1</code>, <code>?v=2</code> to the URL to bust the cache.
      </p>
    </div>
  `;return{id:t,title:i,weight:u,question:h,answer:n}}var Ot=A(()=>{"use strict"});var Lt={};I(Lt,{default:()=>lr});import{html as cr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function lr({user:l,weight:u=1}){let t="q-github-action",i="Create a GitHub Action",n=async d=>{let e=d.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);if(!e)throw new Error("URL does not match https://github.com/<user>/<repo>");let[,c,m]=e,r=`https://api.github.com/repos/${c}/${m}/actions/runs`,{workflow_runs:a}=await fetch(r).then(p=>p.json());if(!a?.length)throw new Error("No runs found");let{jobs_url:s}=a[0],{jobs:o}=await fetch(s).then(p=>p.json());for(let{steps:p}of o)for(let{name:y}of p)if(y.includes(l.email))return!0;throw new Error(`No step matches ${l.email}`)},h=cr`
    <div class="mb-3">
      <p>
        Create a <a href="https://github.com/features/actions">GitHub action</a> on one of your GitHub repositories.
        Make sure one of the steps in the action has a name that contains your email address <code>${l.email}</code>.
        For example:
      </p>
      <pre><code class="language-yaml">
jobs:
  test:
    steps:
      - name: ${l.email}
        run: echo "Hello, world!"
      </code></pre>
      <p>Trigger the action and make sure it is the <strong>most recent action</strong>.</p>
      <p>
        <label for="${t}" class="form-label">
          What is your repository URL? It will look like:
          <code>https://github.com/USER/REPO</code>
        </label>
        <input class="form-control" id="${t}" name="${t}" />
      </p>
    </div>
  `;return{id:t,title:i,weight:u,question:h,answer:n}}var Rt=A(()=>{"use strict"});var Pt={};I(Pt,{default:()=>ur});import{html as dr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function ur({user:l,weight:u=1}){let t="q-uv-http-post",i="POST HTTP requests with uv",n=(0,qt.default)(`${l.email}#${t}`),h="0123456789abcdef",d="";for(let m=0;m<8;m++)d+=h[Math.floor(n()*h.length)];let e=m=>{let r=JSON.parse(m);return r.headers?.Host=="httpbin.org"&&r.json?.email===l.email&&r.json?.request_id===d},c=dr`
    <div class="mb-3">
      <h4>Case Study: eShopCo API Health Check</h4>
      <p>
        As part of eShopCo’s CLI health suite, you must POST a JSON payload to
        <code>https://httpbin.org/post</code> containing your <code>email</code> and a unique <code>request_id</code>.
        We’ll verify that the server echoes it back correctly.
      </p>
      <p>Run in your terminal:</p>
      <pre><code>uv run --with httpie -- http --json POST https://httpbin.org/post email=${l.email} request_id=${d}</code></pre>
      <p>
        HTTPie returns a JSON object; your payload appears under the
        <code>json</code> field.
      </p>
      <label for="${t}" class="form-label"> Paste the <strong>full</strong> response: </label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:i,weight:u,question:c,answer:e}}var qt,_t=A(()=>{"use strict";qt=R(L(),1)});var jt={};I(jt,{default:()=>mr});import{html as pr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function mr({user:l,weight:u=1}){let t="q-use-devtools",i="Use DevTools",h=(0,Ut.default)(`${l.email}#${t}`)().toString(36).slice(-10),d=pr`
    <div class="mb-3">
      <input type="hidden" value="${h}" />
      <p>Just above this paragraph, there's a hidden input with a secret value.</p>

      <label for="${t}" class="form-label">What is the value in the hidden input?</label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:i,weight:u,question:d,answer:h}}var Ut,Dt=A(()=>{"use strict";Ut=R(L(),1)});function ve(l){let u="q-broken-json-server",t=l?.version??"",i=(0,Jt.default)(`${l?.email??""}#${u}${t}`),n=Ft[Math.floor(i()*Ft.length)],h=[];for(let a=0;a<300;a++)h.push({id:`record_${String(a).padStart(5,"0")}`,name:`Entry ${a}`,value:Math.floor(i()*1e4),status:i()<.5?"active":"inactive",category:["alpha","beta","gamma","delta"][Math.floor(i()*4)],timestamp:`2024-${String(Math.floor(i()*12)+1).padStart(2,"0")}-${String(Math.floor(i()*28)+1).padStart(2,"0")}T${String(Math.floor(i()*24)).padStart(2,"0")}:${String(Math.floor(i()*60)).padStart(2,"0")}:00Z`,metadata:{source:["system_a","system_b","system_c"][Math.floor(i()*3)],priority:Math.floor(i()*5)+1,tags:["tag1","tag2","tag3"].slice(0,Math.floor(i()*3)+1)},description:`This is a sample ${n.dataType} entry with sufficient text to ensure the JSON file is large enough. `.repeat(3)});let d=JSON.stringify(h,null,2),e=d,c=[],m=e.split(`
`),r=[];for(let a=0;a<20;a++){let s;do s=Math.floor(i()*m.length);while(r.includes(s));r.push(s)}r.sort((a,s)=>s-a);for(let a=0;a<r.length;a++){let s=r[a],o=m[s];switch(a%6){case 0:o.trim().endsWith(",")&&(m[s]=o.replace(/,$/,""),c.push({line:s+1,type:"missing_comma"}));break;case 1:(o.trim().endsWith("}")||o.trim().endsWith("]"))&&(m[s]=o.replace(/([}\]])$/,",$1"),c.push({line:s+1,type:"extra_comma"}));break;case 2:o.includes('":')&&(m[s]=o.replace(/"(\w+)":/,"$1:"),c.push({line:s+1,type:"missing_quote"}));break;case 3:o.includes('":')&&(m[s]=o.replace(/"(\w+)":/,"'$1':"),c.push({line:s+1,type:"single_quote"}));break;case 4:o.trim()==="{"&&(m[s]=o.replace("{",""),c.push({line:s+1,type:"missing_brace"}));break;case 5:(o.trim()==="},"||o.trim()==="}")&&(m[s]=o.replace("}","}}"),c.push({line:s+1,type:"extra_brace"}));break}}return e=m.join(`
`),{scenario:n,validJson:d,brokenJson:e,errorLog:c,errorCount:c.length}}function Bt(l){try{let u=JSON.parse(l);return JSON.stringify(u)}catch{return null}}async function zt(l){return async u=>{let{validJson:t}=ve(l);if(!u||typeof u!="string")throw new Error("Please submit the fixed JSON.");let i=Bt(u);if(!i){let e="JSON is still invalid. ";try{JSON.parse(u)}catch(c){let m=c.message.match(/position (\d+)/);if(m){let r=parseInt(m[1]),a=u.substring(Math.max(0,r-50),r+50);e+=`Error near position ${r}: "${a}...". ${c.message}. Common issues: missing commas, extra commas, unquoted keys, single quotes, mismatched braces.`}else e+=`Parse error: ${c.message}`}throw new Error(e)}let n=Bt(t);if(i===n)return!0;let h=JSON.parse(u),d=JSON.parse(t);if(Array.isArray(h)&&Array.isArray(d)){if(h.length!==d.length)throw new Error(`Correct JSON syntax but wrong data. Expected ${d.length} records, got ${h.length}. Make sure you didn't accidentally delete or duplicate any records while fixing errors.`);for(let e=0;e<Math.min(3,h.length);e++)if(JSON.stringify(h[e])!==JSON.stringify(d[e]))throw new Error(`Record ${e} doesn't match expected data. Make sure you only fixed syntax errors without changing values.`)}throw new Error("Valid JSON but content doesn't match. Ensure you only fixed syntax errors without modifying any data values.")}}var Jt,Ft,Yt=A(()=>{"use strict";Jt=R(L(),1),Ft=[{name:"config_export",title:"Fix Corrupted Configuration Export",description:"A configuration export was corrupted during transfer - fix the JSON errors",context:"application configuration",dataType:"configuration settings"},{name:"api_response",title:"Repair Malformed API Response",description:"API response was corrupted - fix syntax errors to parse the data",context:"API integration",dataType:"API records"},{name:"database_dump",title:"Fix Broken Database Export",description:"Database JSON export has syntax errors - repair for data recovery",context:"data migration",dataType:"database records"},{name:"log_export",title:"Repair Corrupted Log Export",description:"Log export was corrupted - fix JSON to analyze the logs",context:"log analysis",dataType:"log entries"}]});var Ht={};I(Ht,{default:()=>gr});import hr from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as fr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function gr({user:l,weight:u=1,version:t=""}){let i="q-broken-json-server",n="Fix Broken JSON File",h={...l,version:t},d=ve(h),{brokenJson:e,errorCount:c}=d,m=new hr;m.file("broken.json",e),m.file("README.md",`# ${d.scenario.title}

## Problem

This JSON file was corrupted during ${d.scenario.context}. It contains approximately ${c} syntax errors that prevent it from being parsed.

**Common error types:**
- Missing commas between array/object elements
- Extra commas before closing braces/brackets
- Missing quotes around property names
- Single quotes instead of double quotes
- Missing or extra braces/brackets

## Task

1. Download \`broken.json\`
2. Fix all syntax errors
3. Validate the JSON parses correctly
4. Submit the fixed JSON

## Validation

You can validate JSON using:

**Python:**
\`\`\`bash
python -m json.tool broken.json
\`\`\`

**Node.js:**
\`\`\`bash
node -e "JSON.parse(require('fs').readFileSync('broken.json', 'utf8'))"
\`\`\`

**Online:**
- https://jsonlint.com/
- VS Code: Install "JSON Tools" extension

## Tips

- Use a text editor with JSON syntax highlighting (VS Code, Sublime)
- Fix errors one at a time, validate frequently
- Look for: missing commas, extra commas, quote issues
- The file is ${(e.length/1024).toFixed(0)}KB - be patient!
`);let r=await m.generateAsync({type:"blob"}),a=URL.createObjectURL(r),s=fr`
    <p>
      <strong>Scenario:</strong> A critical JSON file from your ${d.scenario.context} was
      corrupted. The file contains ~${c} syntax errors. Your job is to fix all errors so the
      JSON can be parsed.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Download the broken JSON file (~${(e.length/1024).toFixed(0)}KB)</li>
      <li>Identify and fix all syntax errors</li>
      <li>Validate the JSON parses correctly</li>
      <li>Submit the fixed JSON</li>
    </ol>

    <p>
      <a href="${a}" download="broken_json.zip" class="btn btn-primary btn-sm">
        📥 Download Broken JSON (ZIP)
      </a>
    </p>

    <details class="my-3">
      <summary><strong>🔍 Common JSON Errors</strong></summary>

      <table class="table table-sm">
        <thead>
          <tr>
            <th>Error Type</th>
            <th>Example (Wrong)</th>
            <th>Fixed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Missing comma</td>
            <td><code>{"a": 1 "b": 2}</code></td>
            <td><code>{"a": 1, "b": 2}</code></td>
          </tr>
          <tr>
            <td>Extra comma</td>
            <td><code>{"a": 1, "b": 2,}</code></td>
            <td><code>{"a": 1, "b": 2}</code></td>
          </tr>
          <tr>
            <td>Missing quotes</td>
            <td><code>{name: "Alice"}</code></td>
            <td><code>{"name": "Alice"}</code></td>
          </tr>
          <tr>
            <td>Single quotes</td>
            <td><code>{'name': 'Alice'}</code></td>
            <td><code>{"name": "Alice"}</code></td>
          </tr>
          <tr>
            <td>Missing brace</td>
            <td><code>["a": 1}</code></td>
            <td><code>{"a": 1}</code></td>
          </tr>
          <tr>
            <td>Extra brace</td>
            <td><code>{"a": 1}}</code></td>
            <td><code>{"a": 1}</code></td>
          </tr>
        </tbody>
      </table>
    </details>

    <details class="my-3">
      <summary><strong>🛠️ Validation Tools</strong></summary>

      <h6>Command Line (Python):</h6>
      <pre><code># Validate JSON and pretty-print
python -m json.tool broken.json fixed.json

# Just validate (shows error position)
python -c "import json; json.load(open('broken.json'))"</code></pre>

      <h6>Command Line (Node.js):</h6>
      <pre><code># Validate and show errors
node -e "JSON.parse(require('fs').readFileSync('broken.json', 'utf8'))"

# Validate and pretty-print
node -e "console.log(JSON.stringify(JSON.parse(require('fs').readFileSync('broken.json')), null, 2))" > fixed.json</code></pre>

      <h6>VS Code:</h6>
      <ul>
        <li>Open the JSON file - syntax errors are highlighted in red</li>
        <li>Hover over red squiggles to see error messages</li>
        <li>Use "Format Document" (Shift+Alt+F) after fixing to check if valid</li>
      </ul>

      <h6>Online Validators:</h6>
      <ul>
        <li><a href="https://jsonlint.com/" target="_blank">JSONLint</a></li>
        <li><a href="https://jsonformatter.org/" target="_blank">JSON Formatter</a></li>
      </ul>
    </details>

    <details class="my-3">
      <summary><strong>💡 Fixing Strategy</strong></summary>

      <ol>
        <li>
          <strong>Use a good editor:</strong> VS Code or Sublime with JSON syntax highlighting
        </li>
        <li>
          <strong>Find first error:</strong> Run validation tool to find first error position
        </li>
        <li><strong>Fix one error:</strong> Fix the reported error</li>
        <li><strong>Validate again:</strong> Check if there are more errors</li>
        <li><strong>Repeat:</strong> Continue until JSON is valid</li>
        <li>
          <strong>Final check:</strong> Use <code>python -m json.tool</code> or online validator
        </li>
      </ol>

      <p class="text-warning mt-2">
        ⚠️ Don't try to fix all errors at once - fix one, validate, repeat!
      </p>
    </details>

    <details class="my-3">
      <summary><strong>⚠️ Important Notes</strong></summary>

      <ul>
        <li>
          <strong>Only fix syntax:</strong> Don't change any data values - only fix syntax errors
        </li>
        <li>
          <strong>Don't delete records:</strong> All ${(e.match(/\{/g)||[]).length} records
          must remain
        </li>
        <li>
          <strong>Preserve formatting:</strong> You can reformat, but don't change structure
        </li>
        <li>
          <strong>Validate thoroughly:</strong> Make sure the entire JSON parses without errors
        </li>
      </ul>
    </details>

    <div class="mb-3">
      <label for="${i}" class="form-label">
        <strong>Paste your fixed JSON here</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="${i}"
        name="${i}"
        rows="20"
        placeholder="Paste the entire fixed JSON file..."
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        The JSON must be syntactically valid and contain all original data (only syntax should be
        fixed).
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>🎓 This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Debug JSON syntax errors</li>
        <li>Use validation tools effectively</li>
        <li>Work with large data files</li>
        <li>Apply systematic debugging methodology</li>
      </ul>
    </div>
  `;return{id:i,title:n,weight:u,question:s,answer:await zt(h)}}var Vt=A(()=>{"use strict";Yt()});var Gt={};I(Gt,{default:()=>wr});import yr from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as br}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function wr({user:l,weight:u=1}){let t="q-extract-json-zip",i="Extract JSON from a ZIP",n=(await z(`${l.email}#${t}`)).slice(-5),h=m=>m.trim()===n,d=new yr;d.file("sales.json",JSON.stringify({month:"2025-04",region:"APAC",total_sales:n}));let e=await d.generateAsync({type:"blob"}),c=br`
    <div class="mb-3">
      <h4>Case Study: eShopCo APAC Monthly Sales Verification</h4>
      <p>
        You are a data analyst at <strong>eShopCo</strong>, tasked with validating the automated sales figures for the
        <em>April 2025</em> period in our <strong>APAC</strong> region before the quarterly report is finalized.
      </p>
      <p>
        Our backend system generated a ZIP archive containing a JSON file with the key metric. Download and unzip:
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          @click=${()=>j(e,"monthly_sales.zip")}
        >
          monthly_sales.zip
        </button>
      </p>
      <p>Inside you’ll find <code>sales.json</code>, structured like:</p>
      <pre><code class="language-json">
{"{ month: "YYYY-MM", region: "RegionName", total_sales: number }"}
      </code></pre>
      <p>Confirm that the <code>total_sales</code> field matches our encrypted reference.</p>
      <label for="${t}" class="form-label">
        What is the value of <code>total_sales</code> in <code>sales.json</code>?
      </label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:i,weight:u,question:c,answer:h}}var Wt=A(()=>{"use strict";X();te()});var eo={};I(eo,{default:()=>Or,generateMarkdownUnicodeScenario:()=>Ee,generateTestData:()=>Ir});function Ce(l){return new Map(Er.map((u,t)=>[u,l[t]]).filter(([,u])=>u))}function se(l){return[...l].map(u=>kr.get(u)??u).join("")}function Se(l){return[...l].map(u=>Nr.get(u)??u).join("")}function Y(l){return[...l].map(u=>Mr.get(u)??u).join("")}function Ee(l){let t=(0,Qt.default)(`${l?.email??""}#q-markdown-unicode-server`),i=Kt[Math.floor(t()*Kt.length)],n=[];n.push({input:se("Bold text here"),expected:"**Bold text here**",description:"Bold text"}),n.push({input:Se("Italic text here"),expected:"*Italic text here*",description:"Italic text"}),n.push({input:Y("code here"),expected:"`code here`",description:"Inline code"}),n.push({input:`${se("Bold")} and ${Se("italic")} text`,expected:"**Bold** and *italic* text",description:"Mixed bold and italic"});let h=Xt[Math.floor(t()*Xt.length)];return n.push({input:`${h} Item 1
${h} Item 2
${h} Item 3`,expected:`- Item 1
- Item 2
- Item 3`,description:"Bullet list"}),n.push({input:`${Y("function test() {")}
${Y("  return 42;")}
${Y("}")}`,expected:"```\nfunction test() {\n  return 42;\n}\n```",description:"Multi-line code block"}),n.push({input:`${se("Title")}

${Se("Subtitle")}

${h} ${se("Point 1")}
${h} Use ${Y("code")} for tech`,expected:`**Title**

*Subtitle*

- **Point 1**
- Use \`code\` for tech`,description:"Complex document"}),n.push({input:Y("var x = 123;"),expected:"`var x = 123;`",description:"Code with numbers"}),{scenario:i,testCases:n}}function Zt(l){return l.map((u,t)=>({name:`Test ${t+1}: ${u.description}`,fn:i=>{let n=i(u.input);if(n!==u.expected)throw new Error(`Failed ${u.description}.
Input: "${u.input.substring(0,50)}${u.input.length>50?"...":""}"
Expected: "${u.expected.substring(0,100)}${u.expected.length>100?"...":""}"
Got: "${String(n).substring(0,100)}${String(n).length>100?"...":""}"`)}}))}function Ir(l){let{testCases:u}=Ee(l);return{testCases:Zt(u)}}async function Or({user:l,weight:u=1}){let{html:t}=await import("https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js"),i="q-markdown-unicode-server",n="Convert Unicode Formatting to Markdown",{scenario:h,testCases:d}=Ee(l),e=t`
    <p>
      <strong>Scenario:</strong> You're building a ${h.context} tool. Users post content
      with Unicode formatting (𝗯𝗼𝗹𝗱, 𝘪𝘵𝘢𝘭𝘪𝘤, 𝚌𝚘𝚍𝚎), but your system needs standard Markdown. Write a
      converter function.
    </p>

    <p><strong>Your Task:</strong></p>
    <p>
      Write a JavaScript function <code>convertToMarkdown(text)</code> that converts Unicode-styled text
      to Markdown:
    </p>

    <ul>
      <li><strong>Bold</strong> (𝗔𝗕𝗖) → <code>**ABC**</code></li>
      <li><strong>Italic</strong> (𝘈𝘉𝘊) → <code>*ABC*</code></li>
      <li><strong>Code</strong> (𝙰𝙱𝙲) → <code>\`ABC\`</code> or code fences for multi-line</li>
      <li><strong>Bullets</strong> (• Item) → <code>- Item</code></li>
    </ul>

    <details class="my-3">
      <summary><strong>📝 Example Conversions</strong></summary>

      <table class="table table-sm">
        <thead>
          <tr>
            <th>Input (Unicode)</th>
            <th>Output (Markdown)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>𝗕𝗼𝗹𝗱 𝘁𝗲𝘅𝘁</code></td>
            <td><code>**Bold text**</code></td>
          </tr>
          <tr>
            <td><code>𝘐𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵</code></td>
            <td><code>*Italic text*</code></td>
          </tr>
          <tr>
            <td><code>𝚌𝚘𝚍𝚎()</code></td>
            <td><code>\`code()\`</code></td>
          </tr>
          <tr>
            <td><code>• Item 1<br />• Item 2</code></td>
            <td><code>- Item 1<br />- Item 2</code></td>
          </tr>
          <tr>
            <td><code>𝚏𝚞𝚗𝚌 𝚖𝚊𝚒𝚗()<br />𝚏𝚞𝚗𝚌 𝚝𝚎𝚜𝚝()</code></td>
            <td>
              <code>\`\`\`<br />func main()<br />func test()<br />\`\`\`</code>
            </td>
          </tr>
        </tbody>
      </table>
    </details>

    <details class="my-3">
      <summary><strong>💡 Implementation Hints</strong></summary>

      <h6>Character Mappings:</h6>
      <pre><code>// Bold: 𝗔𝗕𝗖...𝟵 (Mathematical Bold)
// Italic: 𝘈𝘉𝘊...𝘻 (Mathematical Italic)
// Mono: 𝙰𝙱𝙲...𝟿 (Mathematical Monospace)
// Normal: ABC...9

function convertToMarkdown(text) {
  const BOLD_MAP = "𝗔𝗕𝗖...";  // Full alphabet
  const NORMAL = "ABC...";

  // Convert bold
  let result = text.replace(/[𝗔-𝟵]+/g, match => {
    // Map each char from BOLD_MAP to NORMAL
    const converted = mapChars(match, BOLD_MAP, NORMAL);
    return \`**\${converted}**\`;
  });

  // Convert italic, mono, bullets...
  return result;
}</code></pre>

      <h6>Multi-line Code Detection:</h6>
      <pre><code>// If 3+ consecutive lines are all monospace:
// Convert to code fence instead of inline code</code></pre>

      <h6>Bullet Characters:</h6>
      <pre><code>const BULLETS = ["•", "◦", "▪", "▸", "‣"];
// Replace all with "-"</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>🧪 Test Cases</strong></summary>

      <p>Your function will be tested with ${d.length} test cases:</p>
      <ol>
        ${d.map(r=>t`<li>${r.description}</li>`)}
      </ol>

      <p class="text-muted">Each test checks specific formatting scenarios. All must pass.</p>
    </details>

    <div class="mb-3">
      <label for="${i}" class="form-label">
        <strong>Paste your <code>convertToMarkdown</code> function here</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="${i}"
        name="${i}"
        rows="20"
        placeholder="function convertToMarkdown(text) {
  // Your implementation
  return text;
}"
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        Submit the complete function definition. It should take a string and return a string.
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>🎓 This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Work with Unicode character ranges</li>
        <li>Implement text transformation algorithms</li>
        <li>Handle regex patterns and replacements</li>
        <li>Parse and format text with multiple rules</li>
      </ul>
    </div>
  `,c=Zt(d);return{id:i,title:n,weight:u,question:e,answer:async r=>{if(!r||!r.trim())throw new Error("Paste your convertToMarkdown function.");let a;try{a=new Function(`${r}
return convertToMarkdown;`)()}catch(s){throw new Error(`Could not evaluate your code: ${s.message}`)}if(typeof a!="function")throw new Error("Your code must define a function named convertToMarkdown.");for(let{fn:s}of c)s(a);return!0}}}var Qt,Kt,xr,vr,Sr,Cr,Xt,Er,$r,Tr,Ar,kr,Nr,Mr,to=A(()=>{"use strict";Qt=R(L(),1),Kt=[{name:"linkedin_converter",title:"LinkedIn Post to Markdown Converter",description:"Convert LinkedIn posts with Unicode formatting to standard Markdown",context:"social media content"},{name:"notion_export",title:"Notion Export Formatter",description:"Convert Notion exports with Unicode styling to Markdown format",context:"documentation export"},{name:"whatsapp_formatter",title:"WhatsApp Message Formatter",description:"Convert formatted WhatsApp messages to Markdown",context:"chat export"},{name:"twitter_archiver",title:"Twitter/X Post Archiver",description:"Archive Twitter posts by converting Unicode formatting to Markdown",context:"social media archive"}],xr="\u{1D5D4}\u{1D5D5}\u{1D5D6}\u{1D5D7}\u{1D5D8}\u{1D5D9}\u{1D5DA}\u{1D5DB}\u{1D5DC}\u{1D5DD}\u{1D5DE}\u{1D5DF}\u{1D5E0}\u{1D5E1}\u{1D5E2}\u{1D5E3}\u{1D5E4}\u{1D5E5}\u{1D5E6}\u{1D5E7}\u{1D5E8}\u{1D5E9}\u{1D5EA}\u{1D5EB}\u{1D5EC}\u{1D5ED}\u{1D5EE}\u{1D5EF}\u{1D5F0}\u{1D5F1}\u{1D5F2}\u{1D5F3}\u{1D5F4}\u{1D5F5}\u{1D5F6}\u{1D5F7}\u{1D5F8}\u{1D5F9}\u{1D5FA}\u{1D5FB}\u{1D5FC}\u{1D5FD}\u{1D5FE}\u{1D5FF}\u{1D600}\u{1D601}\u{1D602}\u{1D603}\u{1D604}\u{1D605}\u{1D606}\u{1D607}\u{1D7EC}\u{1D7ED}\u{1D7EE}\u{1D7EF}\u{1D7F0}\u{1D7F1}\u{1D7F2}\u{1D7F3}\u{1D7F4}\u{1D7F5}",vr="\u{1D608}\u{1D609}\u{1D60A}\u{1D60B}\u{1D60C}\u{1D60D}\u{1D60E}\u{1D60F}\u{1D610}\u{1D611}\u{1D612}\u{1D613}\u{1D614}\u{1D615}\u{1D616}\u{1D617}\u{1D618}\u{1D619}\u{1D61A}\u{1D61B}\u{1D61C}\u{1D61D}\u{1D61E}\u{1D61F}\u{1D620}\u{1D621}\u{1D622}\u{1D623}\u{1D624}\u{1D625}\u{1D626}\u{1D627}\u{1D628}\u{1D629}\u{1D62A}\u{1D62B}\u{1D62C}\u{1D62D}\u{1D62E}\u{1D62F}\u{1D630}\u{1D631}\u{1D632}\u{1D633}\u{1D634}\u{1D635}\u{1D636}\u{1D637}\u{1D638}\u{1D639}\u{1D63A}\u{1D63B}",Sr="\u{1D670}\u{1D671}\u{1D672}\u{1D673}\u{1D674}\u{1D675}\u{1D676}\u{1D677}\u{1D678}\u{1D679}\u{1D67A}\u{1D67B}\u{1D67C}\u{1D67D}\u{1D67E}\u{1D67F}\u{1D680}\u{1D681}\u{1D682}\u{1D683}\u{1D684}\u{1D685}\u{1D686}\u{1D687}\u{1D688}\u{1D689}\u{1D68A}\u{1D68B}\u{1D68C}\u{1D68D}\u{1D68E}\u{1D68F}\u{1D690}\u{1D691}\u{1D692}\u{1D693}\u{1D694}\u{1D695}\u{1D696}\u{1D697}\u{1D698}\u{1D699}\u{1D69A}\u{1D69B}\u{1D69C}\u{1D69D}\u{1D69E}\u{1D69F}\u{1D6A0}\u{1D6A1}\u{1D6A2}\u{1D6A3}\u{1D7F6}\u{1D7F7}\u{1D7F8}\u{1D7F9}\u{1D7FA}\u{1D7FB}\u{1D7FC}\u{1D7FD}\u{1D7FE}\u{1D7FF}",Cr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Xt=["\u2022","\u25E6","\u25AA","\u25B8","\u2023"],Er=[...Cr],$r=[...xr],Tr=[...vr],Ar=[...Sr];kr=Ce($r),Nr=Ce(Tr),Mr=Ce(Ar)});var ro={};I(ro,{default:()=>qr});import Lr from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as Rr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function qr({user:l,weight:u=1}){let t="q-generate-schema",i="Infer SQL Schema from CSVs",n=(0,oo.default)(`${l.email}#${t}`),h={name:"ecommerce_analytics",title:"E-Commerce Database Schema Design",description:"Design a normalized database schema for an e-commerce platform"},d=[],e=[];for(let w=1;w<=50;w++){let v=`CUST${String(w).padStart(4,"0")}`;e.push(v),d.push({customer_id:v,email:`customer${w}@example.com`,full_name:`Customer ${w}`,signup_date:`2024-${String(Math.floor(n()*12)+1).padStart(2,"0")}-${String(Math.floor(n()*28)+1).padStart(2,"0")}`,account_status:n()<.9?"active":"inactive",loyalty_points:Math.floor(n()*5e3)})}let c=[],m=[],r=["Electronics","Clothing","Books","Home","Sports"];for(let w=1;w<=30;w++){let v=`PROD${String(w).padStart(4,"0")}`;m.push(v),c.push({product_id:v,product_name:`Product ${w}`,category:r[Math.floor(n()*r.length)],price:(Math.floor(n()*5e4)+1e3)/100,stock_quantity:Math.floor(n()*200),supplier_id:`SUPP${String(Math.floor(n()*10)+1).padStart(4,"0")}`})}let a=[],s=[];for(let w=1;w<=100;w++){let v=`ORD${String(w).padStart(5,"0")}`;s.push(v),a.push({order_id:v,customer_id:e[Math.floor(n()*e.length)],order_date:`2024-${String(Math.floor(n()*12)+1).padStart(2,"0")}-${String(Math.floor(n()*28)+1).padStart(2,"0")}`,total_amount:(Math.floor(n()*1e5)+1e3)/100,status:["pending","shipped","delivered","cancelled"][Math.floor(n()*4)],shipping_address:`${Math.floor(n()*999)+1} Main St`})}let o=[];for(let w of a){let v=Math.floor(n()*3)+1;for(let N=0;N<v;N++)o.push({order_item_id:`OI${String(o.length+1).padStart(5,"0")}`,order_id:w.order_id,product_id:m[Math.floor(n()*m.length)],quantity:Math.floor(n()*5)+1,unit_price:(Math.floor(n()*1e4)+100)/100})}function p(w){if(w.length===0)return"";let v=Object.keys(w[0]),N=w.map(M=>v.map(T=>{let O=M[T];return typeof O=="string"&&O.includes(",")?`"${O}"`:O}).join(","));return[v.join(","),...N].join(`
`)}let y=p(d),b=p(c),S=p(a),$=p(o),f=new Lr;f.file("customers.csv",y),f.file("products.csv",b),f.file("orders.csv",S),f.file("order_items.csv",$),f.file("README.md",`# E-Commerce Database Schema Design

## Scenario

You've been given CSV exports from a legacy e-commerce system. Your task is to design a proper SQL database schema.

## Data Files

1. **customers.csv** - Customer information
2. **products.csv** - Product catalog
3. **orders.csv** - Order records
4. **order_items.csv** - Line items for each order

## Your Task

Analyze the CSVs and create SQL DDL statements that:

1. Create tables for all 4 CSV files
2. Use appropriate SQLite data types (INTEGER, TEXT, REAL, BLOB, NULL)
3. Add PRIMARY KEY constraints
4. Add FOREIGN KEY constraints for relationships
5. Add NOT NULL constraints where appropriate
6. Add CHECK constraints for business rules (e.g., price > 0, quantity > 0)
7. Add UNIQUE constraints where needed

## Requirements

- **Narrow types:** Use the most specific type (INTEGER for IDs, not TEXT)
- **Constraints:** Add all appropriate constraints
- **Relationships:** Define all foreign keys between tables
- **Normalization:** Ensure the schema is properly normalized

## Example

\`\`\`sql
CREATE TABLE example (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL CHECK (price > 0),
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
\`\`\`
`);let x=await f.generateAsync({type:"blob"}),C=URL.createObjectURL(x),g=`CREATE TABLE customers (
    customer_id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    signup_date TEXT NOT NULL,
    account_status TEXT NOT NULL CHECK (account_status IN ('active', 'inactive')),
    loyalty_points INTEGER NOT NULL CHECK (loyalty_points >= 0)
);

CREATE TABLE products (
    product_id TEXT PRIMARY KEY,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL CHECK (price > 0),
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0),
    supplier_id TEXT NOT NULL
);

CREATE TABLE orders (
    order_id TEXT PRIMARY KEY,
    customer_id TEXT NOT NULL,
    order_date TEXT NOT NULL,
    total_amount REAL NOT NULL CHECK (total_amount >= 0),
    status TEXT NOT NULL CHECK (status IN ('pending', 'shipped', 'delivered', 'cancelled')),
    shipping_address TEXT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_item_id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price REAL NOT NULL CHECK (unit_price > 0),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`,E=Rr`
    <p>
      <strong>Scenario:</strong> You're a database architect tasked with migrating a legacy e-commerce
      system to a modern SQL database. You have CSV exports but no schema documentation.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Download and analyze the 4 CSV files</li>
      <li>Infer the appropriate schema with proper types and constraints</li>
      <li>Write SQL DDL statements to create all tables</li>
      <li>Include PRIMARY KEY, FOREIGN KEY, NOT NULL, CHECK, and UNIQUE constraints</li>
      <li>Submit your complete SQL schema</li>
    </ol>

    <p>
      <a href="${C}" download="ecommerce_data.zip" class="btn btn-primary btn-sm">
        📥 Download CSV Files (ZIP)
      </a>
    </p>

    <details class="my-3">
      <summary><strong>📊 What's in the Data?</strong></summary>

      <h6>Files:</h6>
      <ul>
        <li><strong>customers.csv</strong> - 50 customer records</li>
        <li><strong>products.csv</strong> - 30 products across 5 categories</li>
        <li><strong>orders.csv</strong> - 100 orders</li>
        <li><strong>order_items.csv</strong> - ~200 line items</li>
      </ul>

      <h6>Relationships:</h6>
      <ul>
        <li>Each order belongs to one customer</li>
        <li>Each order has one or more order items</li>
        <li>Each order item references a product</li>
      </ul>
    </details>

    <details class="my-3">
      <summary><strong>🎯 Schema Requirements</strong></summary>

      <h6>1. Use Narrow SQLite Types:</h6>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>When to Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>INTEGER</code></td>
            <td>Whole numbers, counts, quantities</td>
          </tr>
          <tr>
            <td><code>REAL</code></td>
            <td>Prices, amounts, decimals</td>
          </tr>
          <tr>
            <td><code>TEXT</code></td>
            <td>Strings, IDs, dates (SQLite stores dates as TEXT)</td>
          </tr>
        </tbody>
      </table>

      <h6>2. Add Constraints:</h6>
      <ul>
        <li><code>PRIMARY KEY</code> - Every table needs one</li>
        <li><code>FOREIGN KEY</code> - For relationships between tables</li>
        <li><code>NOT NULL</code> - For required fields</li>
        <li><code>CHECK</code> - For business rules (price > 0, status in allowed values)</li>
        <li><code>UNIQUE</code> - For fields that must be unique (email)</li>
      </ul>

      <h6>3. Common Patterns:</h6>
      <pre><code>-- ID columns
customer_id TEXT PRIMARY KEY

-- Prices and amounts
price REAL NOT NULL CHECK (price > 0)

-- Quantities
quantity INTEGER NOT NULL CHECK (quantity > 0)

-- Status/enum fields
status TEXT NOT NULL CHECK (status IN ('pending', 'shipped', 'delivered'))

-- Unique fields
email TEXT NOT NULL UNIQUE

-- Foreign keys
FOREIGN KEY (customer_id) REFERENCES customers(customer_id)</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>💡 Implementation Tips</strong></summary>

      <h6>Step 1: Examine the Data</h6>
      <pre><code># Look at column names and sample values
head customers.csv
head products.csv
head orders.csv
head order_items.csv</code></pre>

      <h6>Step 2: Identify Relationships</h6>
      <ul>
        <li>Which columns look like foreign keys?</li>
        <li>Which tables reference other tables?</li>
        <li>What's the primary key of each table?</li>
      </ul>

      <h6>Step 3: Determine Types</h6>
      <ul>
        <li>IDs (CUST0001, PROD0001) → TEXT</li>
        <li>Numbers without decimals → INTEGER</li>
        <li>Numbers with decimals (prices) → REAL</li>
        <li>Everything else → TEXT</li>
      </ul>

      <h6>Step 4: Add Constraints</h6>
      <ul>
        <li>Every table needs a PRIMARY KEY</li>
        <li>Foreign keys for *_id columns referencing other tables</li>
        <li>NOT NULL for required fields</li>
        <li>CHECK for business rules</li>
      </ul>

      <h6>Step 5: Test Your Schema</h6>
      <pre><code># Create a test database
sqlite3 test.db < schema.sql

# Try to import data
.mode csv
.import customers.csv customers
.import products.csv products
.import orders.csv orders
.import order_items.csv order_items</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>✅ Validation Checklist</strong></summary>

      <p>Your schema will be validated for:</p>
      <ul>
        <li>✓ All 4 tables created (customers, products, orders, order_items)</li>
        <li>✓ All columns present with correct names</li>
        <li>✓ Correct data types (INTEGER for counts, REAL for prices, TEXT for strings/IDs)</li>
        <li>✓ PRIMARY KEY on each table</li>
        <li>✓ FOREIGN KEY constraints for relationships</li>
        <li>✓ NOT NULL constraints on required fields</li>
        <li>✓ CHECK constraints for business rules</li>
        <li>✓ UNIQUE constraint on email</li>
      </ul>
    </details>

    <div class="mb-3">
      <label for="${t}" class="form-label">
        <strong>Paste your SQL schema (all CREATE TABLE statements)</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="20"
        placeholder="CREATE TABLE customers (
    customer_id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    ...
);

CREATE TABLE products (
    ...
);"
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        Include all CREATE TABLE statements with proper constraints (PRIMARY KEY, FOREIGN KEY, NOT NULL,
        CHECK, UNIQUE)
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>🎓 This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Analyze data to infer schema structure</li>
        <li>Choose appropriate SQLite data types</li>
        <li>Define relationships with foreign keys</li>
        <li>Apply constraints for data integrity</li>
        <li>Design normalized database schemas</li>
      </ul>
    </div>
  `;return{id:t,title:i,weight:u,question:E,answer:async w=>{if(!w||typeof w!="string")throw new Error("Please submit your SQL schema.");let v=w.toLowerCase().trim(),N=["customers","products","orders","order_items"];for(let F of N)if(!v.includes(`create table ${F}`))throw new Error(`Missing table: ${F}. You need to create all 4 tables.`);if((v.match(/primary key/g)||[]).length<4)throw new Error("Each table should have a PRIMARY KEY constraint. Found fewer than 4.");let M=(v.match(/foreign key/g)||[]).length;if(M<3)throw new Error(`Missing FOREIGN KEY constraints. Expected at least 3 (orders\u2192customers, order_items\u2192orders, order_items\u2192products), found ${M}.`);let T=(v.match(/not null/g)||[]).length;if(T<10)throw new Error(`Not enough NOT NULL constraints. Most columns should be NOT NULL. Found ${T}, expected at least 10.`);let O=(v.match(/check\s*\(/gi)||[]).length;if(O<5)throw new Error(`Missing CHECK constraints. Add constraints for: price > 0, quantity > 0, status values, etc. Found ${O}, expected at least 5.`);if(!v.includes("unique")||!v.match(/email.*unique|unique.*email/i))throw new Error("Email should have a UNIQUE constraint to prevent duplicate accounts.");if(!v.includes("integer"))throw new Error("Use INTEGER type for numeric IDs, quantities, and counts.");if(!v.includes("real"))throw new Error("Use REAL type for prices and amounts (decimal numbers).");let P=["customer_id","email","product_id","order_id","price","quantity"];for(let F of P)if(!v.includes(F))throw new Error(`Missing column: ${F}. Check your column names match the CSV files.`);return!0}}}var oo,no=A(()=>{"use strict";oo=R(L(),1)});var ao={};I(ao,{default:()=>Ur});import{html as so}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{sumBy as Pr}from"https://cdn.jsdelivr.net/npm/lodash-es@4/+esm";import _r from"https://esm.sh/@sqlite.org/sqlite-wasm@3.46.1-build3";async function Ur({user:l,weight:u=1}){let t="q-sql-order-average",i="SQL: Average Order Value",n=(0,io.default)(`${l.email}#${t}`),h=["Shipped","shipped","SHIPPED","Pending","Cancelled","Processing"],d=Array.from({length:1e3},()=>{let o=h[Math.floor(n()*h.length)],p=Math.floor(n()*9)+1,y=Number((n()*99+1).toFixed(2));return{status:o,quantity:p,unit_price:y}}),e=await _r({printErr:console.error}),c=new e.oo1.DB;c.exec("CREATE TABLE orders (status TEXT, quantity INTEGER, unit_price FLOAT)");let m=c.prepare("INSERT INTO orders (status, quantity, unit_price) VALUES (?, ?, ?)");c.exec("BEGIN TRANSACTION");for(let o of d)m.bind([o.status,o.quantity,o.unit_price]).stepReset();c.exec("COMMIT"),m.finalize();let r=d.filter(o=>/shipped/i.test(o.status)),a=r.length>0?Pr(r,o=>o.quantity*o.unit_price)/r.length:0,s=so`
    <div class="mb-3">
      <h4>Case Study: eShopCo Order Analytics</h4>
      <p>
        The <code>orders</code> table records each purchase with columns: <code>status</code>, <code>quantity</code>,
        and <code>unit_price</code>. You need to calculate the <strong>average order value</strong> for all orders whose
        status is <code>shipped</code> (in any casing). Order value is defined as <code>quantity * unit_price</code>.
      </p>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>status</th>
            <th>quantity</th>
            <th>unit_price</th>
          </tr>
        </thead>
        <tbody>
          ${d.slice(0,5).map(o=>so` <tr>
                <td>${o.status}</td>
                <td>${o.quantity}</td>
                <td>${o.unit_price}</td>
              </tr>`)}
          <tr>
            <td colspan="3">…</td>
          </tr>
        </tbody>
      </table>
      <label for="${t}" class="form-label">
        Write the SQL query that returns the average order value for
        <code>shipped</code> orders (case-insensitive).
      </label>
      <textarea class="form-control font-monospace text-bg-dark" rows="4" id="${t}" name="${t}"></textarea>
    </div>
  `;return{id:t,title:i,weight:u,question:s,answer:o=>{let p=c.exec(o,{rowMode:"array"});if(!p.length||!p[0].length)throw new Error("Query returned no rows");let y=Number(p[0][0]);return Math.abs(y-a)<.01}}}var io,co=A(()=>{"use strict";io=R(L(),1)});var uo={};I(uo,{default:()=>Jr});import{html as jr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{fromMarkdown as Dr}from"https://cdn.jsdelivr.net/npm/mdast-util-from-markdown@2/+esm";import{gfmFromMarkdown as Fr}from"https://cdn.jsdelivr.net/npm/mdast-util-gfm@3/+esm";import{gfm as Br}from"https://cdn.jsdelivr.net/npm/micromark-extension-gfm@3/+esm";function ie(l){return l?typeof l.value=="string"?l.value:l.children?l.children.map(ie).join(""):"":""}function Q(l,u){return u(l)?!0:l.children?.some(t=>Q(t,u))??!1}async function Jr({user:l,weight:u=.75}){let t="q-markdown-architecture",i="Author a deployment architecture markdown",n=(0,lo.default)(`${l.email}#${t}`),h=`${q(n)}-${q(n)}`.replace(/[^a-zA-Z0-9-]/g,"").slice(0,12),d=`${h}`.toLowerCase(),e={edge:`edge-${q(n).toLowerCase()}`,api:`api-${q(n).toLowerCase()}`,worker:`worker-${q(n).toLowerCase()}`},c=`compliance-${q(n).toLowerCase()}`,m=`${q(n)}-${q(n)}-${q(n)}`.toLowerCase(),r=async s=>{if(typeof s!="string"||!s.trim())throw new Error("Provide the Markdown document");if(!s.includes(`[^${c}]`))throw new Error(`Missing footnote reference [^${c}] in body text`);if(!s.includes(`[^${c}]:`))throw new Error(`Missing footnote definition [^${c}]: ...`);if(!s.toLowerCase().includes(m))throw new Error(`Missing guardrail token ${m}`);let o=Dr(s,{extensions:[Br()],mdastExtensions:[Fr()]});if(!Q(o,f=>f.type!=="heading"||f.depth!==1?!1:ie(f).toLowerCase().includes(`project ${h.toLowerCase()} deployment`)))throw new Error(`Include an H1 with text like "Project ${h} Deployment"`);let y=[];if(o.children?.forEach(f=>{f.type==="heading"&&f.depth===2&&y.push(f)}),y.length<2)throw new Error("Add at least two H2 sections (## headings) describing the architecture");let b=[{predicate:f=>f.type==="strong",message:"Include bold text"},{predicate:f=>f.type==="emphasis",message:"Include italic text"},{predicate:f=>f.type==="delete",message:"Include strikethrough text using ~~text~~"},{predicate:f=>f.type==="link",message:"Add at least one hyperlink"},{predicate:f=>f.type==="table",message:"Include a Markdown table summarising services"},{predicate:f=>f.type==="inlineCode"&&f.value.trim()===`uv deploy ${d}`,message:`Include inline code snippet "\`uv deploy ${d}\`"`},{predicate:f=>f.type==="listItem"&&f.checked===!0,message:"Add a task list item marked as complete (- [x] ...)"},{predicate:f=>f.type==="listItem"&&f.checked===!1,message:"Add a task list item marked as pending (- [ ] ...)"},{predicate:f=>f.type==="footnoteDefinition"&&f.identifier===c,message:`Define the [^${c}] footnote at the end`}];for(let{predicate:f,message:x}of b)if(!Q(o,f))throw new Error(x);let S=(()=>{let f=null;return Q(o,x=>(!f&&x.type==="code"&&x.lang==="mermaid"&&(f=x),!1)),f})();if(!S)throw new Error("Add a fenced mermaid code block with ```mermaid");for(let f of Object.values(e))if(!S.value.includes(f))throw new Error(`Mermaid diagram must reference ${f}`);if(!Q(o,f=>f.type!=="blockquote"?!1:ie(f).includes("[!NOTE]")||ie(f).includes("[!IMPORTANT]")))throw new Error("Add a blockquote callout like > [!NOTE] ... describing a deployment guardrail");return!0},a=jr`
    <div class="mb-3">
      <p>
        Draft an architecture note in Markdown titled <strong>Project ${h} Deployment</strong> covering how a
        data product moves from staging to production. Document the edge cache, API tier, and background workers.
      </p>
      <p>Your document must include all of the following:</p>
      <ul>
        <li>H1 heading: <code>Project ${h} Deployment</code></li>
        <li>
          A mermaid diagram showing nodes <code>${e.edge}</code>, <code>${e.api}</code>, and
          <code>${e.worker}</code>
        </li>
        <li>Inline code snippet <code>uv deploy ${d}</code> explaining how to ship the release</li>
        <li>A GFM task list with at least one checked and one unchecked item calling out deployment tasks</li>
        <li>A table summarising tiers, responsibility, and scaling plans</li>
        <li>
          A callout written as <code>&gt; [!NOTE]</code> (or <code>&gt; [!IMPORTANT]</code>) referencing guardrail token
          <code>${m}</code>
        </li>
        <li>
          The footnote reference <code>[^${c}]</code> in the body and its footnote definition describing an
          audit step
        </li>
      </ul>
      <p>
        Also weave in bold, italic, strikethrough text, at least one hyperlink, and the guardrail token
        <code>${m}</code> somewhere in prose.
      </p>
      <label for="${t}" class="form-label">Paste your Markdown here:</label>
      <textarea class="form-control" id="${t}" name="${t}" rows="16"></textarea>
    </div>
  `;return{id:t,title:i,weight:u,question:a,answer:r}}var lo,po=A(()=>{"use strict";lo=R(L(),1);re()});var fo={};I(fo,{default:()=>Yr});import{html as zr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Yr({user:l,weight:u=2}){let t="q-prompt-debugging",i="Debug and Improve a Failing Prompt",n=(0,ho.default)(`${l.email}#${t}`),h=[()=>{let o=[{type:"product reviews",fields:["product","rating"],input:"customer feedback"},{type:"job postings",fields:["title","salary","location"],input:"job description"},{type:"email metadata",fields:["sender","subject","priority"],input:"email content"},{type:"meeting notes",fields:["action_items","decisions","attendees"],input:"meeting transcript"}],p=o[Math.floor(n()*o.length)],y=Math.floor(n()*2)+2,b=p.fields.slice(0,y);return{task:`Extract structured ${p.type} from ${p.input}`,failingPrompt:`Get the ${b.join(" and ")} from this: '[text]'. Return as JSON.`,issues:[`Doesn't specify ${b[0]} format or constraints`,"No examples provided for clarity",`Doesn't handle cases where ${b[1]} is missing or ambiguous`,"No instruction for edge cases or validation"],testInput:e(p.type,n),shouldExtract:Object.fromEntries(b.map(S=>[S,`extracted_${S}`]))}},()=>{let o=[{domain:"support tickets",levels:["critical","high","medium","low"],criteria:"urgency"},{domain:"user feedback",levels:["bug","feature","question","praise"],criteria:"type"},{domain:"content moderation",levels:["safe","warning","inappropriate","illegal"],criteria:"safety"},{domain:"lead scoring",levels:["hot","warm","cold","unqualified"],criteria:"quality"}],p=o[Math.floor(n()*o.length)],y=Math.floor(n()*2)+3;return{task:`Classify ${p.domain} by ${p.criteria}`,failingPrompt:`What ${p.criteria} level is this ${p.domain.slice(0,-1)}? '[text]'. Just give me the level.`,issues:[`No definition of ${p.criteria} levels (${p.levels.slice(0,y).join(", ")})`,"Binary or simplistic classification doesn't capture nuance","No examples demonstrating each level","Doesn't require reasoning or explanation"],testInput:c(p.domain,n),shouldExtract:{[p.criteria]:p.levels[0],reasoning:"explanation required"}}},()=>{let o=[{lang:"SQL",safety:["DELETE","DROP","TRUNCATE"],constraint:"schema"},{lang:"regex",safety:["backtracking","catastrophic"],constraint:"pattern examples"},{lang:"bash",safety:["rm -rf","sudo","> /dev"],constraint:"environment info"},{lang:"Python",safety:["eval","exec","__import__"],constraint:"dependencies"}],p=o[Math.floor(n()*o.length)];return{task:`Generate ${p.lang} code from natural language`,failingPrompt:`Write ${p.lang} for: '[query]'`,issues:[`No ${p.constraint} information provided`,`Doesn't specify ${p.lang} dialect or version`,"No examples of desired code structure",`Doesn't constrain unsafe operations (${p.safety.slice(0,2).join(", ")})`],testInput:m(p.lang,n),shouldExtract:{hasSafety:!0,hasContext:!0,validated:!0}}},()=>{let o=[{source:"technical docs",audiences:["engineers","managers","customers"],preserve:["warnings","requirements"]},{source:"research papers",audiences:["experts","students","general public"],preserve:["findings","methods"]},{source:"legal contracts",audiences:["lawyers","clients","executives"],preserve:["obligations","risks"]},{source:"API documentation",audiences:["developers","PMs","support"],preserve:["endpoints","auth"]}],p=o[Math.floor(n()*o.length)],y=p.audiences[Math.floor(n()*p.audiences.length)];return{task:`Summarize ${p.source} for ${y}`,failingPrompt:`Summarize this ${p.source}: '[doc]'`,issues:[`Doesn't specify target audience (${p.audiences.join(" vs ")})`,"No length constraint or format specification",`Doesn't preserve critical information (${p.preserve.join(", ")})`,"No instruction on handling technical terms or jargon"],testInput:r(p.source,n),shouldExtract:{hasPreservedInfo:!0,audienceAppropriate:!0,lengthOk:!0}}}],d=h[Math.floor(n()*h.length)]();function e(o){return{"product reviews":"I absolutely love my new laptop! It's incredibly fast and the battery lasts all day. Best purchase ever!","job postings":"Senior Software Engineer needed. Must have 5+ years experience with Python. Salary: $120-150k. Remote position based in San Francisco.","email metadata":"From: john@example.com. Subject: URGENT: Server outage affecting production systems. Please address immediately.","meeting notes":"Attendees: Sarah, Mike, Jessica. Decided to launch feature next quarter. Action: Mike to prepare cost analysis by Friday."}[o]||"Sample input text for testing."}function c(o){return{"support tickets":"My entire production database has been down for 3 hours and we're losing $10,000 per minute!","user feedback":"The export button crashes every time I try to download more than 100 records. This is blocking my work.","content moderation":"This post contains hate speech targeting a specific religious group and should be removed immediately.","lead scoring":"Fortune 500 company requesting demo. Budget approved. Decision maker engaged. Timeline: 30 days."}[o]||"Sample classification input."}function m(o){return{SQL:"Show me all users who signed up last week and haven't completed their profile",regex:"Match valid email addresses but exclude temporary email domains",bash:"Find all log files modified in the last hour and compress them",Python:"Read CSV file, filter rows where column A > 100, write to new file"}[o]||"Sample code query."}function r(o){return{"technical docs":"The OAuth 2.0 authorization framework requires proper PKCE implementation to prevent authorization code interception attacks. Always use state parameters to prevent CSRF.","research papers":"Our study demonstrates that the novel algorithm achieves 23% improvement in accuracy while reducing computational complexity by 40% compared to baseline methods.","legal contracts":"The licensee shall indemnify and hold harmless the licensor against all claims arising from unauthorized use. Breach of this provision may result in immediate termination.","API documentation":"Authentication requires JWT token in Authorization header. Rate limit: 1000 requests/hour. Endpoint: POST /api/v2/users. Returns 201 on success."}[o]||"Sample documentation text."}let a=async o=>{try{let p=JSON.parse(o);if(!p.problems||!Array.isArray(p.problems)||p.problems.length<3)throw new Error("Must identify at least 3 specific problems with the original prompt");if(!p.improvedPrompt||typeof p.improvedPrompt!="string")throw new Error("Missing 'improvedPrompt' field with your better version");if(!p.improvements||!Array.isArray(p.improvements)||p.improvements.length<3)throw new Error("Must list at least 3 specific improvements you made");if(p.problems.some($=>$.length<15))throw new Error("Each problem description must be specific (at least 15 characters)");if(p.improvedPrompt.length<d.failingPrompt.length+50)throw new Error(`Improved prompt too short. Original is ${d.failingPrompt.length} chars, improved is ${p.improvedPrompt.length} chars. Should add substantial detail.`);let y=p.improvedPrompt.toLowerCase();if(!(y.includes("format")||y.includes("structure")||y.includes("json")||y.includes("return")))throw new Error("Improved prompt must specify output format clearly");if(globalThis.aiPipeToken||(globalThis.aiPipeToken=prompt("Enter your AI Pipe Token")),mo!==p.improvedPrompt){let $=p.improvedPrompt.replace("[review]",d.testInput).replace("[ticket]",d.testInput).replace("[query]",d.testInput).replace("[doc]",d.testInput);$e=await(await fetch("https://aipipe.org/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${globalThis.aiPipeToken}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:$}]})})).json(),mo=p.improvedPrompt}let S=$e.choices?.[0]?.message?.content;if(!S)throw new Error(`LLM API error: ${JSON.stringify($e)}`);if(S.length<20)throw new Error(`Improved prompt produced very short output (${S.length} chars). May not be specific enough. Output was: ${S}`);if(p.improvements.some($=>$.length<20))throw new Error("Each improvement description must be detailed (at least 20 characters)");return!0}catch(p){throw p instanceof SyntaxError?new Error(`Invalid JSON: ${p.message}`):p}},s=zr`
    <div class="mb-3">
      <h4>Prompt Engineering for PromptOps</h4>
      <p>
        <strong>PromptOps</strong> is a company that helps enterprises optimize their AI implementations. They've found
        that poorly written prompts are the #1 cause of AI failures. Your task is to debug and improve a failing prompt
        used by a client.
      </p>

      <p><strong>Client's Task:</strong></p>
      <p>${d.task}</p>

      <p><strong>Their Current (Failing) Prompt:</strong></p>
      <pre><code>${d.failingPrompt}</code></pre>

      <p><strong>Problems They're Experiencing:</strong></p>
      <ul>
        <li>Inconsistent output format</li>
        <li>Missing required information</li>
        <li>AI misunderstanding the task</li>
        <li>Poor handling of edge cases</li>
      </ul>

      <p><strong>Example Input to Test With:</strong></p>
      <pre><code>${d.testInput}</code></pre>

      <p><strong>Your Task:</strong></p>
      <ol>
        <li>Identify at least 3 specific problems with the original prompt</li>
        <li>Write an improved prompt that addresses these issues</li>
        <li>List at least 3 specific improvements you made and why</li>
      </ol>

      <p><strong>Prompt Engineering Best Practices to Consider:</strong></p>
      <ul>
        <li><strong>Clarity:</strong> Be specific about what you want and what you don't want</li>
        <li><strong>Format:</strong> Specify exact output format (JSON structure, fields, types)</li>
        <li><strong>Examples:</strong> Provide 1-2 examples of ideal input → output</li>
        <li><strong>Constraints:</strong> State requirements and limitations explicitly</li>
        <li><strong>Edge Cases:</strong> Handle missing data, ambiguous input, errors</li>
        <li><strong>Context:</strong> Provide necessary background information</li>
        <li><strong>Chain of Thought:</strong> For complex tasks, ask for step-by-step reasoning</li>
      </ul>

      <p><strong>Response Format (JSON):</strong></p>
      <pre><code class="language-json">{
  "problems": [
    "Problem 1: The prompt doesn't specify the output format, leading to inconsistent responses",
    "Problem 2: No examples provided, so the AI has to guess what 'urgent' means",
    "Problem 3: Doesn't handle edge cases like missing information"
  ],
  "improvedPrompt": "Your improved prompt here. Be detailed. Include examples. Specify format. Add constraints. Handle edge cases. Make it clear and unambiguous.",
  "improvements": [
    "Added JSON schema specification so output is always structured correctly",
    "Included 2 examples showing high-urgency and low-urgency cases",
    "Added explicit instructions for handling missing or ambiguous information"
  ]
}</code></pre>

      <label for="${t}" class="form-label">
        Paste your JSON response with problems, improved prompt, and improvements:
      </label>
      <textarea class="form-control font-monospace" rows="15" id="${t}" name="${t}"></textarea>

      <p class="text-muted">
        <strong>Note:</strong> Your improved prompt will be tested with an actual LLM using the example input. Make
        sure it produces structured, consistent, accurate output. Use your <a href="https://aipipe.org/">AI Pipe</a>
        token when prompted.
      </p>
    </div>
  `;return{id:t,title:i,weight:u,question:s,answer:a}}var ho,mo,$e,go=A(()=>{"use strict";ho=R(L(),1)});var wo={};I(wo,{default:()=>Hr});import{html as yo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Hr({user:l,weight:u=2}){let t="q-ai-output-verification",i="Verify and Fix AI-Generated Code",n=(0,bo.default)(`${l.email}#${t}`),h=[()=>{let r=[{name:"discount and tax",bug:"subtract/add instead of multiply",correct:"multiply by (1-d/100)*(1+t/100)"},{name:"compound interest",bug:"simple instead of compound",correct:"P * (1 + r/100)^n"},{name:"average",bug:"sum without dividing",correct:"sum / count"},{name:"percentage change",bug:"wrong formula",correct:"((new - old) / old) * 100"}],a=r[Math.floor(n()*r.length)],s=Math.floor(n()*100)+50,o=Math.floor(n()*30)+5,p=Math.floor(n()*20)+5;return a.name==="discount and tax"?{description:`Calculate total price after applying a ${o}% discount and ${p}% tax.`,buggyCode:`function calculateTotal(price, discount, tax) {
  const afterDiscount = price - discount;
  const withTax = afterDiscount + tax;
  return withTax;
}`,testCases:[{input:[s,o,p],expected:s*(1-o/100)*(1+p/100),desc:`${o}% discount + ${p}% tax`},{input:[s*2,o,0],expected:s*2*(1-o/100),desc:"No tax"},{input:[s,0,p],expected:s*(1+p/100),desc:"No discount"},{input:[s/2,o+5,p-2],expected:s/2*(1-(o+5)/100)*(1+(p-2)/100),desc:"Different values"}],correctCode:`function calculateTotal(price, discount, tax) {
  const afterDiscount = price * (1 - discount / 100);
  const withTax = afterDiscount * (1 + tax / 100);
  return withTax;
}`}:a.name==="average"?{description:"Calculate the average of numbers in an array.",buggyCode:`function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}`,testCases:[{input:[[s,o,p]],expected:(s+o+p)/3,desc:"Three numbers"},{input:[[s]],expected:s,desc:"Single number"},{input:[[s,o]],expected:(s+o)/2,desc:"Two numbers"},{input:[[s,o,p,s]],expected:(s+o+p+s)/4,desc:"Four numbers"}],correctCode:`function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return numbers.length > 0 ? sum / numbers.length : 0;
}`}:a.name==="compound interest"?{description:`Calculate compound interest: Principal ${s}, Rate ${o}% per year, Time ${p} years.`,buggyCode:`function compoundInterest(principal, rate, time) {
  return principal + (principal * rate * time / 100);
}`,testCases:[{input:[s,o,p],expected:s*Math.pow(1+o/100,p),desc:`P=${s}, R=${o}%, T=${p}`},{input:[s*2,o,1],expected:s*2*(1+o/100),desc:"One year"},{input:[s,0,p],expected:s,desc:"Zero rate"},{input:[s,o,0],expected:s,desc:"Zero time"}],correctCode:`function compoundInterest(principal, rate, time) {
  return principal * Math.pow(1 + rate / 100, time);
}`}:{description:`Calculate percentage change from ${s} to ${o}.`,buggyCode:`function percentageChange(oldValue, newValue) {
  return (newValue - oldValue) * 100;
}`,testCases:[{input:[s,o],expected:(o-s)/s*100,desc:`From ${s} to ${o}`},{input:[s,s*2],expected:100,desc:"Double"},{input:[s*2,s],expected:-50,desc:"Half"},{input:[s,s],expected:0,desc:"No change"}],correctCode:`function percentageChange(oldValue, newValue) {
  return ((newValue - oldValue) / oldValue) * 100;
}`}},()=>{let r=["second largest","second smallest","most frequent","remove duplicates","find missing"],a=r[Math.floor(n()*r.length)],s=Array.from({length:5},()=>Math.floor(n()*20)+1);return a==="second largest"?{description:"Find the second largest unique number in an array. Return null if less than 2 unique numbers.",buggyCode:`function secondLargest(arr) {
  arr.sort();
  return arr[arr.length - 2];
}`,testCases:[{input:[s],expected:(()=>{let o=[...new Set(s)].sort((p,y)=>y-p);return o.length>=2?o[1]:null})(),desc:"Random array"},{input:[[10,10,10,5,3]],expected:5,desc:"With duplicates"},{input:[[7]],expected:null,desc:"Single element"},{input:[[4,4,4]],expected:null,desc:"All same"}],correctCode:`function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique.length >= 2 ? unique[1] : null;
}`}:a==="remove duplicates"?{description:"Remove duplicate values from an array, keeping first occurrence.",buggyCode:`function removeDuplicates(arr) {
  const result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}`,testCases:[{input:[[1,2,2,3,3,3]],expected:[1,2,3],desc:"Sequential duplicates"},{input:[[1,2,1,3,2]],expected:[1,2,3],desc:"Scattered duplicates"},{input:[[s[0]]],expected:[s[0]],desc:"Single element"},{input:[s.concat(s)],expected:[...new Set(s)],desc:"All duplicated"}],correctCode:`function removeDuplicates(arr) {
  return [...new Set(arr)];
}`}:a==="second smallest"?{description:"Find the second smallest unique number. Return null if less than 2 unique numbers.",buggyCode:`function secondSmallest(arr) {
  arr.sort();
  return arr[1];
}`,testCases:[{input:[s],expected:(()=>{let o=[...new Set(s)].sort((p,y)=>p-y);return o.length>=2?o[1]:null})(),desc:"Random array"},{input:[[5,3,10,3]],expected:5,desc:"With duplicates"},{input:[[7]],expected:null,desc:"Single element"}],correctCode:`function secondSmallest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => a - b);
  return unique.length >= 2 ? unique[1] : null;
}`}:a==="most frequent"?{description:"Find the most frequently occurring element. Return first if tie.",buggyCode:`function mostFrequent(arr) {
  let max = arr[0];
  for (let item of arr) {
    if (item > max) max = item;
  }
  return max;
}`,testCases:[{input:[[1,2,2,3]],expected:2,desc:"Clear winner"},{input:[[s[0],s[0],s[1]]],expected:s[0],desc:"First wins"},{input:[[5]],expected:5,desc:"Single element"}],correctCode:`function mostFrequent(arr) {
  const freq = {};
  for (const item of arr) freq[item] = (freq[item] || 0) + 1;
  let max = arr[0], maxCount = 0;
  for (const [item, count] of Object.entries(freq)) {
    if (count > maxCount) { maxCount = count; max = Number(item); }
  }
  return max;
}`}:{description:"Find missing number in sequence 1 to n+1.",buggyCode:`function findMissing(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr[i] === undefined) return i;
  }
}`,testCases:[{input:[[1,2,4,5]],expected:3,desc:"Missing middle"},{input:[[2,3,4,5]],expected:1,desc:"Missing first"},{input:[[1,2,3,4]],expected:5,desc:"Missing last"}],correctCode:`function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}`}},()=>{let r=["email","url","phone","password"],a=r[Math.floor(n()*r.length)];if(a==="email")return{description:"Validate email: needs @ with text before/after, and dot after @.",buggyCode:`function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}`,testCases:[{input:["user@example.com"],expected:!0,desc:"Valid"},{input:["@example.com"],expected:!1,desc:"Missing username"},{input:["user@.com"],expected:!1,desc:"Missing domain"},{input:["user@domain"],expected:!1,desc:"Missing TLD"}],correctCode:`function isValidEmail(email) {
  const parts = email.split('@');
  if (parts.length !== 2 || parts[0].length === 0) return false;
  return parts[1].includes('.') && parts[1].indexOf('.') > 0;
}`};if(a==="password"){let s=Math.floor(n()*4)+6;return{description:`Validate password: at least ${s} chars, has uppercase, lowercase, and digit.`,buggyCode:`function isValidPassword(pwd) {
  return pwd.length >= ${s};
}`,testCases:[{input:["Abc123xy"],expected:!0,desc:"Valid password"},{input:["abc123"],expected:!1,desc:"No uppercase"},{input:["ABCDEF"],expected:!1,desc:"No lowercase or digit"},{input:["Ab1"],expected:!1,desc:"Too short"}],correctCode:`function isValidPassword(pwd) {
  return pwd.length >= ${s} &&
         /[A-Z]/.test(pwd) &&
         /[a-z]/.test(pwd) &&
         /\\d/.test(pwd);
}`}}else return a==="url"?{description:"Validate URL: must start with http:// or https:// and have a domain.",buggyCode:`function isValidUrl(url) {
  return url.includes('http');
}`,testCases:[{input:["https://example.com"],expected:!0,desc:"Valid HTTPS"},{input:["http://test.org"],expected:!0,desc:"Valid HTTP"},{input:["example.com"],expected:!1,desc:"No protocol"},{input:["https://"],expected:!1,desc:"No domain"}],correctCode:`function isValidUrl(url) {
  return (url.startsWith('http://') || url.startsWith('https://')) &&
         url.length > 8 && url.indexOf('/', 8) !== 8;
}`}:{description:"Validate phone: exactly 10 digits, optional dashes.",buggyCode:`function isValidPhone(phone) {
  return phone.length === 10;
}`,testCases:[{input:["1234567890"],expected:!0,desc:"Valid 10 digits"},{input:["123-456-7890"],expected:!0,desc:"With dashes"},{input:["12345"],expected:!1,desc:"Too short"},{input:["123456789a"],expected:!1,desc:"Contains letter"}],correctCode:`function isValidPhone(phone) {
  const digits = phone.replace(/-/g, '');
  return digits.length === 10 && /^\\d+$/.test(digits);
}`}},()=>{let r=["word frequency","group by","flatten","deep clone"],a=r[Math.floor(n()*r.length)];return a==="word frequency"?{description:"Count word frequency (case-insensitive). Return object with word: count.",buggyCode:`function wordFrequency(text) {
  const words = text.split(' ');
  const freq = {};
  for (const word of words) {
    freq[word] = freq[word] + 1;
  }
  return freq;
}`,testCases:[{input:["hello world hello"],expected:{hello:2,world:1},desc:"Simple"},{input:["Hello WORLD hello"],expected:{hello:2,world:1},desc:"Mixed case"},{input:["one"],expected:{one:1},desc:"Single word"},{input:["test  test"],expected:{test:2},desc:"Multiple spaces"}],correctCode:`function wordFrequency(text) {
  const words = text.toLowerCase().split(/\\s+/).filter(w => w.length > 0);
  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
}`}:a==="flatten"?{description:"Flatten a nested array to a single level.",buggyCode:`function flatten(arr) {
  return arr.flat();
}`,testCases:[{input:[[[1,2],[3,4]]],expected:[1,2,3,4],desc:"2 levels"},{input:[[[1,[2,3]],4]],expected:[1,2,3,4],desc:"3 levels"},{input:[[1,2,3]],expected:[1,2,3],desc:"Already flat"},{input:[[[[[5]]]]],expected:[5],desc:"Deeply nested"}],correctCode:`function flatten(arr) {
  return arr.flat(Infinity);
}`}:a==="group by"?{description:"Group array of objects by a key property.",buggyCode:`function groupBy(arr, key) {
  const groups = {};
  for (const item of arr) {
    groups[key] = item;
  }
  return groups;
}`,testCases:[{input:[[{type:"a",val:1},{type:"b",val:2},{type:"a",val:3}],"type"],expected:{a:[{type:"a",val:1},{type:"a",val:3}],b:[{type:"b",val:2}]},desc:"Group by type"}],correctCode:`function groupBy(arr, key) {
  const groups = {};
  for (const item of arr) {
    const k = item[key];
    if (!groups[k]) groups[k] = [];
    groups[k].push(item);
  }
  return groups;
}`}:{description:"Deep clone an object (nested objects and arrays).",buggyCode:`function deepClone(obj) {
  return Object.assign({}, obj);
}`,testCases:[{input:[{a:1,b:{c:2}}],expected:{a:1,b:{c:2}},desc:"Nested object"}],correctCode:`function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`}}],d=h[Math.floor(n()*h.length)],e=d(),c=async r=>{try{let a=JSON.parse(r);if(!a.bugs||!Array.isArray(a.bugs)||a.bugs.length===0)throw new Error("Missing 'bugs' field. Must be an array listing the bugs found (at least 1). Example: ['Not converting percentages', 'Not handling edge case']");if(!a.fixedCode||typeof a.fixedCode!="string")throw new Error("Missing 'fixedCode' field with corrected JavaScript function");if(!a.testStrategy||typeof a.testStrategy!="string")throw new Error("Missing 'testStrategy' field explaining how you'd test this function");if(a.bugs.some(b=>b.length<10))throw new Error("Each bug description must be specific (at least 10 characters)");let s;try{let b=e.buggyCode.match(/function\s+(\w+)/)?.[1];if(!b)throw new Error("Could not extract function name");s=new Function(`${a.fixedCode}
return ${b};`)()}catch(b){throw new Error(`Fixed code has syntax errors: ${b.message}`)}let o=[];for(let b of e.testCases)try{let S=s(...b.input),$=b.expected,f=!1;typeof $=="object"&&$!==null?f=JSON.stringify(S)===JSON.stringify($):f=Math.abs(S-$)<.01||S===$,f||o.push(`Test failed: ${b.desc}. Expected ${JSON.stringify($)}, got ${JSON.stringify(S)}`)}catch(S){o.push(`Test crashed: ${b.desc}. Error: ${S.message}`)}if(o.length>0)throw new Error(`Fixed code still has bugs:
${o.join(`
`)}`);let p=a.testStrategy.toLowerCase();if(!(p.includes("edge")||p.includes("boundary")||p.includes("corner")||p.includes("empty")||p.includes("null")||p.includes("zero")))throw new Error("Test strategy must mention edge cases, boundary conditions, or corner cases");if(a.testStrategy.length<80)throw new Error("Test strategy must be detailed (at least 80 characters)");return!0}catch(a){throw a instanceof SyntaxError?new Error(`Invalid JSON: ${a.message}`):a}},m=yo`
    <div class="mb-3">
      <h4>Debugging AI-Generated Code at DevShield</h4>
      <p>
        <strong>DevShield</strong> is a code review automation company that uses AI to generate code suggestions.
        However, they've found that AI-generated code often contains subtle bugs that pass initial review but fail in
        production. They need engineers who can spot these issues, write comprehensive tests, and fix the problems.
      </p>

      <p><strong>Scenario:</strong></p>
      <p>${e.description}</p>

      <p><strong>AI Generated this code:</strong></p>
      <pre><code class="language-javascript">${e.buggyCode}</code></pre>

      <p><strong>Your Task:</strong></p>
      <ol>
        <li>Identify all bugs in the code (there are multiple)</li>
        <li>Write a corrected version that passes all test cases</li>
        <li>Describe your testing strategy to verify the fix</li>
      </ol>

      <p><strong>Test Cases to Pass:</strong></p>
      <ul>
        ${e.testCases.map(r=>yo` <li><code>${JSON.stringify(r.input)}</code> → <code>${JSON.stringify(r.expected)}</code></li> `)}
      </ul>

      <p><strong>Response Format (JSON):</strong></p>
      <pre><code class="language-json">{
  "bugs": [
    "Bug 1: Specific description of the first bug",
    "Bug 2: Specific description of the second bug",
    "Bug 3: Description of edge case not handled"
  ],
  "fixedCode": "function name(params) { /* corrected code */ }",
  "testStrategy": "I would test this by: checking edge cases like empty inputs, null values, negative numbers, etc. I would also test boundary conditions and verify the function handles all expected input types correctly. I would write unit tests for each test case and add additional tests for corner cases."
}</code></pre>

      <label for="${t}" class="form-label">
        Paste your JSON response with bug list, fixed code, and test strategy:
      </label>
      <textarea class="form-control font-monospace" rows="15" id="${t}" name="${t}"></textarea>

      <p class="text-muted">
        <strong>Important:</strong> Your fixed code will be automatically tested against all test cases. Make sure it
        handles edge cases correctly. Your test strategy should be specific about what types of tests you'd write and
        why.
      </p>
    </div>
  `;return{id:t,title:i,weight:u,question:m,answer:c}}var bo,xo=A(()=>{"use strict";bo=R(L(),1)});import{html as K,render as ko}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Ne(l,u){let t=K`<ol class="mt-3">
    ${l.map(({id:h,title:d,weight:e})=>K`<li><a href="#h${h}">${d}</a> (${e} ${e==1?"mark":"marks"})</li>`)}
  </ol>`,i=[K`<h1 class="display-6">Questions</h1>`,t,...l.map(({id:h,title:d,weight:e,question:c,help:m},r)=>(m&&!Array.isArray(m)&&(m=[m]),K`
        <div class="card my-5" data-question="${h}" id="h${h}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${r+1}</span>
            ${d} (${e} ${e==1?"mark":"marks"})
          </div>
          ${m?m.map(a=>K`<div class="card-body border-bottom">${a}</div>`):""}
          <div class="card-body">${c}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${h}">Check</button>
          </div>
        </div>
      `))],n={index:t,questions:i};for(let[h,d]of u)ko(n[d],h)}async function ss(l,u){let t=[{...await Promise.resolve().then(()=>(Ie(),Me)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Xe(),Ke)).then(i=>i.default({user:l,weight:2}))},{...await Promise.resolve().then(()=>(et(),Ze)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(st(),nt)).then(i=>i.default({user:l,weight:2}))},{...await Promise.resolve().then(()=>(pt(),ut)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(xt(),wt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(St(),vt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Mt(),Nt)).then(i=>i.default({user:l,weight:2}))},{...await Promise.resolve().then(()=>(Ot(),It)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Rt(),Lt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(_t(),Pt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Dt(),jt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Vt(),Ht)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(Wt(),Gt)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(to(),eo)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(no(),ro)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(co(),ao)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(po(),uo)).then(i=>i.default({user:l,weight:1}))},{...await Promise.resolve().then(()=>(go(),fo)).then(i=>i.default({user:l,weight:2}))},{...await Promise.resolve().then(()=>(xo(),wo)).then(i=>i.default({user:l,weight:2}))}];return Ne(t,u),Object.fromEntries(t.map(({id:i,...n})=>[i,n]))}export{ss as questions};
