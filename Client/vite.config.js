import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Ensure relative paths for deployment
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for smaller build size
    outDir: "dist", // Ensure the output folder is correct
  },
});
