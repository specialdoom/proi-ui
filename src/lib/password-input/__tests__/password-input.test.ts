import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { INPUT, ROOT, SHOW_PASSWORD_BUTTON } from "./password-input.selectors.js";
import PasswordInput from "../PasswordInput.svelte";
import { fireEvent } from "@testing-library/svelte";

describe("PasswordInput", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(PasswordInput);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-input-container` class", () => {
      const { getBySelector } = render(PasswordInput);

      expect(getBySelector(ROOT)).toHaveClass("proi-input-container");
    });
  });

  describe("input element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(PasswordInput);

      expect(getBySelector(INPUT)).toBeInTheDocument();
    });

    it("should contain `proi-input` class", () => {
      const { getBySelector } = render(PasswordInput);

      expect(getBySelector(INPUT)).toHaveClass("proi-input");
    });

    it("should have `type` attribute set to `password`", () => {
      const { getBySelector } = render(PasswordInput);

      expect(getBySelector(INPUT)).toHaveAttribute("type", "password");
    });
  });

  describe("when `placeholder` property", () => {
    describe("is set", () => {
      const placeholder = "placholder";

      describe("input element", () => {
        it("should have `placeholder` attribute set to `placeholder` property value", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              placeholder
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("placeholder", placeholder);
        });
      });
    });

    describe("is not set", () => {
      describe("input element", () => {
        it("should contain `placeholder` attribute set to empty string", () => {
          const { getBySelector } = render(PasswordInput);

          expect(getBySelector(INPUT)).toHaveAttribute("placeholder", "");
        });
      });
    });
  });

  describe("when `value` property", () => {
    describe("is set", () => {
      const value = "value";

      describe("input element", () => {
        it("should contain `value` element property with `value` property as value", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              value
            }
          });

          expect((getBySelector(INPUT) as HTMLInputElement).value).toBe(value);
        });
      });

      describe("show password button element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              value
            }
          });

          expect(getBySelector(SHOW_PASSWORD_BUTTON)).toBeInTheDocument();
        });

        describe("when `click` event is triggered", () => {
          describe("and `value` is not shown", () => {
            describe("input element", () => {
              it("should have `type` attribute set to `text`", async () => {
                const { getBySelector } = render(PasswordInput, {
                  props: {
                    value
                  }
                });

                await fireEvent.click(getBySelector(SHOW_PASSWORD_BUTTON));

                expect(getBySelector(INPUT)).toHaveAttribute("type", "text");
              });
            });
          });

          describe("and `value` is shown", () => {
            describe("input element", () => {
              it("should have `type` attribute set to `password`", async () => {
                const { getBySelector } = render(PasswordInput, {
                  props: {
                    value
                  }
                });

                await fireEvent.click(getBySelector(SHOW_PASSWORD_BUTTON));
                await fireEvent.click(getBySelector(SHOW_PASSWORD_BUTTON));

                expect(getBySelector(INPUT)).toHaveAttribute("type", "password");
              });
            });
          });
        });
      });
    });

    describe("is not set", () => {
      describe("input element", () => {
        it("should contain `value` element property with emprty string as value", () => {
          const { getBySelector } = render(PasswordInput);

          expect((getBySelector(INPUT) as HTMLInputElement).value).toBe("");
        });
      });

      describe("show password button element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(PasswordInput);

          expect(() => getBySelector(SHOW_PASSWORD_BUTTON)).toThrowError();
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("input element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              error
            }
          });

          expect(getBySelector(INPUT)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("input element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              error
            }
          });

          expect(getBySelector(INPUT)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("input element", () => {
        it("should contain `disabled` class", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).toHaveClass("disabled");
        });
      });

      describe("input element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("disabled");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("input element", () => {
        it("should not contain `disabled` class", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).not.toHaveClass("disabled");
        });
      });

      describe("input element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(PasswordInput, {
            props: {
              disabled
            }
          });

          expect(getBySelector(INPUT)).not.toHaveAttribute("disabled");
        });
      });
    });
  });
});
