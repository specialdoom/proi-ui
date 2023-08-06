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

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(Divider, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
