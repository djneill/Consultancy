import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://djneill.dev/',
  integrations: [tailwind(), robotsTxt({
    sitemap: ['https://djneill.dev/sitemap-index.xml'],
  })]
});