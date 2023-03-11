import { describe } from "vitest";
import { dataDisplayVariants } from "../../utils/variants.js";
import { render } from "../../../__tests__/tests.queries.js";
import Dot from "../Dot.svelte";
import { DOT, ROOT } from "./dot.selectors.js";
import FakeDot from "./FakeDot.svelte";

describe("Dot", () => {
  const dotVariants = dataDisplayVariants;

  describe("root element", () => {
    it("should be present", () => {
      const { getBySelector } = render(Dot);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-dot-container` class", () => {
      const { getBySelector } = render(Dot);

      expect(getBySelector(ROOT)).toHaveClass("proi-dot-container");
    });
  });

  describe("dot element", () => {
    it("should be present", () => {
      const { getBySelector } = render(Dot);

      expect(getBySelector(DOT)).toBeInTheDocument();
    });

    it("should contain `proi-dot` class", () => {
      const { getBySelector } = render(Dot);

      expect(getBySelector(DOT)).toHaveClass("proi-dot");
    });

    it("should contain `flame` class by default", () => {
      const { getBySelector } = render(Dot);

      expect(getBySelector(DOT)).toHaveClass("flame");
    });
  });

  describe("when `variant` property", () => {
    describe("dot element", () => {
      dotVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getBySelector } = render(Dot, {
            props: {
              variant
            }
          });

          expect(getBySelector(DOT)).toHaveClass(variant);
        });
      });
    });
  });

  describe("when `label` property", () => {
    describe("is set", () => {
      const label = "label";

      describe("dot element", () => {
        it("should contain `label` as innerText", () => {
          const { getBySelector } = render(Dot, {
            props: {
              label
            }
          });

          expect(getBySelector(DOT)).toHaveTextContent(label);
        });
      });
    });

    describe("is not set", () => {
      describe("dot element", () => {
        it("should contain `label` as innerText", () => {
          const { getBySelector } = render(Dot);

          expect(getBySelector(DOT)).toHaveTextContent("");
        });
      });
    });
  });

  describe("when `default` slot is set", () => {
    const slot = "test";

    describe("root element", () => {
      it("should `default` slot as innerHTML", () => {
        const { getBySelector } = render(FakeDot, {
          props: {
            slot
          }
        });

        expect(getBySelector(ROOT)).toContainHTML(slot);
      });
    });
  });
});
