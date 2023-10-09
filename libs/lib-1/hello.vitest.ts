import { expect, test } from "vitest";
import { N } from "./Used-in-vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(3).toBe(N);
});
