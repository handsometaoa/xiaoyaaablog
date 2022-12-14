---
description: 快速尝鲜 NodeJS
tags:
  - nodejs
  - nvm
  - curl
sidebarDepth: 2
---

# 快速尝鲜 NodeJS

## 安装

虽然可以直接从 [Node 官网](https://nodejs.org/) 下载并安装它，但更推荐的使用方式是利用 [nvm](https://github.com/creationix/nvm) 来处理它，因为 `nvm` 还提供了多版本的共存的解决方式，可以更快捷的切换、尝鲜。

### 1. 安装 nvm

```bash
# 安装脚本(具体版本可看官网)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# 验证安装
nvm --version # 若失败需执行 `source ~/.bashrc` 使环境变量生效
# 0.34.0
```

### 2. 安装 node

```bash
# 查看当前
nvm ls

# 查看可用
nvm ls-remote

# 安装指定版本
nvm install v12.16.3

# 设置默认版本
nvm alias default v12.16.3

# 验证 node
node -v
# v12.16.3

# 切换版本
nvm use v13.13.0
```

当下载速度不够理想时，你可以修改 `~/.curlrc` 配置：

```sh
# socks5
socks5 = "127.0.0.1:1080"
# 或 http
proxy = "127.0.0.1:9999"
```

这是因为 `nvm` 通过 [curl](https://stackoverflow.com/questions/42244572/nvm-proxy-settings-configuration-file) 来安装 `node`。

### 3. nvm 全局包迁移

在 windows 下使用时切换 node 版本全局包不会丢失，而在 manjaro 下使用时遇到了该情况，可利用 [--reinstall-packages-from](https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing) 解决。

```bash
nvm install v12.16.3 --reinstall-packages-from=v12.4.0
```

在利用 `npm install -g npm` 升级时同样会导致全局包丢失，所以在任何情况都应该通过 `nvm` 升级。

## 切换源

在缺乏代理的情况下 npm 默认源的速度会比较慢，设置为淘宝源会有比较理想的速度；在私建 npm 服务的情况下，有时部分依赖包需要去私服下载，频繁切换也会麻烦。

这时候就可以使用 [nrm](https://github.com/Pana/nrm) 快速切换源来解决这些问题了。

当然，npm 也自带了设置源的服务，但毕竟使用起来较为麻烦：

```bash
npm config set registry https://registry.npmjs.org/
```

### 1. 安装

nrm 也是 `Node.js` 模块。

```bash
npm install --global nrm
```

### 2. 查看源

```bash
nrm ls

# * npm ---- https://registry.npmjs.org/
#  cnpm --- http://r.cnpmjs.org/
#  taobao - https://registry.npm.taobao.org/
#  nj ----- https://registry.nodejitsu.com/
#  npmMirror  https://skimdb.npmjs.com/registry/
#  edunpm - http://registry.enpmjs.org/
```

### 3. 测速

```bash
nrm test
# * npm ---- 1837ms
#  cnpm --- 1050ms
#  taobao - 125ms
#  nj ----- Fetch Error
#  npmMirror  3027ms
#  edunpm - Fetch Error
```

### 4. 切换源

```bash
nrm use taobao
```

## 一些命令

```bash
# 查看安装在全局 npm 包
npm list -g --depth 0

# npm install 失败时强制清理
npm cache clean --force
```

## 参考资料

1. [Node.js](https://nodejs.org/dist/latest-v10.x/docs/api/)
