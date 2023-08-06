import { describe } from "vitest";
import { cleanup, render } from "../../../__tests__/tests.queries.js";
import Spinner from "../Spinner.svelte";
import { ROOT } from "./spinner.selectors.js";
import type { SpinnerSize } from "../types.js";

beforeEach(() => {
  cleanup();
});

describe("Spinner", () => {
  const spinnerSizes: SpinnerSize[] = ["small", "medium", "large"];

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-spinner` class", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(ROOT)).toHaveClass("proi-spinner");
    });
  });

  describe("when `size` property", () => {
    spinnerSizes.forEach((size) => {
      describe(`is set to ${size}`, () => {
        it("should contain `${size}` class", () => {
          const { getBySelector } = render(Spinner, {
            props: {
              size
            }
          });

          expect(getBySelector(ROOT)).toHaveClass(size);
        });
      });
    });
  });
});
