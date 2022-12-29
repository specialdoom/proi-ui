import { describe, it, expect } from "vitest";
import { render } from "../../__tests__/tests.queries";
import { ROOT } from "./button.selectors.js";
import { buttonVariants } from "../../utils/variants";
import Button from "../Button.svelte";
import FakeButton from "./FakeButton.svelte";

describe("Button", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Button);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-button` class", () => {
      const { getBySelector } = render(Button);

      expect(getBySelector(ROOT)).toHaveClass("proi-button");
    });

    it("should contain `primary` class by default", () => {
      const { getBySelector } = render(Button);

      expect(getBySelector(ROOT)).toHaveClass("primary");
    });
  });

  describe("when `variant` property", () => {
    describe("root element", () => {
      buttonVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getBySelector } = render(Button, {
            props: {
              variant
            }
          });

          expect(getBySelector(ROOT)).toHaveClass(variant);
        });

        buttonVariants
          .filter((remainingVariant) => variant !== remainingVariant)
          .forEach((variant) => {
            it(`should not contain \`${variant}\` class`, () => {
              const { getBySelector } = render(Button, {
                props: {
                  variant
                }
              });

              expect(getBySelector(ROOT)).toHaveClass(variant);
            });
          });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("root element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(Button, {
            props: {
              disabled
            }
          });

          expect(getBySelector(ROOT)).toHaveAttribute("disabled");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("root element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(Button, {
            props: {
              disabled
            }
          });

          expect(getBySelector(ROOT)).not.toHaveAttribute("disabled");
        });
      });
    });
  });

  describe("when `block` property", () => {
    describe("is set to `true`", () => {
      const block = true;

      describe("root element", () => {
        it("should contain `block` class", () => {
          const { getBySelector } = render(Button, {
            props: {
              block
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("block");
        });
      });
    });

    describe("is set to `false`", () => {
      const block = false;

      describe("root element", () => {
        it("should not contain `block` class", () => {
          const { getBySelector } = render(Button, {
            props: {
              block
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("block");
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      const slot = "test";

      describe("root element", () => {
        it("should contain default `slot` as innerHTML", () => {
          const { getBySelector } = render(FakeButton, {
            props: {
              slot
            }
          });

          expect(getBySelector(ROOT)).toContainHTML(slot);
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain empty string as innerHTML", () => {
          const { getBySelector } = render(FakeButton);

          expect(getBySelector(ROOT)).toContainHTML("");
        });
      });
    });
  });
});
