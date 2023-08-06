import { fireEvent } from "@testing-library/svelte";
import { describe, vi } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import TextInput from "../TextInput.svelte";
import { ROOT } from "./text-input.selectors";

describe("TextInput", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(TextInput);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-input` class", () => {
      const { getBySelector } = render(TextInput);

      expect(getBySelector(ROOT)).toHaveClass("proi-input");
    });

    it("should contain `type` attribute with `text` value", () => {
      const { getBySelector } = render(TextInput);

      expect(getBySelector(ROOT)).toHaveAttribute("type", "text");
    });
  });

  describe("when `placeholder` property", () => {
    describe("is set", () => {
      const placeholder = "placeholder";

      describe("root element", () => {
        it("should contain `placeholder` attribute with `placeholder` property as value", () => {
          const { getBySelector } = render(TextInput, {
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
          const { getBySelector } = render(TextInput);

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
          const { getBySelector } = render(TextInput, {
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
          const { getBySelector } = render(TextInput, {
            props: {
              error
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("root element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(TextInput, {
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
          const { getBySelector } = render(TextInput, {
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
        const { component, getBySelector } = render(TextInput);

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
        const { component, getBySelector } = render(TextInput);

        component.$on("change", mock);

        await fireEvent.change(getBySelector(ROOT));

        expect(mock).toHaveBeenCalled();
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(TextInput, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
