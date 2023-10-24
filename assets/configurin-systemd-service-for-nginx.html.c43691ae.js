import{r as p,o as r,a as c,b as n,d as a,e as s,w as o,F as i,c as e}from"./app.7138fe66.js";import{_ as k}from"./plugin-vue_export-helper.5a098b48.js";const g={},u=n("h1",{id:"\u4E3A-nginx-\u914D\u7F6E-systemd-\u670D\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3A-nginx-\u914D\u7F6E-systemd-\u670D\u52A1","aria-hidden":"true"},"#"),a(" \u4E3A Nginx \u914D\u7F6E systemd \u670D\u52A1")],-1),d=e(`<h2 id="\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u9605\u8BFB" aria-hidden="true">#</a> \u9605\u8BFB</h2><p>\u9996\u5148\u9700\u8981\u4E86\u89E3\u4E00\u4E0B yum \u5B89\u88C5\u7684 Nginx \u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token function">cat</span> nginx.service

<span class="token comment"># /lib/systemd/system/nginx.service</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx - high performance web server
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target remote-fs.target nss-lookup.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/nginx.pid
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-c</span> /etc/nginx/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> <span class="token environment constant">TERM</span> <span class="token variable">$MAINPID</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div>`,3),m={href:"https://www.nginx.com/resources/wiki/start/topics/examples/systemd/",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>The NGINX HTTP and reverse proxy server
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><h2 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h2><h3 id="_1-\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D" aria-hidden="true">#</a> 1. \u4E0B\u8F7D</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src <span class="token comment"># /usr/src \u5E38\u7528\u4E8E\u5B58\u653E\u5185\u6838\u6E90\u7801</span>
</code></pre></div>`,4),x=e(`<h3 id="_2-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u8BD1" aria-hidden="true">#</a> 2. \u7F16\u8BD1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--help</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token comment"># \u67E5\u770B\u5E2E\u52A9</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token comment"># \u6307\u5B9A\u76EE\u5F55</span>
<span class="token function">make</span> <span class="token comment"># \u7F16\u8BD1</span>
<span class="token function">make</span> <span class="token function">install</span> <span class="token comment"># \u5B89\u88C5</span>

/usr/local/nginx <span class="token parameter variable">-V</span> <span class="token comment"># \u9A8C\u8BC1 </span>
</code></pre></div><h3 id="_3-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E" aria-hidden="true">#</a> 3. \u914D\u7F6E</h3><p>nginx \u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u542F\u7528 pid \u8DEF\u5F84</span>
<span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf
</code></pre></div><p>systemd \u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/nginx-compile.service <span class="token comment"># \u6B64\u5904\u81EA\u5B9A\u4E49\u547D\u540D\u4E3A nginx-compile</span>

<span class="token comment"># \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx<span class="token punctuation">(</span>compile<span class="token punctuation">)</span> - high performance web server
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>http://nginx.org/en/docs/
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># \u5B98\u7F51\u793A\u4F8B\u5982\u4E0B\uFF0C\u4F46\u4E2A\u4EBA\u4F7F\u7528\u7684\u4E3A\u4E0A\u9762\u4E24\u79CD\uFF0C\u5C1A\u5206\u4E0D\u6E05\u597D\u574F</span>
<span class="token comment"># ExecReload=/bin/kill -s HUP $MAINPID</span>
<span class="token comment"># ExecStop=/bin/kill -s QUIT $MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><h3 id="_4-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_4-\u9A8C\u8BC1" aria-hidden="true">#</a> 4. \u9A8C\u8BC1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl status nginx-compile.service <span class="token comment"># \u663E\u793A\u6B63\u786E\u540E\u5373\u53EF\u6267\u884C systemctl \u5957\u4EF6</span>
systemctl start nginx-compile.service
systemctl <span class="token builtin class-name">enable</span> nginx-compile.service
systemctl status nginx-compile.service <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div>`,9);function v(h,f){const t=p("RouterLink"),l=p("OutboundLink");return r(),c(i,null,[u,n("p",null,[a("\u5F53\u4F7F\u7528"),s(t,{to:"/backend/nginx/install-nginx.html#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:o(()=>[a("\u7F16\u8BD1\u5B89\u88C5 Nginx")]),_:1}),a(" \u540E\uFF0C\u540C\u6837\u5E0C\u671B\u5C06 Nginx \u52A0\u5165\u81F3 systemd \u8FDB\u884C\u7BA1\u7406\uFF0C\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\u5E0C\u671B\u8FDB\u4E00\u6B65\u5BF9\u8BE5 Nginx \u8FDB\u884C\u533A\u5206\u3002")]),d,n("p",null,[a("\u63A5\u7740\u53EF\u4EE5\u9605\u8BFB\u4E0B\u5B98\u7F51\u7684"),n("a",m,[a("\u793A\u4F8B"),s(l)]),a("\uFF1A")]),b,n("p",null,[a("\u63A5\u7740\u6309\u7167"),s(t,{to:"/backend/nginx/install-nginx.html#_2-%E4%B8%8B%E8%BD%BD"},{default:o(()=>[a("\u4E4B\u524D")]),_:1}),a("\u64CD\u4F5C\u3002")]),x],64)}var E=k(g,[["render",v]]);export{E as default};
