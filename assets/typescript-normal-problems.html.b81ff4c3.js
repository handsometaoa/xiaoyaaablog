import{r as e,o,a as c,b as s,d as n,e as t,F as l,c as p}from"./app.7138fe66.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const u={},i=s("h1",{id:"typescript-\u5E38\u89C1\u95EE\u9898",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript-\u5E38\u89C1\u95EE\u9898","aria-hidden":"true"},"#"),n(" TypeScript \u5E38\u89C1\u95EE\u9898")],-1),k=s("h2",{id:"\u8FC7\u91CF\u5C5E\u6027\u68C0\u6D4B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8FC7\u91CF\u5C5E\u6027\u68C0\u6D4B","aria-hidden":"true"},"#"),n(" \u8FC7\u91CF\u5C5E\u6027\u68C0\u6D4B")],-1),d={href:"https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createSquare</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> SquareConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> area<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> config<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    area<span class="token operator">:</span> config<span class="token punctuation">.</span>width <span class="token operator">?</span> config<span class="token punctuation">.</span>width <span class="token operator">*</span> config<span class="token punctuation">.</span>width <span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> colour<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>

<span class="token function">createSquare</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token comment">// OK</span>
<span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span> colour<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// ERROR</span>
</code></pre></div>`,1),h={href:"https://github.com/Microsoft/TypeScript/pull/3823",target:"_blank",rel:"noopener noreferrer"},m=s("h3",{id:"\u7591\u60D1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7591\u60D1","aria-hidden":"true"},"#"),n(" \u7591\u60D1")],-1),f={href:"https://stackoverflow.com/questions/52234014/in-typescript-why-is-it-that-an-object-cannot-specify-excess-properties-on-assi?rq=1",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>\u89E3\u91CA\u4F3C\u4E4E\u5F88\u6709\u9053\u7406\uFF0C\u5BF9\u8C61\u5B57\u9762\u91CF\u4EC5\u5728\u6B64\u5904\u4F7F\u7528\uFF0C\u5E94\u5F53\u4E25\u683C\u9650\u5236\uFF0C\u800C\u5F15\u7528\u7684\u5BF9\u8C61\u53EF\u80FD\u6765\u81EA\u5176\u4ED6\u5730\u65B9\uFF0C\u5982\u679C\u4F60\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\u90A3\u4E48\u53EF\u80FD\u9020\u6210\u5176\u4F59\u5730\u65B9\u51FA\u73B0\u95EE\u9898\u3002</p><h2 id="\u63D0\u4F9B-js-\u540E\u7F00" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4F9B-js-\u540E\u7F00" aria-hidden="true">#</a> \u63D0\u4F9B js \u540E\u7F00</h2><p>\u5728 HTML \u4E2D\u4F7F\u7528 <code>type=&quot;module&quot;</code> \u65F6\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>Hello Module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5176\u4E2D\uFF0C<code>index.js</code> \u7531 <code>tsc</code> \u751F\u6210\uFF0C\u5176\u4E2D\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>
</code></pre></div><p>\u7F16\u8BD1\u540E\u5F97\u5230\u7684\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> method1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./modules/m1&quot;</span>
</code></pre></div><p>\u7531\u4E8E\u7F3A\u4E4F\u540E\u7F00\u540D\u79F0\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u8BBF\u95EE\u65F6\u81EA\u7136\u5C31 404 \u4E86\u3002</p><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h3><p>\u76F4\u63A5\u589E\u52A0 <code>.ts</code> \u540E\u7F00\uFF1F\u90A3\u4E48\u5F88\u660E\u663E\u4F1A\u5F97\u5230 <code>\u5BFC\u5165\u8DEF\u5F84\u4E0D\u80FD\u4EE5\u201C.ts\u201D\u6269\u5C55\u540D\u7ED3\u675F\u3002</code> \u7684\u9519\u8BEF\u3002</p>`,11),b={href:"https://segmentfault.com/q/1010000038671707#",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,".js",-1),x={href:"https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339",target:"_blank",rel:"noopener noreferrer"};function q(w,v){const a=e("OutboundLink");return o(),c(l,null,[i,k,s("p",null,[n("\u770B\u4E0B\u5B98\u7F51\u7684"),s("a",d,[n("\u793A\u4F8B"),t(a)]),n("\uFF1A")]),g,s("p",null,[n("\u5728 "),s("a",h,[n("Strict object literal assignment checking"),t(a)]),n(" \u5E94\u8BE5\u662F\u7279\u5730\u4E3A\u5BF9\u8C61\u5B57\u9762\u91CF\u589E\u52A0\u4E86\u4E25\u683C\u6A21\u5F0F\u3002")]),m,s("p",null,[n("\u4E3A\u4EC0\u4E48\u4EC5\u4E3A\u5BF9\u8C61\u5B57\u9762\u91CF\u589E\u52A0\u4E25\u683C\u6A21\u5F0F\u5462\uFF0CSF \u4E2D\u6709\u4E00\u4E2A"),s("a",f,[n("\u63A2\u8BA8"),t(a)]),n("\u3002")]),_,s("p",null,[n("\u6839\u636E "),s("a",b,[n("TypeScript \u7F16\u8BD1\u5668 tsc \u547D\u4EE4\u80FD\u591F\u81EA\u52A8\u8865\u5168\u5B8C\u6574\u7684 js \u540E\u7F00\uFF1F"),t(a)]),n(" \u5728\u5BFC\u5165\u65F6\u589E\u52A0 "),y,n(" \u540E\u7F00\uFF0C\u6700\u540E\u751F\u6548\u4E86\u3002")]),s("p",null,[n("TypeScript \u793E\u533A\u4E5F\u5BF9\u6B64\u8FDB\u884C\u4E86\u957F\u671F\u7684\u8BA8\u8BBA\uFF0C\u5E76\u7ED9\u51FA\u4E86\u4E00\u4EFD"),s("a",x,[n("\u603B\u7ED3"),t(a)]),n("\u3002")])],64)}var T=r(u,[["render",q]]);export{T as default};
