import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ianfromchicago.com/',
  output: "static",
  adapter: vercel()
});