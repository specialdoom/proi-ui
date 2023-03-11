import { fireEvent } from "@testing-library/dom";
import { describe, vi } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import Textarea from "../Textarea.svelte";
import { ROOT } from "./textarea.selectors";

describe("Textarea", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Textarea);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-textarea` class", () => {
      const { getBySelector } = render(Textarea);

      expect(getBySelector(ROOT)).toHaveClass("proi-textarea");
    });
  });

  describe("when `placeholder` property", () => {
    describe("is set", () => {
      const placeholder = "placeholder";

      describe("root element", () => {
        it("should contain `placeholder` attribute with `placeholder` property as value", () => {
          const { getBySelector } = render(Textarea, {
            props: {
              placeholder
            }
          });

          expect(getBySelector(ROOT)).toHaveAttribute("placeholder", placeholder);
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain `placeholder` attribute with empty string as value", () => {
          const { getBySelector } = render(Textarea);

          expect(getBySelector(ROOT)).toHaveAttribute("placeholder", "");
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("root element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Textarea, {
            props: {
              error
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("root element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Textarea, {
            props: {
              error
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when `rows` property", () => {
    describe("is set", () => {
      const rows = 6;

      describe("root element", () => {
        it("should contain `rows` attribute with `rows` property as value", () => {
          const { getBySelector } = render(Textarea, {
            props: {
              rows
            }
          });

          expect(getBySelector(ROOT)).toHaveAttribute("rows", rows.toString());
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain `rows` attribute with `4` as value", () => {
          const { getBySelector } = render(Textarea);

          expect(getBySelector(ROOT)).toHaveAttribute("rows", "4");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("root element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(Textarea, {
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
          const { getBySelector } = render(Textarea, {
            props: {
              disabled
            }
          });

          expect(getBySelector(ROOT)).not.toHaveAttribute("disabled");
        });
      });
    });
  });

  describe("on `keydown` event", () => {
    describe("root element", () => {
      it("should call the callback method", async () => {
        const mock = vi.fn();
        const { component, getBySelector } = render(Textarea);

        component.$on("keydown", mock);

        await fireEvent.keyDown(getBySelector(ROOT));

        expect(mock).toHaveBeenCalled();
      });
    });
  });

  describe("on `change` event", () => {
    describe("root element", () => {
      it("should call the callback method", async () => {
        const mock = vi.fn();
        const { component, getBySelector } = render(Textarea);

        component.$on("change", mock);

        await fireEvent.change(getBySelector(ROOT));

        expect(mock).toHaveBeenCalled();
      });
    });
  });
});
