import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; //这个path用到了上面安装的@types/node
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [vue(), viteMockServe()],
  //取消严格模式
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true,
        rewrite: (path)=> path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  },
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src
    },
  },
});
