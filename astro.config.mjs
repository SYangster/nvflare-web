import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://zephyrie.github.io",
  base: "nvflare-web",
  integrations: [tailwind()],
});
