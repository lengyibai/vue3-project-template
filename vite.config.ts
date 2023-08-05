import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import legacyPlugin from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    vue(),
    legacyPlugin({
      targets: ["last 2 versions", "safari >=7", "chrome >= 30", "firefox >= 30"], //需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], //面向IE11时需要此插件
    }),
    Components({
      dts: "src/typings/components.d.ts",
      dirs: ["src/components"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/index.less";',
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 9527,
    open: true,
    proxy: {
      "/qccq": {
        target: "https://api.qccq.cc",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/qccq/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
    minify: "terser",
    chunkSizeWarningLimit: 1500,
    cssTarget: "chrome61",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
