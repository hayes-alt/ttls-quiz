# TTLS 术语通关测试

这是一个纯静态答题小程序，不需要后端服务。

## 本地打开

直接打开 `index.html` 即可。

## GitHub Pages 部署

1. 在 GitHub 新建一个公开仓库，例如 `ttls-quiz`。
2. 上传本文件夹里的全部文件到仓库根目录：

```text
index.html
styles.css
app.js
README.md
.nojekyll
```

3. 进入仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. 保存后等待 GitHub Pages 发布。

部署后会得到类似这样的公网链接：

```text
https://你的GitHub用户名.github.io/ttls-quiz/
```
