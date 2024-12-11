import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@routes": "/src/routes",
      "@components": "/src/components",
      "@stores": "/src/stores",
      "@providers": "/src/providers",
      "@widgets": "/src/widgets",
      "@utils": "/src/utils",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
