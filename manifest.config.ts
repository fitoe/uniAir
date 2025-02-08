import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import pkg from './package.json'
import { appid, teamName } from './src/composables/settings.ts'

export default defineManifestConfig({
  'name': teamName,
  projectname: teamName,
  'appid': appid,
  'description': 'description',
  'versionName': pkg.version,
  'versionCode': '100',
  'transformPx': false,
  /* 5+App特有相关 */
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    compatible: {
      ignoreVersion: true,
    },
    splashscreen: {
      alwaysShowBeforeRender: false,
      waiting: false,
      autoclose: true,
      delay: 0,
    },
    /* 模块配置 */
    modules: {},
    /* 应用发布信息 */
    distribute: {
      /* android打包配置 */
      android: {
        minSdkVersion: 21,
        permissions: [],
      },
      /* ios打包配置 */
      ios: {},
      /* SDK配置 */
      sdkConfigs: {},
    },
  },
  /* 快应用特有相关 */
  'quickapp': {},
  /* 小程序特有相关 */
  'mp-weixin': {
    appid,
    projectname: teamName,
    setting: {
      urlCheck: false,
      es6: true,
      minified: true,
      bigPackageSizeSupport: true,
    },
    permission: {
      'scope.userLocation': {
        desc: '选择当前位置',
      },
    },
    requiredPrivateInfos: ['chooseLocation', 'getLocation'],
    mergeVirtualHostAttributes: true,
    usingComponents: true,
    darkmode: false,
    lazyCodeLoading: 'requiredComponents',
    themeLocation: 'theme.json',
  },
  'mp-alipay': {
    usingComponents: true,
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  'h5': {
    darkmode: false,
    themeLocation: 'theme.json',
    router: {
      mode: 'hash',
      base: './',
    },
    sdkConfigs: {
      // 使用地图或位置相关功能必须填写其一
      maps: {
        qqmap: {
          // 腾讯地图秘钥 https://lbs.qq.com/dev/console/key/manage
          key: '',
        },
        google: {
          // 谷歌地图秘钥（HBuilderX 3.2.10+）https://developers.google.com/maps/documentation/javascript/get-api-key
          key: '',
        },
        amap: {
          // 高德地图秘钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
          key: '',
          // 高德地图安全密钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
          securityJsCode: '',
          // 高德地图安全密钥代理服务器地址（HBuilderX 3.6.0+）https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare
          serviceHost: '',
        },
        bmap: {
          // 百度地图秘钥（HBuilderX 3.99+）http://lbsyun.baidu.com/apiconsole/key#/home
          key: '',
        },
      },
    },
    optimization: {
      treeShaking: {
        enable: false,
      },
    },
    publicPath: './',
  },
  'uniStatistics': {
    enable: false,
  },
  'vueVersion': '3',
}
)
