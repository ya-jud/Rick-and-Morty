import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import {fileURLToPath} from "node:url";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.webp"],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@public", replacement: fileURLToPath(new URL("./public", import.meta.url)) },
    ],
  }
});