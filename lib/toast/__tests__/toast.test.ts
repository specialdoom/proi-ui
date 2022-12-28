import { describe, vi } from "vitest";
import { render, fireEvent } from "../../__tests__/tests.queries.js";
import { CLOSE_ICON, DESCRIPTION, ICON, ROOT, TITLE } from "./toast.selectors.js";
import Toast from "../Toast.svelte";
import { feedbackVariants } from "../../utils/variants.js";

describe("Toast", () => {
  const title = "Title";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-toast-container` class", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-toast-container");
    });

    it("should forward the `click` event to close icon element", async () => {
      const mock = vi.fn();
      const { component, getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      component.$on("click", mock);

      await fireEvent.click(getBySelector(CLOSE_ICON));

      expect(mock).toHaveBeenCalled();
    });

    it("should forward the `keyup` event to close icon element", async () => {
      const mock = vi.fn();
      const { component, getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      component.$on("keyup", mock);

      await fireEvent.keyUp(getBySelector(CLOSE_ICON));

      expect(mock).toHaveBeenCalled();
    });

    it("should forward the `keydown` event to close icon element", async () => {
      const mock = vi.fn();
      const { component, getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      component.$on("keydown", mock);

      await fireEvent.keyDown(getBySelector(CLOSE_ICON));

      expect(mock).toHaveBeenCalled();
    });

    it("should forward the `keypress` event to close icon element", async () => {
      const mock = vi.fn();
      const { component, getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      component.$on("keypress", mock);

      await fireEvent.keyPress(getBySelector(CLOSE_ICON));

      expect(mock).toHaveBeenCalled();
    });
  });

  describe("icon element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(ICON)).toBeInTheDocument();
    });

    it("should contain `proi-toast-icon` class", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(ICON)).toHaveClass("proi-toast-icon");
    });
  });

  describe("title element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(TITLE)).toBeInTheDocument();
    });

    it("should contain `proi-toast-title` class", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(TITLE)).toHaveClass("proi-toast-title");
    });
  });

  describe("close icon element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(CLOSE_ICON)).toBeInTheDocument();
    });

    it("should contain `proi-toast-close-icon` class", () => {
      const { getBySelector } = render(Toast, {
        props: {
          title
        }
      });

      expect(getBySelector(CLOSE_ICON)).toHaveClass("proi-toast-close-icon");
    });

    describe("when click event is triggered", () => {
      it("should remove the root element", async () => {
        const { getBySelector } = render(Toast, {
          props: {
            title
          }
        });

        await fireEvent.click(getBySelector(CLOSE_ICON));

        expect(() => getBySelector(ROOT)).toThrowError();
      });
    });
  });

  describe("when `title` property is set", () => {
    describe("title element", () => {
      it("should contain `title` property as innerText", () => {
        const { getBySelector } = render(Toast, {
          props: {
            title
          }
        });

        expect(getBySelector(TITLE)).toHaveTextContent(title);
      });
    });
  });

  describe("when `variant` prperty", () => {
    feedbackVariants.forEach((variant) => {
      describe(`is set to \`${variant}\``, () => {
        describe("root element", () => {
          it(`should contain \`${variant}\` class`, () => {
            const { getBySelector } = render(Toast, {
              props: {
                title,
                variant
              }
            });

            expect(getBySelector(ROOT)).toHaveClass(variant);
          });
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain default `success` class", () => {
          const { getBySelector } = render(Toast, {
            props: {
              title
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("success");
        });
      });
    });
  });

  describe("when `description` property", () => {
    describe("is set", () => {
      const description = "description";

      describe("description element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Toast, {
            props: {
              title,
              description
            }
          });

          expect(getBySelector(DESCRIPTION)).toBeInTheDocument();
        });

        it("should contain `proi-toast-description` class", () => {
          const { getBySelector } = render(Toast, {
            props: {
              title,
              description
            }
          });

          expect(getBySelector(DESCRIPTION)).toHaveClass("proi-toast-description");
        });

        it("should contain `description` property as innerText", () => {
          const { getBySelector } = render(Toast, {
            props: {
              title,
              description
            }
          });

          expect(getBySelector(DESCRIPTION)).toHaveTextContent(description);
        });
      });
    });

    describe("is not set", () => {
      describe("description element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Toast, {
            props: {
              title
            }
          });

          expect(() => getBySelector(DESCRIPTION)).toThrowError();
        });
      });
    });
  });
});
