import { Features } from "lightningcss";
import type { UserConfig } from "vite";

export default {
  build: {
    assetsInlineLimit: 0, // do not inline assets like svg (default: if asset was less than 4kb it got inlined)
  },
  css: {
    lightningcss: {
      exclude: Features.LightDark, // idk why this is needed but lighningcss would break light-dark
    },
  },
} satisfies UserConfig;