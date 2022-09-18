# Github Actions 自动部署博客
GitHub Actions 是一个持续集成CI (Continuous integration)和持续交付CD (Continuous delivery)的平台，它可以做到自动化构建、测试、部署。你可以创建工作流，构建和测试每一个 pull request 或者部署合并后的代码到生产环境。

简而言之，以前写完代码，使用```Git``` push到仓库，然后。打包镜像，部署服务器，运行镜像。这其中```打包镜像，部署服务器，运行镜像```这些步骤都是重复的工作，上次点击按钮、输入命令和这次、下次及以后都是重复的，这是不是可以让机器做？所以我们要使用Github Actions帮助我们做这件事。每次我们提交到Github仓库，Github就会创建一个虚拟机（虚拟机型号可以配置）来执行脚本中的内容。

