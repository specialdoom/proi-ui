import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import Spinner from "../Spinner.svelte";
import { LOGO, ROOT } from "./spinner.selectors.js";

describe("Spinner", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-spinner-container` class", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(ROOT)).toHaveClass("proi-spinner-container");
    });
  });

  describe("logo element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(LOGO)).toBeInTheDocument();
    });

    it("should contain `proi-ui-logo` class", () => {
      const { getBySelector } = render(Spinner);

      expect(getBySelector(LOGO)).toHaveClass("proi-ui-logo");
    });
  });

  describe("when `label` property", () => {
    describe("is set", () => {
      const label = "label";

      describe("root element", () => {
        it("should contain `label` as innerText", () => {
          const { getBySelector } = render(Spinner, {
            props: {
              label
            }
          });

          expect(getBySelector(ROOT)).toHaveTextContent(label);
        });
      });
    });
  });
});
