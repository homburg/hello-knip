import type { KnipConfig } from "knip";

const config: KnipConfig = {
  vitest: {
    config: "vitest.config.ts",
    entry: ["*.vitest.ts", "**/*.vitest.ts"],
  },
};

export default config;
