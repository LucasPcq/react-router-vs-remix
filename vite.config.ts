import { defineConfig } from "vite";
// import { vitePlugin as remix } from "@remix-run/dev";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // remix({
    //   ssr: false,
    // }),
    react(),
    TanStackRouterVite(),
  ],
});
