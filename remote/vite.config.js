import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      // run build comment to generate this file
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
      // modules that the exposed components depend upon
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: "false",
    cssCodeSplit: false,
  },
});
