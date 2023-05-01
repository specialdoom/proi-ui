import { describe, it } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import Divider from "../Divider.svelte";
import { ROOT } from "./divider.selectors.js";

describe("Divider", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Divider);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-divider` class", () => {
      const { getBySelector } = render(Divider);

      expect(getBySelector(ROOT)).toHaveClass("proi-divider");
    });
  });
});
