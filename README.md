# vitesseAir-uniapp
uniapp 模板，基于 [Vitesse Uni App](https://vitesse-docs.netlify.app)

- 全局变量、方法、组件，vue页面中无需再import任何东西
- 集成[Alovajs](https://alova.js.org/zh-CN/tutorial/getting-started/introduce/),自动管理请求
- 全局请求方法get、post等，可直接使用
- 内置Wot Design组件
- 自动处理在线字典，仅在用到时获取并缓存
- pinia持久化
- 开箱即用的cypress配置
- 支持最新的VueUse

## 配置

- 修改 `src\composables\settings.ts` 中的 `appid`
- 修改 `manifest.config.ts` 中的 `projectname`

## 小技巧
- 空白vue文件使用 `vue3` 快捷键，快速创建默认代码
