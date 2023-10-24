import{r as p,o,a as r,b as s,d as n,e as t,F as c,c as a}from"./app.7138fe66.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=a(`<h1 id="eslint-\u5728-typescript-\u672A\u80FD\u597D\u597D\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#eslint-\u5728-typescript-\u672A\u80FD\u597D\u597D\u5DE5\u4F5C" aria-hidden="true">#</a> ESLint \u5728 TypeScript \u672A\u80FD\u597D\u597D\u5DE5\u4F5C</h1><p>ESLint \u7684\u63D0\u793A\u5728 TypeScript \u4E0B\u6CA1\u6709\u597D\u597D\u5DE5\u4F5C\u3002</p><h2 id="enum-is-defined-but-never-used" tabindex="-1"><a class="header-anchor" href="#enum-is-defined-but-never-used" aria-hidden="true">#</a> enum is defined but never used</h2><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">// xxx is defined but never used. eslint(no-unused-vars)</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> UserRole <span class="token punctuation">{</span>
  <span class="token constant">USER</span> <span class="token operator">=</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),d={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="cannot-read-property-loc-of-undefined" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-loc-of-undefined" aria-hidden="true">#</a> Cannot read property &#39;loc&#39; of undefined</h2>`,2),y={href:"https://github.com/microsoft/vscode-eslint/issues/1149",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;indent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">2</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="cannot-read-property-body-of-null" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-body-of-null" aria-hidden="true">#</a> Cannot read property &#39;body&#39; of null</h2><div class="language-tsx ext-tsx"><pre class="language-tsx"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function h(f,m){const e=p("OutboundLink");return o(),r(c,null,[u,s("p",null,[n("\u8FD9\u65F6\u8BE5\u4F7F\u7528 "),s("a",d,[n("TypeScript"),t(e)]),n(" \u7684\u89C4\u5219\u53D6\u800C\u4EE3\u4E4B\uFF1A")]),k,s("p",null,[n("\u53C2\u8003 "),s("a",y,[n("Cannot read property 'loc' of undefined"),t(e)]),n(" \u4FEE\u6539\uFF1A")]),g],64)}var v=l(i,[["render",h]]);export{v as default};
