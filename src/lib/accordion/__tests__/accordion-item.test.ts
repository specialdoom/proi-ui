import { describe } from "vitest";
import { cleanup, fireEvent, render } from "../../../__tests__/tests.queries.js";
import AccordionItem from "../AccordionItem.svelte";
import {
  ACCORDION_ITEM_CONTENT,
  ACCORDION_ITEM_CONTROL,
  ACCORDION_ITEM_CONTROL_ICON,
  ROOT
} from "./accordion-item.selectors.js";

afterEach(() => {
  cleanup();
});

describe("AccordionItem", () => {
  const title: string = "Title";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should be a `li` element", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toBeInstanceOf(HTMLLIElement);
    });

    it("should contain `proi-accordion-item` class", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-accordion-item");
    });
  });

  describe("accordion item control element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ACCORDION_ITEM_CONTROL)).toBeInTheDocument();
    });

    it("should contain `proi-accordion-item-control` class", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ACCORDION_ITEM_CONTROL)).toHaveClass(
        "proi-accordion-item-control"
      );
    });

    it("should be a button element", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ACCORDION_ITEM_CONTROL)).toBeInstanceOf(HTMLButtonElement);
    });

    describe("when `click` event is triggered", () => {
      describe("and `expanded` property", () => {
        describe("is set to `false`", () => {
          const expanded = false;

          describe("root element", () => {
            it("should contain `proi-accordion-item-active` class", async () => {
              const { getBySelector } = render(AccordionItem, {
                props: {
                  title,
                  expanded
                }
              });

              await fireEvent.click(getBySelector(ACCORDION_ITEM_CONTROL));

              expect(getBySelector(ROOT)).toHaveClass("proi-accordion-item-active");
            });
          });

          describe("accordion item content element", () => {
            it("should be in the document", async () => {
              const { getBySelector } = render(AccordionItem, {
                props: {
                  title,
                  expanded
                }
              });

              await fireEvent.click(getBySelector(ACCORDION_ITEM_CONTROL));

              expect(getBySelector(ACCORDION_ITEM_CONTENT)).toBeInTheDocument();
            });
          });
        });

        describe("is set to `true`", () => {
          const expanded = true;

          describe("root element", () => {
            it("should not contain `proi-accordion-item-active` class", async () => {
              const { getBySelector } = render(AccordionItem, {
                props: {
                  title,
                  expanded
                }
              });

              await fireEvent.click(getBySelector(ACCORDION_ITEM_CONTROL));

              expect(getBySelector(ROOT)).not.toHaveClass("proi-accordion-item-active");
            });
          });

          describe("accordion item content element", () => {
            it("should not be in the document", async () => {
              const { getBySelector } = render(AccordionItem, {
                props: {
                  title,
                  expanded
                }
              });

              await fireEvent.click(getBySelector(ACCORDION_ITEM_CONTROL));

              expect(() => getBySelector(ACCORDION_ITEM_CONTENT)).toThrowError();
            });
          });
        });
      });
    });
  });

  describe("accordion item control icon element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ACCORDION_ITEM_CONTROL_ICON)).toBeInTheDocument();
    });

    it("should be a svg element", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title
        }
      });

      expect(getBySelector(ACCORDION_ITEM_CONTROL_ICON)).toBeInstanceOf(SVGElement);
    });
  });

  describe("when `title` property", () => {
    describe("is set", () => {
      describe("accordion item control element", () => {
        it("should have `title` property as innerText", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTROL)).toHaveTextContent(title);
        });
      });
    });

    describe("is not set", () => {
      const title = undefined as unknown as string;

      describe("accordion item control element", () => {
        it("should have `title` property as innerText", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTROL)).toHaveTextContent(title);
        });
      });
    });
  });

  describe("when `expanded` property", () => {
    describe("is set to `true`", () => {
      const expanded = true;

      describe("root element", () => {
        it("should have `proi-accordion-item-active` class", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              expanded
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("proi-accordion-item-active");
        });
      });

      describe("accordion item content element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              expanded
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTENT)).toBeInTheDocument();
        });

        it("should contain `proi-accordion-item-content` class", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              expanded
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTENT)).toHaveClass(
            "proi-accordion-item-content"
          );
        });
      });
    });

    describe("is set to `false`", () => {
      const expanded = false;

      describe("root element", () => {
        it("should not contain `proi-accordion-item-active` class", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              expanded
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("proi-accordion-item-active");
        });
      });

      describe("accordion item content element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              expanded
            }
          });

          expect(() => getBySelector(ACCORDION_ITEM_CONTENT)).toThrowError();
        });
      });
    });
  });

  describe("when `disabled` property", () => {
    describe("is set to `true`", () => {
      const disabled = true;

      describe("root element", () => {
        it("should have `proi-accordion-item-disabled` class", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              disabled
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("proi-accordion-item-disabled");
        });
      });

      describe("accordion item control element", () => {
        it("should contain `disabled` attribute", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              disabled
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTROL)).toHaveAttribute("disabled");
        });
      });
    });

    describe("is set to `false`", () => {
      const disabled = false;

      describe("root element", () => {
        it("should not have `proi-accordion-item-disabled` class", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              disabled
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("proi-accordion-item-disabled");
        });
      });

      describe("accordion item control element", () => {
        it("should not contain `disabled` attribute", () => {
          const { getBySelector } = render(AccordionItem, {
            props: {
              title,
              disabled
            }
          });

          expect(getBySelector(ACCORDION_ITEM_CONTROL)).not.toHaveAttribute("disabled");
        });
      });
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(AccordionItem, {
        props: {
          title,
          ...customProps
        }
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
