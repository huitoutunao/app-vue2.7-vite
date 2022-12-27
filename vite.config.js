import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const cfg = {
    plugins: [
      vue2(),
      legacy({
        targets: ['defaults', 'ie >= 11', 'chrome 37'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
    build: {
      minify: 'esbuild',
      chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        },
      },
    },
    esbuild: {
      drop: ['debugger'], // 生产环境去除 debugger
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    base: './',
  }

  if (mode === 'production') {
    console.log(`mode ${env.VITE_VERSION_TYPE}`)
    cfg.esbuild.pure = ['console.log'] // 生产环境去除 console.log
  }

  return cfg
})
