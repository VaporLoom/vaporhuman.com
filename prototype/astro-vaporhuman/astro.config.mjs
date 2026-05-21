import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://vaporhuman.com",
  trailingSlash: "never",
  build: {
    format: "preserve"
  }
});
