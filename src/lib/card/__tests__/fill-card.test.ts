import { describe, vi } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { TITLE, DESCRIPTION, ROOT, CLOSE_BUTTON } from "./fill-card.selectors.js";
import FillCard from "../FillCard.svelte";
import { dataDisplayVariants } from "../../utils/variants.js";
import { fireEvent } from "@testing-library/svelte";

describe("FillCard", () => {
  const title = "Title";
  const description = "Description";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-card` class", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-card");
    });
  });

  describe("title element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toBeInTheDocument();
    });

    it("should contain `proi-card-title` class", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toHaveClass("proi-card-title");
    });

    it("should contain `title` property as innerText", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toHaveTextContent(title);
    });
  });

  describe("description element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toBeInTheDocument();
    });

    it("should contain `proi-card-description` class", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toHaveClass("proi-card-description");
    });

    it("should contain `description` property as innerText", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toHaveTextContent(description);
    });
  });

  describe("when `variant` property", () => {
    dataDisplayVariants.forEach((variant) => {
      describe("root element", () => {
        it(`should contain \`${variant}\` class`, () => {
          const { getBySelector } = render(FillCard, {
            props: {
              title,
              description,
              variant
            }
          });

          expect(getBySelector(ROOT)).toHaveClass(variant);
        });
      });
    });
  });

  describe("when `closable` property", () => {
    describe("is set to `true`", () => {
      const closable = true;

      describe("close button element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FillCard, {
            props: {
              title,
              description,
              closable
            }
          });

          expect(getBySelector(CLOSE_BUTTON)).toBeInTheDocument();
        });

        describe("when `click` event is triggered", () => {
          it("should dispatch `close` event", async () => {
            const mock = vi.fn();

            const { component, getBySelector } = render(FillCard, {
              props: {
                title,
                description,
                closable
              }
            });

            component.$on("close", mock);

            await fireEvent.click(getBySelector(CLOSE_BUTTON));

            expect(mock).toHaveBeenCalled();
          });

          describe("root element", () => {
            it("should not be in the document", async () => {
              const { getBySelector } = render(FillCard, {
                props: {
                  title,
                  description,
                  closable
                }
              });

              await fireEvent.click(getBySelector(CLOSE_BUTTON));

              expect(() => getBySelector(ROOT)).toThrowError();
            });
          });
        });
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(FillCard, {
        props: {
          title,
          description,
          ...customProps
        }
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
