import{r,o as c,a as t,b as a,d as e,e as s,F as d,c as o}from"./app.7138fe66.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";var l="/assets/manjaro-arch.076e753d.png";const h={},p=a("h1",{id:"\u4F53\u9A8C\u7F8E\u597D\u7684-manjaro-\u5427",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4F53\u9A8C\u7F8E\u597D\u7684-manjaro-\u5427","aria-hidden":"true"},"#"),e(" \u4F53\u9A8C\u7F8E\u597D\u7684 Manjaro \u5427")],-1),u=a("h2",{id:"\u5236\u4F5C-u-\u76D8\u542F\u52A8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5236\u4F5C-u-\u76D8\u542F\u52A8","aria-hidden":"true"},"#"),e(" \u5236\u4F5C U \u76D8\u542F\u52A8")],-1),m={href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"rufus",-1),f=a("code",null,"Linux",-1),k={href:"https://github.com/ventoy/Ventoy",target:"_blank",rel:"noopener noreferrer"},b=o(`<h3 id="_1-\u83B7\u53D6-u-\u76D8\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6-u-\u76D8\u8DEF\u5F84" aria-hidden="true">#</a> 1. \u83B7\u53D6 U \u76D8\u8DEF\u5F84</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span> <span class="token comment"># \u4ECE\u4E2D\u627E\u5230 /dev/sdc</span>
</code></pre></div><h3 id="_2-\u683C\u5F0F\u5316-u-\u76D8" tabindex="-1"><a class="header-anchor" href="#_2-\u683C\u5F0F\u5316-u-\u76D8" aria-hidden="true">#</a> 2. \u683C\u5F0F\u5316 U \u76D8</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>mkfs.<span class="token punctuation">[</span>type<span class="token punctuation">]</span> /dev/sdc <span class="token comment"># [type] \u4E3A\u9700\u8981\u7684\u7C7B\u578B\uFF0C\u5982 fat32\u3001ext4\u3001ntfs\uFF0C\u4F8B mkfs.ext4</span>
</code></pre></div><h3 id="_3-dd-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-dd-\u547D\u4EE4" aria-hidden="true">#</a> 3. dd \u547D\u4EE4</h3><p>\u6307\u5B9A <code>iso</code> \u53CA U\u76D8\u8DEF\u5F84\u5373\u53EF\uFF0C\u76F8\u5BF9\u4E8E <code>rufus</code> \u7B49\u5DE5\u5177\uFF0C\u8BE5\u6307\u4EE4\u53EF\u80FD\u4F1A\u82B1\u8D39\u8F83\u591A\u7684\u65F6\u95F4\uFF0C\u539F\u56E0\u672A\u660E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/ubuntu-20.04-live-server-amd64.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdc
</code></pre></div><h2 id="\u865A\u62DF\u673A\u5B89\u88C5-manjaro" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u5B89\u88C5-manjaro" aria-hidden="true">#</a> \u865A\u62DF\u673A\u5B89\u88C5 Manjaro</h2>`,8),x={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},g={href:"https://manjaro.org/download/kde/",target:"_blank",rel:"noopener noreferrer"},v=o(`<h3 id="\u865A\u62DF\u673A\u4E2D\u52A0\u8F7D-manjaro" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u4E2D\u52A0\u8F7D-manjaro" aria-hidden="true">#</a> \u865A\u62DF\u673A\u4E2D\u52A0\u8F7D Manjaro</h3><ol><li>\u865A\u62DF\u673A\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u65B0\u5EFA\uFF1B</li><li>\u8F93\u5165\u540D\u79F0\uFF0C\u5E76\u9009\u62E9 <code>Arch Linux</code> \u7248\u672C\uFF1B</li><li>\u63A5\u4E0B\u6765\u662F\u5206\u914D\u5185\u5B58\uFF0C\u5F53\u7136\u662F\u8D8A\u5927\u8D8A\u597D\uFF1B</li><li>\u9009\u62E9\u521B\u5EFA\u865A\u62DF\u786C\u76D8\uFF1B</li><li>\u865A\u62DF\u786C\u76D8\u6587\u4EF6\u7C7B\u578B\u9009\u62E9\u9ED8\u8BA4\u7684 VDI\uFF1B</li><li>\u865A\u62DF\u786C\u76D8\u63A7\u4EF6\u9009\u62E9\u52A8\u6001\u5206\u914D\u5373\u53EF\uFF1B</li><li>\u865A\u62DF\u786C\u76D8\u7684\u5927\u5C0F\u63A8\u8350 30G \u4EE5\u4E0A\uFF1B</li><li>\u63A5\u7740\u5C31\u521B\u5EFA\u597D\u4E00\u4E2A\u7A7A\u58F3\u4E86\uFF1B</li><li>\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u914D\u7F6E\u865A\u62DF\u673A\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684\u865A\u62DF\u673A\u70B9\u51FB\u8BBE\u7F6E\uFF1B</li><li>\u9009\u62E9 <code>\u7CFB\u7EDF &gt; \u5904\u7406\u5668</code> \u53EF\u4EE5\u9009\u62E9 CPU \u7684\u6570\u91CF\uFF0C\u540C\u6837\u662F\u8D8A\u591A\u8D8A\u597D\uFF0C\u4F46\u662F\u4E0D\u8981\u5F71\u54CD\u5230\u7535\u8111\u672C\u8EAB\uFF0C\u91CF\u529B\u800C\u4E3A\uFF1B</li><li>\u9009\u62E9 <code>\u5B58\u50A8 &gt; \u63A7\u5236\u5668</code> \u53EF\u4EE5\u9009\u62E9 ISO \u6587\u4EF6\uFF0C\u9009\u62E9\u4E4B\u524D\u4E0B\u8F7D\u7684 Manjaro ISO \u6587\u4EF6\uFF0C\u5207\u8BB0\u4E0D\u8981\u88C5\u6210\u5176\u4F59\u7684\u4E86\uFF1B</li><li>\u70B9\u51FB OK\uFF0C\u8FD9\u6837\u5C31\u57FA\u7840\u914D\u7F6E\u597D\u4E86\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u865A\u62DF\u673A\u62E5\u6709\u672C\u5730\u7F51\u7EDC\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728\u7F51\u7EDC\u4E2D\u4FEE\u6539\u4E3A <code>\u6865\u63A5\u7F51\u5361</code> \u3002</li></ol><h3 id="\u5B89\u88C5-manjaro" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-manjaro" aria-hidden="true">#</a> \u5B89\u88C5 Manjaro</h3><p>\u542F\u52A8\u540E\u4F1A\u8FDB\u5165\u6B22\u8FCE\u754C\u9762\uFF0C\u4FEE\u6539\u4E0B\u65F6\u533A\uFF0C\u952E\u76D8\u4F4D\u7F6E\uFF0C\u8BED\u8A00\uFF0C\u5F53\u7136\u6BD4\u8F83\u91CD\u8981\u7684\u662F\u8BB0\u5F97\u628A\u9A71\u52A8\u9009\u62E9\u4E3A\u95ED\u6E90\uFF08nofree\uFF09\uFF0C\u8FD9\u4E9B\u5B8C\u6210\u540E\u9009\u62E9 Boot \u5C31\u53EF\u4EE5\u542F\u52A8\u4E86\u3002</p><p>\u8FDB\u5165\u7CFB\u7EDF\u540E\uFF0C\u4F1A\u91CD\u65B0\u8FDB\u884C\u4E00\u4E9B\u914D\u7F6E\uFF0C\u6BD4\u8F83\u91CD\u8981\u7684\u5C31\u662F\u5206\u533A\u4E86\uFF0C\u865A\u62DF\u673A\u7684\u8BDD\u4F1A\u6709\u4E00\u4E2A\u5B8C\u6574\u7684\u5206\u533A\u53EF\u4F9B\u9009\u62E9\uFF0C\u76F4\u63A5\u9009\u62E9\u62B9\u9664\u78C1\u76D8\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u5982\u679C\u662F\u5B9E\u4F53\u673A\u5668\u7684\u8BDD\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u53CC\u7CFB\u7EDF\u5B58\u5728\u4E5F\u53EF\u4EE5\u9009\u62E9\u62B9\u9664\u78C1\u76D8\u3002</p><p>\u53CC\u7CFB\u7EDF\u7684\u8BDD\u5C31\u9700\u8981\u624B\u52A8\u5206\u533A\u4E86\uFF0C\u9009\u4E2D\u4F60\u4E4B\u524D\u7A7A\u51FA\u6765\u7684\u90A3\u4E2A\u786C\u76D8\u5757\u3002\u6838\u5FC3\u7684\u5206\u533A\u6709\u4E09\u4E2A\uFF1A</p><ol><li>\u9996\u5148\u662F\u5185\u6838\uFF0C\u542F\u52A8\u5F15\u5BFC\uFF0C\u9009\u62E9 <code>/boot</code> \u7136\u540E\u5206\u914D\u7ED9 512MB \u5373\u53EF\uFF0C\u6700\u5927\u53EF\u5206\u914D\u7ED9 2G\u3002\u5B83\u5E73\u65F6\u5E76\u4E0D\u53C2\u4E0E\u8FD0\u884C\uFF0C\u4EC5\u5728\u542F\u52A8\u548C\u5185\u6838\u5347\u7EA7\u65F6\u4F1A\u7528\u5230\uFF1B</li><li>\u63A5\u7740\u662F\u4EA4\u6362\u5206\u533A\uFF0C\u9009\u62E9 <code>Swap</code>\uFF0C\u8FC7\u53BB\u7684\u7ECF\u9A8C\u662F\u7269\u7406\u5185\u5B58\u5728 8G \u4EE5\u4E0A\uFF0C\u5C31\u7ED9 8G\uFF08\u6216 1.5 \u500D\uFF09\uFF0C\u7269\u7406\u5185\u5B58\u5C0F\u4E8E 8G\uFF0C\u7ED9 1.5 - 2 \u500D\u5373\u53EF\u3002\u4E0D\u8FC7\u6211\u4EEC\u4F7F\u7528\u7684\u662F Manjaro\uFF08\u684C\u9762 Linux\uFF09\uFF0C\u6240\u4EE5\u8FD8\u662F\u5206\u4E2A 20G \u538B\u538B\u60CA\u597D\u4E86\u3002</li><li>\u6700\u540E\u662F\u4E3B\u8981\u7684\u4E00\u9879\u4E86\uFF0C <code>/</code> \u5C06\u5269\u4F59\u7684\u63A7\u4EF6\u5168\u90E8\u5206\u7ED9\u5B83\u5427\u3002\u867D\u7136\u6709\u5F88\u591A\u4EBA\u4F1A\u8FDB\u4E00\u6B65\u5206\u4E00\u4E2A <code>/home</code>\uFF0C\u4F46\u4E2A\u4EBA\u89C9\u5F97\u6CA1\u6709\u5FC5\u8981\u3002</li></ol><p>\u8FD9\u4E9B\u5206\u533A\u662F\u4EE5\u5F80\u505A\u865A\u62DF\u673A\u5B66\u4E60\u65F6\u7684\u7ECF\u9A8C\uFF0C\u81F3\u4E8E\u662F\u5426\u9002\u7528\u4E8E\u684C\u9762\u7248 Linux\uFF0C\u8FD8\u6709\u771F\u6B63\u7684\u5546\u4E1A\u7EA7\u67B6\u6784\u5C1A\u672A\u77E5\u3002 \u6700\u540E\uFF0C\u5B89\u88C5\u901F\u5EA6\u4E0E\u4F60\u7684\u7F51\u901F\u3001\u7535\u8111\u6027\u80FD\u6210\u6B63\u6BD4\uFF0C\u5982\u679C\u4F60\u7B49\u5F85\u534A\u5929\u90FD\u65E0\u6CD5\u5B89\u88C5\u6210\u529F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u628A\u7F51\u7EBF\u62D4\u4E86\uFF08\u56E0\u4E3A\u4F1A\u9ED8\u8BA4\u8FDB\u884C\u7CFB\u7EDF\u8F6F\u4EF6\u66F4\u65B0\uFF09\uFF0C\u7A0D\u7B49\u7247\u523B\u5C31\u4F1A\u5B89\u88C5\u6210\u529F\u4E86\u3002</p><h3 id="\u90A3\u771F\u673A\u5462" tabindex="-1"><a class="header-anchor" href="#\u90A3\u771F\u673A\u5462" aria-hidden="true">#</a> \u90A3\u771F\u673A\u5462</h3><p>\u5F53\u865A\u62DF\u673A\u6D4B\u8BD5\u5B8C\u6BD5\u540E\uFF0C\u771F\u673A\u81EA\u662F\u540C\u7406\u4E86\u3002</p><h2 id="\u4FEE\u6539\u8F6F\u4EF6\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8F6F\u4EF6\u6E90" aria-hidden="true">#</a> \u4FEE\u6539\u8F6F\u4EF6\u6E90</h2><p>\u9ED8\u8BA4\u8F6F\u4EF6\u6E90\u975E\u56FD\u5185\uFF0C\u9700\u8981\u8FDB\u884C\u8C03\u6574\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman-mirrors <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> China <span class="token parameter variable">-m</span> rank
</code></pre></div><h3 id="archlinuxcn" tabindex="-1"><a class="header-anchor" href="#archlinuxcn" aria-hidden="true">#</a> ArchLinuxCN</h3><p>ArchlinuxCN \u662F\u7531 Arch Linux \u4E2D\u6587\u793E\u533A\u7EF4\u62A4\u7684\u975E\u5B98\u65B9\u7684\u4ED3\u5E93\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B83\u4F1A\u63D0\u4F9B\u4E00\u4E9B\u6CA1\u6709\u88AB Arch Linux \u6536\u5F55\u7684\u56FD\u4EA7\u8F6F\u4EF6\u3002 \u9700\u6CE8\u610F\u5B83\u662F <code>arch</code> \u7684\u800C\u975E <code>manjaro</code> \u7684\uFF0C\u800C <code>manjaro</code> \u7684\u5B98\u65B9\u6E90\u66F4\u65B0\u6EDE\u540E\u4E8E <code>arch</code>\uFF0C\u5F53\u4E0A\u6E38\u51FA\u73B0 <code>ABI</code> \u7834\u574F\u6027\u66F4\u65B0\u65F6\uFF0CArchlinuxCN \u4F1A\u4F18\u5148\u4FDD\u8BC1 Arch Linux \u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u81F3\u4E8E\u66F4\u65B0\u843D\u540E\u7684 <code>manjaro</code> \u53EF\u80FD\u5C31\u4F1A\u6328\u6253\u4E86\u3002</p><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>\u547D\u4EE4\u884C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/pacman.conf

<span class="token comment"># \u5728\u6700\u540E\u8FFD\u52A0</span>
<span class="token comment"># \u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u955C\u50CF</span>
<span class="token punctuation">[</span>archlinuxcn<span class="token punctuation">]</span>
Server <span class="token operator">=</span> https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/<span class="token variable">$arch</span>
<span class="token comment"># Server = https://mirrors.aliyun.com/archlinuxcn/$arch</span>

<span class="token comment"># \u518D\u6DFB\u52A0\u6E90\u7684 key</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> archlinuxcn-keyring

<span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6\u5217\u8868</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Syy</span>
</code></pre></div><p>\u754C\u9762\u914D\u7F6E\uFF1A</p><p><code>Octopi</code> &gt; <code>\u5DE5\u5177</code> &gt; <code>\u8F6F\u4EF6\u6E90\u7F16\u8F91\u5668</code>\u3002</p><h2 id="\u5207\u6362\u5230-arch" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5230-arch" aria-hidden="true">#</a> \u5207\u6362\u5230 Arch</h2>`,22),j=a("code",null,"Manjaro",-1),y=a("code",null,"Arch",-1),A={href:"https://wiki.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},L=a("p",null,[a("img",{src:l,alt:"arch"})],-1);function w(S,M){const n=r("OutboundLink");return c(),t(d,null,[p,u,a("p",null,[e("\u4EE5\u5F80\u5728 Windows \u4E0B\u5E38\u4F7F\u7528 "),a("a",m,[e("rufus"),s(n)]),e(" \u6765\u5236\u4F5C\u542F\u52A8\u76D8\uFF0C\u800C "),_,e(" \u6682\u65E0\u5BF9 "),f,e(" \u5E73\u53F0\u7684\u652F\u6301\u3002")]),a("blockquote",null,[a("p",null,[e("\u5B89\u5229\u4E0B "),a("a",k,[e("Ventoy"),s(n)]),e("\u3002")])]),b,a("p",null,[e("\u9996\u5148\u9700\u8981\u5B89\u88C5\u865A\u62DF\u673A\uFF0C\u6B64\u5904\u9009\u7528 "),a("a",x,[e("VirtualBox"),s(n)]),e("\u3002")]),a("p",null,[e("\u63A5\u7740\u9700\u8981\u51C6\u5907\u597D manjaro \u7684 ISO \u6587\u4EF6\uFF0C\u6B64\u5904\u9009\u7528 "),a("a",g,[e("kde"),s(n)]),e(" \u7248\u672C\u3002")]),v,a("p",null,[e("\u5728\u957F\u671F\u4F7F\u7528 "),j,e(" \u540E\u4E0D\u59A8\u8BD5\u8BD5 "),y,e("\u3002\u5FC5\u8BFB "),a("a",A,[e("WIKI"),s(n)]),e("\u3002")]),L],64)}var I=i(h,[["render",w]]);export{I as default};
