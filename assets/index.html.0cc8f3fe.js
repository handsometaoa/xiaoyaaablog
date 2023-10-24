import{r as o,o as r,a as c,b as n,d as a,e,F as p,c as t}from"./app.7138fe66.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=n("h1",{id:"\u5FEB\u901F\u5C1D\u9C9C-nodejs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5C1D\u9C9C-nodejs","aria-hidden":"true"},"#"),a(" \u5FEB\u901F\u5C1D\u9C9C NodeJS")],-1),h=n("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),a(" \u5B89\u88C5")],-1),m={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"nvm",-1),k=t(`<h3 id="_1-\u5B89\u88C5-nvm" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-nvm" aria-hidden="true">#</a> 1. \u5B89\u88C5 nvm</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u811A\u672C(\u5177\u4F53\u7248\u672C\u53EF\u770B\u5B98\u7F51)</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># \u9A8C\u8BC1\u5B89\u88C5</span>
nvm <span class="token parameter variable">--version</span> <span class="token comment"># \u82E5\u5931\u8D25\u9700\u6267\u884C \`source ~/.bashrc\` \u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548</span>
<span class="token comment"># 0.34.0</span>
</code></pre></div><h3 id="_2-\u5B89\u88C5-node" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5-node" aria-hidden="true">#</a> 2. \u5B89\u88C5 node</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D</span>
nvm <span class="token function">ls</span>

<span class="token comment"># \u67E5\u770B\u53EF\u7528</span>
nvm ls-remote

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C</span>
nvm <span class="token function">install</span> v12.16.3

<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C</span>
nvm <span class="token builtin class-name">alias</span> default v12.16.3

<span class="token comment"># \u9A8C\u8BC1 node</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># v12.16.3</span>

<span class="token comment"># \u5207\u6362\u7248\u672C</span>
nvm use v13.13.0
</code></pre></div><p>\u5F53\u4E0B\u8F7D\u901F\u5EA6\u4E0D\u591F\u7406\u60F3\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4FEE\u6539 <code>~/.curlrc</code> \u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># socks5</span>
socks5 <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:1080&quot;</span>
<span class="token comment"># \u6216 http</span>
proxy <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:9999&quot;</span>
</code></pre></div>`,6),b=n("code",null,"nvm",-1),_={href:"https://stackoverflow.com/questions/42244572/nvm-proxy-settings-configuration-file",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"node",-1),f=n("h3",{id:"_3-nvm-\u5168\u5C40\u5305\u8FC1\u79FB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-nvm-\u5168\u5C40\u5305\u8FC1\u79FB","aria-hidden":"true"},"#"),a(" 3. nvm \u5168\u5C40\u5305\u8FC1\u79FB")],-1),x={href:"https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> v12.16.3 --reinstall-packages-from<span class="token operator">=</span>v12.4.0
</code></pre></div><p>\u5728\u5229\u7528 <code>npm install -g npm</code> \u5347\u7EA7\u65F6\u540C\u6837\u4F1A\u5BFC\u81F4\u5168\u5C40\u5305\u4E22\u5931\uFF0C\u6240\u4EE5\u5728\u4EFB\u4F55\u60C5\u51B5\u90FD\u5E94\u8BE5\u901A\u8FC7 <code>nvm</code> \u5347\u7EA7\u3002</p><h2 id="\u5207\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u6E90" aria-hidden="true">#</a> \u5207\u6362\u6E90</h2><p>\u5728\u7F3A\u4E4F\u4EE3\u7406\u7684\u60C5\u51B5\u4E0B npm \u9ED8\u8BA4\u6E90\u7684\u901F\u5EA6\u4F1A\u6BD4\u8F83\u6162\uFF0C\u8BBE\u7F6E\u4E3A\u6DD8\u5B9D\u6E90\u4F1A\u6709\u6BD4\u8F83\u7406\u60F3\u7684\u901F\u5EA6\uFF1B\u5728\u79C1\u5EFA npm \u670D\u52A1\u7684\u60C5\u51B5\u4E0B\uFF0C\u6709\u65F6\u90E8\u5206\u4F9D\u8D56\u5305\u9700\u8981\u53BB\u79C1\u670D\u4E0B\u8F7D\uFF0C\u9891\u7E41\u5207\u6362\u4E5F\u4F1A\u9EBB\u70E6\u3002</p>`,4),y={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},N=t(`<p>\u5F53\u7136\uFF0Cnpm \u4E5F\u81EA\u5E26\u4E86\u8BBE\u7F6E\u6E90\u7684\u670D\u52A1\uFF0C\u4F46\u6BD5\u7ADF\u4F7F\u7528\u8D77\u6765\u8F83\u4E3A\u9EBB\u70E6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre></div><h3 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h3><p>nrm \u4E5F\u662F <code>Node.js</code> \u6A21\u5757\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> nrm
</code></pre></div><h3 id="_2-\u67E5\u770B\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u6E90" aria-hidden="true">#</a> 2. \u67E5\u770B\u6E90</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm <span class="token function">ls</span>

<span class="token comment"># * npm ---- https://registry.npmjs.org/</span>
<span class="token comment">#  cnpm --- http://r.cnpmjs.org/</span>
<span class="token comment">#  taobao - https://registry.npm.taobao.org/</span>
<span class="token comment">#  nj ----- https://registry.nodejitsu.com/</span>
<span class="token comment">#  npmMirror  https://skimdb.npmjs.com/registry/</span>
<span class="token comment">#  edunpm - http://registry.enpmjs.org/</span>
</code></pre></div><h3 id="_3-\u6D4B\u901F" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4B\u901F" aria-hidden="true">#</a> 3. \u6D4B\u901F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm <span class="token builtin class-name">test</span>
<span class="token comment"># * npm ---- 1837ms</span>
<span class="token comment">#  cnpm --- 1050ms</span>
<span class="token comment">#  taobao - 125ms</span>
<span class="token comment">#  nj ----- Fetch Error</span>
<span class="token comment">#  npmMirror  3027ms</span>
<span class="token comment">#  edunpm - Fetch Error</span>
</code></pre></div><h3 id="_4-\u5207\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#_4-\u5207\u6362\u6E90" aria-hidden="true">#</a> 4. \u5207\u6362\u6E90</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm use taobao
</code></pre></div><h2 id="\u4E00\u4E9B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u547D\u4EE4" aria-hidden="true">#</a> \u4E00\u4E9B\u547D\u4EE4</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5B89\u88C5\u5728\u5168\u5C40 npm \u5305</span>
<span class="token function">npm</span> list <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span> <span class="token number">0</span>

<span class="token comment"># npm install \u5931\u8D25\u65F6\u5F3A\u5236\u6E05\u7406</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,14),q={href:"https://nodejs.org/dist/latest-v10.x/docs/api/",target:"_blank",rel:"noopener noreferrer"};function w(F,V){const s=o("OutboundLink");return r(),c(p,null,[d,h,n("p",null,[a("\u867D\u7136\u53EF\u4EE5\u76F4\u63A5\u4ECE "),n("a",m,[a("Node \u5B98\u7F51"),e(s)]),a(" \u4E0B\u8F7D\u5E76\u5B89\u88C5\u5B83\uFF0C\u4F46\u66F4\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\u662F\u5229\u7528 "),n("a",u,[a("nvm"),e(s)]),a(" \u6765\u5904\u7406\u5B83\uFF0C\u56E0\u4E3A "),g,a(" \u8FD8\u63D0\u4F9B\u4E86\u591A\u7248\u672C\u7684\u5171\u5B58\u7684\u89E3\u51B3\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u6377\u7684\u5207\u6362\u3001\u5C1D\u9C9C\u3002")]),k,n("p",null,[a("\u8FD9\u662F\u56E0\u4E3A "),b,a(" \u901A\u8FC7 "),n("a",_,[a("curl"),e(s)]),a(" \u6765\u5B89\u88C5 "),v,a("\u3002")]),f,n("p",null,[a("\u5728 windows \u4E0B\u4F7F\u7528\u65F6\u5207\u6362 node \u7248\u672C\u5168\u5C40\u5305\u4E0D\u4F1A\u4E22\u5931\uFF0C\u800C\u5728 manjaro \u4E0B\u4F7F\u7528\u65F6\u9047\u5230\u4E86\u8BE5\u60C5\u51B5\uFF0C\u53EF\u5229\u7528 "),n("a",x,[a("--reinstall-packages-from"),e(s)]),a(" \u89E3\u51B3\u3002")]),j,n("p",null,[a("\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 "),n("a",y,[a("nrm"),e(s)]),a(" \u5FEB\u901F\u5207\u6362\u6E90\u6765\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u4E86\u3002")]),N,n("ol",null,[n("li",null,[n("a",q,[a("Node.js"),e(s)])])])],64)}var L=l(i,[["render",w]]);export{L as default};
