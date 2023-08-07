import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { DESCRIPTION, ERROR, LABEL, ROOT } from "./form-item.selectors";
import FormItem from "../FormItem.svelte";
import FakeFormItem from "./FakeFormItem.svelte";

describe("FormItem", () => {
  const label = "label";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FormItem, {
        props: {
          label
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-form-item` class", () => {
      const { getBySelector } = render(FormItem, {
        props: {
          label
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-form-item");
    });
  });

  describe("when `label` property", () => {
    describe("is set", () => {
      describe("label element", () => {
        it("should contain `label` property as innerText", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label
            }
          });

          expect(getBySelector(LABEL)).toHaveTextContent(label);
        });
      });
    });
  });

  describe("when `description` property", () => {
    describe("is set", () => {
      const description = "description";

      describe("description element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
              description
            }
          });

          expect(getBySelector(DESCRIPTION)).toBeInTheDocument();
        });

        it("should have `proi-description` class", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
              description
            }
          });

          expect(getBySelector(DESCRIPTION)).toHaveClass("proi-description");
        });

        it("should contain `description` property as innerText", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
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
          const { getBySelector } = render(FormItem, {
            props: {
              label
            }
          });

          expect(() => getBySelector(DESCRIPTION)).toThrowError("Unable to find element");
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set", () => {
      const error = "error";

      describe("error element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
              error
            }
          });

          expect(getBySelector(ERROR)).toBeInTheDocument();
        });

        it("should have `proi-error` class", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
              error
            }
          });

          expect(getBySelector(ERROR)).toHaveClass("proi-error");
        });

        it("should contain `error` property as innerText", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label,
              error
            }
          });

          expect(getBySelector(ERROR)).toHaveTextContent(error);
        });
      });
    });

    describe("is not set", () => {
      describe("error element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(FormItem, {
            props: {
              label
            }
          });

          expect(() => getBySelector(ERROR)).toThrowError("Unable to find element");
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      const slot = "test";

      describe("root element", () => {
        it("should contain default `slot` in innerHTML", () => {
          const { getBySelector } = render(FakeFormItem, {
            props: {
              props: {
                label
              },
              slot
            }
          });

          expect(getBySelector(ROOT)).toContainHTML(slot);
        });
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(FormItem, {
        props: {
          label,
          ...customProps
        }
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
