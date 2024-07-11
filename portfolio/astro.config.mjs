import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";


export default defineConfig({
  site: "https://www.ianfromchicago.com/",
  output: "static",
  adapter: vercel(),
  image: {
    serviceEntryPoint: "@astrojs/image/sharp", // or other image service if using
  },
});