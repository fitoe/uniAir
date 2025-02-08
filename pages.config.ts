import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'
import { teamName } from './src/composables/settings'

export default defineUniPages({
  pages: [],
  easycom: {
    custom: {},
  },
  globalStyle: {
    'navigationBarTitleText': teamName,
    'navigationBarTextStyle': '@navTxtStyle',
    'navigationBarBackgroundColor': '@navBgColor',
    'backgroundColor': '@bgColor',
    'backgroundTextStyle': '@bgTxtStyle',
    'backgroundColorTop': '@bgColorTop',
    'backgroundColorBottom': '@bgColorBottom',
    'onReachBottomDistance': 400,
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
  condition: {
    current: 0,
    list: [
      {
        name: '首页',
        path: '/pages/index',
        query: '',
      },
    ],
  },
})
