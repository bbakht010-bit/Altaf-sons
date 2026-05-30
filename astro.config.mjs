import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://altaf-and-sons.pages.dev",
  integrations: [sitemap()],
});
