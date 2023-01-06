import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollections: true
  },
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: {
      applyBaseStyles: false
    }
  }), svelte(), mdx()],
  output: "server",
  adapter: vercel()
});