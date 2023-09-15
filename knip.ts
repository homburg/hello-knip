import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["*.vitest.ts", "**/*.vitest.ts"],
  workspaces: {
    "*": {
      entry: "**/*.vitest.ts",
    },
    "*/*": {
      entry: "**/*.vitest.ts",
    },
  },
};

export default config;
