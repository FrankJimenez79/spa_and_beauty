import { defineConfig } from "vite";

export default defineConfig({
  base: "/spa_and_beauty/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
