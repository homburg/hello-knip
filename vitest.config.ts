import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.vitest.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache",
      "out",
      "build",
    ],
  },
});
