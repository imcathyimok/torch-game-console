/*
  Club Game Console game list

  Add new self-contained HTML games to the games/ folder, then append records here.
  Record template:
  {
    id: "my-game",
    title: "My Game",
    author: "匿名",
    description: "一句话说明",
    file: "games/my-game.html",
    emoji: "🎮",
    tags: ["标签1", "标签2"],
    controls: "鼠标 / 键盘"
  }
*/

window.GAMES = [
  {
    id: "sophia",
    title: "蛋糕工坊 · 手作大师",
    author: "Sophia",
    description: "搭配蛋糕胚与夹心，亲手搅拌奶油、抹面和装饰，保存专属蛋糕作品。",
    file: "games/Sophia.html",
    emoji: "🍰",
    tags: ["烘焙", "装饰", "手工", "治愈"],
    controls: "点击选择材料与工具，拖动搅拌、抹面和装饰，完成后可保存图片"
  },
  {
    id: "kevin",
    title: "霓虹跑酷",
    author: "前端工程师",
    description: "在霓虹夜色中奔跑，跳过红色障碍、滑过悬空方块，躲避无人机子弹，收集青色宝石拿高分。",
    file: "games/Kevin.html",
    emoji: "🏃",
    tags: ["跑酷", "休闲", "无尽", "霓虹", "敌人"],
    controls: "空格 / ↑ / W 跳跃（可二段跳），↓ / S 滑铲；手机点屏幕跳跃、按住「滑」按钮滑铲"
  },
  {
    id: "cathy",
    title: "豆豆拼拼",
    author: "Cathy",
    description: "选颜色、点格子，在拼豆底板上拼出可爱图案并熨烫定型收藏。",
    file: "games/Cathy.html",
    emoji: "🧩",
    tags: ["拼豆", "像素画", "治愈", "手工", "休闲"],
    controls: "点击 / 拖拽网格放置拼豆，点调色板选色，长按色块收藏；底部工具栏切换画笔 / 橡皮 / 吸管 / 填充等"
  },
  {
    id: "cathy2",
    title: "波点牧场 Dotty Farm",
    author: "Cathy",
    description: "选择可爱农场动物，用颜色、波点图案、贴纸和背景自由装饰，拍照保存。",
    file: "games/Cathy2.html",
    emoji: "🐮",
    tags: ["装饰", "换装", "治愈", "波点", "手工"],
    controls: "点击动物部位上色 / 贴图案，点贴纸加到画面后拖拽移动，底部工具栏撤销重做等"
  },
  {
    id: "alison",
    title: "小小餐厅 · Cooking Day",
    author: "Alison",
    description: "经营小小餐厅，完成料理订单，赚取金币。",
    file: "games/Alison- chefchefliketoeat (1).html",
    emoji: "🍳",
    tags: ["烹饪", "经营", "休闲"],
    controls: "点击食材，再切菜 → 下锅 → 开火 → 上菜"
  },
  {
    id: "charles",
    title: "Charles",
    author: "Kevin",
    description: "控制挡板反弹小球，击碎全部砖块获胜，小球掉落则失败。",
    file: "games/Charles.html",
    emoji: "🧱",
    tags: ["休闲", "打砖块", "反弹"],
    controls: "鼠标移动 / 左右方向键，手机可滑动"
  },
  {
    id: "sample",
    title: "Sample Game",
    author: "匿名",
    description: "示例游戏",
    file: "games/sample.html",
    emoji: "🎮",
    tags: ["示例"],
    controls: "鼠标 / 键盘"
  }
];
