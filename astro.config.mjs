import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://albxrtx.github.io",
  base: "Portfolio",
  integrations: [tailwind()],
});
