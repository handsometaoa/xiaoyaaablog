import{c as e}from"./app.7138fe66.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";var a="/assets/github-add-ssh-key.d1b9c893.png";const n={},i=e('<h1 id="\u5207\u6362\u591A\u4E2A-github-\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u591A\u4E2A-github-\u8D26\u53F7" aria-hidden="true">#</a> \u5207\u6362\u591A\u4E2A github \u8D26\u53F7</h1><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u5E38\u5E38\u8981\u5BF9\u591A\u4E2A github \u8D26\u53F7\u8FDB\u884C\u5207\u6362\u3002\u6BD4\u5982\uFF0C\u81EA\u5DF1\u7684\u3001\u516C\u53F8\u7684\u3001\u5C0F\u53F7\u3002</p><h2 id="\u5207\u6362\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u6B65\u9AA4" aria-hidden="true">#</a> \u5207\u6362\u6B65\u9AA4</h2><ol><li><p>\u521B\u5EFA ssh key</p></li><li><p>\u5C06 public key \u4E0A\u4F20\u81F3\u670D\u52A1\u5668(\u540D\u5B57\u968F\u610F\u5373\u53EF)</p><p><img src="'+a+`" alt="github add ssh key"></p></li><li><p>\u5728 <code>~/.ssh/</code> \u76EE\u5F55\u4E0B\u521B\u5EFA config \u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> \uFF5E/.ssh/config
</code></pre></div></li><li><p>config \u5185\u5BB9</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6B63\u5E38\u4F7F\u7528\u7684 rsa</span>
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa
 
<span class="token comment"># new \u65B0\u8D26\u53F7</span>
Host new
HostName github.com
IdentityFile ~/.ssh/id_rsa_new
</code></pre></div></li><li><p>clone \u9879\u76EE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u539F\u9879\u76EE\u5730\u5740\u4E3A</span>
<span class="token function">git</span> clone git@github.com:xxxxxx/xxx.git
<span class="token comment"># \u4FEE\u6539\u4E3A </span>
<span class="token function">git</span> clone git@new:xxxxxx/xxx.git
</code></pre></div></li><li><p>push \u9879\u76EE</p><p>\u56E0\u4E3A\u5728\u4E00\u5F00\u59CB clone \u7684\u65F6\u5019\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\uFF0C\u6240\u4EE5 push \u65F6\u5C31\u65E0\u9700\u914D\u7F6E\u4E86\u3002\u4E0D\u8FC7\u6211\u4EEC\u8FD8\u9700\u8981 <code>git config</code> \u4FEE\u6539\u4E00\u4E0B\u672C\u5730\u7684 <code>user.name</code> \u548C <code>user.email</code> \u6765\u4FDD\u8BC1\u662F\u540C\u4E00\u4E2A\u4EBA\u4FEE\u6539\u4E86, \u5426\u5219\u4F1A\u5E94\u7528\u5168\u5C40\u7684 <code>config</code> \u8BBE\u7F6E</p></li></ol>`,5);function c(t,o){return i}var d=s(n,[["render",c]]);export{d as default};
