import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        guess_the_impostor_privacy_policy: resolve(
          __dirname,
          "guess_the_impostor_privacy_policy/index.html",
        ),
      },
    },
  },
});
