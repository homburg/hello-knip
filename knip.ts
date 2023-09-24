import type { KnipConfig } from "knip";

import packageJson from "./package.json";

const workspaces = Object.fromEntries(
  packageJson.workspaces.map((w) => {
    return [
      w,
      {
        vitest: { entry: "**/*.vitest.ts" },
      },
    ];
  })
);

const config: KnipConfig = {
  workspaces,
};

export default config;
