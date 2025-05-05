/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  test: {
    name: "jsdom",
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    include: ["src/**/?(*.){test,spec}.{ts,tsx}"],
    globals: true,
  },
});
