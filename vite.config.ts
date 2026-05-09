import { Features } from "lightningcss";
import type { UserConfig } from "vite";

export default {
  css: {
    lightningcss: {
      exclude: Features.LightDark, // idk why this is needed but lighningcss would break light-dark
    },
  },
} satisfies UserConfig;