const { defineConfig } = require("vite");
const { builtinModules } = require("module");

const vue = require("@vitejs/plugin-vue");
const { env } = require("../package.json");

// Electron 编译配置
exports.electronConfig = defineConfig({
  build: {
    emptyOutDir: false,
    target: "esnext",
    rollupOptions: {
      input: {
        main: "src/main.ts",
        preload: "src/preload.ts",
      },
      output: {
        format: "cjs",
        entryFileNames: "[name].cjs",
      },
      external: [...builtinModules, "electron"],
    },
  },
});

// renderer 编译配置
exports.rendererConfing = defineConfig({
  root: "src",
  base: "./",
  build: {
    target: "esnext",
    emptyOutDir: true,
    outDir: "../dist",
  },
  plugins: [vue()],
  server: {
    host: env.HOST,
    port: env.PORT,
    strictPort: true,
  },
});
