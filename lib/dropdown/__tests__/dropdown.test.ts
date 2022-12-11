import type { DropdownOption } from "../dropdown.types.js";
import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import {
  CARRET_DOWN_ICON,
  CARRET_UP_ICON,
  DROPDOWN,
  DROPDOWN_OPTION,
  DROPDOWN_OPTIONS_CONTAINER,
  DROPDOWN_OPTIONS_WRAPPER,
  ROOT
} from "./dropdown.selectors.js";
import Dropdown from "../Dropdown.svelte";
import { fireEvent } from "@testing-library/dom";

describe("Dropdown", () => {
  const options: DropdownOption[] = [
    {
      label: "Option 1",
      disabled: true,
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    },
    {
      label: "Option 3",
      value: 3
    }
  ];

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-dropdown-container` class", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-dropdown-container");
    });
  });

  describe("dropdown element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-dropdown` class", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(DROPDOWN)).toHaveClass("proi-dropdown");
    });
  });

  describe("when `open` property", () => {
    describe("is set to `true`", () => {
      const open = true;

      describe("dropdown element", () => {
        it("should contain `focus` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN)).toHaveClass("focus");
        });
      });

      describe("carret up icon element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(CARRET_UP_ICON)).toBeInTheDocument();
        });

        it("should contain class `carret-up-icon`", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(CARRET_UP_ICON)).toHaveClass("carret-up-icon");
        });
      });

      describe("carret down icon element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(() => getBySelector(CARRET_DOWN_ICON)).toThrowError(
            "Unable to find element"
          );
        });
      });

      describe("dropdown options wrapper", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN_OPTIONS_WRAPPER)).toBeInTheDocument();
        });

        it("should contain `proi-dropdown-options-wrapper` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN_OPTIONS_WRAPPER)).toHaveClass(
            "proi-dropdown-options-wrapper"
          );
        });
      });

      describe("dropdown options container", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN_OPTIONS_CONTAINER)).toBeInTheDocument();
        });

        it("should contain `proi-dropdown-options` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN_OPTIONS_CONTAINER)).toHaveClass(
            "proi-dropdown-options"
          );
        });
      });

      describe("and `options` property", () => {
        describe("has elements", () => {
          describe("dropdown options container", () => {
            it("should contain count of options children", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN_OPTIONS_CONTAINER).childElementCount).toBe(3);
            });
          });

          describe("dropdown option element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN_OPTION)).toBeInTheDocument();
            });

            it("should contain `proi-dropdown-option` class", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN_OPTION)).toHaveClass("proi-dropdown-option");
            });
          });

          describe("when option `disabled` property", () => {
            describe("is set to `true`", () => {
              const options = [
                {
                  label: "Option 1",
                  disabled: true,
                  value: 1
                }
              ];

              describe("dropdown option element", () => {
                it("should contain `disabled` class", () => {
                  const { getBySelector } = render(Dropdown, {
                    props: {
                      options,
                      open
                    }
                  });

                  expect(getBySelector(DROPDOWN_OPTION)).toHaveClass("disabled");
                });
              });
            });

            describe("is set to `false`", () => {
              describe("dropdown option element", () => {
                const options = [
                  {
                    label: "Option 1",
                    value: 1
                  }
                ];

                it("should not contain `disabled` class", () => {
                  const { getBySelector } = render(Dropdown, {
                    props: {
                      options,
                      open
                    }
                  });

                  expect(getBySelector(DROPDOWN_OPTION)).not.toHaveClass("disabled");
                });
              });
            });
          });

          describe("when option `value` property", () => {
            const options = [
              {
                label: "Option 1",
                disabled: true,
                value: 1
              }
            ];

            describe("is equal to `value` property", () => {
              const value = 1;

              describe("dropdown option element", () => {
                it("should contain `selected` class", () => {
                  const { getBySelector } = render(Dropdown, {
                    props: {
                      options,
                      value,
                      open
                    }
                  });

                  expect(getBySelector(DROPDOWN_OPTION)).toHaveClass("selected");
                });
              });
            });

            describe("is different than `value` property", () => {
              const value = 2;

              describe("dropdown option element", () => {
                it("should contain `selected` class", () => {
                  const { getBySelector } = render(Dropdown, {
                    props: {
                      options,
                      value,
                      open
                    }
                  });

                  expect(getBySelector(DROPDOWN_OPTION)).not.toHaveClass("selected");
                });
              });
            });
          });

          describe("on `click` event", () => {
            const options = [
              {
                label: "Option 1",
                value: 1
              }
            ];

            describe("dropdown element", () => {
              it("should contain clicked value as innerText", async () => {
                const { getBySelector } = render(Dropdown, {
                  props: {
                    options,
                    open
                  }
                });

                await fireEvent.click(getBySelector(DROPDOWN_OPTION));

                expect(getBySelector(DROPDOWN)).toHaveTextContent(options[0].label);
              });
            });

            describe("dropdow options wrapper", () => {
              it("should not be in the document", async () => {
                const { getBySelector } = render(Dropdown, {
                  props: {
                    options,
                    open
                  }
                });

                await fireEvent.click(getBySelector(DROPDOWN_OPTION));

                expect(() => getBySelector(DROPDOWN_OPTIONS_CONTAINER)).toThrowError(
                  "Unable to find element"
                );
              });
            });
          });
        });

        describe("is empty", () => {
          const options = [];

          describe("dropdown element", () => {
            it("should contain empty string as innerText", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveTextContent("");
            });

            it("should contain `placeholder` class", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveClass("placeholder");
            });
          });

          describe("dropdown options container", () => {
            it("should have no children", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  open
                }
              });

              expect(getBySelector(DROPDOWN_OPTIONS_CONTAINER).childElementCount).toBe(0);
            });
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const open = false;

      describe("dropdown element", () => {
        it("should not contain `focus` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(DROPDOWN)).not.toHaveClass("focus");
        });
      });

      describe("carret up icon element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(() => getBySelector(CARRET_UP_ICON)).toThrowError(
            "Unable to find element"
          );
        });
      });

      describe("carret down icon element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(CARRET_DOWN_ICON)).toBeInTheDocument();
        });

        it("should contain class `carret-down-icon`", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(getBySelector(CARRET_DOWN_ICON)).toHaveClass("carret-down-icon");
        });
      });

      describe("dropdown options wrapper", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              open
            }
          });

          expect(() => getBySelector(DROPDOWN_OPTIONS_WRAPPER)).toThrowError(
            "Unable to find element"
          );
        });
      });
    });
  });

  describe("when `placeholder` property", () => {
    describe("is set", () => {
      const placeholder = "placeholder";

      describe("and `value` property", () => {
        describe("is not set", () => {
          describe("dropdown element", () => {
            it("should contain `palceholder` as innerText", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  placeholder
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveTextContent(placeholder);
            });

            it("should contain `justify-content` inline style with `space-between` value", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  placeholder
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveStyle(
                "justify-content: space-between;"
              );
            });
          });
        });

        describe("is set", () => {
          const value = 1;

          describe("dropdown element", () => {
            it("should contain default `value` label as innerText", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  placeholder,
                  value
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveTextContent(options[0].label);
            });

            it("should contain `justify-content` inline style with `space-between` value", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  placeholder,
                  value
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveStyle(
                "justify-content: space-between;"
              );
            });
          });
        });
      });
    });

    describe("is not set", () => {
      describe("and `value` property", () => {
        describe("is not set", () => {
          describe("dropdown element", () => {
            it("should contain `justify-content` inline style with `flex-end` value", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveStyle("justify-content: flex-end;");
            });
          });
        });

        describe("is set", () => {
          const value = 1;

          describe("dropdown element", () => {
            it("should contain default `value` label as innerText", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  value
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveTextContent(options[0].label);
            });

            it("should contain `justify-content` inline style with `space-between` value", () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  value
                }
              });

              expect(getBySelector(DROPDOWN)).toHaveStyle(
                "justify-content: space-between;"
              );
            });
          });
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("dropdown element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              error
            }
          });

          expect(getBySelector(DROPDOWN)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("dropdown element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              error
            }
          });

          expect(getBySelector(DROPDOWN)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("dropdown element", () => {
        it("should contain `disabled` class", () => {
          const { getBySelector } = render(Dropdown, {
            props: {
              options,
              disabled
            }
          });

          expect(getBySelector(DROPDOWN)).toHaveClass("disabled");
        });

        describe("on `click` event", () => {
          describe("dropdown options wrapper", () => {
            it("should not be in the document", async () => {
              const { getBySelector } = render(Dropdown, {
                props: {
                  options,
                  disabled
                }
              });

              await fireEvent.click(getBySelector(DROPDOWN));

              expect(() => getBySelector(DROPDOWN_OPTIONS_WRAPPER)).toThrowError(
                "Unable to find element"
              );
            });
          });
        });
      });
    });
  });
});
