// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMath from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMath],
    }),
  ],
  image: {
    responsiveStyles: true,
  },
});
