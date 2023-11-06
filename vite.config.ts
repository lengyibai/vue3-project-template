import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import legacy from "@vitejs/plugin-legacy";
import { viteVConsole } from "vite-plugin-vconsole";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const getViteEnv = (target: string): any => env[target];
  const pathResolve = (url: string) => resolve(__dirname, url);

  return {
    base: "./",
    plugins: [
      vue(),
      Components({
        dts: pathResolve("src/typings/components.d.ts"),
        dirs: [pathResolve("src/components")],
      }),
      legacy({
        targets: [">1%", "last 2 version", "not dead"],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: getViteEnv("VITE_HTML_TITLE"),
            icon: getViteEnv("VITE_HTML_ICON"),
          },
        },
      }),
      viteVConsole({
        entry: pathResolve("src/main.ts"),
        enabled: ["development"].includes(mode),
        config: {
          maxLogNumber: 1000,
          theme: "white",
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
        outDir: pathResolve(`dist`),
        devOptions: {
          enabled: true,
          resolveTempFolder: () => pathResolve("dev-dist"),
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          ignoreURLParametersMatching: [/.*/],
          runtimeCaching: [],
        },
        manifest: {
          name: "QCCQ AI",
          short_name: "QCCQ",
          theme_color: "#000",
          display: "standalone",
          background_color: "#000",
          icons: [
            {
              src: "icon.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
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
      minify: getViteEnv("VITE_MINIFY") && "esbuild",
      chunkSizeWarningLimit: 2048,
      cssTarget: "chrome61",
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          dir: pathResolve(`dist/${getViteEnv("VITE_DIST_NAME")}`),
        },
      },
      terserOptions: {
        compress: {
          drop_console: getViteEnv("VITE_CLEAR"),
          drop_debugger: getViteEnv("VITE_CLEAR"),
        },
      },
    },
  };
});
