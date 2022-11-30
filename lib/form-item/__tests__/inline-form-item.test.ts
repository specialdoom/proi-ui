import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import InlineFormItemSvelte from "../InlineFormItem.svelte";
import FakeFormItem from "./FakeFormItem.svelte";
import {
  CONTROLS_CONTAINER,
  CONTROL_ITEM,
  ERROR,
  LABEL,
  ROOT
} from "./inline-form-item.selectors.js";

describe("InlineFormItem", () => {
  const label = "label";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-form-item__inline` class", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-form-item__inline");
    });
  });

  describe("label element", () => {
    it("should be present", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(LABEL)).toBeInTheDocument();
    });

    it("should contain `proi-form-item__inline-label` class", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(LABEL)).toHaveClass("proi-form-item__inline-label");
    });
  });

  describe("controls container element", () => {
    it("should be present", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(CONTROLS_CONTAINER)).toBeInTheDocument();
    });

    it("should contain `proi-form-item__inline-control` class", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(CONTROLS_CONTAINER)).toHaveClass(
        "proi-form-item__inline-control"
      );
    });
  });

  describe("control item element", () => {
    it("should be present", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(CONTROL_ITEM)).toBeInTheDocument();
    });

    it("should contain `proi-form-item__inline-control-item` class", () => {
      const { getBySelector } = render(InlineFormItemSvelte, {
        props: {
          label
        }
      });

      expect(getBySelector(CONTROL_ITEM)).toHaveClass(
        "proi-form-item__inline-control-item"
      );
    });
  });

  describe("when `label` property", () => {
    describe("is set", () => {
      describe("label element", () => {
        it("should contain `label` property as innerText", () => {
          const { getBySelector } = render(InlineFormItemSvelte, {
            props: {
              label
            }
          });

          expect(getBySelector(LABEL)).toHaveTextContent(label);
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set", () => {
      const error = "error";

      describe("error element", () => {
        it("should be present", () => {
          const { getBySelector } = render(InlineFormItemSvelte, {
            props: {
              label,
              error
            }
          });

          expect(getBySelector(ERROR)).toBeInTheDocument();
        });

        it("should contain `proi-error` class", () => {
          const { getBySelector } = render(InlineFormItemSvelte, {
            props: {
              label,
              error
            }
          });

          expect(getBySelector(ERROR)).toHaveClass("proi-error");
        });

        it("should contain `error` property as innerText", () => {
          const { getBySelector } = render(InlineFormItemSvelte, {
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
        it("should not be present", () => {
          const { getBySelector } = render(InlineFormItemSvelte, {
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

      describe("control item element", () => {
        it("should contain default `slot` as innerHTML", () => {
          const { getBySelector } = render(FakeFormItem, {
            props: {
              props: {
                label
              },
              inline: true,
              slot
            }
          });

          expect(getBySelector(CONTROL_ITEM)).toContainHTML(slot);
        });
      });
    });
  });
});
