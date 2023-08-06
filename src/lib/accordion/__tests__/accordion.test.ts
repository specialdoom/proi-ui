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

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(Accordion, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
