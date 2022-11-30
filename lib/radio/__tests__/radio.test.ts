import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import { INPUT, RADIO, RADIO_ICON, RADIO_LABEL, ROOT } from "./radio.selectors.js";
import Radio from "../Radio.svelte";
import FakeRadio from "./FakeRadio.svelte";

describe("Radio", () => {
  const group = "value";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-radio-container` class", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-radio-container");
    });
  });

  describe("input element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(INPUT)).toBeInTheDocument();
    });

    it("should contain `type` attribute with `checkbox` value", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(INPUT)).toHaveAttribute("type", "radio");
    });
  });

  describe("radio element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(RADIO)).toBeInTheDocument();
    });

    it("should contain `proi-radio-bullet` class", () => {
      const { getBySelector } = render(Radio, {
        props: {
          group
        }
      });

      expect(getBySelector(RADIO)).toHaveClass("proi-radio-bullet");
    });
  });

  describe("when `value` property", () => {
    describe("is set", () => {
      const value = "value";

      describe("input element", () => {
        it("should contain `value` attribute with `value` property as value", () => {
          const { getBySelector } = render(Radio, {
            props: {
              value,
              group
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("value", value);
        });
      });

      describe("and `group` property", () => {
        describe("have same value", () => {
          const group = value;

          describe("radio element", () => {
            it("should contain `checked` class", () => {
              const { getBySelector } = render(Radio, {
                props: {
                  value,
                  group
                }
              });

              expect(getBySelector(RADIO)).toHaveClass("checked");
            });
          });

          describe("radio icon element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Radio, {
                props: {
                  value,
                  group
                }
              });

              expect(getBySelector(RADIO_ICON)).toBeInTheDocument();
            });
          });
        });

        describe("have different value", () => {
          const group = "different";

          describe("radio element", () => {
            it("should not contain `checked` class", () => {
              const { getBySelector } = render(Radio, {
                props: {
                  value,
                  group
                }
              });

              expect(getBySelector(RADIO)).not.toHaveClass("checked");
            });
          });

          describe("radio icon element", () => {
            it("should not be in the document", () => {
              const { getBySelector } = render(Radio, {
                props: {
                  value,
                  group
                }
              });

              expect(() => getBySelector(RADIO_ICON)).toThrowError(
                "Unable to find element"
              );
            });
          });
        });
      });
    });

    describe("is not set", () => {
      describe("input element", () => {
        it("should contain `value` attribute with empty string as value", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("value", "");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("input element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              disabled
            }
          });

          expect(getBySelector(INPUT)).toHaveAttribute("disabled");
        });
      });

      describe("radio element", () => {
        it("should contain `disabled` class", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              disabled
            }
          });

          expect(getBySelector(RADIO)).toHaveClass("disabled");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("input element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              disabled
            }
          });

          expect(getBySelector(INPUT)).not.toHaveAttribute("disabled");
        });
      });

      describe("radio element", () => {
        it("should not contain `disabled` class", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              disabled
            }
          });

          expect(getBySelector(RADIO)).not.toHaveClass("disabled");
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("radio element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              error
            }
          });

          expect(getBySelector(RADIO)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("radio element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Radio, {
            props: {
              group,
              error
            }
          });

          expect(getBySelector(RADIO)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      const slot = "test";

      describe("radio label element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FakeRadio, {
            props: {
              props: {
                group
              },
              slot
            }
          });

          expect(getBySelector(RADIO_LABEL)).toBeInTheDocument();
        });

        it("should contain default `slot` as innerHTML", () => {
          const { getBySelector } = render(FakeRadio, {
            props: {
              props: {
                group
              },
              slot
            }
          });

          expect(getBySelector(RADIO_LABEL)).toContainHTML(slot);
        });

        it("should contain `proi-radio-label` class", () => {
          const { getBySelector } = render(FakeRadio, {
            props: {
              props: { group },
              slot
            }
          });

          expect(getBySelector(RADIO_LABEL)).toHaveClass("proi-radio-label");
        });
      });
    });

    describe("is not set", () => {
      describe("radio label element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(FakeRadio, {
            props: {
              props: { group }
            }
          });

          expect(() => getBySelector(RADIO_LABEL)).toThrowError("Unable to find element");
        });
      });
    });
  });
});
