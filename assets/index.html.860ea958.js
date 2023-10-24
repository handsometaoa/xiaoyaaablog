import{r,o as t,a as o,b as e,d as s,e as n,F as c,c as i}from"./app.7138fe66.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const d={},p=i(`<h1 id="\u5FEB\u901F\u5C1D\u8BD5-redis" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5C1D\u8BD5-redis" aria-hidden="true">#</a> \u5FEB\u901F\u5C1D\u8BD5 Redis</h1><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis <span class="token function">sh</span>
</code></pre></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 cli</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-redis redis-cli

<span class="token comment"># \u83B7\u53D6\u6240\u6709 keys</span>
KEYS *

<span class="token comment"># \u6E05\u7A7A\u6240\u6709</span>
FLUSHALL
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,5),h={href:"https://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"};function m(_,k){const a=r("OutboundLink");return t(),o(c,null,[p,e("ol",null,[e("li",null,[e("a",h,[s("Redis"),n(a)])]),e("li",null,[e("a",u,[s("Redis \u547D\u4EE4"),n(a)])])])],64)}var x=l(d,[["render",m]]);export{x as default};
