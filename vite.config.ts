import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: (format) => `cec-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["lit"],
    },
  },
});
