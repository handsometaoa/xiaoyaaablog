const path = require('path');
const katex = require('markdown-it-katex')
const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  theme: path.resolve(__dirname, './theme'),
  bundler: '@vuepress/vite',
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => ['mi', 'msup', 'mo', 'mrow', 'annotation', 'semantics', 'math', 'msub'].includes(tag)
        }
      }
    }
  },
  lang: 'zh-CN',
  title: 'HANDSOMETAOA · XIAOYA',
  description: 'HANDSOMETAOA · XIAOYA\'s BLOG, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    logo: '/logo.jpg',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    docsRepo: 'handsometaoa/xiaoyaaablog',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs',
    docsBranch: 'main',
    navbar: navConf,
    sidebar: sidebarConf
  },
  markdown: {
    importCode: {
      handleImportPath: str => str.replace(/^@components/, path.resolve(__dirname, './components'))
    },
    code: {
      lineNumbers: false
    }
  },
  extendsMarkdown(md) {
    md.use(katex)
  }
}