import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sanity({
    projectId: "gg96oroa",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: '/admin'
  }), react()],
  redirects: {
    '/schedule': '/route'
  }
});