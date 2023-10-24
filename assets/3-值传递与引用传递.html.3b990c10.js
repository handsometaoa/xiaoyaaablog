import{c as e}from"./app.7138fe66.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";var r="/assets/1704037-20231008191712122-666041907.ee28f1e4.png",t="/assets/1704037-20231008191721840-218593087.a78d057b.png";const o={},s=e('<h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u4ECA\u5929\u5728\u516C\u53F8\u505A\u9700\u6C42\u7684\u65F6\u5019\uFF0C\u7A81\u7136\u9047\u5230\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u516B\u80A1\u6587\u80CC\u8FC7\uFF0C\u4F46\u662F\u53C8\u8BB0\u4E0D\u5927\u6E05\u695A\u4E86\u3002\u7D22\u6027\u5199\u4E0B\u6765\uFF0C\u65B9\u4FBF\u6211\u8FD9\u7B28\u86CB\u8111\u5B50\u4E0B\u6B21\u770B\u3002</p><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><p>\u7406\u89E3\u8FD9\u4E2A\u95EE\u9898\u5728\u4E8E\u770B\u5B83\u7684<strong>\u89D2\u5EA6</strong>\uFF08\u5F3A\u8C03\u3001\u52A0\u7C97\uFF09</p><p>\u90A3\u6211\u4EEC\u5F00\u59CB\uFF0C<strong>Java\u4E2D\u4E00\u5207\u90FD\u662F\u503C\u4F20\u9012</strong>\uFF08\u4E2D\u5FC3\u53E5\uFF09\uFF0C\u57FA\u672C\u53D8\u91CF\u4F20\u9012\u7684\u5B9E\u9645\u7684\u503C\uFF0C\u6BD4\u5982 <code>int a=3</code> \u4F1A\u5C06 <code>3</code> \u4F20\u9012\u8FDB\u53BB\uFF1B\u5F15\u7528\u53D8\u91CF\u4F20\u9012\u7684\u662F\u5730\u5740\uFF0C\u6BD4\u5982 <code>User user=new User()</code> \u4F1A\u5C06 user \u6240\u5728\u7684\u5730\u5740\u4F20\u9012\u8FDB\u53BB\u3002</p><hr><h3 id="\u4ECE-\u89D2\u5EA6-\u6765\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4ECE-\u89D2\u5EA6-\u6765\u5206\u6790" aria-hidden="true">#</a> \u4ECE <code>\u89D2\u5EA6</code> \u6765\u5206\u6790</h3><p>\u6240\u8C13\u503C\u4F20\u9012\uFF0C\u57FA\u672C\u53D8\u91CF\u672C\u8EAB\u7684 <code>\u503C</code> \u5C31\u662F\u8FD9\u91CC\u7684\u503C, \u5F15\u7528\u53D8\u91CF\u7684 <code>\u5730\u5740</code> \u5C31\u662F\u8FD9\u91CC\u7684\u503C\u3002</p><blockquote><p>String \u53CA\u5305\u88C5\u7C7B\u578B\u4E5F\u662F\u503C\u4F20\u9012\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u5BF9\u8C61\u4E0D\u53EF\u53D8\uFF08Immutability\uFF09\u5177\u4F53\u53EF\u53C2\u8003\uFF1Ahttps://stackoverflow.com/questions/1552301/immutability-of-strings-in-java</p></blockquote><hr><h3 id="\u4ECE-\u53EF\u89C1\u6027-\u6765\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4ECE-\u53EF\u89C1\u6027-\u6765\u5206\u6790" aria-hidden="true">#</a> \u4ECE <code>\u53EF\u89C1\u6027</code> \u6765\u5206\u6790</h3><p>\u57FA\u672C\u53D8\u91CF\uFF1A</p><p>\u5148\u9700\u8981\u4E86\u89E3\uFF0C\u5C40\u90E8\u53D8\u91CF\u4F1A\u653E\u5728\u6808\u4E2D\uFF0C\u6210\u5458\u53D8\u91CF\u4F1A\u653E\u5728\u5806\u4E2D\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+r+'" alt=""></p><blockquote><p>\u4E00\u4E2A\u65B9\u6CD5\u5BF9\u5E94\u4E00\u4E2A\u6808\u5E27\uFF0C\u65B9\u6CD5\u7ED3\u675F\u540E\u6808\u5E27\u4FBF\u4F1A\u5F39\u51FA</p></blockquote><p>\u5728\u4E0A\u56FE\u4E2D\uFF0Ctest \u65B9\u6CD5\u6808\u5E27\u611F\u77E5\u4E0D\u5230 change \u65B9\u6CD5\u7684\u53D8\u5316\uFF0C\u6240\u4EE5\u5F53 change \u65B9\u6CD5\u6808\u5E27\u5F39\u51FA\u540E\uFF0Ctest \u65B9\u6CD5\u4F9D\u65E7\u4F1A\u8F93\u51FA 3 \u3002</p><p><strong>\u5F15\u7533\u4E00\u4E0B</strong>\uFF1A\u73B0\u5728\u4E00\u4E2A\u516C\u53F8\u9700\u6C42 A\u7CFB\u7EDF\u3001B\u7CFB\u7EDF \u8981\u540C\u65F6\u64CD\u4F5C\u4E00\u4E2A\u6570\u636E\uFF0C\u5E76\u8981\u6C42\u5B9E\u65F6\u611F\u77E5\u6570\u636E\u53D8\u5316\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u600E\u4E48\u505A\uFF1F\u6700\u7B80\u5355\u7684\u529E\u6CD5\uFF0C\u52A0\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u4F8B\u5982redis\u3002\u9700\u8981\u6CE8\u610F\u6570\u636E\u4E00\u81F4\u6027\u3002</p><br><p>\u5F15\u7528\u53D8\u91CF\uFF1A</p><p>\u5982\u679C\u662F\u4FEE\u6539\u5F15\u7528\u53D8\u91CF\uFF0C\u90A3\u4E48\u4FBF\u4F1A\u4FEE\u6539\u5806\u4E2D\u7684\u6570\u636E\uFF0C\u591A\u4E2A\u6808\u5E27\u5BF9\u5E94\u4E00\u4E2A\u5806\u4E2D\u5BF9\u8C61\uFF0C\u65E0\u8BBA\u54EA\u4E2A\u65B9\u6CD5\u4FEE\u6539\u4E86\u6570\u636E\uFF0C\u5176\u4ED6\u65B9\u6CD5\u518D\u6B21\u8BBF\u95EE\u90FD\u4F1A\u611F\u77E5\u53D8\u5316\u3002</p><p><img src="'+t+'" alt=""></p>',21);function c(p,d){return s}var h=a(o,[["render",c]]);export{h as default};
