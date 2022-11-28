import { getCustomRenderer } from "../../__tests__/custom-renderer.js";

export const ROOT = ":scope > div > div";

export * from "@testing-library/svelte";

export const render = getCustomRenderer({
  getRoot: {
    name: "root",
    selector: ROOT
  }
});
