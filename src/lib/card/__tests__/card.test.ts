import { describe, it, vi } from "vitest";
import { fireEvent, render } from "../../../__tests__/tests.queries.js";
import Card from "../Card.svelte";
import { DESCRIPTION, IMAGE, ROOT, TITLE, CLOSE_BUTTON } from "./card.selectors.js";

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
            it("should contain `title` attribute with `imageDescription` property as value", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  imageSrc,
                  imageDescription
                }
              });

              expect(getBySelector(IMAGE)).toHaveAttribute("title", imageDescription);
            });
          });
        });

        describe("is not set", () => {
          describe("image element", () => {
            it("should contain `title` attribute with default value", () => {
              const { getBySelector } = render(Card, {
                props: {
                  title,
                  description,
                  imageSrc
                }
              });

              expect(getBySelector(IMAGE)).toHaveAttribute("title", "Card image");
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

  describe("when `closable` property", () => {
    describe("is set to `true`", () => {
      const closable = true;

      describe("close button element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              closable
            }
          });

          expect(getBySelector(CLOSE_BUTTON)).toBeInTheDocument();
        });
      });

      describe("when `click` event is trigered", () => {
        it("should dispatch `close` event", async () => {
          const mock = vi.fn();
          const { component, getBySelector } = render(Card, {
            props: {
              title,
              description,
              closable
            }
          });

          component.$on("close", mock);

          await fireEvent.click(getBySelector(CLOSE_BUTTON));

          expect(mock).toHaveBeenCalledTimes(1);
        });

        describe("root element", () => {
          it("should not be in the document", async () => {
            const { getBySelector } = render(Card, {
              props: {
                title,
                description,
                closable
              }
            });

            await fireEvent.click(getBySelector(CLOSE_BUTTON));

            expect(() => getBySelector(ROOT)).toThrowError();
          });
        });
      });
    });

    describe("is set to `false`", () => {
      describe("close button element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Card, {
            props: {
              title,
              description,
              closable: false
            }
          });

          expect(() => getBySelector(CLOSE_BUTTON)).toThrowError();
        });
      });
    });
  });
});
