import { describe, it, vi } from "vitest";
import { fireEvent, render } from "../../__tests__/tests.queries.js";
import Card from "../Card.svelte";
import {
  ACTION_BUTTON,
  ACTIONS_CONTAINER,
  DESCRIPTION,
  IMAGE,
  ROOT,
  TITLE,
  CANCEL_BUTTON
} from "./card.selectors.js";

describe("Card", () => {
  const title = "Title";
  const description = "Description";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-card` class", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-card");
    });
  });

  describe("title element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toBeInTheDocument();
    });

    it("should contain `proi-card-title` class", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toHaveClass("proi-card-title");
    });

    it("should contain `title` property as innerText", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(TITLE)).toHaveTextContent(title);
    });
  });

  describe("description element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toBeInTheDocument();
    });

    it("should contain `proi-card-description` class", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toHaveClass("proi-card-description");
    });

    it("should contain `description` property as innerText", () => {
      const { getBySelector } = render(Card, {
        props: {
          title,
          description
        }
      });

      expect(getBySelector(DESCRIPTION)).toHaveTextContent(description);
    });
  });

  describe("when `imageSrc` property", () => {
    describe("is set", () => {
      const imageSrc = "path";

      describe("image element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              imageSrc
            }
          });

          expect(getBySelector(IMAGE)).toBeInTheDocument();
        });

        it("should contain `proi-card-image` class", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              imageSrc
            }
          });

          expect(getBySelector(IMAGE)).toHaveClass("proi-card-image");
        });

        it("should contain `background-image` inline style", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              imageSrc
            }
          });

          expect(getBySelector(IMAGE)).toHaveStyle({
            backgroundImage: `url(${imageSrc})`
          });
        });
      });

      describe("and `imageDescription` property", () => {
        describe("is set", () => {
          const imageDescription = "some image";

          describe("image element", () => {
            it("should contain `alt` attribute with `imageDescription` property as value", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  imageSrc,
                  imageDescription
                }
              });

              expect(getBySelector(IMAGE)).toHaveAttribute("alt", imageDescription);
            });
          });
        });

        describe("is not set", () => {
          describe("image element", () => {
            it("should contain `alt` attribute with default value", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  imageSrc
                }
              });

              expect(getBySelector(IMAGE)).toHaveAttribute("alt", "Card image");
            });
          });
        });
      });
    });

    describe("is not set", () => {
      describe("image element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description
            }
          });

          expect(() => getBySelector(IMAGE)).toThrowError();
        });
      });
    });
  });

  describe("when `showAction` property", () => {
    describe("is set to `true`", () => {
      const showAction = true;

      describe("actions container element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              showAction
            }
          });

          expect(getBySelector(ACTIONS_CONTAINER)).toBeInTheDocument();
        });

        it("should contain `proi-card-actions` class", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              showAction
            }
          });

          expect(getBySelector(ACTIONS_CONTAINER)).toHaveClass("proi-card-actions");
        });

        it("should contain 1 child", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              showAction
            }
          });

          expect(getBySelector(ACTIONS_CONTAINER).childElementCount).toBe(1);
        });
      });

      describe("action button element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              showAction
            }
          });

          expect(getBySelector(ACTION_BUTTON)).toBeInTheDocument();
        });

        describe("when click event is triggered", () => {
          it("should dispatch `action` event", async () => {
            const mock = vi.fn();
            const { component, getBySelector } = render(Card, {
              props: {
                title,
                description,
                showAction
              }
            });

            component.$on("action", mock);

            await fireEvent.click(getBySelector(ACTION_BUTTON));

            expect(mock).toHaveBeenCalled();
          });
        });
      });

      describe("and `actionLabel` property", () => {
        describe("is set", () => {
          const actionLabel = "custom action";

          describe("action button element", () => {
            it("should contain `actionLabel` property as innerText", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  showAction,
                  actionLabel
                }
              });

              expect(getBySelector(ACTION_BUTTON)).toHaveTextContent(actionLabel);
            });
          });
        });

        describe("is not set", () => {
          describe("action button element", () => {
            it("should contain default value of `actionLabel` property as innerText", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  showAction
                }
              });

              expect(getBySelector(ACTION_BUTTON)).toHaveTextContent("Action");
            });
          });
        });
      });

      describe("and `showCancelAction` property", () => {
        describe("is set to `true`", () => {
          const showCancelAction = true;

          describe("cancel button element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  showAction,
                  showCancelAction
                }
              });

              expect(getBySelector(CANCEL_BUTTON)).toBeInTheDocument();
            });

            describe("when click event is triggered", () => {
              it("should trigger `cancel` event", async () => {
                const mock = vi.fn();
                const { component, getBySelector } = render(Card, {
                  props: {
                    title,
                    description,
                    showAction,
                    showCancelAction
                  }
                });

                component.$on("cancel", mock);

                await fireEvent.click(getBySelector(CANCEL_BUTTON));

                expect(mock).toHaveBeenCalled();
              });
            });
          });
        });

        describe("is set to `false`", () => {
          const showCancelAction = false;

          describe("cancel button element", () => {
            it("should not be in the document", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  showAction,
                  showCancelAction
                }
              });

              expect(() => getBySelector(CANCEL_BUTTON)).toThrowError();
            });
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const showAction = false;

      describe("actions container element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              showAction
            }
          });

          expect(() => getBySelector(ACTIONS_CONTAINER)).toThrowError();
        });
      });
    });
  });
});
