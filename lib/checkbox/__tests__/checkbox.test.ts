import { describe, it } from "vitest";
import { render } from "../../__tests__/tests.queries";
import Checkbox from "../Checkbox.svelte";
import {
  CHECKBOX,
  CHECKBOX_ICON,
  CHECKBOX_WRAPPER,
  INPUT,
  ROOT
} from "./checkbox.selectors.js";

describe("Checkbox", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-checkbox-container` class", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(ROOT)).toHaveClass("proi-checkbox-container");
    });
  });

  describe("input element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(INPUT)).toBeInTheDocument();
    });

    it("should contain `type` attribute with `checkbox` value", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(INPUT)).toHaveAttribute("type", "checkbox");
    });
  });

  describe("checkbox wrapper element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(CHECKBOX_WRAPPER)).toBeInTheDocument();
    });

    it("should contain `proi-checkbox-wrapper` class", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(CHECKBOX_WRAPPER)).toHaveClass("proi-checkbox-wrapper");
    });
  });

  describe("checkbox element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(CHECKBOX)).toBeInTheDocument();
    });

    it("should contain `proi-checkbox` class", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(CHECKBOX)).toHaveClass("proi-checkbox");
    });
  });

  describe("when `checked` property", () => {
    describe("is set to `true`", () => {
      const checked = true;

      describe("checkbox element", () => {
        it("should contain `checked` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              checked
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveClass("checked");
        });
      });

      describe("checkbox icon element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              checked
            }
          });

          expect(getBySelector(CHECKBOX_ICON)).toBeInTheDocument();
        });
      });
    });

    describe("is set to `false`", () => {
      const checked = false;

      describe("checkbox element", () => {
        it("should not contain `checked` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              checked
            }
          });

          expect(getBySelector(CHECKBOX)).not.toHaveClass("checked");
        });
      });

      describe("checkbox icon element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              checked
            }
          });

          expect(() => getBySelector(CHECKBOX_ICON)).toThrowError();
        });
      });
    });
  });
});
