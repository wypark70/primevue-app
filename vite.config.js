import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./pages/index.html", import.meta.url)),
        configuration: fileURLToPath(
          new URL("./pages/configuration/index.html", import.meta.url)
        ),
        deptProject: fileURLToPath(
          new URL("./pages/dept-projects/index.html", import.meta.url)
        ),
      },
    },
  },
});
