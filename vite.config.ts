import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(currentDir, "index.html"),
        support: resolve(currentDir, "support/index.html"),
        guess_the_imposter_privacy_policy: resolve(
          currentDir,
          "guess_the_imposter_privacy_policy/index.html",
        ),
      },
    },
  },
});
