import{r as o,o as t,a as p,b as s,d as a,e as c,F as r,c as n}from"./app.7138fe66.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=n(`<h1 id="\u4EE3\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u5DE5\u5177" aria-hidden="true">#</a> \u4EE3\u7406\u5DE5\u5177</h1><h2 id="shadowsocks" tabindex="-1"><a class="header-anchor" href="#shadowsocks" aria-hidden="true">#</a> Shadowsocks</h2><h3 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h3><p>\u901A\u8FC7\u4EFB\u610F\u5F62\u5F0F\u5B89\u88C5\u5373\u53EF\u3002</p><h3 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u914D\u7F6E</h3><p>\u914D\u7F6E\u6587\u4EF6\u5728 <code>/etc/shadowsocks/config.json</code>\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.xxx.xxx.xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> port<span class="token punctuation">,</span>
  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yourpassword&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefer_ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6587\u4EF6\u540D\u53EF\u4EE5\u81EA\u5B9A\uFF0C\u4E14\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\u6587\u4EF6\u65B9\u4FBF\u5FEB\u901F\u5207\u6362\u3002</p><h3 id="_3-\u6307\u5B9A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u6307\u5B9A\u914D\u7F6E" aria-hidden="true">#</a> 3. \u6307\u5B9A\u914D\u7F6E</h3><p>\u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u4E4B\u524D\u7684 <code>config.json</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>sslocal <span class="token parameter variable">-c</span> /etc/shadowsocks/config.json
</code></pre></div><h3 id="_4-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8" aria-hidden="true">#</a> 4. \u542F\u52A8</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7 \`@\` \u6307\u5B9A\u914D\u7F6E </span>
systemctl start shadowsocks@config
systemctl <span class="token builtin class-name">enable</span> shadowsocks@config
</code></pre></div><h2 id="qv2ray" tabindex="-1"><a class="header-anchor" href="#qv2ray" aria-hidden="true">#</a> Qv2ray</h2><blockquote><p>Qv2ray \u5728 manjaro \u4E0B\u7ECF\u5E38\u4E00\u66F4\u65B0\u7CFB\u7EDF\u5C31\u5D29\uFF0C\u4F24\u900F\u4E86\u5FC3</p></blockquote><h2 id="clash" tabindex="-1"><a class="header-anchor" href="#clash" aria-hidden="true">#</a> Clash</h2><h3 id="_1-\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-1" aria-hidden="true">#</a> 1. \u5B89\u88C5</h3>`,17),u={href:"https://github.com/Dreamacro/clash/releases",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/clash /usr/local/bin
</code></pre></div><h3 id="_2-\u521D\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u8BD5" aria-hidden="true">#</a> 2. \u521D\u8BD5</h3><p>\u76F4\u63A5\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/bin

<span class="token comment"># \u8F93\u51FA</span>
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> Can<span class="token string">&#39;t find config, create a initial config file
INFO[0000] Can&#39;</span>t <span class="token function">find</span> MMDB, start download
INFO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> Mixed<span class="token punctuation">(</span>http+socks5<span class="token punctuation">)</span> proxy listening at: <span class="token number">127.0</span>.0.1:7890
</code></pre></div><p>\u7136\u540E\u5462\uFF1F</p><h3 id="_3-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E" aria-hidden="true">#</a> 3. \u914D\u7F6E</h3><p>\u5728\u4E00\u4E9B\u6559\u7A0B\u4E2D\u80FD\u591F\u76F4\u63A5\u89E3\u6790\u670D\u52A1\u5546\u63D0\u4F9B\u7684 base64\uFF0C\u4F46\u6211\u5931\u8D25\u4E86\uFF0C\u4E8E\u662F\u91C7\u53D6\u4E86\u53D6\u5DE7\u7684\u65B9\u6848\uFF0C\u4ECE\u5DF2\u6709\u7684\u5BFC\u51FA <code>config.yaml</code> \u914D\u7F6E\u5373\u53EF\u3002</p><h3 id="_4-\u5B88\u62A4\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u5B88\u62A4\u8FDB\u7A0B" aria-hidden="true">#</a> 4. \u5B88\u62A4\u8FDB\u7A0B</h3><p>\u79FB\u5165\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/config.yaml /etc/clash
<span class="token function">sudo</span> <span class="token function">cp</span> ~/downloads/Country.mmdb /etc/clash
</code></pre></div><p>\u65B0\u589E <code>systemd</code> \u914D\u7F6E <code>/etc/systemd/system/clash.service</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Clash daemon, A rule-based proxy <span class="token keyword">in</span> Go.
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/clash <span class="token parameter variable">-d</span> /etc/clash

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5176\u4ED6\u4E00\u81F4</span>
<span class="token function">sudo</span> systemctl start clash.service
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clash.service
</code></pre></div>`,14);function k(b,g){const e=o("OutboundLink");return t(),p(r,null,[d,s("p",null,[a("\u5728 "),s("a",u,[a("release"),c(e)]),a(" \u4E2D\u9009\u62E9\u4E00\u4E2A\u9002\u5408\u4F60\u7684\uFF0C\u5E76\u89E3\u538B\u3002")]),h],64)}var x=l(i,[["render",k]]);export{x as default};
