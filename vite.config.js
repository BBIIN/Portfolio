import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/page/components" },
      { find: "@page", replacement: "/src/page" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
});
