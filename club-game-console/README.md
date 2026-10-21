# Club Game Console

一个纯静态的小游戏控制台，用来集中展示多个自包含的单文件 HTML 小游戏。控制台本身只使用 HTML、CSS 和普通 JavaScript，没有构建步骤、后端服务、外部 CDN 或 npm 依赖。

当前工作区没有检测到已上传的示例 HTML 文件，所以 `games/sample.html` 是占位示例。你可以之后直接用自己的单文件游戏替换它。

## 本地预览

在 `club-game-console` 目录中运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 添加新游戏

1. 把新的单文件 HTML 游戏放进 `games/` 目录，例如 `games/puzzle.html`。
2. 打开 `games.js`，在 `window.GAMES = [...]` 里添加一条记录：

```js
{
  id: "puzzle",
  title: "Puzzle Game",
  author: "匿名",
  description: "一句话说明",
  file: "games/puzzle.html",
  emoji: "🧩",
  tags: ["益智"],
  controls: "鼠标 / 键盘"
}
```

每个游戏都应是自包含的 `.html` 文件，不依赖后端、npm、外部 CDN 或远程资源。

## 部署到 GitHub + Vercel

1. 把 `club-game-console` 上传到 GitHub 仓库。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 填 `.`。
6. 点击 Deploy。
