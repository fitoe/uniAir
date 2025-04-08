/// <reference types="vitest" />
import { resolve } from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import uniPolyfill from 'vite-plugin-uni-polyfill'
const exclude = [
  // 不需要打包的页面
  '**/not-publish.vue',
]
export default async ({ mode }) => {
  const UnoCSS = (await import('unocss/vite')).default
  const env = loadEnv(mode, process.cwd())
  const prod = ['production'].includes(mode)
  return defineConfig({
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    optimizeDeps: {
      exclude: ['vue-demi'],
    },
    publicDir: 'public',
    build: {
      outDir: 'dist',
      minify: prod,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          quietDeps: true,
        },
      },
    },
    plugins: [
      uni.default(),
      uniPolyfill(),
      UniHelperManifest(),
      UniPages({
        subPackages: ['src/subpages'],
        exclude,
      }),
      UniLayouts(),
      UnoCSS(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          uniuseAutoImports(),
          'pinia',
          { 'alova/client': ['useRequest', 'usePagination', 'useAutoRequest', 'useWatcher'] },
        ],
        dts: true,
        dirs: [
          'src/composables',
          'src/stores',
          'src/api',
        ],
        vueTemplate: true,
      }),
      Components({
        dts: 'src/components.d.ts',
        directoryAsNamespace: true,
        resolvers: [WotResolver()],
      }),
    ],
  })
}
