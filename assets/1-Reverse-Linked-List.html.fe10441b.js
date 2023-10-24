import{c as n}from"./app.7138fe66.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";var a="/assets/rev1ex1.8a1642bc.jpg",p="/assets/rev1answ2.e216202f.png",t="/assets/rev1answ1.9ba08d60.png";const e={},o=n('<h1 id="_206-\u53CD\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_206-\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a> 206. \u53CD\u8F6C\u94FE\u8868</h1><div class="custom-container tip"><p class="custom-container-title">\u9898\u76EE\u6765\u6E90:</p><p>https://leetcode.cn/problems/reverse-linked-list/</p></div><p>\u7ED9\u4F60\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u8BF7\u4F60\u53CD\u8F6C\u94FE\u8868\uFF0C\u5E76\u8FD4\u56DE\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u3002</p><p><img src="'+a+'" alt=""></p><blockquote><p>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5]<br> \u8F93\u51FA\uFF1A[5,4,3,2,1]</p></blockquote><h2 id="\u8FED\u4EE3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u6CD5" aria-hidden="true">#</a> \u8FED\u4EE3\u6CD5</h2><p><img src="'+p+`" alt=""></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur<span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> temp<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next<span class="token operator">=</span>pre<span class="token punctuation">;</span>
            pre<span class="token operator">=</span>cur<span class="token punctuation">;</span>
            cur<span class="token operator">=</span>temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9012\u5F52\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u6CD5" aria-hidden="true">#</a> \u9012\u5F52\u6CD5</h2><p><img src="`+t+`" alt=""></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">==</span><span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span> res<span class="token operator">=</span><span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BC4\u4EF7" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u4EF7" aria-hidden="true">#</a> \u8BC4\u4EF7</h2><p>\u9898\u4E0D\u96BE\uFF0C\u9762\u8BD5\u4E00\u822C\u4E24\u79CD\u65B9\u6CD5\u5168\u90E8\u5199\u51FA\u6765\uFF0C\u51FA\u9898\u9891\u7387\u5F88\u9AD8\u3002</p>`,13);function c(l,r){return o}var k=s(e,[["render",c]]);export{k as default};
