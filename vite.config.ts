import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@layouts": "/src/layouts",
      "@types": "/src/types",
      "@hooks": "/src/hooks",
      "@constants": "/src/constants",
      "@redux": "/src/redux",
    },
  },
});
