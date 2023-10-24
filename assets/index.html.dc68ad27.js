import{r as p,o,a as r,b as a,d as s,e as t,F as c,c as e}from"./app.7138fe66.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";var i="/assets/git-lifecycle.cad26e07.png",k="/assets/git-state-model.ba939455.png";const h={},d=e('<h1 id="\u7248\u672C\u63A7\u5236\u5DE5\u5177-git" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u63A7\u5236\u5DE5\u5177-git" aria-hidden="true">#</a> \u7248\u672C\u63A7\u5236\u5DE5\u5177 Git</h1><p>\u7248\u672C\u63A7\u5236\u53EF\u4EE5\u8BB0\u5F55\u6587\u4EF6\u7684\u53D8\u5316\uFF0C\u65B9\u4FBF\u5FEB\u6377\u7684\u67E5\u770B\u3001\u56DE\u9000\u6307\u5B9A\u7248\u672C\u7684\u5185\u5BB9\u3002</p><h2 id="git-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#git-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> Git \u751F\u547D\u5468\u671F</h2><p>\u968F\u7740\u4F7F\u7528\u4F60\u4F1A\u6E10\u6E10\u52A0\u6DF1\u5BF9\u5176\u751F\u547D\u5468\u671F\u7684\u7406\u89E3\u3002</p><p><img src="'+i+'" alt="git \u751F\u547D\u5468\u671F"></p><p>Git \u4ED3\u5E93\u4E2D\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u7684\u6BCF\u4E00\u4E2A\u6587\u4EF6\u4E0D\u5916\u4E4E\u4E24\u79CD\u72B6\u6001\uFF1A\u672A\u8DDF\u8E2A\uFF08Untracked\uFF09\u6216\u5DF2\u8DDF\u8E2A\uFF08Tracked\uFF09\u3002</p><p>\u5DF2\u8DDF\u8E2A\u7684\u6587\u4EF6\u662F\u6307\u90A3\u4E9B\u88AB\u7EB3\u5165\u4E86\u7248\u672C\u63A7\u5236\u7684\u6587\u4EF6\uFF0C\u5728\u4E0A\u4E00\u6B21\u5FEB\u7167\u4E2D\u6709\u5B83\u4EEC\u7684\u8BB0\u5F55\uFF0C\u5728\u5DE5\u4F5C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u5B83\u4EEC\u7684\u72B6\u6001\u53EF\u80FD\u5904\u4E8E\u672A\u4FEE\u6539\uFF0C\u5DF2\u4FEE\u6539\u6216\u5B58\u5165\u6682\u5B58\u533A\u3002</p><p>\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u9664\u5DF2\u8DDF\u8E2A\u6587\u4EF6\u4EE5\u5916\u90FD\u5C5E\u4E8E\u672A\u8DDF\u8E2A\u6587\u4EF6\uFF0C\u5B83\u4EEC\u5373\u4E0D\u5B58\u5728\u4E8E\u4E0A\u6B21\u5FEB\u7167\u7684\u8BB0\u5F55\u4E2D\uFF0C\u4E5F\u6CA1\u6709\u653E\u5165\u6682\u5B58\u533A\u3002</p><p>\u521D\u6B21\u514B\u9686\u67D0\u4E2A\u4ED3\u5E93\u65F6\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u6240\u6709\u7684\u6587\u4EF6\u90FD\u5C5E\u4E8E\u5DF2\u8DDF\u8E2A\u6587\u4EF6\uFF0C\u5E76\u5904\u4E8E\u672A\u4FEE\u6539\u72B6\u6001\u3002</p><h2 id="git-\u72B6\u6001\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#git-\u72B6\u6001\u6A21\u578B" aria-hidden="true">#</a> Git \u72B6\u6001\u6A21\u578B</h2><p>\u5728\u72B6\u6001\u6A21\u578B\u4E2D\u8FDB\u884C\u4E86\u66F4\u8BE6\u7EC6\u7684\u8BF4\u660E\u3002</p><p><img src="'+k+`" alt="git \u72B6\u6001\u6A21\u578B"></p><p>\u5173\u4E8E\u4E0A\u56FE\u4E00\u4E9B\u6982\u5FF5\u7684\u8BF4\u660E\u3002</p><h3 id="_1-\u5DE5\u4F5C\u533A-workspace" tabindex="-1"><a class="header-anchor" href="#_1-\u5DE5\u4F5C\u533A-workspace" aria-hidden="true">#</a> 1. \u5DE5\u4F5C\u533A\uFF08workspace\uFF09</h3><p>\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\uFF0C\u5373\u5F53\u524D\u80FD\u5728\u672C\u5730\u6587\u4EF6\u5939\u4E0B\u9762\u53EF\u4EE5\u770B\u5230\u7684\u6587\u4EF6\u7ED3\u6784\u3002\u521D\u59CB\u5316\u5DE5\u4F5C\u7A7A\u95F4\u6216\u8005\u5DE5\u4F5C\u7A7A\u95F4 <code>clean</code> \u7684\u65F6\u5019\uFF0C\u6587\u4EF6\u5185\u5BB9\u548C\u6682\u5B58\u533A\uFF08index\uFF09\u662F\u4E00\u81F4\u7684\uFF0C\u968F\u7740\u4FEE\u6539\uFF0C\u5DE5\u4F5C\u533A\u6587\u4EF6\u6CA1\u6709\u6267\u884C <code>git add</code> \u5230\u6682\u5B58\u533A\u7684\u65F6\u5019\uFF0C\u5DE5\u4F5C\u533A\u57DF\u5C06\u548C\u6682\u5B58\u533A\u4E0D\u4E00\u81F4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># clean \u72B6\u6001</span>
$ <span class="token function">git</span> status

<span class="token comment">#On branch master</span>
<span class="token comment">#nothing to commit, working tree clean</span>
</code></pre></div><h3 id="_2-\u6682\u5B58\u533A-index" tabindex="-1"><a class="header-anchor" href="#_2-\u6682\u5B58\u533A-index" aria-hidden="true">#</a> 2. \u6682\u5B58\u533A\uFF08index\uFF09</h3><p>\u8001\u7248\u672C\u7684\u6982\u5FF5\u4E5F\u53EB Cache \u533A\uFF0C\u5C31\u662F\u6587\u4EF6\u6682\u65F6\u5B58\u653E\u7684\u5730\u65B9\uFF0C\u6240\u6709\u6682\u65F6\u5B58\u653E\u5728\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u5C06\u968F\u7740 <code>git commit</code> \u4E00\u8D77\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93\uFF08local repository\uFF09\uFF0C\u6B64\u65F6\u672C\u5730\u4ED3\u5E93\u7684\u6587\u4EF6\u5C06\u4F1A\u88AB\u6682\u5B58\u533A\u6240\u53D6\u4EE3\u3002</p><h3 id="_3-\u672C\u5730\u4ED3\u5E93-local-repository" tabindex="-1"><a class="header-anchor" href="#_3-\u672C\u5730\u4ED3\u5E93-local-repository" aria-hidden="true">#</a> 3. \u672C\u5730\u4ED3\u5E93\uFF08local repository\uFF09</h3><p>git \u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u548C\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u4E0D\u540C\u7684\u662F\u4ED6\u53EF\u4EE5\u5B8C\u5168\u53BB\u4E2D\u5FC3\u5316\u64CD\u4F5C\uFF0C\u4F60\u53EF\u4EE5\u4E0D\u7528\u548C\u8FDC\u7A0B\u4ED3\u5E93\uFF08remote repository\uFF09\u8FDB\u884C\u901A\u4FE1\uFF0C\u5728\u672C\u5730\u5373\u53EF\u8FDB\u884C\u5168\u90E8\u79BB\u7EBF\u64CD\u4F5C\uFF0C\u5305\u62EC log\u3001history\u3001commit\u3001diff \u7B49\u3002</p><p>\u80FD\u5B9E\u73B0\u4EE5\u4E0A\u529F\u80FD\u662F\u7531\u4E8E git \u6709\u4E00\u4E2A\u51E0\u4E4E\u548C\u8FDC\u7A0B\u4E00\u6837\u7684\u672C\u5730\u4ED3\u5E93\u3002</p><p>\u6240\u4EE5\u79BB\u7EBF\u64CD\u4F5C\u90FD\u53EF\u4EE5\u672C\u5730\u5B8C\u6210\uFF0C\u7B49\u9700\u8981\u7684\u65F6\u5019\u518D\u548C\u8FDC\u7A0B\u4ED3\u5E93\u8FDB\u884C\u4EA4\u4E92\u3002</p><h3 id="_4-\u8FDC\u7A0B\u4ED3\u5E93-remote-repository" tabindex="-1"><a class="header-anchor" href="#_4-\u8FDC\u7A0B\u4ED3\u5E93-remote-repository" aria-hidden="true">#</a> 4. \u8FDC\u7A0B\u4ED3\u5E93\uFF08remote repository\uFF09</h3><p>\u8FDC\u7A0B\u4E2D\u5FC3\u4ED3\u5E93\uFF0C\u53EF\u4F7F\u5F97\u4ED3\u5E93\u5206\u4EAB\u7ED9\u5176\u4ED6\u4EBA\u3002\u7ED3\u6784\u5927\u4F53\u548C\u672C\u5730\u4ED3\u5E93\u4E00\u6837\u3002</p><h2 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Git \u5E38\u7528\u547D\u4EE4</h2><p>Git \u7684\u64CD\u4F5C\u6307\u4EE4\u975E\u5E38\u591A\uFF0C\u6B64\u5904\u4EC5\u9009\u4E00\u4E9B\u7B80\u5355\u7684\u65E5\u5E38\u64CD\u4F5C\u3002</p><h3 id="\u67E5\u770B\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5E2E\u52A9" aria-hidden="true">#</a> \u67E5\u770B\u5E2E\u52A9</h3><p>\u6240\u6709\u547D\u4EE4\u884C\u6700\u91CD\u8981\u7684\u5F53\u7136\u662F\u67E5\u770B\u5E2E\u52A9\u6587\u6863\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>
</code></pre></div><p>\u7ED3\u679C\uFF1A</p><div class="language-vim ext-vim"><pre class="language-vim"><code>\u7528\u6CD5\uFF1Agit <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">version</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">help</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>C <span class="token operator">&lt;</span>\u8DEF\u5F84<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">c</span> <span class="token operator">&lt;</span>\u540D\u79F0<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>\u53D6\u503C<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>exec<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u8DEF\u5F84<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>html<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>man<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>info<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">p</span> | <span class="token operator">-</span><span class="token operator">-</span>paginate | <span class="token operator">-</span><span class="token keyword">P</span> | <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>pager<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>replace<span class="token operator">-</span>objects<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>bare<span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>git<span class="token operator">-</span><span class="token builtin">dir</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u8DEF\u5F84<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>work<span class="token operator">-</span>tree<span class="token operator">=</span><span class="token operator">&lt;</span>\u8DEF\u5F84<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>namespace<span class="token operator">=</span><span class="token operator">&lt;</span>\u540D\u79F0<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token operator">&lt;</span>\u547D\u4EE4<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>\u53C2\u6570<span class="token operator">&gt;</span><span class="token punctuation">]</span>

\u8FD9\u4E9B\u662F\u5404\u79CD\u573A\u5408\u5E38\u89C1\u7684 Git \u547D\u4EE4\uFF1A

\u5F00\u59CB\u4E00\u4E2A\u5DE5\u4F5C\u533A\uFF08\u53C2\u89C1\uFF1Agit <span class="token keyword">help</span> tutorial\uFF09
   clone      \u514B\u9686\u4ED3\u5E93\u5230\u4E00\u4E2A\u65B0\u76EE\u5F55
   init       \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Git \u4ED3\u5E93\u6216\u91CD\u65B0\u521D\u59CB\u5316\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u4ED3\u5E93

\u5728\u5F53\u524D\u53D8\u66F4\u4E0A\u5DE5\u4F5C\uFF08\u53C2\u89C1\uFF1Agit <span class="token keyword">help</span> everyday\uFF09
   add        \u6DFB\u52A0\u6587\u4EF6\u5185\u5BB9\u81F3\u7D22\u5F15
   mv         \u79FB\u52A8\u6216\u91CD\u547D\u540D\u4E00\u4E2A\u6587\u4EF6\u3001\u76EE\u5F55\u6216\u7B26\u53F7\u94FE\u63A5
   reset      \u91CD\u7F6E\u5F53\u524D HEAD \u5230\u6307\u5B9A\u72B6\u6001
   rm         \u4ECE\u5DE5\u4F5C\u533A\u548C\u7D22\u5F15\u4E2D\u5220\u9664\u6587\u4EF6

\u68C0\u67E5\u5386\u53F2\u548C\u72B6\u6001\uFF08\u53C2\u89C1\uFF1Agit <span class="token keyword">help</span> revisions\uFF09
   bisect     \u901A\u8FC7\u4E8C\u5206\u67E5\u627E\u5B9A\u4F4D\u5F15\u5165 bug \u7684\u63D0\u4EA4
   <span class="token keyword">grep</span>       \u8F93\u51FA\u548C\u6A21\u5F0F\u5339\u914D\u7684\u884C
   log        \u663E\u793A\u63D0\u4EA4\u65E5\u5FD7
   show       \u663E\u793A\u5404\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61
   status     \u663E\u793A\u5DE5\u4F5C\u533A\u72B6\u6001

\u6269\u5C55\u3001\u6807\u8BB0\u548C\u8C03\u6821\u60A8\u7684\u5386\u53F2\u8BB0\u5F55
   branch     \u5217\u51FA\u3001\u521B\u5EFA\u6216\u5220\u9664\u5206\u652F
   checkout   \u5207\u6362\u5206\u652F\u6216\u6062\u590D\u5DE5\u4F5C\u533A\u6587\u4EF6
   commit     \u8BB0\u5F55\u53D8\u66F4\u5230\u4ED3\u5E93
   <span class="token builtin">diff</span>       \u663E\u793A\u63D0\u4EA4\u4E4B\u95F4\u3001\u63D0\u4EA4\u548C\u5DE5\u4F5C\u533A\u4E4B\u95F4\u7B49\u7684\u5DEE\u5F02
   merge      \u5408\u5E76\u4E24\u4E2A\u6216\u66F4\u591A\u5F00\u53D1\u5386\u53F2
   rebase     \u5728\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A\u91CD\u65B0\u5E94\u7528\u63D0\u4EA4
   <span class="token keyword">tag</span>        \u521B\u5EFA\u3001\u5217\u51FA\u3001\u5220\u9664\u6216\u6821\u9A8C\u4E00\u4E2A GPG \u7B7E\u540D\u7684\u6807\u7B7E\u5BF9\u8C61

\u534F\u540C\uFF08\u53C2\u89C1\uFF1Agit <span class="token keyword">help</span> workflows\uFF09
   fetch      \u4ECE\u53E6\u5916\u4E00\u4E2A\u4ED3\u5E93\u4E0B\u8F7D\u5BF9\u8C61\u548C\u5F15\u7528
   pull       \u83B7\u53D6\u5E76\u6574\u5408\u53E6\u5916\u7684\u4ED3\u5E93\u6216\u4E00\u4E2A\u672C\u5730\u5206\u652F
   push       \u66F4\u65B0\u8FDC\u7A0B\u5F15\u7528\u548C\u76F8\u5173\u7684\u5BF9\u8C61

\u547D\u4EE4 <span class="token string">&#39;git help -a&#39;</span> \u548C <span class="token string">&#39;git help -g&#39;</span> \u663E\u793A\u53EF\u7528\u7684\u5B50\u547D\u4EE4\u548C\u4E00\u4E9B\u6982\u5FF5\u5E2E\u52A9\u3002
\u67E5\u770B <span class="token string">&#39;git help &lt;\u547D\u4EE4&gt;&#39;</span> \u6216 <span class="token string">&#39;git help &lt;\u6982\u5FF5&gt;&#39;</span> \u4EE5\u83B7\u53D6\u7ED9\u5B9A\u5B50\u547D\u4EE4\u6216\u6982\u5FF5\u7684
\u5E2E\u52A9\u3002
</code></pre></div><h3 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u6709\u66F4\u65B0</span>
<span class="token function">git</span> status

<span class="token comment"># \u5C06\u65B0\u589E\u7684\u6587\u4EF6\u8FDB\u884C\u8DDF\u8E2A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u63D0\u4EA4\u672C\u6B21\u4FEE\u6539\u5185\u5BB9\uFF08\u8BF7\u5C3D\u91CF\u8BE6\u7EC6\uFF09\uFF0C\u65B9\u4FBF\u65E5\u540E\u4FEE\u6539 bug \u65F6\u5FEB\u901F\u5B9A\u4F4D</span>
<span class="token comment"># \u6B64\u5904 commit \u4EC5\u4E3A\u793A\u4F8B\uFF0C\u8BF7\u4FEE\u6539\u4E3A\u4F60\u9879\u76EE\u7684\u63D0\u4EA4\u4FE1\u606F</span>
<span class="token function">git</span> commit  -m<span class="token string">&quot;docs(git): \u65B0\u589E git \u7B80\u5355\u4F7F\u7528&quot;</span>

<span class="token comment"># \u63D0\u4EA4\u5230\u4ED3\u5E93</span>
<span class="token function">git</span> push
</code></pre></div><h3 id="\u7EDF\u8BA1\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1\u4FE1\u606F" aria-hidden="true">#</a> \u7EDF\u8BA1\u4FE1\u606F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6240\u6709\u5206\u652F\u6307\u5B9A\u7528\u6237\u6307\u5B9A\u65F6\u95F4\u8303\u56F4\u63D0\u4EA4\u4FE1\u606F</span>
<span class="token comment"># \u66F4\u591A\u7684 formats \u53EF\u89C1 https://git-scm.com/docs/pretty-formats</span>
<span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;\u4F60\u7684\u540D\u79F0&quot;</span> <span class="token parameter variable">--after</span><span class="token operator">=</span><span class="token string">&quot;2022-07-16&quot;</span> <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;2022-07-23&quot;</span> --no-merges <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an(%ae) %as: %s&quot;</span>
</code></pre></div><h3 id="git-\u98DE\u884C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#git-\u98DE\u884C\u89C4\u5219" aria-hidden="true">#</a> Git \u98DE\u884C\u89C4\u5219</h3>`,36),u={href:"https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="\u4E3A-git-\u6DFB\u52A0\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E3A-git-\u6DFB\u52A0\u4EE3\u7406" aria-hidden="true">#</a> \u4E3A Git \u6DFB\u52A0\u4EE3\u7406</h2><p>clone \u5927\u9879\u76EE\u65F6\u603B\u662F\u4E4F\u529B\uFF0C\u4E0B\u8F7D\u901F\u5EA6\u6781\u6162\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u4E3A\u5176\u8BBE\u7F6E\u4EE3\u7406\u4E86\u3002</p><h3 id="\u5168\u5C40\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4EE3\u7406" aria-hidden="true">#</a> \u5168\u5C40\u4EE3\u7406</h3><p>\u8BE5\u9879\u53EF\u53C2\u8003 alias \u90E8\u5206\u5185\u5BB9\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gfw
</code></pre></div><h3 id="git-\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u4EE3\u7406" aria-hidden="true">#</a> Git \u4EE3\u7406</h3><p>\u5728 Git \u5B98\u7F51\u53EF\u83B7\u5F97\u63D0\u793A <code>http.proxy</code>\uFF0C\u867D\u7136\u5728\u5176\u4F59\u5730\u65B9\u641C\u7D22\u8FD8\u5F97\u5230\u63D0\u793A <code>https.proxy</code>\uFF0C\u4F46\u5728\u5B98\u7F51\u5E76\u6CA1\u6709\u641C\u5230\u5BF9\u5E94\u5185\u5BB9\uFF0C\u6000\u7591\u662F\u8BEF\u4F20\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u4EE3\u7406 </span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
<span class="token comment"># \u53D6\u6D88\u4EE3\u7406</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy

<span class="token comment"># \u66F4\u597D\u7684\u5F62\u5F0F\u5F53\u7136\u662F\u8BBE\u7F6E\u4E3A alias</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">proxygit</span><span class="token operator">=</span><span class="token string">&quot;git config --global http.proxy socks5://127.0.0.1:1080&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">uproxygit</span><span class="token operator">=</span><span class="token string">&quot;git config --global --unset http.proxy&quot;</span>
</code></pre></div><h3 id="git-\u4EE3\u7406\u534F\u8BAE\u7684\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#git-\u4EE3\u7406\u534F\u8BAE\u7684\u8865\u5145" aria-hidden="true">#</a> Git \u4EE3\u7406\u534F\u8BAE\u7684\u8865\u5145</h3><p>git \u4EE3\u7406\u652F\u6301\u591A\u79CD\u534F\u8BAE\uFF1Ahttp\u3001https\u3001socks\u3001socks5\uFF0C\u672C\u673A\u901A\u8FC7 ss \u542F\u7528\u4E86 socks5\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,11),m={href:"https://help.github.com/en",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},f={href:"https://shafiul.github.io/gitbook/index.html",target:"_blank",rel:"noopener noreferrer"};function x(_,v){const n=p("OutboundLink");return o(),r(c,null,[d,a("p",null,[a("a",u,[s("Git\u98DE\u884C\u89C4\u5219(Flight Rules)"),t(n)]),s(" \u53EF\u4EE5\u7528\u6765\u6307\u5BFC\u4E00\u4E9B\u5E38\u89C1\u7684\u95EE\u9898\u3002")]),g,a("ul",null,[a("li",null,[a("a",m,[s("Github"),t(n)])]),a("li",null,[a("a",b,[s("Git-scm"),t(n)])]),a("li",null,[a("a",f,[s("shafiul Community Book"),t(n)])])])],64)}var G=l(h,[["render",x]]);export{G as default};
