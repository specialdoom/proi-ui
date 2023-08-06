import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { ROOT } from "./tag.selectors.js";
import Tag from "../Tag.svelte";
import { dataDisplayVariants } from "../../utils/variants.js";

describe("Tag", () => {
  const tagVariants = dataDisplayVariants;

  describe("root element", () => {
    it("should be present", () => {
      const { getBySelector } = render(Tag);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-tag` class", () => {
      const { getBySelector } = render(Tag);

      expect(getBySelector(ROOT)).toHaveClass("proi-tag");
    });
  });

  describe("when `variant` property", () => {
    tagVariants.forEach((variant) => {
      describe(`is set to \`${variant}\``, () => {
        describe("root element", () => {
          it(`should contain \`${variant}\` class`, () => {
            const { getBySelector } = render(Tag, {
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

  describe("when `badge` property", () => {
    describe("is set to `true`", () => {
      const badge = true;

      it("should contain `badge` class", () => {
        const { getBySelector } = render(Tag, {
          props: {
            badge
          }
        });

        expect(getBySelector(ROOT)).toHaveClass("badge");
      });
    });

    describe("is set to `false`", () => {
      const badge = false;

      it("should not contain `badge` class", () => {
        const { getBySelector } = render(Tag, {
          props: {
            badge
          }
        });

        expect(getBySelector(ROOT)).not.toHaveClass("badge");
      });
    });
  });

  describe("when `pill` property", () => {
    describe("is set to `true`", () => {
      const pill = true;

      it("should contain `pill` class", () => {
        const { getBySelector } = render(Tag, {
          props: {
            pill
          }
        });

        expect(getBySelector(ROOT)).toHaveClass("pill");
      });
    });

    describe("is set to `false`", () => {
      const pill = false;

      it("should not contain `pill` class", () => {
        const { getBySelector } = render(Tag, {
          props: {
            pill
          }
        });

        expect(getBySelector(ROOT)).not.toHaveClass("pill");
      });
    });
  });

  describe("when `label` property", () => {
    describe("is set", () => {
      const label = "label";

      describe("root element", () => {
        it("should contain `label` as innerText", () => {
          const { getBySelector } = render(Tag, {
            props: {
              label
            }
          });

          expect(getBySelector(ROOT)).toHaveTextContent(label);
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain empty string as innerText", () => {
          const { getBySelector } = render(Tag);

          expect(getBySelector(ROOT)).toHaveTextContent("");
        });
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(Tag, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
