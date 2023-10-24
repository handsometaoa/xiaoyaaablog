import{r as o,o as p,a as e,b as n,d as a,e as t,F as c,c as l}from"./app.7138fe66.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const u={},k=l(`<h1 id="\u4E8B\u4EF6\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u961F\u5217" aria-hidden="true">#</a> \u4E8B\u4EF6\u961F\u5217</h1><h2 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B</h2><h3 id="_1-\u5B8F\u4EFB\u52A1-macro-task" tabindex="-1"><a class="header-anchor" href="#_1-\u5B8F\u4EFB\u52A1-macro-task" aria-hidden="true">#</a> 1. \u5B8F\u4EFB\u52A1\uFF08macro task\uFF09</h3><ul><li>script</li><li>I/O</li><li>xhr</li><li>setTimeout</li><li>setInterval</li><li>setImmediate(Node)</li><li>requestAnimationFrame(Browser)</li></ul><h3 id="_2-\u5FAE\u4EFB\u52A1-micro-task" tabindex="-1"><a class="header-anchor" href="#_2-\u5FAE\u4EFB\u52A1-micro-task" aria-hidden="true">#</a> 2. \u5FAE\u4EFB\u52A1\uFF08micro task\uFF09</h3><ul><li>Promise</li><li>MutationObserve(Browser)</li><li>process.nextTick(Node)</li></ul><h3 id="_3-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u4ED6" aria-hidden="true">#</a> 3. \u5176\u4ED6</h3><ul><li>UI rendering(Browser)\uFF0C\u5176\u4F1A\u5728 <code>microtask queue</code> \u4E4B\u540E\uFF0C<code>macrotask queue</code> \u4E4B\u524D</li></ul><h2 id="browser-event-loop" tabindex="-1"><a class="header-anchor" href="#browser-event-loop" aria-hidden="true">#</a> Browser Event Loop</h2><p>\u57FA\u672C\u64CD\u4F5C\u4E3A\uFF0C\u5148\u6267\u884C<strong>\u4E00\u4E2A</strong> <code>macro task</code>\uFF0C\u8FC7\u7A0B\u4E2D\u9047\u5230 <code>micro task</code> \u65F6\uFF0C\u5C06\u5176\u653E\u5230 <code>micro task</code> \u7684\u4E8B\u4EF6\u961F\u5217\u4E2D\uFF0C\u5F53\u524D <code>macro task</code> \u6267\u884C\u5B8C\u6210\u540E\uFF0C\u67E5\u770B <code>micro task</code> \u7684\u4E8B\u4EF6\u961F\u5217\uFF0C\u4F9D\u6B21\u6267\u884C <code>micro task</code>\u3002\u5982\u679C\u8FD8\u6709 <code>macro task</code>\uFF0C\u518D\u6267\u884C<strong>\u4E0B\u4E00\u4E2A</strong> <code>macro task</code>\u3002</p><ol><li>\u540C\u6B65\u4EE3\u7801</li><li>\u6267\u884C\u5B8C\u6240\u6709\u540C\u6B65\u4EE3\u7801\u540E\uFF0C\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u67E5\u8BE2\u662F\u5426\u6709\u5F02\u6B65\u4EE3\u7801\u9700\u8981\u6267\u884C</li><li>\u6267\u884C <code>microtask</code>\uFF0C\u5982\u679C\u5728\u6267\u884C <code>microtask</code> \u7684\u8FC7\u7A0B\u4E2D\u53C8\u4EA7\u751F\u4E86 <code>microtask</code>\uFF0C\u90A3\u4E48\u90A3\u4E48\u4F1A\u52A0\u5165\u5230\u961F\u5217\u7684\u961F\u5C3E\uFF0C\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5468\u671F\u88AB\u8C03\u7528\u6267\u884C</li><li>\u6267\u884C\u5B8C\u6240\u6709\u5FAE\u4EFB\u52A1\u540E\uFF0C\u5982\u6709\u5FC5\u8981\u4F1A\u6E32\u67D3\u9875\u9762 <ol><li>\u5224\u65AD <code>document</code> \u662F\u5426\u9700\u8981\u66F4\u65B0\uFF0C\u6D4F\u89C8\u5668\u662F 60Hz \u7684\u5237\u65B0\u7387\uFF0C\u6BCF 16.6ms \u624D\u4F1A\u66F4\u65B0\u4E00\u6B21</li><li>\u5224\u65AD\u662F\u5426\u6709 <code>resize</code> \u6216 <code>scroll</code> \u4E8B\u4EF6\uFF0C\u6709\u7684\u8BDD\u4F1A\u53BB\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6240\u4EE5\u5B83\u4EEC\u4E5F\u81F3\u5C11 16.6ms \u624D\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u81EA\u5E26\u8282\u6D41</li><li>\u5224\u65AD\u662F\u5426\u89E6\u53D1\u4E86 media query</li><li>\u66F4\u65B0\u52A8\u753B\u5E76\u4E14\u53D1\u9001\u4E8B\u4EF6</li><li>\u5224\u65AD\u662F\u5426\u6709\u5168\u5C4F\u64CD\u4F5C\u4E8B\u4EF6</li><li>\u6267\u884C <code>requestAnimationFrame</code> \u56DE\u8C03</li><li>\u6267\u884C <code>intersectionObserve</code> \u56DE\u8C03\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5224\u65AD\u5143\u7D20\u662F\u5426\u53EF\u89C1\uFF0C\u53EF\u4EE5\u7528\u4E8E\u61D2\u52A0\u8F7D\u4E0A\uFF0C\u4F46\u662F\u517C\u5BB9\u6027\u4E0D\u597D</li><li>\u66F4\u65B0\u754C\u9762</li></ol></li><li>\u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E Event Loop\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F <code>setTimeout</code> \u4E2D\u7684\u56DE\u8C03\u51FD\u6570</li></ol><h2 id="node-event-loop" tabindex="-1"><a class="header-anchor" href="#node-event-loop" aria-hidden="true">#</a> Node Event Loop</h2><p>\u7B80\u5316\u6982\u89C8\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u250C\u2500&gt;\u2502           timers          \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502     pending callbacks     \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502       idle, prepare       \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502   incoming:   \u2502
\u2502  \u2502           poll            \u2502&lt;\u2500\u2500\u2500\u2500\u2500\u2524  connections, \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2502   data, etc.  \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u2502           check           \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2514\u2500\u2500\u2524      close callbacks      \u2502
   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre></div><p>\u9636\u6BB5\u6982\u8FF0\uFF1A</p><ul><li>timers\uFF1A\u672C\u9636\u6BB5\u6267\u884C\u5DF2\u7ECF\u88AB <code>setTimeout</code> \u548C <code>setInterval</code> \u8C03\u5EA6\u7684\u56DE\u8C03\u51FD\u6570</li><li>I/O callbacks\uFF1A\u6267\u884C\u5EF6\u8FDF\u5230\u4E0B\u4E00\u4E2A\u5FAA\u73AF\u8FED\u4EE3\u7684 I/O \u56DE\u8C03</li><li>idle\u3001prepare\uFF1A\u4EC5\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528</li><li>poll\uFF1A\u68C0\u7D22\u65B0\u7684 I/O \u4E8B\u4EF6\uFF1B\u6267\u884C\u4E0E I/O \u76F8\u5173\u7684\u56DE\u8C03\uFF08\u51E0\u4E4E\u6240\u6709\u60C5\u51B5\u4E0B\uFF0C\u9664\u4E86\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u90A3\u4E9B\u7531\u8BA1\u65F6\u5668\u548C <code>setImmediate</code> \u8C03\u5EA6\u4E4B\u5916\u7684\uFF09\uFF0C\u5176\u4F59\u60C5\u51B5 node \u5C06\u5728\u9002\u5F53\u7684\u65F6\u5019\u5728\u6B64\u963B\u585E</li><li>check\uFF1A<code>setImmdiate</code> \u56DE\u8C03\u51FD\u6570\u5728\u6B64\u6267\u884C</li><li>close callbacks\uFF1A\u4E00\u6B21\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982 <code>socket.on(&#39;close&#39;, () =&gt; {})</code></li></ul><h3 id="_1-settimeout-\u548C-setimmdiate" tabindex="-1"><a class="header-anchor" href="#_1-settimeout-\u548C-setimmdiate" aria-hidden="true">#</a> 1. setTimeout \u548C setImmdiate</h3><p>\u6267\u884C\u8BA1\u65F6\u5668\u7684\u987A\u5E8F\u5C06\u6839\u636E\u8C03\u7528\u5B83\u4EEC\u7684\u4E0A\u4E0B\u6587\u800C\u5F02\u3002\u5982\u679C\u4E8C\u8005\u90FD\u4ECE\u4E3B\u6A21\u5757\u5185\u8C03\u7528\uFF0C\u5219\u8BA1\u65F6\u5668\u5C06\u53D7\u8FDB\u7A0B\u6027\u80FD\u7684\u7EA6\u675F\uFF08\u8FD9\u53EF\u80FD\u4F1A\u53D7\u5230\u8BA1\u7B97\u673A\u4E0A\u5176\u4ED6\u6B63\u5728\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u7684\u5F71\u54CD\uFF09\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;immediate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// timeout immediate</span>
<span class="token comment">// or (\u4E0A\u4E0B\u4E24\u79CD\u5747\u53EF\u80FD)</span>
<span class="token comment">// immediate timeout</span>
</code></pre></div><p>\u4F46\uFF0C\u5982\u679C\u8FD9\u4E24\u4E2A\u51FD\u6570\u653E\u5165\u4E00\u4E2A I/O \u5FAA\u73AF\u5185\u8C03\u7528\uFF0C\u90A3\u4E48 <code>setImmdiate</code> \u603B\u662F\u4F18\u5148\u88AB\u8C03\u7528\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__filename<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;immediate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// immediate</span>
<span class="token comment">// timeout</span>
</code></pre></div><h2 id="\u6848\u4F8B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u5206\u6790" aria-hidden="true">#</a> \u6848\u4F8B\u5206\u6790</h2><h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> demo-1</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;j&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9010\u6B65\u5206\u6790\uFF1A</p><ol><li>\u7B2C\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF <ol><li>\u7B2C\u4E00\u4E2A <code>macro task(script)</code> \u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C<code>console.log(&#39;a&#39;)</code>\uFF0C\u8F93\u51FA <code>a</code></li><li>\u9047\u5230 <code>setTimeout</code>\uFF0C\u5C06\u5176\u56DE\u8C03\u52A0\u5165 <code>macro task</code></li><li>\u9047\u5230 <code>process.nextTick</code>\uFF0C\u5C06\u5176\u56DE\u8C03\u52A0\u5165 <code>micro task</code></li><li>\u9047\u5230 <code>new Promise</code>\uFF0C\u6267\u884C\u8F93\u51FA <code>g</code>\uFF0C\u5E76\u5C06 <code>then</code> \u52A0\u5165 <code>micro task</code></li><li>\u9047\u5230 <code>setTimeout</code>\uFF0C\u5C06\u5176\u56DE\u8C03\u52A0\u5165 <code>macro task</code></li><li><code>macro task</code> \u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5 <code>micro task</code> \u5E76\u4F9D\u6B21\u6267\u884C</li><li>\u6267\u884C <code>process.nextTick</code> \u56DE\u8C03\uFF0C\u8F93\u51FA <code>f</code></li><li>\u6267\u884C <code>promise then</code>\uFF0C\u8F93\u51FA <code>h</code></li><li>\u68C0\u67E5 <code>macro task</code>\uFF0C\u5B58\u5728\u961F\u5217\uFF0C\u8FDB\u5165\u7B2C\u4E8C\u8F6E</li></ol></li><li>\u7B2C\u4E8C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF <ol><li>\u6267\u884C <code>console.log(&#39;b&#39;)</code>\uFF0C\u8F93\u51FA <code>b</code></li><li>\u9047\u5230 <code>process.nextTick</code>\uFF0C\u5C06\u5176\u56DE\u8C03\u52A0\u5165 <code>micro task</code></li><li>\u9047\u5230 <code>new Promise</code>\uFF0C\u6267\u884C\u8F93\u51FA <code>d</code>\uFF0C\u5E76\u5C06 <code>then</code> \u52A0\u5165 <code>micro task</code></li><li>\u5F53\u524D <code>macro task</code> \u6267\u884C\u5B8C\u6BD5\uFF0C\u5F00\u59CB <code>micro task</code></li><li>\u6267\u884C <code>process.nextTick</code>\uFF0C\u8F93\u51FA <code>c</code></li><li>\u6267\u884C <code>promise then</code>\uFF0C\u8F93\u51FA <code>e</code></li><li>\u68C0\u67E5 <code>macro task</code>\uFF0C\u5B58\u5728\u961F\u5217\uFF0C\u8FDB\u5165\u7B2C\u4E09\u8F6E</li></ol></li><li>\u7B2C\u4E09\u8F6E\u4E8B\u4EF6\u5FAA\u73AF <ol><li>\u6267\u884C <code>console.log(&#39;i&#39;)</code>\uFF0C\u8F93\u51FA <code>i</code></li><li>\u9047\u5230 <code>process.nextTick</code>\uFF0C\u5C06\u5176\u56DE\u8C03\u52A0\u5165 <code>micro task</code></li><li>\u9047\u5230 <code>new Promise</code>\uFF0C\u6267\u884C\u8F93\u51FA <code>k</code>\uFF0C\u5E76\u5C06 <code>then</code> \u52A0\u5165 <code>micro task</code></li><li>\u5F53\u524D <code>macro task</code> \u6267\u884C\u5B8C\u6BD5\uFF0C\u5F00\u59CB <code>micro task</code></li><li>\u6267\u884C <code>process.nextTick</code>\uFF0C\u8F93\u51FA <code>j</code></li><li>\u6267\u884C <code>promise then</code>\uFF0C\u8F93\u51FA <code>l</code></li><li>\u68C0\u67E5 <code>macro task</code>\uFF0C\u7ED3\u675F</li></ol></li></ol><h3 id="demo-2" tabindex="-1"><a class="header-anchor" href="#demo-2" aria-hidden="true">#</a> demo-2</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> $inner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#inner&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> $outer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#outer&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u76F4\u63A5\u8F93\u51FA</span>

  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u518C\u5FAE\u4EFB\u52A1</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u518C\u5B8F\u4EFB\u52A1</span>

  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;animationFrame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u518C\u5B8F\u4EFB\u52A1</span>

  $outer<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-random&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// DOM\u5C5E\u6027\u4FEE\u6539\uFF0C\u89E6\u53D1\u5FAE\u4EFB\u52A1</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;observer&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>$outer<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

$inner<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
$outer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
</code></pre></div><p>\u70B9\u51FB<code>#inner</code>\uFF0C\u5176\u6267\u884C\u987A\u5E8F\u662F\uFF1A<code>click</code> -&gt; <code>promise</code> -&gt; <code>observer</code> -&gt; <code>click</code> -&gt; <code>promise</code> -&gt; <code>observer</code> -&gt; <code>animationFrame</code> -&gt; <code>animationFrame</code> -&gt; <code>timeout</code> -&gt; <code>timeout</code>\u3002</p><h2 id="\u547D\u4EE4\u884C\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u6548\u679C" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u6548\u679C</h2><p>\u901A\u8FC7\u547D\u4EE4\u884C\u542F\u52A8 node\uFF0C\u5B83\u4F1A\u81EA\u52A8\u6267\u884C\u5B8C\u5F53\u524D\u5B8F\u4EFB\u52A1\uFF0C\u9047\u5230\u65B0\u7684\u5B8F\u4EFB\u52A1\u4F1A\u5C06\u5176\u6DFB\u52A0\u5230\u961F\u5217\u4E2D\uFF0C\u53EA\u6709\u518D\u6B21\u6309\u4E0B\u56DE\u8F66\u952E\uFF0C\u5B83\u624D\u4F1A\u6267\u884C\u4E0B\u4E00\u6B21\u7684\u5B8F\u4EFB\u52A1\uFF0C\u4E00\u8F6E\u4E8B\u4EF6\u4F1A\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u8FD9\u90FD\u4F1A\u76F4\u63A5\u8F93\u51FA\u51FA\u6765\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,32),r={href:"https://zhuanlan.zhihu.com/p/72507900",target:"_blank",rel:"noopener noreferrer"},d={href:"https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6844903657264136200",target:"_blank",rel:"noopener noreferrer"};function h(g,f){const s=o("OutboundLink");return p(),e(c,null,[k,n("ul",null,[n("li",null,[n("a",r,[a("\u5982\u4F55\u89E3\u91CAEvent Loop\u9762\u8BD5\u5B98\u624D\u6EE1\u610F\uFF1F"),t(s)])]),n("li",null,[n("a",d,[a("Node.js \u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5B9A\u65F6\u5668\u548C process.nextTick()"),t(s)])]),n("li",null,[n("a",m,[a("\u5FAE\u4EFB\u52A1\u3001\u5B8F\u4EFB\u52A1\u4E0EEvent-Loop"),t(s)])])])],64)}var x=i(u,[["render",h]]);export{x as default};
