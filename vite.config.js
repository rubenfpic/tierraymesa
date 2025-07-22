import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@styles/settings": path.resolve(__dirname, "src/styles/01-settings"),
      "@styles/tools": path.resolve(__dirname, "src/styles/02-tools"),
      "@styles/generic": path.resolve(__dirname, "src/styles/03-generic"),
      "@styles/elements": path.resolve(__dirname, "src/styles/04-elements"),
      "@styles/objects": path.resolve(__dirname, "src/styles/05-objects"),
      "@styles/components": path.resolve(__dirname, "src/styles/06-components"),
      "@styles/trumps": path.resolve(__dirname, "src/styles/07-trumps"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
