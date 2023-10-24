import{r as p,o,a as c,b as n,d as a,e,F as l,c as t}from"./app.7138fe66.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const u={},i=n("h1",{id:"prometheus",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prometheus","aria-hidden":"true"},"#"),a(" Prometheus")],-1),k=n("h2",{id:"\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u90E8\u7F72","aria-hidden":"true"},"#"),a(" \u90E8\u7F72")],-1),m={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> prometheus-2.24.1.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local/

<span class="token comment"># \u94FE\u63A5</span>
<span class="token builtin class-name">cd</span> /usr/local/
<span class="token function">ln</span> <span class="token parameter variable">-sv</span> prometheus-2.24.1.linux-amd64 prometheus

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token builtin class-name">cd</span> prometheus
./prometheus <span class="token comment"># \u53EF\u5728\u5BF9\u5E94 ip \u7684 9090 \u7AEF\u53E3\u8BBF\u95EE</span>

<span class="token comment"># \u5C06 prometheus \u6CE8\u518C\u4E3A\u670D\u52A1</span>
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/systemd/system/prometheus.service <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;
[Unit]
Description=Prometheus Server
Documentation=https://prometheus.io/docs/introduction/overview/
After=network-online.target

[Service]
Restart=on-failure
ExecStart=/usr/local/prometheus/prometheus \\
  --config.file=/usr/local/prometheus/prometheus.yml \\
  --storage.tsdb.path=/usr/local/prometheus/data

[Install]
WantedBy=multi-user.target
EOF</span>

<span class="token comment"># \u542F\u7528</span>
<span class="token function">sudo</span> systemctl daemon-reload <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sudo</span> systemctl start prometheus <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sudo</span> systemctl status prometheus
</code></pre></div>`,1),h={href:"https://hub.docker.com/u/prom",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/cloudalchemy/ansible-prometheus",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /path/to/config:/etc/prometheus <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> prometheus <span class="token punctuation">\\</span>
  prom/prometheus
</code></pre></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2>`,2),b={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"global",-1),f=n("code",null,"alerting",-1),v=n("code",null,"rule_files",-1),x=n("code",null,"scrape_configs",-1),q=t(`<div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># my global config</span>
<span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span>     15s <span class="token comment"># Set the scrape interval to every 15 seconds. Default is every 1 minute.</span>
  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># Evaluate rules every 15 seconds. The default is every 1 minute.</span>
  <span class="token comment"># scrape_timeout is set to the global default (10s).</span>

<span class="token comment"># Alertmanager configuration</span>
<span class="token key atrule">alerting</span><span class="token punctuation">:</span>
  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token comment"># - alertmanager:9093</span>

<span class="token comment"># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span>
<span class="token key atrule">rule_files</span><span class="token punctuation">:</span>
  <span class="token comment"># - &quot;first_rules.yml&quot;</span>
  <span class="token comment"># - &quot;second_rules.yml&quot;</span>

<span class="token comment"># A scrape configuration containing exactly one endpoint to scrape:</span>
<span class="token comment"># Here it&#39;s Prometheus itself.</span>
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token comment"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;prometheus&#39;</span>

    <span class="token comment"># metrics_path defaults to &#39;/metrics&#39;</span>
    <span class="token comment"># scheme defaults to &#39;http&#39;.</span>

    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;localhost:9090&#39;</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h3><p>\u8FD9\u662F Prometheus \u7684\u6838\u5FC3\u6280\u672F\uFF0C\u901A\u8FC7\u91CD\u65B0\u6807\u8BB0\uFF0C\u53EF\u4EE5\u63A7\u5236\u3001\u7BA1\u7406\u5E76\u6807\u51C6\u5316\u6307\u6807\u3002</p><p>\u4F8B\u5982\u5728 Prometheus Web UI \u7684 <code>/targets</code> \u9875\u9762\u4E2D\u7684 <code>Labels</code>\u3002</p><p>\u6709\u4E24\u4E2A\u9636\u6BB5\u53EF\u4EE5\u91CD\u65B0\u6807\u8BB0\uFF1A\u5728\u6293\u53D6\u4E4B\u524D\u4F7F\u7528 <code>relabel_configs</code>\uFF0C\u5728\u6293\u53D6\u4E4B\u540E\u4F7F\u7528 <code>metric_relabel_configs</code>\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;docker&#39;</span>
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10.0.0.131:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10.0.0.132:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10.0.0.133:8080&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">metric_relabel_configs</span><span class="token punctuation">:</span>
   <span class="token comment"># \u901A\u8FC7\u91CD\u65B0\u6807\u8BB0\u6765\u5220\u9664\u6307\u6807</span>
   <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__name__<span class="token punctuation">]</span>
      <span class="token key atrule">separator</span><span class="token punctuation">:</span> <span class="token string">&#39;,&#39;</span>
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;(container_tasks_state|container_memory_failures_total)&#39;</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> drop
    <span class="token comment"># \u66FF\u6362\u6807\u7B7E\u503C</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span>
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;/docker/([a-z0-9]+)&#39;</span>
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> <span class="token string">&#39;$1&#39;</span>
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> container_id
</code></pre></div><h2 id="\u76D1\u63A7\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u793A\u4F8B" aria-hidden="true">#</a> \u76D1\u63A7\u793A\u4F8B</h2><h3 id="_1-node-exporter" tabindex="-1"><a class="header-anchor" href="#_1-node-exporter" aria-hidden="true">#</a> 1. node exporter</h3>`,8),w={href:"https://prometheus.io/download/#node_exporter",target:"_blank",rel:"noopener noreferrer"},j={href:"https://gist.github.com/jarek-przygodzki/735e15337a3502fea40beba27e193b04",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7528\u6237</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /bin/false node_exporter

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ~/node_exporter-1.1.1.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local/bin/ --strip-components<span class="token operator">=</span><span class="token number">1</span> node_exporter-1.1.1.linux-amd64/node_exporter

<span class="token comment"># \u5C06 node_exporter \u6CE8\u518C\u4E3A\u670D\u52A1</span>
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/systemd/system/node_exporter.service <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;
[Unit]
Description=Node Exporter

[Service]
User=node_exporter
Group=node_exporter
EnvironmentFile=-/etc/sysconfig/node_exporter
ExecStart=/usr/local/bin/node_exporter \\
  --collector.ntp \\
  --collector.mountstats \\
  --collector.systemd \\
  --collector.tcpstat \\
  $OPTIONS

[Install]
WantedBy=multi-user.target
EOF</span>

<span class="token comment"># \u542F\u7528</span>
<span class="token function">sudo</span> systemctl daemon-reload <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sudo</span> systemctl start node_exporter <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> node_exporter <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sudo</span> systemctl status node_exporter
</code></pre></div><p>\u6839\u636E\u4E0A\u9762\u793A\u4F8B\uFF0C\u589E\u52A0\u591A\u4E2A\u4E3B\u673A\uFF0C\u6700\u540E\u5728\u76D1\u63A7\u670D\u52A1\u7684 <code>prometheus.yml</code> \u6587\u4EF6\u8FFD\u52A0\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;node_exporter&#39;</span>
  <span class="token comment"># \u9759\u6001\u914D\u7F6E</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9100</span>
      <span class="token punctuation">-</span> 10.0.0.132<span class="token punctuation">:</span><span class="token number">9100</span>
      <span class="token punctuation">-</span> 10.0.0.133<span class="token punctuation">:</span><span class="token number">9100</span>
</code></pre></div><h3 id="_2-docker-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-docker-\u5BB9\u5668" aria-hidden="true">#</a> 2. Docker \u5BB9\u5668</h3><p>\u63A8\u8350\u4F7F\u7528 <a href="google/cadvisor">google/cadvisor</a> \u6765\u76D1\u63A7\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> cadvisor <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /:/rootfs:ro <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/run:/var/run:ro <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /sys:/sys:ro <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/lib/docker/:/var/lib/docker:ro <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /dev/disk/:/dev/disk:ro <span class="token punctuation">\\</span>
  google/cadvisor
</code></pre></div><h3 id="_3-\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_3-\u65E5\u5FD7" aria-hidden="true">#</a> 3. \u65E5\u5FD7</h3><p>\u5BF9\u4E8E\u6CA1\u6709\u8BBE\u7F6E\u76D1\u63A7\u6216\u4E0D\u5BB9\u6613\u8FDB\u884C\u76D1\u63A7\u7684\u9057\u7559\u5E94\u7528\u7A0B\u5E8F\uFF0C\u91CD\u5199\u3001\u4FEE\u8865\u3001\u91CD\u6784\u7A0B\u5E8F\u4EE5\u66B4\u9732\u5185\u90E8\u72B6\u6001\u7684\u6210\u672C\u5F88\u9AD8\uFF0C\u800C\u4F7F\u7528\u65E5\u5FD7\u6570\u636E\u4F5C\u4E3A\u6293\u53D6\u65F6\u95F4\u5E8F\u5217\u6570\u636E\u7684\u6765\u6E90\u5219\u66F4\u5177\u6709\u53EF\u884C\u6027\u3002</p>`,8),S={href:"https://github.com/google/mtail/tree/master/examples",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-dP</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> myapp-mtail <span class="token punctuation">\\</span>
  --volumes-from myapp <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> examples:/etc/mtail <span class="token punctuation">\\</span>
  mtail <span class="token parameter variable">--logs</span> /var/log/myapp <span class="token parameter variable">--progs</span> /etc/mtail
</code></pre></div><h3 id="_4-\u9ED1\u76D2\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#_4-\u9ED1\u76D2\u76D1\u63A7" aria-hidden="true">#</a> 4. \u9ED1\u76D2\u76D1\u63A7</h3>`,2),E={href:"https://github.com/prometheus/blackbox_exporter",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>\u5148\u6307\u5B9A\u8981\u55C5\u63A2\u7684\u914D\u7F6E\u4FE1\u606F\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">modules</span><span class="token punctuation">:</span>
  <span class="token key atrule">http_2xx</span><span class="token punctuation">:</span>
    <span class="token key atrule">prober</span><span class="token punctuation">:</span> http
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">valid_status_codes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token key atrule">method</span><span class="token punctuation">:</span> GET
  <span class="token key atrule">icmp_check</span><span class="token punctuation">:</span>
    <span class="token key atrule">prober</span><span class="token punctuation">:</span> icmp
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
    <span class="token key atrule">icmp</span><span class="token punctuation">:</span>
      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span>
  <span class="token key atrule">dns_examplecom_check</span><span class="token punctuation">:</span>
    <span class="token key atrule">prober</span><span class="token punctuation">:</span> dns
    <span class="token key atrule">dns</span><span class="token punctuation">:</span>
      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span>
      <span class="token key atrule">query_name</span><span class="token punctuation">:</span> <span class="token string">&quot;www.example.com&quot;</span>
  <span class="token key atrule">dns_tcp_example</span><span class="token punctuation">:</span>
    <span class="token key atrule">prober</span><span class="token punctuation">:</span> dns
    <span class="token key atrule">dns</span><span class="token punctuation">:</span>
      <span class="token key atrule">transport_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span> <span class="token comment"># defaults to &quot;udp&quot;</span>
      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span> <span class="token comment">#  defaults to &quot;ip6&quot;</span>
      <span class="token key atrule">query_name</span><span class="token punctuation">:</span> <span class="token string">&quot;www.prometheus.io&quot;</span>
</code></pre></div><p>\u518D\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9115</span>:9115 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>:/config <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> blackbox_exporter <span class="token punctuation">\\</span>
 prom/blackbox-exporter:master <span class="token punctuation">\\</span>
 <span class="token parameter variable">--config.file</span><span class="token operator">=</span>/config/prober.yml
</code></pre></div><h2 id="\u670D\u52A1\u53D1\u73B0" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u53D1\u73B0" aria-hidden="true">#</a> \u670D\u52A1\u53D1\u73B0</h2><p>\u5BF9\u4E8E\u4E3B\u673A\u6BD4\u8F83\u5C11\u65F6\u7F16\u8F91\u914D\u7F6E\u8FD8\u53EF\u4EE5\uFF0C\u4F46\u968F\u7740\u6570\u91CF\u4E0A\u5347\u5C31\u8BE5\u9009\u62E9\u66F4\u4F18\u96C5\u7684\u5F62\u5F0F\u4E86\u3002</p><h3 id="_1-\u57FA\u4E8E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u4E8E\u6587\u4EF6" aria-hidden="true">#</a> 1. \u57FA\u4E8E\u6587\u4EF6</h3><p>\u4EC5\u4EC5\u524D\u8FDB\u4E86\u4E00\u5C0F\u6B65\uFF0C\u4F46\u4E0E\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\u7ED3\u5408\u8D77\u6765\u5012\u662F\u5F88\u597D\u7528\u3002</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># prometheus/prometheus.yml</span>
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;prometheus&#39;</span>
    <span class="token key atrule">file_sd_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">files</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> targets/prometheus<span class="token punctuation">-</span><span class="token important">*.yaml</span>
      <span class="token key atrule">refresh_interval</span><span class="token punctuation">:</span> 2m
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;node_exporter&#39;</span>
    <span class="token key atrule">file_sd_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">files</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> targets/nodes<span class="token punctuation">-</span><span class="token important">*.yaml</span>
      <span class="token key atrule">refresh_interval</span><span class="token punctuation">:</span> 2m
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># prometheus/targets/prometheus-servers.yaml</span>
<span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9090</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">job</span><span class="token punctuation">:</span> prometheus
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># prometheus/targets/nodes-linux.yaml</span>
<span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9100</span>
  <span class="token punctuation">-</span> 10.0.0.132<span class="token punctuation">:</span><span class="token number">9100</span>
  <span class="token punctuation">-</span> 10.0.0.133<span class="token punctuation">:</span><span class="token number">9100</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
    <span class="token key atrule">job</span><span class="token punctuation">:</span> node
</code></pre></div><h3 id="_2-\u57FA\u4E8E-api" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u4E8E-api" aria-hidden="true">#</a> 2. \u57FA\u4E8E API</h3><p>\u6682\u4E0D\u8003\u8651\u8BE5\u5F62\u5F0F\uFF0C\u5F85\u540E\u671F\u76F4\u63A5\u4E0A k8s\u3002</p><h3 id="_3-\u57FA\u4E8E-dns" tabindex="-1"><a class="header-anchor" href="#_3-\u57FA\u4E8E-dns" aria-hidden="true">#</a> 3. \u57FA\u4E8E DNS</h3>`,14),O={href:"https://github.com/jpillora/docker-dnsmasq",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># prometheus \u8BBE\u7F6E</span>
<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;dns-srv&#39;</span>
  <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> <span class="token string">&quot;/metrics&quot;</span>
  <span class="token key atrule">dns_sd_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;_prometheus._tcp.example.com&#39;</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># dnsmasq \u89E3\u6790 srv</span>
<span class="token comment"># A SRV record sending LDAP for the example.com domain to ldapserver.example.com port 289</span>
<span class="token comment"># srv-host=_ldap._tcp.example.com,ldapserver.example.com,389</span>
srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns1.example.com,9100
srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns2.example.com,9100
srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns3.example.com,9100
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># dnsmasq \u89E3\u6790 ip</span>
dns1.example.com <span class="token number">10.0</span>.0.131
dns2.example.com <span class="token number">10.0</span>.0.132
dns3.example.com <span class="token number">10.0</span>.0.133
</code></pre></div><h2 id="\u56FE\u5F62\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u56FE\u5F62\u754C\u9762" aria-hidden="true">#</a> \u56FE\u5F62\u754C\u9762</h2>`,4),N={href:"https://hub.docker.com/r/grafana/grafana",target:"_blank",rel:"noopener noreferrer"},z={href:"https://grafana.com/grafana/dashboards?plcmt=footer",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> grafana <span class="token punctuation">\\</span>
 grafana/grafana
</code></pre></div><p>\u7A0D\u540E\u8BBF\u95EE <code>10.0.0.128:3000</code> \u5E76\u4F7F\u7528 <code>admin/admin</code> \u8FDB\u884C\u767B\u5F55\uFF0C\u5728 <code>Configuration</code> \u542F\u7528 <code>Prometheus</code>\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728 <code>Dashboards</code> \u7684 <code>Manage</code> \u4E2D\u67E5\u770B\u4E86\u3002</p><h2 id="\u8B66\u62A5" tabindex="-1"><a class="header-anchor" href="#\u8B66\u62A5" aria-hidden="true">#</a> \u8B66\u62A5</h2><p>\u826F\u597D\u7684\u8B66\u62A5\u5E94\u8BE5\u5177\u5907\u4EE5\u4E0B\u7279\u5F81\uFF1A</p><ol><li>\u9002\u5F53\u6570\u91CF\u7684\u8B66\u62A5\uFF0C\u5173\u6CE8\u75C7\u72B6\u800C\u4E0D\u662F\u539F\u56E0</li><li>\u5E94\u8BBE\u7F6E\u6B63\u786E\u7684\u8B66\u62A5\u4F18\u5148\u7EA7</li><li>\u8B66\u62A5\u5E94\u5305\u62EC\u9002\u5F53\u7684\u4E0A\u4E0B\u6587\uFF0C\u4EE5\u4FBF\u5B83\u4EEC\u53EF\u4EE5\u7ACB\u5373\u4F7F\u7528</li></ol><p>\u6211\u4EEC\u4F1A\u5728 Prometheus \u670D\u52A1\u5668\u4E0A\u7F16\u5199\u8B66\u62A5\u89C4\u5219\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5C06\u4F7F\u7528\u6536\u96C6\u7684\u6307\u6807\u5E76\u5728\u6307\u5B9A\u7684\u9608\u503C\u6216\u6807\u51C6\u4E0A\u89E6\u53D1\u8B66\u62A5\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u8B66\u62A5\u6DFB\u52A0\u4E00\u4E9B\u4E0A\u4E0B\u6587\u3002\u5F53\u6307\u6807\u8FBE\u5230\u9608\u503C\u6216\u6807\u51C6\u65F6\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2A\u8B66\u62A5\u5E76\u5C06\u5176\u63A8\u9001\u5230 Alertmanager\u3002</p>`,6),L={href:"https://awesome-prometheus-alerts.grep.to/",target:"_blank",rel:"noopener noreferrer"},I=t(`<h3 id="alertmanager" tabindex="-1"><a class="header-anchor" href="#alertmanager" aria-hidden="true">#</a> alertmanager</h3><p>Alertmanager \u4F1A\u5BF9\u8B66\u62A5\u8FDB\u884C\u53BB\u91CD\u3001\u5206\u7EC4\uFF0C\u7136\u540E\u8DEF\u7531\u5230\u4E0D\u540C\u7684\u63A5\u6536\u5668\uFF0C\u5982\u7535\u5B50\u90AE\u4EF6\u3001\u77ED\u4FE1\u6216 SaaS \u670D\u52A1\u7B49\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9093</span>:9093 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /path/alertmanager.yml:/etc/alertmanager/alertmanager.yml <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> alertmanager <span class="token punctuation">\\</span>
 prom/alertmanager
</code></pre></div><h3 id="\u914D\u7F6E\u6CE8\u610F\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6CE8\u610F\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u6CE8\u610F\u9879</h3><p>\u9ED8\u8BA4 <code>prometheus.yml</code> \u4E2D <code>alertmanager:9093</code> \u5728 hosts \u89E3\u6790\u4E0B\u624D\u4F1A\u751F\u6548\uFF0C\u53EF\u624B\u52A8\u6307\u5B9A <code>ip:port</code> \u89E3\u51B3\u3002</p><p><code>alertmanager.yml</code> \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u8B66\u62A5\u90FD\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u6307\u5B9A <code>group_by: [&#39;instance&#39;]</code> \u53EF\u6839\u636E\u5B9E\u4F8B\u7EC4\u5408\u5728\u4E00\u8D77\u3002</p>`,6),T={href:"https://prometheus.io/docs/alerting/latest/configuration/#route",target:"_blank",rel:"noopener noreferrer"};function V(C,U){const s=p("OutboundLink");return o(),c(l,null,[i,k,n("p",null,[a("\u524D\u5F80"),n("a",m,[a("\u5B98\u7F51"),e(s)]),a("\u4E0B\u8F7D\u6838\u5FC3\uFF1A")]),d,n("p",null,[a("\u4F7F\u7528 "),n("a",h,[a("Docker"),e(s)]),a(" \u6216 "),n("a",g,[a("Ansible"),e(s)]),a(" \u5219\u7B80\u5355\u8BB8\u591A\uFF1A")]),_,n("p",null,[a("\u9ED8\u8BA4 "),n("a",b,[a("prometheus.yml"),e(s)]),a(" \u5B9A\u4E49\u4E86 4 \u4E2A YAML \u5757\uFF1A"),y,a("\u3001"),f,a("\u3001"),v,a(" \u548C "),x,a("\u3002")]),q,n("p",null,[a("\u4EE5\u7CFB\u7EDF\u6307\u6807 "),n("a",w,[a("node_exporter"),e(s)]),a(" \u4E3A\u793A\u4F8B\uFF0C\u53EF\u53C2\u7167 "),n("a",j,[a("node_exporter-as-systemd-service"),e(s)]),a(" \u8FDB\u884C\u914D\u7F6E\uFF1A")]),P,n("p",null,[a("\u5728 "),n("a",S,[a("examples"),e(s)]),a(" \u4E2D\u63D0\u4F9B\u4E86\u65E5\u5FD7\u89E3\u6790\u6A21\u677F\u3002")]),A,n("p",null,[a("\u53EF\u4EE5\u4F7F\u7528\u63A2\u9488\u76D1\u63A7\u6765\u67E5\u770B\u5E94\u7528\u7A0B\u5E8F\u7684\u5916\u90E8\u72B6\u6001\uFF0C"),n("a",E,[a("Blackbox exporter"),e(s)]),a("\u3002")]),D,n("p",null,[a("\u53EF\u914D\u5408 "),n("a",O,[a("docker-dnsmasq"),e(s)]),a(" \u5FEB\u901F\u4F7F\u7528\u3002")]),F,n("p",null,[a("\u53EF\u4F7F\u7528 "),n("a",N,[a("grafana"),e(s)]),a(" \u5B8C\u6210\u56FE\u5F62\u754C\u9762\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u65B9\u4FBF\u7684 "),n("a",z,[a("Dashboards"),e(s)]),a(" \u6765\u5BFC\u5165\u4ED6\u4EBA\u7684\u4F5C\u54C1\u3002")]),B,n("p",null,[a("\u53EF\u4EE5\u53C2\u8003\u4E00\u4E9B\u62A5\u8B66\u89C4\u5219 "),n("a",L,[a("Awesome Prometheus alerts"),e(s)]),a("\u3002")]),I,n("p",null,[a("\u66F4\u591A\u914D\u7F6E\u53EF\u89C1 "),n("a",T,[a("route"),e(s)]),a("\u3002")])],64)}var G=r(u,[["render",V]]);export{G as default};
