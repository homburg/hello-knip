import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    "**": {
      entry: "**/*.vitest.ts",
    },
  },
};

export default config;
