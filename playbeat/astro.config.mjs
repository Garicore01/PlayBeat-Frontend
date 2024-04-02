import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

//import vercel from "@astrojs/vercel/serverless";


export default defineConfig({
  site: 'https://unizar-30226-2024-03.github.io',
  integrations: [tailwind(), react(), svelte(), vue()],
  output: "server",
  // adapter: vercel()
});