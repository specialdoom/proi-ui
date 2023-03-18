import { describe } from "vitest";
import { cleanup, render } from "../../../__tests__/tests.queries.js";
import Accordion from "../Accordion.svelte";
import { ROOT } from "./accordion.selectors.js";

afterEach(() => {
  cleanup();
});

describe("Accordion", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Accordion);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-accordion` class", () => {
      const { getBySelector } = render(Accordion);

      expect(getBySelector(ROOT)).toHaveClass("proi-accordion");
    });
  });
});
