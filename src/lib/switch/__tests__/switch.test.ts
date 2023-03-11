import { describe, it } from "vitest";
import { render } from "../../../__tests__/tests.queries";
import Switch from "../Switch.svelte";
import FakeSwitch from "./FakeSwitch.svelte";
import {
  SWITCH,
  SWITCH_BULLET,
  SWITCH_LABEL,
  SWITCH_WRAPPER,
  INPUT,
  ROOT
} from "./switch.selectors.js";

describe("Switch", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-switch-container` class", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(ROOT)).toHaveClass("proi-switch-container");
    });
  });

  describe("input element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(INPUT)).toBeInTheDocument();
    });

    it("should contain `type` attribute with `checkbox` value", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(INPUT)).toHaveAttribute("type", "checkbox");
    });
  });

  describe("switch wrapper element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH_WRAPPER)).toBeInTheDocument();
    });

    it("should contain `proi-switch-wrapper` class", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH_WRAPPER)).toHaveClass("proi-switch-wrapper");
    });
  });

  describe("switch element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH)).toBeInTheDocument();
    });

    it("should contain `proi-switch` class", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH)).toHaveClass("proi-switch");
    });
  });

  describe("switch bullet element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH_BULLET)).toBeInTheDocument();
    });

    it("should contain `proi-switch-bullet` class", () => {
      const { getBySelector } = render(Switch);

      expect(getBySelector(SWITCH_BULLET)).toHaveClass("proi-switch-bullet");
    });
  });

  describe("when `checked` property", () => {
    describe("is set to `true`", () => {
      const checked = true;

      describe("switch element", () => {
        it("should contain `checked` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              checked
            }
          });

          expect(getBySelector(SWITCH)).toHaveClass("checked");
        });
      });
    });

    describe("is set to `false`", () => {
      const checked = false;

      describe("switch element", () => {
        it("should not contain `checked` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              checked
            }
          });

          expect(getBySelector(SWITCH)).not.toHaveClass("checked");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("input element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(Switch, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("disabled");
        });
      });

      describe("switch element", () => {
        it("should contain `disabled` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              disabled
            }
          });

          expect(getBySelector(SWITCH)).toHaveClass("disabled");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("input element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(Switch, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).not.toHaveAttribute("disabled");
        });
      });

      describe("switch element", () => {
        it("should not contain `disabled` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              disabled
            }
          });

          expect(getBySelector(SWITCH)).not.toHaveClass("disabled");
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("switch element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              error
            }
          });

          expect(getBySelector(SWITCH)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("switch element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Switch, {
            props: {
              error
            }
          });

          expect(getBySelector(SWITCH)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      const slot = "test";

      describe("switch label element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FakeSwitch, {
            props: {
              slot
            }
          });

          expect(getBySelector(SWITCH_LABEL)).toBeInTheDocument();
        });

        it("should contain default `slot` as innerHTML", () => {
          const { getBySelector } = render(FakeSwitch, {
            props: {
              slot
            }
          });

          expect(getBySelector(SWITCH_LABEL)).toContainHTML(slot);
        });

        it("should contain `proi-switch-label` class", () => {
          const { getBySelector } = render(FakeSwitch, {
            props: {
              slot
            }
          });

          expect(getBySelector(SWITCH_LABEL)).toHaveClass("proi-switch-label");
        });
      });
    });

    describe("is not set", () => {
      describe("switch label element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(FakeSwitch);

          expect(() => getBySelector(SWITCH_LABEL)).toThrowError(
            "Unable to find element"
          );
        });
      });
    });
  });
});
