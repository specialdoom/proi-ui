import { describe, it } from "vitest";
import { render } from "../../../__tests__/tests.queries";
import Checkbox from "../Checkbox.svelte";
import {
  CHECKBOX,
  CHECKBOX_ICON,
  CHECKBOX_LABEL,
  INPUT,
  ROOT
} from "./checkbox.selectors.js";
import FakeCheckbox from "./FakeCheckbox.svelte";

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

    it("should have `tabindex` attribute set to `-1`", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(INPUT)).toHaveAttribute("tabindex", "-1");
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

    it("should have `role` attribute set to `checkbox`", () => {
      const { getBySelector } = render(Checkbox);

      expect(getBySelector(CHECKBOX)).toHaveAttribute("role", "checkbox");
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

        it("should have `aria-checked` attribute set to `true`", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              checked
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveAttribute(
            "aria-checked",
            checked.toString()
          );
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

          expect(() => getBySelector(CHECKBOX_ICON)).toThrowError(
            "Unable to find element"
          );
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("input element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("disabled");
        });
      });

      describe("checkbox element", () => {
        it("should contain `disabled` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveClass("disabled");
        });

        it("should have `tabindex` attribute set to `-1`", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveAttribute("tabindex", "-1");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("input element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).not.toHaveAttribute("disabled");
        });
      });

      describe("checkbox element", () => {
        it("should not contain `disabled` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(CHECKBOX)).not.toHaveClass("disabled");
        });

        it("should have `tabindex` attribute set to `0`", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              disabled
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveAttribute("tabindex", "0");
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("checkbox element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              error
            }
          });

          expect(getBySelector(CHECKBOX)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("checkbox element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Checkbox, {
            props: {
              error
            }
          });

          expect(getBySelector(CHECKBOX)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      const slot = "test";

      describe("checkbox label element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FakeCheckbox, {
            props: {
              slot
            }
          });

          expect(getBySelector(CHECKBOX_LABEL)).toBeInTheDocument();
        });

        it("should contain default `slot` as innerHTML", () => {
          const { getBySelector } = render(FakeCheckbox, {
            props: {
              slot
            }
          });

          expect(getBySelector(CHECKBOX_LABEL)).toContainHTML(slot);
        });

        it("should contain `proi-checkbox-label` class", () => {
          const { getBySelector } = render(FakeCheckbox, {
            props: {
              slot
            }
          });

          expect(getBySelector(CHECKBOX_LABEL)).toHaveClass("proi-checkbox-label");
        });
      });
    });

    describe("is not set", () => {
      describe("checkbox label element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(FakeCheckbox);

          expect(() => getBySelector(CHECKBOX_LABEL)).toThrowError(
            "Unable to find element"
          );
        });
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(Checkbox, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
