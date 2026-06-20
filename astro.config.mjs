// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Share Tech",
      cssVariable: "--font-share-tech",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      name: "Exo 2",
      cssVariable: "--font-exo-2",
      provider: fontProviders.google(),
      weights: [700],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-atkinson",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [mdx()],
  image: {
    responsiveStyles: true,
  },
});
