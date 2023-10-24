import{r as t,o as c,a as p,b as s,d as n,e,w as r,F as i,c as l}from"./app.7138fe66.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const k={},u=s("h1",{id:"websocket-\u53CD\u5411\u4EE3\u7406",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#websocket-\u53CD\u5411\u4EE3\u7406","aria-hidden":"true"},"#"),n(" websocket \u53CD\u5411\u4EE3\u7406")],-1),h={id:"config",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1),g={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf

<span class="token comment"># \u4FEE\u6539\u4E3A\u4EE5\u4E0B\u5185\u5BB9</span>
server</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>
  <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

nginx -s reload <span class="token comment"># \u91CD\u8F7D\u914D\u7F6E</span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>`,2),m={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"ws://echo.websocket.org",-1),f=s("code",null,"ws://nginx.example.com/chat/",-1);function v(b,y){const o=t("RouterLink"),a=t("OutboundLink");return c(),p(i,null,[u,s("p",null,[n("\u5728\u7406\u89E3"),e(o,{to:"/backend/nginx/nginx-upstream.html"},{default:r(()=>[n("\u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861")]),_:1}),n("\u540E\u5C31\u53EF\u4EE5\u5FEB\u901F\u5B9E\u73B0 websocket \u7684\u53CD\u5411\u4EE3\u7406\u3002")]),s("h2",h,[_,n(),s("a",g,[n("config"),e(a)])]),x,s("p",null,[n("\u63A5\u7740\u5728"),s("a",m,[n("\u6D4B\u8BD5\u9875\u9762"),e(a)]),n("\u5C06 Location \u4E2D\u7684 "),w,n(" \u66FF\u6362\u4E3A\u76EE\u6807\u5730\u5740 "),f,n(" \uFF08\u9700\u8981\u4FEE\u6539\u672C\u5730 DNS\uFF09\uFF0CConnect \u6210\u529F\u5373\u4E3A\u6210\u529F\u3002")])],64)}var C=d(k,[["render",v]]);export{C as default};
