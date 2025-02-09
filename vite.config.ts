import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";


export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.webp"],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "app", replacement: path.resolve(__dirname, "./src/app") },
      { find: "assets", replacement: path.resolve(__dirname, "./src/assets") },
      { find: "components", replacement: path.resolve(__dirname, "./src/components") }
    ],
  }
});